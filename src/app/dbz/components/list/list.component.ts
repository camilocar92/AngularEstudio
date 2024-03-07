import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as Uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    id: Uuid(),
    name: 'Trunks',
    power: 10
  }]

  // onDeleteCharecter(index: number): void {
  //   this.onDelete.emit( index );
  // }

  deleteCharacterById( id: string ): void {
    this.onDelete.emit( id );
  }

}
