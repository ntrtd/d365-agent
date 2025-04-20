/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetUndepreciatedBalanceSchedules } from './AssetUndepreciatedBalanceSchedules';
import { AssetUndepreciatedBalanceSchedulesRequestBuilder } from './AssetUndepreciatedBalanceSchedulesRequestBuilder';
import { AssetDepreciationMethod } from './AssetDepreciationMethod';
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
export class AssetUndepreciatedBalanceSchedulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetUndepreciatedBalanceSchedules<DeSerializersT>,
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
  ): AssetUndepreciatedBalanceSchedulesApi<DeSerializersT> {
    return new AssetUndepreciatedBalanceSchedulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetUndepreciatedBalanceSchedules;

  requestBuilder(): AssetUndepreciatedBalanceSchedulesRequestBuilder<DeSerializersT> {
    return new AssetUndepreciatedBalanceSchedulesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetUndepreciatedBalanceSchedules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetUndepreciatedBalanceSchedules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetUndepreciatedBalanceSchedules<DeSerializersT>,
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
    typeof AssetUndepreciatedBalanceSchedules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetUndepreciatedBalanceSchedules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetUndepreciatedBalanceSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_METHOD: EnumField<
      AssetUndepreciatedBalanceSchedules<DeSerializers>,
      DeSerializersT,
      AssetDepreciationMethod,
      true,
      true
    >;
    TO_METHOD: EnumField<
      AssetUndepreciatedBalanceSchedules<DeSerializers>,
      DeSerializersT,
      AssetDepreciationMethod,
      true,
      true
    >;
    SERVICE_LIFE: OrderableEdmTypeField<
      AssetUndepreciatedBalanceSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    YEARS_PASSED: OrderableEdmTypeField<
      AssetUndepreciatedBalanceSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UPPER_LIMIT_RATE: OrderableEdmTypeField<
      AssetUndepreciatedBalanceSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SCHEDULE_DESCRIPTION: OrderableEdmTypeField<
      AssetUndepreciatedBalanceSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOWER_LIMIT_RATE: OrderableEdmTypeField<
      AssetUndepreciatedBalanceSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<AssetUndepreciatedBalanceSchedules<DeSerializers>>;
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
         * Static representation of the {@link fromMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_METHOD: fieldBuilder.buildEnumField(
          'FromMethod',
          AssetDepreciationMethod,
          true
        ),
        /**
         * Static representation of the {@link toMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_METHOD: fieldBuilder.buildEnumField(
          'ToMethod',
          AssetDepreciationMethod,
          true
        ),
        /**
         * Static representation of the {@link serviceLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LIFE: fieldBuilder.buildEdmTypeField(
          'ServiceLife',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link yearsPassed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEARS_PASSED: fieldBuilder.buildEdmTypeField(
          'YearsPassed',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link upperLimitRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPPER_LIMIT_RATE: fieldBuilder.buildEdmTypeField(
          'UpperLimitRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link scheduleDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ScheduleDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lowerLimitRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOWER_LIMIT_RATE: fieldBuilder.buildEdmTypeField(
          'LowerLimitRate',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetUndepreciatedBalanceSchedules)
      };
    }

    return this._schema;
  }
}
