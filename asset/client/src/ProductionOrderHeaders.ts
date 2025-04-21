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
import type { ProductionOrderHeadersApi } from './ProductionOrderHeadersApi';
import { NoYes } from './NoYes';
import { ProdWhsReleasePolicy } from './ProdWhsReleasePolicy';
import { ProdStatus } from './ProdStatus';
import { ProdPostingType } from './ProdPostingType';
import { ProdSchedStatus } from './ProdSchedStatus';
import { ProdReservation } from './ProdReservation';
import { SchedDirection } from './SchedDirection';
import { CostProfitSet } from './CostProfitSet';
import { ProdBackStatus } from './ProdBackStatus';
import {
  RouteCardProductionJournalEntries,
  RouteCardProductionJournalEntriesType
} from './RouteCardProductionJournalEntries';
import { ProductionPools, ProductionPoolsType } from './ProductionPools';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  ProductionOrderBillOfMaterialLines,
  ProductionOrderBillOfMaterialLinesType
} from './ProductionOrderBillOfMaterialLines';
import {
  JobCardProductionJournalEntries,
  JobCardProductionJournalEntriesType
} from './JobCardProductionJournalEntries';
import {
  ProductionOrderRouteOperations,
  ProductionOrderRouteOperationsType
} from './ProductionOrderRouteOperations';
import {
  ProductionPickingListJournalEntries,
  ProductionPickingListJournalEntriesType
} from './ProductionPickingListJournalEntries';
import {
  ProductionOrderRouteJobs,
  ProductionOrderRouteJobsType
} from './ProductionOrderRouteJobs';
import {
  QualityOrderHeaders,
  QualityOrderHeadersType
} from './QualityOrderHeaders';
import {
  ReportAsFinishedProductionJournalEntries,
  ReportAsFinishedProductionJournalEntriesType
} from './ReportAsFinishedProductionJournalEntries';

/**
 * This class represents the entity "ProductionOrderHeaders" of service "d365_metadata".
 */
