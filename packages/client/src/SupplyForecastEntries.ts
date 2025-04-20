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
import type { SupplyForecastEntriesApi } from './SupplyForecastEntriesApi';
import { BudgetAllocateMethod } from './BudgetAllocateMethod';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import { RouteHeaders, RouteHeadersType } from './RouteHeaders';
import { ForecastModels, ForecastModelsType } from './ForecastModels';
import { Warehouses, WarehousesType } from './Warehouses';
import { ProductGroups, ProductGroupsType } from './ProductGroups';
import {
  BillOfMaterialsHeaders,
  BillOfMaterialsHeadersType
} from './BillOfMaterialsHeaders';
import { Currencies, CurrenciesType } from './Currencies';
import { VendorGroups, VendorGroupsType } from './VendorGroups';

/**
 * This class represents the entity "SupplyForecastEntries" of service "d365_metadata".
 */
export class SupplyForecastEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SupplyForecastEntriesType<T>
{
  /**
   * Technical entity name for SupplyForecastEntries.
   */
  static override _entityName = 'SupplyForecastEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SupplyForecastEntries entity.
   */
  static _keys = ['dataAreaId', 'ForecastEntryNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Forecast Entry Number.
   */
  declare forecastEntryNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecasted Inventory Quantity.
   */
  declare forecastedInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
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
   * Product Batch Number.
   * @nullable
   */
  declare productBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity Unit Symbol.
   * @nullable
   */
  declare quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route Id.
   * @nullable
   */
  declare routeId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Catch Weight Unit Symbol.
   * @nullable
   */
  declare catchWeightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Start Date.
   */
  declare forecastStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Item Serial Number.
   * @nullable
   */
  declare itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Site Id.
   * @nullable
   */
  declare receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Price Quantity.
   */
  declare purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Group Id.
   * @nullable
   */
  declare productGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Amount.
   */
  declare discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vendor Group Id.
   * @nullable
   */
  declare vendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Percentage.
   */
  declare discountPercentage: DeserializedType<T, 'Edm.Decimal'>;
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
   * Receiving Warehouse Id.
   * @nullable
   */
  declare receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Model Id.
   * @nullable
   */
  declare forecastModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Forecasted Amount.
   */
  declare forecastedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bom Id.
   * @nullable
   */
  declare bomId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare quantityUnitOfMeasure?: UnitsOfMeasure<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare vendor?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare receivingSite?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link RouteHeaders} entity.
   */
  declare routeHeader?: RouteHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link ForecastModels} entity.
   */
  declare forecastModel?: ForecastModels<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare receivingWarehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductGroups} entity.
   */
  declare productGroup?: ProductGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link BillOfMaterialsHeaders} entity.
   */
  declare billOfMaterialsHeader?: BillOfMaterialsHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare pricingCurrency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorGroups} entity.
   */
  declare vendorGroup?: VendorGroups<T> | null;

  constructor(_entityApi: SupplyForecastEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface SupplyForecastEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  forecastEntryNumber: DeserializedType<T, 'Edm.Int64'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  forecastedInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productAllocationKeyId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  productBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  routeId?: DeserializedType<T, 'Edm.String'> | null;
  forecastedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  catchWeightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  forecastStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productGroupId?: DeserializedType<T, 'Edm.String'> | null;
  discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  vendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  discountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  pricingCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  forecastedUnitPrice: DeserializedType<T, 'Edm.Decimal'>;
  receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  forecastModelId?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  forecastedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  forecastAllocationMethod?: BudgetAllocateMethod | null;
  forecastedAmount: DeserializedType<T, 'Edm.Decimal'>;
  bomId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  quantityUnitOfMeasure?: UnitsOfMeasureType<T> | null;
  vendor?: VendorsV2Type<T> | null;
  receivingSite?: OperationalSitesType<T> | null;
  routeHeader?: RouteHeadersType<T> | null;
  forecastModel?: ForecastModelsType<T> | null;
  receivingWarehouse?: WarehousesType<T> | null;
  productGroup?: ProductGroupsType<T> | null;
  billOfMaterialsHeader?: BillOfMaterialsHeadersType<T> | null;
  pricingCurrency?: CurrenciesType<T> | null;
  vendorGroup?: VendorGroupsType<T> | null;
}
