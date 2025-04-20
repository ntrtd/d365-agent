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
import type { WorkPeriodsApi } from './WorkPeriodsApi';

/**
 * This class represents the entity "WorkPeriods" of service "d365_metadata".
 */
export class WorkPeriods<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkPeriodsType<T>
{
  /**
   * Technical entity name for WorkPeriods.
   */
  static override _entityName = 'WorkPeriods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkPeriods entity.
   */
  static _keys = ['WorkCycleId', 'PeriodStartDate'];
  /**
   * Work Cycle Id.
   */
  declare workCycleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Start Date.
   */
  declare periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Comments.
   * @nullable
   */
  declare comments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period End Date.
   */
  declare periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: WorkPeriodsApi<T>) {
    super(_entityApi);
  }
}

export interface WorkPeriodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  workCycleId: DeserializedType<T, 'Edm.String'>;
  periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  comments?: DeserializedType<T, 'Edm.String'> | null;
  periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
