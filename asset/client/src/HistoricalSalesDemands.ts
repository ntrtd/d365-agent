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
import type { HistoricalSalesDemandsApi } from './HistoricalSalesDemandsApi';
import { ItemType } from './ItemType';
import { SalesType } from './SalesType';

/**
 * This class represents the entity "HistoricalSalesDemands" of service "d365_metadata".
 */
export class HistoricalSalesDemands<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements HistoricalSalesDemandsType<T>
{
  /**
   * Technical entity name for HistoricalSalesDemands.
   */
  static override _entityName = 'HistoricalSalesDemands';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HistoricalSalesDemands entity.
   */
  static _keys = ['RecordId'];
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Product Type.
   * @nullable
   */
  declare productType?: ItemType | null;
  /**
   * Inventory Unit Symbol.
   * @nullable
   */
  declare inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Account Party Id.
   * @nullable
   */
  declare fromAccountPartyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Name.
   * @nullable
   */
  declare accountName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Date.
   */
  declare shipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Account Id.
   * @nullable
   */
  declare accountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Id.
   * @nullable
   */
  declare orderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Channel.
   * @nullable
   */
  declare channel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Quantity.
   */
  declare inventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * To Account Id.
   * @nullable
   */
  declare toAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location Id.
   * @nullable
   */
  declare locationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Account Party Id.
   * @nullable
   */
  declare toAccountPartyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Data Area Id.
   * @nullable
   */
  declare salesDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Id.
   * @nullable
   */
  declare productId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Variant Id.
   * @nullable
   */
  declare productVariantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Type.
   * @nullable
   */
  declare orderType?: SalesType | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Document Id.
   * @nullable
   */
  declare documentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit.
   * @nullable
   */
  declare unit?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: HistoricalSalesDemandsApi<T>) {
    super(_entityApi);
  }
}

export interface HistoricalSalesDemandsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  recordId: DeserializedType<T, 'Edm.Int64'>;
  productType?: ItemType | null;
  inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  fromAccountPartyId?: DeserializedType<T, 'Edm.String'> | null;
  accountName?: DeserializedType<T, 'Edm.String'> | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  shipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  accountId?: DeserializedType<T, 'Edm.String'> | null;
  orderId?: DeserializedType<T, 'Edm.String'> | null;
  channel?: DeserializedType<T, 'Edm.String'> | null;
  inventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  toAccountId?: DeserializedType<T, 'Edm.String'> | null;
  locationId?: DeserializedType<T, 'Edm.String'> | null;
  toAccountPartyId?: DeserializedType<T, 'Edm.String'> | null;
  salesDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  productId?: DeserializedType<T, 'Edm.String'> | null;
  productVariantId?: DeserializedType<T, 'Edm.String'> | null;
  orderType?: SalesType | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  documentId?: DeserializedType<T, 'Edm.String'> | null;
  unit?: DeserializedType<T, 'Edm.String'> | null;
}
