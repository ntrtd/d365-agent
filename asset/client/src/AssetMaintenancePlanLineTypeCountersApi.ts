/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenancePlanLineTypeCounters } from './AssetMaintenancePlanLineTypeCounters';
import { AssetMaintenancePlanLineTypeCountersRequestBuilder } from './AssetMaintenancePlanLineTypeCountersRequestBuilder';
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
export class AssetMaintenancePlanLineTypeCountersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenancePlanLineTypeCounters<DeSerializersT>,
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
  ): AssetMaintenancePlanLineTypeCountersApi<DeSerializersT> {
    return new AssetMaintenancePlanLineTypeCountersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetMaintenancePlanLineTypeCounters;

  requestBuilder(): AssetMaintenancePlanLineTypeCountersRequestBuilder<DeSerializersT> {
    return new AssetMaintenancePlanLineTypeCountersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenancePlanLineTypeCounters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenancePlanLineTypeCounters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenancePlanLineTypeCounters<DeSerializersT>,
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
    typeof AssetMaintenancePlanLineTypeCounters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenancePlanLineTypeCounters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeCounters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_PLAN_ID: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeCounters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeCounters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeCounters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DAYS: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeCounters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    OMIT_OVERLAP: EnumField<
      AssetMaintenancePlanLineTypeCounters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTO_CREATE: EnumField<
      AssetMaintenancePlanLineTypeCounters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAINTENANCE_ASSET_COUNTER_ID: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeCounters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeCounters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAINTENANCE_ASSET_COUNTER_RESET: EnumField<
      AssetMaintenancePlanLineTypeCounters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOB_VARIANT_ID: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeCounters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_INTERVAL_TYPE: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeCounters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPECTED_END_HOURS: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeCounters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOB_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeCounters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_TRADE_ID: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeCounters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_LEVEL: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeCounters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXPECTED_END_DAYS: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeCounters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACTIVITY_INTERVAL: OrderableEdmTypeField<
      AssetMaintenancePlanLineTypeCounters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<AssetMaintenancePlanLineTypeCounters<DeSerializers>>;
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link days} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAYS: fieldBuilder.buildEdmTypeField('Days', 'Edm.Int32', false),
        /**
         * Static representation of the {@link omitOverlap} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OMIT_OVERLAP: fieldBuilder.buildEnumField('OmitOverlap', NoYes, true),
        /**
         * Static representation of the {@link autoCreate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_CREATE: fieldBuilder.buildEnumField('AutoCreate', NoYes, true),
        /**
         * Static representation of the {@link maintenanceAssetCounterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_COUNTER_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetCounterId',
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
         * Static representation of the {@link maintenanceAssetCounterReset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_COUNTER_RESET: fieldBuilder.buildEnumField(
          'MaintenanceAssetCounterReset',
          NoYes,
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
         * Static representation of the {@link activityIntervalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_INTERVAL_TYPE: fieldBuilder.buildEdmTypeField(
          'ActivityIntervalType',
          'Edm.String',
          true
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
         * Static representation of the {@link jobTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'JobTypeId',
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
         * Static representation of the {@link serviceLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LEVEL: fieldBuilder.buildEdmTypeField(
          'ServiceLevel',
          'Edm.Int32',
          false
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
         * Static representation of the {@link activityInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_INTERVAL: fieldBuilder.buildEdmTypeField(
          'ActivityInterval',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenancePlanLineTypeCounters)
      };
    }

    return this._schema;
  }
}
