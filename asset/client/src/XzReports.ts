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
import type { XzReportsApi } from './XzReportsApi';
import { RetailXzReportType } from './RetailXzReportType';

/**
 * This class represents the entity "XZReports" of service "d365_metadata".
 */
export class XzReports<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements XzReportsType<T>
{
  /**
   * Technical entity name for XzReports.
   */
  static override _entityName = 'XZReports';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the XzReports entity.
   */
  static _keys = [
    'dataAreaId',
    'StoreId',
    'TerminalId',
    'BatchId',
    'ReportType',
    'ReportId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Id.
   */
  declare storeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal Id.
   */
  declare terminalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Batch Id.
   */
  declare batchId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Report Type.
   * @nullable
   */
  declare reportType?: RetailXzReportType | null;
  /**
   * Report Id.
   */
  declare reportId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Channel.
   */
  declare channel: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Report Value.
   * @nullable
   */
  declare reportValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Report Date Time.
   */
  declare reportDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: XzReportsApi<T>) {
    super(_entityApi);
  }
}

export interface XzReportsType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  storeId: DeserializedType<T, 'Edm.String'>;
  terminalId: DeserializedType<T, 'Edm.String'>;
  batchId: DeserializedType<T, 'Edm.Int64'>;
  reportType?: RetailXzReportType | null;
  reportId: DeserializedType<T, 'Edm.Int64'>;
  channel: DeserializedType<T, 'Edm.Int64'>;
  reportValue?: DeserializedType<T, 'Edm.String'> | null;
  reportDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
