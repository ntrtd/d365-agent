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
import type { ProductSpecificOrderSettingsV3Api } from './ProductSpecificOrderSettingsV3Api';
import { NoYes } from './NoYes';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import {
  DvReleasedProducts,
  DvReleasedProductsType
} from './DvReleasedProducts';
import { Warehouses, WarehousesType } from './Warehouses';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import { ProductSizes, ProductSizesType } from './ProductSizes';
import { ProductColors, ProductColorsType } from './ProductColors';
import { ProductVersions, ProductVersionsType } from './ProductVersions';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "ProductSpecificOrderSettingsV3" of service "d365_metadata".
 */
export class ProductSpecificOrderSettingsV3<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductSpecificOrderSettingsV3Type<T>
{
  /**
   * Technical entity name for ProductSpecificOrderSettingsV3.
   */
  static override _entityName = 'ProductSpecificOrderSettingsV3';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductSpecificOrderSettingsV3 entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemNumber',
    'OperationalSiteId',
    'ProductConfigurationId',
    'ProductColorId',
    'ProductSizeId',
    'ProductStyleId',
    'ProductVersionId'
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
   * Operational Site Id.
   */
  declare operationalSiteId: DeserializedType<T, 'Edm.String'>;
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
   * Product Version Id.
   */
  declare productVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Inventory Site Mandatory.
   * @nullable
   */
  declare isInventorySiteMandatory?: NoYes | null;
  /**
   * Inventory Atp Backward Demand Time Fence Days.
   */
  declare inventoryAtpBackwardDemandTimeFenceDays: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Is Sales Site Mandatory.
   * @nullable
   */
  declare isSalesSiteMandatory?: NoYes | null;
  /**
   * Sales Atp Backward Supply Time Fence Days.
   */
  declare salesAtpBackwardSupplyTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Procurement Lead Time Days.
   */
  declare procurementLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Order Promising Method.
   * @nullable
   */
  declare salesOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  /**
   * Are Inventory Default Order Settings Overridden.
   * @nullable
   */
  declare areInventoryDefaultOrderSettingsOverridden?: NoYes | null;
  /**
   * Is Inventory Warehouse Mandatory.
   * @nullable
   */
  declare isInventoryWarehouseMandatory?: NoYes | null;
  /**
   * Is Sales Warehouse Mandatory.
   * @nullable
   */
  declare isSalesWarehouseMandatory?: NoYes | null;
  /**
   * Sales Atp Backward Demand Time Fence Days.
   */
  declare salesAtpBackwardDemandTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Atp Delayed Demand Offset Days.
   */
  declare salesAtpDelayedDemandOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Procurement Site Mandatory.
   * @nullable
   */
  declare isProcurementSiteMandatory?: NoYes | null;
  /**
   * Procurement Warehouse Id.
   * @nullable
   */
  declare procurementWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Are Sales Default Order Settings Overridden.
   * @nullable
   */
  declare areSalesDefaultOrderSettingsOverridden?: NoYes | null;
  /**
   * Are Procurement Default Order Settings Overridden.
   * @nullable
   */
  declare areProcurementDefaultOrderSettingsOverridden?: NoYes | null;
  /**
   * Inventory Atp Delayed Supply Offset Days.
   */
  declare inventoryAtpDelayedSupplyOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Sales Atp Including Planned Orders.
   */
  declare isSalesAtpIncludingPlannedOrders: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Inventory Warehouse Id.
   * @nullable
   */
  declare inventoryWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maximum Sales Order Quantity.
   */
  declare maximumSalesOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Standard Procurement Order Quantity.
   */
  declare standardProcurementOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Minimum Inventory Order Quantity.
   */
  declare minimumInventoryOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Minimum Sales Order Quantity.
   */
  declare minimumSalesOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Inventory Processing Stopped.
   * @nullable
   */
  declare isInventoryProcessingStopped?: NoYes | null;
  /**
   * Inventory Lead Time Days.
   */
  declare inventoryLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Standard Sales Order Quantity.
   */
  declare standardSalesOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Standard Inventory Order Quantity.
   */
  declare standardInventoryOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Atp Time Fence Days.
   */
  declare salesAtpTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Inventory Atp Backward Supply Time Fence Days.
   */
  declare inventoryAtpBackwardSupplyTimeFenceDays: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Is Default Procurement Storage Dimension Overridden.
   * @nullable
   */
  declare isDefaultProcurementStorageDimensionOverridden?: NoYes | null;
  /**
   * Procurement Site Id.
   * @nullable
   */
  declare procurementSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Atp Delayed Demand Offset Days.
   */
  declare inventoryAtpDelayedDemandOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Lead Time Days.
   */
  declare salesLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Inventory Using Working Days.
   * @nullable
   */
  declare isInventoryUsingWorkingDays?: NoYes | null;
  /**
   * Order Settings Rank.
   */
  declare orderSettingsRank: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Default Sales Storage Dimension Overridden.
   * @nullable
   */
  declare isDefaultSalesStorageDimensionOverridden?: NoYes | null;
  /**
   * Procurement Quantity Multiples.
   */
  declare procurementQuantityMultiples: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Site Id.
   * @nullable
   */
  declare inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Procurement Order Quantity.
   */
  declare minimumProcurementOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Quantity Multiples.
   */
  declare salesQuantityMultiples: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Sales Lead Time Overridden.
   * @nullable
   */
  declare isSalesLeadTimeOverridden?: NoYes | null;
  /**
   * Is Procurement Using Working Days.
   * @nullable
   */
  declare isProcurementUsingWorkingDays?: NoYes | null;
  /**
   * Maximum Procurement Order Quantity.
   */
  declare maximumProcurementOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Inventory Order Quantity.
   */
  declare maximumInventoryOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Procurement Processingstopped.
   * @nullable
   */
  declare isProcurementProcessingstopped?: NoYes | null;
  /**
   * Is Sales Processing Stopped.
   * @nullable
   */
  declare isSalesProcessingStopped?: NoYes | null;
  /**
   * Sales Warehouse Id.
   * @nullable
   */
  declare salesWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Quantity Multiples.
   */
  declare inventoryQuantityMultiples: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Atp Delayed Supply Offset Days.
   */
  declare salesAtpDelayedSupplyOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Default Inventory Storage Dimension Overridden.
   * @nullable
   */
  declare isDefaultInventoryStorageDimensionOverridden?: NoYes | null;
  /**
   * Is Procurement Warehouse Mandatory.
   * @nullable
   */
  declare isProcurementWarehouseMandatory?: NoYes | null;
  /**
   * Sales Site Id.
   * @nullable
   */
  declare salesSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Order Promising Method.
   * @nullable
   */
  declare inventoryOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  /**
   * Is Inventory Atp Including Planned Orders.
   */
  declare isInventoryAtpIncludingPlannedOrders: DeserializedType<
    T,
    'Edm.Boolean'
  >;
  /**
   * Inventory Atp Time Fence Days.
   */
  declare inventoryAtpTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Gup Discount Claim Vendor Account.
   * @nullable
   */
  declare gupDiscountClaimVendorAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DvReleasedProducts} entity.
   */
  declare dvReleasedProduct?: DvReleasedProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare procurementWarehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare operationalSite?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSizes} entity.
   */
  declare productSize?: ProductSizes<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductColors} entity.
   */
  declare productColor?: ProductColors<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductVersions} entity.
   */
  declare productVersion?: ProductVersions<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare productStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;

  constructor(_entityApi: ProductSpecificOrderSettingsV3Api<T>) {
    super(_entityApi);
  }
}

