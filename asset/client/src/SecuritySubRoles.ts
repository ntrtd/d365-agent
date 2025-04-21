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
import type { SecuritySubRolesApi } from './SecuritySubRolesApi';

/**
 * This class represents the entity "SecuritySubRoles" of service "d365_metadata".
 */
export class SecuritySubRoles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SecuritySubRolesType<T>
{
  /**
   * Technical entity name for SecuritySubRoles.
   */
  static override _entityName = 'SecuritySubRoles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SecuritySubRoles entity.
   */
  static _keys = ['SecurityRoleIdentifier'];
  /**
   * Security Role Identifier.
   */
  declare securityRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  /**
   * Security Sub Role Identifier.
   * @nullable
   */
  declare securitySubRoleIdentifier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Security Role Name.
   * @nullable
   */
  declare securityRoleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Security Sub Role Name.
   * @nullable
   */
  declare securitySubRoleName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SecuritySubRolesApi<T>) {
    super(_entityApi);
  }
}

export interface SecuritySubRolesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  securityRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  securitySubRoleIdentifier?: DeserializedType<T, 'Edm.String'> | null;
  securityRoleName?: DeserializedType<T, 'Edm.String'> | null;
  securitySubRoleName?: DeserializedType<T, 'Edm.String'> | null;
}
