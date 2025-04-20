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
import type { ProductionOrderRouteJobsApi } from './ProductionOrderRouteJobsApi';
import { SchedJobLinkType } from './SchedJobLinkType';
import { SchedJobLink } from './SchedJobLink';
import { RouteJobType } from './RouteJobType';
import { RouteOprPriority } from './RouteOprPriority';
import { ProdJobStatus } from './ProdJobStatus';
import { NoYes } from './NoYes';
import {
  ProductionOrderRouteOperations,
  ProductionOrderRouteOperationsType
} from './ProductionOrderRouteOperations';
import {
  ProductionOrderHeaders,
  ProductionOrderHeadersType
} from './ProductionOrderHeaders';

/**
 * This class represents the entity "ProductionOrderRouteJobs" of service "d365_metadata".
 */
export class ProductionOrderRouteJobs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductionOrderRouteJobsType<T>
{
  /**
   * Technical entity name for ProductionOrderRouteJobs.
   */
  static override _entityName = 'ProductionOrderRouteJobs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductionOrderRouteJobs entity.
   */
  static _keys = ['dataAreaId', 'JobId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Id.
   */
  declare jobId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operations Resource Id.
   * @nullable
   */
  declare operationsResourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scheduled From Time.
   */
  declare scheduledFromTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Calculated Job Duration Hours.
   */
  declare calculatedJobDurationHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Job Processing Percentage.
   */
  declare jobProcessingPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Actual End Date.
   */
  declare actualEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Next Operation Link Type.
   * @nullable
   */
  declare nextOperationLinkType?: SchedJobLinkType | null;
  /**
   * Secondary Job Number.
   */
  declare secondaryJobNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Scheduled End Time.
   */
  declare scheduledEndTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Actual From Time.
   */
  declare actualFromTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Scheduled From Date.
   */
  declare scheduledFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Job Sequence.
   */
  declare jobSequence: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Next Operation Link.
   * @nullable
   */
  declare nextOperationLink?: SchedJobLink | null;
  /**
   * Scheduled End Date.
   */
  declare scheduledEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Production Order Number.
   * @nullable
   */
  declare productionOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Actual From Date.
   */
  declare actualFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Route Job Type.
   * @nullable
   */
  declare routeJobType?: RouteJobType | null;
  /**
   * Operation Priority.
   * @nullable
   */
  declare operationPriority?: RouteOprPriority | null;
  /**
   * Actual End Time.
   */
  declare actualEndTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Working Time Scheduling Property Id.
   * @nullable
   */
  declare workingTimeSchedulingPropertyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Job Status.
   * @nullable
   */
  declare jobStatus?: ProdJobStatus | null;
  /**
   * Scheduled Job Duration Hours.
   */
  declare scheduledJobDurationHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Job Cancelled.
   * @nullable
   */
  declare isJobCancelled?: NoYes | null;
  /**
   * Primary Job Number.
   */
  declare primaryJobNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Job Ended.
   * @nullable
   */
  declare isJobEnded?: NoYes | null;
  /**
   * Operation Number.
   */
  declare operationNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Job Management Used.
   * @nullable
   */
  declare isJobManagementUsed?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link ProductionOrderRouteOperations} entity.
   */
  declare productionOrderRouteOperation?: ProductionOrderRouteOperations<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductionOrderHeaders} entity.
   */
  declare productionOrderHeader?: ProductionOrderHeaders<T> | null;

  constructor(_entityApi: ProductionOrderRouteJobsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductionOrderRouteJobsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  jobId: DeserializedType<T, 'Edm.String'>;
  operationsResourceId?: DeserializedType<T, 'Edm.String'> | null;
  scheduledFromTime: DeserializedType<T, 'Edm.Int32'>;
  calculatedJobDurationHours: DeserializedType<T, 'Edm.Decimal'>;
  jobProcessingPercentage: DeserializedType<T, 'Edm.Decimal'>;
  actualEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  nextOperationLinkType?: SchedJobLinkType | null;
  secondaryJobNumber: DeserializedType<T, 'Edm.Int32'>;
  scheduledEndTime: DeserializedType<T, 'Edm.Int32'>;
  actualFromTime: DeserializedType<T, 'Edm.Int32'>;
  scheduledFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  jobSequence: DeserializedType<T, 'Edm.Int32'>;
  nextOperationLink?: SchedJobLink | null;
  scheduledEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productionOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  actualFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  routeJobType?: RouteJobType | null;
  operationPriority?: RouteOprPriority | null;
  actualEndTime: DeserializedType<T, 'Edm.Int32'>;
  workingTimeSchedulingPropertyId?: DeserializedType<T, 'Edm.String'> | null;
  jobStatus?: ProdJobStatus | null;
  scheduledJobDurationHours: DeserializedType<T, 'Edm.Decimal'>;
  isJobCancelled?: NoYes | null;
  primaryJobNumber: DeserializedType<T, 'Edm.Int32'>;
  isJobEnded?: NoYes | null;
  operationNumber: DeserializedType<T, 'Edm.Int32'>;
  isJobManagementUsed?: NoYes | null;
  productionOrderRouteOperation?: ProductionOrderRouteOperationsType<T> | null;
  productionOrderHeader?: ProductionOrderHeadersType<T> | null;
}
