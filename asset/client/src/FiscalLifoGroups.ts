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
import type { FiscalLifoGroupsApi } from './FiscalLifoGroupsApi';
import { InventFiscalLifoNormalValueCalc } from './InventFiscalLifoNormalValueCalc';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "FiscalLIFOGroups" of service "d365_metadata".
 */
export class FiscalLifoGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FiscalLifoGroupsType<T>
{
  /**
   * Technical entity name for FiscalLifoGroups.
   */
  static override _entityName = 'FiscalLIFOGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalLifoGroups entity.
   */
  static _keys = ['dataAreaId', 'GroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Normal Value Calculation.
   * @nullable
   */
  declare normalValueCalculation?: InventFiscalLifoNormalValueCalc | null;
  /**
   * Normal Value.
   */
  declare normalValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Individual.
   * @nullable
   */
  declare isIndividual?: NoYes | null;

  constructor(_entityApi: FiscalLifoGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalLifoGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  normalValueCalculation?: InventFiscalLifoNormalValueCalc | null;
  normalValue: DeserializedType<T, 'Edm.Decimal'>;
  isIndividual?: NoYes | null;
}
