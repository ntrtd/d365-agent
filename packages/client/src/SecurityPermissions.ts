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
import type { SecurityPermissionsApi } from './SecurityPermissionsApi';
import { SecurableType } from './SecurableType';
import { UserLicenseType } from './UserLicenseType';

/**
 * This class represents the entity "SecurityPermissions" of service "d365_metadata".
 */
export class SecurityPermissions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SecurityPermissionsType<T>
{
  /**
   * Technical entity name for SecurityPermissions.
   */
  static override _entityName = 'SecurityPermissions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SecurityPermissions entity.
   */
  static _keys = ['SecurityRoleIdentifier'];
  /**
   * Security Role Identifier.
   */
  declare securityRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  /**
   * Resource Type.
   * @nullable
   */
  declare resourceType?: SecurableType | null;
  /**
   * Invoke Access.
   */
  declare invokeAccess: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Resource Name.
   * @nullable
   */
  declare resourceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Update Access.
   */
  declare updateAccess: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Create Access.
   */
  declare createAccess: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Delete Access.
   */
  declare deleteAccess: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Read Access.
   */
  declare readAccess: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Security Role Name.
   * @nullable
   */
  declare securityRoleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correct Access.
   */
  declare correctAccess: DeserializedType<T, 'Edm.Int32'>;
  /**
   * User License Type.
   * @nullable
   */
  declare userLicenseType?: UserLicenseType | null;

  constructor(_entityApi: SecurityPermissionsApi<T>) {
    super(_entityApi);
  }
}

export interface SecurityPermissionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  securityRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  resourceType?: SecurableType | null;
  invokeAccess: DeserializedType<T, 'Edm.Int32'>;
  resourceName?: DeserializedType<T, 'Edm.String'> | null;
  updateAccess: DeserializedType<T, 'Edm.Int32'>;
  createAccess: DeserializedType<T, 'Edm.Int32'>;
  deleteAccess: DeserializedType<T, 'Edm.Int32'>;
  readAccess: DeserializedType<T, 'Edm.Int32'>;
  securityRoleName?: DeserializedType<T, 'Edm.String'> | null;
  correctAccess: DeserializedType<T, 'Edm.Int32'>;
  userLicenseType?: UserLicenseType | null;
}
