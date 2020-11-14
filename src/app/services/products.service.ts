import { Injectable } from '@angular/core';
import { Category } from '../Models/Category';
import { Product } from '../Models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  itemInList: boolean;
  public CategoriesWithProducts: Category[];

  constructor() {
    this.CategoriesWithProducts = [{
      Id: 1,
      Title: "vegetables",
      Products: [{
        Id: 1,
        Title: "RedOnions",
        AvailableCounts: "RedOnionsAvailableCounts",
        Description: "RedOnionsDescription",
        ContainerType: "RedOnionsContainerType",
        NumberofPallets: "RedOnionsNumberofPallets",
        ReleatedProducts: [2, 3, 4],
        NoOfCartons: "",
        Images: [],
        Packing: [],
        CartonNetWeight: "",
        Seasons: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

      }, {
        Id: 2,
        Title: "RedOnions",
        AvailableCounts: "OnionwhiteAvailableCounts",
        Description: "OnionwhiteDescription",
        ContainerType: "OnionwhiteContainerType",
        NumberofPallets: "OnionwhiteNumberofPallets",
        ReleatedProducts: [1, 3, 4],
        Images: [],
        NoOfCartons: "",
        Packing: [],
        CartonNetWeight: "",
        Seasons: ["May", "Jun", "Jul"]

      }, {
        Id: 3,
        Title: "Onionyellow",
        AvailableCounts: "OnionyellowAvailableCounts",
        Description: "OnionyellowDescription",
        ContainerType: "",
        NumberofPallets: "",
        NoOfCartons: "",
        ReleatedProducts: [1, 2, 4],
        Images: [],
        Packing: ["OnionyellowPacking1", "OnionyellowPacking2"],
        CartonNetWeight: "OnionyellowNetWeight",
        Seasons: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"]
      }, {
        Id: 4,
        Title: "Potatos",
        AvailableCounts: "",
        Description: "PotatosDescription",
        ContainerType: "",
        NoOfCartons: "",
        NumberofPallets: "",
        ReleatedProducts: [1, 2, 3],
        Images: [],
        Packing: ["PotatosPacking1", "PotatosPacking2"],
        CartonNetWeight: "",
        Seasons: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]

      }
      ]
    }, {
      Id: 2,
      Title: "FRUIT",
      Products: [{
        Id: 5,
        Title: "GrapessugraoneTitle",
        AvailableCounts: "GrapessugraoneAvailableCounts",
        CartonNetWeight: "",
        ContainerType: "",
        Images: [],
        Description: "",
        NoOfCartons: "",
        NumberofPallets: "GrapessugraoneNumberofPallets",
        Packing: ["GrapessugraonePacking1", "GrapessugraonePacking2"],
        ReleatedProducts: [6, 7, 8, 9],
        Seasons: ["May", "Jun", "Jul"]
      }, {
        Id: 6,
        Title: "GrapesredglobeTitle",
        AvailableCounts: "",
        CartonNetWeight: "",
        ContainerType: "",
        Images: [],
        Description: "GrapesredglobeDescription",
        NumberofPallets: "",
        NoOfCartons: "",
        Packing: ["GrapesredglobePacking1", "GrapesredglobePacking2"],
        ReleatedProducts: [5, 7, 8, 9],
        Seasons: ["Jul", "Aug"]
      }, {
        Id: 7,
        Title: "Pomegranate",
        AvailableCounts: "PomegranateAvailableCounts",
        CartonNetWeight: "PomegranateNetWeight",
        ContainerType: "PomegranateContainerType",
        Images: [],
        Description: "PomegranateDescription",
        NumberofPallets: "PomegranateNumberofPallets",
        Packing: ["PomegranatePacking1", "PomegranatePacking2"],
        ReleatedProducts: [5, 6, 8, 9],
        NoOfCartons: "",
        Seasons: ["Sep", "Oct", "Nov"]
      }, {
        Id: 8,
        Title: "Grapescrimson",
        AvailableCounts: "",
        CartonNetWeight: "",
        ContainerType: "",
        Images: [],
        NoOfCartons: "",
        Description: "GrapescrimsonDescription",
        NumberofPallets: "",
        Packing: ["GrapescrimsonPacking1", "GrapescrimsonPacking2"],
        ReleatedProducts: [5, 6, 7, 9],
        Seasons: ["Aug", "Sep"]
      }, {
        Id: 9,
        Title: "Grapesflame",
        AvailableCounts: "",
        CartonNetWeight: "",
        ContainerType: "",
        Images: [],
        NoOfCartons: "",
        Description: "GrapesflameDescription",
        NumberofPallets: "GrapesflameNumberofPallets",
        Packing: ["GrapesflamePacking1", "GrapesflamePacking2"],
        ReleatedProducts: [5, 6, 7, 8],
        Seasons: ["Jun", "Jul"]
      }
      ]
    }, {
      Id: 3,
      Title: "Citrus",
      Products: [{
        Id: 10,
        Title: "Lemon",
        AvailableCounts: "LemonAvailableCounts",
        CartonNetWeight: "LemonNetWeight",
        ContainerType: "LemonContainerType",
        Images: [],
        Description: "LemonDescription",
        NumberofPallets: "LemonNumberofPallets",
        Packing: ["LemonPacking1", "LemonPacking2"],
        ReleatedProducts: [11, 12, 13, 14],
        Seasons: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Dec"],
        NoOfCartons: "LemonNoOfCartons"
      }, {
        Id: 11,
        Title: "Valenciaorange",
        AvailableCounts: "ValenciaorangeAvailableCounts",
        CartonNetWeight: "ValenciaorangeNetWeight",
        ContainerType: "ValenciaorangeContainerType",
        Images: [],
        Description: "ValenciaorangeDescription",
        NumberofPallets: "ValenciaorangeNumberofPallets",
        Packing: ["ValenciaorangePacking1", "ValenciaorangePacking2"],
        ReleatedProducts: [10, 12, 13, 14],
        Seasons: ["Jan", "Feb", "Mar", "Apr", "May"],
        NoOfCartons: "ValenciaorangeNoOfCartons"

      }, {
        Id: 12,
        Title: "Navalorange",
        AvailableCounts: "NavalorangeAvailableCounts",
        CartonNetWeight: "NavalorangeNetWeight",
        ContainerType: "NavalorangeContainerType",
        Images: [],
        Description: "NavalorangeDescription",
        NumberofPallets: "NavalorangeNumberofPallets",
        Packing: ["NavalorangePacking1", "NavalorangePacking2"],
        ReleatedProducts: [10, 11, 13, 14],
        Seasons: ["Jan", "Feb", "Mar", "Apr", "May"],
        NoOfCartons: "NavalorangeNoOfCartons"
      }, {
        Id: 13,
        Title: "Grapefruit",
        AvailableCounts: "GrapefruitAvailableCounts",
        CartonNetWeight: "GrapefruitNetWeight",
        ContainerType: "GrapefruitContainerType",
        Images: [],
        Description: "GrapefruitDescription",
        NumberofPallets: "GrapefruitNumberofPallets",
        Packing: ["GrapefruitPacking1", "NGrapefruitPacking2"],
        ReleatedProducts: [10, 11, 12, 14],
        Seasons: ["Jan", "Feb", "Nov", "Dec"],
        NoOfCartons: "GrapefruitNoOfCartons"
      }, {
        Id: 14,
        Title: "Mandarins",
        AvailableCounts: "MandarinsAvailableCounts",
        CartonNetWeight: "MandarinsNetWeight",
        ContainerType: "MandarinsContainerType",
        Images: [],
        Description: "",
        NumberofPallets: "MandarinsNumberofPallets",
        Packing: [],
        ReleatedProducts: [10, 11, 12, 13],
        Seasons: ["Feb", "Mar"],
        NoOfCartons: "MandarinsNoOfCartons"
      }
      ]
    }
    ];
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