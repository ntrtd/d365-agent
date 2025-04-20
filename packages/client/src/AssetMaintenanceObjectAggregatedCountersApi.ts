/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceObjectAggregatedCounters } from './AssetMaintenanceObjectAggregatedCounters';
import { AssetMaintenanceObjectAggregatedCountersRequestBuilder } from './AssetMaintenanceObjectAggregatedCountersRequestBuilder';
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
export class AssetMaintenanceObjectAggregatedCountersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceObjectAggregatedCounters<DeSerializersT>,
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
  ): AssetMaintenanceObjectAggregatedCountersApi<DeSerializersT> {
    return new AssetMaintenanceObjectAggregatedCountersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetMaintenanceObjectAggregatedCounters;

  requestBuilder(): AssetMaintenanceObjectAggregatedCountersRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceObjectAggregatedCountersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceObjectAggregatedCounters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceObjectAggregatedCounters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceObjectAggregatedCounters<DeSerializersT>,
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
    typeof AssetMaintenanceObjectAggregatedCounters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceObjectAggregatedCounters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceObjectAggregatedCounters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceObjectAggregatedCounters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_COUNTER_ID: OrderableEdmTypeField<
      AssetMaintenanceObjectAggregatedCounters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTER_DATE_TIME: OrderableEdmTypeField<
      AssetMaintenanceObjectAggregatedCounters<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COUNTER_REPLACED: EnumField<
      AssetMaintenanceObjectAggregatedCounters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARENT_COUNTER_MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceObjectAggregatedCounters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_COUNTER_REPLACED: EnumField<
      AssetMaintenanceObjectAggregatedCounters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARENT_COUNTER_DATE_TIME: OrderableEdmTypeField<
      AssetMaintenanceObjectAggregatedCounters<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PARENT_COUNTER_MAINTENANCE_ASSET_COUNTER_ID: OrderableEdmTypeField<
      AssetMaintenanceObjectAggregatedCounters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTER_TOTAL: OrderableEdmTypeField<
      AssetMaintenanceObjectAggregatedCounters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceObjectAggregatedCounters<DeSerializers>
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
         * Static representation of the {@link maintenanceAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maintenanceAssetCounterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_COUNTER_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetCounterId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link counterDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTER_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'CounterDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link counterReplaced} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTER_REPLACED: fieldBuilder.buildEnumField(
          'CounterReplaced',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link parentCounterMaintenanceAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_COUNTER_MAINTENANCE_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'ParentCounterMaintenanceAssetId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentCounterReplaced} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_COUNTER_REPLACED: fieldBuilder.buildEnumField(
          'ParentCounterReplaced',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link parentCounterDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_COUNTER_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ParentCounterDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link parentCounterMaintenanceAssetCounterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_COUNTER_MAINTENANCE_ASSET_COUNTER_ID:
          fieldBuilder.buildEdmTypeField(
            'ParentCounterMaintenanceAssetCounterId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link counterTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTER_TOTAL: fieldBuilder.buildEdmTypeField(
          'CounterTotal',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceObjectAggregatedCounters)
      };
    }

    return this._schema;
  }
}
