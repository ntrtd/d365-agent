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
import type { AssetMaintenanceWorkerGroupsApi } from './AssetMaintenanceWorkerGroupsApi';
import {
  AssetMaintenanceRequests,
  AssetMaintenanceRequestsType
} from './AssetMaintenanceRequests';
import {
  AssetMaintenanceWorkOrderTablesV2,
  AssetMaintenanceWorkOrderTablesV2Type
} from './AssetMaintenanceWorkOrderTablesV2';
import {
  AssetMaintenanceRequestsV2,
  AssetMaintenanceRequestsV2Type
} from './AssetMaintenanceRequestsV2';

/**
 * This class represents the entity "AssetMaintenanceWorkerGroups" of service "d365_metadata".
 */
export class AssetMaintenanceWorkerGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkerGroupsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkerGroups.
   */
  static override _entityName = 'AssetMaintenanceWorkerGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkerGroups entity.
   */
  static _keys = ['dataAreaId', 'WorkerGroupID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Worker Group Id.
   */
  declare workerGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequests} entity.
   */
  declare maintenanceRequests: AssetMaintenanceRequests<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderTablesV2} entity.
   */
  declare workerGroupMaintenanceWorkOrderHeaders: AssetMaintenanceWorkOrderTablesV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestsV2} entity.
   */
  declare maintenanceRequestsRequestResponsibleWorkerGroup: AssetMaintenanceRequestsV2<T>[];

  constructor(_entityApi: AssetMaintenanceWorkerGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkerGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workerGroupId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceRequests: AssetMaintenanceRequestsType<T>[];
  workerGroupMaintenanceWorkOrderHeaders: AssetMaintenanceWorkOrderTablesV2Type<T>[];
  maintenanceRequestsRequestResponsibleWorkerGroup: AssetMaintenanceRequestsV2Type<T>[];
}
