/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { StdExpressionLines } from './StdExpressionLines';
import { StdExpressionLinesRequestBuilder } from './StdExpressionLinesRequestBuilder';
import { PeriodFrequencyRu } from './PeriodFrequencyRu';
import { RTax25StdLineType } from './RTax25StdLineType';
import { RTax25StdOperator } from './RTax25StdOperator';
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
export class StdExpressionLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<StdExpressionLines<DeSerializersT>, DeSerializersT>
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
  ): StdExpressionLinesApi<DeSerializersT> {
    return new StdExpressionLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = StdExpressionLines;

  requestBuilder(): StdExpressionLinesRequestBuilder<DeSerializersT> {
    return new StdExpressionLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    StdExpressionLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<StdExpressionLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    StdExpressionLines<DeSerializersT>,
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
    typeof StdExpressionLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        StdExpressionLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      StdExpressionLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEQUENCE: OrderableEdmTypeField<
      StdExpressionLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PROFIT_ID: OrderableEdmTypeField<
      StdExpressionLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      StdExpressionLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INDEX: OrderableEdmTypeField<
      StdExpressionLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REGISTER_FIELD: OrderableEdmTypeField<
      StdExpressionLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO: OrderableEdmTypeField<
      StdExpressionLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_TYPES: EnumField<
      StdExpressionLines<DeSerializers>,
      DeSerializersT,
      PeriodFrequencyRu,
      true,
      true
    >;
    NOTE: OrderableEdmTypeField<
      StdExpressionLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_TYPE: EnumField<
      StdExpressionLines<DeSerializers>,
      DeSerializersT,
      RTax25StdLineType,
      true,
      true
    >;
    OPERATOR: EnumField<
      StdExpressionLines<DeSerializers>,
      DeSerializersT,
      RTax25StdOperator,
      true,
      true
    >;
    OUTPUT: OrderableEdmTypeField<
      StdExpressionLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM: OrderableEdmTypeField<
      StdExpressionLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<StdExpressionLines<DeSerializers>>;
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
         * Static representation of the {@link sequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE: fieldBuilder.buildEdmTypeField(
          'Sequence',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link profitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_ID: fieldBuilder.buildEdmTypeField(
          'ProfitId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link index} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEX: fieldBuilder.buildEdmTypeField('Index', 'Edm.Int32', false),
        /**
         * Static representation of the {@link registerField} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTER_FIELD: fieldBuilder.buildEdmTypeField(
          'RegisterField',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link to} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO: fieldBuilder.buildEdmTypeField('To', 'Edm.String', true),
        /**
         * Static representation of the {@link periodTypes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_TYPES: fieldBuilder.buildEnumField(
          'PeriodTypes',
          PeriodFrequencyRu,
          true
        ),
        /**
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        /**
         * Static representation of the {@link lineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TYPE: fieldBuilder.buildEnumField(
          'LineType',
          RTax25StdLineType,
          true
        ),
        /**
         * Static representation of the {@link operator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATOR: fieldBuilder.buildEnumField(
          'Operator',
          RTax25StdOperator,
          true
        ),
        /**
         * Static representation of the {@link output} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTPUT: fieldBuilder.buildEdmTypeField('Output', 'Edm.String', true),
        /**
         * Static representation of the {@link from} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM: fieldBuilder.buildEdmTypeField('From', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', StdExpressionLines)
      };
    }

    return this._schema;
  }
}
