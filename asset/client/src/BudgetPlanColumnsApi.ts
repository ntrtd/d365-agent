/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetPlanColumns } from './BudgetPlanColumns';
import { BudgetPlanColumnsRequestBuilder } from './BudgetPlanColumnsRequestBuilder';
import { BudgetPlanColumnPeriodLength } from './BudgetPlanColumnPeriodLength';
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
export class BudgetPlanColumnsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetPlanColumns<DeSerializersT>, DeSerializersT>
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
  ): BudgetPlanColumnsApi<DeSerializersT> {
    return new BudgetPlanColumnsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BudgetPlanColumns;

  requestBuilder(): BudgetPlanColumnsRequestBuilder<DeSerializersT> {
    return new BudgetPlanColumnsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetPlanColumns<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetPlanColumns<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BudgetPlanColumns<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof BudgetPlanColumns,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetPlanColumns,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      BudgetPlanColumns<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    YEAR_OFFSET: OrderableEdmTypeField<
      BudgetPlanColumns<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COLUMN_PERIOD_LENGTH: EnumField<
      BudgetPlanColumns<DeSerializers>,
      DeSerializersT,
      BudgetPlanColumnPeriodLength,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BudgetPlanColumns<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCENARIO: OrderableEdmTypeField<
      BudgetPlanColumns<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN_PERIOD_LENGTH_VALUE: OrderableEdmTypeField<
      BudgetPlanColumns<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BudgetPlanColumns<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link yearOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEAR_OFFSET: fieldBuilder.buildEdmTypeField(
          'YearOffset',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link columnPeriodLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_PERIOD_LENGTH: fieldBuilder.buildEnumField(
          'ColumnPeriodLength',
          BudgetPlanColumnPeriodLength,
          true
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
         * Static representation of the {@link scenario} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCENARIO: fieldBuilder.buildEdmTypeField(
          'Scenario',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link columnPeriodLengthValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN_PERIOD_LENGTH_VALUE: fieldBuilder.buildEdmTypeField(
          'ColumnPeriodLengthValue',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetPlanColumns)
      };
    }

    return this._schema;
  }
}
