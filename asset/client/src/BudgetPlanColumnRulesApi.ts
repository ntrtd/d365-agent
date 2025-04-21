/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetPlanColumnRules } from './BudgetPlanColumnRules';
import { BudgetPlanColumnRulesRequestBuilder } from './BudgetPlanColumnRulesRequestBuilder';
import { BudgetPlanExpressionOperator } from './BudgetPlanExpressionOperator';
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
export class BudgetPlanColumnRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetPlanColumnRules<DeSerializersT>, DeSerializersT>
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
  ): BudgetPlanColumnRulesApi<DeSerializersT> {
    return new BudgetPlanColumnRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BudgetPlanColumnRules;

  requestBuilder(): BudgetPlanColumnRulesRequestBuilder<DeSerializersT> {
    return new BudgetPlanColumnRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetPlanColumnRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetPlanColumnRules<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetPlanColumnRules<DeSerializersT>,
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
    typeof BudgetPlanColumnRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetPlanColumnRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COLUMN_NAME: OrderableEdmTypeField<
      BudgetPlanColumnRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TABLE_NAME: OrderableEdmTypeField<
      BudgetPlanColumnRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIELD_NAME: OrderableEdmTypeField<
      BudgetPlanColumnRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RIGHT_SIDE_VALUE_ONE: OrderableEdmTypeField<
      BudgetPlanColumnRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RIGHT_SIDE_VALUE_TWO: OrderableEdmTypeField<
      BudgetPlanColumnRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATOR: EnumField<
      BudgetPlanColumnRules<DeSerializers>,
      DeSerializersT,
      BudgetPlanExpressionOperator,
      true,
      true
    >;
    ALL_FIELDS: AllFields<BudgetPlanColumnRules<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link columnName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_NAME: fieldBuilder.buildEdmTypeField(
          'ColumnName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link tableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'TableName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'FieldName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link rightSideValueOne} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RIGHT_SIDE_VALUE_ONE: fieldBuilder.buildEdmTypeField(
          'RightSideValueOne',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link rightSideValueTwo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RIGHT_SIDE_VALUE_TWO: fieldBuilder.buildEdmTypeField(
          'RightSideValueTwo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link operator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATOR: fieldBuilder.buildEnumField(
          'Operator',
          BudgetPlanExpressionOperator,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetPlanColumnRules)
      };
    }

    return this._schema;
  }
}
