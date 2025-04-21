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
import type { RetailChannelReportsApi } from './RetailChannelReportsApi';
import { RetailChannelReportVersion } from './RetailChannelReportVersion';
import {
  RetailTillLayoutReportZones,
  RetailTillLayoutReportZonesType
} from './RetailTillLayoutReportZones';

/**
 * This class represents the entity "RetailChannelReports" of service "d365_metadata".
 */
export class RetailChannelReports<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailChannelReportsType<T>
{
  /**
   * Technical entity name for RetailChannelReports.
   */
  static override _entityName = 'RetailChannelReports';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailChannelReports entity.
   */
  static _keys = ['ReportID'];
  /**
   * Report Id.
   */
  declare reportId: DeserializedType<T, 'Edm.String'>;
  /**
   * Version.
   * @nullable
   */
  declare version?: RetailChannelReportVersion | null;
  /**
   * Report Name.
   * @nullable
   */
  declare reportName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Report Definition Xml.
   * @nullable
   */
  declare reportDefinitionXml?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link RetailTillLayoutReportZones} entity.
   */
  declare retailTillLayoutReportZone: RetailTillLayoutReportZones<T>[];

  constructor(_entityApi: RetailChannelReportsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailChannelReportsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  reportId: DeserializedType<T, 'Edm.String'>;
  version?: RetailChannelReportVersion | null;
  reportName?: DeserializedType<T, 'Edm.String'> | null;
  reportDefinitionXml?: DeserializedType<T, 'Edm.String'> | null;
  retailTillLayoutReportZone: RetailTillLayoutReportZonesType<T>[];
}
