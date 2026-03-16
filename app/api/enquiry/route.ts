import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    if (!clientPromise) {
      return NextResponse.json({ error: "Database not configured" }, { status: 500 });
    }
    const dbName = process.env.MONGODB_DB || "lpu";
    const collectionName = process.env.MONGODB_COLLECTION || "leads";
    const body = await req.json();

    const name     = typeof body?.name     === "string" ? body.name.trim()     : "";
    const email    = typeof body?.email    === "string" ? body.email.trim()    : "";
    const phone    = typeof body?.phone    === "string" ? body.phone.trim()    : "";
    const program  = typeof body?.program  === "string" ? body.program.trim()  : "";
    const message  = typeof body?.message  === "string" ? body.message.trim()  : "";
    const state    = typeof body?.state    === "string" ? body.state.trim()    : "";

    // ✅ source = URL, campaign, university
    const source     = typeof body?.source     === "string" ? body.source.trim()     : "";
    const campaign   = typeof body?.campaign   === "string" ? body.campaign.trim()   : "";
    const university = typeof body?.university === "string" ? body.university.trim() : "Lovely Professional University";

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "name, email, phone are required" }, { status: 400 });
    }

    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      return NextResponse.json({ error: "Please enter a valid 10-digit phone number." }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(dbName);

    const doc = {
      name,
      email: email.toLowerCase(),
      phone: cleanPhone,
      program:    program    || null,
      message:    message    || null,
      state:      state      || null,
      source:     source     || null,      
      campaign:   campaign   || null,      
      university: university,              
      createdAt: new Date(),
    };

    const result = await db.collection(collectionName).insertOne(doc);

    // ✅ Send lead to CRM
    const apiEndpoint = process.env.API_ENDPOINT;
    if (apiEndpoint) {
      try {
        const crmResponse = await fetch(apiEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email:      email.toLowerCase(),
            phone:      cleanPhone,
            program:    program    || null,
            message:    message    || null,
            state:      state      || null,
            source:     source     || null,     
            campaign:   campaign   || null,     
            university: university,             
          }),
        });

        if (!crmResponse.ok) {
          const errorData = await crmResponse.json().catch(() => null);
          console.error("CRM API Error:", {
            status: crmResponse.status,
            statusText: crmResponse.statusText,
            errorData,
          });
        }
      } catch (crmErr) {
        console.error("Failed to send lead to CRM:", crmErr);
      }
    }

    return NextResponse.json({ ok: true, id: result.insertedId }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export const dynamic = "force-dynamic";