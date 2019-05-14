import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}

/*import { Component, Input }  from '@angular/core';
     
import { AdComponent }       from './ad.component';
 
@Component({
  template: `
    <div class="hero-profile">
      <h3>Featured Hero Profile</h3>
      <h4>{{data.name}}</h4>
 
      <p>{{data.bio}}</p>
 
      <strong>Hire this hero today!</strong>
    </div>
  `
})
export class HeroProfileComponent implements AdComponent {
  @Input() data: any;
}*/
