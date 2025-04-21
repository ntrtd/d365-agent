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
import type { FiscalCalendarPeriodBiEntitiesApi } from './FiscalCalendarPeriodBiEntitiesApi';
import { FiscalQuarter } from './FiscalQuarter';
import { FiscalPeriodMonth } from './FiscalPeriodMonth';
import { FiscalPeriodType } from './FiscalPeriodType';

/**
 * This class represents the entity "FiscalCalendarPeriodBiEntities" of service "d365_metadata".
 */
export class FiscalCalendarPeriodBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalCalendarPeriodBiEntitiesType<T>
{
  /**
   * Technical entity name for FiscalCalendarPeriodBiEntities.
   */
  static override _entityName = 'FiscalCalendarPeriodBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalCalendarPeriodBiEntities entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Calendar Year.
   */
  declare fiscalCalendarYear: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Short Name.
   * @nullable
   */
  declare shortName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Quarter.
   * @nullable
   */
  declare quarter?: FiscalQuarter | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Month.
   * @nullable
   */
  declare month?: FiscalPeriodMonth | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: FiscalPeriodType | null;

  constructor(_entityApi: FiscalCalendarPeriodBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalCalendarPeriodBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  fiscalCalendarYear: DeserializedType<T, 'Edm.Int64'>;
  shortName?: DeserializedType<T, 'Edm.String'> | null;
  fiscalCalendar: DeserializedType<T, 'Edm.Int64'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  quarter?: FiscalQuarter | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  month?: FiscalPeriodMonth | null;
  type?: FiscalPeriodType | null;
}
