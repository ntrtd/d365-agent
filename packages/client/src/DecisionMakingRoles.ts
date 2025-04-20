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
import type { DecisionMakingRolesApi } from './DecisionMakingRolesApi';

/**
 * This class represents the entity "DecisionMakingRoles" of service "d365_metadata".
 */
export class DecisionMakingRoles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DecisionMakingRolesType<T>
{
  /**
   * Technical entity name for DecisionMakingRoles.
   */
  static override _entityName = 'DecisionMakingRoles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DecisionMakingRoles entity.
   */
  static _keys = ['dataAreaId', 'RoleName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Role Name.
   */
  declare roleName: DeserializedType<T, 'Edm.String'>;
  /**
   * Role Description.
   * @nullable
   */
  declare roleDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DecisionMakingRolesApi<T>) {
    super(_entityApi);
  }
}

export interface DecisionMakingRolesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  roleName: DeserializedType<T, 'Edm.String'>;
  roleDescription?: DeserializedType<T, 'Edm.String'> | null;
}
