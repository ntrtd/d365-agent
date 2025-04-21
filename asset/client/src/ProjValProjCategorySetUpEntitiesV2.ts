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
import type { ProjValProjCategorySetUpEntitiesV2Api } from './ProjValProjCategorySetUpEntitiesV2Api';

/**
 * This class represents the entity "ProjValProjCategorySetUpEntitiesV2" of service "d365_metadata".
 */
export class ProjValProjCategorySetUpEntitiesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjValProjCategorySetUpEntitiesV2Type<T>
{
  /**
   * Technical entity name for ProjValProjCategorySetUpEntitiesV2.
   */
  static override _entityName = 'ProjValProjCategorySetUpEntitiesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjValProjCategorySetUpEntitiesV2 entity.
   */
  static _keys = ['dataAreaId', 'GroupId', 'ProjId', 'CategoryId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Proj Id.
   */
  declare projId: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Id.
   */
  declare categoryId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ProjValProjCategorySetUpEntitiesV2Api<T>) {
    super(_entityApi);
  }
}

export interface ProjValProjCategorySetUpEntitiesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  projId: DeserializedType<T, 'Edm.String'>;
  categoryId: DeserializedType<T, 'Edm.String'>;
}
