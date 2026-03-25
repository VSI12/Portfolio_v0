import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: 'All fields are required.' }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'victoriliya15@gmail.com',
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
