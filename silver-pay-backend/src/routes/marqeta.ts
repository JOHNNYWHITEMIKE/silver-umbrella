import express from 'express';

const router = express.Router();

// Placeholder Marqeta routes - implement actual Marqeta integration
router.post('/card', (req, res) => {
  res.json({ success: true, message: 'Card created', cardId: 'mock-card-id' });
});

router.get('/cards', (req, res) => {
  res.json({ cards: [] });
});

export { router as marqetaRoutes };