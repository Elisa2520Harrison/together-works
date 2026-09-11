import { Resend } from 'resend'
import type { VercelRequest, VercelResponse } from '@vercel/node'

const resend = new Resend(process.env.RESEND_API_KEY)

interface InvitationRequest {
    recipientEmail: string
    recipientName: string
    opportunityTitle: string
    opportunityDescription: string
    location: string
    deadline: string
    matchScore: number
    matchedReasons: string[]
}

export default async function handler(
    req: VercelRequest,
    res: VercelResponse,
) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed',
        })
    }

    try {
        const body = req.body as InvitationRequest

        if (
            !body.recipientEmail ||
            !body.recipientName ||
            !body.opportunityTitle
        ) {
            return res.status(400).json({
                error: 'Missing required invitation details',
            })
        }

        const {
            recipientEmail,
            recipientName,
            opportunityTitle,
            opportunityDescription,
            location,
            deadline,
            matchScore,
            matchedReasons,
        } = body

        const reasons = matchedReasons
            .map(
                (reason) =>
                    `<li style="margin-bottom: 8px;">✓ ${reason}</li>`,
            )
            .join('')

        const { data, error } = await resend.emails.send({
            from: 'TogetherWorks <onboarding@resend.dev>',
            to: [recipientEmail],
            subject:
                "You've been invited to an opportunity on TogetherWorks",
            html: `
                <!DOCTYPE html>
                <html>
                    <body style="margin: 0; padding: 0; background: #f8f9fc; font-family: Arial, sans-serif;">
                        <div style="max-width: 600px; margin: 40px auto; background: white; border-radius: 16px; overflow: hidden; border: 1px solid #e5e7eb;">
                            <div style="padding: 32px; background: #5b3df5; color: white;">
                                <h1 style="margin: 0 0 8px; font-size: 28px;">
                                    TogetherWorks
                                </h1>
                                <p style="margin: 0; font-size: 15px; opacity: 0.9;">
                                    Better connections, better opportunities.
                                </p>
                            </div>

                            <div style="padding: 32px;">
                                <p style="font-size: 16px; color: #171725;">
                                    Hi ${recipientName},
                                </p>

                                <p style="font-size: 16px; line-height: 1.6; color: #4b5563;">
                                    You've been invited to an opportunity on TogetherWorks because your capabilities appear to be a strong match.
                                </p>

                                <div style="padding: 20px; background: #f8f9fc; border-radius: 12px; margin: 24px 0;">
                                    <h2 style="margin: 0 0 12px; color: #171725;">
                                        ${opportunityTitle}
                                    </h2>

                                    <p style="color: #4b5563; line-height: 1.6;">
                                        ${opportunityDescription}
                                    </p>

                                    <p style="margin: 8px 0; color: #4b5563;">
                                        <strong>Location:</strong> ${location}
                                    </p>

                                    <p style="margin: 8px 0; color: #4b5563;">
                                        <strong>Deadline:</strong> ${deadline}
                                    </p>

                                    <p style="margin: 8px 0; color: #4b5563;">
                                        <strong>Match score:</strong> ${matchScore}%
                                    </p>
                                </div>

                                <h3 style="color: #171725;">
                                    Why you were matched
                                </h3>

                                <ul style="padding-left: 20px; color: #4b5563; line-height: 1.6;">
                                    ${reasons}
                                </ul>

                                <div style="margin-top: 32px; padding: 20px; background: #f5f3ff; border-radius: 12px;">
                                    <p style="margin: 0; color: #5b3df5; font-weight: 600;">
                                        TogetherWorks helps people turn complementary capabilities into real opportunities.
                                    </p>
                                </div>
                            </div>

                            <div style="padding: 24px 32px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 13px;">
                                You're receiving this email because someone invited you to an opportunity on TogetherWorks.
                            </div>
                        </div>
                    </body>
                </html>
            `,
        })

        if (error) {
            console.error('Resend error:', error)

            return res.status(500).json({
                error: 'Failed to send invitation email',
            })
        }

        return res.status(200).json({
            success: true,
            id: data?.id,
        })
    } catch (error) {
        console.error('Invitation API error:', error)

        return res.status(400).json({
            error: 'Invalid invitation request',
        })
    }
}