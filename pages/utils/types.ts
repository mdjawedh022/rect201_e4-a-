


export interface userDta{
      id: number,
       name:string,
       username: string,
       email:string,
     address?:{
       street:string,
       suite:string,
       city:string,
       zipcode:number,
      geo: {
         lat:number,
         lng:number,

      }
    },
    phone: number,
    website:string,
    company?: {
      name:string,
      catchPhrase:string,
      bs:string,
    }
}

export  interface contextTods{
    params: { id: any }
   userId:number,
    id:number,
    title:string,
    completed:boolean
}


    // "id": 9,
    // "name": "Glenna Reichert",
    // "username": "Delphine",
    // "email": "Chaim_McDermott@dana.io",
    // "address": {
    //   "street": "Dayna Park",
    //   "suite": "Suite 449",
    //   "city": "Bartholomebury",
    //   "zipcode": "76495-3109",
    //   "geo": {
    //     "lat": "24.6463",
    //     "lng": "-168.8889"
    //   }
    // },
    // "phone": "(775)976-6794 x41206",
    // "website": "conrad.com",
    // "company": {
    //   "name": "Yost and Sons",
    //   "catchPhrase": "Switchable contextually-based project",
    //   "bs": "aggregate real-time technologies"
    // 