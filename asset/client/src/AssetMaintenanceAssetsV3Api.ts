/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceAssetsV3 } from './AssetMaintenanceAssetsV3';
import { AssetMaintenanceAssetsV3RequestBuilder } from './AssetMaintenanceAssetsV3RequestBuilder';
import { AssetMaintenanceWorkOrderUserReferencesApi } from './AssetMaintenanceWorkOrderUserReferencesApi';
import { AssetMaintenanceAssetAttributesApi } from './AssetMaintenanceAssetAttributesApi';
import { AssetMaintenanceWorkOrderAssetFaultsApi } from './AssetMaintenanceWorkOrderAssetFaultsApi';
import { AssetMaintenanceAssetPrioritiesV2Api } from './AssetMaintenanceAssetPrioritiesV2Api';
import { AssetMaintenanceRequestsApi } from './AssetMaintenanceRequestsApi';
import { AssetMaintenanceRequestAssetFaultsApi } from './AssetMaintenanceRequestAssetFaultsApi';
import { AssetMaintenanceAssetRoundsApi } from './AssetMaintenanceAssetRoundsApi';
import { AssetMaintenancePlanWorkOrderLinesApi } from './AssetMaintenancePlanWorkOrderLinesApi';
import { AssetMaintenanceAssetDocumentsApi } from './AssetMaintenanceAssetDocumentsApi';
import { AssetMaintenanceAssetBillOfMaterialsV2Api } from './AssetMaintenanceAssetBillOfMaterialsV2Api';
import { AssetMaintenanceWorkOrderParentProjectsV2Api } from './AssetMaintenanceWorkOrderParentProjectsV2Api';
import { AssetMaintenanceStopObjectsApi } from './AssetMaintenanceStopObjectsApi';
import { AssetMaintenanceAssetPrioritiesApi } from './AssetMaintenanceAssetPrioritiesApi';
import { AssetMaintenanceWorkOrderLinesV2Api } from './AssetMaintenanceWorkOrderLinesV2Api';
import { AssetMaintenanceWorkOrderStandardProjectGroupsApi } from './AssetMaintenanceWorkOrderStandardProjectGroupsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { AssetMaintenanceAssetLifecycleStatesApi } from './AssetMaintenanceAssetLifecycleStatesApi';
import { AssetMaintenanceProductsApi } from './AssetMaintenanceProductsApi';
import { AssetMaintenanceModelsApi } from './AssetMaintenanceModelsApi';
import { AssetMaintenanceWarrantiesApi } from './AssetMaintenanceWarrantiesApi';
import { AssetMaintenanceFunctionalLocationsApi } from './AssetMaintenanceFunctionalLocationsApi';
import { AssetMaintenanceAssetsV2Api } from './AssetMaintenanceAssetsV2Api';
import { AssetMaintenanceAssetCriticalitiesApi } from './AssetMaintenanceAssetCriticalitiesApi';
import { AssetMaintenanceJobTypeDefaultsApi } from './AssetMaintenanceJobTypeDefaultsApi';
import { AssetMaintenanceUnplannedWorkOrderLinesApi } from './AssetMaintenanceUnplannedWorkOrderLinesApi';
import { AssetMaintenanceRoundWorkOrderLinesApi } from './AssetMaintenanceRoundWorkOrderLinesApi';
import { AssetMaintenanceWorkersResponsibleApi } from './AssetMaintenanceWorkersResponsibleApi';
import { AssetMaintenanceRequestWorkOrderLinesApi } from './AssetMaintenanceRequestWorkOrderLinesApi';
import { AssetMaintenanceAssetCalendarsApi } from './AssetMaintenanceAssetCalendarsApi';
import { SensorMaintenanceAssetMappingsApi } from './SensorMaintenanceAssetMappingsApi';
import { AssetMaintenanceAssetMaintenancePlansApi } from './AssetMaintenanceAssetMaintenancePlansApi';
import { AssetMaintenanceRequestsV2Api } from './AssetMaintenanceRequestsV2Api';
import { Timezone } from './Timezone';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceAssetsV3Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetMaintenanceAssetsV3<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): AssetMaintenanceAssetsV3Api<DeSerializersT> {
    return new AssetMaintenanceAssetsV3Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceWorkOrderUserReferencesMaintenanceWorkOrderJobAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_USER_REFERENCES_MAINTENANCE_WORK_ORDER_JOB_ASSET: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderUserReferencesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetAttributes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_ATTRIBUTES: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetServiceLevelsMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_SERVICE_LEVELS_MAINTENANCE_ASSET: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetPrioritiesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_REQUEST: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceRequestAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_REQUEST_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetRounds} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_ROUNDS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetRoundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replacementAssetMaintenancePlanWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_ASSET_MAINTENANCE_PLAN_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenancePlanWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_PLAN_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetDocuments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_DOCUMENTS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetDocumentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetBillOfMaterialsMaintenanceAssets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_BILL_OF_MATERIALS_MAINTENANCE_ASSETS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceWorkOrderParentProjects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_PARENT_PROJECTS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderParentProjectsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceStopAssets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_STOP_ASSETS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceStopObjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetServiceLevels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_SERVICE_LEVELS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetPrioritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replacementAssetMaintenanceWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_ASSET_MAINTENANCE_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceWorkOrderStandardProjectGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_STANDARD_PROJECT_GROUPS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderStandardProjectGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultDimensionSetEntityEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_DIMENSION_SET_ENTITY_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link lifecycleStateEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIFECYCLE_STATE_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentAssetMaintenanceAssetV3Entity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_ASSET_MAINTENANCE_ASSET_V_3_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSETS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link modelEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MODEL_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warrantyEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WARRANTY_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWarrantiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link functionalLocationEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FUNCTIONAL_LOCATION_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentAssetEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_ASSET_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetCriticality} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_CRITICALITY: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCriticalitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceJobTypeDefaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TYPE_DEFAULTS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypeDefaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replacementAssetMaintenanceUnplannedWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_ASSET_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceUnplannedWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replacementAssetMaintenanceRoundWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_ASSET_MAINTENANCE_ROUND_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceRoundWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ROUND_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceWorkerResponsibles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORKER_RESPONSIBLES: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersResponsibleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceRequestWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_REQUEST_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replacementAssetMaintnenaceRequestWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_ASSET_MAINTNENACE_REQUEST_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetCalendars} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_CALENDARS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sensorMaintenanceAssetMappings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR_MAINTENANCE_ASSET_MAPPINGS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      SensorMaintenanceAssetMappingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetMaintenancePlans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_MAINTENANCE_PLANS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetMaintenancePlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequestsAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS_ASSET: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceWorkOrderUserReferencesApi<DeSerializersT>,
      AssetMaintenanceAssetAttributesApi<DeSerializersT>,
      AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT>,
      AssetMaintenanceAssetPrioritiesV2Api<DeSerializersT>,
      AssetMaintenanceRequestsApi<DeSerializersT>,
      AssetMaintenanceRequestAssetFaultsApi<DeSerializersT>,
      AssetMaintenanceAssetRoundsApi<DeSerializersT>,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceAssetDocumentsApi<DeSerializersT>,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>,
      AssetMaintenanceWorkOrderParentProjectsV2Api<DeSerializersT>,
      AssetMaintenanceStopObjectsApi<DeSerializersT>,
      AssetMaintenanceAssetPrioritiesApi<DeSerializersT>,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>,
      AssetMaintenanceWorkOrderStandardProjectGroupsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      AssetMaintenanceAssetLifecycleStatesApi<DeSerializersT>,
      AssetMaintenanceProductsApi<DeSerializersT>,
      AssetMaintenanceAssetsV3Api<DeSerializersT>,
      AssetMaintenanceAssetsV3Api<DeSerializersT>,
      AssetMaintenanceModelsApi<DeSerializersT>,
      AssetMaintenanceWarrantiesApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>,
      AssetMaintenanceAssetsV2Api<DeSerializersT>,
      AssetMaintenanceAssetCriticalitiesApi<DeSerializersT>,
      AssetMaintenanceJobTypeDefaultsApi<DeSerializersT>,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceWorkersResponsibleApi<DeSerializersT>,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceAssetCalendarsApi<DeSerializersT>,
      SensorMaintenanceAssetMappingsApi<DeSerializersT>,
      AssetMaintenanceAssetMaintenancePlansApi<DeSerializersT>,
      AssetMaintenanceRequestsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      MAINTENANCE_WORK_ORDER_USER_REFERENCES_MAINTENANCE_WORK_ORDER_JOB_ASSET:
        new OneToManyLink(
          'MaintenanceWorkOrderUserReferences_MaintenanceWorkOrderJobAsset',
          this,
          linkedApis[0]
        ),
      MAINTENANCE_ASSET_ATTRIBUTES: new OneToManyLink(
        'MaintenanceAssetAttributes',
        this,
        linkedApis[1]
      ),
      ASSET_MAINTENANCE_WORK_ORDER_ASSET_FAULTS: new OneToManyLink(
        'Asset_MaintenanceWorkOrderAssetFaults',
        this,
        linkedApis[2]
      ),
      MAINTENANCE_ASSET_SERVICE_LEVELS_MAINTENANCE_ASSET: new OneToManyLink(
        'MaintenanceAssetServiceLevels_MaintenanceAsset',
        this,
        linkedApis[3]
      ),
      ASSET_MAINTENANCE_REQUEST: new OneToManyLink(
        'AssetMaintenanceRequest',
        this,
        linkedApis[4]
      ),
      ASSET_MAINTENANCE_REQUEST_ASSET_FAULTS: new OneToManyLink(
        'Asset_MaintenanceRequestAssetFaults',
        this,
        linkedApis[5]
      ),
      MAINTENANCE_ASSET_ROUNDS: new OneToManyLink(
        'MaintenanceAssetRounds',
        this,
        linkedApis[6]
      ),
      REPLACEMENT_ASSET_MAINTENANCE_PLAN_WORK_ORDER_JOBS: new OneToManyLink(
        'ReplacementAsset_MaintenancePlanWorkOrderJobs',
        this,
        linkedApis[7]
      ),
      ASSET_MAINTENANCE_PLAN_WORK_ORDER_JOBS: new OneToManyLink(
        'Asset_MaintenancePlanWorkOrderJobs',
        this,
        linkedApis[8]
      ),
      MAINTENANCE_ASSET_DOCUMENTS: new OneToManyLink(
        'MaintenanceAssetDocuments',
        this,
        linkedApis[9]
      ),
      MAINTENANCE_ASSET_BILL_OF_MATERIALS_MAINTENANCE_ASSETS: new OneToManyLink(
        'MaintenanceAssetBillOfMaterials_MaintenanceAssets',
        this,
        linkedApis[10]
      ),
      MAINTENANCE_WORK_ORDER_PARENT_PROJECTS: new OneToManyLink(
        'MaintenanceWorkOrderParentProjects',
        this,
        linkedApis[11]
      ),
      MAINTENANCE_STOP_ASSETS: new OneToManyLink(
        'MaintenanceStopAssets',
        this,
        linkedApis[12]
      ),
      MAINTENANCE_ASSET_SERVICE_LEVELS: new OneToManyLink(
        'MaintenanceAssetServiceLevels',
        this,
        linkedApis[13]
      ),
      REPLACEMENT_ASSET_MAINTENANCE_WORK_ORDER_JOBS: new OneToManyLink(
        'ReplacementAsset_MaintenanceWorkOrderJobs',
        this,
        linkedApis[14]
      ),
      ASSET_MAINTENANCE_WORK_ORDER_JOBS: new OneToManyLink(
        'Asset_MaintenanceWorkOrderJobs',
        this,
        linkedApis[15]
      ),
      MAINTENANCE_WORK_ORDER_STANDARD_PROJECT_GROUPS: new OneToManyLink(
        'MaintenanceWorkOrderStandardProjectGroups',
        this,
        linkedApis[16]
      ),
      DEFAULT_DIMENSION_SET_ENTITY_ENT_ASSET_OBJECT_TABLE_ENTITY:
        new OneToOneLink(
          'DefaultDimensionSetEntity_EntAssetObjectTableEntity',
          this,
          linkedApis[17]
        ),
      LIFECYCLE_STATE_ENT_ASSET_OBJECT_TABLE_ENTITY: new OneToOneLink(
        'LifecycleState_EntAssetObjectTableEntity',
        this,
        linkedApis[18]
      ),
      PRODUCT_ENT_ASSET_OBJECT_TABLE_ENTITY: new OneToOneLink(
        'Product_EntAssetObjectTableEntity',
        this,
        linkedApis[19]
      ),
      PARENT_ASSET_MAINTENANCE_ASSET_V_3_ENTITY: new OneToOneLink(
        'ParentAsset_MaintenanceAssetV3Entity',
        this,
        linkedApis[20]
      ),
      MAINTENANCE_ASSETS: new OneToManyLink(
        'MaintenanceAssets',
        this,
        linkedApis[21]
      ),
      MODEL_ENT_ASSET_OBJECT_TABLE_ENTITY: new OneToOneLink(
        'Model_EntAssetObjectTableEntity',
        this,
        linkedApis[22]
      ),
      WARRANTY_ENT_ASSET_OBJECT_TABLE_ENTITY: new OneToOneLink(
        'Warranty_EntAssetObjectTableEntity',
        this,
        linkedApis[23]
      ),
      FUNCTIONAL_LOCATION_ENT_ASSET_OBJECT_TABLE_ENTITY: new OneToOneLink(
        'FunctionalLocation_EntAssetObjectTableEntity',
        this,
        linkedApis[24]
      ),
      PARENT_ASSET_ENT_ASSET_OBJECT_TABLE_ENTITY: new OneToOneLink(
        'ParentAsset_EntAssetObjectTableEntity',
        this,
        linkedApis[25]
      ),
      MAINTENANCE_ASSET_CRITICALITY: new OneToManyLink(
        'MaintenanceAssetCriticality',
        this,
        linkedApis[26]
      ),
      MAINTENANCE_JOB_TYPE_DEFAULTS: new OneToManyLink(
        'MaintenanceJobTypeDefaults',
        this,
        linkedApis[27]
      ),
      REPLACEMENT_ASSET_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS:
        new OneToManyLink(
          'ReplacementAsset_MaintenanceUnplannedWorkOrderJobs',
          this,
          linkedApis[28]
        ),
      ASSET_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS: new OneToManyLink(
        'Asset_MaintenanceUnplannedWorkOrderJobs',
        this,
        linkedApis[29]
      ),
      REPLACEMENT_ASSET_MAINTENANCE_ROUND_WORK_ORDER_JOBS: new OneToManyLink(
        'ReplacementAsset_MaintenanceRoundWorkOrderJobs',
        this,
        linkedApis[30]
      ),
      ASSET_MAINTENANCE_ROUND_WORK_ORDER_JOBS: new OneToManyLink(
        'Asset_MaintenanceRoundWorkOrderJobs',
        this,
        linkedApis[31]
      ),
      MAINTENANCE_WORKER_RESPONSIBLES: new OneToManyLink(
        'MaintenanceWorkerResponsibles',
        this,
        linkedApis[32]
      ),
      ASSET_MAINTENANCE_REQUEST_WORK_ORDER_JOBS: new OneToManyLink(
        'Asset_MaintenanceRequestWorkOrderJobs',
        this,
        linkedApis[33]
      ),
      REPLACEMENT_ASSET_MAINTNENACE_REQUEST_WORK_ORDER_JOBS: new OneToManyLink(
        'ReplacementAsset_MaintnenaceRequestWorkOrderJobs',
        this,
        linkedApis[34]
      ),
      MAINTENANCE_ASSET_CALENDARS: new OneToManyLink(
        'MaintenanceAssetCalendars',
        this,
        linkedApis[35]
      ),
      SENSOR_MAINTENANCE_ASSET_MAPPINGS: new OneToManyLink(
        'SensorMaintenanceAssetMappings',
        this,
        linkedApis[36]
      ),
      MAINTENANCE_ASSET_MAINTENANCE_PLANS: new OneToManyLink(
        'MaintenanceAssetMaintenancePlans',
        this,
        linkedApis[37]
      ),
      MAINTENANCE_REQUESTS_ASSET: new OneToManyLink(
        'MaintenanceRequests_Asset',
        this,
        linkedApis[38]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceAssetsV3;

  requestBuilder(): AssetMaintenanceAssetsV3RequestBuilder<DeSerializersT> {
    return new AssetMaintenanceAssetsV3RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceAssetsV3<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceAssetsV3<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof AssetMaintenanceAssetsV3,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceAssetsV3,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE_FROM: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDRESS_TIME_ZONE: EnumField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    MAINTENANCE_ASSET_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODEL_YEAR: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_ACCOUNT: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LONGITUDE: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDRESS_VALID_FROM: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLACEMENT_VALUE: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PARENT_MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    R_ASSET_ACCOUNT_NUM: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WRK_CTR_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE_TO: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACQUISITION_COST: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDRESS_STATE: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OWNER_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WARRANTY_DATE_FROM_VEND: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SERIAL_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LATITUDE: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACQUISITION_DATE: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDRESS_STREET: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FULL_PRIMARY_ADDRESS: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLACEMENT_DATE: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAINTENANCE_ASSET_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WARRANTY_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTY: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_BUILDING_COMPLEMENT: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_TO: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ASSET_NOT_RESPONDING_THRESHOLD_MINS: OrderableEdmTypeField<
      AssetMaintenanceAssetsV3<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceWorkOrderUserReferencesMaintenanceWorkOrderJobAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_USER_REFERENCES_MAINTENANCE_WORK_ORDER_JOB_ASSET: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderUserReferencesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetAttributes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_ATTRIBUTES: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetServiceLevelsMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_SERVICE_LEVELS_MAINTENANCE_ASSET: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetPrioritiesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_REQUEST: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceRequestAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_REQUEST_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetRounds} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_ROUNDS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetRoundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replacementAssetMaintenancePlanWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_ASSET_MAINTENANCE_PLAN_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenancePlanWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_PLAN_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetDocuments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_DOCUMENTS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetDocumentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetBillOfMaterialsMaintenanceAssets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_BILL_OF_MATERIALS_MAINTENANCE_ASSETS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceWorkOrderParentProjects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_PARENT_PROJECTS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderParentProjectsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceStopAssets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_STOP_ASSETS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceStopObjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetServiceLevels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_SERVICE_LEVELS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetPrioritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replacementAssetMaintenanceWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_ASSET_MAINTENANCE_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceWorkOrderStandardProjectGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_STANDARD_PROJECT_GROUPS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderStandardProjectGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultDimensionSetEntityEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_DIMENSION_SET_ENTITY_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link lifecycleStateEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIFECYCLE_STATE_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentAssetMaintenanceAssetV3Entity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_ASSET_MAINTENANCE_ASSET_V_3_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSETS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link modelEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MODEL_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warrantyEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WARRANTY_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWarrantiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link functionalLocationEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FUNCTIONAL_LOCATION_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentAssetEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_ASSET_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetCriticality} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_CRITICALITY: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCriticalitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceJobTypeDefaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TYPE_DEFAULTS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypeDefaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replacementAssetMaintenanceUnplannedWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_ASSET_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceUnplannedWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replacementAssetMaintenanceRoundWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_ASSET_MAINTENANCE_ROUND_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceRoundWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ROUND_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceWorkerResponsibles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORKER_RESPONSIBLES: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersResponsibleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceRequestWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_REQUEST_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replacementAssetMaintnenaceRequestWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_ASSET_MAINTNENACE_REQUEST_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetCalendars} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_CALENDARS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sensorMaintenanceAssetMappings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR_MAINTENANCE_ASSET_MAPPINGS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      SensorMaintenanceAssetMappingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetMaintenancePlans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_MAINTENANCE_PLANS: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetMaintenancePlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequestsAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS_ASSET: OneToManyLink<
      AssetMaintenanceAssetsV3<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceAssetsV3<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maintenanceAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_ID: fieldBuilder.buildEdmTypeField(
          'ProductId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activeFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_FROM: fieldBuilder.buildEdmTypeField(
          'ActiveFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link addressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'AddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link maintenanceAssetTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link modelYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_YEAR: fieldBuilder.buildEdmTypeField(
          'ModelYear',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link functionalLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'FunctionalLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'FixedAssetId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'AddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link addressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'AddressValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link replacementValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLACEMENT_VALUE: fieldBuilder.buildEdmTypeField(
          'ReplacementValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link parentMaintenanceAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_MAINTENANCE_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'ParentMaintenanceAssetId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rAssetAccountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        R_ASSET_ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'RAssetAccountNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wrkCtrId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRK_CTR_ID: fieldBuilder.buildEdmTypeField(
          'WrkCtrId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activeTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_TO: fieldBuilder.buildEdmTypeField(
          'ActiveTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link acquisitionCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_COST: fieldBuilder.buildEdmTypeField(
          'AcquisitionCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link addressState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STATE: fieldBuilder.buildEdmTypeField(
          'AddressState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link purchaseOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'AddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link modelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_ID: fieldBuilder.buildEdmTypeField('ModelId', 'Edm.String', true),
        /**
         * Static representation of the {@link addressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'AddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'AddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ownerCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNER_CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OwnerCustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link warrantyDateFromVend} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_DATE_FROM_VEND: fieldBuilder.buildEdmTypeField(
          'WarrantyDateFromVend',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link serialId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_ID: fieldBuilder.buildEdmTypeField(
          'SerialID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'AddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link acquisitionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_DATE: fieldBuilder.buildEdmTypeField(
          'AcquisitionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link addressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'AddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fullPrimaryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_PRIMARY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FullPrimaryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link replacementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLACEMENT_DATE: fieldBuilder.buildEdmTypeField(
          'ReplacementDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link addressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'AddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maintenanceAssetLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetLifecycleStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warrantyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_ID: fieldBuilder.buildEdmTypeField(
          'WarrantyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTY: fieldBuilder.buildEdmTypeField(
          'AddressCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressBuildingComplement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BUILDING_COMPLEMENT: fieldBuilder.buildEdmTypeField(
          'AddressBuildingComplement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'AddressValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link assetNotRespondingThresholdMins} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_NOT_RESPONDING_THRESHOLD_MINS: fieldBuilder.buildEdmTypeField(
          'AssetNotRespondingThresholdMins',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceAssetsV3)
      };
    }

    return this._schema;
  }
}
