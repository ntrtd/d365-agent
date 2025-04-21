/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceJobTrades } from './AssetMaintenanceJobTrades';
import { AssetMaintenanceJobTradesRequestBuilder } from './AssetMaintenanceJobTradesRequestBuilder';
import { AssetMaintenanceFunctionalLocationRoundsApi } from './AssetMaintenanceFunctionalLocationRoundsApi';
import { AssetMaintenanceJobTypeSucceedJobTypesApi } from './AssetMaintenanceJobTypeSucceedJobTypesApi';
import { AssetMaintenanceRequestsApi } from './AssetMaintenanceRequestsApi';
import { AssetMaintenanceAssetRoundsApi } from './AssetMaintenanceAssetRoundsApi';
import { AssetMaintenancePlanWorkOrderLinesApi } from './AssetMaintenancePlanWorkOrderLinesApi';
import { AssetMaintenanceWorkOrderLinesApi } from './AssetMaintenanceWorkOrderLinesApi';
import { AssetMaintenanceScheduledExecutionsApi } from './AssetMaintenanceScheduledExecutionsApi';
import { AssetMaintenanceWorkOrderLinesV2Api } from './AssetMaintenanceWorkOrderLinesV2Api';
import { AssetMaintenanceAssetCriticalitiesApi } from './AssetMaintenanceAssetCriticalitiesApi';
import { AssetMaintenanceJobTypeDefaultsApi } from './AssetMaintenanceJobTypeDefaultsApi';
import { AssetMaintenanceUnplannedWorkOrderLinesApi } from './AssetMaintenanceUnplannedWorkOrderLinesApi';
import { AssetMaintenanceRoundWorkOrderLinesApi } from './AssetMaintenanceRoundWorkOrderLinesApi';
import { AssetMaintenanceWorkersResponsibleApi } from './AssetMaintenanceWorkersResponsibleApi';
import { AssetMaintenanceRequestWorkOrderLinesApi } from './AssetMaintenanceRequestWorkOrderLinesApi';
import { AssetMaintenanceAssetCalendarsApi } from './AssetMaintenanceAssetCalendarsApi';
import { AssetMaintenanceRequestsV2Api } from './AssetMaintenanceRequestsV2Api';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceJobTradesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetMaintenanceJobTrades<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceJobTradesApi<DeSerializersT> {
    return new AssetMaintenanceJobTradesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationRound} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_ROUND: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationRoundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceJobTypeSucceedJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE_SUCCEED_JOB_TYPE: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypeSucceedJobTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetRound} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_ROUND: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetRoundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTradeMaintenancePlanWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TRADE_MAINTENANCE_PLAN_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_LINE: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceScheduledExecution} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_SCHEDULED_EXECUTION: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceScheduledExecutionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTradeMaintenanceWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TRADE_MAINTENANCE_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetCriticality} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_CRITICALITY: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCriticalitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceJobTypeDefault} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE_DEFAULT: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypeDefaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTradeMaintenanceUnplannedWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TRADE_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTradeMaintenanceRoundWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TRADE_MAINTENANCE_ROUND_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkerResponsible} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORKER_RESPONSIBLE: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersResponsibleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTradeMaintenanceRequestWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TRADE_MAINTENANCE_REQUEST_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_CALENDAR: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequestsMaintenanceJobTrade} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS_MAINTENANCE_JOB_TRADE: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceFunctionalLocationRoundsApi<DeSerializersT>,
      AssetMaintenanceJobTypeSucceedJobTypesApi<DeSerializersT>,
      AssetMaintenanceRequestsApi<DeSerializersT>,
      AssetMaintenanceAssetRoundsApi<DeSerializersT>,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceScheduledExecutionsApi<DeSerializersT>,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>,
      AssetMaintenanceAssetCriticalitiesApi<DeSerializersT>,
      AssetMaintenanceJobTypeDefaultsApi<DeSerializersT>,
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
      MAINTENANCE_REQUESTS: new OneToManyLink(
        'MaintenanceRequests',
        this,
        linkedApis[2]
      ),
      ASSET_MAINTENANCE_ASSET_ROUND: new OneToManyLink(
        'AssetMaintenanceAssetRound',
        this,
        linkedApis[3]
      ),
      JOB_TRADE_MAINTENANCE_PLAN_WORK_ORDER_JOBS: new OneToManyLink(
        'JobTrade_MaintenancePlanWorkOrderJobs',
        this,
        linkedApis[4]
      ),
      ASSET_MAINTENANCE_WORK_ORDER_LINE: new OneToManyLink(
        'AssetMaintenanceWorkOrderLine',
        this,
        linkedApis[5]
      ),
      ASSET_MAINTENANCE_SCHEDULED_EXECUTION: new OneToManyLink(
        'AssetMaintenanceScheduledExecution',
        this,
        linkedApis[6]
      ),
      JOB_TRADE_MAINTENANCE_WORK_ORDER_JOBS: new OneToManyLink(
        'JobTrade_MaintenanceWorkOrderJobs',
        this,
        linkedApis[7]
      ),
      ASSET_MAINTENANCE_ASSET_CRITICALITY: new OneToManyLink(
        'AssetMaintenanceAssetCriticality',
        this,
        linkedApis[8]
      ),
      ASSET_MAINTENANCE_JOB_TYPE_DEFAULT: new OneToManyLink(
        'AssetMaintenanceJobTypeDefault',
        this,
        linkedApis[9]
      ),
      JOB_TRADE_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS: new OneToManyLink(
        'JobTrade_MaintenanceUnplannedWorkOrderJobs',
        this,
        linkedApis[10]
      ),
      JOB_TRADE_MAINTENANCE_ROUND_WORK_ORDER_JOBS: new OneToManyLink(
        'JobTrade_MaintenanceRoundWorkOrderJobs',
        this,
        linkedApis[11]
      ),
      ASSET_MAINTENANCE_WORKER_RESPONSIBLE: new OneToManyLink(
        'AssetMaintenanceWorkerResponsible',
        this,
        linkedApis[12]
      ),
      JOB_TRADE_MAINTENANCE_REQUEST_WORK_ORDER_JOBS: new OneToManyLink(
        'JobTrade_MaintenanceRequestWorkOrderJobs',
        this,
        linkedApis[13]
      ),
      ASSET_MAINTENANCE_ASSET_CALENDAR: new OneToManyLink(
        'AssetMaintenanceAssetCalendar',
        this,
        linkedApis[14]
      ),
      MAINTENANCE_REQUESTS_MAINTENANCE_JOB_TRADE: new OneToManyLink(
        'MaintenanceRequests_MaintenanceJobTrade',
        this,
        linkedApis[15]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceJobTrades;

  requestBuilder(): AssetMaintenanceJobTradesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceJobTradesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceJobTrades<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceJobTrades<DeSerializersT>,
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
    typeof AssetMaintenanceJobTrades,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceJobTrades,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTrades<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_TRADE_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTrades<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetMaintenanceJobTrades<DeSerializers>,
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
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationRoundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceJobTypeSucceedJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE_SUCCEED_JOB_TYPE: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypeSucceedJobTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetRound} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_ROUND: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetRoundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTradeMaintenancePlanWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TRADE_MAINTENANCE_PLAN_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_LINE: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceScheduledExecution} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_SCHEDULED_EXECUTION: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceScheduledExecutionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTradeMaintenanceWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TRADE_MAINTENANCE_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetCriticality} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_CRITICALITY: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCriticalitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceJobTypeDefault} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE_DEFAULT: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypeDefaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTradeMaintenanceUnplannedWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TRADE_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTradeMaintenanceRoundWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TRADE_MAINTENANCE_ROUND_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkerResponsible} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORKER_RESPONSIBLE: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersResponsibleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTradeMaintenanceRequestWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TRADE_MAINTENANCE_REQUEST_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_CALENDAR: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequestsMaintenanceJobTrade} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS_MAINTENANCE_JOB_TRADE: OneToManyLink<
      AssetMaintenanceJobTrades<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceJobTrades<DeSerializers>>;
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
         * Static representation of the {@link jobTradeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TRADE_ID: fieldBuilder.buildEdmTypeField(
          'JobTradeId',
          'Edm.String',
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
        ALL_FIELDS: new AllFields('*', AssetMaintenanceJobTrades)
      };
    }

    return this._schema;
  }
}
