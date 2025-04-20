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
import type { QualityOrderHeadersApi } from './QualityOrderHeadersApi';
import { NoYes } from './NoYes';
import { InventTestReferenceType } from './InventTestReferenceType';
import { InventTestOrderStatus } from './InventTestOrderStatus';
import {
  ItemBatchAttributeValuesV2,
  ItemBatchAttributeValuesV2Type
} from './ItemBatchAttributeValuesV2';
import {
  PurchaseOrderHeadersV2,
  PurchaseOrderHeadersV2Type
} from './PurchaseOrderHeadersV2';
import { Workers, WorkersType } from './Workers';
import {
  WarehouseLocations,
  WarehouseLocationsType
} from './WarehouseLocations';
import { Operations, OperationsType } from './Operations';
import { RouteHeaders, RouteHeadersType } from './RouteHeaders';
import {
  SalesOrderHeadersV2,
  SalesOrderHeadersV2Type
} from './SalesOrderHeadersV2';
import { Warehouses, WarehousesType } from './Warehouses';
import { ItemBatches, ItemBatchesType } from './ItemBatches';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { ProductSizes, ProductSizesType } from './ProductSizes';
import { CustomersV3, CustomersV3Type } from './CustomersV3';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import { ProductColors, ProductColorsType } from './ProductColors';
import { ProductVersions, ProductVersionsType } from './ProductVersions';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import {
  ProductionOrderHeaders,
  ProductionOrderHeadersType
} from './ProductionOrderHeaders';
import {
  SalesOrderHeadersV3,
  SalesOrderHeadersV3Type
} from './SalesOrderHeadersV3';
import { LicensePlates, LicensePlatesType } from './LicensePlates';
import {
  InboundShipmentOrderHeaders,
  InboundShipmentOrderHeadersType
} from './InboundShipmentOrderHeaders';

/**
 * This class represents the entity "QualityOrderHeaders" of service "d365_metadata".
 */
