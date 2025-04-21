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
import type { RetailInventoryLinkedItemsApi } from './RetailInventoryLinkedItemsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailInventoryLinkedItems" of service "d365_metadata".
 */
export class RetailInventoryLinkedItems<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailInventoryLinkedItemsType<T>
{
  /**
   * Technical entity name for RetailInventoryLinkedItems.
   */
  static override _entityName = 'RetailInventoryLinkedItems';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailInventoryLinkedItems entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemId',
    'UnitOfMeasureSymbol',
    'LinkedItemId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit Of Measure Symbol.
   */
  declare unitOfMeasureSymbol: DeserializedType<T, 'Edm.String'>;
  /**
   * Linked Item Id.
   */
  declare linkedItemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Blocked.
   * @nullable
   */
  declare blocked?: NoYes | null;

  constructor(_entityApi: RetailInventoryLinkedItemsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailInventoryLinkedItemsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  unitOfMeasureSymbol: DeserializedType<T, 'Edm.String'>;
  linkedItemId: DeserializedType<T, 'Edm.String'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  blocked?: NoYes | null;
}
