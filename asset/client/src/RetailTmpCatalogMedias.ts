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
import type { RetailTmpCatalogMediasApi } from './RetailTmpCatalogMediasApi';
import { RetailMediaAssociationStatus } from './RetailMediaAssociationStatus';

/**
 * This class represents the entity "RetailTmpCatalogMedias" of service "d365_metadata".
 */
export class RetailTmpCatalogMedias<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTmpCatalogMediasType<T>
{
  /**
   * Technical entity name for RetailTmpCatalogMedias.
   */
  static override _entityName = 'RetailTmpCatalogMedias';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTmpCatalogMedias entity.
   */
  static _keys = ['Catalog', 'FileName'];
  /**
   * Catalog.
   */
  declare catalog: DeserializedType<T, 'Edm.Int64'>;
  /**
   * File Name.
   */
  declare fileName: DeserializedType<T, 'Edm.String'>;
  /**
   * Association Status.
   * @nullable
   */
  declare associationStatus?: RetailMediaAssociationStatus | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Catalog Name.
   * @nullable
   */
  declare catalogName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailTmpCatalogMediasApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTmpCatalogMediasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  catalog: DeserializedType<T, 'Edm.Int64'>;
  fileName: DeserializedType<T, 'Edm.String'>;
  associationStatus?: RetailMediaAssociationStatus | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  catalogName?: DeserializedType<T, 'Edm.String'> | null;
}
