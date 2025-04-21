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
import type { AssetMaintenanceWorkerGroupMembersApi } from './AssetMaintenanceWorkerGroupMembersApi';

/**
 * This class represents the entity "AssetMaintenanceWorkerGroupMembers" of service "d365_metadata".
 */
export class AssetMaintenanceWorkerGroupMembers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkerGroupMembersType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkerGroupMembers.
   */
  static override _entityName = 'AssetMaintenanceWorkerGroupMembers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkerGroupMembers entity.
   */
  static _keys = [
    'dataAreaId',
    'WorkerGroupId',
    'WorkerPersonnelNumber',
    'ValidFrom',
    'ValidTo'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Worker Group Id.
   */
  declare workerGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Worker Personnel Number.
   */
  declare workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: AssetMaintenanceWorkerGroupMembersApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkerGroupMembersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workerGroupId: DeserializedType<T, 'Edm.String'>;
  workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
