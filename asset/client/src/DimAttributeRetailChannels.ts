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
import type { DimAttributeRetailChannelsApi } from './DimAttributeRetailChannelsApi';

/**
 * This class represents the entity "DimAttributeRetailChannels" of service "d365_metadata".
 */
export class DimAttributeRetailChannels<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeRetailChannelsType<T>
{
  /**
   * Technical entity name for DimAttributeRetailChannels.
   */
  static override _entityName = 'DimAttributeRetailChannels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeRetailChannels entity.
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

  constructor(_entityApi: DimAttributeRetailChannelsApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeRetailChannelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
