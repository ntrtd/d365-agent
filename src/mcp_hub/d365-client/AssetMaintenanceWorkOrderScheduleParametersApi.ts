/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceWorkOrderScheduleParameters } from './AssetMaintenanceWorkOrderScheduleParameters';
import { AssetMaintenanceWorkOrderScheduleParametersRequestBuilder } from './AssetMaintenanceWorkOrderScheduleParametersRequestBuilder';
import { EntAssetWorkOrderDefaultScheduledStart } from './EntAssetWorkOrderDefaultScheduledStart';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceWorkOrderScheduleParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceWorkOrderScheduleParameters<DeSerializersT>,
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
  ): AssetMaintenanceWorkOrderScheduleParametersApi<DeSerializersT> {
    return new AssetMaintenanceWorkOrderScheduleParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetMaintenanceWorkOrderScheduleParameters;

  requestBuilder(): AssetMaintenanceWorkOrderScheduleParametersRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceWorkOrderScheduleParametersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceWorkOrderScheduleParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceWorkOrderScheduleParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceWorkOrderScheduleParameters<DeSerializersT>,
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
    typeof AssetMaintenanceWorkOrderScheduleParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceWorkOrderScheduleParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderScheduleParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_LOCATION: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderScheduleParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WORK_ORDER_CRITICALITY: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderScheduleParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WORKER_START_DATE: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderScheduleParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQ_PLAN_ID_SCHED: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderScheduleParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_PRIORITY: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderScheduleParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESPONSIBLE_WORKER_GROUP: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderScheduleParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WORK_ORDER_START_DATE: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderScheduleParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PREFERRED_WORKER_GROUP: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderScheduleParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESPONSIBLE_WORKER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderScheduleParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_SCHEDULED_START_DATE: EnumField<
      AssetMaintenanceWorkOrderScheduleParameters<DeSerializers>,
      DeSerializersT,
      EntAssetWorkOrderDefaultScheduledStart,
      true,
      true
    >;
    PREFERRED_WORKER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderScheduleParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TIME_FENCE_SCHEDULE: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderScheduleParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceWorkOrderScheduleParameters<DeSerializers>
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
         * Static representation of the {@link maintenanceAssetLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_LOCATION: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetLocation',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link workOrderCriticality} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_CRITICALITY: fieldBuilder.buildEdmTypeField(
          'WorkOrderCriticality',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link workerStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_START_DATE: fieldBuilder.buildEdmTypeField(
          'WorkerStartDate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reqPlanIdSched} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQ_PLAN_ID_SCHED: fieldBuilder.buildEdmTypeField(
          'ReqPlanIdSched',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workOrderPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_PRIORITY: fieldBuilder.buildEdmTypeField(
          'WorkOrderPriority',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link responsibleWorkerGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSIBLE_WORKER_GROUP: fieldBuilder.buildEdmTypeField(
          'ResponsibleWorkerGroup',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link workOrderStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_START_DATE: fieldBuilder.buildEdmTypeField(
          'WorkOrderStartDate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link preferredWorkerGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREFERRED_WORKER_GROUP: fieldBuilder.buildEdmTypeField(
          'PreferredWorkerGroup',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link responsibleWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSIBLE_WORKER: fieldBuilder.buildEdmTypeField(
          'ResponsibleWorker',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultScheduledStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_SCHEDULED_START_DATE: fieldBuilder.buildEnumField(
          'DefaultScheduledStartDate',
          EntAssetWorkOrderDefaultScheduledStart,
          true
        ),
        /**
         * Static representation of the {@link preferredWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREFERRED_WORKER: fieldBuilder.buildEdmTypeField(
          'PreferredWorker',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link timeFenceSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_FENCE_SCHEDULE: fieldBuilder.buildEdmTypeField(
          'TimeFenceSchedule',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          AssetMaintenanceWorkOrderScheduleParameters
        )
      };
    }

    return this._schema;
  }
}
