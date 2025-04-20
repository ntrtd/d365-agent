/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RrgeQueries_W } from './RrgeQueries_W';
import { RrgeQueries_WRequestBuilder } from './RrgeQueries_WRequestBuilder';
import { LedgerRrgDataTypeRu } from './LedgerRrgDataTypeRu';
import { NoYes } from './NoYes';
import { LedgerRrgTypeByCorrectRu } from './LedgerRrgTypeByCorrectRu';
import { LedgerRrgCurrencyForCalcRu } from './LedgerRrgCurrencyForCalcRu';
import { LedgerRrgeQueryTypeW } from './LedgerRrgeQueryTypeW';
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
export class RrgeQueries_WApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RrgeQueries_W<DeSerializersT>, DeSerializersT>
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
  ): RrgeQueries_WApi<DeSerializersT> {
    return new RrgeQueries_WApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RrgeQueries_W;

  requestBuilder(): RrgeQueries_WRequestBuilder<DeSerializersT> {
    return new RrgeQueries_WRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RrgeQueries_W<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RrgeQueries_W<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RrgeQueries_W<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RrgeQueries_W, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(RrgeQueries_W, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RrgeQueries_W<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUERY_ID: OrderableEdmTypeField<
      RrgeQueries_W<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATA_TYPE: EnumField<
      RrgeQueries_W<DeSerializers>,
      DeSerializersT,
      LedgerRrgDataTypeRu,
      true,
      true
    >;
    PERIOD: OrderableEdmTypeField<
      RrgeQueries_W<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_ONLY: EnumField<
      RrgeQueries_W<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TYPE_BY_CORRECT: EnumField<
      RrgeQueries_W<DeSerializers>,
      DeSerializersT,
      LedgerRrgTypeByCorrectRu,
      true,
      true
    >;
    MODEL_NUM: OrderableEdmTypeField<
      RrgeQueries_W<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_HIERARCHY_HASH_KEY: OrderableEdmTypeField<
      RrgeQueries_W<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    SCALE: OrderableEdmTypeField<
      RrgeQueries_W<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY_FOR_CALC: EnumField<
      RrgeQueries_W<DeSerializers>,
      DeSerializersT,
      LedgerRrgCurrencyForCalcRu,
      true,
      true
    >;
    TYPE: EnumField<
      RrgeQueries_W<DeSerializers>,
      DeSerializersT,
      LedgerRrgeQueryTypeW,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      RrgeQueries_W<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POINT_SIGN_NUM: OrderableEdmTypeField<
      RrgeQueries_W<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RrgeQueries_W<DeSerializers>>;
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
         * Static representation of the {@link queryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUERY_ID: fieldBuilder.buildEdmTypeField(
          'QueryId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dataType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_TYPE: fieldBuilder.buildEnumField(
          'DataType',
          LedgerRrgDataTypeRu,
          true
        ),
        /**
         * Static representation of the {@link period} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD: fieldBuilder.buildEdmTypeField('Period', 'Edm.String', true),
        /**
         * Static representation of the {@link firstOnly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_ONLY: fieldBuilder.buildEnumField('FirstOnly', NoYes, true),
        /**
         * Static representation of the {@link typeByCorrect} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_BY_CORRECT: fieldBuilder.buildEnumField(
          'TypeByCorrect',
          LedgerRrgTypeByCorrectRu,
          true
        ),
        /**
         * Static representation of the {@link modelNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_NUM: fieldBuilder.buildEdmTypeField(
          'ModelNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionHierarchyHashKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_HIERARCHY_HASH_KEY: fieldBuilder.buildEdmTypeField(
          'DimensionHierarchyHashKey',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link scale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCALE: fieldBuilder.buildEdmTypeField('Scale', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link currencyForCalc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_FOR_CALC: fieldBuilder.buildEnumField(
          'CurrencyForCalc',
          LedgerRrgCurrencyForCalcRu,
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', LedgerRrgeQueryTypeW, true),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link pointSignNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POINT_SIGN_NUM: fieldBuilder.buildEdmTypeField(
          'PointSignNum',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RrgeQueries_W)
      };
    }

    return this._schema;
  }
}
