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
import type { ResourceRoleCharacteristicsEntitiesApi } from './ResourceRoleCharacteristicsEntitiesApi';
import { ResCharacteristicSetEnum } from './ResCharacteristicSetEnum';
import { ResCharacteristicReqEntityType } from './ResCharacteristicReqEntityType';

/**
 * This class represents the entity "ResourceRoleCharacteristicsEntities" of service "d365_metadata".
 */
export class ResourceRoleCharacteristicsEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ResourceRoleCharacteristicsEntitiesType<T>
{
  /**
   * Technical entity name for ResourceRoleCharacteristicsEntities.
   */
  static override _entityName = 'ResourceRoleCharacteristicsEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ResourceRoleCharacteristicsEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'CharacteristicId',
    'CharacteristicSet',
    'RoleId',
    'ReqEntityType'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Characteristic Id.
   */
  declare characteristicId: DeserializedType<T, 'Edm.String'>;
  /**
   * Characteristic Set.
   * @nullable
   */
  declare characteristicSet?: ResCharacteristicSetEnum | null;
  /**
   * Role Id.
   */
  declare roleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Req Entity Type.
   * @nullable
   */
  declare reqEntityType?: ResCharacteristicReqEntityType | null;

  constructor(_entityApi: ResourceRoleCharacteristicsEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ResourceRoleCharacteristicsEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  characteristicId: DeserializedType<T, 'Edm.String'>;
  characteristicSet?: ResCharacteristicSetEnum | null;
  roleId: DeserializedType<T, 'Edm.String'>;
  reqEntityType?: ResCharacteristicReqEntityType | null;
}
