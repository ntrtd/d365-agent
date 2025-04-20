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
import type { BpstConfigurationEntitiesApi } from './BpstConfigurationEntitiesApi';

/**
 * This class represents the entity "BpstConfigurationEntities" of service "d365_metadata".
 */
export class BpstConfigurationEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BpstConfigurationEntitiesType<T>
{
  /**
   * Technical entity name for BpstConfigurationEntities.
   */
  static override _entityName = 'BpstConfigurationEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BpstConfigurationEntities entity.
   */
  static _keys = ['dataAreaId', 'Id'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Report Name.
   * @nullable
   */
  declare reportName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Measurement Name.
   * @nullable
   */
  declare measurementName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sql Connection String.
   * @nullable
   */
  declare sqlConnectionString?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BpstConfigurationEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface BpstConfigurationEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.Guid'>;
  reportName?: DeserializedType<T, 'Edm.String'> | null;
  measurementName?: DeserializedType<T, 'Edm.String'> | null;
  sqlConnectionString?: DeserializedType<T, 'Edm.String'> | null;
}
