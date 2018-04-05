import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-test-http',
  templateUrl: './test-http.component.html',
  styleUrls: ['./test-http.component.scss']
})
export class TestHttpComponent implements OnInit {
  //name: string = '';
  id: number;
  title: any;
  data: any = [];
  constructor(private httpClient: HttpClient) {
  }
  onNameKeyUp(event: any) {
    this.id = event.target.value;
  }
  getProfile() {
    this.httpClient.get(`https://my-json-server.typicode.com/typicode/demo/posts`)
      .subscribe(
        (data: any) => {
          console.log( data);
           this.data = data;
        }

      );
  }
  ngOnInit() {
  }

}
