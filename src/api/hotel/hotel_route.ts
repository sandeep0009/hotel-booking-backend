import { Router } from "express";
import { createHotel, deleteHotel, getAllHotel, getSingleHotel, updateHotel } from "./hotel_controller";


const router=Router();

router.post('/create-hotel',createHotel);
router.get('/get-all-hotel',getAllHotel);
router.get('/get-single-hotel/:id',getSingleHotel);
router.put('/update-hotel/:id',updateHotel);
router.delete('/delete-hotel/:id',deleteHotel);

export default router;