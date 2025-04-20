/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceRequests } from './AssetMaintenanceRequests';
import { AssetMaintenanceRequestsRequestBuilder } from './AssetMaintenanceRequestsRequestBuilder';
import { AssetMaintenanceWorkOrderTablesApi } from './AssetMaintenanceWorkOrderTablesApi';
import { AssetMaintenanceRequestTypesApi } from './AssetMaintenanceRequestTypesApi';
import { AssetMaintenanceJobTypesApi } from './AssetMaintenanceJobTypesApi';
import { AssetMaintenanceRequestLifecycleStatesApi } from './AssetMaintenanceRequestLifecycleStatesApi';
import { AssetMaintenanceJobTradesApi } from './AssetMaintenanceJobTradesApi';
import { WorkersApi } from './WorkersApi';
import { AssetMaintenanceWorkerGroupsApi } from './AssetMaintenanceWorkerGroupsApi';
import { AssetMaintenanceJobVariantsApi } from './AssetMaintenanceJobVariantsApi';
import { AssetMaintenanceAssetsV3Api } from './AssetMaintenanceAssetsV3Api';
import { AssetMaintenanceFunctionalLocationsApi } from './AssetMaintenanceFunctionalLocationsApi';
import { AssetMaintenanceWorkersApi } from './AssetMaintenanceWorkersApi';
import { AssetMaintenanceWorkOrderPrioritiesApi } from './AssetMaintenanceWorkOrderPrioritiesApi';
import { AssetMaintenanceRequestWorkOrderLinesApi } from './AssetMaintenanceRequestWorkOrderLinesApi';
import { AssetMaintenanceAssetCalendarsApi } from './AssetMaintenanceAssetCalendarsApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceRequestsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetMaintenanceRequests<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceRequestsApi<DeSerializersT> {
    return new AssetMaintenanceRequestsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceRequestType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_REQUEST_TYPE: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TYPE: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link lifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIFECYCLE_STATE: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobTrade} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TRADE: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTradesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link startingWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STARTING_WORKER: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link requestResponsibleWorkerGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUEST_RESPONSIBLE_WORKER_GROUP: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkerGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_VARIANT: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAssetV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_V_3: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceRequestResponsibleWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUEST_RESPONSIBLE_WORKER: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_LEVEL: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderPrioritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link requestMaintnenaceRequestWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUEST_MAINTNENACE_REQUEST_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_CALENDAR: OneToManyLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCalendarsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceWorkOrderTablesApi<DeSerializersT>,
      AssetMaintenanceRequestTypesApi<DeSerializersT>,
      AssetMaintenanceJobTypesApi<DeSerializersT>,
      AssetMaintenanceRequestLifecycleStatesApi<DeSerializersT>,
      AssetMaintenanceJobTradesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      AssetMaintenanceWorkerGroupsApi<DeSerializersT>,
      AssetMaintenanceJobVariantsApi<DeSerializersT>,
      AssetMaintenanceAssetsV3Api<DeSerializersT>,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>,
      AssetMaintenanceWorkersApi<DeSerializersT>,
      AssetMaintenanceWorkOrderPrioritiesApi<DeSerializersT>,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceAssetCalendarsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      MAINTENANCE_WORK_ORDER: new OneToOneLink(
        'MaintenanceWorkOrder',
        this,
        linkedApis[0]
      ),
      ASSET_MAINTENANCE_REQUEST_TYPE: new OneToOneLink(
        'AssetMaintenanceRequestType',
        this,
        linkedApis[1]
      ),
      MAINTENANCE_JOB_TYPE: new OneToOneLink(
        'MaintenanceJobType',
        this,
        linkedApis[2]
      ),
      LIFECYCLE_STATE: new OneToOneLink('LifecycleState', this, linkedApis[3]),
      MAINTENANCE_JOB_TRADE: new OneToOneLink(
        'MaintenanceJobTrade',
        this,
        linkedApis[4]
      ),
      STARTING_WORKER: new OneToOneLink('StartingWorker', this, linkedApis[5]),
      REQUEST_RESPONSIBLE_WORKER_GROUP: new OneToOneLink(
        'RequestResponsibleWorkerGroup',
        this,
        linkedApis[6]
      ),
      MAINTENANCE_JOB_VARIANT: new OneToOneLink(
        'MaintenanceJobVariant',
        this,
        linkedApis[7]
      ),
      ASSET_MAINTENANCE_ASSET_V_3: new OneToOneLink(
        'AssetMaintenanceAssetV3',
        this,
        linkedApis[8]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION: new OneToOneLink(
        'AssetMaintenanceFunctionalLocation',
        this,
        linkedApis[9]
      ),
      MAINTENANCE_REQUEST_RESPONSIBLE_WORKER: new OneToOneLink(
        'MaintenanceRequestResponsibleWorker',
        this,
        linkedApis[10]
      ),
      SERVICE_LEVEL: new OneToOneLink('ServiceLevel', this, linkedApis[11]),
      REQUEST_MAINTNENACE_REQUEST_WORK_ORDER_JOBS: new OneToManyLink(
        'Request_MaintnenaceRequestWorkOrderJobs',
        this,
        linkedApis[12]
      ),
      ASSET_MAINTENANCE_ASSET_CALENDAR: new OneToManyLink(
        'AssetMaintenanceAssetCalendar',
        this,
        linkedApis[13]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceRequests;

  requestBuilder(): AssetMaintenanceRequestsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceRequestsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceRequests<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceRequests<DeSerializersT>,
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
    typeof AssetMaintenanceRequests,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceRequests,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTUAL_END: OrderableEdmTypeField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REQUEST_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTUAL_START: OrderableEdmTypeField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRODUCTION_STOP_FROM: OrderableEdmTypeField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORK_ORDER_PRIORITY: OrderableEdmTypeField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MAINTENANCE_ASSET_VERIFIED: EnumField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOB_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAINTENANCE_ASSET_VERIFIED_BY_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LATITUDE: OrderableEdmTypeField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NOTES: OrderableEdmTypeField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESPONSIBLE_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_VARIANT_ID: OrderableEdmTypeField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_TRADE_ID: OrderableEdmTypeField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_REQUEST_ACTIVE: EnumField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STARTED_BY_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_ID: OrderableEdmTypeField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LONGITUDE: OrderableEdmTypeField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WORKER_GROUP_ID: OrderableEdmTypeField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUEST_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceRequestType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_REQUEST_TYPE: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TYPE: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link lifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIFECYCLE_STATE: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobTrade} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TRADE: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTradesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link startingWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STARTING_WORKER: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link requestResponsibleWorkerGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUEST_RESPONSIBLE_WORKER_GROUP: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkerGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_VARIANT: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAssetV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_V_3: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceRequestResponsibleWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUEST_RESPONSIBLE_WORKER: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_LEVEL: OneToOneLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderPrioritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link requestMaintnenaceRequestWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUEST_MAINTNENACE_REQUEST_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_CALENDAR: OneToManyLink<
      AssetMaintenanceRequests<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCalendarsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceRequests<DeSerializers>>;
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
         * Static representation of the {@link requestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'RequestId',
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
          true
        ),
        /**
         * Static representation of the {@link maintenanceAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link actualEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_END: fieldBuilder.buildEdmTypeField(
          'ActualEnd',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link requestTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'RequestTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link actualStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_START: fieldBuilder.buildEdmTypeField(
          'ActualStart',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link productionStopFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_STOP_FROM: fieldBuilder.buildEdmTypeField(
          'ProductionStopFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link workOrderPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_PRIORITY: fieldBuilder.buildEdmTypeField(
          'WorkOrderPriority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link maintenanceAssetVerified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_VERIFIED: fieldBuilder.buildEnumField(
          'MaintenanceAssetVerified',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link jobTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'JobTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maintenanceAssetVerifiedByWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_VERIFIED_BY_WORKER_PERSONNEL_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'MaintenanceAssetVerifiedByWorkerPersonnelNumber',
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
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link responsibleWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSIBLE_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ResponsibleWorkerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobVariantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_VARIANT_ID: fieldBuilder.buildEdmTypeField(
          'JobVariantId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobTradeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TRADE_ID: fieldBuilder.buildEdmTypeField(
          'JobTradeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isRequestActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REQUEST_ACTIVE: fieldBuilder.buildEnumField(
          'IsRequestActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link startedByWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTED_BY_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'StartedByWorkerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'WorkOrderId',
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
         * Static representation of the {@link workerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'WorkerGroupId',
          'Edm.String',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceRequests)
      };
    }

    return this._schema;
  }
}
