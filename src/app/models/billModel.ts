export class Bill {
    dueDate: string;
    items: [
      {
        description: string;
        quantity: number;
        price: number;
      }
    ];
    customer: {
      name: string;
      email:string;
      phoneNumber:string;
      docNumber:string;
      address: {
        cep: string;
        uf: string;
        city: string;
        area: string;
        addressLine1: string;
        streetNumber: string;
      }
    };
    instructionsMsg: string;
    notes: string;
  }