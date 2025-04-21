/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceWorkOrderLifecycleStates } from './AssetMaintenanceWorkOrderLifecycleStates';
import { AssetMaintenanceWorkOrderLifecycleStatesRequestBuilder } from './AssetMaintenanceWorkOrderLifecycleStatesRequestBuilder';
import { AssetMaintenanceWorkOrderUserReferencesApi } from './AssetMaintenanceWorkOrderUserReferencesApi';
import { AssetMaintenanceAssetLifecycleStatesApi } from './AssetMaintenanceAssetLifecycleStatesApi';
import { AssetMaintenanceWorkOrderLifecycleModelStatesApi } from './AssetMaintenanceWorkOrderLifecycleModelStatesApi';
import { AssetMaintenanceWorkOrderTablesV2Api } from './AssetMaintenanceWorkOrderTablesV2Api';
import { NoYes } from './NoYes';
import { EntAssetInfoType } from './EntAssetInfoType';
import { EntAssetWorkOrderSetActualStartDefault } from './EntAssetWorkOrderSetActualStartDefault';
import { ProjStatus } from './ProjStatus';
import { EntAssetWorkOrderSetActualEndDefault } from './EntAssetWorkOrderSetActualEndDefault';
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
export class AssetMaintenanceWorkOrderLifecycleStatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializersT>,
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
  ): AssetMaintenanceWorkOrderLifecycleStatesApi<DeSerializersT> {
    return new AssetMaintenanceWorkOrderLifecycleStatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceWorkOrderUserReferencesMaintenanceWorkOrderLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_USER_REFERENCES_MAINTENANCE_WORK_ORDER_LIFECYCLE_STATE: OneToManyLink<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderUserReferencesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAssetLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_LIFECYCLE_STATE: OneToOneLink<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderLifecycleModelState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_LIFECYCLE_MODEL_STATE: OneToManyLink<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLifecycleModelStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link lifecycleStateMaintenanceWorkOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIFECYCLE_STATE_MAINTENANCE_WORK_ORDER_HEADERS: OneToManyLink<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceWorkOrderUserReferencesApi<DeSerializersT>,
      AssetMaintenanceAssetLifecycleStatesApi<DeSerializersT>,
      AssetMaintenanceWorkOrderLifecycleModelStatesApi<DeSerializersT>,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      MAINTENANCE_WORK_ORDER_USER_REFERENCES_MAINTENANCE_WORK_ORDER_LIFECYCLE_STATE:
        new OneToManyLink(
          'MaintenanceWorkOrderUserReferences_MaintenanceWorkOrderLifecycleState',
          this,
          linkedApis[0]
        ),
      ASSET_MAINTENANCE_ASSET_LIFECYCLE_STATE: new OneToOneLink(
        'AssetMaintenanceAssetLifecycleState',
        this,
        linkedApis[1]
      ),
      ASSET_MAINTENANCE_WORK_ORDER_LIFECYCLE_MODEL_STATE: new OneToManyLink(
        'AssetMaintenanceWorkOrderLifecycleModelState',
        this,
        linkedApis[2]
      ),
      LIFECYCLE_STATE_MAINTENANCE_WORK_ORDER_HEADERS: new OneToManyLink(
        'LifecycleState_MaintenanceWorkOrderHeaders',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceWorkOrderLifecycleStates;

  requestBuilder(): AssetMaintenanceWorkOrderLifecycleStatesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceWorkOrderLifecycleStatesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceWorkOrderLifecycleStates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceWorkOrderLifecycleStates<DeSerializersT>,
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
    typeof AssetMaintenanceWorkOrderLifecycleStates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceWorkOrderLifecycleStates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COPY_FORECAST_EXPENSE: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAINTENANCE_PLAN_COUNTER_RESET: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SCHEDULE_END: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_CREATE_JOB: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORK_ORDER_LINE_SCHEDULE_DELETE: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    UPDATE_MAINTENANCE_ASSET_BOM: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALIDATE_COMMITED_COST: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORK_ORDER_ALLOW_SCHEDULING: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALIDATE_FAULT_SYMPTOM: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALIDATE_FAULT_CAUSE_INFO_TYPE: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      EntAssetInfoType,
      true,
      true
    >;
    VALIDATE_FAULT_CAUSE: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORK_ORDER_SET_ACTUAL_START: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORK_ORDER_VALIDATE_CHECKLIST: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORK_ORDER_SET_ACTUAL_START_DEFAULT: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      EntAssetWorkOrderSetActualStartDefault,
      true,
      true
    >;
    VALIDATE_PRODUCTION_STOP: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POST_WORK_ORDER_JOURNALS: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SCHEDULE_READY: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORK_ORDER_ALLOW_DELETE: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_STATUS: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      ProjStatus,
      true,
      true
    >;
    VALIDATE_FAULT_SYMPTOM_INFO_TYPE: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      EntAssetInfoType,
      true,
      true
    >;
    WORK_ORDER_SET_ACTUAL_END: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALIDATE_COMMITED_COST_INFO_TYPE: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      EntAssetInfoType,
      true,
      true
    >;
    VALIDATE_FAULT_REMEDY_INFO_TYPE: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      EntAssetInfoType,
      true,
      true
    >;
    WORK_ORDER_SET_ACTUAL_END_DEFAULT: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      EntAssetWorkOrderSetActualEndDefault,
      true,
      true
    >;
    WORK_ORDER_ALLOW_LINE_DELETE: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORK_ORDER_ACTIVE: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COPY_FORECAST_ITEM: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALIDATE_PRODUCTION_STOP_INFO_TYPE: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      EntAssetInfoType,
      true,
      true
    >;
    VALIDATE_FAULT_REMEDY: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORK_ORDER_POOL_DELETE: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SCHEDULE_START: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COPY_FORECAST_HOUR: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REQUEST_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLOSE_ACTIVITIES: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAINTENANCE_ASSET_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_VALIDATE_CHECKLIST_INFO_TYPE: EnumField<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>,
      DeSerializersT,
      EntAssetInfoType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceWorkOrderUserReferencesMaintenanceWorkOrderLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_USER_REFERENCES_MAINTENANCE_WORK_ORDER_LIFECYCLE_STATE: OneToManyLink<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderUserReferencesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAssetLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_LIFECYCLE_STATE: OneToOneLink<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderLifecycleModelState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_LIFECYCLE_MODEL_STATE: OneToManyLink<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLifecycleModelStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link lifecycleStateMaintenanceWorkOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIFECYCLE_STATE_MAINTENANCE_WORK_ORDER_HEADERS: OneToManyLink<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceWorkOrderLifecycleStates<DeSerializers>
    >;
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
         * Static representation of the {@link lifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'LifecycleStateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link copyForecastExpense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COPY_FORECAST_EXPENSE: fieldBuilder.buildEnumField(
          'CopyForecastExpense',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maintenancePlanCounterReset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_PLAN_COUNTER_RESET: fieldBuilder.buildEnumField(
          'MaintenancePlanCounterReset',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link scheduleEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_END: fieldBuilder.buildEnumField('ScheduleEnd', NoYes, true),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link workOrderCreateJob} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_CREATE_JOB: fieldBuilder.buildEnumField(
          'WorkOrderCreateJob',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workOrderLineScheduleDelete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_LINE_SCHEDULE_DELETE: fieldBuilder.buildEnumField(
          'WorkOrderLineScheduleDelete',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link updateMaintenanceAssetBom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_MAINTENANCE_ASSET_BOM: fieldBuilder.buildEnumField(
          'UpdateMaintenanceAssetBOM',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link validateCommitedCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_COMMITED_COST: fieldBuilder.buildEnumField(
          'ValidateCommitedCost',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workOrderAllowScheduling} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_ALLOW_SCHEDULING: fieldBuilder.buildEnumField(
          'WorkOrderAllowScheduling',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link validateFaultSymptom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_FAULT_SYMPTOM: fieldBuilder.buildEnumField(
          'ValidateFaultSymptom',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link validateFaultCauseInfoType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_FAULT_CAUSE_INFO_TYPE: fieldBuilder.buildEnumField(
          'ValidateFaultCauseInfoType',
          EntAssetInfoType,
          true
        ),
        /**
         * Static representation of the {@link validateFaultCause} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_FAULT_CAUSE: fieldBuilder.buildEnumField(
          'ValidateFaultCause',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workOrderSetActualStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_SET_ACTUAL_START: fieldBuilder.buildEnumField(
          'WorkOrderSetActualStart',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workOrderValidateChecklist} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_VALIDATE_CHECKLIST: fieldBuilder.buildEnumField(
          'WorkOrderValidateChecklist',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workOrderSetActualStartDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_SET_ACTUAL_START_DEFAULT: fieldBuilder.buildEnumField(
          'WorkOrderSetActualStartDefault',
          EntAssetWorkOrderSetActualStartDefault,
          true
        ),
        /**
         * Static representation of the {@link validateProductionStop} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_PRODUCTION_STOP: fieldBuilder.buildEnumField(
          'ValidateProductionStop',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postWorkOrderJournals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_WORK_ORDER_JOURNALS: fieldBuilder.buildEnumField(
          'PostWorkOrderJournals',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link scheduleReady} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_READY: fieldBuilder.buildEnumField(
          'ScheduleReady',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workOrderAllowDelete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_ALLOW_DELETE: fieldBuilder.buildEnumField(
          'WorkOrderAllowDelete',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link projectStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_STATUS: fieldBuilder.buildEnumField(
          'ProjectStatus',
          ProjStatus,
          true
        ),
        /**
         * Static representation of the {@link validateFaultSymptomInfoType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_FAULT_SYMPTOM_INFO_TYPE: fieldBuilder.buildEnumField(
          'ValidateFaultSymptomInfoType',
          EntAssetInfoType,
          true
        ),
        /**
         * Static representation of the {@link workOrderSetActualEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_SET_ACTUAL_END: fieldBuilder.buildEnumField(
          'WorkOrderSetActualEnd',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link validateCommitedCostInfoType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_COMMITED_COST_INFO_TYPE: fieldBuilder.buildEnumField(
          'ValidateCommitedCostInfoType',
          EntAssetInfoType,
          true
        ),
        /**
         * Static representation of the {@link validateFaultRemedyInfoType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_FAULT_REMEDY_INFO_TYPE: fieldBuilder.buildEnumField(
          'ValidateFaultRemedyInfoType',
          EntAssetInfoType,
          true
        ),
        /**
         * Static representation of the {@link workOrderSetActualEndDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_SET_ACTUAL_END_DEFAULT: fieldBuilder.buildEnumField(
          'WorkOrderSetActualEndDefault',
          EntAssetWorkOrderSetActualEndDefault,
          true
        ),
        /**
         * Static representation of the {@link workOrderAllowLineDelete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_ALLOW_LINE_DELETE: fieldBuilder.buildEnumField(
          'WorkOrderAllowLineDelete',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workOrderActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_ACTIVE: fieldBuilder.buildEnumField(
          'WorkOrderActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link copyForecastItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COPY_FORECAST_ITEM: fieldBuilder.buildEnumField(
          'CopyForecastItem',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link validateProductionStopInfoType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_PRODUCTION_STOP_INFO_TYPE: fieldBuilder.buildEnumField(
          'ValidateProductionStopInfoType',
          EntAssetInfoType,
          true
        ),
        /**
         * Static representation of the {@link validateFaultRemedy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_FAULT_REMEDY: fieldBuilder.buildEnumField(
          'ValidateFaultRemedy',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workOrderPoolDelete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_POOL_DELETE: fieldBuilder.buildEnumField(
          'WorkOrderPoolDelete',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link scheduleStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_START: fieldBuilder.buildEnumField(
          'ScheduleStart',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link copyForecastHour} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COPY_FORECAST_HOUR: fieldBuilder.buildEnumField(
          'CopyForecastHour',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link requestLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'RequestLifecycleStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link closeActivities} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSE_ACTIVITIES: fieldBuilder.buildEnumField(
          'CloseActivities',
          NoYes,
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
         * Static representation of the {@link workOrderValidateChecklistInfoType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_VALIDATE_CHECKLIST_INFO_TYPE: fieldBuilder.buildEnumField(
          'WorkOrderValidateChecklistInfoType',
          EntAssetInfoType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceWorkOrderLifecycleStates)
      };
    }

    return this._schema;
  }
}
