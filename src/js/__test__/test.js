import Character from '../character';
import Notcharacter from '../notcharacter';
import Team from '../team';
import ErrorRepository from '../error';


/////////////////////////////////////////////////////////////////// team

test('uncorrect type', () => {
    const nchar = new Notcharacter('NotGary');
    const team = new Team();
    expect(() => {team.add(nchar)}).toThrowError('wrong type');
});


test('add character', () => {
  const char = new Character('Gary');
  const team = new Team();
  team.add(char);
  expect(team.members).toEqual(new Set([char]));
});


test('add exist character', () => {
  const char = new Character('RepeatGary');
  const team = new Team();
  team.add(char);
  expect(() => {team.add(char)}).toThrowError('repeat char');
});


test('add correct list', () => {
  const char1 = new Character('NewGary');
  const char2 = new Character('Lisa');
  const team = new Team();
  team.addAll(char1, char2, char1);
  expect(team.members).toEqual(new Set([char1, char2]));
});


test('add uncorrect list', () => {
  const char1 = new Character('NewGary');
  const char2 = 'Lisa';
  const team = new Team();
  expect(() => {team.addAll(char1, char2, char1)}).toThrowError('error list');
});


test('toArray', () => {
  const char1 = new Character('NewGary');
  const char2 = new Character('Lisa');
  const team = new Team();
  team.members = new Set([char1, char2]);
  expect(team.toArray()).toEqual([char1, char2]);
});


/////////////////////////////////////////////////////////////////// error

test('get correct code description', () => {
  const code = 0;
  const errorRepository = new ErrorRepository();
  const err = errorRepository.translate(code);
  expect(err).toBe('ok');
});

test('get uncorrect code description', () => {
  const code = 4;
  const errorRepository = new ErrorRepository();
  const err = errorRepository.translate(code);
  expect(err).toBe('Unknown error');
});
