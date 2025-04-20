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
import type { StoreSafesApi } from './StoreSafesApi';

/**
 * This class represents the entity "StoreSafes" of service "d365_metadata".
 */
export class StoreSafes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements StoreSafesType<T>
{
  /**
   * Technical entity name for StoreSafes.
   */
  static override _entityName = 'StoreSafes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the StoreSafes entity.
   */
  static _keys = ['dataAreaId', 'SafeNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Safe Number.
   */
  declare safeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Store Number.
   * @nullable
   */
  declare storeNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: StoreSafesApi<T>) {
    super(_entityApi);
  }
}

export interface StoreSafesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  safeNumber: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  storeNumber?: DeserializedType<T, 'Edm.String'> | null;
}
