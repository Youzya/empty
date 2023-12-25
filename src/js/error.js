export default class ErrorRepository {
  constructor() {
    this.codes = new Map([[0, 'ok'], [1, 'too high value'], [2, 'too low value']]);
  }

  translate(code) {
    const description = this.codes.get(code);

    if (description === undefined) {
      return 'Unknown error';
    }

    return description;
  }
}
