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
import type { AssetMaintenanceAssetTypesApi } from './AssetMaintenanceAssetTypesApi';
import { NoYes } from './NoYes';
import {
  AssetMaintenanceAssetTypeCounterAssociations,
  AssetMaintenanceAssetTypeCounterAssociationsType
} from './AssetMaintenanceAssetTypeCounterAssociations';
import {
  AssetMaintenanceFunctionalLocationTypes,
  AssetMaintenanceFunctionalLocationTypesType
} from './AssetMaintenanceFunctionalLocationTypes';
import {
  AssetMaintenanceAssetTypeAttributes,
  AssetMaintenanceAssetTypeAttributesType
} from './AssetMaintenanceAssetTypeAttributes';
import {
  AssetMaintenanceFunctionalLocationRounds,
  AssetMaintenanceFunctionalLocationRoundsType
} from './AssetMaintenanceFunctionalLocationRounds';
import {
  AssetMaintenanceWorkOrderAssetFaults,
  AssetMaintenanceWorkOrderAssetFaultsType
} from './AssetMaintenanceWorkOrderAssetFaults';
import {
  AssetMaintenanceAssetPrioritiesV2,
  AssetMaintenanceAssetPrioritiesV2Type
} from './AssetMaintenanceAssetPrioritiesV2';
import {
  AssetMaintenanceRequestAssetFaults,
  AssetMaintenanceRequestAssetFaultsType
} from './AssetMaintenanceRequestAssetFaults';
import {
  AssetMaintenanceAssetTypeFaultTypes,
  AssetMaintenanceAssetTypeFaultTypesType
} from './AssetMaintenanceAssetTypeFaultTypes';
import {
  AssetMaintenanceAssetTypeFaultAreas,
  AssetMaintenanceAssetTypeFaultAreasType
} from './AssetMaintenanceAssetTypeFaultAreas';
import {
  AssetMaintenanceWorkOrderParentProjectsV2,
  AssetMaintenanceWorkOrderParentProjectsV2Type
} from './AssetMaintenanceWorkOrderParentProjectsV2';
import {
  AssetMaintenanceAssetPriorities,
  AssetMaintenanceAssetPrioritiesType
} from './AssetMaintenanceAssetPriorities';
import {
  AssetMaintenanceWorkOrderStandardProjectGroups,
  AssetMaintenanceWorkOrderStandardProjectGroupsType
} from './AssetMaintenanceWorkOrderStandardProjectGroups';
import {
  AssetMaintenanceAssetTypeFaultSymptoms,
  AssetMaintenanceAssetTypeFaultSymptomsType
} from './AssetMaintenanceAssetTypeFaultSymptoms';
import {
  AssetMaintenanceAssetCriticalities,
  AssetMaintenanceAssetCriticalitiesType
} from './AssetMaintenanceAssetCriticalities';
import {
  AssetMaintenanceJobTypeDefaults,
  AssetMaintenanceJobTypeDefaultsType
} from './AssetMaintenanceJobTypeDefaults';
import {
  AssetMaintenanceWorkOrderParentProjects,
  AssetMaintenanceWorkOrderParentProjectsType
} from './AssetMaintenanceWorkOrderParentProjects';
import {
  AssetMaintenanceFunctionalLocationAllowedByObjectTypes,
  AssetMaintenanceFunctionalLocationAllowedByObjectTypesType
} from './AssetMaintenanceFunctionalLocationAllowedByObjectTypes';
import {
  AssetMaintenanceModels,
  AssetMaintenanceModelsType
} from './AssetMaintenanceModels';
import {
  AssetMaintenanceAssetTypeDefaults,
  AssetMaintenanceAssetTypeDefaultsType
} from './AssetMaintenanceAssetTypeDefaults';
import {
  AssetMaintenanceWorkersResponsible,
  AssetMaintenanceWorkersResponsibleType
} from './AssetMaintenanceWorkersResponsible';
import {
  AssetMaintenanceFunctionalLocationMaintenancePlans,
  AssetMaintenanceFunctionalLocationMaintenancePlansType
} from './AssetMaintenanceFunctionalLocationMaintenancePlans';

/**
 * This class represents the entity "AssetMaintenanceAssetTypes" of service "d365_metadata".
 */
export class AssetMaintenanceAssetTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetTypesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetTypes.
   */
  static override _entityName = 'AssetMaintenanceAssetTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetTypes entity.
   */
  static _keys = ['dataAreaId', 'MaintenanceAssetTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Type Id.
   */
  declare maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lifecycle Model Id.
   * @nullable
   */
  declare lifecycleModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculate Kpi Total.
   * @nullable
   */
  declare calculateKpiTotal?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetTypeCounterAssociations} entity.
   */
  declare assetMaintenanceAssetTypeCounterAssociation: AssetMaintenanceAssetTypeCounterAssociations<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationTypes} entity.
   */
  declare assetMaintenanceFunctionalLocationType: AssetMaintenanceFunctionalLocationTypes<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetTypeAttributes} entity.
   */
  declare assetMaintenanceAssetTypeAttribute: AssetMaintenanceAssetTypeAttributes<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationRounds} entity.
   */
  declare assetMaintenanceFunctionalLocationRound: AssetMaintenanceFunctionalLocationRounds<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderAssetFaults} entity.
   */
  declare assetTypeMaintenanceWorkOrderAssetFaults: AssetMaintenanceWorkOrderAssetFaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetPrioritiesV2} entity.
   */
  declare maintenanceAssetServiceLevelsAssetType: AssetMaintenanceAssetPrioritiesV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestAssetFaults} entity.
   */
  declare assetTypeMaintenanceRequestAssetFaults: AssetMaintenanceRequestAssetFaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetTypeFaultTypes} entity.
   */
  declare assetMaintenanceAssetTypeFaultType: AssetMaintenanceAssetTypeFaultTypes<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetTypeFaultAreas} entity.
   */
  declare assetMaintenanceAssetTypeFaultArea: AssetMaintenanceAssetTypeFaultAreas<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderParentProjectsV2} entity.
   */
  declare assetMaintenanceWorkOrderParentProjectsV2: AssetMaintenanceWorkOrderParentProjectsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetPriorities} entity.
   */
  declare assetMaintenanceAssetPriority: AssetMaintenanceAssetPriorities<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderStandardProjectGroups} entity.
   */
  declare assetMaintenanceWorkOrderStandardProjectGroup: AssetMaintenanceWorkOrderStandardProjectGroups<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetTypeFaultSymptoms} entity.
   */
  declare assetMaintenanceAssetTypeFaultSymptom: AssetMaintenanceAssetTypeFaultSymptoms<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetCriticalities} entity.
   */
  declare assetMaintenanceAssetCriticality: AssetMaintenanceAssetCriticalities<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceJobTypeDefaults} entity.
   */
  declare assetMaintenanceJobTypeDefault: AssetMaintenanceJobTypeDefaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderParentProjects} entity.
   */
  declare assetMaintenanceWorkOrderParentProject: AssetMaintenanceWorkOrderParentProjects<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationAllowedByObjectTypes} entity.
   */
  declare assetMaintenanceFunctionalLocationAllowedByObjectType: AssetMaintenanceFunctionalLocationAllowedByObjectTypes<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceModels} entity.
   */
  declare assetMaintenanceModel: AssetMaintenanceModels<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetTypeDefaults} entity.
   */
  declare assetMaintenanceAssetTypeDefault: AssetMaintenanceAssetTypeDefaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkersResponsible} entity.
   */
  declare assetMaintenanceWorkerResponsible: AssetMaintenanceWorkersResponsible<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationMaintenancePlans} entity.
   */
  declare assetMaintenanceFunctionalLocationMaintenancePlan: AssetMaintenanceFunctionalLocationMaintenancePlans<T>[];

  constructor(_entityApi: AssetMaintenanceAssetTypesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  lifecycleModelId?: DeserializedType<T, 'Edm.String'> | null;
  calculateKpiTotal?: NoYes | null;
  assetMaintenanceAssetTypeCounterAssociation: AssetMaintenanceAssetTypeCounterAssociationsType<T>[];
  assetMaintenanceFunctionalLocationType: AssetMaintenanceFunctionalLocationTypesType<T>[];
  assetMaintenanceAssetTypeAttribute: AssetMaintenanceAssetTypeAttributesType<T>[];
  assetMaintenanceFunctionalLocationRound: AssetMaintenanceFunctionalLocationRoundsType<T>[];
  assetTypeMaintenanceWorkOrderAssetFaults: AssetMaintenanceWorkOrderAssetFaultsType<T>[];
  maintenanceAssetServiceLevelsAssetType: AssetMaintenanceAssetPrioritiesV2Type<T>[];
  assetTypeMaintenanceRequestAssetFaults: AssetMaintenanceRequestAssetFaultsType<T>[];
  assetMaintenanceAssetTypeFaultType: AssetMaintenanceAssetTypeFaultTypesType<T>[];
  assetMaintenanceAssetTypeFaultArea: AssetMaintenanceAssetTypeFaultAreasType<T>[];
  assetMaintenanceWorkOrderParentProjectsV2: AssetMaintenanceWorkOrderParentProjectsV2Type<T>[];
  assetMaintenanceAssetPriority: AssetMaintenanceAssetPrioritiesType<T>[];
  assetMaintenanceWorkOrderStandardProjectGroup: AssetMaintenanceWorkOrderStandardProjectGroupsType<T>[];
  assetMaintenanceAssetTypeFaultSymptom: AssetMaintenanceAssetTypeFaultSymptomsType<T>[];
  assetMaintenanceAssetCriticality: AssetMaintenanceAssetCriticalitiesType<T>[];
  assetMaintenanceJobTypeDefault: AssetMaintenanceJobTypeDefaultsType<T>[];
  assetMaintenanceWorkOrderParentProject: AssetMaintenanceWorkOrderParentProjectsType<T>[];
  assetMaintenanceFunctionalLocationAllowedByObjectType: AssetMaintenanceFunctionalLocationAllowedByObjectTypesType<T>[];
  assetMaintenanceModel: AssetMaintenanceModelsType<T>[];
  assetMaintenanceAssetTypeDefault: AssetMaintenanceAssetTypeDefaultsType<T>[];
  assetMaintenanceWorkerResponsible: AssetMaintenanceWorkersResponsibleType<T>[];
  assetMaintenanceFunctionalLocationMaintenancePlan: AssetMaintenanceFunctionalLocationMaintenancePlansType<T>[];
}
