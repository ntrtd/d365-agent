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
import type { BatchOrderHeadersApi } from './BatchOrderHeadersApi';
import { NoYes } from './NoYes';
import { CostProfitSet } from './CostProfitSet';
import { ProdReservation } from './ProdReservation';
import { ProdPostingType } from './ProdPostingType';
import { ProdStatus } from './ProdStatus';
import { ProdSchedStatus } from './ProdSchedStatus';
import { ProdBackStatus } from './ProdBackStatus';
import { SchedDirection } from './SchedDirection';
import { ProdWhsReleasePolicy } from './ProdWhsReleasePolicy';
import {
  BatchOrderFormulaLines,
  BatchOrderFormulaLinesType
} from './BatchOrderFormulaLines';
import {
  BatchOrderByProducts,
  BatchOrderByProductsType
} from './BatchOrderByProducts';
import {
  BatchOrderCoProducts,
  BatchOrderCoProductsType
} from './BatchOrderCoProducts';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  BatchOrderByProductsV2,
  BatchOrderByProductsV2Type
} from './BatchOrderByProductsV2';

/**
 * This class represents the entity "BatchOrderHeaders" of service "d365_metadata".
 */
export class BatchOrderHeaders<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BatchOrderHeadersType<T>
{
  /**
   * Technical entity name for BatchOrderHeaders.
   */
  static override _entityName = 'BatchOrderHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BatchOrderHeaders entity.
   */
  static _keys = ['dataAreaId', 'BatchOrderNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Batch Order Number.
   */
  declare batchOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Formula Version Validity Date.
   */
  declare sourceFormulaVersionValidityDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Scheduled End Date.
   */
  declare scheduledEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Batch Order Route Operation Valid.
   * @nullable
   */
  declare isBatchOrderRouteOperationValid?: NoYes | null;
  /**
   * Is Rework Batch Order.
   * @nullable
   */
  declare isReworkBatchOrder?: NoYes | null;
  /**
   * Remaining Report As Finished Catch Weight Quantity.
   */
  declare remainingReportAsFinishedCatchWeightQuantity: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Subcontracting Purchase Order Number.
   * @nullable
   */
  declare subcontractingPurchaseOrderNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Batch Order Profit Setting Method.
   * @nullable
   */
  declare batchOrderProfitSettingMethod?: CostProfitSet | null;
  /**
   * Production Group Id.
   * @nullable
   */
  declare productionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Time.
   */
  declare deliveryTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Auto Reservation Mode.
   * @nullable
   */
  declare autoReservationMode?: ProdReservation | null;
  /**
   * Ended Date.
   */
  declare endedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Demand Batch Order Line Number.
   * @nullable
   */
  declare demandBatchOrderLineNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Status Id.
   * @nullable
   */
  declare inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Batch Size Catch Weight Quantity.
   */
  declare batchSizeCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Bulk Order.
   * @nullable
   */
  declare isBulkOrder?: NoYes | null;
  /**
   * Batch Order Ledger Posting Rule.
   * @nullable
   */
  declare batchOrderLedgerPostingRule?: ProdPostingType | null;
  /**
   * Reported As Finished Date.
   */
  declare reportedAsFinishedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Production Site Id.
   * @nullable
   */
  declare productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Skip Create Batch Order Formula Lines.
   * @nullable
   */
  declare skipCreateBatchOrderFormulaLines?: NoYes | null;
  /**
   * Planned Receipt Warehouse Id.
   * @nullable
   */
  declare plannedReceiptWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scheduled Date.
   */
  declare scheduledDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Demand Transfer Order Number.
   * @nullable
   */
  declare demandTransferOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Demand Batch Order Line Inventory Lot Id.
   * @nullable
   */
  declare demandBatchOrderLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Demand Sales Order Number.
   * @nullable
   */
  declare demandSalesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Batch Order Status.
   * @nullable
   */
  declare batchOrderStatus?: ProdStatus | null;
  /**
   * Batch Order Name.
   * @nullable
   */
  declare batchOrderName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subcontracting Purchase Order Line Inventory Lot Id.
   * @nullable
   */
  declare subcontractingPurchaseOrderLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Started Date.
   */
  declare startedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Scheduling Method.
   * @nullable
   */
  declare schedulingMethod?: ProdSchedStatus | null;
  /**
   * Is Total Cost Allocation Enabled.
   * @nullable
   */
  declare isTotalCostAllocationEnabled?: NoYes | null;
  /**
   * Scheduled Start Date.
   */
  declare scheduledStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Demand Inventory Journal Line Inventory Lot Id.
   * @nullable
   */
  declare demandInventoryJournalLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Batch Order Level.
   */
  declare batchOrderLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Scheduled Quantity.
   */
  declare scheduledQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumption Density Conversion Factor.
   */
  declare consumptionDensityConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Skip Create Batch Order Route Operations.
   * @nullable
   */
  declare skipCreateBatchOrderRouteOperations?: NoYes | null;
  /**
   * Estimated Date.
   */
  declare estimatedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Demand Batch Order Number.
   * @nullable
   */
  declare demandBatchOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Working Time Scheduling Property Id.
   * @nullable
   */
  declare workingTimeSchedulingPropertyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Consolidated Batch Order Number.
   * @nullable
   */
  declare consolidatedBatchOrderNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Consumption Depth Conversion Factor.
   */
  declare consumptionDepthConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Estimated Catch Weight Quantity.
   */
  declare estimatedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Released Date.
   */
  declare releasedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Inventory Lot Id.
   * @nullable
   */
  declare inventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Batch Order Remainder Status.
   * @nullable
   */
  declare batchOrderRemainderStatus?: ProdBackStatus | null;
  /**
   * Source Planned Order Number.
   * @nullable
   */
  declare sourcePlannedOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Serial Number.
   * @nullable
   */
  declare itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Scheduling Date.
   */
  declare lastSchedulingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Production Pool Id.
   * @nullable
   */
  declare productionPoolId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Started Quantity.
   */
  declare startedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * License Plate Number.
   * @nullable
   */
  declare licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Demand Transfer Order Line Receiving Inventory Lot Id.
   * @nullable
   */
  declare demandTransferOrderLineReceivingInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Scheduled Catch Weight Quantity.
   */
  declare scheduledCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Planning Priority.
   */
  declare planningPriority: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Batch Order Scheduling Locked.
   * @nullable
   */
  declare isBatchOrderSchedulingLocked?: NoYes | null;
  /**
   * Demand Batch Order Header Inventory Lot Id.
   * @nullable
   */
  declare demandBatchOrderHeaderInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Last Scheduling Time.
   */
  declare lastSchedulingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Estimated Quantity.
   */
  declare estimatedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Batch Order Priority.
   */
  declare batchOrderPriority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Demand Sales Order Line Inventory Lot Id.
   * @nullable
   */
  declare demandSalesOrderLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Source Formula Id.
   * @nullable
   */
  declare sourceFormulaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Yield Percentage.
   */
  declare yieldPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Master Plan Id.
   * @nullable
   */
  declare sourceMasterPlanId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Scheduling Date Direction.
   * @nullable
   */
  declare lastSchedulingDateDirection?: SchedDirection | null;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remaining Report As Finished Quantity.
   */
  declare remainingReportAsFinishedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumption Height Conversion Factor.
   */
  declare consumptionHeightConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Route Id.
   * @nullable
   */
  declare sourceRouteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Are Route Jobs Generated.
   * @nullable
   */
  declare areRouteJobsGenerated?: NoYes | null;
  /**
   * Planned Receipt Warehouse Location Id.
   * @nullable
   */
  declare plannedReceiptWarehouseLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Warehouse Release Reservation Requirement Rule.
   * @nullable
   */
  declare warehouseReleaseReservationRequirementRule?: ProdWhsReleasePolicy | null;
  /**
   * Is Co By Product Variation Allowed.
   * @nullable
   */
  declare isCoByProductVariationAllowed?: NoYes | null;
  /**
   * Scheduled Start Time.
   */
  declare scheduledStartTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Delivery Date.
   */
  declare deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Scheduled End Time.
   */
  declare scheduledEndTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Gantt Chart Color Number.
   */
  declare ganttChartColorNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Consumption Width Conversion Factor.
   */
  declare consumptionWidthConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Started Catch Weight Quantity.
   */
  declare startedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Parent Batch Order Number.
   * @nullable
   */
  declare parentBatchOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Demand Inventory Journal Number.
   * @nullable
   */
  declare demandInventoryJournalNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Inventory Owner Id.
   * @nullable
   */
  declare inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link BatchOrderFormulaLines} entity.
   */
  declare batchOrderFormulaLines: BatchOrderFormulaLines<T>[];
  /**
   * One-to-many navigation property to the {@link BatchOrderByProducts} entity.
   */
  declare batchOrderByProducts: BatchOrderByProducts<T>[];
  /**
   * One-to-many navigation property to the {@link BatchOrderCoProducts} entity.
   */
  declare batchOrderCoProducts: BatchOrderCoProducts<T>[];
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-many navigation property to the {@link BatchOrderByProductsV2} entity.
   */
  declare batchOrderByProductsV2: BatchOrderByProductsV2<T>[];

