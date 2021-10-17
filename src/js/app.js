/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
// eslint-disable-next-line max-classes-per-file
export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}

export class MathCharacter extends Character {
  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    function getBaseLog(x, y) {
      return Math.log(y) / Math.log(x);
    }
    if (this.stoned === true) {
      // eslint-disable-next-line max-len
      this._attack = this._attack * (1 - ((this.distance - 1) / 10)) - getBaseLog(2, this.distance) * 5;
    } else {
      this._attack *= (1 - ((this.distance - 1) / 10));
    }
    if (Math.round(this._attack) >= 0) {
      return Math.round(this._attack);
    }
    return 0;
  }

  set attack(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._attack = value;
  }
}

export class Magician extends MathCharacter {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
    this.distance = 1;
  }
}

export class Daemon extends MathCharacter {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
    this.distance = 1;
  }
}
