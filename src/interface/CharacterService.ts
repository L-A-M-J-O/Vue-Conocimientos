import { Ref, ref} from 'vue';
import type Character from './Character';

class CharacterService {
  private character: Ref<Character>
  private characters: Ref<Array<Character>>

  constructor () {
    this.character = ref<Character>({})
    this.characters = ref<Array<Character>>([])
  }
}


export default CharacterService