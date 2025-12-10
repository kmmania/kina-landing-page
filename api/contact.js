export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  // CONFIGURATION:
  // 1. BREVO_API_KEY: Votre clé API Brevo (Vercel Env Var)
  // 2. CONTACT_EMAIL: L'email qui reçoit les messages (Vercel Env Var) -> C'est là que vous recevrez les notifs.
  // 3. SENDER_EMAIL: Par défaut 'no-reply@kmmania.com' car votre domaine est validé.
  
  const apiKey = process.env.BREVO_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  // Utilisation de votre domaine validé pour assurer que le mail n'arrive pas en spam
  const senderEmail = process.env.SENDER_EMAIL || "no-reply@kmmania.com";

  if (!apiKey || !contactEmail) {
    console.error('Missing configuration. Please set BREVO_API_KEY and CONTACT_EMAIL in Vercel.');
    return res.status(500).json({ message: 'Server configuration error' });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: {
          name: "KINA Notification",
          email: senderEmail 
        },
        to: [
          {
            email: contactEmail,
            name: "KINA Admin"
          }
        ],
        // C'est ici que la magie opère : quand vous ferez "Répondre", ça ira au visiteur
        replyTo: {
          email: email,
          name: name
        },
        subject: `[KINA] New message from ${name}`,
        htmlContent: `
          <html>
            <body style="font-family: sans-serif; padding: 20px; color: #333;">
              <h2 style="color: #6A8EAE;">Nouveau message reçu</h2>
              <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px solid #eee;">
                <p><strong>De :</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
              </div>
              <br/>
              <p><strong>Message :</strong></p>
              <div style="background: #fff; padding: 15px; border-left: 4px solid #99C794;">
                <p style="white-space: pre-wrap; margin: 0;">${message}</p>
              </div>
            </body>
          </html>
        `
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API Error:', errorData);
      throw new Error('Failed to send email via Brevo');
    }

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('Handler Error:', error);
    return res.status(500).json({ message: 'Error sending email', error: error.message });
  }
}