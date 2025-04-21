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
import type { FiscalCalendarYearBiEntitiesApi } from './FiscalCalendarYearBiEntitiesApi';

/**
 * This class represents the entity "FiscalCalendarYearBiEntities" of service "d365_metadata".
 */
export class FiscalCalendarYearBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalCalendarYearBiEntitiesType<T>
{
  /**
   * Technical entity name for FiscalCalendarYearBiEntities.
   */
  static override _entityName = 'FiscalCalendarYearBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalCalendarYearBiEntities entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Calendar.
   */
  declare fiscalCalendar: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: FiscalCalendarYearBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalCalendarYearBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  fiscalCalendar: DeserializedType<T, 'Edm.Int64'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
}
