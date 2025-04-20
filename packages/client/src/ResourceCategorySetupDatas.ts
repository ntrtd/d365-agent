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
import type { ResourceCategorySetupDatasApi } from './ResourceCategorySetupDatasApi';

/**
 * This class represents the entity "ResourceCategorySetupDatas" of service "d365_metadata".
 */
export class ResourceCategorySetupDatas<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ResourceCategorySetupDatasType<T>
{
  /**
   * Technical entity name for ResourceCategorySetupDatas.
   */
  static override _entityName = 'ResourceCategorySetupDatas';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ResourceCategorySetupDatas entity.
   */
  static _keys = [
    'dataAreaId',
    'ValidFrom',
    'ValidTo',
    'ResourceId',
    'RoleId',
    'ResourceCompanyId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Resource Id.
   */
  declare resourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Role Id.
   */
  declare roleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Resource Company Id.
   */
  declare resourceCompanyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Resource Name.
   * @nullable
   */
  declare resourceName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ResourceCategorySetupDatasApi<T>) {
    super(_entityApi);
  }
}

export interface ResourceCategorySetupDatasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  resourceId: DeserializedType<T, 'Edm.String'>;
  roleId: DeserializedType<T, 'Edm.String'>;
  resourceCompanyId: DeserializedType<T, 'Edm.String'>;
  resourceName?: DeserializedType<T, 'Edm.String'> | null;
}
