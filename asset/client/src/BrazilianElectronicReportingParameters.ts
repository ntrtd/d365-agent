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
import type { BrazilianElectronicReportingParametersApi } from './BrazilianElectronicReportingParametersApi';
import { ElectronicReportingTypeBr } from './ElectronicReportingTypeBr';

/**
 * This class represents the entity "BrazilianElectronicReportingParameters" of service "d365_metadata".
 */
export class BrazilianElectronicReportingParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BrazilianElectronicReportingParametersType<T>
{
  /**
   * Technical entity name for BrazilianElectronicReportingParameters.
   */
  static override _entityName = 'BrazilianElectronicReportingParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BrazilianElectronicReportingParameters entity.
   */
  static _keys = ['dataAreaId', 'ReportType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Report Type.
   * @nullable
   */
  declare reportType?: ElectronicReportingTypeBr | null;
  /**
   * Solution Name.
   * @nullable
   */
  declare solutionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Model Mapping Name.
   * @nullable
   */
  declare modelMappingName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Url.
   * @nullable
   */
  declare vendorUrl?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BrazilianElectronicReportingParametersApi<T>) {
    super(_entityApi);
  }
}

export interface BrazilianElectronicReportingParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reportType?: ElectronicReportingTypeBr | null;
  solutionName?: DeserializedType<T, 'Edm.String'> | null;
  modelMappingName?: DeserializedType<T, 'Edm.String'> | null;
  vendorUrl?: DeserializedType<T, 'Edm.String'> | null;
}
