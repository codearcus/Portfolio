import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER, // your Gmail address (authenticated user)
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Message from Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}

// import { Resend } from "resend";

// const resend = new Resend("re_3vBCLDob_NeSxMd8ueAYZmexkLKpb4YcB");

// export async function POST(req) {
//   try {
//     console.log("Received new POST request for sending email");

//     const body = await req.json();
//     console.log("Request body parsed:", body);

//     const { name, email, phone, message } = body;

//     console.log(`Attempting to send email from: ${name} <${email}>`);

//     await resend.emails.send({
//       from: `${name} <${email}>`,
//       to: `${process.env.EMAIL_USER}`,
//       subject: `New Contact Form Message from ${name}`,
//       html: `
//         <h2>New message from contact form</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Message:</strong><br/>${message}</p>
//       `,
//     });

//     console.log("Email sent successfully");

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (err) {
//     console.error("Error sending email:", err);
//     return new Response(JSON.stringify({ error: err.message }), {
//       status: 500,
//     });
//   }
// }
