const adminAuth = async (req, res, next) => {
    try {
      const { token } = req.headers;
      if (!token) {
        return res.json({ success: false, message: 'Token is missing' });
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (!decoded) {
        return res.json({ success: false, message: 'Token verification failed' });
      }
      if (decoded.email !== process.env.ADMIN_EMAIL || decoded.password !== process.env.ADMIN_PASSWORD) {
        return res.json({ success: false, message: 'Incorrect admin credentials' });
      }
      next();
    } catch (error) {
      console.log(error);
      return res.json({ success: false, message: 'An error occurred' });
    }
  };