import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ error: 'Invalid token' });
  }
};

router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

router.get("/favorites", authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user.favorites);
});

router.post("/favorites", authMiddleware, async (req, res) => {
  const { item } = req.body;
  const user = await User.findById(req.user.id);
  
  // prevent duplicates
  if (!user.favorites.some(fav => fav.id === item.id)) {
  user.favorites.push({
    ...item,
    media_type: item.media_type || "movie", 
  });
    await user.save();
  }

  res.json(user.favorites);
});

router.delete("/favorites/:id", authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id);
  user.favorites = user.favorites.filter(fav => fav.id !== req.params.id);
  await user.save();
  res.json(user.favorites);
});

export default router;