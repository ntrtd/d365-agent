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
import type { ProductionOrderRouteOperationsApi } from './ProductionOrderRouteOperationsApi';
import { RouteOprPriority } from './RouteOprPriority';
import { SchedJobLinkType } from './SchedJobLinkType';
import { NoYes } from './NoYes';
import { RouteOprType } from './RouteOprType';
import { JmgJobPayTypeEnum } from './JmgJobPayTypeEnum';
import { ProdBackStatus } from './ProdBackStatus';
import {
  ProductionOrderHeaders,
  ProductionOrderHeadersType
} from './ProductionOrderHeaders';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  ProductionOrderRouteJobs,
  ProductionOrderRouteJobsType
} from './ProductionOrderRouteJobs';

/**
 * This class represents the entity "ProductionOrderRouteOperations" of service "d365_metadata".
 */
export class ProductionOrderRouteOperations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductionOrderRouteOperationsType<T>
{
  /**
   * Technical entity name for ProductionOrderRouteOperations.
   */
  static override _entityName = 'ProductionOrderRouteOperations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductionOrderRouteOperations entity.
   */
  static _keys = [
    'dataAreaId',
    'ProductionOrderNumber',
    'OperationNumber',
    'OperationPriority'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Production Order Number.
   */
  declare productionOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Operation Number.
   */
  declare operationNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Operation Priority.
   * @nullable
   */
  declare operationPriority?: RouteOprPriority | null;
  /**
   * Scheduled From Time.
   */
  declare scheduledFromTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Process Quantity.
   */
  declare processQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity Cost Category Id.
   * @nullable
   */
  declare quantityCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Estimated Process Time.
   */
  declare estimatedProcessTime: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Setup Production Job Id.
   * @nullable
   */
  declare setupProductionJobId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Next Operation Number.
   */
  declare nextOperationNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Next Operation Link Type.
   * @nullable
   */
  declare nextOperationLinkType?: SchedJobLinkType | null;
  /**
   * Route Group Id.
   * @nullable
   */
  declare routeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Load Percentage.
   */
  declare loadPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Resource Quantity.
   */
  declare resourceQuantity: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Process Production Job Id.
   * @nullable
   */
  declare processProductionJobId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scheduled End Time.
   */
  declare scheduledEndTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Scheduled From Date.
   */
  declare scheduledFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Operations Time To Hour Conversion Factor.
   */
  declare operationsTimeToHourConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Setup Time.
   */
  declare setupTime: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Route Operation Sequence.
   */
  declare routeOperationSequence: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Overlap Operation Quantity.
   */
  declare overlapOperationQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Setup Completion Percentage.
   */
  declare setupCompletionPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Estimated Setup Time.
   */
  declare estimatedSetupTime: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Scheduled End Date.
   */
  declare scheduledEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Queue Time Before.
   */
  declare queueTimeBefore: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Estimated Operation Quantity.
   */
  declare estimatedOperationQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Constant Consumption Released.
   * @nullable
   */
  declare isConstantConsumptionReleased?: NoYes | null;
  /**
   * Process Completion Percentage.
   */
  declare processCompletionPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Operation Started.
   * @nullable
   */
  declare isOperationStarted?: NoYes | null;
  /**
   * Costing Operation Resource Id.
   * @nullable
   */
  declare costingOperationResourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Working Time Scheduling Property Id.
   * @nullable
   */
  declare workingTimeSchedulingPropertyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Accumulated Scrap Percentage.
   */
  declare accumulatedScrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Scrap Percentage.
   */
  declare scrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Queue Time After.
   */
  declare queueTimeAfter: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Operation Id.
   * @nullable
   */
  declare operationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Process Time.
   */
  declare processTime: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Operation Completed.
   * @nullable
   */
  declare isOperationCompleted?: NoYes | null;
  /**
   * Setup Cost Category Id.
   * @nullable
   */
  declare setupCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfer Batch Quantity.
   */
  declare transferBatchQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Route Type.
   * @nullable
   */
  declare routeType?: RouteOprType | null;
  /**
   * Route Operation Rate Method.
   * @nullable
   */
  declare routeOperationRateMethod?: JmgJobPayTypeEnum | null;
  /**
   * Transit Time.
   */
  declare transitTime: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Process Cost Category Id.
   * @nullable
   */
  declare processCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route Operation Remainder Status.
   * @nullable
   */
  declare routeOperationRemainderStatus?: ProdBackStatus | null;
  /**
   * One-to-one navigation property to the {@link ProductionOrderHeaders} entity.
   */
  declare productionOrderHeader?: ProductionOrderHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductionOrderRouteJobs} entity.
   */
  declare productionOrderRouteJobs: ProductionOrderRouteJobs<T>[];

  constructor(_entityApi: ProductionOrderRouteOperationsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductionOrderRouteOperationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productionOrderNumber: DeserializedType<T, 'Edm.String'>;
  operationNumber: DeserializedType<T, 'Edm.Int32'>;
  operationPriority?: RouteOprPriority | null;
  scheduledFromTime: DeserializedType<T, 'Edm.Int32'>;
  processQuantity: DeserializedType<T, 'Edm.Decimal'>;
  quantityCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  estimatedProcessTime: DeserializedType<T, 'Edm.Decimal'>;
  setupProductionJobId?: DeserializedType<T, 'Edm.String'> | null;
  nextOperationNumber: DeserializedType<T, 'Edm.Int32'>;
  nextOperationLinkType?: SchedJobLinkType | null;
  routeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  loadPercentage: DeserializedType<T, 'Edm.Decimal'>;
  resourceQuantity: DeserializedType<T, 'Edm.Int32'>;
  processProductionJobId?: DeserializedType<T, 'Edm.String'> | null;
  scheduledEndTime: DeserializedType<T, 'Edm.Int32'>;
  scheduledFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  operationsTimeToHourConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  setupTime: DeserializedType<T, 'Edm.Decimal'>;
  routeOperationSequence: DeserializedType<T, 'Edm.Int32'>;
  overlapOperationQuantity: DeserializedType<T, 'Edm.Decimal'>;
  setupCompletionPercentage: DeserializedType<T, 'Edm.Decimal'>;
  estimatedSetupTime: DeserializedType<T, 'Edm.Decimal'>;
  scheduledEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  queueTimeBefore: DeserializedType<T, 'Edm.Decimal'>;
  estimatedOperationQuantity: DeserializedType<T, 'Edm.Decimal'>;
  isConstantConsumptionReleased?: NoYes | null;
  processCompletionPercentage: DeserializedType<T, 'Edm.Decimal'>;
  isOperationStarted?: NoYes | null;
  costingOperationResourceId?: DeserializedType<T, 'Edm.String'> | null;
  workingTimeSchedulingPropertyId?: DeserializedType<T, 'Edm.String'> | null;
  accumulatedScrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  scrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  queueTimeAfter: DeserializedType<T, 'Edm.Decimal'>;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  operationId?: DeserializedType<T, 'Edm.String'> | null;
  processTime: DeserializedType<T, 'Edm.Decimal'>;
  isOperationCompleted?: NoYes | null;
  setupCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  transferBatchQuantity: DeserializedType<T, 'Edm.Decimal'>;
  routeType?: RouteOprType | null;
  routeOperationRateMethod?: JmgJobPayTypeEnum | null;
  transitTime: DeserializedType<T, 'Edm.Decimal'>;
  processCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  routeOperationRemainderStatus?: ProdBackStatus | null;
  productionOrderHeader?: ProductionOrderHeadersType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  productionOrderRouteJobs: ProductionOrderRouteJobsType<T>[];
}