export interface ProductSpecificOrderSettingsV3Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  operationalSiteId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  isInventorySiteMandatory?: NoYes | null;
  inventoryAtpBackwardDemandTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  isSalesSiteMandatory?: NoYes | null;
  salesAtpBackwardSupplyTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  procurementLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  salesOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  areInventoryDefaultOrderSettingsOverridden?: NoYes | null;
  isInventoryWarehouseMandatory?: NoYes | null;
  isSalesWarehouseMandatory?: NoYes | null;
  salesAtpBackwardDemandTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  salesAtpDelayedDemandOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  isProcurementSiteMandatory?: NoYes | null;
  procurementWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  areSalesDefaultOrderSettingsOverridden?: NoYes | null;
  areProcurementDefaultOrderSettingsOverridden?: NoYes | null;
  inventoryAtpDelayedSupplyOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  isSalesAtpIncludingPlannedOrders: DeserializedType<T, 'Edm.Boolean'>;
  inventoryWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  maximumSalesOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  standardProcurementOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  minimumInventoryOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  minimumSalesOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  isInventoryProcessingStopped?: NoYes | null;
  inventoryLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  standardSalesOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  standardInventoryOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  salesAtpTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  inventoryAtpBackwardSupplyTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  isDefaultProcurementStorageDimensionOverridden?: NoYes | null;
  procurementSiteId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryAtpDelayedDemandOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  salesLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  isInventoryUsingWorkingDays?: NoYes | null;
  orderSettingsRank: DeserializedType<T, 'Edm.Int64'>;
  isDefaultSalesStorageDimensionOverridden?: NoYes | null;
  procurementQuantityMultiples: DeserializedType<T, 'Edm.Decimal'>;
  inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  minimumProcurementOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  salesQuantityMultiples: DeserializedType<T, 'Edm.Decimal'>;
  isSalesLeadTimeOverridden?: NoYes | null;
  isProcurementUsingWorkingDays?: NoYes | null;
  maximumProcurementOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  maximumInventoryOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  isProcurementProcessingstopped?: NoYes | null;
  isSalesProcessingStopped?: NoYes | null;
  salesWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryQuantityMultiples: DeserializedType<T, 'Edm.Decimal'>;
  salesAtpDelayedSupplyOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  isDefaultInventoryStorageDimensionOverridden?: NoYes | null;
  isProcurementWarehouseMandatory?: NoYes | null;
  salesSiteId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  isInventoryAtpIncludingPlannedOrders: DeserializedType<T, 'Edm.Boolean'>;
  inventoryAtpTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  gupDiscountClaimVendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  dvReleasedProduct?: DvReleasedProductsType<T> | null;
  procurementWarehouse?: WarehousesType<T> | null;
  operationalSite?: OperationalSitesType<T> | null;
  productSize?: ProductSizesType<T> | null;
  productColor?: ProductColorsType<T> | null;
  productVersion?: ProductVersionsType<T> | null;
  productStyle?: ProductStylesType<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
}
