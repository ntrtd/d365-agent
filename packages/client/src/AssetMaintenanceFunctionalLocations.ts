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
import type { AssetMaintenanceFunctionalLocationsApi } from './AssetMaintenanceFunctionalLocationsApi';
import {
  AssetMaintenanceWorkOrderUserReferences,
  AssetMaintenanceWorkOrderUserReferencesType
} from './AssetMaintenanceWorkOrderUserReferences';
import {
  AssetMaintenanceFunctionalLocationRounds,
  AssetMaintenanceFunctionalLocationRoundsType
} from './AssetMaintenanceFunctionalLocationRounds';
import {
  AssetMaintenanceFunctionalLocationLifecycleStates,
  AssetMaintenanceFunctionalLocationLifecycleStatesType
} from './AssetMaintenanceFunctionalLocationLifecycleStates';
import { Warehouses, WarehousesType } from './Warehouses';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  AssetMaintenanceFunctionalLocationTypes,
  AssetMaintenanceFunctionalLocationTypesType
} from './AssetMaintenanceFunctionalLocationTypes';
import {
  AssetMaintenanceWorkOrderAssetFaults,
  AssetMaintenanceWorkOrderAssetFaultsType
} from './AssetMaintenanceWorkOrderAssetFaults';
import {
  AssetMaintenanceAssetPrioritiesV2,
  AssetMaintenanceAssetPrioritiesV2Type
} from './AssetMaintenanceAssetPrioritiesV2';
import {
  AssetMaintenanceRequests,
  AssetMaintenanceRequestsType
} from './AssetMaintenanceRequests';
import {
  AssetMaintenanceRequestAssetFaults,
  AssetMaintenanceRequestAssetFaultsType
} from './AssetMaintenanceRequestAssetFaults';
import {
  AssetMaintenancePlanWorkOrderLines,
  AssetMaintenancePlanWorkOrderLinesType
} from './AssetMaintenancePlanWorkOrderLines';
import {
  AssetMaintenanceAssets,
  AssetMaintenanceAssetsType
} from './AssetMaintenanceAssets';
import {
  AssetMaintenanceFunctionalLocationAttributes,
  AssetMaintenanceFunctionalLocationAttributesType
} from './AssetMaintenanceFunctionalLocationAttributes';
import {
  AssetMaintenanceFunctionalLocationAttributeSpecifications,
  AssetMaintenanceFunctionalLocationAttributeSpecificationsType
} from './AssetMaintenanceFunctionalLocationAttributeSpecifications';
import {
  AssetMaintenanceWorkOrderParentProjectsV2,
  AssetMaintenanceWorkOrderParentProjectsV2Type
} from './AssetMaintenanceWorkOrderParentProjectsV2';
import {
  AssetMaintenanceFunctionalLocationWorkers,
  AssetMaintenanceFunctionalLocationWorkersType
} from './AssetMaintenanceFunctionalLocationWorkers';
import {
  AssetMaintenanceAssetPriorities,
  AssetMaintenanceAssetPrioritiesType
} from './AssetMaintenanceAssetPriorities';
import {
  AssetMaintenanceAssetsV2,
  AssetMaintenanceAssetsV2Type
} from './AssetMaintenanceAssetsV2';
import {
  AssetMaintenanceWorkOrderLinesV2,
  AssetMaintenanceWorkOrderLinesV2Type
} from './AssetMaintenanceWorkOrderLinesV2';
import {
  AssetMaintenanceAssetsV3,
  AssetMaintenanceAssetsV3Type
} from './AssetMaintenanceAssetsV3';
import {
  AssetMaintenanceAssetCriticalities,
  AssetMaintenanceAssetCriticalitiesType
} from './AssetMaintenanceAssetCriticalities';
import {
  AssetMaintenanceJobTypeDefaults,
  AssetMaintenanceJobTypeDefaultsType
} from './AssetMaintenanceJobTypeDefaults';
import {
  AssetMaintenanceFunctionalLocationAttributesV2,
  AssetMaintenanceFunctionalLocationAttributesV2Type
} from './AssetMaintenanceFunctionalLocationAttributesV2';
import {
  AssetMaintenanceWorkOrderParentProjects,
  AssetMaintenanceWorkOrderParentProjectsType
} from './AssetMaintenanceWorkOrderParentProjects';
import {
  AssetMaintenanceUnplannedWorkOrderLines,
  AssetMaintenanceUnplannedWorkOrderLinesType
} from './AssetMaintenanceUnplannedWorkOrderLines';
import {
  AssetMaintenanceRoundWorkOrderLines,
  AssetMaintenanceRoundWorkOrderLinesType
} from './AssetMaintenanceRoundWorkOrderLines';
import {
  AssetMaintenanceWorkersResponsible,
  AssetMaintenanceWorkersResponsibleType
} from './AssetMaintenanceWorkersResponsible';
import {
  AssetMaintenanceRequestWorkOrderLines,
  AssetMaintenanceRequestWorkOrderLinesType
} from './AssetMaintenanceRequestWorkOrderLines';
import {
  AssetMaintenanceRequestsV2,
  AssetMaintenanceRequestsV2Type
} from './AssetMaintenanceRequestsV2';
import {
  AssetMaintenanceFunctionalLocationMaintenancePlans,
  AssetMaintenanceFunctionalLocationMaintenancePlansType
} from './AssetMaintenanceFunctionalLocationMaintenancePlans';

