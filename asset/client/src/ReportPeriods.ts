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
import type { ReportPeriodsApi } from './ReportPeriodsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ReportPeriods" of service "d365_metadata".
 */
export class ReportPeriods<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ReportPeriodsType<T>
{
  /**
   * Technical entity name for ReportPeriods.
   */
  static override _entityName = 'ReportPeriods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReportPeriods entity.
   */
  static _keys = ['dataAreaId', 'SettlementPeriod', 'ToDate', 'FromDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Settlement Period.
   */
  declare settlementPeriod: DeserializedType<T, 'Edm.String'>;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Approved.
   * @nullable
   */
  declare approved?: NoYes | null;
  /**
   * Reporting Date.
   */
  declare reportingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Withhold Version.
   */
  declare taxWithholdVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Period End.
   */
  declare periodEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Period Start.
   */
  declare periodStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Use Tax.
   * @nullable
   */
  declare useTax?: NoYes | null;
  /**
   * Sales Tax Reporting.
   */
  declare salesTaxReporting: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: ReportPeriodsApi<T>) {
    super(_entityApi);
  }
}

export interface ReportPeriodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  settlementPeriod: DeserializedType<T, 'Edm.String'>;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  approved?: NoYes | null;
  reportingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxWithholdVersion: DeserializedType<T, 'Edm.Int32'>;
  periodEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  periodStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  useTax?: NoYes | null;
  salesTaxReporting: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
