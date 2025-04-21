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
import type { FiscalCalendarYearsApi } from './FiscalCalendarYearsApi';

/**
 * This class represents the entity "FiscalCalendarYears" of service "d365_metadata".
 */
export class FiscalCalendarYears<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FiscalCalendarYearsType<T>
{
  /**
   * Technical entity name for FiscalCalendarYears.
   */
  static override _entityName = 'FiscalCalendarYears';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalCalendarYears entity.
   */
  static _keys = ['Calendar', 'FiscalYear'];
  /**
   * Calendar.
   */
  declare calendar: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Year.
   */
  declare fiscalYear: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: FiscalCalendarYearsApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalCalendarYearsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  calendar: DeserializedType<T, 'Edm.String'>;
  fiscalYear: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
