import Character from './character';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    if (!(char instanceof Character)) {
      throw new Error('wrong type');
    }

    if (this.members.has(char)) {
      throw new Error('repeat char');
    }

    this.members.add(char);
  }

  addAll(...chars) {
    if (chars.some((elem) => !(elem instanceof Character))) {
      throw new Error('error list');
    }

    chars.forEach((elem) => this.members.add(elem));
  }

  toArray() {
    return [...this.members];
  }
}
