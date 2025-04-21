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
import type { RetailPermissionsApi } from './RetailPermissionsApi';

/**
 * This class represents the entity "RetailPermissions" of service "d365_metadata".
 */
export class RetailPermissions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailPermissionsType<T>
{
  /**
   * Technical entity name for RetailPermissions.
   */
  static override _entityName = 'RetailPermissions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailPermissions entity.
   */
  static _keys = ['PermissionId'];
  /**
   * Permission Id.
   */
  declare permissionId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Permission Name.
   * @nullable
   */
  declare permissionName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailPermissionsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailPermissionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  permissionId: DeserializedType<T, 'Edm.Int32'>;
  permissionName?: DeserializedType<T, 'Edm.String'> | null;
}
