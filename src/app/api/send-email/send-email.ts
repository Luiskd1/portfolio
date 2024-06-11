// // pages/api/send-email.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { POST } from './route'; // Importa la función post desde route.ts
// import { NextResponse } from 'next/server';

// export default async function handler(req: NextResponse, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     return POST(req, res); // Llama a la función post para manejar la solicitud POST
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }
