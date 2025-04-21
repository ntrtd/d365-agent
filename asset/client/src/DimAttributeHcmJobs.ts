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
import type { DimAttributeHcmJobsApi } from './DimAttributeHcmJobsApi';

/**
 * This class represents the entity "DimAttributeHcmJobs" of service "d365_metadata".
 */
export class DimAttributeHcmJobs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DimAttributeHcmJobsType<T>
{
  /**
   * Technical entity name for DimAttributeHcmJobs.
   */
  static override _entityName = 'DimAttributeHcmJobs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeHcmJobs entity.
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

  constructor(_entityApi: DimAttributeHcmJobsApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeHcmJobsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
