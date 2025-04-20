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
import type { FiscalCalendarsApi } from './FiscalCalendarsApi';
import { FiscalQuarter } from './FiscalQuarter';
import { FiscalPeriodMonth } from './FiscalPeriodMonth';

/**
 * This class represents the entity "FiscalCalendars" of service "d365_metadata".
 */
export class FiscalCalendars<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FiscalCalendarsType<T>
{
  /**
   * Technical entity name for FiscalCalendars.
   */
  static override _entityName = 'FiscalCalendars';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalCalendars entity.
   */
  static _keys = ['LedgerGregorianDateId'];
  /**
   * Ledger Gregorian Date Id.
   */
  declare ledgerGregorianDateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Rec Id.
   */
  declare periodRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Year Offset.
   */
  declare yearOffset: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Calendar Rec Id.
   */
  declare calendarRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Period Name.
   * @nullable
   */
  declare periodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Year Name.
   * @nullable
   */
  declare yearName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quarter.
   * @nullable
   */
  declare quarter?: FiscalQuarter | null;
  /**
   * Ledger Rec Id.
   */
  declare ledgerRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Gregorian Date.
   */
  declare gregorianDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Quarter Offset.
   */
  declare quarterOffset: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Month.
   * @nullable
   */
  declare month?: FiscalPeriodMonth | null;
  /**
   * Calendar Id.
   * @nullable
   */
  declare calendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period Offset.
   */
  declare periodOffset: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: FiscalCalendarsApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalCalendarsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  ledgerGregorianDateId: DeserializedType<T, 'Edm.String'>;
  periodRecId: DeserializedType<T, 'Edm.Int64'>;
  yearOffset: DeserializedType<T, 'Edm.Int32'>;
  calendarRecId: DeserializedType<T, 'Edm.Int64'>;
  periodName?: DeserializedType<T, 'Edm.String'> | null;
  yearName?: DeserializedType<T, 'Edm.String'> | null;
  quarter?: FiscalQuarter | null;
  ledgerRecId: DeserializedType<T, 'Edm.Int64'>;
  gregorianDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  quarterOffset: DeserializedType<T, 'Edm.Int32'>;
  month?: FiscalPeriodMonth | null;
  calendarId?: DeserializedType<T, 'Edm.String'> | null;
  periodOffset: DeserializedType<T, 'Edm.Int32'>;
}
