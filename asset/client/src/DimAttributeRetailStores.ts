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
import type { DimAttributeRetailStoresApi } from './DimAttributeRetailStoresApi';

/**
 * This class represents the entity "DimAttributeRetailStores" of service "d365_metadata".
 */
export class DimAttributeRetailStores<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeRetailStoresType<T>
{
  /**
   * Technical entity name for DimAttributeRetailStores.
   */
  static override _entityName = 'DimAttributeRetailStores';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeRetailStores entity.
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

  constructor(_entityApi: DimAttributeRetailStoresApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeRetailStoresType<
  T extends DeSerializers = DefaultDeSerializers
> {
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
