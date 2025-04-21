/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceWorkers } from './AssetMaintenanceWorkers';
import { AssetMaintenanceWorkersRequestBuilder } from './AssetMaintenanceWorkersRequestBuilder';
import { AssetMaintenanceRequestsApi } from './AssetMaintenanceRequestsApi';
import { AssetMaintenancePlanWorkOrderLinesApi } from './AssetMaintenancePlanWorkOrderLinesApi';
import { AssetMaintenanceFunctionalLocationWorkersApi } from './AssetMaintenanceFunctionalLocationWorkersApi';
import { AssetMaintenanceWorkOrderLineChecklistsApi } from './AssetMaintenanceWorkOrderLineChecklistsApi';
import { AssetMaintenanceWorkOrderLinesV2Api } from './AssetMaintenanceWorkOrderLinesV2Api';
import { AssetMaintenanceUnplannedWorkOrderLinesApi } from './AssetMaintenanceUnplannedWorkOrderLinesApi';
import { AssetMaintenanceRoundWorkOrderLinesApi } from './AssetMaintenanceRoundWorkOrderLinesApi';
import { AssetMaintenanceWorkOrderTablesV2Api } from './AssetMaintenanceWorkOrderTablesV2Api';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceWorkersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetMaintenanceWorkers<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceWorkersApi<DeSerializersT> {
    return new AssetMaintenanceWorkersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link scheduledWorkerMaintenancePlanWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCHEDULED_WORKER_MAINTENANCE_PLAN_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_WORKER: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobChecklistLinesMaintenanceAssetWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CHECKLIST_LINES_MAINTENANCE_ASSET_WORKER: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLineChecklistsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link scheduledWorkerMaintenanceWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCHEDULED_WORKER_MAINTENANCE_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link scheduledWorkerMaintenanceUnplannedWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCHEDULED_WORKER_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link scheduledWorkerMaintenanceRoundWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCHEDULED_WORKER_MAINTENANCE_ROUND_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link scheduledWorkerMaintenanceWorkOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCHEDULED_WORKER_MAINTENANCE_WORK_ORDER_HEADERS: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerMaintenanceWorkOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_MAINTENANCE_WORK_ORDER_HEADERS: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkerResponsible} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORKER_RESPONSIBLE: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersResponsibleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link scheduledWorkerMaintnenaceRequestWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCHEDULED_WORKER_MAINTNENACE_REQUEST_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_CALENDAR: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequestsMaintenanceRequestResponsibleWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS_MAINTENANCE_REQUEST_RESPONSIBLE_WORKER: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceRequestsApi<DeSerializersT>,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationWorkersApi<DeSerializersT>,
      AssetMaintenanceWorkOrderLineChecklistsApi<DeSerializersT>,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>,
      AssetMaintenanceWorkersResponsibleApi<DeSerializersT>,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>,
      AssetMaintenanceAssetCalendarsApi<DeSerializersT>,
      AssetMaintenanceRequestsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      MAINTENANCE_REQUESTS: new OneToManyLink(
        'MaintenanceRequests',
        this,
        linkedApis[0]
      ),
      SCHEDULED_WORKER_MAINTENANCE_PLAN_WORK_ORDER_JOBS: new OneToManyLink(
        'ScheduledWorker_MaintenancePlanWorkOrderJobs',
        this,
        linkedApis[1]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_WORKER: new OneToManyLink(
        'AssetMaintenanceFunctionalLocationWorker',
        this,
        linkedApis[2]
      ),
      JOB_CHECKLIST_LINES_MAINTENANCE_ASSET_WORKER: new OneToManyLink(
        'JobChecklistLines_MaintenanceAssetWorker',
        this,
        linkedApis[3]
      ),
      SCHEDULED_WORKER_MAINTENANCE_WORK_ORDER_JOBS: new OneToManyLink(
        'ScheduledWorker_MaintenanceWorkOrderJobs',
        this,
        linkedApis[4]
      ),
      SCHEDULED_WORKER_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS: new OneToManyLink(
        'ScheduledWorker_MaintenanceUnplannedWorkOrderJobs',
        this,
        linkedApis[5]
      ),
      SCHEDULED_WORKER_MAINTENANCE_ROUND_WORK_ORDER_JOBS: new OneToManyLink(
        'ScheduledWorker_MaintenanceRoundWorkOrderJobs',
        this,
        linkedApis[6]
      ),
      SCHEDULED_WORKER_MAINTENANCE_WORK_ORDER_HEADERS: new OneToManyLink(
        'ScheduledWorker_MaintenanceWorkOrderHeaders',
        this,
        linkedApis[7]
      ),
      WORKER_MAINTENANCE_WORK_ORDER_HEADERS: new OneToManyLink(
        'Worker_MaintenanceWorkOrderHeaders',
        this,
        linkedApis[8]
      ),
      ASSET_MAINTENANCE_WORKER_RESPONSIBLE: new OneToManyLink(
        'AssetMaintenanceWorkerResponsible',
        this,
        linkedApis[9]
      ),
      SCHEDULED_WORKER_MAINTNENACE_REQUEST_WORK_ORDER_JOBS: new OneToManyLink(
        'ScheduledWorker_MaintnenaceRequestWorkOrderJobs',
        this,
        linkedApis[10]
      ),
      ASSET_MAINTENANCE_ASSET_CALENDAR: new OneToManyLink(
        'AssetMaintenanceAssetCalendar',
        this,
        linkedApis[11]
      ),
      MAINTENANCE_REQUESTS_MAINTENANCE_REQUEST_RESPONSIBLE_WORKER:
        new OneToManyLink(
          'MaintenanceRequests_MaintenanceRequestResponsibleWorker',
          this,
          linkedApis[12]
        )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceWorkers;

  requestBuilder(): AssetMaintenanceWorkersRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceWorkersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceWorkers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceWorkers<DeSerializersT>,
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
    typeof AssetMaintenanceWorkers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceWorkers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORKER_ACTIVE: EnumField<
      AssetMaintenanceWorkers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link scheduledWorkerMaintenancePlanWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCHEDULED_WORKER_MAINTENANCE_PLAN_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenancePlanWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocationWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION_WORKER: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobChecklistLinesMaintenanceAssetWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CHECKLIST_LINES_MAINTENANCE_ASSET_WORKER: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLineChecklistsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link scheduledWorkerMaintenanceWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCHEDULED_WORKER_MAINTENANCE_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link scheduledWorkerMaintenanceUnplannedWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCHEDULED_WORKER_MAINTENANCE_UNPLANNED_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceUnplannedWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link scheduledWorkerMaintenanceRoundWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCHEDULED_WORKER_MAINTENANCE_ROUND_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link scheduledWorkerMaintenanceWorkOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCHEDULED_WORKER_MAINTENANCE_WORK_ORDER_HEADERS: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerMaintenanceWorkOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_MAINTENANCE_WORK_ORDER_HEADERS: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkerResponsible} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORKER_RESPONSIBLE: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersResponsibleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link scheduledWorkerMaintnenaceRequestWorkOrderJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCHEDULED_WORKER_MAINTNENACE_REQUEST_WORK_ORDER_JOBS: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestWorkOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_CALENDAR: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceRequestsMaintenanceRequestResponsibleWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_REQUESTS_MAINTENANCE_REQUEST_RESPONSIBLE_WORKER: OneToManyLink<
      AssetMaintenanceWorkers<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceWorkers<DeSerializers>>;
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
         * Static representation of the {@link workerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkerPersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link workerActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_ACTIVE: fieldBuilder.buildEnumField('WorkerActive', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceWorkers)
      };
    }

    return this._schema;
  }
}
