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
import type { InventoryTableModulesForAiApi } from './InventoryTableModulesForAiApi';
import { ModuleInventPurchSales } from './ModuleInventPurchSales';
import {
  ReleasedProductsForAi,
  ReleasedProductsForAiType
} from './ReleasedProductsForAi';

/**
 * This class represents the entity "InventoryTableModulesForAI" of service "d365_metadata".
 */
export class InventoryTableModulesForAi<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryTableModulesForAiType<T>
{
  /**
   * Technical entity name for InventoryTableModulesForAi.
   */
  static override _entityName = 'InventoryTableModulesForAI';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryTableModulesForAi entity.
   */
  static _keys = ['dataAreaId', 'ItemNumber', 'ModuleType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Module Type.
   * @nullable
   */
  declare moduleType?: ModuleInventPurchSales | null;
  /**
   * Unit.
   * @nullable
   */
  declare unit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price.
   */
  declare price: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price Quantity.
   */
  declare priceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsForAi} entity.
   */
  declare releasedProduct?: ReleasedProductsForAi<T> | null;

  constructor(_entityApi: InventoryTableModulesForAiApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryTableModulesForAiType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  moduleType?: ModuleInventPurchSales | null;
  unit?: DeserializedType<T, 'Edm.String'> | null;
  price: DeserializedType<T, 'Edm.Decimal'>;
  priceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  releasedProduct?: ReleasedProductsForAiType<T> | null;
}
