import express from 'express'
import { PublicAPI } from '../controllers/index.js'
const router = express.Router();

router.get('/', PublicAPI.rootAPI)
router.get('/pricechange/', PublicAPI.markets)
router.get('/pricechange/:stock', PublicAPI.markets)

export { router }

