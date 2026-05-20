import express from 'express';
import multer from 'multer';

import { createService, deleteService, getServiceById, getServices, updateService } from '../controllers/serviceController.js';
import { uploadToCloudinary } from '../utils/cloudinary.js';

const upload  = multer({ dest: "temp" });
const serviceRouter = express.Router();

serviceRouter.get("/", getServices);
serviceRouter.get("/:id", getServiceById);

serviceRouter.post('/', upload.single("image"), createService);
serviceRouter.put("/:id", upload.single("image"), updateService);

serviceRouter.delete("/:id", deleteService);

export default serviceRouter;


