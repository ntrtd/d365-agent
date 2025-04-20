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
import type { OperationsResourceCapacityReservationsApi } from './OperationsResourceCapacityReservationsApi';
import { WrkCtrCapRefType } from './WrkCtrCapRefType';
import { RouteOprPriority } from './RouteOprPriority';
import { WrkCtrCapacityType } from './WrkCtrCapacityType';
import { NoYes } from './NoYes';
import { RouteJobType } from './RouteJobType';

/**
 * This class represents the entity "OperationsResourceCapacityReservations" of service "d365_metadata".
 */
export class OperationsResourceCapacityReservations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OperationsResourceCapacityReservationsType<T>
{
  /**
   * Technical entity name for OperationsResourceCapacityReservations.
   */
  static override _entityName = 'OperationsResourceCapacityReservations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OperationsResourceCapacityReservations entity.
   */
  static _keys = ['dataAreaId', 'RecordId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Capacity Reservation Seconds.
   */
  declare capacityReservationSeconds: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Operations Resource Id.
   * @nullable
   */
  declare operationsResourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reservation Source Type.
   * @nullable
   */
  declare reservationSourceType?: WrkCtrCapRefType | null;
  /**
   * Reserve Hours.
   */
  declare reserveHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Production Order Route Job Id.
   * @nullable
   */
  declare productionOrderRouteJobId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Load Percentage.
   */
  declare loadPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Scheduled End Time.
   */
  declare scheduledEndTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Planned Order Number.
   * @nullable
   */
  declare plannedOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route Operation Priority.
   * @nullable
   */
  declare routeOperationPriority?: RouteOprPriority | null;
  /**
   * Capacity Scheduling Type.
   * @nullable
   */
  declare capacitySchedulingType?: WrkCtrCapacityType | null;
  /**
   * Is Reservation Locked.
   * @nullable
   */
  declare isReservationLocked?: NoYes | null;
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
   * Scheduled Start Time.
   */
  declare scheduledStartTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Project Activity Id.
   * @nullable
   */
  declare projectActivityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Working Time Scheduling Property Id.
   * @nullable
   */
  declare workingTimeSchedulingPropertyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Requirement Plan Id.
   * @nullable
   */
  declare requirementPlanId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reservation Date.
   */
  declare reservationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route Operation Number.
   */
  declare routeOperationNumber: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: OperationsResourceCapacityReservationsApi<T>) {
    super(_entityApi);
  }
}

export interface OperationsResourceCapacityReservationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  recordId: DeserializedType<T, 'Edm.Int64'>;
  capacityReservationSeconds: DeserializedType<T, 'Edm.Decimal'>;
  operationsResourceId?: DeserializedType<T, 'Edm.String'> | null;
  reservationSourceType?: WrkCtrCapRefType | null;
  reserveHours: DeserializedType<T, 'Edm.Decimal'>;
  productionOrderRouteJobId?: DeserializedType<T, 'Edm.String'> | null;
  loadPercentage: DeserializedType<T, 'Edm.Decimal'>;
  scheduledEndTime: DeserializedType<T, 'Edm.Int32'>;
  plannedOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  routeOperationPriority?: RouteOprPriority | null;
  capacitySchedulingType?: WrkCtrCapacityType | null;
  isReservationLocked?: NoYes | null;
  productionOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  routeJobType?: RouteJobType | null;
  scheduledStartTime: DeserializedType<T, 'Edm.Int32'>;
  projectActivityId?: DeserializedType<T, 'Edm.String'> | null;
  workingTimeSchedulingPropertyId?: DeserializedType<T, 'Edm.String'> | null;
  requirementPlanId?: DeserializedType<T, 'Edm.String'> | null;
  reservationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  routeOperationNumber: DeserializedType<T, 'Edm.Int32'>;
}
