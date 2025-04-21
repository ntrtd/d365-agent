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
import type { SmbAccountExportResultsApi } from './SmbAccountExportResultsApi';

/**
 * This class represents the entity "SmbAccountExportResults" of service "d365_metadata".
 */
export class SmbAccountExportResults<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SmbAccountExportResultsType<T>
{
  /**
   * Technical entity name for SmbAccountExportResults.
   */
  static override _entityName = 'SmbAccountExportResults';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SmbAccountExportResults entity.
   */
  static _keys = ['dataAreaId', 'StartDate', 'EndDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Export Info Log.
   * @nullable
   */
  declare exportInfoLog?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Export Date.
   */
  declare exportDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: SmbAccountExportResultsApi<T>) {
    super(_entityApi);
  }
}

export interface SmbAccountExportResultsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exportInfoLog?: DeserializedType<T, 'Edm.Binary'> | null;
  exportDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
