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
import type { LeaveTypeSecurityRolesApi } from './LeaveTypeSecurityRolesApi';

/**
 * This class represents the entity "LeaveTypeSecurityRoles" of service "d365_metadata".
 */
export class LeaveTypeSecurityRoles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaveTypeSecurityRolesType<T>
{
  /**
   * Technical entity name for LeaveTypeSecurityRoles.
   */
  static override _entityName = 'LeaveTypeSecurityRoles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaveTypeSecurityRoles entity.
   */
  static _keys = ['dataAreaId', 'SecurityRole_AotName', 'LeaveType_Type'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Security Role Aot Name.
   */
  declare securityRoleAotName: DeserializedType<T, 'Edm.String'>;
  /**
   * Leave Type Type.
   */
  declare leaveTypeType: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: LeaveTypeSecurityRolesApi<T>) {
    super(_entityApi);
  }
}

export interface LeaveTypeSecurityRolesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  securityRoleAotName: DeserializedType<T, 'Edm.String'>;
  leaveTypeType: DeserializedType<T, 'Edm.String'>;
}
