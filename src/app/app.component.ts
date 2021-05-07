import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ag-custom';


  columnDefs = [
    { headerName: "Make", field: "make" ,resizable: true,filter: true  },
    { headerName: "Model", field: "model",resizable: true ,filter: true  },
    { headerName: "Price", field: "price",resizable: true ,filter: true  }
  ];

  rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ];

}
