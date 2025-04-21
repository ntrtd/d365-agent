/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceWorkOrderTablesV2 } from './AssetMaintenanceWorkOrderTablesV2';
import { AssetMaintenanceWorkOrderTablesV2RequestBuilder } from './AssetMaintenanceWorkOrderTablesV2RequestBuilder';
import { AssetMaintenanceWorkOrderUserReferencesApi } from './AssetMaintenanceWorkOrderUserReferencesApi';
import { AssetMaintenanceWorkOrderAssetFaultsApi } from './AssetMaintenanceWorkOrderAssetFaultsApi';
import { MaintenanceWorkOrderTableAttachmentsApi } from './MaintenanceWorkOrderTableAttachmentsApi';
import { AssetMaintenancePlanWorkOrderLinesApi } from './AssetMaintenancePlanWorkOrderLinesApi';
import { AssetMaintenanceWorkOrderLinesV2Api } from './AssetMaintenanceWorkOrderLinesV2Api';
import { AssetMaintenanceUnplannedWorkOrderLinesApi } from './AssetMaintenanceUnplannedWorkOrderLinesApi';
import { AssetMaintenanceRoundWorkOrderLinesApi } from './AssetMaintenanceRoundWorkOrderLinesApi';
import { AssetMaintenanceCriticalitiesApi } from './AssetMaintenanceCriticalitiesApi';
import { AssetMaintenanceWorkersApi } from './AssetMaintenanceWorkersApi';
import { AssetMaintenanceWorkOrderTypesApi } from './AssetMaintenanceWorkOrderTypesApi';
import { AssetMaintenanceWorkerGroupsApi } from './AssetMaintenanceWorkerGroupsApi';
import { ProjectContractHeadersApi } from './ProjectContractHeadersApi';
import { CustomersV3Api } from './CustomersV3Api';
import { AssetMaintenanceWorkOrderStandardDescriptionsApi } from './AssetMaintenanceWorkOrderStandardDescriptionsApi';
import { AssetMaintenanceWorkOrderLifecycleStatesApi } from './AssetMaintenanceWorkOrderLifecycleStatesApi';
import { AssetMaintenanceWorkOrderPrioritiesApi } from './AssetMaintenanceWorkOrderPrioritiesApi';
import { AssetMaintenanceRequestWorkOrderLinesApi } from './AssetMaintenanceRequestWorkOrderLinesApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceWorkOrderTablesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetMaintenanceWorkOrderTablesV2<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT> {
    return new AssetMaintenanceWorkOrderTablesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceWorkOrderUserReferencesMaintenanceWorkOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_USER_REFERENCES_MAINTENANCE_WORK_ORDER_HEADER: OneToManyLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderUserReferencesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workOrderMaintenanceWorkOrderAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_MAINTENANCE_WORK_ORDER_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      MaintenanceWorkOrderTableAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workOrderHeaderMaintenancePlanWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_HEADER_MAINTENANCE_PLAN_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workOrderHeaderMaintenanceWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_HEADER_MAINTENANCE_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workOrderHeaderMaintenanceUnplannedWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_HEADER_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workOrderHeaderMaintenanceRoundWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_HEADER_MAINTENANCE_ROUND_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAssetCriticality} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_CRITICALITY: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceCriticalitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderScheduledWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_SCHEDULED_WORKER: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_TYPE: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceResponsibleWorkerGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_RESPONSIBLE_WORKER_GROUP: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkerGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectContract} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_CONTRACT: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      ProjectContractHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link billingCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILLING_CUSTOMER: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderResponsibleWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_RESPONSIBLE_WORKER: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderDescription} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_DESCRIPTION: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderStandardDescriptionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_LIFECYCLE_STATE: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentMaintenanceWorkOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_MAINTENANCE_WORK_ORDER_HEADER: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link parentWorkOrderHeaderMaintenanceWorkOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_WORK_ORDER_HEADER_MAINTENANCE_WORK_ORDER_HEADERS: OneToManyLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderServiceLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_SERVICE_LEVEL: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderPrioritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workOrderHeaderMaintenanceRequestWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_HEADER_MAINTENANCE_REQUEST_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceWorkOrderUserReferencesApi<DeSerializersT>,
      AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT>,
      MaintenanceWorkOrderTableAttachmentsApi<DeSerializersT>,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceCriticalitiesApi<DeSerializersT>,
      AssetMaintenanceWorkersApi<DeSerializersT>,
      AssetMaintenanceWorkOrderTypesApi<DeSerializersT>,
      AssetMaintenanceWorkerGroupsApi<DeSerializersT>,
      ProjectContractHeadersApi<DeSerializersT>,
      CustomersV3Api<DeSerializersT>,
      AssetMaintenanceWorkersApi<DeSerializersT>,
      AssetMaintenanceWorkOrderStandardDescriptionsApi<DeSerializersT>,
      AssetMaintenanceWorkOrderLifecycleStatesApi<DeSerializersT>,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>,
      AssetMaintenanceWorkOrderPrioritiesApi<DeSerializersT>,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      MAINTENANCE_WORK_ORDER_USER_REFERENCES_MAINTENANCE_WORK_ORDER_HEADER:
        new OneToManyLink(
          'MaintenanceWorkOrderUserReferences_MaintenanceWorkOrderHeader',
          this,
          linkedApis[0]
        ),
      WORK_ORDER_MAINTENANCE_WORK_ORDER_ASSET_FAULTS: new OneToManyLink(
        'WorkOrder_MaintenanceWorkOrderAssetFaults',
        this,
        linkedApis[1]
      ),
      WORK_ORDER: new OneToOneLink('WorkOrder', this, linkedApis[2]),
      WORK_ORDER_HEADER_MAINTENANCE_PLAN_WORK_ORDER_JOBS: new OneToManyLink(
        'WorkOrderHeader_MaintenancePlanWorkOrderJobs',
        this,
        linkedApis[3]
      ),
      WORK_ORDER_HEADER_MAINTENANCE_WORK_ORDER_JOBS: new OneToManyLink(
        'WorkOrderHeader_MaintenanceWorkOrderJobs',
        this,
        linkedApis[4]
      ),
      WORK_ORDER_HEADER_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS:
        new OneToManyLink(
          'WorkOrderHeader_MaintenanceUnplannedWorkOrderJobs',
          this,
          linkedApis[5]
        ),
      WORK_ORDER_HEADER_MAINTENANCE_ROUND_WORK_ORDER_JOBS: new OneToManyLink(
        'WorkOrderHeader_MaintenanceRoundWorkOrderJobs',
        this,
        linkedApis[6]
      ),
      MAINTENANCE_ASSET_CRITICALITY: new OneToOneLink(
        'MaintenanceAssetCriticality',
        this,
        linkedApis[7]
      ),
      MAINTENANCE_WORK_ORDER_SCHEDULED_WORKER: new OneToOneLink(
        'MaintenanceWorkOrderScheduledWorker',
        this,
        linkedApis[8]
      ),
      MAINTENANCE_WORK_ORDER_TYPE: new OneToOneLink(
        'MaintenanceWorkOrderType',
        this,
        linkedApis[9]
      ),
      MAINTENANCE_RESPONSIBLE_WORKER_GROUP: new OneToOneLink(
        'MaintenanceResponsibleWorkerGroup',
        this,
        linkedApis[10]
      ),
      PROJECT_CONTRACT: new OneToOneLink(
        'ProjectContract',
        this,
        linkedApis[11]
      ),
      BILLING_CUSTOMER: new OneToOneLink(
        'BillingCustomer',
        this,
        linkedApis[12]
      ),
      MAINTENANCE_WORK_ORDER_RESPONSIBLE_WORKER: new OneToOneLink(
        'MaintenanceWorkOrderResponsibleWorker',
        this,
        linkedApis[13]
      ),
      MAINTENANCE_WORK_ORDER_DESCRIPTION: new OneToOneLink(
        'MaintenanceWorkOrderDescription',
        this,
        linkedApis[14]
      ),
      MAINTENANCE_WORK_ORDER_LIFECYCLE_STATE: new OneToOneLink(
        'MaintenanceWorkOrderLifecycleState',
        this,
        linkedApis[15]
      ),
      PARENT_MAINTENANCE_WORK_ORDER_HEADER: new OneToOneLink(
        'ParentMaintenanceWorkOrderHeader',
        this,
        linkedApis[16]
      ),
      PARENT_WORK_ORDER_HEADER_MAINTENANCE_WORK_ORDER_HEADERS:
        new OneToManyLink(
          'ParentWorkOrderHeader_MaintenanceWorkOrderHeaders',
          this,
          linkedApis[17]
        ),
      MAINTENANCE_WORK_ORDER_SERVICE_LEVEL: new OneToOneLink(
        'MaintenanceWorkOrderServiceLevel',
        this,
        linkedApis[18]
      ),
      WORK_ORDER_HEADER_MAINTENANCE_REQUEST_WORK_ORDER_JOBS: new OneToManyLink(
        'WorkOrderHeader_MaintenanceRequestWorkOrderJobs',
        this,
        linkedApis[19]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceWorkOrderTablesV2;

  requestBuilder(): AssetMaintenanceWorkOrderTablesV2RequestBuilder<DeSerializersT> {
    return new AssetMaintenanceWorkOrderTablesV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
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
    typeof AssetMaintenanceWorkOrderTablesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceWorkOrderTablesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_ORDER_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARENT_WORK_ORDER_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE: EnumField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_WORK_ORDER_SCHEDULED_FOR_SINGLE_WORKER: EnumField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORDER_BILLING_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULED_END: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_GROUP_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTUAL_START: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SCHEDULED_START: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORK_ORDER_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_MAINTENANCE_ASSET_CRITICALITY_NAME: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTUAL_END: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RESPONSIBLE_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEXT_WORK_ORDER_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPECTED_END: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORK_ORDER_MAINTENANCE_ASSET_CRITICALITY_VALUE: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COST_TYPE: EnumField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      EntAssetCostType,
      true,
      true
    >;
    SERVICE_LEVEL: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ORDER_PROJECT_CONTRACT_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPECTED_START: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SCHEDULED_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderTablesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceWorkOrderUserReferencesMaintenanceWorkOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_USER_REFERENCES_MAINTENANCE_WORK_ORDER_HEADER: OneToManyLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderUserReferencesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workOrderMaintenanceWorkOrderAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_MAINTENANCE_WORK_ORDER_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      MaintenanceWorkOrderTableAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workOrderHeaderMaintenancePlanWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_HEADER_MAINTENANCE_PLAN_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workOrderHeaderMaintenanceWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_HEADER_MAINTENANCE_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workOrderHeaderMaintenanceUnplannedWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_HEADER_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workOrderHeaderMaintenanceRoundWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_HEADER_MAINTENANCE_ROUND_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAssetCriticality} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_CRITICALITY: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceCriticalitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderScheduledWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_SCHEDULED_WORKER: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_TYPE: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceResponsibleWorkerGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_RESPONSIBLE_WORKER_GROUP: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkerGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectContract} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_CONTRACT: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      ProjectContractHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link billingCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILLING_CUSTOMER: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderResponsibleWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_RESPONSIBLE_WORKER: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderDescription} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_DESCRIPTION: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderStandardDescriptionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_LIFECYCLE_STATE: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentMaintenanceWorkOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_MAINTENANCE_WORK_ORDER_HEADER: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link parentWorkOrderHeaderMaintenanceWorkOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_WORK_ORDER_HEADER_MAINTENANCE_WORK_ORDER_HEADERS: OneToManyLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceWorkOrderServiceLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_WORK_ORDER_SERVICE_LEVEL: OneToOneLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderPrioritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workOrderHeaderMaintenanceRequestWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_HEADER_MAINTENANCE_REQUEST_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceWorkOrderTablesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceWorkOrderTablesV2<DeSerializers>>;
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
         * Static representation of the {@link workOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'WorkOrderId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link parentWorkOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_WORK_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'ParentWorkOrderId',
          'Edm.String',
          true
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
         * Static representation of the {@link active} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE: fieldBuilder.buildEnumField('Active', NoYes, true),
        /**
         * Static representation of the {@link isWorkOrderScheduledForSingleWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WORK_ORDER_SCHEDULED_FOR_SINGLE_WORKER: fieldBuilder.buildEnumField(
          'IsWorkOrderScheduledForSingleWorker',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link orderBillingCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_BILLING_CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderBillingCustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scheduledEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_END: fieldBuilder.buildEdmTypeField(
          'ScheduledEnd',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link actualStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_START: fieldBuilder.buildEdmTypeField(
          'ActualStart',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link scheduledStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_START: fieldBuilder.buildEdmTypeField(
          'ScheduledStart',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link workOrderLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'WorkOrderLifecycleStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workOrderMaintenanceAssetCriticalityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_MAINTENANCE_ASSET_CRITICALITY_NAME:
          fieldBuilder.buildEdmTypeField(
            'WorkOrderMaintenanceAssetCriticalityName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link workOrderTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'WorkOrderTypeId',
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
         * Static representation of the {@link responsibleWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSIBLE_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ResponsibleWorkerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nextWorkOrderLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_WORK_ORDER_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'NextWorkOrderLifecycleStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expectedEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_END: fieldBuilder.buildEdmTypeField(
          'ExpectedEnd',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link workOrderMaintenanceAssetCriticalityValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_MAINTENANCE_ASSET_CRITICALITY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'WorkOrderMaintenanceAssetCriticalityValue',
            'Edm.Int32',
            false
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
         * Static representation of the {@link serviceLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LEVEL: fieldBuilder.buildEdmTypeField(
          'ServiceLevel',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link orderProjectContractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_PROJECT_CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'OrderProjectContractId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expectedStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_START: fieldBuilder.buildEdmTypeField(
          'ExpectedStart',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link scheduledWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ScheduledWorkerPersonnelNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceWorkOrderTablesV2)
      };
    }

    return this._schema;
  }
}
