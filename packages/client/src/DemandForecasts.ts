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
import type { DemandForecastsApi } from './DemandForecastsApi';
import { BudgetAllocateMethod } from './BudgetAllocateMethod';

/**
 * This class represents the entity "DemandForecasts" of service "d365_metadata".
 */
export class DemandForecasts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DemandForecastsType<T>
{
  /**
   * Technical entity name for DemandForecasts.
   */
  static override _entityName = 'DemandForecasts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DemandForecasts entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemNumber',
    'ForecastStartDate',
    'ProductAllocationKeyId',
    'CustomerAccountNumber',
    'CustomerGroupId',
    'ForecastModelId',
    'DeliveringSiteId',
    'DeliveringWarehouseId',
    'ProductConfigurationId',
    'ProductColorId',
    'ProductSizeId',
    'ProductStyleId'
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
   * Forecast Start Date.
   */
  declare forecastStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Product Allocation Key Id.
   */
  declare productAllocationKeyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account Number.
   */
  declare customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Group Id.
   */
  declare customerGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Forecast Model Id.
   */
  declare forecastModelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivering Site Id.
   */
  declare deliveringSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivering Warehouse Id.
   */
  declare deliveringWarehouseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Quantity Unit Symbol.
   * @nullable
   */
  declare quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecasted Revenue.
   */
  declare forecastedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pricing Currency Code.
   * @nullable
   */
  declare pricingCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecasted Unit Price.
   */
  declare forecastedUnitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Forecasted Quantity.
   */
  declare forecastedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Forecast Allocation Method.
   * @nullable
   */
  declare forecastAllocationMethod?: BudgetAllocateMethod | null;

  constructor(_entityApi: DemandForecastsApi<T>) {
    super(_entityApi);
  }
}

export interface DemandForecastsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  forecastStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productAllocationKeyId: DeserializedType<T, 'Edm.String'>;
  customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  customerGroupId: DeserializedType<T, 'Edm.String'>;
  forecastModelId: DeserializedType<T, 'Edm.String'>;
  deliveringSiteId: DeserializedType<T, 'Edm.String'>;
  deliveringWarehouseId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  forecastedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  pricingCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  forecastedUnitPrice: DeserializedType<T, 'Edm.Decimal'>;
  forecastedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  forecastAllocationMethod?: BudgetAllocateMethod | null;
}
