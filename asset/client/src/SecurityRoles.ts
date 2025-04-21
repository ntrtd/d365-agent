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
import type { SecurityRolesApi } from './SecurityRolesApi';
import { UserLicenseType } from './UserLicenseType';

/**
 * This class represents the entity "SecurityRoles" of service "d365_metadata".
 */
export class SecurityRoles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SecurityRolesType<T>
{
  /**
   * Technical entity name for SecurityRoles.
   */
  static override _entityName = 'SecurityRoles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SecurityRoles entity.
   */
  static _keys = ['SecurityRoleIdentifier'];
  /**
   * Security Role Identifier.
   */
  declare securityRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  /**
   * Context String.
   * @nullable
   */
  declare contextString?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Access To Sensitive Data.
   */
  declare accessToSensitiveData: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Security Role Name.
   * @nullable
   */
  declare securityRoleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User License Type.
   * @nullable
   */
  declare userLicenseType?: UserLicenseType | null;

  constructor(_entityApi: SecurityRolesApi<T>) {
    super(_entityApi);
  }
}

export interface SecurityRolesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  securityRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  contextString?: DeserializedType<T, 'Edm.String'> | null;
  accessToSensitiveData: DeserializedType<T, 'Edm.Boolean'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  securityRoleName?: DeserializedType<T, 'Edm.String'> | null;
  userLicenseType?: UserLicenseType | null;
}
