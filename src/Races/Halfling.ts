import Race from './Race';

export default class Halfling extends Race {
  private _lifePoints: number;
  private static _instanceCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 60;
    Halfling._instanceCounter += 1;
  }

  public get maxLifePoints(): number {
    return this._lifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._instanceCounter;
  }
}