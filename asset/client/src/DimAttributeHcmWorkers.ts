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
import type { DimAttributeHcmWorkersApi } from './DimAttributeHcmWorkersApi';

/**
 * This class represents the entity "DimAttributeHcmWorkers" of service "d365_metadata".
 */
export class DimAttributeHcmWorkers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeHcmWorkersType<T>
{
  /**
   * Technical entity name for DimAttributeHcmWorkers.
   */
  static override _entityName = 'DimAttributeHcmWorkers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeHcmWorkers entity.
   */
  static _keys = ['Value'];
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DimAttributeHcmWorkersApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeHcmWorkersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
