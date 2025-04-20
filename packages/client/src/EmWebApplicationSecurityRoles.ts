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
import type { EmWebApplicationSecurityRolesApi } from './EmWebApplicationSecurityRolesApi';

/**
 * This class represents the entity "EMWebApplicationSecurityRoles" of service "d365_metadata".
 */
export class EmWebApplicationSecurityRoles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EmWebApplicationSecurityRolesType<T>
{
  /**
   * Technical entity name for EmWebApplicationSecurityRoles.
   */
  static override _entityName = 'EMWebApplicationSecurityRoles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EmWebApplicationSecurityRoles entity.
   */
  static _keys = ['dataAreaId', 'WebApplicationName', 'SecurityRoleAotName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Web Application Name.
   */
  declare webApplicationName: DeserializedType<T, 'Edm.String'>;
  /**
   * Security Role Aot Name.
   */
  declare securityRoleAotName: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: EmWebApplicationSecurityRolesApi<T>) {
    super(_entityApi);
  }
}

export interface EmWebApplicationSecurityRolesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  webApplicationName: DeserializedType<T, 'Edm.String'>;
  securityRoleAotName: DeserializedType<T, 'Edm.String'>;
}