export class QualityOrderHeaders<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements QualityOrderHeadersType<T>
{
  /**
   * Technical entity name for QualityOrderHeaders.
   */
  static override _entityName = 'QualityOrderHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the QualityOrderHeaders entity.
   */
  static _keys = ['dataAreaId', 'QualityOrderNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Quality Order Number.
   */
  declare qualityOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Operations Resource Id.
   * @nullable
   */
  declare operationsResourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Passed Batch Disposition Code.
   * @nullable
   */
  declare passedBatchDispositionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route Operation Id.
   * @nullable
   */
  declare routeOperationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Validated Date Time.
   */
  declare validatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Inventory Status Id.
   * @nullable
   */
  declare inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Inventory Status Defaulted With Test Measurement.
   * @nullable
   */
  declare isInventoryStatusDefaultedWithTestMeasurement?: NoYes | null;
  /**
   * Sales Order Number.
   * @nullable
   */
  declare salesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quality Test Group Id.
   * @nullable
   */
  declare qualityTestGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Inventory Lot Id.
   * @nullable
   */
  declare referenceInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route Id.
   * @nullable
   */
  declare routeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Site Id.
   * @nullable
   */
  declare inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Acceptable Quality Level Percentage.
   */
  declare acceptableQualityLevelPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Batch Disposition Status Defaulted With Test Measurement.
   * @nullable
   */
  declare isBatchDispositionStatusDefaultedWithTestMeasurement?: NoYes | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Serial Number.
   * @nullable
   */
  declare itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Owner Id.
   * @nullable
   */
  declare inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Quantity.
   */
  declare inventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Failed Order Inventory Status Id.
   * @nullable
   */
  declare failedOrderInventoryStatusId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Warehouse Location Id.
   * @nullable
   */
  declare warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Sampling Id.
   * @nullable
   */
  declare itemSamplingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Order Number.
   * @nullable
   */
  declare productionOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Batch Attribute Value Defaulted With Test Measurement.
   * @nullable
   */
  declare isBatchAttributeValueDefaultedWithTestMeasurement?: NoYes | null;
  /**
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Lot Id.
   * @nullable
   */
  declare inventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Failed Batch Disposition Code.
   * @nullable
   */
  declare failedBatchDispositionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Validating Personnel Number.
   * @nullable
   */
  declare validatingPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Passed Inventory Status Id.
   * @nullable
   */
  declare passedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Number.
   * @nullable
   */
  declare purchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quality Order Policy Type.
   * @nullable
   */
  declare qualityOrderPolicyType?: InventTestReferenceType | null;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quality Order Status.
   * @nullable
   */
  declare qualityOrderStatus?: InventTestOrderStatus | null;
  /**
   * Production Order Route Operation Number.
   */
  declare productionOrderRouteOperationNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Catch Weight Quantity.
   */
  declare catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Destructive Test.
   * @nullable
   */
  declare isDestructiveTest?: NoYes | null;
  /**
   * Is Quality Order Failure Creating Quantine Order.
   * @nullable
   */
  declare isQualityOrderFailureCreatingQuantineOrder?: NoYes | null;
  /**
   * License Plate Number.
   * @nullable
   */
  declare licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inbound Shipment Order Number.
   * @nullable
   */
  declare inboundShipmentOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ItemBatchAttributeValuesV2} entity.
   */
  declare itemBatchAttributeValues: ItemBatchAttributeValuesV2<T>[];
  /**
   * One-to-one navigation property to the {@link PurchaseOrderHeadersV2} entity.
   */
  declare purchaseOrderHeaderV2?: PurchaseOrderHeadersV2<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare validatingWorker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseLocations} entity.
   */
  declare warehouseLocation?: WarehouseLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link Operations} entity.
   */
  declare routeOperation?: Operations<T> | null;
  /**
   * One-to-one navigation property to the {@link RouteHeaders} entity.
   */
  declare routeHeader?: RouteHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrderHeadersV2} entity.
   */
  declare salesOrderHeaderV2?: SalesOrderHeadersV2<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare warehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link ItemBatches} entity.
   */
  declare itemBatch?: ItemBatches<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSizes} entity.
   */
  declare productSize?: ProductSizes<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare customerV3?: CustomersV3<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare vendorV2?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare inventorySite?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductColors} entity.
   */
  declare productColor?: ProductColors<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductVersions} entity.
   */
  declare productVersion?: ProductVersions<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare productStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductionOrderHeaders} entity.
   */
  declare productionOrderHeader?: ProductionOrderHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrderHeadersV3} entity.
   */
  declare salesOrderHeaderV3?: SalesOrderHeadersV3<T> | null;
  /**
   * One-to-one navigation property to the {@link LicensePlates} entity.
   */
  declare licensePlate?: LicensePlates<T> | null;
  /**
   * One-to-one navigation property to the {@link InboundShipmentOrderHeaders} entity.
   */
  declare inboundShipmentOrderHeader?: InboundShipmentOrderHeaders<T> | null;

  constructor(_entityApi: QualityOrderHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface QualityOrderHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  qualityOrderNumber: DeserializedType<T, 'Edm.String'>;
  operationsResourceId?: DeserializedType<T, 'Edm.String'> | null;
  passedBatchDispositionCode?: DeserializedType<T, 'Edm.String'> | null;
  routeOperationId?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  validatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  isInventoryStatusDefaultedWithTestMeasurement?: NoYes | null;
  salesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  qualityTestGroupId?: DeserializedType<T, 'Edm.String'> | null;
  referenceInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  routeId?: DeserializedType<T, 'Edm.String'> | null;
  inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  acceptableQualityLevelPercentage: DeserializedType<T, 'Edm.Decimal'>;
  isBatchDispositionStatusDefaultedWithTestMeasurement?: NoYes | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  failedOrderInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  itemSamplingId?: DeserializedType<T, 'Edm.String'> | null;
  productionOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  isBatchAttributeValueDefaultedWithTestMeasurement?: NoYes | null;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  failedBatchDispositionCode?: DeserializedType<T, 'Edm.String'> | null;
  validatingPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  passedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  qualityOrderPolicyType?: InventTestReferenceType | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  qualityOrderStatus?: InventTestOrderStatus | null;
  productionOrderRouteOperationNumber: DeserializedType<T, 'Edm.Int32'>;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  isDestructiveTest?: NoYes | null;
  isQualityOrderFailureCreatingQuantineOrder?: NoYes | null;
  licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  inboundShipmentOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchAttributeValues: ItemBatchAttributeValuesV2Type<T>[];
  purchaseOrderHeaderV2?: PurchaseOrderHeadersV2Type<T> | null;
  validatingWorker?: WorkersType<T> | null;
  warehouseLocation?: WarehouseLocationsType<T> | null;
  routeOperation?: OperationsType<T> | null;
  routeHeader?: RouteHeadersType<T> | null;
  salesOrderHeaderV2?: SalesOrderHeadersV2Type<T> | null;
  warehouse?: WarehousesType<T> | null;
  itemBatch?: ItemBatchesType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  productSize?: ProductSizesType<T> | null;
  customerV3?: CustomersV3Type<T> | null;
  vendorV2?: VendorsV2Type<T> | null;
  inventorySite?: OperationalSitesType<T> | null;
  productColor?: ProductColorsType<T> | null;
  productVersion?: ProductVersionsType<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
  productStyle?: ProductStylesType<T> | null;
  productionOrderHeader?: ProductionOrderHeadersType<T> | null;
  salesOrderHeaderV3?: SalesOrderHeadersV3Type<T> | null;
  licensePlate?: LicensePlatesType<T> | null;
  inboundShipmentOrderHeader?: InboundShipmentOrderHeadersType<T> | null;
}
