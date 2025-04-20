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
import type { SecurityUserRolesApi } from './SecurityUserRolesApi';
import { RoleAssignmentStatus } from './RoleAssignmentStatus';
import { RoleAssignmentMode } from './RoleAssignmentMode';
import { UserLicenseType } from './UserLicenseType';

/**
 * This class represents the entity "SecurityUserRoles" of service "d365_metadata".
 */
export class SecurityUserRoles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SecurityUserRolesType<T>
{
  /**
   * Technical entity name for SecurityUserRoles.
   */
  static override _entityName = 'SecurityUserRoles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SecurityUserRoles entity.
   */
  static _keys = ['UserId', 'SecurityRoleIdentifier'];
  /**
   * User Id.
   */
  declare userId: DeserializedType<T, 'Edm.String'>;
  /**
   * Security Role Identifier.
   */
  declare securityRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  /**
   * Assignment Status.
   * @nullable
   */
  declare assignmentStatus?: RoleAssignmentStatus | null;
  /**
   * Assignment Mode.
   * @nullable
   */
  declare assignmentMode?: RoleAssignmentMode | null;
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

  constructor(_entityApi: SecurityUserRolesApi<T>) {
    super(_entityApi);
  }
}

export interface SecurityUserRolesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  userId: DeserializedType<T, 'Edm.String'>;
  securityRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  assignmentStatus?: RoleAssignmentStatus | null;
  assignmentMode?: RoleAssignmentMode | null;
  securityRoleName?: DeserializedType<T, 'Edm.String'> | null;
  userLicenseType?: UserLicenseType | null;
}
