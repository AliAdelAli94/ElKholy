import { ReleatedProduct } from './ReleatedProduct';

export class Product {
    Id: number;
    Title: string;
    Description: string;
    Seasons: string[];
    NumberofPallets: string;
    ContainerType: string;
    AvailableCounts: string;
    ReleatedProducts: ReleatedProduct[];
    Packing: string[];
    CartonNetWeight: string;
    NoOfCartons: string;
    ImageURL: string;
}