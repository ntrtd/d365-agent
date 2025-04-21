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
import type { SecurityDutiesApi } from './SecurityDutiesApi';

/**
 * This class represents the entity "SecurityDuties" of service "d365_metadata".
 */
export class SecurityDuties<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SecurityDutiesType<T>
{
  /**
   * Technical entity name for SecurityDuties.
   */
  static override _entityName = 'SecurityDuties';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SecurityDuties entity.
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

  constructor(_entityApi: SecurityDutiesApi<T>) {
    super(_entityApi);
  }
}

export interface SecurityDutiesType<
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
