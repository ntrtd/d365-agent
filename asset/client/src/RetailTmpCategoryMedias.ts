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
import type { RetailTmpCategoryMediasApi } from './RetailTmpCategoryMediasApi';
import { RetailMediaAssociationStatus } from './RetailMediaAssociationStatus';

/**
 * This class represents the entity "RetailTmpCategoryMedias" of service "d365_metadata".
 */
export class RetailTmpCategoryMedias<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTmpCategoryMediasType<T>
{
  /**
   * Technical entity name for RetailTmpCategoryMedias.
   */
  static override _entityName = 'RetailTmpCategoryMedias';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTmpCategoryMedias entity.
   */
  static _keys = ['CategoryHierarchy', 'CategoryName', 'FileName'];
  /**
   * Category Hierarchy.
   */
  declare categoryHierarchy: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Category Name.
   */
  declare categoryName: DeserializedType<T, 'Edm.String'>;
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
   * Modified On.
   */
  declare modifiedOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: RetailTmpCategoryMediasApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTmpCategoryMediasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  categoryHierarchy: DeserializedType<T, 'Edm.Int64'>;
  categoryName: DeserializedType<T, 'Edm.String'>;
  fileName: DeserializedType<T, 'Edm.String'>;
  associationStatus?: RetailMediaAssociationStatus | null;
  modifiedOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
