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
import type { ProjResourceEntity_DataEntitiesApi } from './ProjResourceEntity_DataEntitiesApi';

/**
 * This class represents the entity "ProjResourceEntity_DataEntities" of service "d365_metadata".
 */
export class ProjResourceEntity_DataEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjResourceEntity_DataEntitiesType<T>
{
  /**
   * Technical entity name for ProjResourceEntity_DataEntities.
   */
  static override _entityName = 'ProjResourceEntity_DataEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjResourceEntity_DataEntities entity.
   */
  static _keys = ['dataAreaId', 'PersonnelNumber', 'ProjectId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Id.
   */
  declare projectId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ProjResourceEntity_DataEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjResourceEntity_DataEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  projectId: DeserializedType<T, 'Edm.String'>;
}
