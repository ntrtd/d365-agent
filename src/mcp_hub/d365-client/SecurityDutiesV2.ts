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
import type { SecurityDutiesV2Api } from './SecurityDutiesV2Api';

/**
 * This class represents the entity "SecurityDutiesV2" of service "d365_metadata".
 */
export class SecurityDutiesV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SecurityDutiesV2Type<T>
{
  /**
   * Technical entity name for SecurityDutiesV2.
   */
  static override _entityName = 'SecurityDutiesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SecurityDutiesV2 entity.
   */
  static _keys = ['SecurityRoleIdentifier', 'SecurityDutyIdentifier'];
  /**
   * Security Role Identifier.
   */
  declare securityRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  /**
   * Security Duty Identifier.
   */
  declare securityDutyIdentifier: DeserializedType<T, 'Edm.String'>;
  /**
   * Security Duty Name.
   * @nullable
   */
  declare securityDutyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Security Privilege Identifier.
   * @nullable
   */
  declare securityPrivilegeIdentifier?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Security Privilege Name.
   * @nullable
   */
  declare securityPrivilegeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Security Privilege.
   */
  declare securityPrivilege: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Security Role Name.
   * @nullable
   */
  declare securityRoleName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SecurityDutiesV2Api<T>) {
    super(_entityApi);
  }
}

export interface SecurityDutiesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  securityRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  securityDutyIdentifier: DeserializedType<T, 'Edm.String'>;
  securityDutyName?: DeserializedType<T, 'Edm.String'> | null;
  securityPrivilegeIdentifier?: DeserializedType<T, 'Edm.String'> | null;
  securityPrivilegeName?: DeserializedType<T, 'Edm.String'> | null;
  securityPrivilege: DeserializedType<T, 'Edm.Int64'>;
  securityRoleName?: DeserializedType<T, 'Edm.String'> | null;
}
