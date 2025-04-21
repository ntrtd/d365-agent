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
import type { SecuritySubRolesV2Api } from './SecuritySubRolesV2Api';

/**
 * This class represents the entity "SecuritySubRolesV2" of service "d365_metadata".
 */
export class SecuritySubRolesV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SecuritySubRolesV2Type<T>
{
  /**
   * Technical entity name for SecuritySubRolesV2.
   */
  static override _entityName = 'SecuritySubRolesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SecuritySubRolesV2 entity.
   */
  static _keys = ['SecurityRoleIdentifier', 'SecuritySubRoleIdentifier'];
  /**
   * Security Role Identifier.
   */
  declare securityRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  /**
   * Security Sub Role Identifier.
   */
  declare securitySubRoleIdentifier: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: SecuritySubRolesV2Api<T>) {
    super(_entityApi);
  }
}

export interface SecuritySubRolesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  securityRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  securitySubRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  securityRoleName?: DeserializedType<T, 'Edm.String'> | null;
  securitySubRoleName?: DeserializedType<T, 'Edm.String'> | null;
}
