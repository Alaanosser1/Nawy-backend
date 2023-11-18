import express, { Request, Response } from "express";
import ApartmentModel, { IApartment } from "../models/apartments.model";

const router = express.Router();

// Endpoint to add a new apartment
router.post("/addApartment", async (req: Request, res: Response) => {
  try {
    const {
      title,
      description,
      zone,
      price,
      bedrooms,
      bathrooms,
      floor,
      deliveryYear,
      compound,
      developer,
      saleType,
      size,
    } = req.body;

    const newApartment: IApartment = new ApartmentModel({
      title,
      description,
      zone,
      price,
      bedrooms,
      bathrooms,
      floor,
      deliveryYear,
      compound,
      developer,
      saleType,
      size,
    });

    const savedApartment = await newApartment.save();
    res.json(savedApartment);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to get details of a specific apartment
router.get(
  "/getApartmentDetails/:apartmentId",
  async (req: Request, res: Response) => {
    try {
      const apartmentId = req.params.apartmentId;
      const apartment = await ApartmentModel.findById(apartmentId);
      console.log(apartmentId, "LOL");

      if (!apartment) {
        return res.status(404).json({ error: "Apartment not found" });
      }

      res.json(apartment);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// Endpoint to list all apartments
router.get("/listApartments", async (req: Request, res: Response) => {
  try {
    const apartments = await ApartmentModel.find();
    res.json(apartments);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
