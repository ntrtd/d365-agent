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
import type { DueDateLimitsApi } from './DueDateLimitsApi';
import { DueDateLimitPeriodUnitEs } from './DueDateLimitPeriodUnitEs';

/**
 * This class represents the entity "DueDateLimits" of service "d365_metadata".
 */
export class DueDateLimits<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DueDateLimitsType<T>
{
  /**
   * Technical entity name for DueDateLimits.
   */
  static override _entityName = 'DueDateLimits';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DueDateLimits entity.
   */
  static _keys = ['dataAreaId', 'DueDateLimit', 'StartDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Due Date Limit.
   */
  declare dueDateLimit: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Period Interval.
   * @nullable
   */
  declare periodInterval?: DueDateLimitPeriodUnitEs | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Units.
   */
  declare numberOfUnits: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: DueDateLimitsApi<T>) {
    super(_entityApi);
  }
}

export interface DueDateLimitsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  dueDateLimit: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  periodInterval?: DueDateLimitPeriodUnitEs | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  numberOfUnits: DeserializedType<T, 'Edm.Int32'>;
}
