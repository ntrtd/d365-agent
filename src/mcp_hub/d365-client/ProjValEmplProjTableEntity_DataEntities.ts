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
import type { ProjValEmplProjTableEntity_DataEntitiesApi } from './ProjValEmplProjTableEntity_DataEntitiesApi';

/**
 * This class represents the entity "ProjValEmplProjTableEntity_DataEntities" of service "d365_metadata".
 */
export class ProjValEmplProjTableEntity_DataEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjValEmplProjTableEntity_DataEntitiesType<T>
{
  /**
   * Technical entity name for ProjValEmplProjTableEntity_DataEntities.
   */
  static override _entityName = 'ProjValEmplProjTableEntity_DataEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjValEmplProjTableEntity_DataEntities entity.
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

  constructor(_entityApi: ProjValEmplProjTableEntity_DataEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjValEmplProjTableEntity_DataEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
