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
import type { ProductDefaultOrderSettingsApi } from './ProductDefaultOrderSettingsApi';
import { NoYes } from './NoYes';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import {
  DvReleasedProducts,
  DvReleasedProductsType
} from './DvReleasedProducts';
import { Warehouses, WarehousesType } from './Warehouses';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "ProductDefaultOrderSettings" of service "d365_metadata".
 */
export class ProductDefaultOrderSettings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductDefaultOrderSettingsType<T>
{
  /**
   * Technical entity name for ProductDefaultOrderSettings.
   */
  static override _entityName = 'ProductDefaultOrderSettings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductDefaultOrderSettings entity.
   */
  static _keys = ['dataAreaId', 'ItemNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Sales Processing Stopped.
   * @nullable
   */
  declare isSalesProcessingStopped?: NoYes | null;
  /**
   * Maximum Sales Order Quantity.
   */
  declare maximumSalesOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Procurement Warehouse Mandatory.
   * @nullable
   */
  declare isProcurementWarehouseMandatory?: NoYes | null;
  /**
   * Procurement Site Id.
   * @nullable
   */
  declare procurementSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Sales Order Quantity.
   */
  declare minimumSalesOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Procurement Lead Time Days.
   */
  declare procurementLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Maximum Inventory Order Quantity.
   */
  declare maximumInventoryOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Atp Backward Demand Time Fence Days.
   */
  declare inventoryAtpBackwardDemandTimeFenceDays: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Sales Quantity Multiples.
   */
  declare salesQuantityMultiples: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Procurement Warehouse Id.
   * @nullable
   */
  declare procurementWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Lead Time Days.
   */
  declare inventoryLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Inventory Site Id.
   * @nullable
   */
  declare inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Procurement Processingstopped.
   * @nullable
   */
  declare isProcurementProcessingstopped?: NoYes | null;
  /**
   * Procurement Quantity Multiples.
   */
  declare procurementQuantityMultiples: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Atp Delayed Demand Offset Days.
   */
  declare salesAtpDelayedDemandOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Inventory Atp Including Planned Orders.
   */
  declare isInventoryAtpIncludingPlannedOrders: DeserializedType<
    T,
    'Edm.Boolean'
  >;
  /**
   * Standard Procurement Order Quantity.
   */
  declare standardProcurementOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Atp Backward Demand Time Fence Days.
   */
  declare salesAtpBackwardDemandTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Sales Site Mandatory.
   * @nullable
   */
  declare isSalesSiteMandatory?: NoYes | null;
  /**
   * Is Inventory Processing Stopped.
   * @nullable
   */
  declare isInventoryProcessingStopped?: NoYes | null;
  /**
   * Is Sales Atp Including Planned Orders.
   */
  declare isSalesAtpIncludingPlannedOrders: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Minimum Procurement Order Quantity.
   */
  declare minimumProcurementOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Minimum Inventory Order Quantity.
   */
  declare minimumInventoryOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Atp Delayed Supply Offset Days.
   */
  declare salesAtpDelayedSupplyOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Standard Inventory Order Quantity.
   */
  declare standardInventoryOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Lead Time Days.
   */
  declare salesLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Site Id.
   * @nullable
   */
  declare salesSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Atp Delayed Demand Offset Days.
   */
  declare inventoryAtpDelayedDemandOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Inventory Order Promising Method.
   * @nullable
   */
  declare inventoryOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  /**
   * Maximum Procurement Order Quantity.
   */
  declare maximumProcurementOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Order Promising Method.
   * @nullable
   */
  declare salesOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  /**
   * Inventory Atp Delayed Supply Offset Days.
   */
  declare inventoryAtpDelayedSupplyOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Inventory Using Working Days.
   * @nullable
   */
  declare isInventoryUsingWorkingDays?: NoYes | null;
  /**
   * Standard Sales Order Quantity.
   */
  declare standardSalesOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Atp Time Fence Days.
   */
  declare inventoryAtpTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Inventory Atp Backward Supply Time Fence Days.
   */
  declare inventoryAtpBackwardSupplyTimeFenceDays: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Sales Atp Backward Supply Time Fence Days.
   */
  declare salesAtpBackwardSupplyTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Inventory Quantity Multiples.
   */
  declare inventoryQuantityMultiples: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Sales Warehouse Mandatory.
   * @nullable
   */
  declare isSalesWarehouseMandatory?: NoYes | null;
  /**
   * Is Sales Lead Time Overridden.
   * @nullable
   */
  declare isSalesLeadTimeOverridden?: NoYes | null;
  /**
   * Sales Atp Time Fence Days.
   */
  declare salesAtpTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Procurement Using Working Days.
   * @nullable
   */
  declare isProcurementUsingWorkingDays?: NoYes | null;
  /**
   * Are Inventory Order Promising Defaults Overridden.
   * @nullable
   */
  declare areInventoryOrderPromisingDefaultsOverridden?: NoYes | null;
  /**
   * Is Procurement Site Mandatory.
   * @nullable
   */
  declare isProcurementSiteMandatory?: NoYes | null;
  /**
   * Invent Warehouse Id.
   * @nullable
   */
  declare inventWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Are Sales Order Promising Defaults Overridden.
   * @nullable
   */
  declare areSalesOrderPromisingDefaultsOverridden?: NoYes | null;
  /**
   * Is Inventory Warehouse Mandatory.
   * @nullable
   */
  declare isInventoryWarehouseMandatory?: NoYes | null;
  /**
   * Is Inventory Site Mandatory.
   * @nullable
   */
  declare isInventorySiteMandatory?: NoYes | null;
  /**
   * Inventory Dimension Id.
   * @nullable
   */
  declare inventoryDimensionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Warehouse Id.
   * @nullable
   */
  declare salesWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
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
  declare procurementSite?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProduct?: ReleasedProductsV2<T> | null;

  constructor(_entityApi: ProductDefaultOrderSettingsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductDefaultOrderSettingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  isSalesProcessingStopped?: NoYes | null;
  maximumSalesOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  isProcurementWarehouseMandatory?: NoYes | null;
  procurementSiteId?: DeserializedType<T, 'Edm.String'> | null;
  minimumSalesOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  procurementLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  maximumInventoryOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  inventoryAtpBackwardDemandTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  salesQuantityMultiples: DeserializedType<T, 'Edm.Decimal'>;
  procurementWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  isProcurementProcessingstopped?: NoYes | null;
  procurementQuantityMultiples: DeserializedType<T, 'Edm.Decimal'>;
  salesAtpDelayedDemandOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  isInventoryAtpIncludingPlannedOrders: DeserializedType<T, 'Edm.Boolean'>;
  standardProcurementOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  salesAtpBackwardDemandTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  isSalesSiteMandatory?: NoYes | null;
  isInventoryProcessingStopped?: NoYes | null;
  isSalesAtpIncludingPlannedOrders: DeserializedType<T, 'Edm.Boolean'>;
  minimumProcurementOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  minimumInventoryOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  salesAtpDelayedSupplyOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  standardInventoryOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  salesLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  salesSiteId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryAtpDelayedDemandOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  inventoryOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  maximumProcurementOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  salesOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  inventoryAtpDelayedSupplyOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  isInventoryUsingWorkingDays?: NoYes | null;
  standardSalesOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  inventoryAtpTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  inventoryAtpBackwardSupplyTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  salesAtpBackwardSupplyTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  inventoryQuantityMultiples: DeserializedType<T, 'Edm.Decimal'>;
  isSalesWarehouseMandatory?: NoYes | null;
  isSalesLeadTimeOverridden?: NoYes | null;
  salesAtpTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  isProcurementUsingWorkingDays?: NoYes | null;
  areInventoryOrderPromisingDefaultsOverridden?: NoYes | null;
  isProcurementSiteMandatory?: NoYes | null;
  inventWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  areSalesOrderPromisingDefaultsOverridden?: NoYes | null;
  isInventoryWarehouseMandatory?: NoYes | null;
  isInventorySiteMandatory?: NoYes | null;
  inventoryDimensionId?: DeserializedType<T, 'Edm.String'> | null;
  salesWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  dvReleasedProduct?: DvReleasedProductsType<T> | null;
  procurementWarehouse?: WarehousesType<T> | null;
  procurementSite?: OperationalSitesType<T> | null;
  releasedProduct?: ReleasedProductsV2Type<T> | null;
}
