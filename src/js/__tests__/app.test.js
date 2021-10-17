/* eslint-disable linebreak-style */
import { Magician, Daemon } from '../app';

test('100, 2, true', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 100;
  merlin.distance = 2;
  merlin.stoned = true;
  expect(merlin.attack).toBe(85);
});


test('150, 3, true', () => {
  const daemon = new Daemon('daemon');
  daemon.attack = 150;
  daemon.distance = 3;
  daemon.stoned = true;
  expect(daemon.attack).toBe(112);
});

test('200, 2, true', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 200;
  merlin.distance = 2;
  merlin.stoned = true;
  expect(merlin.attack).toBe(175);
});

test('100, 5, true', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 100;
  merlin.distance = 5;
  merlin.stoned = true;
  expect(merlin.attack).toBe(48);
});

test('100, 2, false', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 100;
  merlin.distance = 2;
  merlin.stoned = false;
  expect(merlin.attack).toBe(90);
});

test('25, 7, true', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 25;
  merlin.distance = 7;
  merlin.stoned = true;
  expect(merlin.attack).toBe(0);
});
