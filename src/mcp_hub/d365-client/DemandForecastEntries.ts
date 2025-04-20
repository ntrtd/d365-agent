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
import type { DemandForecastEntriesApi } from './DemandForecastEntriesApi';
import { BudgetAllocateMethod } from './BudgetAllocateMethod';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "DemandForecastEntries" of service "d365_metadata".
 */
export class DemandForecastEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DemandForecastEntriesType<T>
{
  /**
   * Technical entity name for DemandForecastEntries.
   */
  static override _entityName = 'DemandForecastEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DemandForecastEntries entity.
   */
  static _keys = ['dataAreaId', 'ForecastEntryNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Forecast Entry Number.
   */
  declare forecastEntryNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Allocation Key Id.
   * @nullable
   */
  declare productAllocationKeyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Status Id.
   * @nullable
   */
  declare inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Group Id.
   * @nullable
   */
  declare customerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivering Site Id.
   * @nullable
   */
  declare deliveringSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity Unit Symbol.
   * @nullable
   */
  declare quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecasted Catch Weight Quantity.
   */
  declare forecastedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
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
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Start Date.
   */
  declare forecastStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Forecasted Revenue.
   */
  declare forecastedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pricing Currency Code.
   * @nullable
   */
  declare pricingCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Forecasted Unit Price.
   */
  declare forecastedUnitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Forecast Model Id.
   * @nullable
   */
  declare forecastModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivering Warehouse Id.
   * @nullable
   */
  declare deliveringWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecasted Quantity.
   */
  declare forecastedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Forecast Allocation Method.
   * @nullable
   */
  declare forecastAllocationMethod?: BudgetAllocateMethod | null;
  /**
   * Planning Priority.
   */
  declare planningPriority: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: DemandForecastEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface DemandForecastEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  forecastEntryNumber: DeserializedType<T, 'Edm.String'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  productAllocationKeyId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  customerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  deliveringSiteId?: DeserializedType<T, 'Edm.String'> | null;
  quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  forecastedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  forecastStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  forecastedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  pricingCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  forecastedUnitCost: DeserializedType<T, 'Edm.Decimal'>;
  forecastedUnitPrice: DeserializedType<T, 'Edm.Decimal'>;
  forecastModelId?: DeserializedType<T, 'Edm.String'> | null;
  deliveringWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  forecastedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  forecastAllocationMethod?: BudgetAllocateMethod | null;
  planningPriority: DeserializedType<T, 'Edm.Decimal'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
