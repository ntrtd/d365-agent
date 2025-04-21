/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenancePlanLineTypeTimes } from './AssetMaintenancePlanLineTypeTimes';
import { AssetMaintenancePlanLineTypeTimesRequestBuilder } from './AssetMaintenancePlanLineTypeTimesRequestBuilder';
import { EntAssetMaintenancePlanLineIntervalType } from './EntAssetMaintenancePlanLineIntervalType';
import { DayWeekMonthQuarterYear } from './DayWeekMonthQuarterYear';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenancePlanLineTypeTimesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetMaintenancePlanLineTypeTimes<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenancePlanLineTypeTimesApi<DeSerializersT> {
    return new AssetMaintenancePlanLineTypeTimesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetMaintenancePlanLineTypeTimes;

  requestBuilder(): AssetMaintenancePlanLineTypeTimesRequestBuilder<DeSerializersT> {
    return new AssetMaintenancePlanLineTypeTimesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenancePlanLineTypeTimes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenancePlanLineTypeTimes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenancePlanLineTypeTimes<DeSerializersT>,
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
    typeof AssetMaintenancePlanLineTypeTimes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenancePlanLineTypeTimes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeTimes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_PLAN_ID: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeTimes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeTimes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PLAN_DATE: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeTimes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SERVICE_LEVEL: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeTimes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    JOB_VARIANT_ID: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeTimes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeTimes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeTimes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLAN_INTERVAL_TYPE: EnumField<
      AssetMaintenancePlanLineTypeTimes<DeSerializers>,
      DeSerializersT,
      EntAssetMaintenancePlanLineIntervalType,
      true,
      true
    >;
    ACTIVITY_INTERVAL_PERIOD: EnumField<
      AssetMaintenancePlanLineTypeTimes<DeSerializers>,
      DeSerializersT,
      DayWeekMonthQuarterYear,
      true,
      true
    >;
    PLAN_INTERVAL: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeTimes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    JOB_TRADE_ID: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeTimes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeTimes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeTimes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AUTO_CREATE: EnumField<
      AssetMaintenancePlanLineTypeTimes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOB_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeTimes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPECTED_END_DAYS: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeTimes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXPECTED_END_HOURS: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeTimes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUPRESS_OVERLAPPING_JOBS: EnumField<
      AssetMaintenancePlanLineTypeTimes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<AssetMaintenancePlanLineTypeTimes<DeSerializers>>;
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
         * Static representation of the {@link maintenancePlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'MaintenancePlanId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link planDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_DATE: fieldBuilder.buildEdmTypeField(
          'PlanDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link jobVariantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_VARIANT_ID: fieldBuilder.buildEdmTypeField(
          'JobVariantId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link planIntervalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_INTERVAL_TYPE: fieldBuilder.buildEnumField(
          'PlanIntervalType',
          EntAssetMaintenancePlanLineIntervalType,
          true
        ),
        /**
         * Static representation of the {@link activityIntervalPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_INTERVAL_PERIOD: fieldBuilder.buildEnumField(
          'ActivityIntervalPeriod',
          DayWeekMonthQuarterYear,
          true
        ),
        /**
         * Static representation of the {@link planInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_INTERVAL: fieldBuilder.buildEdmTypeField(
          'PlanInterval',
          'Edm.Int32',
          false
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
         * Static representation of the {@link workOrderTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'WorkOrderTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link autoCreate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_CREATE: fieldBuilder.buildEnumField('AutoCreate', NoYes, true),
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
         * Static representation of the {@link expectedEndDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_END_DAYS: fieldBuilder.buildEdmTypeField(
          'ExpectedEndDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link expectedEndHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_END_HOURS: fieldBuilder.buildEdmTypeField(
          'ExpectedEndHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link supressOverlappingJobs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPRESS_OVERLAPPING_JOBS: fieldBuilder.buildEnumField(
          'SupressOverlappingJobs',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenancePlanLineTypeTimes)
      };
    }

    return this._schema;
  }
}
