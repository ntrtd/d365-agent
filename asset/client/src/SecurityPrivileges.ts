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
import type { SecurityPrivilegesApi } from './SecurityPrivilegesApi';

/**
 * This class represents the entity "SecurityPrivileges" of service "d365_metadata".
 */
export class SecurityPrivileges<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SecurityPrivilegesType<T>
{
  /**
   * Technical entity name for SecurityPrivileges.
   */
  static override _entityName = 'SecurityPrivileges';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SecurityPrivileges entity.
   */
  static _keys = ['SecurityRoleIdentifier', 'SecurityPrivilegeIdentifier'];
  /**
   * Security Role Identifier.
   */
  declare securityRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  /**
   * Security Privilege Identifier.
   */
  declare securityPrivilegeIdentifier: DeserializedType<T, 'Edm.String'>;
  /**
   * Security Privilege Name.
   * @nullable
   */
  declare securityPrivilegeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Security Role Name.
   * @nullable
   */
  declare securityRoleName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SecurityPrivilegesApi<T>) {
    super(_entityApi);
  }
}

export interface SecurityPrivilegesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  securityRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  securityPrivilegeIdentifier: DeserializedType<T, 'Edm.String'>;
  securityPrivilegeName?: DeserializedType<T, 'Edm.String'> | null;
  securityRoleName?: DeserializedType<T, 'Edm.String'> | null;
}
