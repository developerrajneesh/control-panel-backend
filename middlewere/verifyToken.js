


export function verifyToken(req, res, next) {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(403).json({ message: 'Token not provided' });
    }
  
       jwt.verify(token, 'yourSecretKey', (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
  
      // Attach the decoded user information to the request object for further use
      req.user = decoded;
      next();
    });
  }