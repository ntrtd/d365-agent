/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceWorkOrderLineSchedules } from './AssetMaintenanceWorkOrderLineSchedules';
import { AssetMaintenanceWorkOrderLineSchedulesRequestBuilder } from './AssetMaintenanceWorkOrderLineSchedulesRequestBuilder';
import { EntAssetScheduleType } from './EntAssetScheduleType';
import { NoYes } from './NoYes';
import { EntAssetScheduleStatus } from './EntAssetScheduleStatus';
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
export class AssetMaintenanceWorkOrderLineSchedulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceWorkOrderLineSchedules<DeSerializersT>,
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
  ): AssetMaintenanceWorkOrderLineSchedulesApi<DeSerializersT> {
    return new AssetMaintenanceWorkOrderLineSchedulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetMaintenanceWorkOrderLineSchedules;

  requestBuilder(): AssetMaintenanceWorkOrderLineSchedulesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceWorkOrderLineSchedulesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceWorkOrderLineSchedules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceWorkOrderLineSchedules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceWorkOrderLineSchedules<DeSerializersT>,
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
    typeof AssetMaintenanceWorkOrderLineSchedules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceWorkOrderLineSchedules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_ORDER_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_ORDER_LINE_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SCHEDULE_TYPE: EnumField<
      AssetMaintenanceWorkOrderLineSchedules<DeSerializers>,
      DeSerializersT,
      EntAssetScheduleType,
      true,
      true
    >;
    WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WRK_CTR_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCHEDULED_START_DATE_TIME: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONFLICT: EnumField<
      AssetMaintenanceWorkOrderLineSchedules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SCHEDULED_END_DATE_TIME: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STATUS: EnumField<
      AssetMaintenanceWorkOrderLineSchedules<DeSerializers>,
      DeSerializersT,
      EntAssetScheduleStatus,
      true,
      true
    >;
    TIME_SEC: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACTUAL_START_DATE_TIME: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    HOURS: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACTUAL_END_DATE_TIME: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceWorkOrderLineSchedules<DeSerializers>
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
         * Static representation of the {@link workOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'WorkOrderId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link workOrderLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkOrderLineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link scheduleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_TYPE: fieldBuilder.buildEnumField(
          'ScheduleType',
          EntAssetScheduleType,
          true
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
         * Static representation of the {@link maintenanceAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link wrkCtrId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRK_CTR_ID: fieldBuilder.buildEdmTypeField(
          'WrkCtrId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link scheduledStartDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ScheduledStartDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link conflict} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFLICT: fieldBuilder.buildEnumField('Conflict', NoYes, true),
        /**
         * Static representation of the {@link scheduledEndDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_END_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ScheduledEndDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          EntAssetScheduleStatus,
          true
        ),
        /**
         * Static representation of the {@link timeSec} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SEC: fieldBuilder.buildEdmTypeField('TimeSec', 'Edm.Int32', false),
        /**
         * Static representation of the {@link actualStartDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ActualStartDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link hours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOURS: fieldBuilder.buildEdmTypeField('Hours', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link actualEndDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_END_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ActualEndDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceWorkOrderLineSchedules)
      };
    }

    return this._schema;
  }
}
