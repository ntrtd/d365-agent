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
import type { ProjValEmplProjSetupEntity_DataEntitiesApi } from './ProjValEmplProjSetupEntity_DataEntitiesApi';

/**
 * This class represents the entity "ProjValEmplProjSetupEntity_DataEntities" of service "d365_metadata".
 */
export class ProjValEmplProjSetupEntity_DataEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjValEmplProjSetupEntity_DataEntitiesType<T>
{
  /**
   * Technical entity name for ProjValEmplProjSetupEntity_DataEntities.
   */
  static override _entityName = 'ProjValEmplProjSetupEntity_DataEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjValEmplProjSetupEntity_DataEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'GroupId',
    'Projid',
    'ResourceId',
    'ResourceLegalEntityDataArea'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Projid.
   */
  declare projid: DeserializedType<T, 'Edm.String'>;
  /**
   * Resource Id.
   */
  declare resourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Resource Legal Entity Data Area.
   */
  declare resourceLegalEntityDataArea: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ProjValEmplProjSetupEntity_DataEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjValEmplProjSetupEntity_DataEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  projid: DeserializedType<T, 'Edm.String'>;
  resourceId: DeserializedType<T, 'Edm.String'>;
  resourceLegalEntityDataArea: DeserializedType<T, 'Edm.String'>;
}
