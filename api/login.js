// Pure Vercel Serverless Function
// Replaces the Express server for the login endpoint

const USERS = [
  { username: 'admin', password: 'password' },
];

export default function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { username, password } = req.body;

  const user = USERS.find(u => u.username === username && u.password === password);

  if (user) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ success: false, message: 'Invalid username or password.' });
  }
}
