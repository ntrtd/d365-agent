/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceAssetTypes } from './AssetMaintenanceAssetTypes';
import { AssetMaintenanceAssetTypesRequestBuilder } from './AssetMaintenanceAssetTypesRequestBuilder';
import { AssetMaintenanceAssetTypeCounterAssociationsApi } from './AssetMaintenanceAssetTypeCounterAssociationsApi';
import { AssetMaintenanceFunctionalLocationTypesApi } from './AssetMaintenanceFunctionalLocationTypesApi';
import { AssetMaintenanceAssetTypeAttributesApi } from './AssetMaintenanceAssetTypeAttributesApi';
import { AssetMaintenanceFunctionalLocationRoundsApi } from './AssetMaintenanceFunctionalLocationRoundsApi';
import { AssetMaintenanceWorkOrderAssetFaultsApi } from './AssetMaintenanceWorkOrderAssetFaultsApi';
import { AssetMaintenanceAssetPrioritiesV2Api } from './AssetMaintenanceAssetPrioritiesV2Api';
import { AssetMaintenanceRequestAssetFaultsApi } from './AssetMaintenanceRequestAssetFaultsApi';
import { AssetMaintenanceAssetTypeFaultTypesApi } from './AssetMaintenanceAssetTypeFaultTypesApi';
import { AssetMaintenanceAssetTypeFaultAreasApi } from './AssetMaintenanceAssetTypeFaultAreasApi';
import { AssetMaintenanceWorkOrderParentProjectsV2Api } from './AssetMaintenanceWorkOrderParentProjectsV2Api';
import { AssetMaintenanceAssetPrioritiesApi } from './AssetMaintenanceAssetPrioritiesApi';
import { AssetMaintenanceWorkOrderStandardProjectGroupsApi } from './AssetMaintenanceWorkOrderStandardProjectGroupsApi';
import { AssetMaintenanceAssetTypeFaultSymptomsApi } from './AssetMaintenanceAssetTypeFaultSymptomsApi';
import { AssetMaintenanceAssetCriticalitiesApi } from './AssetMaintenanceAssetCriticalitiesApi';
import { AssetMaintenanceJobTypeDefaultsApi } from './AssetMaintenanceJobTypeDefaultsApi';
import { AssetMaintenanceWorkOrderParentProjectsApi } from './AssetMaintenanceWorkOrderParentProjectsApi';
import { AssetMaintenanceFunctionalLocationAllowedByObjectTypesApi } from './AssetMaintenanceFunctionalLocationAllowedByObjectTypesApi';
import { AssetMaintenanceModelsApi } from './AssetMaintenanceModelsApi';
import { AssetMaintenanceAssetTypeDefaultsApi } from './AssetMaintenanceAssetTypeDefaultsApi';
import { AssetMaintenanceWorkersResponsibleApi } from './AssetMaintenanceWorkersResponsibleApi';
import { AssetMaintenanceFunctionalLocationMaintenancePlansApi } from './AssetMaintenanceFunctionalLocationMaintenancePlansApi';
import { NoYes } from './NoYes';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceAssetTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetMaintenanceAssetTypes<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceAssetTypesApi<DeSerializersT> {
    return new AssetMaintenanceAssetTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeCounterAssociation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_COUNTER_ASSOCIATION: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeCounterAssociationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_ATTRIBUTE: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationRound} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ROUND: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationRoundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetTypeMaintenanceWorkOrderAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_TYPE_MAINTENANCE_WORK_ORDER_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetServiceLevelsAssetType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_SERVICE_LEVELS_ASSET_TYPE: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetPrioritiesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetTypeMaintenanceRequestAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_TYPE_MAINTENANCE_REQUEST_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeFaultType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_FAULT_TYPE: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeFaultTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeFaultArea} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_FAULT_AREA: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeFaultAreasApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderParentProjectsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECTS_V_2: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderParentProjectsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetPriority} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_PRIORITY: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetPrioritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderStandardProjectGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_STANDARD_PROJECT_GROUP: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderStandardProjectGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeFaultSymptom} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_FAULT_SYMPTOM: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeFaultSymptomsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetCriticality} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_CRITICALITY: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCriticalitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceJobTypeDefault} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE_DEFAULT: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypeDefaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderParentProject} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECT: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderParentProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationAllowedByObjectType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ALLOWED_BY_OBJECT_TYPE: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationAllowedByObjectTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_MODEL: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeDefault} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_DEFAULT: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeDefaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkerResponsible} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORKER_RESPONSIBLE: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersResponsibleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationMaintenancePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_MAINTENANCE_PLAN: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationMaintenancePlansApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceAssetTypeCounterAssociationsApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationTypesApi<DeSerializersT>,
      AssetMaintenanceAssetTypeAttributesApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationRoundsApi<DeSerializersT>,
      AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT>,
      AssetMaintenanceAssetPrioritiesV2Api<DeSerializersT>,
      AssetMaintenanceRequestAssetFaultsApi<DeSerializersT>,
      AssetMaintenanceAssetTypeFaultTypesApi<DeSerializersT>,
      AssetMaintenanceAssetTypeFaultAreasApi<DeSerializersT>,
      AssetMaintenanceWorkOrderParentProjectsV2Api<DeSerializersT>,
      AssetMaintenanceAssetPrioritiesApi<DeSerializersT>,
      AssetMaintenanceWorkOrderStandardProjectGroupsApi<DeSerializersT>,
      AssetMaintenanceAssetTypeFaultSymptomsApi<DeSerializersT>,
      AssetMaintenanceAssetCriticalitiesApi<DeSerializersT>,
      AssetMaintenanceJobTypeDefaultsApi<DeSerializersT>,
      AssetMaintenanceWorkOrderParentProjectsApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationAllowedByObjectTypesApi<DeSerializersT>,
      AssetMaintenanceModelsApi<DeSerializersT>,
      AssetMaintenanceAssetTypeDefaultsApi<DeSerializersT>,
      AssetMaintenanceWorkersResponsibleApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationMaintenancePlansApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_ASSET_TYPE_COUNTER_ASSOCIATION: new OneToManyLink(
        'AssetMaintenanceAssetTypeCounterAssociation',
        this,
        linkedApis[0]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE: new OneToManyLink(
        'AssetMaintenanceFunctionalLocationType',
        this,
        linkedApis[1]
      ),
      ASSET_MAINTENANCE_ASSET_TYPE_ATTRIBUTE: new OneToManyLink(
        'AssetMaintenanceAssetTypeAttribute',
        this,
        linkedApis[2]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ROUND: new OneToManyLink(
        'AssetMaintenanceFunctionalLocationRound',
        this,
        linkedApis[3]
      ),
      ASSET_TYPE_MAINTENANCE_WORK_ORDER_ASSET_FAULTS: new OneToManyLink(
        'AssetType_MaintenanceWorkOrderAssetFaults',
        this,
        linkedApis[4]
      ),
      MAINTENANCE_ASSET_SERVICE_LEVELS_ASSET_TYPE: new OneToManyLink(
        'MaintenanceAssetServiceLevels_AssetType',
        this,
        linkedApis[5]
      ),
      ASSET_TYPE_MAINTENANCE_REQUEST_ASSET_FAULTS: new OneToManyLink(
        'AssetType_MaintenanceRequestAssetFaults',
        this,
        linkedApis[6]
      ),
      ASSET_MAINTENANCE_ASSET_TYPE_FAULT_TYPE: new OneToManyLink(
        'AssetMaintenanceAssetTypeFaultType',
        this,
        linkedApis[7]
      ),
      ASSET_MAINTENANCE_ASSET_TYPE_FAULT_AREA: new OneToManyLink(
        'AssetMaintenanceAssetTypeFaultArea',
        this,
        linkedApis[8]
      ),
      ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECTS_V_2: new OneToManyLink(
        'AssetMaintenanceWorkOrderParentProjectsV2',
        this,
        linkedApis[9]
      ),
      ASSET_MAINTENANCE_ASSET_PRIORITY: new OneToManyLink(
        'AssetMaintenanceAssetPriority',
        this,
        linkedApis[10]
      ),
      ASSET_MAINTENANCE_WORK_ORDER_STANDARD_PROJECT_GROUP: new OneToManyLink(
        'AssetMaintenanceWorkOrderStandardProjectGroup',
        this,
        linkedApis[11]
      ),
      ASSET_MAINTENANCE_ASSET_TYPE_FAULT_SYMPTOM: new OneToManyLink(
        'AssetMaintenanceAssetTypeFaultSymptom',
        this,
        linkedApis[12]
      ),
      ASSET_MAINTENANCE_ASSET_CRITICALITY: new OneToManyLink(
        'AssetMaintenanceAssetCriticality',
        this,
        linkedApis[13]
      ),
      ASSET_MAINTENANCE_JOB_TYPE_DEFAULT: new OneToManyLink(
        'AssetMaintenanceJobTypeDefault',
        this,
        linkedApis[14]
      ),
      ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECT: new OneToManyLink(
        'AssetMaintenanceWorkOrderParentProject',
        this,
        linkedApis[15]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ALLOWED_BY_OBJECT_TYPE:
        new OneToManyLink(
          'AssetMaintenanceFunctionalLocationAllowedByObjectType',
          this,
          linkedApis[16]
        ),
      ASSET_MAINTENANCE_MODEL: new OneToManyLink(
        'AssetMaintenanceModel',
        this,
        linkedApis[17]
      ),
      ASSET_MAINTENANCE_ASSET_TYPE_DEFAULT: new OneToManyLink(
        'AssetMaintenanceAssetTypeDefault',
        this,
        linkedApis[18]
      ),
      ASSET_MAINTENANCE_WORKER_RESPONSIBLE: new OneToManyLink(
        'AssetMaintenanceWorkerResponsible',
        this,
        linkedApis[19]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_MAINTENANCE_PLAN: new OneToManyLink(
        'AssetMaintenanceFunctionalLocationMaintenancePlan',
        this,
        linkedApis[20]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceAssetTypes;

  requestBuilder(): AssetMaintenanceAssetTypesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceAssetTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceAssetTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceAssetTypes<DeSerializersT>,
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
    typeof AssetMaintenanceAssetTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceAssetTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetMaintenanceAssetTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIFECYCLE_MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATE_KPI_TOTAL: EnumField<
      AssetMaintenanceAssetTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeCounterAssociation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_COUNTER_ASSOCIATION: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeCounterAssociationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_TYPE: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_ATTRIBUTE: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationRound} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ROUND: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationRoundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetTypeMaintenanceWorkOrderAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_TYPE_MAINTENANCE_WORK_ORDER_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetServiceLevelsAssetType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_SERVICE_LEVELS_ASSET_TYPE: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetPrioritiesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetTypeMaintenanceRequestAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_TYPE_MAINTENANCE_REQUEST_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeFaultType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_FAULT_TYPE: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeFaultTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeFaultArea} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_FAULT_AREA: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeFaultAreasApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderParentProjectsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECTS_V_2: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderParentProjectsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetPriority} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_PRIORITY: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetPrioritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderStandardProjectGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_STANDARD_PROJECT_GROUP: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderStandardProjectGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeFaultSymptom} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_FAULT_SYMPTOM: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeFaultSymptomsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetCriticality} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_CRITICALITY: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCriticalitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceJobTypeDefault} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE_DEFAULT: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypeDefaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderParentProject} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECT: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderParentProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationAllowedByObjectType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ALLOWED_BY_OBJECT_TYPE: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationAllowedByObjectTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_MODEL: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeDefault} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_DEFAULT: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeDefaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkerResponsible} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORKER_RESPONSIBLE: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersResponsibleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationMaintenancePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_MAINTENANCE_PLAN: OneToManyLink<
      AssetMaintenanceAssetTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationMaintenancePlansApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceAssetTypes<DeSerializers>>;
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
         * Static representation of the {@link maintenanceAssetTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link lifecycleModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFECYCLE_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'LifecycleModelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calculateKpiTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATE_KPI_TOTAL: fieldBuilder.buildEnumField(
          'CalculateKPITotal',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceAssetTypes)
      };
    }

    return this._schema;
  }
}
