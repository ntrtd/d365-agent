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
import type { PartyLocationPrivateRolesApi } from './PartyLocationPrivateRolesApi';

/**
 * This class represents the entity "PartyLocationPrivateRoles" of service "d365_metadata".
 */
export class PartyLocationPrivateRoles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PartyLocationPrivateRolesType<T>
{
  /**
   * Technical entity name for PartyLocationPrivateRoles.
   */
  static override _entityName = 'PartyLocationPrivateRoles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PartyLocationPrivateRoles entity.
   */
  static _keys = ['SecurityRoleName'];
  /**
   * Security Role Name.
   */
  declare securityRoleName: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: PartyLocationPrivateRolesApi<T>) {
    super(_entityApi);
  }
}

export interface PartyLocationPrivateRolesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  securityRoleName: DeserializedType<T, 'Edm.String'>;
}
