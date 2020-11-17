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
        ReleatedProducts: [{Id:2,Title:"Onionwhite"}, {Id:3,Title:"Onionyellow"}, {Id:4,Title:"Potatos"}],
        NoOfCartons: null,
        Images: [],
        Packing: [],
        CartonNetWeight: null,
        Seasons: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

      }, {
        Id: 2,
        Title: "Onionwhite",
        AvailableCounts: "OnionwhiteAvailableCounts",
        Description: "OnionwhiteDescription",
        ContainerType: "OnionwhiteContainerType",
        NumberofPallets: "OnionwhiteNumberofPallets",
        ReleatedProducts: [{Id:1,Title:"RedOnions"}, {Id:3,Title:"Onionyellow"}, {Id:4,Title:"Potatos"}],
        Images: [],
        NoOfCartons: null,
        Packing: [],
        CartonNetWeight: null,
        Seasons: ["May", "Jun", "Jul"]

      }, {
        Id: 3,
        Title: "Onionyellow",
        AvailableCounts: "OnionyellowAvailableCounts",
        Description: "OnionyellowDescription",
        ContainerType: null,
        NumberofPallets: null,
        NoOfCartons: null,
        ReleatedProducts: [{Id:1,Title:"RedOnions"}, {Id:2,Title:"Onionwhite"}, {Id:4,Title:"Potatos"}],
        Images: [],
        Packing: ["OnionyellowPacking1", "OnionyellowPacking2"],
        CartonNetWeight: "OnionyellowNetWeight",
        Seasons: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"]
      }, {
        Id: 4,
        Title: "Potatos",
        AvailableCounts: null,
        Description: "PotatosDescription",
        ContainerType: null,
        NoOfCartons: null,
        NumberofPallets: null,
        ReleatedProducts: [{Id:1,Title:"RedOnions"}, {Id:2,Title:"Onionwhite"}, {Id:3,Title:"Onionyellow"}],
        Images: [],
        Packing: ["PotatosPacking1", "PotatosPacking2"],
        CartonNetWeight: null,
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
        CartonNetWeight: null,
        ContainerType: null,
        Images: [],
        Description: null,
        NoOfCartons: null,
        NumberofPallets: "GrapessugraoneNumberofPallets",
        Packing: ["GrapessugraonePacking1", "GrapessugraonePacking2"],
        ReleatedProducts: [{Id:6,Title:"GrapesredglobeTitle"}, {Id:7,Title:"Pomegranate"}, {Id:8,Title:"Grapescrimson"},{Id:9,Title:"Grapesflame"}],
        Seasons: ["May", "Jun", "Jul"]
      }, {
        Id: 6,
        Title: "GrapesredglobeTitle",
        AvailableCounts: null,
        CartonNetWeight: null,
        ContainerType: null,
        Images: [],
        Description: "GrapesredglobeDescription",
        NumberofPallets: null,
        NoOfCartons: null,
        Packing: ["GrapesredglobePacking1", "GrapesredglobePacking2"],
        ReleatedProducts: [{Id:5,Title:"GrapessugraoneTitle"}, {Id:7,Title:"Pomegranate"}, {Id:8,Title:"Grapescrimson"},{Id:9,Title:"Grapesflame"}],
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
        ReleatedProducts: [{Id:5,Title:"GrapessugraoneTitle"}, {Id:6,Title:"GrapesredglobeTitle"}, {Id:8,Title:"Grapescrimson"},{Id:9,Title:"Grapesflame"}],
        NoOfCartons: null,
        Seasons: ["Sep", "Oct", "Nov"]
      }, {
        Id: 8,
        Title: "Grapescrimson",
        AvailableCounts: null,
        CartonNetWeight: null,
        ContainerType: null,
        Images: [],
        NoOfCartons: null,
        Description: "GrapescrimsonDescription",
        NumberofPallets: null,
        Packing: ["GrapescrimsonPacking1", "GrapescrimsonPacking2"],
        ReleatedProducts: [{Id:5,Title:"GrapessugraoneTitle"}, {Id:6,Title:"GrapesredglobeTitle"}, {Id:7,Title:"Pomegranate"},{Id:9,Title:"Grapesflame"}],
        Seasons: ["Aug", "Sep"]
      }, {
        Id: 9,
        Title: "Grapesflame",
        AvailableCounts: null,
        CartonNetWeight: null,
        ContainerType: null,
        Images: [],
        NoOfCartons: null,
        Description: "GrapesflameDescription",
        NumberofPallets: "GrapesflameNumberofPallets",
        Packing: ["GrapesflamePacking1", "GrapesflamePacking2"],
        ReleatedProducts: [{Id:5,Title:"GrapessugraoneTitle"}, {Id:6,Title:"GrapesredglobeTitle"}, {Id:7,Title:"Pomegranate"},{Id:8,Title:"Grapescrimson"}],
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
        ReleatedProducts: [{Id:11,Title:"Valenciaorange"}, {Id:12,Title:"Navalorange"}, {Id:13,Title:"Grapefruit"},{Id:14,Title:"Mandarins"}],
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
        ReleatedProducts: [{Id:10,Title:"Lemon"}, {Id:12,Title:"Navalorange"}, {Id:13,Title:"Grapefruit"},{Id:14,Title:"Mandarins"}],
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
        ReleatedProducts: [{Id:10,Title:"Lemon"}, {Id:11,Title:"Valenciaorange"}, {Id:13,Title:"Grapefruit"},{Id:14,Title:"Mandarins"}],
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
        ReleatedProducts: [{Id:10,Title:"Lemon"}, {Id:11,Title:"Valenciaorange"}, {Id:12,Title:"Navalorange"},{Id:14,Title:"Mandarins"}],
        Seasons: ["Jan", "Feb", "Nov", "Dec"],
        NoOfCartons: "GrapefruitNoOfCartons"
      }, {
        Id: 14,
        Title: "Mandarins",
        AvailableCounts: "MandarinsAvailableCounts",
        CartonNetWeight: "MandarinsNetWeight",
        ContainerType: "MandarinsContainerType",
        Images: [],
        Description: null,
        NumberofPallets: "MandarinsNumberofPallets",
        Packing: [],
        ReleatedProducts:[{Id:10,Title:"Lemon"}, {Id:11,Title:"Valenciaorange"}, {Id:12,Title:"Navalorange"},{Id:13,Title:"Grapefruit"}],
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