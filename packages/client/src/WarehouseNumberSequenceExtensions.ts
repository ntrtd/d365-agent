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
import type { WarehouseNumberSequenceExtensionsApi } from './WarehouseNumberSequenceExtensionsApi';

/**
 * This class represents the entity "WarehouseNumberSequenceExtensions" of service "d365_metadata".
 */
export class WarehouseNumberSequenceExtensions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarehouseNumberSequenceExtensionsType<T>
{
  /**
   * Technical entity name for WarehouseNumberSequenceExtensions.
   */
  static override _entityName = 'WarehouseNumberSequenceExtensions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseNumberSequenceExtensions entity.
   */
  static _keys = ['NumberSequenceExtId'];
  /**
   * Number Sequence Ext Id.
   */
  declare numberSequenceExtId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Annotated Format.
   * @nullable
   */
  declare annotatedFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Format.
   * @nullable
   */
  declare format?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WarehouseNumberSequenceExtensionsApi<T>) {
    super(_entityApi);
  }
}

export interface WarehouseNumberSequenceExtensionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  numberSequenceExtId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  annotatedFormat?: DeserializedType<T, 'Edm.String'> | null;
  format?: DeserializedType<T, 'Edm.String'> | null;
}
