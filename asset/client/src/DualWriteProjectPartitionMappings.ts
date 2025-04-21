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
import type { DualWriteProjectPartitionMappingsApi } from './DualWriteProjectPartitionMappingsApi';

/**
 * This class represents the entity "DualWriteProjectPartitionMappings" of service "d365_metadata".
 */
export class DualWriteProjectPartitionMappings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DualWriteProjectPartitionMappingsType<T>
{
  /**
   * Technical entity name for DualWriteProjectPartitionMappings.
   */
  static override _entityName = 'DualWriteProjectPartitionMappings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DualWriteProjectPartitionMappings entity.
   */
  static _keys = ['ProjectName', 'ExternalCompanyName', 'InternalCompanyName'];
  /**
   * Project Name.
   */
  declare projectName: DeserializedType<T, 'Edm.String'>;
  /**
   * External Company Name.
   */
  declare externalCompanyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Internal Company Name.
   */
  declare internalCompanyName: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: DualWriteProjectPartitionMappingsApi<T>) {
    super(_entityApi);
  }
}

export interface DualWriteProjectPartitionMappingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  projectName: DeserializedType<T, 'Edm.String'>;
  externalCompanyName: DeserializedType<T, 'Edm.String'>;
  internalCompanyName: DeserializedType<T, 'Edm.String'>;
}