/**
 * This class represents the entity "AssetMaintenanceFunctionalLocations" of service "d365_metadata".
 */
export class AssetMaintenanceFunctionalLocations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceFunctionalLocationsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceFunctionalLocations.
   */
  static override _entityName = 'AssetMaintenanceFunctionalLocations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceFunctionalLocations entity.
   */
  static _keys = ['dataAreaId', 'FunctionalLocationId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Functional Location Id.
   */
  declare functionalLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Site Id.
   * @nullable
   */
  declare inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Logistics Location Id.
   * @nullable
   */
  declare logisticsLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Functional Location Id.
   * @nullable
   */
  declare parentFunctionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Functional Location Type Id.
   * @nullable
   */
  declare functionalLocationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Location Id.
   * @nullable
   */
  declare inventoryLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Functional Location Lifecycle State Id.
   * @nullable
   */
  declare functionalLocationLifecycleStateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderUserReferences} entity.
   */
  declare maintenanceWorkOrderUserReferencesMaintenanceWorkOrderJobAssetFunctionalLocation: AssetMaintenanceWorkOrderUserReferences<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationRounds} entity.
   */
  declare assetMaintenanceFunctionalLocationRound: AssetMaintenanceFunctionalLocationRounds<T>[];
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocationLifecycleStates} entity.
   */
  declare assetMaintenanceFunctionalLocationLifecycleState?: AssetMaintenanceFunctionalLocationLifecycleStates<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare warehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocations} entity.
   */
  declare entAssetMaintenanceFunctionalLocationEntityFunctionalLocationId?: AssetMaintenanceFunctionalLocations<T> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocations} entity.
   */
  declare entAssetMaintenanceFunctionalLocationEntity: AssetMaintenanceFunctionalLocations<T>[];
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSetEntityEntAssetFunctionalLocationEntity?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocationTypes} entity.
   */
  declare assetMaintenanceFunctionalLocationType?: AssetMaintenanceFunctionalLocationTypes<T> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderAssetFaults} entity.
   */
  declare functionalLocationMaintenanceWorkOrderAssetFaults: AssetMaintenanceWorkOrderAssetFaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetPrioritiesV2} entity.
   */
  declare maintenanceAssetServiceLevelsFunctionalLocation: AssetMaintenanceAssetPrioritiesV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequests} entity.
   */
  declare assetMaintenanceRequest: AssetMaintenanceRequests<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestAssetFaults} entity.
   */
  declare functionalLocationMaintenanceRequestAssetFaults: AssetMaintenanceRequestAssetFaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenancePlanWorkOrderLines} entity.
   */
  declare replacementAssetFunctionalLocationMaintenancePlanWorkOrderJobs: AssetMaintenancePlanWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenancePlanWorkOrderLines} entity.
   */
  declare assetFunctionalLocationMaintenancePlanWorkOrderJobs: AssetMaintenancePlanWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssets} entity.
   */
  declare assetMaintenanceAsset: AssetMaintenanceAssets<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationAttributes} entity.
   */
  declare assetMaintenanceFunctionalLocationAttribute: AssetMaintenanceFunctionalLocationAttributes<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationAttributeSpecifications} entity.
   */
  declare assetMaintenanceFunctionalLocationAttributeSpecification: AssetMaintenanceFunctionalLocationAttributeSpecifications<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderParentProjectsV2} entity.
   */
  declare assetMaintenanceWorkOrderParentProjectsV2: AssetMaintenanceWorkOrderParentProjectsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationWorkers} entity.
   */
  declare assetMaintenanceFunctionalLocationWorker: AssetMaintenanceFunctionalLocationWorkers<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetPriorities} entity.
   */
  declare assetMaintenanceAssetPriority: AssetMaintenanceAssetPriorities<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetsV2} entity.
   */
  declare entAssetObjectTableEntityFunctionalLocation: AssetMaintenanceAssetsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLinesV2} entity.
   */
  declare replacementAssetFunctionalLocationMaintenanceWorkOrderJobs: AssetMaintenanceWorkOrderLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLinesV2} entity.
   */
  declare assetFunctionalLocationMaintenanceWorkOrderJobs: AssetMaintenanceWorkOrderLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare entAssetObjectTableV3EntityFunctionalLocation: AssetMaintenanceAssetsV3<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetCriticalities} entity.
   */
  declare assetMaintenanceAssetCriticality: AssetMaintenanceAssetCriticalities<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceJobTypeDefaults} entity.
   */
  declare assetMaintenanceJobTypeDefault: AssetMaintenanceJobTypeDefaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationAttributesV2} entity.
   */
  declare entAssetMaintenanceFunctionalLocationAttributeV2FunctionalLocationId: AssetMaintenanceFunctionalLocationAttributesV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderParentProjects} entity.
   */
  declare assetMaintenanceWorkOrderParentProject: AssetMaintenanceWorkOrderParentProjects<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceUnplannedWorkOrderLines} entity.
   */
  declare replacementAssetFunctionalLocationMaintenanceUnplannedWorkOrderJobs: AssetMaintenanceUnplannedWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceUnplannedWorkOrderLines} entity.
   */
  declare assetFunctionalLocationMaintenanceUnplannedWorkOrderJobs: AssetMaintenanceUnplannedWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRoundWorkOrderLines} entity.
   */
  declare replacementAssetFunctionalLocationMaintenanceRoundWorkOrderJobs: AssetMaintenanceRoundWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRoundWorkOrderLines} entity.
   */
  declare assetFunctionalLocationMaintenanceRoundWorkOrderJobs: AssetMaintenanceRoundWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkersResponsible} entity.
   */
  declare assetMaintenanceWorkerResponsible: AssetMaintenanceWorkersResponsible<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestWorkOrderLines} entity.
   */
  declare replacementAssetFunctionalLocationMaintnenaceRequestWorkOrderJobs: AssetMaintenanceRequestWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestWorkOrderLines} entity.
   */
  declare assetFunctionalLocationMaintnenaceRequestWorkOrderJobs: AssetMaintenanceRequestWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestsV2} entity.
   */
  declare maintenanceRequestsMaintenanceFunctionalLocation: AssetMaintenanceRequestsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationMaintenancePlans} entity.
   */
  declare assetMaintenanceFunctionalLocationMaintenancePlan: AssetMaintenanceFunctionalLocationMaintenancePlans<T>[];

  constructor(_entityApi: AssetMaintenanceFunctionalLocationsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceFunctionalLocationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  functionalLocationId: DeserializedType<T, 'Edm.String'>;
  inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  logisticsLocationId?: DeserializedType<T, 'Edm.String'> | null;
  parentFunctionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  functionalLocationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  inventoryLocationId?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  functionalLocationLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceWorkOrderUserReferencesMaintenanceWorkOrderJobAssetFunctionalLocation: AssetMaintenanceWorkOrderUserReferencesType<T>[];
  assetMaintenanceFunctionalLocationRound: AssetMaintenanceFunctionalLocationRoundsType<T>[];
  assetMaintenanceFunctionalLocationLifecycleState?: AssetMaintenanceFunctionalLocationLifecycleStatesType<T> | null;
  warehouse?: WarehousesType<T> | null;
  entAssetMaintenanceFunctionalLocationEntityFunctionalLocationId?: AssetMaintenanceFunctionalLocationsType<T> | null;
  entAssetMaintenanceFunctionalLocationEntity: AssetMaintenanceFunctionalLocationsType<T>[];
  dimensionSetEntityEntAssetFunctionalLocationEntity?: DimensionSetsType<T> | null;
  assetMaintenanceFunctionalLocationType?: AssetMaintenanceFunctionalLocationTypesType<T> | null;
  functionalLocationMaintenanceWorkOrderAssetFaults: AssetMaintenanceWorkOrderAssetFaultsType<T>[];
  maintenanceAssetServiceLevelsFunctionalLocation: AssetMaintenanceAssetPrioritiesV2Type<T>[];
  assetMaintenanceRequest: AssetMaintenanceRequestsType<T>[];
  functionalLocationMaintenanceRequestAssetFaults: AssetMaintenanceRequestAssetFaultsType<T>[];
  replacementAssetFunctionalLocationMaintenancePlanWorkOrderJobs: AssetMaintenancePlanWorkOrderLinesType<T>[];
  assetFunctionalLocationMaintenancePlanWorkOrderJobs: AssetMaintenancePlanWorkOrderLinesType<T>[];
  assetMaintenanceAsset: AssetMaintenanceAssetsType<T>[];
  assetMaintenanceFunctionalLocationAttribute: AssetMaintenanceFunctionalLocationAttributesType<T>[];
  assetMaintenanceFunctionalLocationAttributeSpecification: AssetMaintenanceFunctionalLocationAttributeSpecificationsType<T>[];
  assetMaintenanceWorkOrderParentProjectsV2: AssetMaintenanceWorkOrderParentProjectsV2Type<T>[];
  assetMaintenanceFunctionalLocationWorker: AssetMaintenanceFunctionalLocationWorkersType<T>[];
  assetMaintenanceAssetPriority: AssetMaintenanceAssetPrioritiesType<T>[];
  entAssetObjectTableEntityFunctionalLocation: AssetMaintenanceAssetsV2Type<T>[];
  replacementAssetFunctionalLocationMaintenanceWorkOrderJobs: AssetMaintenanceWorkOrderLinesV2Type<T>[];
  assetFunctionalLocationMaintenanceWorkOrderJobs: AssetMaintenanceWorkOrderLinesV2Type<T>[];
  entAssetObjectTableV3EntityFunctionalLocation: AssetMaintenanceAssetsV3Type<T>[];
  assetMaintenanceAssetCriticality: AssetMaintenanceAssetCriticalitiesType<T>[];
  assetMaintenanceJobTypeDefault: AssetMaintenanceJobTypeDefaultsType<T>[];
  entAssetMaintenanceFunctionalLocationAttributeV2FunctionalLocationId: AssetMaintenanceFunctionalLocationAttributesV2Type<T>[];
  assetMaintenanceWorkOrderParentProject: AssetMaintenanceWorkOrderParentProjectsType<T>[];
  replacementAssetFunctionalLocationMaintenanceUnplannedWorkOrderJobs: AssetMaintenanceUnplannedWorkOrderLinesType<T>[];
  assetFunctionalLocationMaintenanceUnplannedWorkOrderJobs: AssetMaintenanceUnplannedWorkOrderLinesType<T>[];
  replacementAssetFunctionalLocationMaintenanceRoundWorkOrderJobs: AssetMaintenanceRoundWorkOrderLinesType<T>[];
  assetFunctionalLocationMaintenanceRoundWorkOrderJobs: AssetMaintenanceRoundWorkOrderLinesType<T>[];
  assetMaintenanceWorkerResponsible: AssetMaintenanceWorkersResponsibleType<T>[];
  replacementAssetFunctionalLocationMaintnenaceRequestWorkOrderJobs: AssetMaintenanceRequestWorkOrderLinesType<T>[];
  assetFunctionalLocationMaintnenaceRequestWorkOrderJobs: AssetMaintenanceRequestWorkOrderLinesType<T>[];
  maintenanceRequestsMaintenanceFunctionalLocation: AssetMaintenanceRequestsV2Type<T>[];
  assetMaintenanceFunctionalLocationMaintenancePlan: AssetMaintenanceFunctionalLocationMaintenancePlansType<T>[];
}
