import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as Uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: Uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: Uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: Uuid(),
    name: 'Vegueta',
    power: 7500
  }];

  addCharacter( character: Character ): void {
    const newCharacter: Character = { ...character, id:  Uuid() }

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number){
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById( id: string ){
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
