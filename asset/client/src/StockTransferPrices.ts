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
import type { StockTransferPricesApi } from './StockTransferPricesApi';
import { FromWarehouseCodeIn } from './FromWarehouseCodeIn';
import { MethodPriceTransIn } from './MethodPriceTransIn';

/**
 * This class represents the entity "StockTransferPrices" of service "d365_metadata".
 */
export class StockTransferPrices<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements StockTransferPricesType<T>
{
  /**
   * Technical entity name for StockTransferPrices.
   */
  static override _entityName = 'StockTransferPrices';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the StockTransferPrices entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemNumber',
    'FromWarehouse',
    'ToWarehouse',
    'FromDate',
    'ToDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * From Warehouse.
   */
  declare fromWarehouse: DeserializedType<T, 'Edm.String'>;
  /**
   * To Warehouse.
   */
  declare toWarehouse: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Color Id.
   * @nullable
   */
  declare colorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Warehouse Code.
   * @nullable
   */
  declare fromWarehouseCode?: FromWarehouseCodeIn | null;
  /**
   * Serial Number Id.
   * @nullable
   */
  declare serialNumberId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Method.
   * @nullable
   */
  declare method?: MethodPriceTransIn | null;
  /**
   * Style Id.
   * @nullable
   */
  declare styleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Configuration Id.
   * @nullable
   */
  declare configurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price.
   */
  declare price: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Location Id.
   * @nullable
   */
  declare locationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Size Id.
   * @nullable
   */
  declare sizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status Id.
   * @nullable
   */
  declare statusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * License Plate Id.
   * @nullable
   */
  declare licensePlateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Warehouse Code.
   * @nullable
   */
  declare toWarehouseCode?: FromWarehouseCodeIn | null;
  /**
   * Site Id.
   * @nullable
   */
  declare siteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Batch Id.
   * @nullable
   */
  declare batchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit.
   * @nullable
   */
  declare unit?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: StockTransferPricesApi<T>) {
    super(_entityApi);
  }
}

export interface StockTransferPricesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  fromWarehouse: DeserializedType<T, 'Edm.String'>;
  toWarehouse: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  colorId?: DeserializedType<T, 'Edm.String'> | null;
  fromWarehouseCode?: FromWarehouseCodeIn | null;
  serialNumberId?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  method?: MethodPriceTransIn | null;
  styleId?: DeserializedType<T, 'Edm.String'> | null;
  configurationId?: DeserializedType<T, 'Edm.String'> | null;
  price: DeserializedType<T, 'Edm.Decimal'>;
  locationId?: DeserializedType<T, 'Edm.String'> | null;
  sizeId?: DeserializedType<T, 'Edm.String'> | null;
  statusId?: DeserializedType<T, 'Edm.String'> | null;
  licensePlateId?: DeserializedType<T, 'Edm.String'> | null;
  toWarehouseCode?: FromWarehouseCodeIn | null;
  siteId?: DeserializedType<T, 'Edm.String'> | null;
  batchId?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  unit?: DeserializedType<T, 'Edm.String'> | null;
}
