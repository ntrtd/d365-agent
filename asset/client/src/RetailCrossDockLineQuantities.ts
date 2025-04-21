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
import type { RetailCrossDockLineQuantitiesApi } from './RetailCrossDockLineQuantitiesApi';

/**
 * This class represents the entity "RetailCrossDockLineQuantities" of service "d365_metadata".
 */
export class RetailCrossDockLineQuantities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailCrossDockLineQuantitiesType<T>
{
  /**
   * Technical entity name for RetailCrossDockLineQuantities.
   */
  static override _entityName = 'RetailCrossDockLineQuantities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailCrossDockLineQuantities entity.
   */
  static _keys = [
    'dataAreaId',
    'CrossDockId',
    'LineNumber',
    'Warehouse',
    'WarehouseCompany'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cross Dock Id.
   */
  declare crossDockId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Warehouse.
   */
  declare warehouse: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Company.
   */
  declare warehouseCompany: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Id.
   * @nullable
   */
  declare salesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailCrossDockLineQuantitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailCrossDockLineQuantitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  crossDockId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  warehouse: DeserializedType<T, 'Edm.String'>;
  warehouseCompany: DeserializedType<T, 'Edm.String'>;
  salesId?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
}
