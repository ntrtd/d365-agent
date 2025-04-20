/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceWorkOrderTypes } from './AssetMaintenanceWorkOrderTypes';
import { AssetMaintenanceWorkOrderTypesRequestBuilder } from './AssetMaintenanceWorkOrderTypesRequestBuilder';
import { AssetMaintenanceAssetPrioritiesV2Api } from './AssetMaintenanceAssetPrioritiesV2Api';
import { AssetMaintenanceRoundsApi } from './AssetMaintenanceRoundsApi';
import { AssetMaintenanceWorkOrderParentProjectsV2Api } from './AssetMaintenanceWorkOrderParentProjectsV2Api';
import { AssetMaintenanceScheduledExecutionsApi } from './AssetMaintenanceScheduledExecutionsApi';
import { AssetMaintenanceRequestTypesApi } from './AssetMaintenanceRequestTypesApi';
import { AssetMaintenanceAssetPrioritiesApi } from './AssetMaintenanceAssetPrioritiesApi';
import { AssetMaintenanceWorkOrderStandardProjectGroupsApi } from './AssetMaintenanceWorkOrderStandardProjectGroupsApi';
import { AssetMaintenanceWorkOrderParentProjectsApi } from './AssetMaintenanceWorkOrderParentProjectsApi';
import { AssetMaintenanceWorkOrderTablesV2Api } from './AssetMaintenanceWorkOrderTablesV2Api';
import { NoYes } from './NoYes';
import { EntAssetCostType } from './EntAssetCostType';
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
export class AssetMaintenanceWorkOrderTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetMaintenanceWorkOrderTypes<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceWorkOrderTypesApi<DeSerializersT> {
    return new AssetMaintenanceWorkOrderTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetServiceLevelsWorkOrderType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_SERVICE_LEVELS_WORK_ORDER_TYPE: OneToManyLink<
      AssetMaintenanceWorkOrderTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetPrioritiesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceRound} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ROUND: OneToManyLink<
      AssetMaintenanceWorkOrderTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderParentProjectsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECTS_V_2: OneToManyLink<
      AssetMaintenanceWorkOrderTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderParentProjectsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceScheduledExecution} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_SCHEDULED_EXECUTION: OneToManyLink<
      AssetMaintenanceWorkOrderTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceScheduledExecutionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceRequestType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_REQUEST_TYPE: OneToManyLink<
      AssetMaintenanceWorkOrderTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetPriority} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_PRIORITY: OneToManyLink<
      AssetMaintenanceWorkOrderTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetPrioritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderStandardProjectGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_STANDARD_PROJECT_GROUP: OneToManyLink<
      AssetMaintenanceWorkOrderTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderStandardProjectGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderParentProject} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECT: OneToManyLink<
      AssetMaintenanceWorkOrderTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderParentProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workOrderTypeMaintenanceWorkOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_TYPE_MAINTENANCE_WORK_ORDER_HEADERS: OneToManyLink<
      AssetMaintenanceWorkOrderTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceAssetPrioritiesV2Api<DeSerializersT>,
      AssetMaintenanceRoundsApi<DeSerializersT>,
      AssetMaintenanceWorkOrderParentProjectsV2Api<DeSerializersT>,
      AssetMaintenanceScheduledExecutionsApi<DeSerializersT>,
      AssetMaintenanceRequestTypesApi<DeSerializersT>,
      AssetMaintenanceAssetPrioritiesApi<DeSerializersT>,
      AssetMaintenanceWorkOrderStandardProjectGroupsApi<DeSerializersT>,
      AssetMaintenanceWorkOrderParentProjectsApi<DeSerializersT>,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      MAINTENANCE_ASSET_SERVICE_LEVELS_WORK_ORDER_TYPE: new OneToManyLink(
        'MaintenanceAssetServiceLevels_WorkOrderType',
        this,
        linkedApis[0]
      ),
      ASSET_MAINTENANCE_ROUND: new OneToManyLink(
        'AssetMaintenanceRound',
        this,
        linkedApis[1]
      ),
      ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECTS_V_2: new OneToManyLink(
        'AssetMaintenanceWorkOrderParentProjectsV2',
        this,
        linkedApis[2]
      ),
      ASSET_MAINTENANCE_SCHEDULED_EXECUTION: new OneToManyLink(
        'AssetMaintenanceScheduledExecution',
        this,
        linkedApis[3]
      ),
      ASSET_MAINTENANCE_REQUEST_TYPE: new OneToManyLink(
        'AssetMaintenanceRequestType',
        this,
        linkedApis[4]
      ),
      ASSET_MAINTENANCE_ASSET_PRIORITY: new OneToManyLink(
        'AssetMaintenanceAssetPriority',
        this,
        linkedApis[5]
      ),
      ASSET_MAINTENANCE_WORK_ORDER_STANDARD_PROJECT_GROUP: new OneToManyLink(
        'AssetMaintenanceWorkOrderStandardProjectGroup',
        this,
        linkedApis[6]
      ),
      ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECT: new OneToManyLink(
        'AssetMaintenanceWorkOrderParentProject',
        this,
        linkedApis[7]
      ),
      WORK_ORDER_TYPE_MAINTENANCE_WORK_ORDER_HEADERS: new OneToManyLink(
        'WorkOrderType_MaintenanceWorkOrderHeaders',
        this,
        linkedApis[8]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceWorkOrderTypes;

  requestBuilder(): AssetMaintenanceWorkOrderTypesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceWorkOrderTypesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceWorkOrderTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceWorkOrderTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceWorkOrderTypes<DeSerializersT>,
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
    typeof AssetMaintenanceWorkOrderTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceWorkOrderTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_ORDER_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FAULT_REMEDY_MANDATORY: EnumField<
      AssetMaintenanceWorkOrderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAULT_CAUSE_MANDATORY: EnumField<
      AssetMaintenanceWorkOrderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SCHEDULE_ONE_WORKER: EnumField<
      AssetMaintenanceWorkOrderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORK_ORDER_LIFECYCLE_MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_STOP_MANDATORY: EnumField<
      AssetMaintenanceWorkOrderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COST_TYPE: EnumField<
      AssetMaintenanceWorkOrderTypes<DeSerializers>,
      DeSerializersT,
      EntAssetCostType,
      true,
      true
    >;
    FAULT_SYMPTOM_MANDATORY: EnumField<
      AssetMaintenanceWorkOrderTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetServiceLevelsWorkOrderType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_SERVICE_LEVELS_WORK_ORDER_TYPE: OneToManyLink<
      AssetMaintenanceWorkOrderTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetPrioritiesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceRound} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ROUND: OneToManyLink<
      AssetMaintenanceWorkOrderTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderParentProjectsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECTS_V_2: OneToManyLink<
      AssetMaintenanceWorkOrderTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderParentProjectsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceScheduledExecution} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_SCHEDULED_EXECUTION: OneToManyLink<
      AssetMaintenanceWorkOrderTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceScheduledExecutionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceRequestType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_REQUEST_TYPE: OneToManyLink<
      AssetMaintenanceWorkOrderTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetPriority} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_PRIORITY: OneToManyLink<
      AssetMaintenanceWorkOrderTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetPrioritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderStandardProjectGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_STANDARD_PROJECT_GROUP: OneToManyLink<
      AssetMaintenanceWorkOrderTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderStandardProjectGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderParentProject} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECT: OneToManyLink<
      AssetMaintenanceWorkOrderTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderParentProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workOrderTypeMaintenanceWorkOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_TYPE_MAINTENANCE_WORK_ORDER_HEADERS: OneToManyLink<
      AssetMaintenanceWorkOrderTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceWorkOrderTypes<DeSerializers>>;
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
         * Static representation of the {@link workOrderTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'WorkOrderTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link faultRemedyMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAULT_REMEDY_MANDATORY: fieldBuilder.buildEnumField(
          'FaultRemedyMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link faultCauseMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAULT_CAUSE_MANDATORY: fieldBuilder.buildEnumField(
          'FaultCauseMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link scheduleOneWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_ONE_WORKER: fieldBuilder.buildEnumField(
          'ScheduleOneWorker',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workOrderLifecycleModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_LIFECYCLE_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'WorkOrderLifecycleModelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productionStopMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_STOP_MANDATORY: fieldBuilder.buildEnumField(
          'ProductionStopMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link costType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_TYPE: fieldBuilder.buildEnumField(
          'CostType',
          EntAssetCostType,
          true
        ),
        /**
         * Static representation of the {@link faultSymptomMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAULT_SYMPTOM_MANDATORY: fieldBuilder.buildEnumField(
          'FaultSymptomMandatory',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceWorkOrderTypes)
      };
    }

    return this._schema;
  }
}
