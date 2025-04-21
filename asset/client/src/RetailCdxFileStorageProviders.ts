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
import type { RetailCdxFileStorageProvidersApi } from './RetailCdxFileStorageProvidersApi';
import { RetailCdxPackageStoreType } from './RetailCdxPackageStoreType';

/**
 * This class represents the entity "RetailCdxFileStorageProviders" of service "d365_metadata".
 */
export class RetailCdxFileStorageProviders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailCdxFileStorageProvidersType<T>
{
  /**
   * Technical entity name for RetailCdxFileStorageProviders.
   */
  static override _entityName = 'RetailCdxFileStorageProviders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailCdxFileStorageProviders entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Share Download Path.
   * @nullable
   */
  declare shareDownloadPath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Package Store Type.
   * @nullable
   */
  declare packageStoreType?: RetailCdxPackageStoreType | null;
  /**
   * Share Upload Path.
   * @nullable
   */
  declare shareUploadPath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailCdxFileStorageProvidersApi<T>) {
    super(_entityApi);
  }
}

export interface RetailCdxFileStorageProvidersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  shareDownloadPath?: DeserializedType<T, 'Edm.String'> | null;
  packageStoreType?: RetailCdxPackageStoreType | null;
  shareUploadPath?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
