import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json({ error: "Message is empty." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Pacheco's Website <onboarding@resend.dev>",
    to: "pachecoshardwoodfloor@gmail.com",
    subject: "New Chat Message from Website",
    html: `
      <h2>New Chat Message</h2>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
