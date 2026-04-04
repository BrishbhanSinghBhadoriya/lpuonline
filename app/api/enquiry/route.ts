import { NextRequest, NextResponse } from "next/server";
import { after } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    const mongoPromise = clientPromise;
    if (!mongoPromise) {
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

    const emailLower = email.toLowerCase();
    const doc = {
      name,
      email: emailLower,
      phone: cleanPhone,
      program:    program    || null,
      message:    message    || null,
      state:      state      || null,
      source:     source     || null,
      campaign:   campaign   || null,
      university: university,
      createdAt: new Date(),
    };

    const crmPayload = {
      name,
      email: emailLower,
      phone: cleanPhone,
      program:    program    || null,
      message:    message    || null,
      state:      state      || null,
      source:     source     || null,
      campaign:   campaign   || null,
      university: university,
    };

    after(async () => {
      try {
        const client = await mongoPromise;
        const db = client.db(dbName);
        await db.collection(collectionName).insertOne(doc);

        const apiEndpoint = process.env.API_ENDPOINT;
        if (!apiEndpoint) return;

        try {
          const crmResponse = await fetch(apiEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(crmPayload),
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
      } catch (bgErr) {
        console.error("Background lead save failed:", bgErr);
      }
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export const dynamic = "force-dynamic";