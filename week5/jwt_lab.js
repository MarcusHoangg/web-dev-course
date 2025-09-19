

const jwt = require('jsonwebtoken');


const SECRET = process.env.JWT_SECRET || 'dev_secret_please_change';


function createJWT() {
  const payload = {
    userId: 123,
    username: 'exampleUser',
    role: 'student'
  };


  const token = jwt.sign(payload, SECRET, { expiresIn: '1h' });

  console.log('=== 1) JWT Token tạo ra ===');
  console.log(token, '\n');

  return token;
}

function verifyJWT(token) {
  jwt.verify(token, SECRET, (err, decoded) => {
    console.log('=== 2) Kết quả verify ===');
    if (err) {
      console.error('❌ JWT Verification Failed:', err.message, '\n');
    } else {
      console.log('✅ JWT Verified. Decoded payload:', decoded, '\n');
    }
  });
}


function decodeJWT(token) {
  const decoded = jwt.decode(token);
  console.log('=== 3) Decode (không verify) ===');
  console.log(decoded, '\n');
}


(function main() {
  const token = createJWT();
  verifyJWT(token);
  decodeJWT(token);


})();
