import Race from './Race';

export default class Orc extends Race {
  private _lifePoints: number;
  private static _instanceCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 74;
    Orc._instanceCounter += 1;
  }

  public get maxLifePoints(): number {
    return this._lifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._instanceCounter;
  }
}