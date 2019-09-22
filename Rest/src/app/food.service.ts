import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Food} from './food';
//import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
//c:Number;
  constructor(private http:HttpClient) { }

  getFood(){
    return this.http.get('https://tanwarmean.herokuapp.com/api/food')
    //.map(res=>res.json());
  }

  addFood(newFood){
    var headers=new HttpHeaders();
    headers.append('content-type','application/json');
    return this.http.post('https://tanwarmean.herokuapp.com/api/food',newFood,{headers:headers});
  }

  deleteFood(id){
    return this.http.delete('https://tanwarmean.herokuapp.com/food/'+id);
    //res=>res.json();
  }
}

//   getFood(){
//     return this.http.get('http://localhost:3000/api/food')
//     //.map(res=>res.json());
//   }

//   addFood(newFood){
//     var headers=new HttpHeaders();
//     headers.append('content-type','application/json');
//     return this.http.post('http://localhost:3000/api/food',newFood,{headers:headers});
//   }

//   deleteFood(id){
//     return this.http.delete('http://localhost:3000/api/food/'+id);
//     //res=>res.json();
//   }
// }
