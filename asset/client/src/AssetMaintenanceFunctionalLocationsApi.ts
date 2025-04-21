/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceFunctionalLocations } from './AssetMaintenanceFunctionalLocations';
import { AssetMaintenanceFunctionalLocationsRequestBuilder } from './AssetMaintenanceFunctionalLocationsRequestBuilder';
import { AssetMaintenanceWorkOrderUserReferencesApi } from './AssetMaintenanceWorkOrderUserReferencesApi';
import { AssetMaintenanceFunctionalLocationRoundsApi } from './AssetMaintenanceFunctionalLocationRoundsApi';
import { AssetMaintenanceFunctionalLocationLifecycleStatesApi } from './AssetMaintenanceFunctionalLocationLifecycleStatesApi';
import { WarehousesApi } from './WarehousesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { AssetMaintenanceFunctionalLocationTypesApi } from './AssetMaintenanceFunctionalLocationTypesApi';
import { AssetMaintenanceWorkOrderAssetFaultsApi } from './AssetMaintenanceWorkOrderAssetFaultsApi';
import { AssetMaintenanceAssetPrioritiesV2Api } from './AssetMaintenanceAssetPrioritiesV2Api';
import { AssetMaintenanceRequestsApi } from './AssetMaintenanceRequestsApi';
import { AssetMaintenanceRequestAssetFaultsApi } from './AssetMaintenanceRequestAssetFaultsApi';
import { AssetMaintenancePlanWorkOrderLinesApi } from './AssetMaintenancePlanWorkOrderLinesApi';
import { AssetMaintenanceAssetsApi } from './AssetMaintenanceAssetsApi';
import { AssetMaintenanceFunctionalLocationAttributesApi } from './AssetMaintenanceFunctionalLocationAttributesApi';
import { AssetMaintenanceFunctionalLocationAttributeSpecificationsApi } from './AssetMaintenanceFunctionalLocationAttributeSpecificationsApi';
import { AssetMaintenanceWorkOrderParentProjectsV2Api } from './AssetMaintenanceWorkOrderParentProjectsV2Api';
import { AssetMaintenanceFunctionalLocationWorkersApi } from './AssetMaintenanceFunctionalLocationWorkersApi';
import { AssetMaintenanceAssetPrioritiesApi } from './AssetMaintenanceAssetPrioritiesApi';
import { AssetMaintenanceAssetsV2Api } from './AssetMaintenanceAssetsV2Api';
import { AssetMaintenanceWorkOrderLinesV2Api } from './AssetMaintenanceWorkOrderLinesV2Api';
import { AssetMaintenanceAssetsV3Api } from './AssetMaintenanceAssetsV3Api';
import { AssetMaintenanceAssetCriticalitiesApi } from './AssetMaintenanceAssetCriticalitiesApi';
import { AssetMaintenanceJobTypeDefaultsApi } from './AssetMaintenanceJobTypeDefaultsApi';
import { AssetMaintenanceFunctionalLocationAttributesV2Api } from './AssetMaintenanceFunctionalLocationAttributesV2Api';
import { AssetMaintenanceWorkOrderParentProjectsApi } from './AssetMaintenanceWorkOrderParentProjectsApi';
import { AssetMaintenanceUnplannedWorkOrderLinesApi } from './AssetMaintenanceUnplannedWorkOrderLinesApi';
import { AssetMaintenanceRoundWorkOrderLinesApi } from './AssetMaintenanceRoundWorkOrderLinesApi';
import { AssetMaintenanceWorkersResponsibleApi } from './AssetMaintenanceWorkersResponsibleApi';
import { AssetMaintenanceRequestWorkOrderLinesApi } from './AssetMaintenanceRequestWorkOrderLinesApi';
import { AssetMaintenanceRequestsV2Api } from './AssetMaintenanceRequestsV2Api';
import { AssetMaintenanceFunctionalLocationMaintenancePlansApi } from './AssetMaintenanceFunctionalLocationMaintenancePlansApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceFunctionalLocationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT
    >
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
  ): AssetMaintenanceFunctionalLocationsApi<DeSerializersT> {
    return new AssetMaintenanceFunctionalLocationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceWorkOrderUserReferencesMaintenanceWorkOrderJobAssetFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_USER_REFERENCES_MAINTENANCE_WORK_ORDER_JOB_ASSET_FUNCTIONAL_LOCATION: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderUserReferencesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationRound} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ROUND: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationRoundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocationLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_LIFECYCLE_STATE: OneToOneLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link entAssetMaintenanceFunctionalLocationEntityFunctionalLocationId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ENTITY_FUNCTIONAL_LOCATION_ID: OneToOneLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetMaintenanceFunctionalLocationEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ENTITY: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSetEntityEntAssetFunctionalLocationEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET_ENTITY_ENT_ASSET_FUNCTIONAL_LOCATION_ENTITY: OneToOneLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE: OneToOneLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link functionalLocationMaintenanceWorkOrderAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FUNCTIONAL_LOCATION_MAINTENANCE_WORK_ORDER_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetServiceLevelsFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_SERVICE_LEVELS_FUNCTIONAL_LOCATION: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetPrioritiesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_REQUEST: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link functionalLocationMaintenanceRequestAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FUNCTIONAL_LOCATION_MAINTENANCE_REQUEST_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replacementAssetFunctionalLocationMaintenancePlanWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_PLAN_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetFunctionalLocationMaintenancePlanWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_PLAN_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ATTRIBUTE: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationAttributeSpecification} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ATTRIBUTE_SPECIFICATION: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationAttributeSpecificationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderParentProjectsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECTS_V_2: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderParentProjectsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_WORKER: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetPriority} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_PRIORITY: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetPrioritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetObjectTableEntityFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_OBJECT_TABLE_ENTITY_FUNCTIONAL_LOCATION: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replacementAssetFunctionalLocationMaintenanceWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetFunctionalLocationMaintenanceWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetObjectTableV3EntityFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_OBJECT_TABLE_V_3_ENTITY_FUNCTIONAL_LOCATION: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetCriticality} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_CRITICALITY: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCriticalitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceJobTypeDefault} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE_DEFAULT: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypeDefaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetMaintenanceFunctionalLocationAttributeV2FunctionalLocationId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ATTRIBUTE_V_2_FUNCTIONAL_LOCATION_ID: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationAttributesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderParentProject} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECT: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderParentProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replacementAssetFunctionalLocationMaintenanceUnplannedWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetFunctionalLocationMaintenanceUnplannedWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replacementAssetFunctionalLocationMaintenanceRoundWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_ROUND_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetFunctionalLocationMaintenanceRoundWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_ROUND_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkerResponsible} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORKER_RESPONSIBLE: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersResponsibleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replacementAssetFunctionalLocationMaintnenaceRequestWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_ASSET_FUNCTIONAL_LOCATION_MAINTNENACE_REQUEST_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetFunctionalLocationMaintnenaceRequestWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_FUNCTIONAL_LOCATION_MAINTNENACE_REQUEST_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequestsMaintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS_MAINTENANCE_FUNCTIONAL_LOCATION: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationMaintenancePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_MAINTENANCE_PLAN: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationMaintenancePlansApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceWorkOrderUserReferencesApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationRoundsApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationLifecycleStatesApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationTypesApi<DeSerializersT>,
      AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT>,
      AssetMaintenanceAssetPrioritiesV2Api<DeSerializersT>,
      AssetMaintenanceRequestsApi<DeSerializersT>,
      AssetMaintenanceRequestAssetFaultsApi<DeSerializersT>,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceAssetsApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationAttributesApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationAttributeSpecificationsApi<DeSerializersT>,
      AssetMaintenanceWorkOrderParentProjectsV2Api<DeSerializersT>,
      AssetMaintenanceFunctionalLocationWorkersApi<DeSerializersT>,
      AssetMaintenanceAssetPrioritiesApi<DeSerializersT>,
      AssetMaintenanceAssetsV2Api<DeSerializersT>,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>,
      AssetMaintenanceAssetsV3Api<DeSerializersT>,
      AssetMaintenanceAssetCriticalitiesApi<DeSerializersT>,
      AssetMaintenanceJobTypeDefaultsApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationAttributesV2Api<DeSerializersT>,
      AssetMaintenanceWorkOrderParentProjectsApi<DeSerializersT>,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceWorkersResponsibleApi<DeSerializersT>,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceRequestsV2Api<DeSerializersT>,
      AssetMaintenanceFunctionalLocationMaintenancePlansApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      MAINTENANCE_WORK_ORDER_USER_REFERENCES_MAINTENANCE_WORK_ORDER_JOB_ASSET_FUNCTIONAL_LOCATION:
        new OneToManyLink(
          'MaintenanceWorkOrderUserReferences_MaintenanceWorkOrderJobAssetFunctionalLocation',
          this,
          linkedApis[0]
        ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ROUND: new OneToManyLink(
        'AssetMaintenanceFunctionalLocationRound',
        this,
        linkedApis[1]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_LIFECYCLE_STATE: new OneToOneLink(
        'AssetMaintenanceFunctionalLocationLifecycleState',
        this,
        linkedApis[2]
      ),
      WAREHOUSE: new OneToOneLink('Warehouse', this, linkedApis[3]),
      ENT_ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ENTITY_FUNCTIONAL_LOCATION_ID:
        new OneToOneLink(
          'EntAssetMaintenanceFunctionalLocationEntity_FunctionalLocationId',
          this,
          linkedApis[4]
        ),
      ENT_ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ENTITY: new OneToManyLink(
        'EntAssetMaintenanceFunctionalLocationEntity',
        this,
        linkedApis[5]
      ),
      DIMENSION_SET_ENTITY_ENT_ASSET_FUNCTIONAL_LOCATION_ENTITY:
        new OneToOneLink(
          'DimensionSetEntity_EntAssetFunctionalLocationEntity',
          this,
          linkedApis[6]
        ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE: new OneToOneLink(
        'AssetMaintenanceFunctionalLocationType',
        this,
        linkedApis[7]
      ),
      FUNCTIONAL_LOCATION_MAINTENANCE_WORK_ORDER_ASSET_FAULTS:
        new OneToManyLink(
          'FunctionalLocation_MaintenanceWorkOrderAssetFaults',
          this,
          linkedApis[8]
        ),
      MAINTENANCE_ASSET_SERVICE_LEVELS_FUNCTIONAL_LOCATION: new OneToManyLink(
        'MaintenanceAssetServiceLevels_FunctionalLocation',
        this,
        linkedApis[9]
      ),
      ASSET_MAINTENANCE_REQUEST: new OneToManyLink(
        'AssetMaintenanceRequest',
        this,
        linkedApis[10]
      ),
      FUNCTIONAL_LOCATION_MAINTENANCE_REQUEST_ASSET_FAULTS: new OneToManyLink(
        'FunctionalLocation_MaintenanceRequestAssetFaults',
        this,
        linkedApis[11]
      ),
      REPLACEMENT_ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_PLAN_WORK_ORDER_JOBS:
        new OneToManyLink(
          'ReplacementAssetFunctionalLocation_MaintenancePlanWorkOrderJobs',
          this,
          linkedApis[12]
        ),
      ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_PLAN_WORK_ORDER_JOBS:
        new OneToManyLink(
          'AssetFunctionalLocation_MaintenancePlanWorkOrderJobs',
          this,
          linkedApis[13]
        ),
      ASSET_MAINTENANCE_ASSET: new OneToManyLink(
        'AssetMaintenanceAsset',
        this,
        linkedApis[14]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ATTRIBUTE: new OneToManyLink(
        'AssetMaintenanceFunctionalLocationAttribute',
        this,
        linkedApis[15]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ATTRIBUTE_SPECIFICATION:
        new OneToManyLink(
          'AssetMaintenanceFunctionalLocationAttributeSpecification',
          this,
          linkedApis[16]
        ),
      ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECTS_V_2: new OneToManyLink(
        'AssetMaintenanceWorkOrderParentProjectsV2',
        this,
        linkedApis[17]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_WORKER: new OneToManyLink(
        'AssetMaintenanceFunctionalLocationWorker',
        this,
        linkedApis[18]
      ),
      ASSET_MAINTENANCE_ASSET_PRIORITY: new OneToManyLink(
        'AssetMaintenanceAssetPriority',
        this,
        linkedApis[19]
      ),
      ENT_ASSET_OBJECT_TABLE_ENTITY_FUNCTIONAL_LOCATION: new OneToManyLink(
        'EntAssetObjectTableEntity_FunctionalLocation',
        this,
        linkedApis[20]
      ),
      REPLACEMENT_ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_WORK_ORDER_JOBS:
        new OneToManyLink(
          'ReplacementAssetFunctionalLocation_MaintenanceWorkOrderJobs',
          this,
          linkedApis[21]
        ),
      ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_WORK_ORDER_JOBS: new OneToManyLink(
        'AssetFunctionalLocation_MaintenanceWorkOrderJobs',
        this,
        linkedApis[22]
      ),
      ENT_ASSET_OBJECT_TABLE_V_3_ENTITY_FUNCTIONAL_LOCATION: new OneToManyLink(
        'EntAssetObjectTableV3Entity_FunctionalLocation',
        this,
        linkedApis[23]
      ),
      ASSET_MAINTENANCE_ASSET_CRITICALITY: new OneToManyLink(
        'AssetMaintenanceAssetCriticality',
        this,
        linkedApis[24]
      ),
      ASSET_MAINTENANCE_JOB_TYPE_DEFAULT: new OneToManyLink(
        'AssetMaintenanceJobTypeDefault',
        this,
        linkedApis[25]
      ),
      ENT_ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ATTRIBUTE_V_2_FUNCTIONAL_LOCATION_ID:
        new OneToManyLink(
          'EntAssetMaintenanceFunctionalLocationAttributeV2FunctionalLocationId',
          this,
          linkedApis[26]
        ),
      ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECT: new OneToManyLink(
        'AssetMaintenanceWorkOrderParentProject',
        this,
        linkedApis[27]
      ),
      REPLACEMENT_ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS:
        new OneToManyLink(
          'ReplacementAssetFunctionalLocation_MaintenanceUnplannedWorkOrderJobs',
          this,
          linkedApis[28]
        ),
      ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS:
        new OneToManyLink(
          'AssetFunctionalLocation_MaintenanceUnplannedWorkOrderJobs',
          this,
          linkedApis[29]
        ),
      REPLACEMENT_ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_ROUND_WORK_ORDER_JOBS:
        new OneToManyLink(
          'ReplacementAssetFunctionalLocation_MaintenanceRoundWorkOrderJobs',
          this,
          linkedApis[30]
        ),
      ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_ROUND_WORK_ORDER_JOBS:
        new OneToManyLink(
          'AssetFunctionalLocation_MaintenanceRoundWorkOrderJobs',
          this,
          linkedApis[31]
        ),
      ASSET_MAINTENANCE_WORKER_RESPONSIBLE: new OneToManyLink(
        'AssetMaintenanceWorkerResponsible',
        this,
        linkedApis[32]
      ),
      REPLACEMENT_ASSET_FUNCTIONAL_LOCATION_MAINTNENACE_REQUEST_WORK_ORDER_JOBS:
        new OneToManyLink(
          'ReplacementAssetFunctionalLocation_MaintnenaceRequestWorkOrderJobs',
          this,
          linkedApis[33]
        ),
      ASSET_FUNCTIONAL_LOCATION_MAINTNENACE_REQUEST_WORK_ORDER_JOBS:
        new OneToManyLink(
          'AssetFunctionalLocation_MaintnenaceRequestWorkOrderJobs',
          this,
          linkedApis[34]
        ),
      MAINTENANCE_REQUESTS_MAINTENANCE_FUNCTIONAL_LOCATION: new OneToManyLink(
        'MaintenanceRequests_MaintenanceFunctionalLocation',
        this,
        linkedApis[35]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_MAINTENANCE_PLAN: new OneToManyLink(
        'AssetMaintenanceFunctionalLocationMaintenancePlan',
        this,
        linkedApis[36]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceFunctionalLocations;

  requestBuilder(): AssetMaintenanceFunctionalLocationsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceFunctionalLocationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceFunctionalLocations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceFunctionalLocations<DeSerializersT>,
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
    typeof AssetMaintenanceFunctionalLocations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceFunctionalLocations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_SITE_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOGISTICS_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUNCTIONAL_LOCATION_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUNCTIONAL_LOCATION_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceWorkOrderUserReferencesMaintenanceWorkOrderJobAssetFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_USER_REFERENCES_MAINTENANCE_WORK_ORDER_JOB_ASSET_FUNCTIONAL_LOCATION: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderUserReferencesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationRound} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ROUND: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationRoundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocationLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_LIFECYCLE_STATE: OneToOneLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link entAssetMaintenanceFunctionalLocationEntityFunctionalLocationId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ENTITY_FUNCTIONAL_LOCATION_ID: OneToOneLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetMaintenanceFunctionalLocationEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ENTITY: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSetEntityEntAssetFunctionalLocationEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET_ENTITY_ENT_ASSET_FUNCTIONAL_LOCATION_ENTITY: OneToOneLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE: OneToOneLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link functionalLocationMaintenanceWorkOrderAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FUNCTIONAL_LOCATION_MAINTENANCE_WORK_ORDER_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetServiceLevelsFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_SERVICE_LEVELS_FUNCTIONAL_LOCATION: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetPrioritiesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_REQUEST: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link functionalLocationMaintenanceRequestAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FUNCTIONAL_LOCATION_MAINTENANCE_REQUEST_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replacementAssetFunctionalLocationMaintenancePlanWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_PLAN_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetFunctionalLocationMaintenancePlanWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_PLAN_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ATTRIBUTE: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationAttributeSpecification} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ATTRIBUTE_SPECIFICATION: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationAttributeSpecificationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderParentProjectsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECTS_V_2: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderParentProjectsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_WORKER: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetPriority} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_PRIORITY: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetPrioritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetObjectTableEntityFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_OBJECT_TABLE_ENTITY_FUNCTIONAL_LOCATION: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replacementAssetFunctionalLocationMaintenanceWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetFunctionalLocationMaintenanceWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetObjectTableV3EntityFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_OBJECT_TABLE_V_3_ENTITY_FUNCTIONAL_LOCATION: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetCriticality} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_CRITICALITY: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCriticalitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceJobTypeDefault} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE_DEFAULT: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypeDefaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetMaintenanceFunctionalLocationAttributeV2FunctionalLocationId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ATTRIBUTE_V_2_FUNCTIONAL_LOCATION_ID: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationAttributesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderParentProject} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECT: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderParentProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replacementAssetFunctionalLocationMaintenanceUnplannedWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetFunctionalLocationMaintenanceUnplannedWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replacementAssetFunctionalLocationMaintenanceRoundWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_ROUND_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetFunctionalLocationMaintenanceRoundWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_FUNCTIONAL_LOCATION_MAINTENANCE_ROUND_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkerResponsible} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORKER_RESPONSIBLE: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersResponsibleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replacementAssetFunctionalLocationMaintnenaceRequestWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLACEMENT_ASSET_FUNCTIONAL_LOCATION_MAINTNENACE_REQUEST_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetFunctionalLocationMaintnenaceRequestWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_FUNCTIONAL_LOCATION_MAINTNENACE_REQUEST_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequestsMaintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS_MAINTENANCE_FUNCTIONAL_LOCATION: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationMaintenancePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_MAINTENANCE_PLAN: OneToManyLink<
      AssetMaintenanceFunctionalLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationMaintenancePlansApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceFunctionalLocations<DeSerializers>>;
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
         * Static representation of the {@link functionalLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'FunctionalLocationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inventorySiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventorySiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link logisticsLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGISTICS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LogisticsLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentFunctionalLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_FUNCTIONAL_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'ParentFunctionalLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link functionalLocationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_LOCATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'FunctionalLocationTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link inventoryLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'InventoryLocationId',
          'Edm.String',
          true
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
         * Static representation of the {@link functionalLocationLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_LOCATION_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'FunctionalLocationLifecycleStateId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceFunctionalLocations)
      };
    }

    return this._schema;
  }
}
