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
import type { ResourceCategoriesSharedApi } from './ResourceCategoriesSharedApi';
import { FalseTrue } from './FalseTrue';

/**
 * This class represents the entity "ResourceCategoriesShared" of service "d365_metadata".
 */
export class ResourceCategoriesShared<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ResourceCategoriesSharedType<T>
{
  /**
   * Technical entity name for ResourceCategoriesShared.
   */
  static override _entityName = 'ResourceCategoriesShared';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ResourceCategoriesShared entity.
   */
  static _keys = ['RoleId'];
  /**
   * Role Id.
   */
  declare roleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Category Disabled.
   * @nullable
   */
  declare isCategoryDisabled?: FalseTrue | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ResourceCategoriesSharedApi<T>) {
    super(_entityApi);
  }
}

export interface ResourceCategoriesSharedType<
  T extends DeSerializers = DefaultDeSerializers
> {
  roleId: DeserializedType<T, 'Edm.String'>;
  isCategoryDisabled?: FalseTrue | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
