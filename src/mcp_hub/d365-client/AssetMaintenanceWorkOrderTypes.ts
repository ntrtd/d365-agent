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
import type { AssetMaintenanceWorkOrderTypesApi } from './AssetMaintenanceWorkOrderTypesApi';
import { NoYes } from './NoYes';
import { EntAssetCostType } from './EntAssetCostType';
import {
  AssetMaintenanceAssetPrioritiesV2,
  AssetMaintenanceAssetPrioritiesV2Type
} from './AssetMaintenanceAssetPrioritiesV2';
import {
  AssetMaintenanceRounds,
  AssetMaintenanceRoundsType
} from './AssetMaintenanceRounds';
import {
  AssetMaintenanceWorkOrderParentProjectsV2,
  AssetMaintenanceWorkOrderParentProjectsV2Type
} from './AssetMaintenanceWorkOrderParentProjectsV2';
import {
  AssetMaintenanceScheduledExecutions,
  AssetMaintenanceScheduledExecutionsType
} from './AssetMaintenanceScheduledExecutions';
import {
  AssetMaintenanceRequestTypes,
  AssetMaintenanceRequestTypesType
} from './AssetMaintenanceRequestTypes';
import {
  AssetMaintenanceAssetPriorities,
  AssetMaintenanceAssetPrioritiesType
} from './AssetMaintenanceAssetPriorities';
import {
  AssetMaintenanceWorkOrderStandardProjectGroups,
  AssetMaintenanceWorkOrderStandardProjectGroupsType
} from './AssetMaintenanceWorkOrderStandardProjectGroups';
import {
  AssetMaintenanceWorkOrderParentProjects,
  AssetMaintenanceWorkOrderParentProjectsType
} from './AssetMaintenanceWorkOrderParentProjects';
import {
  AssetMaintenanceWorkOrderTablesV2,
  AssetMaintenanceWorkOrderTablesV2Type
} from './AssetMaintenanceWorkOrderTablesV2';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderTypes" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderTypesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderTypes.
   */
  static override _entityName = 'AssetMaintenanceWorkOrderTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderTypes entity.
   */
  static _keys = ['dataAreaId', 'WorkOrderTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Order Type Id.
   */
  declare workOrderTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fault Remedy Mandatory.
   * @nullable
   */
  declare faultRemedyMandatory?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fault Cause Mandatory.
   * @nullable
   */
  declare faultCauseMandatory?: NoYes | null;
  /**
   * Schedule One Worker.
   * @nullable
   */
  declare scheduleOneWorker?: NoYes | null;
  /**
   * Work Order Lifecycle Model Id.
   * @nullable
   */
  declare workOrderLifecycleModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Stop Mandatory.
   * @nullable
   */
  declare productionStopMandatory?: NoYes | null;
  /**
   * Cost Type.
   * @nullable
   */
  declare costType?: EntAssetCostType | null;
  /**
   * Fault Symptom Mandatory.
   * @nullable
   */
  declare faultSymptomMandatory?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetPrioritiesV2} entity.
   */
  declare maintenanceAssetServiceLevelsWorkOrderType: AssetMaintenanceAssetPrioritiesV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRounds} entity.
   */
  declare assetMaintenanceRound: AssetMaintenanceRounds<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderParentProjectsV2} entity.
   */
  declare assetMaintenanceWorkOrderParentProjectsV2: AssetMaintenanceWorkOrderParentProjectsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceScheduledExecutions} entity.
   */
  declare assetMaintenanceScheduledExecution: AssetMaintenanceScheduledExecutions<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestTypes} entity.
   */
  declare assetMaintenanceRequestType: AssetMaintenanceRequestTypes<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetPriorities} entity.
   */
  declare assetMaintenanceAssetPriority: AssetMaintenanceAssetPriorities<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderStandardProjectGroups} entity.
   */
  declare assetMaintenanceWorkOrderStandardProjectGroup: AssetMaintenanceWorkOrderStandardProjectGroups<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderParentProjects} entity.
   */
  declare assetMaintenanceWorkOrderParentProject: AssetMaintenanceWorkOrderParentProjects<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderTablesV2} entity.
   */
  declare workOrderTypeMaintenanceWorkOrderHeaders: AssetMaintenanceWorkOrderTablesV2<T>[];

  constructor(_entityApi: AssetMaintenanceWorkOrderTypesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workOrderTypeId: DeserializedType<T, 'Edm.String'>;
  faultRemedyMandatory?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  faultCauseMandatory?: NoYes | null;
  scheduleOneWorker?: NoYes | null;
  workOrderLifecycleModelId?: DeserializedType<T, 'Edm.String'> | null;
  productionStopMandatory?: NoYes | null;
  costType?: EntAssetCostType | null;
  faultSymptomMandatory?: NoYes | null;
  maintenanceAssetServiceLevelsWorkOrderType: AssetMaintenanceAssetPrioritiesV2Type<T>[];
  assetMaintenanceRound: AssetMaintenanceRoundsType<T>[];
  assetMaintenanceWorkOrderParentProjectsV2: AssetMaintenanceWorkOrderParentProjectsV2Type<T>[];
  assetMaintenanceScheduledExecution: AssetMaintenanceScheduledExecutionsType<T>[];
  assetMaintenanceRequestType: AssetMaintenanceRequestTypesType<T>[];
  assetMaintenanceAssetPriority: AssetMaintenanceAssetPrioritiesType<T>[];
  assetMaintenanceWorkOrderStandardProjectGroup: AssetMaintenanceWorkOrderStandardProjectGroupsType<T>[];
  assetMaintenanceWorkOrderParentProject: AssetMaintenanceWorkOrderParentProjectsType<T>[];
  workOrderTypeMaintenanceWorkOrderHeaders: AssetMaintenanceWorkOrderTablesV2Type<T>[];
}
