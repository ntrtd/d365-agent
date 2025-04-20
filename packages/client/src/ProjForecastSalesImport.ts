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
import type { ProjForecastSalesImportApi } from './ProjForecastSalesImportApi';
import { ProjCdsTransType } from './ProjCdsTransType';
import { ProjBillingType } from './ProjBillingType';

/**
 * This class represents the entity "ProjForecastSalesImport" of service "d365_metadata".
 */
export class ProjForecastSalesImport<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjForecastSalesImportType<T>
{
  /**
   * Technical entity name for ProjForecastSalesImport.
   */
  static override _entityName = 'ProjForecastSalesImport';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjForecastSalesImport entity.
   */
  static _keys = ['dataAreaId', 'ImportId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Import Id.
   */
  declare importId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Id.
   * @nullable
   */
  declare transId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Type.
   * @nullable
   */
  declare transType?: ProjCdsTransType | null;
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Cost Paym Date.
   */
  declare forecastCostPaymDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Forecast Invoice Date.
   */
  declare forecastInvoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Price.
   */
  declare price: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Forecast Line Id.
   */
  declare forecastLineId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Transaction Category Id.
   * @nullable
   */
  declare transactionCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Line Id Origin.
   */
  declare forecastLineIdOrigin: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Comment.
   * @nullable
   */
  declare comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invent Qty.
   */
  declare inventQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Billing Type.
   * @nullable
   */
  declare billingType?: ProjBillingType | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Item Description.
   * @nullable
   */
  declare itemDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Line Id.
   * @nullable
   */
  declare contractLineId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Qty.
   */
  declare salesQty: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ProjForecastSalesImportApi<T>) {
    super(_entityApi);
  }
}

export interface ProjForecastSalesImportType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  importId: DeserializedType<T, 'Edm.Guid'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  transId?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  transType?: ProjCdsTransType | null;
  sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  forecastCostPaymDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  forecastInvoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  price: DeserializedType<T, 'Edm.Decimal'>;
  forecastLineId: DeserializedType<T, 'Edm.Guid'>;
  transactionCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  forecastLineIdOrigin: DeserializedType<T, 'Edm.Guid'>;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventQty: DeserializedType<T, 'Edm.Decimal'>;
  billingType?: ProjBillingType | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itemDescription?: DeserializedType<T, 'Edm.String'> | null;
  contractLineId?: DeserializedType<T, 'Edm.String'> | null;
  salesQty: DeserializedType<T, 'Edm.Decimal'>;
}
