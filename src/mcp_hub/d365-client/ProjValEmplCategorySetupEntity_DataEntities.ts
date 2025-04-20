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
import type { ProjValEmplCategorySetupEntity_DataEntitiesApi } from './ProjValEmplCategorySetupEntity_DataEntitiesApi';

/**
 * This class represents the entity "ProjValEmplCategorySetupEntity_DataEntities" of service "d365_metadata".
 */
export class ProjValEmplCategorySetupEntity_DataEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjValEmplCategorySetupEntity_DataEntitiesType<T>
{
  /**
   * Technical entity name for ProjValEmplCategorySetupEntity_DataEntities.
   */
  static override _entityName = 'ProjValEmplCategorySetupEntity_DataEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjValEmplCategorySetupEntity_DataEntities entity.
   */
  static _keys = ['dataAreaId', 'GroupId', 'CategoryId', 'ResourceId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Id.
   */
  declare categoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Resource Id.
   */
  declare resourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Resource.
   */
  declare resource: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Resource Legal Entity Party Number.
   * @nullable
   */
  declare resourceLegalEntityPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Resource Legal Entity Data Area.
   * @nullable
   */
  declare resourceLegalEntityDataArea?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: ProjValEmplCategorySetupEntity_DataEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjValEmplCategorySetupEntity_DataEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  categoryId: DeserializedType<T, 'Edm.String'>;
  resourceId: DeserializedType<T, 'Edm.String'>;
  resource: DeserializedType<T, 'Edm.Int64'>;
  resourceLegalEntityPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  resourceLegalEntityDataArea?: DeserializedType<T, 'Edm.String'> | null;
}
