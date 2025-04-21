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
import type { RetailChannelReportDefinitionsApi } from './RetailChannelReportDefinitionsApi';

/**
 * This class represents the entity "RetailChannelReportDefinitions" of service "d365_metadata".
 */
export class RetailChannelReportDefinitions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailChannelReportDefinitionsType<T>
{
  /**
   * Technical entity name for RetailChannelReportDefinitions.
   */
  static override _entityName = 'RetailChannelReportDefinitions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailChannelReportDefinitions entity.
   */
  static _keys = ['ReportId'];
  /**
   * Report Id.
   */
  declare reportId: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: RetailChannelReportDefinitionsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailChannelReportDefinitionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  reportId: DeserializedType<T, 'Edm.String'>;
  reportName?: DeserializedType<T, 'Edm.String'> | null;
  reportDefinitionXml?: DeserializedType<T, 'Edm.String'> | null;
}
