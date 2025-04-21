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
import type { RetailBuyersPushLineQuantitiesApi } from './RetailBuyersPushLineQuantitiesApi';

/**
 * This class represents the entity "RetailBuyersPushLineQuantities" of service "d365_metadata".
 */
export class RetailBuyersPushLineQuantities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailBuyersPushLineQuantitiesType<T>
{
  /**
   * Technical entity name for RetailBuyersPushLineQuantities.
   */
  static override _entityName = 'RetailBuyersPushLineQuantities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailBuyersPushLineQuantities entity.
   */
  static _keys = [
    'dataAreaId',
    'BuyersPushId',
    'LineNumber',
    'WarehouseId',
    'WarehouseLegalEntity'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Buyers Push Id.
   */
  declare buyersPushId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Warehouse Id.
   */
  declare warehouseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Legal Entity.
   */
  declare warehouseLegalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Id.
   * @nullable
   */
  declare salesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailBuyersPushLineQuantitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailBuyersPushLineQuantitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  buyersPushId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  warehouseId: DeserializedType<T, 'Edm.String'>;
  warehouseLegalEntity: DeserializedType<T, 'Edm.String'>;
  salesId?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
}
