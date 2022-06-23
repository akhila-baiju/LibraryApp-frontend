import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }

  constructor(public http:HttpClient) { }
  getBooks(){
    return this.http.get('api/books');
  }

  getBook(id:any){
    return this.http.get("api/"+id);
  }

  addBooks(item: any) {
 // console.log("reached add product in product service"+item);
  return this.http.post('api/insertBook', { item })
  .subscribe(data => { console.log(data) });
}

deleteBook(id:any)
{

  return this.http.delete("api/remove/"+id)

}
editBook(book:any)
{
  console.log('book update')
  return this.http.put("api/updateBook",book)
  .subscribe(data =>{console.log(data)})
}
}