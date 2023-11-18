// apartments.model.ts
import { Schema, model } from "mongoose";
const apartmentSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    zone: { type: String, required: true },
    price: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    floor: { type: Number, required: true },
    deliveryYear: { type: Number, required: true },
    compound: { type: String, required: true },
    developer: { type: String, required: true },
    saleType: { type: String, required: true },
    size: { type: Number, required: true },
});
export default model("Apartment", apartmentSchema);
