import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _powerAtack: EnergyType;
  private static _instanceCounter = 0;

  constructor(name: string) {
    super(name);
    this._powerAtack = 'mana';
    Mage._instanceCounter += 1;
  }

  get energyType(): EnergyType {
    return this._powerAtack;
  }

  static createdArchetypeInstances(): number {
    return this._instanceCounter;
  }
}