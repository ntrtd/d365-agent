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
import type { InventoryAccountingKpiGoalsApi } from './InventoryAccountingKpiGoalsApi';

/**
 * This class represents the entity "InventoryAccountingKPIGoals" of service "d365_metadata".
 */
export class InventoryAccountingKpiGoals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryAccountingKpiGoalsType<T>
{
  /**
   * Technical entity name for InventoryAccountingKpiGoals.
   */
  static override _entityName = 'InventoryAccountingKPIGoals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryAccountingKpiGoals entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Accuracy.
   */
  declare inventoryAccuracy: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Annual Inventory Turn.
   */
  declare annualInventoryTurn: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: InventoryAccountingKpiGoalsApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryAccountingKpiGoalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventoryAccuracy: DeserializedType<T, 'Edm.Decimal'>;
  annualInventoryTurn: DeserializedType<T, 'Edm.Decimal'>;
}
