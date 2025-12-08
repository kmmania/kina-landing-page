import type {VercelRequest, VercelResponse} from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({error: 'Method not allowed'});
    }

    const {email, source, firstName} = req.body;

    if (!email || !email.includes('@')) {
        return res.status(400).json({error: 'Invalid Email'});
    }

    try {
        const response = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': process.env.BREVO_API_KEY as string,
            },
            body: JSON.stringify({
                email: email,
                updateEnabled: true,
                attributes: {
                    SOURCE: source || 'waitlist',
                    FIRSTNAME: firstName
                },
                listIds: [2],
            }),
        });

        if (response.ok) {
            return res.status(200).json({success: true});
        } else {
            const errorData = await response.json();
            if (errorData.code === 'duplicate_parameter') {
                return res.status(200).json({success: true, message: "Already subscribed."});
            }
            return res.status(500).json({error: errorData.message});
        }
    } catch (error) {
        console.error('Brevo error :', error);
        return res.status(500).json({error: 'Internal error'});
    }
}