export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ valid: false, msg: 'Method Not Allowed' });
  }

  const { code } = req.body || {};

  const VALID_CODES = [
    '11442255',
    '22558866',
    '11224488',
    '55447788'
  ];

  if (VALID_CODES.includes(String(code).trim())) {
    return res.status(200).json({ valid: true });
  }

  return res.status(200).json({ valid: false });
}
