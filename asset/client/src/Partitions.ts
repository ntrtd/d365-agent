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
import type { PartitionsApi } from './PartitionsApi';

/**
 * This class represents the entity "Partitions" of service "d365_metadata".
 */
export class Partitions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PartitionsType<T>
{
  /**
   * Technical entity name for Partitions.
   */
  static override _entityName = 'Partitions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Partitions entity.
   */
  static _keys = ['PartitionKey'];
  /**
   * Partition Key.
   */
  declare partitionKey: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PartitionsApi<T>) {
    super(_entityApi);
  }
}

export interface PartitionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partitionKey: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
