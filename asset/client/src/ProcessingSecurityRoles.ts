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
import type { ProcessingSecurityRolesApi } from './ProcessingSecurityRolesApi';

/**
 * This class represents the entity "ProcessingSecurityRoles" of service "d365_metadata".
 */
export class ProcessingSecurityRoles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProcessingSecurityRolesType<T>
{
  /**
   * Technical entity name for ProcessingSecurityRoles.
   */
  static override _entityName = 'ProcessingSecurityRoles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProcessingSecurityRoles entity.
   */
  static _keys = ['dataAreaId', 'Processing', 'SecurityRoleAotName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Processing.
   */
  declare processing: DeserializedType<T, 'Edm.String'>;
  /**
   * Security Role Aot Name.
   */
  declare securityRoleAotName: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ProcessingSecurityRolesApi<T>) {
    super(_entityApi);
  }
}

export interface ProcessingSecurityRolesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  processing: DeserializedType<T, 'Edm.String'>;
  securityRoleAotName: DeserializedType<T, 'Edm.String'>;
}
