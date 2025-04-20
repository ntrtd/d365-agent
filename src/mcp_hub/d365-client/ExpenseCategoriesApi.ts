/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpenseCategories } from './ExpenseCategories';
import { ExpenseCategoriesRequestBuilder } from './ExpenseCategoriesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { NoYes } from './NoYes';
import { TrvExpType } from './TrvExpType';
import { LedgerJournalAcType } from './LedgerJournalAcType';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ExpenseCategoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExpenseCategories<DeSerializersT>, DeSerializersT>
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
  ): ExpenseCategoriesApi<DeSerializersT> {
    return new ExpenseCategoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      ExpenseCategories<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ExpenseCategories;

  requestBuilder(): ExpenseCategoriesRequestBuilder<DeSerializersT> {
    return new ExpenseCategoriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpenseCategories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExpenseCategories<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ExpenseCategories<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ExpenseCategories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpenseCategories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ExpenseCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPENSE_CATEGORY: OrderableEdmTypeField<
      ExpenseCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFAULT_PAYMENT_METHOD: OrderableEdmTypeField<
      ExpenseCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ExpenseCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICS_GROUP: OrderableEdmTypeField<
      ExpenseCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_COMMON: EnumField<
      ExpenseCategories<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ITEMIZATION_MANDATORY: EnumField<
      ExpenseCategories<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPENSE_TYPE: EnumField<
      ExpenseCategories<DeSerializers>,
      DeSerializersT,
      TrvExpType,
      true,
      true
    >;
    LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ExpenseCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ITEM_GROUP_IF_BILLED_TO_EMPLOYEE: OrderableEdmTypeField<
      ExpenseCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      ExpenseCategories<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    IS_IMPORT_ONLY: EnumField<
      ExpenseCategories<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_INACTIVE: EnumField<
      ExpenseCategories<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_IN_PROJECT: EnumField<
      ExpenseCategories<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      ExpenseCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      ExpenseCategories<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExpenseCategories<DeSerializers>>;
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
         * Static representation of the {@link expenseCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ExpenseCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link defaultPaymentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PAYMENT_METHOD: fieldBuilder.buildEdmTypeField(
          'DefaultPaymentMethod',
          'Edm.String',
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
         * Static representation of the {@link statisticsGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICS_GROUP: fieldBuilder.buildEdmTypeField(
          'StatisticsGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCommon} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COMMON: fieldBuilder.buildEnumField('IsCommon', NoYes, true),
        /**
         * Static representation of the {@link isItemizationMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ITEMIZATION_MANDATORY: fieldBuilder.buildEnumField(
          'IsItemizationMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link expenseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_TYPE: fieldBuilder.buildEnumField(
          'ExpenseType',
          TrvExpType,
          true
        ),
        /**
         * Static representation of the {@link ledgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'LedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxItemGroupIfBilledToEmployee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP_IF_BILLED_TO_EMPLOYEE: fieldBuilder.buildEdmTypeField(
          'TaxItemGroupIfBilledToEmployee',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          LedgerJournalAcType,
          true
        ),
        /**
         * Static representation of the {@link isImportOnly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_IMPORT_ONLY: fieldBuilder.buildEnumField(
          'IsImportOnly',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isInactive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INACTIVE: fieldBuilder.buildEnumField('IsInactive', NoYes, true),
        /**
         * Static representation of the {@link useInProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_IN_PROJECT: fieldBuilder.buildEnumField(
          'UseInProject',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxItemGroup',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpenseCategories)
      };
    }

    return this._schema;
  }
}
