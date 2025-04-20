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
import type { CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriodsApi } from './CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriodsApi';

/**
 * This class represents the entity "CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods" of service "d365_metadata".
 */
export class CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements
    CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriodsType<T>
{
  /**
   * Technical entity name for CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods.
   */
  static override _entityName =
    'CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriods entity.
   */
  static _keys = [
    'DataConnectorSystemInstanceSurrogateKey',
    'CalendarId',
    'PeriodName'
  ];
  /**
   * Data Connector System Instance Surrogate Key.
   */
  declare dataConnectorSystemInstanceSurrogateKey: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Calendar Id.
   */
  declare calendarId: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Name.
   */
  declare periodName: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(
    _entityApi: CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriodsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface CostAccountingDataConnectorSystemInstanceFiscalCalendarPeriodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>;
  calendarId: DeserializedType<T, 'Edm.String'>;
  periodName: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
