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
import type { SecurityRoleDutiesApi } from './SecurityRoleDutiesApi';

/**
 * This class represents the entity "SecurityRoleDuties" of service "d365_metadata".
 */
export class SecurityRoleDuties<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SecurityRoleDutiesType<T>
{
  /**
   * Technical entity name for SecurityRoleDuties.
   */
  static override _entityName = 'SecurityRoleDuties';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SecurityRoleDuties entity.
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
   * Security Role Name.
   * @nullable
   */
  declare securityRoleName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SecurityRoleDutiesApi<T>) {
    super(_entityApi);
  }
}

export interface SecurityRoleDutiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  securityRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  securityDutyIdentifier: DeserializedType<T, 'Edm.String'>;
  securityDutyName?: DeserializedType<T, 'Edm.String'> | null;
  securityRoleName?: DeserializedType<T, 'Edm.String'> | null;
}
