/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceRequestsV2 } from './AssetMaintenanceRequestsV2';
import { AssetMaintenanceRequestsV2RequestBuilder } from './AssetMaintenanceRequestsV2RequestBuilder';
import { MaintenanceRequestDocumentAttachmentsApi } from './MaintenanceRequestDocumentAttachmentsApi';
import { AssetMaintenanceRequestAssetFaultsApi } from './AssetMaintenanceRequestAssetFaultsApi';
import { AssetMaintenanceAssetCalendarsApi } from './AssetMaintenanceAssetCalendarsApi';
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
export class AssetMaintenanceRequestsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetMaintenanceRequestsV2<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceRequestsV2Api<DeSerializersT> {
    return new AssetMaintenanceRequestsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUEST: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      MaintenanceRequestDocumentAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link requestMaintenanceRequestAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUEST_MAINTENANCE_REQUEST_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetCalendarsMaintenanceRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_CALENDARS_MAINTENANCE_REQUEST: OneToManyLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceRequestType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUEST_TYPE: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TYPE: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link lifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIFECYCLE_STATE: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobTrade} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TRADE: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTradesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link startingWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STARTING_WORKER: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link requestResponsibleWorkerGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUEST_RESPONSIBLE_WORKER_GROUP: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkerGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetVerificationWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VERIFICATION_WORKER: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_VARIANT: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link asset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceRequestResponsibleWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUEST_RESPONSIBLE_WORKER: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_LEVEL: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderPrioritiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MaintenanceRequestDocumentAttachmentsApi<DeSerializersT>,
      AssetMaintenanceRequestAssetFaultsApi<DeSerializersT>,
      AssetMaintenanceAssetCalendarsApi<DeSerializersT>,
      AssetMaintenanceWorkOrderTablesApi<DeSerializersT>,
      AssetMaintenanceRequestTypesApi<DeSerializersT>,
      AssetMaintenanceJobTypesApi<DeSerializersT>,
      AssetMaintenanceRequestLifecycleStatesApi<DeSerializersT>,
      AssetMaintenanceJobTradesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      AssetMaintenanceWorkerGroupsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      AssetMaintenanceJobVariantsApi<DeSerializersT>,
      AssetMaintenanceAssetsV3Api<DeSerializersT>,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>,
      AssetMaintenanceWorkersApi<DeSerializersT>,
      AssetMaintenanceWorkOrderPrioritiesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      MAINTENANCE_REQUEST: new OneToOneLink(
        'MaintenanceRequest',
        this,
        linkedApis[0]
      ),
      REQUEST_MAINTENANCE_REQUEST_ASSET_FAULTS: new OneToManyLink(
        'Request_MaintenanceRequestAssetFaults',
        this,
        linkedApis[1]
      ),
      MAINTENANCE_ASSET_CALENDARS_MAINTENANCE_REQUEST: new OneToManyLink(
        'MaintenanceAssetCalendars_MaintenanceRequest',
        this,
        linkedApis[2]
      ),
      MAINTENANCE_WORK_ORDER: new OneToOneLink(
        'MaintenanceWorkOrder',
        this,
        linkedApis[3]
      ),
      MAINTENANCE_REQUEST_TYPE: new OneToOneLink(
        'MaintenanceRequestType',
        this,
        linkedApis[4]
      ),
      MAINTENANCE_JOB_TYPE: new OneToOneLink(
        'MaintenanceJobType',
        this,
        linkedApis[5]
      ),
      LIFECYCLE_STATE: new OneToOneLink('LifecycleState', this, linkedApis[6]),
      MAINTENANCE_JOB_TRADE: new OneToOneLink(
        'MaintenanceJobTrade',
        this,
        linkedApis[7]
      ),
      STARTING_WORKER: new OneToOneLink('StartingWorker', this, linkedApis[8]),
      REQUEST_RESPONSIBLE_WORKER_GROUP: new OneToOneLink(
        'RequestResponsibleWorkerGroup',
        this,
        linkedApis[9]
      ),
      ASSET_VERIFICATION_WORKER: new OneToOneLink(
        'AssetVerificationWorker',
        this,
        linkedApis[10]
      ),
      MAINTENANCE_JOB_VARIANT: new OneToOneLink(
        'MaintenanceJobVariant',
        this,
        linkedApis[11]
      ),
      ASSET: new OneToOneLink('Asset', this, linkedApis[12]),
      MAINTENANCE_FUNCTIONAL_LOCATION: new OneToOneLink(
        'MaintenanceFunctionalLocation',
        this,
        linkedApis[13]
      ),
      MAINTENANCE_REQUEST_RESPONSIBLE_WORKER: new OneToOneLink(
        'MaintenanceRequestResponsibleWorker',
        this,
        linkedApis[14]
      ),
      SERVICE_LEVEL: new OneToOneLink('ServiceLevel', this, linkedApis[15])
    };
    return this;
  }

  entityConstructor = AssetMaintenanceRequestsV2;

  requestBuilder(): AssetMaintenanceRequestsV2RequestBuilder<DeSerializersT> {
    return new AssetMaintenanceRequestsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceRequestsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceRequestsV2<DeSerializersT>,
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
    typeof AssetMaintenanceRequestsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceRequestsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCTION_STOP_FROM: OrderableEdmTypeField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_REQUEST_ACTIVE: EnumField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTUAL_START: OrderableEdmTypeField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STARTED_BY_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_VARIANT_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_PRIORITY: OrderableEdmTypeField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LATITUDE: OrderableEdmTypeField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQUEST_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAINTENANCE_ASSET_VERIFIED: EnumField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOB_TRADE_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESPONSIBLE_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTUAL_END: OrderableEdmTypeField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NEXT_REQUEST_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_GROUP_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LONGITUDE: OrderableEdmTypeField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NOTES: OrderableEdmTypeField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAINTENANCE_ASSET_VERIFIED_BY_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUEST_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceRequestsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUEST: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      MaintenanceRequestDocumentAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link requestMaintenanceRequestAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUEST_MAINTENANCE_REQUEST_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetCalendarsMaintenanceRequest} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_CALENDARS_MAINTENANCE_REQUEST: OneToManyLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceRequestType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUEST_TYPE: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TYPE: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link lifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIFECYCLE_STATE: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobTrade} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_TRADE: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTradesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link startingWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STARTING_WORKER: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link requestResponsibleWorkerGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUEST_RESPONSIBLE_WORKER_GROUP: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkerGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetVerificationWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VERIFICATION_WORKER: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceJobVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_JOB_VARIANT: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link asset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceRequestResponsibleWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUEST_RESPONSIBLE_WORKER: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_LEVEL: OneToOneLink<
      AssetMaintenanceRequestsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderPrioritiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceRequestsV2<DeSerializers>>;
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
         * Static representation of the {@link productionStopFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_STOP_FROM: fieldBuilder.buildEdmTypeField(
          'ProductionStopFrom',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link actualStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_START: fieldBuilder.buildEdmTypeField(
          'ActualStart',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link jobVariantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_VARIANT_ID: fieldBuilder.buildEdmTypeField(
          'JobVariantId',
          'Edm.String',
          true
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
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
         * Static representation of the {@link functionalLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'FunctionalLocationId',
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
         * Static representation of the {@link requestTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'RequestTypeId',
          'Edm.String',
          true
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
         * Static representation of the {@link jobTradeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TRADE_ID: fieldBuilder.buildEdmTypeField(
          'JobTradeId',
          'Edm.String',
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
         * Static representation of the {@link responsibleWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSIBLE_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ResponsibleWorkerPersonnelNumber',
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
         * Static representation of the {@link nextRequestLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_REQUEST_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'NextRequestLifecycleStateId',
          'Edm.String',
          true
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
         * Static representation of the {@link addressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'AddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
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
         * Static representation of the {@link requestLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'RequestLifecycleStateId',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceRequestsV2)
      };
    }

    return this._schema;
  }
}
