/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceJobTypes } from './AssetMaintenanceJobTypes';
import { AssetMaintenanceJobTypesRequestBuilder } from './AssetMaintenanceJobTypesRequestBuilder';
import { AssetMaintenanceFunctionalLocationRoundsApi } from './AssetMaintenanceFunctionalLocationRoundsApi';
import { AssetMaintenanceJobTypeSucceedJobTypesApi } from './AssetMaintenanceJobTypeSucceedJobTypesApi';
import { AssetMaintenanceJobGroupsApi } from './AssetMaintenanceJobGroupsApi';
import { AssetMaintenanceRequestsApi } from './AssetMaintenanceRequestsApi';
import { AssetMaintenanceAssetRoundsApi } from './AssetMaintenanceAssetRoundsApi';
import { AssetMaintenancePlanWorkOrderLinesApi } from './AssetMaintenancePlanWorkOrderLinesApi';
import { AssetMaintenanceWorkOrderLinesApi } from './AssetMaintenanceWorkOrderLinesApi';
import { AssetMaintenanceScheduledExecutionsApi } from './AssetMaintenanceScheduledExecutionsApi';
import { AssetMaintenanceWorkOrderLinesV2Api } from './AssetMaintenanceWorkOrderLinesV2Api';
import { AssetMaintenanceAssetCriticalitiesApi } from './AssetMaintenanceAssetCriticalitiesApi';
import { AssetMaintenanceJobTypeDefaultsApi } from './AssetMaintenanceJobTypeDefaultsApi';
import { AssetMaintenanceJobTypeVariantsApi } from './AssetMaintenanceJobTypeVariantsApi';
import { AssetMaintenanceUnplannedWorkOrderLinesApi } from './AssetMaintenanceUnplannedWorkOrderLinesApi';
import { AssetMaintenanceRoundWorkOrderLinesApi } from './AssetMaintenanceRoundWorkOrderLinesApi';
import { AssetMaintenanceWorkersResponsibleApi } from './AssetMaintenanceWorkersResponsibleApi';
import { AssetMaintenanceRequestWorkOrderLinesApi } from './AssetMaintenanceRequestWorkOrderLinesApi';
import { AssetMaintenanceAssetCalendarsApi } from './AssetMaintenanceAssetCalendarsApi';
import { AssetMaintenanceRequestsV2Api } from './AssetMaintenanceRequestsV2Api';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceJobTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetMaintenanceJobTypes<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceJobTypesApi<DeSerializersT> {
    return new AssetMaintenanceJobTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationRound} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ROUND: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationRoundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceJobTypeSucceedJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE_SUCCEED_JOB_TYPE: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypeSucceedJobTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_GROUP: OneToOneLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetRound} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_ROUND: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetRoundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTypeMaintenancePlanWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TYPE_MAINTENANCE_PLAN_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_LINE: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceScheduledExecution} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_SCHEDULED_EXECUTION: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceScheduledExecutionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTypeMaintenanceWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TYPE_MAINTENANCE_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetCriticality} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_CRITICALITY: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCriticalitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceJobTypeDefault} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE_DEFAULT: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypeDefaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceJobTypeVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE_VARIANT: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypeVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTypeMaintenanceUnplannedWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TYPE_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTypeMaintenanceRoundWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TYPE_MAINTENANCE_ROUND_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkerResponsible} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORKER_RESPONSIBLE: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersResponsibleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTypeMaintenanceRequestWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TYPE_MAINTENANCE_REQUEST_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_CALENDAR: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequestsMaintenanceJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS_MAINTENANCE_JOB_TYPE: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceFunctionalLocationRoundsApi<DeSerializersT>,
      AssetMaintenanceJobTypeSucceedJobTypesApi<DeSerializersT>,
      AssetMaintenanceJobGroupsApi<DeSerializersT>,
      AssetMaintenanceRequestsApi<DeSerializersT>,
      AssetMaintenanceAssetRoundsApi<DeSerializersT>,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceScheduledExecutionsApi<DeSerializersT>,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>,
      AssetMaintenanceAssetCriticalitiesApi<DeSerializersT>,
      AssetMaintenanceJobTypeDefaultsApi<DeSerializersT>,
      AssetMaintenanceJobTypeVariantsApi<DeSerializersT>,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceWorkersResponsibleApi<DeSerializersT>,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceAssetCalendarsApi<DeSerializersT>,
      AssetMaintenanceRequestsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ROUND: new OneToManyLink(
        'AssetMaintenanceFunctionalLocationRound',
        this,
        linkedApis[0]
      ),
      ASSET_MAINTENANCE_JOB_TYPE_SUCCEED_JOB_TYPE: new OneToManyLink(
        'AssetMaintenanceJobTypeSucceedJobType',
        this,
        linkedApis[1]
      ),
      ASSET_MAINTENANCE_JOB_GROUP: new OneToOneLink(
        'AssetMaintenanceJobGroup',
        this,
        linkedApis[2]
      ),
      MAINTENANCE_REQUESTS: new OneToManyLink(
        'MaintenanceRequests',
        this,
        linkedApis[3]
      ),
      ASSET_MAINTENANCE_ASSET_ROUND: new OneToManyLink(
        'AssetMaintenanceAssetRound',
        this,
        linkedApis[4]
      ),
      JOB_TYPE_MAINTENANCE_PLAN_WORK_ORDER_JOBS: new OneToManyLink(
        'JobType_MaintenancePlanWorkOrderJobs',
        this,
        linkedApis[5]
      ),
      ASSET_MAINTENANCE_WORK_ORDER_LINE: new OneToManyLink(
        'AssetMaintenanceWorkOrderLine',
        this,
        linkedApis[6]
      ),
      ASSET_MAINTENANCE_SCHEDULED_EXECUTION: new OneToManyLink(
        'AssetMaintenanceScheduledExecution',
        this,
        linkedApis[7]
      ),
      JOB_TYPE_MAINTENANCE_WORK_ORDER_JOBS: new OneToManyLink(
        'JobType_MaintenanceWorkOrderJobs',
        this,
        linkedApis[8]
      ),
      ASSET_MAINTENANCE_ASSET_CRITICALITY: new OneToManyLink(
        'AssetMaintenanceAssetCriticality',
        this,
        linkedApis[9]
      ),
      ASSET_MAINTENANCE_JOB_TYPE_DEFAULT: new OneToManyLink(
        'AssetMaintenanceJobTypeDefault',
        this,
        linkedApis[10]
      ),
      ASSET_MAINTENANCE_JOB_TYPE_VARIANT: new OneToManyLink(
        'AssetMaintenanceJobTypeVariant',
        this,
        linkedApis[11]
      ),
      JOB_TYPE_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS: new OneToManyLink(
        'JobType_MaintenanceUnplannedWorkOrderJobs',
        this,
        linkedApis[12]
      ),
      JOB_TYPE_MAINTENANCE_ROUND_WORK_ORDER_JOBS: new OneToManyLink(
        'JobType_MaintenanceRoundWorkOrderJobs',
        this,
        linkedApis[13]
      ),
      ASSET_MAINTENANCE_WORKER_RESPONSIBLE: new OneToManyLink(
        'AssetMaintenanceWorkerResponsible',
        this,
        linkedApis[14]
      ),
      JOB_TYPE_MAINTENANCE_REQUEST_WORK_ORDER_JOBS: new OneToManyLink(
        'JobType_MaintenanceRequestWorkOrderJobs',
        this,
        linkedApis[15]
      ),
      ASSET_MAINTENANCE_ASSET_CALENDAR: new OneToManyLink(
        'AssetMaintenanceAssetCalendar',
        this,
        linkedApis[16]
      ),
      MAINTENANCE_REQUESTS_MAINTENANCE_JOB_TYPE: new OneToManyLink(
        'MaintenanceRequests_MaintenanceJobType',
        this,
        linkedApis[17]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceJobTypes;

  requestBuilder(): AssetMaintenanceJobTypesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceJobTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceJobTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceJobTypes<DeSerializersT>,
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
    typeof AssetMaintenanceJobTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceJobTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_STOP_REQUIRED: EnumField<
      AssetMaintenanceJobTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetMaintenanceJobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_GROUP_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_WORKERS: OrderableEdmTypeField<
      AssetMaintenanceJobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetMaintenanceJobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationRound} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ROUND: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationRoundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceJobTypeSucceedJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE_SUCCEED_JOB_TYPE: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypeSucceedJobTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_GROUP: OneToOneLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetRound} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_ROUND: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetRoundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTypeMaintenancePlanWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TYPE_MAINTENANCE_PLAN_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_LINE: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceScheduledExecution} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_SCHEDULED_EXECUTION: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceScheduledExecutionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTypeMaintenanceWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TYPE_MAINTENANCE_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetCriticality} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_CRITICALITY: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCriticalitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceJobTypeDefault} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE_DEFAULT: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypeDefaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceJobTypeVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE_VARIANT: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypeVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTypeMaintenanceUnplannedWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TYPE_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTypeMaintenanceRoundWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TYPE_MAINTENANCE_ROUND_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkerResponsible} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORKER_RESPONSIBLE: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersResponsibleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTypeMaintenanceRequestWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TYPE_MAINTENANCE_REQUEST_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_CALENDAR: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequestsMaintenanceJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS_MAINTENANCE_JOB_TYPE: OneToManyLink<
      AssetMaintenanceJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceJobTypes<DeSerializers>>;
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
         * Static representation of the {@link jobTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'JobTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maintenanceStopRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_STOP_REQUIRED: fieldBuilder.buildEnumField(
          'MaintenanceStopRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link jobGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'JobGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberOfWorkers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_WORKERS: fieldBuilder.buildEdmTypeField(
          'NumberOfWorkers',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceJobTypes)
      };
    }

    return this._schema;
  }
}