  constructor(_entityApi: BatchOrderHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface BatchOrderHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  batchOrderNumber: DeserializedType<T, 'Edm.String'>;
  sourceFormulaVersionValidityDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  scheduledEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  isBatchOrderRouteOperationValid?: NoYes | null;
  isReworkBatchOrder?: NoYes | null;
  remainingReportAsFinishedCatchWeightQuantity: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  subcontractingPurchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  batchOrderProfitSettingMethod?: CostProfitSet | null;
  productionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTime: DeserializedType<T, 'Edm.Int32'>;
  autoReservationMode?: ProdReservation | null;
  endedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  demandBatchOrderLineNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  batchSizeCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  isBulkOrder?: NoYes | null;
  batchOrderLedgerPostingRule?: ProdPostingType | null;
  reportedAsFinishedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  skipCreateBatchOrderFormulaLines?: NoYes | null;
  plannedReceiptWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  scheduledDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  demandTransferOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  demandBatchOrderLineInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  demandSalesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  batchOrderStatus?: ProdStatus | null;
  batchOrderName?: DeserializedType<T, 'Edm.String'> | null;
  subcontractingPurchaseOrderLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  startedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  schedulingMethod?: ProdSchedStatus | null;
  isTotalCostAllocationEnabled?: NoYes | null;
  scheduledStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  demandInventoryJournalLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  batchOrderLevel: DeserializedType<T, 'Edm.Int32'>;
  scheduledQuantity: DeserializedType<T, 'Edm.Decimal'>;
  consumptionDensityConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  skipCreateBatchOrderRouteOperations?: NoYes | null;
  estimatedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  demandBatchOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  workingTimeSchedulingPropertyId?: DeserializedType<T, 'Edm.String'> | null;
  consolidatedBatchOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  consumptionDepthConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  estimatedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  releasedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  batchOrderRemainderStatus?: ProdBackStatus | null;
  sourcePlannedOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  lastSchedulingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productionPoolId?: DeserializedType<T, 'Edm.String'> | null;
  startedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  demandTransferOrderLineReceivingInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  scheduledCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  planningPriority: DeserializedType<T, 'Edm.Decimal'>;
  isBatchOrderSchedulingLocked?: NoYes | null;
  demandBatchOrderHeaderInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  lastSchedulingTime: DeserializedType<T, 'Edm.Int32'>;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  estimatedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  batchOrderPriority: DeserializedType<T, 'Edm.Int32'>;
  demandSalesOrderLineInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  sourceFormulaId?: DeserializedType<T, 'Edm.String'> | null;
  yieldPercentage: DeserializedType<T, 'Edm.Decimal'>;
  sourceMasterPlanId?: DeserializedType<T, 'Edm.String'> | null;
  lastSchedulingDateDirection?: SchedDirection | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  remainingReportAsFinishedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  consumptionHeightConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  sourceRouteId?: DeserializedType<T, 'Edm.String'> | null;
  areRouteJobsGenerated?: NoYes | null;
  plannedReceiptWarehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseReleaseReservationRequirementRule?: ProdWhsReleasePolicy | null;
  isCoByProductVariationAllowed?: NoYes | null;
  scheduledStartTime: DeserializedType<T, 'Edm.Int32'>;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  scheduledEndTime: DeserializedType<T, 'Edm.Int32'>;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  ganttChartColorNumber: DeserializedType<T, 'Edm.Int32'>;
  consumptionWidthConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  startedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  parentBatchOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  demandInventoryJournalNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  batchOrderFormulaLines: BatchOrderFormulaLinesType<T>[];
  batchOrderByProducts: BatchOrderByProductsType<T>[];
  batchOrderCoProducts: BatchOrderCoProductsType<T>[];
  dimensionSet?: DimensionSetsType<T> | null;
  batchOrderByProductsV2: BatchOrderByProductsV2Type<T>[];
}
