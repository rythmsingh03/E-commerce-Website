import express from 'express';
import { addProduct, listProduct, deleteProduct, singleProduct } from '../controllers/productController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

productRouter.post ('/add',adminAuth, upload.fields([{name:'img1', maxCount:1},{name:'img2',maxCount:1},{name:'img3',maxCount:1},{name:'img4',maxCount:1}]), addProduct);
productRouter.get('/list',adminAuth, listProduct);
productRouter.post('/delete', deleteProduct);
productRouter.post('/single', singleProduct);

export default productRouter;