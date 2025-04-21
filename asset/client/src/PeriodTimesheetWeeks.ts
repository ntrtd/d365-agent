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
import type { PeriodTimesheetWeeksApi } from './PeriodTimesheetWeeksApi';

/**
 * This class represents the entity "PeriodTimesheetWeeks" of service "d365_metadata".
 */
export class PeriodTimesheetWeeks<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PeriodTimesheetWeeksType<T>
{
  /**
   * Technical entity name for PeriodTimesheetWeeks.
   */
  static override _entityName = 'PeriodTimesheetWeeks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PeriodTimesheetWeeks entity.
   */
  static _keys = ['dataAreaId', 'PeriodId', 'PeriodFrom', 'PeriodTo'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Id.
   */
  declare periodId: DeserializedType<T, 'Edm.String'>;
  /**
   * Period From.
   */
  declare periodFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Period To.
   */
  declare periodTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Period Name.
   * @nullable
   */
  declare periodName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PeriodTimesheetWeeksApi<T>) {
    super(_entityApi);
  }
}

export interface PeriodTimesheetWeeksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  periodId: DeserializedType<T, 'Edm.String'>;
  periodFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  periodTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  periodName?: DeserializedType<T, 'Edm.String'> | null;
}
