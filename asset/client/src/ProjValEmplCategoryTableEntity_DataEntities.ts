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
import type { ProjValEmplCategoryTableEntity_DataEntitiesApi } from './ProjValEmplCategoryTableEntity_DataEntitiesApi';

/**
 * This class represents the entity "ProjValEmplCategoryTableEntity_DataEntities" of service "d365_metadata".
 */
export class ProjValEmplCategoryTableEntity_DataEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjValEmplCategoryTableEntity_DataEntitiesType<T>
{
  /**
   * Technical entity name for ProjValEmplCategoryTableEntity_DataEntities.
   */
  static override _entityName = 'ProjValEmplCategoryTableEntity_DataEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjValEmplCategoryTableEntity_DataEntities entity.
   */
  static _keys = ['dataAreaId', 'GroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProjValEmplCategoryTableEntity_DataEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjValEmplCategoryTableEntity_DataEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
