// apartments.model.ts
import { Document, Schema, model } from "mongoose";

export interface IApartment extends Document {
  title: string;
  description: string;
  zone: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  floor: number;
  deliveryYear: number;
  compound: string;
  developer: string;
  saleType: string;
  size: number;
}

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

export default model<IApartment>("Apartment", apartmentSchema);
