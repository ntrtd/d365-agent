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
import type { RetailJobPosPermissionGroupsApi } from './RetailJobPosPermissionGroupsApi';
import {
  RetailPosPermissionGroups,
  RetailPosPermissionGroupsType
} from './RetailPosPermissionGroups';

/**
 * This class represents the entity "RetailJobPosPermissionGroups" of service "d365_metadata".
 */
export class RetailJobPosPermissionGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailJobPosPermissionGroupsType<T>
{
  /**
   * Technical entity name for RetailJobPosPermissionGroups.
   */
  static override _entityName = 'RetailJobPosPermissionGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailJobPosPermissionGroups entity.
   */
  static _keys = ['JobId'];
  /**
   * Job Id.
   */
  declare jobId: DeserializedType<T, 'Edm.String'>;
  /**
   * Pos Permission Group Id.
   * @nullable
   */
  declare posPermissionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link RetailPosPermissionGroups} entity.
   */
  declare retailPosPermissionGroup?: RetailPosPermissionGroups<T> | null;

  constructor(_entityApi: RetailJobPosPermissionGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailJobPosPermissionGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobId: DeserializedType<T, 'Edm.String'>;
  posPermissionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  retailPosPermissionGroup?: RetailPosPermissionGroupsType<T> | null;
}
