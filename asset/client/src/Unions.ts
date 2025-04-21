/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { UnionsApi } from './UnionsApi';
import { NoYes } from './NoYes';
import {
  CompensationEligibilityRules,
  CompensationEligibilityRulesType
} from './CompensationEligibilityRules';
import {
  CompensationFixedIncreaseBudgets,
  CompensationFixedIncreaseBudgetsType
} from './CompensationFixedIncreaseBudgets';
import {
  LaborUnionAgreements,
  LaborUnionAgreementsType
} from './LaborUnionAgreements';
import { PersonLaborUnions, PersonLaborUnionsType } from './PersonLaborUnions';

/**
 * This class represents the entity "Unions" of service "d365_metadata".
 */
export class Unions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements UnionsType<T>
{
  /**
   * Technical entity name for Unions.
   */
  static override _entityName = 'Unions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Unions entity.
   */
  static _keys = ['UnionId'];
  /**
   * Union Id.
   */
  declare unionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entitled To Negotiate.
   * @nullable
   */
  declare entitledToNegotiate?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link CompensationEligibilityRules} entity.
   */
  declare compensationEligibilityRules: CompensationEligibilityRules<T>[];
  /**
   * One-to-many navigation property to the {@link CompensationFixedIncreaseBudgets} entity.
   */
  declare compensationFixedIncreaseBudgets: CompensationFixedIncreaseBudgets<T>[];
  /**
   * One-to-many navigation property to the {@link LaborUnionAgreements} entity.
   */
  declare laborUnionAgreements: LaborUnionAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link PersonLaborUnions} entity.
   */
  declare personLaborUnions: PersonLaborUnions<T>[];

  constructor(_entityApi: UnionsApi<T>) {
    super(_entityApi);
  }
}

export interface UnionsType<T extends DeSerializers = DefaultDeSerializers> {
  unionId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  entitledToNegotiate?: NoYes | null;
  compensationEligibilityRules: CompensationEligibilityRulesType<T>[];
  compensationFixedIncreaseBudgets: CompensationFixedIncreaseBudgetsType<T>[];
  laborUnionAgreements: LaborUnionAgreementsType<T>[];
  personLaborUnions: PersonLaborUnionsType<T>[];
}
