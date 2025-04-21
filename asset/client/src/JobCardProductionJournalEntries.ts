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
import type { JobCardProductionJournalEntriesApi } from './JobCardProductionJournalEntriesApi';
import { NoYes } from './NoYes';
import { RouteOprPriority } from './RouteOprPriority';
import { RouteJobType } from './RouteJobType';
import { ProdErrorCause } from './ProdErrorCause';
import { Operations, OperationsType } from './Operations';
import { Warehouses, WarehousesType } from './Warehouses';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { ItemBatches, ItemBatchesType } from './ItemBatches';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import { ProductSizes, ProductSizesType } from './ProductSizes';
import { ProductColors, ProductColorsType } from './ProductColors';
import { ProductVersions, ProductVersionsType } from './ProductVersions';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import {
  ProductionOrderHeaders,
  ProductionOrderHeadersType
} from './ProductionOrderHeaders';

/**
 * This class represents the entity "JobCardProductionJournalEntries" of service "d365_metadata".
 */
export class JobCardProductionJournalEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements JobCardProductionJournalEntriesType<T>
{
  /**
   * Technical entity name for JobCardProductionJournalEntries.
   */
  static override _entityName = 'JobCardProductionJournalEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobCardProductionJournalEntries entity.
   */
  static _keys = ['dataAreaId', 'JournalNumber', 'JournalLineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Number.
   */
  declare journalNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Line Number.
   */
  declare journalLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Operations Resource Id.
   * @nullable
   */
  declare operationsResourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Picking List Journal Number.
   * @nullable
   */
  declare pickingListJournalNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Job Processing Percentage.
   */
  declare jobProcessingPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posted Date Time.
   */
  declare postedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Consumption Date.
   */
  declare consumptionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Posted.
   * @nullable
   */
  declare isPosted?: NoYes | null;
  /**
   * Production Site Id.
   * @nullable
   */
  declare productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Job Id.
   * @nullable
   */
  declare productionJobId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Description.
   * @nullable
   */
  declare journalDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scheduled End Time.
   */
  declare scheduledEndTime: DeserializedType<T, 'Edm.Int32'>;
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
   * Quantity Cost Category Unit Cost.
   */
  declare quantityCostCategoryUnitCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Hourly Cost Category Rate.
   */
  declare hourlyCostCategoryRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Route Operation Priority.
   * @nullable
   */
  declare routeOperationPriority?: RouteOprPriority | null;
  /**
   * Voucher Number.
   * @nullable
   */
  declare voucherNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Name.
   * @nullable
   */
  declare journalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reported Good Catch Weight Quantity.
   */
  declare reportedGoodCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reported Good Inventory Quantity.
   */
  declare reportedGoodInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Received Inventory Status Id.
   * @nullable
   */
  declare receivedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Report As Finished Production Journal Number.
   * @nullable
   */
  declare reportAsFinishedProductionJournalNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Production Order Number.
   * @nullable
   */
  declare productionOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route Job Type.
   * @nullable
   */
  declare routeJobType?: RouteJobType | null;
  /**
   * Will Route Card Posting Automatically Post Picking List.
   * @nullable
   */
  declare willRouteCardPostingAutomaticallyPostPickingList?: NoYes | null;
  /**
   * Will Last Operation Ending Execute Report As Finished.
   * @nullable
   */
  declare willLastOperationEndingExecuteReportAsFinished?: NoYes | null;
  /**
   * Scheduled Start Time.
   */
  declare scheduledStartTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reported Error Catch Weight Quantity.
   */
  declare reportedErrorCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Hours Route Cost Category Id.
   * @nullable
   */
  declare hoursRouteCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Quantity Route Cost Category Id.
   * @nullable
   */
  declare quantityRouteCostCategoryId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Operation Completed.
   * @nullable
   */
  declare isOperationCompleted?: NoYes | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Registered Hours.
   */
  declare registeredHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Error Cause.
   * @nullable
   */
  declare errorCause?: ProdErrorCause | null;
  /**
   * Reported Error Inventory Quantity.
   */
  declare reportedErrorInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Route Operation Number.
   */
  declare routeOperationNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * License Plate Number.
   * @nullable
   */
  declare licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Job Ended.
   * @nullable
   */
  declare isJobEnded?: NoYes | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Posted User Id.
   * @nullable
   */
  declare postedUserId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Operations} entity.
   */
  declare routeOperation?: Operations<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare warehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link ItemBatches} entity.
   */
  declare itemBatch?: ItemBatches<T> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare productionSite?: OperationalSites<T> | null;
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
   * One-to-one navigation property to the {@link ProductionOrderHeaders} entity.
   */
  declare productionOrderHeader?: ProductionOrderHeaders<T> | null;

  constructor(_entityApi: JobCardProductionJournalEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface JobCardProductionJournalEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNumber: DeserializedType<T, 'Edm.String'>;
  journalLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  operationsResourceId?: DeserializedType<T, 'Edm.String'> | null;
  pickingListJournalNumber?: DeserializedType<T, 'Edm.String'> | null;
  routeOperationId?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  jobProcessingPercentage: DeserializedType<T, 'Edm.Decimal'>;
  postedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consumptionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isPosted?: NoYes | null;
  productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  productionJobId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  journalDescription?: DeserializedType<T, 'Edm.String'> | null;
  scheduledEndTime: DeserializedType<T, 'Edm.Int32'>;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  quantityCostCategoryUnitCost: DeserializedType<T, 'Edm.Decimal'>;
  hourlyCostCategoryRate: DeserializedType<T, 'Edm.Decimal'>;
  routeOperationPriority?: RouteOprPriority | null;
  voucherNumber?: DeserializedType<T, 'Edm.String'> | null;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  reportedGoodCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  reportedGoodInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  receivedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  reportAsFinishedProductionJournalNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  productionOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  routeJobType?: RouteJobType | null;
  willRouteCardPostingAutomaticallyPostPickingList?: NoYes | null;
  willLastOperationEndingExecuteReportAsFinished?: NoYes | null;
  scheduledStartTime: DeserializedType<T, 'Edm.Int32'>;
  reportedErrorCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  hoursRouteCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  quantityRouteCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  isOperationCompleted?: NoYes | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  registeredHours: DeserializedType<T, 'Edm.Decimal'>;
  errorCause?: ProdErrorCause | null;
  reportedErrorInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  routeOperationNumber: DeserializedType<T, 'Edm.Int32'>;
  licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  isJobEnded?: NoYes | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  postedUserId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  routeOperation?: OperationsType<T> | null;
  warehouse?: WarehousesType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  itemBatch?: ItemBatchesType<T> | null;
  productionSite?: OperationalSitesType<T> | null;
  productSize?: ProductSizesType<T> | null;
  productColor?: ProductColorsType<T> | null;
  productVersion?: ProductVersionsType<T> | null;
  productStyle?: ProductStylesType<T> | null;
  productionOrderHeader?: ProductionOrderHeadersType<T> | null;
}
