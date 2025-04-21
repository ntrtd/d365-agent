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
import type { AssetMaintenanceJobGroupsApi } from './AssetMaintenanceJobGroupsApi';
import {
  AssetMaintenanceJobTypes,
  AssetMaintenanceJobTypesType
} from './AssetMaintenanceJobTypes';
import {
  AssetMaintenanceScheduledExecutions,
  AssetMaintenanceScheduledExecutionsType
} from './AssetMaintenanceScheduledExecutions';
import {
  AssetMaintenanceAssetCriticalities,
  AssetMaintenanceAssetCriticalitiesType
} from './AssetMaintenanceAssetCriticalities';
import {
  AssetMaintenanceWorkersResponsible,
  AssetMaintenanceWorkersResponsibleType
} from './AssetMaintenanceWorkersResponsible';

/**
 * This class represents the entity "AssetMaintenanceJobGroups" of service "d365_metadata".
 */
export class AssetMaintenanceJobGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceJobGroupsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceJobGroups.
   */
  static override _entityName = 'AssetMaintenanceJobGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceJobGroups entity.
   */
  static _keys = ['dataAreaId', 'JobGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Group Id.
   */
  declare jobGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceJobTypes} entity.
   */
  declare assetMaintenanceJobType: AssetMaintenanceJobTypes<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceScheduledExecutions} entity.
   */
  declare assetMaintenanceScheduledExecution: AssetMaintenanceScheduledExecutions<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetCriticalities} entity.
   */
  declare assetMaintenanceAssetCriticality: AssetMaintenanceAssetCriticalities<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkersResponsible} entity.
   */
  declare assetMaintenanceWorkerResponsible: AssetMaintenanceWorkersResponsible<T>[];

  constructor(_entityApi: AssetMaintenanceJobGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceJobGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  jobGroupId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceJobType: AssetMaintenanceJobTypesType<T>[];
  assetMaintenanceScheduledExecution: AssetMaintenanceScheduledExecutionsType<T>[];
  assetMaintenanceAssetCriticality: AssetMaintenanceAssetCriticalitiesType<T>[];
  assetMaintenanceWorkerResponsible: AssetMaintenanceWorkersResponsibleType<T>[];
}
