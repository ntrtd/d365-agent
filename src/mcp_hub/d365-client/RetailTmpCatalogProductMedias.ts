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
import type { RetailTmpCatalogProductMediasApi } from './RetailTmpCatalogProductMediasApi';
import { RetailMediaAssociationStatus } from './RetailMediaAssociationStatus';

/**
 * This class represents the entity "RetailTmpCatalogProductMedias" of service "d365_metadata".
 */
export class RetailTmpCatalogProductMedias<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTmpCatalogProductMediasType<T>
{
  /**
   * Technical entity name for RetailTmpCatalogProductMedias.
   */
  static override _entityName = 'RetailTmpCatalogProductMedias';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTmpCatalogProductMedias entity.
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
   * Product.
   * @nullable
   */
  declare product?: DeserializedType<T, 'Edm.String'> | null;
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

  constructor(_entityApi: RetailTmpCatalogProductMediasApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTmpCatalogProductMediasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  catalog: DeserializedType<T, 'Edm.Int64'>;
  fileName: DeserializedType<T, 'Edm.String'>;
  product?: DeserializedType<T, 'Edm.String'> | null;
  associationStatus?: RetailMediaAssociationStatus | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
}
