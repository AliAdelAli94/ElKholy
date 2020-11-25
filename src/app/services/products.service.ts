import { Injectable } from '@angular/core';
import { Category } from '../Models/Category';
import { Product } from '../Models/Product';
import { Observable } from 'rxjs';
import { FeaturedProducts } from '../Models/featuredProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  itemInList: boolean;
  public CategoriesWithProducts: Category[];
  public FeaturedProdusts: FeaturedProducts[];

  constructor() {
    this.CategoriesWithProducts = [
      {
        Id: 1,
        Title: "vegetables",
        Products: [
          {
            Id: 1,
            Title: "RedOnions",
            ImageURL: "/assets/images/productsImages/RedOnions.png",
            AvailableCounts: "RedOnionsAvailableCounts",
            Description: "RedOnionsDescription",
            ContainerType: "RedOnionsContainerType",
            NumberofPallets: "RedOnionsNumberofPallets",
            ReleatedProducts: [{ Id: 3, Title: "Onionyellow" }, { Id: 4, Title: "Potatos" }],
            NoOfCartons: null,
            Packing: [],
            CartonNetWeight: null,
            Seasons: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

          }, {
            Id: 3,
            ImageURL: "/assets/images/productsImages/Onionyellow.png",
            Title: "Onionyellow",
            AvailableCounts: "OnionyellowAvailableCounts",
            Description: "OnionyellowDescription",
            ContainerType: null,
            NumberofPallets: null,
            NoOfCartons: null,
            ReleatedProducts: [{ Id: 1, Title: "RedOnions" }, { Id: 4, Title: "Potatos" }],
            Packing: ["OnionyellowPacking1", "OnionyellowPacking2"],
            CartonNetWeight: "OnionyellowNetWeight",
            Seasons: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"]
          }, {
            Id: 4,
            ImageURL: "/assets/images/productsImages/Potatos.jpg",
            Title: "Potatos",
            AvailableCounts: null,
            Description: "PotatosDescription",
            ContainerType: null,
            NoOfCartons: null,
            NumberofPallets: null,
            ReleatedProducts: [{ Id: 1, Title: "RedOnions" },  { Id: 3, Title: "Onionyellow" }],
            Packing: ["PotatosPacking1", "PotatosPacking2"],
            CartonNetWeight: null,
            Seasons: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]

          }
        ]
      },
      {
        Id: 2,
        Title: "FRUIT",
        Products: [
          {
            Id: 7,
            ImageURL: "/assets/images/productsImages/pomegranate.png",
            Title: "Pomegranate",
            AvailableCounts: "PomegranateAvailableCounts",
            CartonNetWeight: "PomegranateNetWeight",
            ContainerType: "PomegranateContainerType",
            Description: "PomegranateDescription",
            NumberofPallets: "PomegranateNumberofPallets",
            Packing: ["PomegranatePacking1", "PomegranatePacking2"],
            ReleatedProducts: [],
            NoOfCartons: null,
            Seasons: ["Sep", "Oct", "Nov"]
          }
        ]
      },
      {
        Id: 3,
        Title: "Citrus",
        Products: [
          {
            Id: 10,
            ImageURL: "/assets/images/productsImages/lemon.png",
            Title: "Lemon",
            AvailableCounts: "LemonAvailableCounts",
            CartonNetWeight: "LemonNetWeight",
            ContainerType: "LemonContainerType",
            Description: "LemonDescription",
            NumberofPallets: "LemonNumberofPallets",
            Packing: ["LemonPacking1", "LemonPacking2"],
            ReleatedProducts: [{ Id: 11, Title: "Valenciaorange" }],
            Seasons: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Dec"],
            NoOfCartons: "LemonNoOfCartons"
          },
          {
            Id: 11,
            ImageURL: "/assets/images/productsImages/valencia.png",
            Title: "Valenciaorange",
            AvailableCounts: "ValenciaorangeAvailableCounts",
            CartonNetWeight: "ValenciaorangeNetWeight",
            ContainerType: "ValenciaorangeContainerType",
            Description: "ValenciaorangeDescription",
            NumberofPallets: "ValenciaorangeNumberofPallets",
            Packing: ["ValenciaorangePacking1", "ValenciaorangePacking2"],
            ReleatedProducts: [{ Id: 10, Title: "Lemon" }],
            Seasons: ["Jan", "Feb", "Mar", "Apr", "May"],
            NoOfCartons: "ValenciaorangeNoOfCartons"

          }
        ]
      }
    ];

    this.FeaturedProdusts = [
      { Id: 3, Title: "Onionyellow" },
      { Id: 4, Title: "Potatos" },
      { Id: 10, Title: "Lemon" },
      { Id: 7, Title: "Pomegranate" },
      { Id: 11, Title: "Valenciaorange" }
    ]
  }
  getProductbyId(id: number): Product {
    this.itemInList = false;
    for (let i = 0; i < this.CategoriesWithProducts.length; i++) {
      this.itemInList = this.CategoriesWithProducts[i].Products.filter(c => c.Id == id).length > 0 ? true : false;
      if (this.itemInList == true)
        return this.CategoriesWithProducts[i].Products.filter(c => c.Id == id)[0];
    }
  }
}