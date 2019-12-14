import { Component, OnInit, Input } from '@angular/core';
import { PokeModel} from '../model/pokeModel';

@Component({
  selector: 'app-observed',
  templateUrl: './observed.component.html',
  styleUrls: ['./observed.component.css']
})
export class ObservedComponent implements OnInit {

  @Input() pokemon: PokeModel;

  constructor() { }

  ngOnInit() {
  }

}
