/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpenseCodes } from './ExpenseCodes';
import { ExpenseCodesRequestBuilder } from './ExpenseCodesRequestBuilder';
import { NoYes } from './NoYes';
import { RTax25ProfitType } from './RTax25ProfitType';
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
export class ExpenseCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExpenseCodes<DeSerializersT>, DeSerializersT>
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
  ): ExpenseCodesApi<DeSerializersT> {
    return new ExpenseCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExpenseCodes;

  requestBuilder(): ExpenseCodesRequestBuilder<DeSerializersT> {
    return new ExpenseCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpenseCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExpenseCodes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ExpenseCodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ExpenseCodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ExpenseCodes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ExpenseCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPENSE_CODE: OrderableEdmTypeField<
      ExpenseCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOCKED: EnumField<
      ExpenseCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHORT_DESCRIPTION: OrderableEdmTypeField<
      ExpenseCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ExpenseCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIRECT: EnumField<
      ExpenseCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_TAX_CODE: OrderableEdmTypeField<
      ExpenseCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CODE_TYPE: EnumField<
      ExpenseCodes<DeSerializers>,
      DeSerializersT,
      RTax25ProfitType,
      true,
      true
    >;
    PARENT_CODE: OrderableEdmTypeField<
      ExpenseCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ExpenseCodes<DeSerializers>>;
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
         * Static representation of the {@link expenseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_CODE: fieldBuilder.buildEdmTypeField(
          'ExpenseCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link locked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCKED: fieldBuilder.buildEnumField('Locked', NoYes, true),
        /**
         * Static representation of the {@link shortDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ShortDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link direct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT: fieldBuilder.buildEnumField('Direct', NoYes, true),
        /**
         * Static representation of the {@link salesTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link codeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE_TYPE: fieldBuilder.buildEnumField(
          'CodeType',
          RTax25ProfitType,
          true
        ),
        /**
         * Static representation of the {@link parentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_CODE: fieldBuilder.buildEdmTypeField(
          'ParentCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpenseCodes)
      };
    }

    return this._schema;
  }
}