export class ProductionOrderHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductionOrderHeadersType<T>
{
  /**
   * Technical entity name for ProductionOrderHeaders.
   */
  static override _entityName = 'ProductionOrderHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductionOrderHeaders entity.
   */
  static _keys = ['dataAreaId', 'ProductionOrderNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Production Order Number.
   */
  declare productionOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Are Route Jobs Generated.
   * @nullable
   */
  declare areRouteJobsGenerated?: NoYes | null;
  /**
   * Scheduled Quantity.
   */
  declare scheduledQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Planned Order Number.
   * @nullable
   */
  declare sourcePlannedOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Production Order Scheduling Locked.
   * @nullable
   */
  declare isProductionOrderSchedulingLocked?: NoYes | null;
  /**
   * Warehouse Release Reservation Requirement Rule.
   * @nullable
   */
  declare warehouseReleaseReservationRequirementRule?: ProdWhsReleasePolicy | null;
  /**
   * Demand Production Order Number.
   * @nullable
   */
  declare demandProductionOrderNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Skip Create Production Route Operations.
   * @nullable
   */
  declare skipCreateProductionRouteOperations?: NoYes | null;
  /**
   * Scheduled End Time.
   */
  declare scheduledEndTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Route Id.
   * @nullable
   */
  declare sourceRouteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Group Id.
   * @nullable
   */
  declare productionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Order Status.
   * @nullable
   */
  declare productionOrderStatus?: ProdStatus | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Started Date.
   */
  declare startedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source Master Plan Id.
   * @nullable
   */
  declare sourceMasterPlanId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * License Plate Number.
   * @nullable
   */
  declare licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Production Route Operation Valid.
   * @nullable
   */
  declare isProductionRouteOperationValid?: NoYes | null;
  /**
   * Production Consumption Width Conversion Factor.
   */
  declare productionConsumptionWidthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Demand Inventory Journal Number.
   * @nullable
   */
  declare demandInventoryJournalNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Scheduled Start Date.
   */
  declare scheduledStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Subcontracting Purchase Order Number.
   * @nullable
   */
  declare subcontractingPurchaseOrderNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Date.
   */
  declare deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Started Quantity.
   */
  declare startedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Scheduled Date.
   */
  declare scheduledDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Consumption Depth Conversion Factor.
   */
  declare productionConsumptionDepthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Production Order Ledger Posting Rule.
   * @nullable
   */
  declare productionOrderLedgerPostingRule?: ProdPostingType | null;
  /**
   * Demand Production Order Header Inventory Lot Id.
   * @nullable
   */
  declare demandProductionOrderHeaderInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Production Pool Id.
   * @nullable
   */
  declare productionPoolId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Status Id.
   * @nullable
   */
  declare inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Demand Production Order Line Inventory Lot Id.
   * @nullable
   */
  declare demandProductionOrderLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Inventory Owner Id.
   * @nullable
   */
  declare inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scheduling Method.
   * @nullable
   */
  declare schedulingMethod?: ProdSchedStatus | null;
  /**
   * Demand Sales Order Number.
   * @nullable
   */
  declare demandSalesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remaining Report As Finished Quantity.
   */
  declare remainingReportAsFinishedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Auto Reservation Mode.
   * @nullable
   */
  declare autoReservationMode?: ProdReservation | null;
  /**
   * Production Warehouse Location Id.
   * @nullable
   */
  declare productionWarehouseLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Source Bom Version Validity Date.
   */
  declare sourceBomVersionValidityDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Production Warehouse Id.
   * @nullable
   */
  declare productionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Scheduling Date Direction.
   * @nullable
   */
  declare lastSchedulingDateDirection?: SchedDirection | null;
  /**
   * Production Order Name.
   * @nullable
   */
  declare productionOrderName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Demand Transfer Order Number.
   * @nullable
   */
  declare demandTransferOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Working Time Scheduling Property Id.
   * @nullable
   */
  declare workingTimeSchedulingPropertyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Estimated Date.
   */
  declare estimatedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Product Serial Number.
   * @nullable
   */
  declare productSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reported As Finished Date.
   */
  declare reportedAsFinishedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Last Scheduling Time.
   */
  declare lastSchedulingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Production Consumption Density Conversion Factor.
   */
  declare productionConsumptionDensityConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Production Level.
   */
  declare productionLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Inventory Lot Id.
   * @nullable
   */
  declare inventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Consumption Height Conversion Factor.
   */
  declare productionConsumptionHeightConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Planning Priority.
   */
  declare planningPriority: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Production Order Priority.
   */
  declare productionOrderPriority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Estimated Quantity.
   */
  declare estimatedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Time.
   */
  declare deliveryTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ended Date.
   */
  declare endedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Parent Production Order Number.
   * @nullable
   */
  declare parentProductionOrderNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Site Id.
   * @nullable
   */
  declare productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gantt Chart Color Number.
   */
  declare ganttChartColorNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Bom Id.
   * @nullable
   */
  declare sourceBomId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scheduled End Date.
   */
  declare scheduledEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Last Scheduling Date.
   */
  declare lastSchedulingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Demand Sales Order Line Inventory Lot Id.
   * @nullable
   */
  declare demandSalesOrderLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Subcontracting Purchase Order Line Inventory Lot Id.
   * @nullable
   */
  declare subcontractingPurchaseOrderLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Demand Inventory Journal Line Inventory Lot Id.
   * @nullable
   */
  declare demandInventoryJournalLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Released Date.
   */
  declare releasedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Skip Create Production Bom Lines.
   * @nullable
   */
  declare skipCreateProductionBomLines?: NoYes | null;
  /**
   * Production Order Profit Setting Method.
   * @nullable
   */
  declare productionOrderProfitSettingMethod?: CostProfitSet | null;
  /**
   * Demand Transfer Order Line Receiving Inventory Lot Id.
   * @nullable
   */
  declare demandTransferOrderLineReceivingInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Production Order Remainder Status.
   * @nullable
   */
  declare productionOrderRemainderStatus?: ProdBackStatus | null;
  /**
   * Scheduled Start Time.
   */
  declare scheduledStartTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Demand Production Order Line Number.
   * @nullable
   */
  declare demandProductionOrderLineNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-many navigation property to the {@link RouteCardProductionJournalEntries} entity.
   */
  declare routeCardProductionJournalEntries: RouteCardProductionJournalEntries<T>[];
  /**
   * One-to-one navigation property to the {@link ProductionPools} entity.
   */
  declare productionPool?: ProductionPools<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductionOrderHeaders} entity.
   */
  declare parentProductionOrderHeader?: ProductionOrderHeaders<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductionOrderHeaders} entity.
   */
  declare childProductionOrderHeaders: ProductionOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ProductionOrderBillOfMaterialLines} entity.
   */
  declare produtionOrderBomLines: ProductionOrderBillOfMaterialLines<T>[];
  /**
   * One-to-many navigation property to the {@link JobCardProductionJournalEntries} entity.
   */
  declare jobCardProductionJournalEntries: JobCardProductionJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link ProductionOrderRouteOperations} entity.
   */
  declare produtionOrderRouteOperations: ProductionOrderRouteOperations<T>[];
  /**
   * One-to-many navigation property to the {@link ProductionPickingListJournalEntries} entity.
   */
  declare productionPickingListJournalEntries: ProductionPickingListJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link ProductionOrderRouteJobs} entity.
   */
  declare productionOrderRouteJobs: ProductionOrderRouteJobs<T>[];
  /**
   * One-to-many navigation property to the {@link QualityOrderHeaders} entity.
   */
  declare qualityOrderHeaders: QualityOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ReportAsFinishedProductionJournalEntries} entity.
   */
  declare reportAsFinishedProductionJournalEntries: ReportAsFinishedProductionJournalEntries<T>[];

  constructor(_entityApi: ProductionOrderHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface ProductionOrderHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productionOrderNumber: DeserializedType<T, 'Edm.String'>;
  areRouteJobsGenerated?: NoYes | null;
  scheduledQuantity: DeserializedType<T, 'Edm.Decimal'>;
  sourcePlannedOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  isProductionOrderSchedulingLocked?: NoYes | null;
  warehouseReleaseReservationRequirementRule?: ProdWhsReleasePolicy | null;
  demandProductionOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  skipCreateProductionRouteOperations?: NoYes | null;
  scheduledEndTime: DeserializedType<T, 'Edm.Int32'>;
  sourceRouteId?: DeserializedType<T, 'Edm.String'> | null;
  productionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  productionOrderStatus?: ProdStatus | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  startedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceMasterPlanId?: DeserializedType<T, 'Edm.String'> | null;
  licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  isProductionRouteOperationValid?: NoYes | null;
  productionConsumptionWidthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  demandInventoryJournalNumber?: DeserializedType<T, 'Edm.String'> | null;
  scheduledStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  subcontractingPurchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  startedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  scheduledDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  productionConsumptionDepthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  productionOrderLedgerPostingRule?: ProdPostingType | null;
  demandProductionOrderHeaderInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  productionPoolId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  demandProductionOrderLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  schedulingMethod?: ProdSchedStatus | null;
  demandSalesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  remainingReportAsFinishedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  autoReservationMode?: ProdReservation | null;
  productionWarehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  sourceBomVersionValidityDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  lastSchedulingDateDirection?: SchedDirection | null;
  productionOrderName?: DeserializedType<T, 'Edm.String'> | null;
  demandTransferOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  workingTimeSchedulingPropertyId?: DeserializedType<T, 'Edm.String'> | null;
  estimatedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  reportedAsFinishedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lastSchedulingTime: DeserializedType<T, 'Edm.Int32'>;
  productionConsumptionDensityConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  productionLevel: DeserializedType<T, 'Edm.Int32'>;
  inventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  productionConsumptionHeightConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  planningPriority: DeserializedType<T, 'Edm.Decimal'>;
  productionOrderPriority: DeserializedType<T, 'Edm.Int32'>;
  estimatedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  deliveryTime: DeserializedType<T, 'Edm.Int32'>;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  endedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  parentProductionOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  ganttChartColorNumber: DeserializedType<T, 'Edm.Int32'>;
  sourceBomId?: DeserializedType<T, 'Edm.String'> | null;
  scheduledEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lastSchedulingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  demandSalesOrderLineInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  subcontractingPurchaseOrderLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  demandInventoryJournalLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  releasedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  skipCreateProductionBomLines?: NoYes | null;
  productionOrderProfitSettingMethod?: CostProfitSet | null;
  demandTransferOrderLineReceivingInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  productionOrderRemainderStatus?: ProdBackStatus | null;
  scheduledStartTime: DeserializedType<T, 'Edm.Int32'>;
  demandProductionOrderLineNumber?: DeserializedType<T, 'Edm.String'> | null;
  routeCardProductionJournalEntries: RouteCardProductionJournalEntriesType<T>[];
  productionPool?: ProductionPoolsType<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  parentProductionOrderHeader?: ProductionOrderHeadersType<T> | null;
  childProductionOrderHeaders: ProductionOrderHeadersType<T>[];
  produtionOrderBomLines: ProductionOrderBillOfMaterialLinesType<T>[];
  jobCardProductionJournalEntries: JobCardProductionJournalEntriesType<T>[];
  produtionOrderRouteOperations: ProductionOrderRouteOperationsType<T>[];
  productionPickingListJournalEntries: ProductionPickingListJournalEntriesType<T>[];
  productionOrderRouteJobs: ProductionOrderRouteJobsType<T>[];
  qualityOrderHeaders: QualityOrderHeadersType<T>[];
  reportAsFinishedProductionJournalEntries: ReportAsFinishedProductionJournalEntriesType<T>[];
}
