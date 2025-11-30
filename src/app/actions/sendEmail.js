"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ name, email, message }) {
  try {
    const data = await resend.emails.send({
      from: "Grandi’Ose <contact@grandi-ose.org>", // Mets ton domaine vérifié ici !
      to: "grandi-ose@outlook.com",
      subject: "Nouveau message depuis le formulaire du site Grandi-Ose",
      reply_to: email,
      text: `
        Nom : ${name}
        Email : ${email}
        Message :
        ${message}
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Erreur envoi email Resend :", error);
    return { success: false };
  }
}
