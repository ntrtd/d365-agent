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
import type { DirDunsNumberBiEntitiesApi } from './DirDunsNumberBiEntitiesApi';

/**
 * This class represents the entity "DirDunsNumberBiEntities" of service "d365_metadata".
 */
export class DirDunsNumberBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DirDunsNumberBiEntitiesType<T>
{
  /**
   * Technical entity name for DirDunsNumberBiEntities.
   */
  static override _entityName = 'DirDunsNumberBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DirDunsNumberBiEntities entity.
   */
  static _keys = ['DunsNumber'];
  /**
   * Duns Number.
   */
  declare dunsNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: DirDunsNumberBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface DirDunsNumberBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dunsNumber: DeserializedType<T, 'Edm.String'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
}
