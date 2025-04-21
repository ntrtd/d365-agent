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
import type { DimAttributeOmValueStreamsApi } from './DimAttributeOmValueStreamsApi';

/**
 * This class represents the entity "DimAttributeOMValueStreams" of service "d365_metadata".
 */
export class DimAttributeOmValueStreams<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeOmValueStreamsType<T>
{
  /**
   * Technical entity name for DimAttributeOmValueStreams.
   */
  static override _entityName = 'DimAttributeOMValueStreams';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeOmValueStreams entity.
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

  constructor(_entityApi: DimAttributeOmValueStreamsApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeOmValueStreamsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
