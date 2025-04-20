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
import type { DemandForecastsV2Api } from './DemandForecastsV2Api';
import { BudgetAllocateMethod } from './BudgetAllocateMethod';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "DemandForecastsV2" of service "d365_metadata".
 */
export class DemandForecastsV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DemandForecastsV2Type<T>
{
  /**
   * Technical entity name for DemandForecastsV2.
   */
  static override _entityName = 'DemandForecastsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DemandForecastsV2 entity.
   */
  static _keys = ['dataAreaId', 'RecordId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Forecasted Unit Price.
   */
  declare forecastedUnitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Forecast Start Date.
   */
  declare forecastStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Quantity Unit Symbol.
   * @nullable
   */
  declare quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Allocation Key Id.
   * @nullable
   */
  declare productAllocationKeyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivering Warehouse Id.
   * @nullable
   */
  declare deliveringWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pricing Currency Code.
   * @nullable
   */
  declare pricingCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivering Site Id.
   * @nullable
   */
  declare deliveringSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Allocation Method.
   * @nullable
   */
  declare forecastAllocationMethod?: BudgetAllocateMethod | null;
  /**
   * Ledger Dimension Display Value.
   * @nullable
   */
  declare ledgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Forecasted Quantity.
   */
  declare forecastedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Group Id.
   * @nullable
   */
  declare customerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Model Id.
   * @nullable
   */
  declare forecastModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecasted Revenue.
   */
  declare forecastedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecasted Unit Cost.
   */
  declare forecastedUnitCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: DemandForecastsV2Api<T>) {
    super(_entityApi);
  }
}

export interface DemandForecastsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  recordId: DeserializedType<T, 'Edm.Int64'>;
  forecastedUnitPrice: DeserializedType<T, 'Edm.Decimal'>;
  forecastStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  productAllocationKeyId?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  deliveringWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  pricingCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  deliveringSiteId?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  forecastAllocationMethod?: BudgetAllocateMethod | null;
  ledgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  forecastedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  customerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  forecastModelId?: DeserializedType<T, 'Edm.String'> | null;
  forecastedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  forecastedUnitCost: DeserializedType<T, 'Edm.Decimal'>;
  dimensionSet?: DimensionSetsType<T> | null;
}
