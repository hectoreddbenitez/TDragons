import Race from './Race';

export default class Dwarf extends Race {
  private _lifePoints: number;
  private static _instanceCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 80;
    Dwarf._instanceCounter += 1;
  }

  public get maxLifePoints(): number {
    return this._lifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._instanceCounter;
  }
}