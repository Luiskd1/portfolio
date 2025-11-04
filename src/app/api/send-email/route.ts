import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Validación de datos del formulario
interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function validateEmailData(data: any): data is EmailData {
  return (
    typeof data.name === 'string' && data.name.trim().length >= 2 &&
    typeof data.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
    typeof data.subject === 'string' && data.subject.trim().length >= 3 &&
    typeof data.message === 'string' && data.message.trim().length >= 10
  );
}

export async function POST(req: NextRequest) {
  try {
    // Parsear el body
    const data = await req.json();

    // Validar datos
    if (!validateEmailData(data)) {
      return NextResponse.json(
        { error: 'Invalid data. Please check all fields.' },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = data;

    console.log('📧 Processing email from:', email);

    // Crear transporter
    const transporter = nodemailer.createTransport({
      service: 'zoho',
      host: 'smtpro.zoho.in',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER || 'santana257@zohomail.com',
        pass: process.env.EMAIL_PASS || '*pablo327',
      },
    });

    // Verificar conexión
    await transporter.verify();
    console.log('✅ SMTP connection verified');

    // Configurar email
    const mailOptions = {
      from: process.env.EMAIL_USER || 'santana257@zohomail.com',
      to: process.env.EMAIL_TO || 'luis12w@hotmail.com',
      subject: `Portfolio Contact: ${name} - ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #4D5BCE; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
              .content { background: #f4f4f4; padding: 20px; border-radius: 0 0 5px 5px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #4D5BCE; }
              .value { margin-top: 5px; padding: 10px; background: white; border-radius: 3px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>🔔 New Contact from Portfolio</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">📧 Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">📌 Subject:</div>
                  <div class="value">${subject}</div>
                </div>
                <div class="field">
                  <div class="label">💬 Message:</div>
                  <div class="value">${message}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact from Portfolio

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
      `,
    };

    // Enviar email
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        messageId: info.messageId 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('❌ Error sending email:', error);
    
    // Determinar tipo de error
    let errorMessage = 'Failed to send email. Please try again later.';
    let statusCode = 500;

    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please contact support.';
      console.error('🔐 Authentication error - check email credentials');
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Could not connect to email server. Please try again.';
      console.error('🔌 Connection error - check SMTP settings');
    }

    return NextResponse.json(
      { 
        success: false,
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: statusCode }
    );
  }
}

// Bloquear otros métodos HTTP
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
