/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpenseSubCategories } from './ExpenseSubCategories';
import { ExpenseSubCategoriesRequestBuilder } from './ExpenseSubCategoriesRequestBuilder';
import { ExpenseSharedSubCategoriesApi } from './ExpenseSharedSubCategoriesApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ExpenseSubCategoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExpenseSubCategories<DeSerializersT>, DeSerializersT>
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
  ): ExpenseSubCategoriesApi<DeSerializersT> {
    return new ExpenseSubCategoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link expenseSharedSubCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_SHARED_SUB_CATEGORY: OneToOneLink<
      ExpenseSubCategories<DeSerializersT>,
      DeSerializersT,
      ExpenseSharedSubCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      ExpenseSubCategories<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ExpenseSharedSubCategoriesApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EXPENSE_SHARED_SUB_CATEGORY: new OneToOneLink(
        'ExpenseSharedSubCategory',
        this,
        linkedApis[0]
      ),
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ExpenseSubCategories;

  requestBuilder(): ExpenseSubCategoriesRequestBuilder<DeSerializersT> {
    return new ExpenseSubCategoriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpenseSubCategories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExpenseSubCategories<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExpenseSubCategories<DeSerializersT>,
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
    typeof ExpenseSubCategories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpenseSubCategories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ExpenseSubCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPENSE_CATEGORY: OrderableEdmTypeField<
      ExpenseSubCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHARED_SUB_CATEGORY_NAME: OrderableEdmTypeField<
      ExpenseSubCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ExpenseSubCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_ORDER: OrderableEdmTypeField<
      ExpenseSubCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_ITEM_GROUP_IF_BILLED_TO_EMPLOYEE: OrderableEdmTypeField<
      ExpenseSubCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INACTIVE: EnumField<
      ExpenseSubCategories<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      ExpenseSubCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_CATEGORY_REC_ID: OrderableEdmTypeField<
      ExpenseSubCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link expenseSharedSubCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_SHARED_SUB_CATEGORY: OneToOneLink<
      ExpenseSubCategories<DeSerializersT>,
      DeSerializersT,
      ExpenseSharedSubCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      ExpenseSubCategories<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExpenseSubCategories<DeSerializers>>;
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
         * Static representation of the {@link sharedSubCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHARED_SUB_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'SharedSubCategoryName',
          'Edm.String',
          false
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
         * Static representation of the {@link displayOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_ORDER: fieldBuilder.buildEdmTypeField(
          'DisplayOrder',
          'Edm.Int32',
          false
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
         * Static representation of the {@link isInactive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INACTIVE: fieldBuilder.buildEnumField('IsInactive', NoYes, true),
        /**
         * Static representation of the {@link taxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxItemGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subCategoryRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_CATEGORY_REC_ID: fieldBuilder.buildEdmTypeField(
          'SubCategoryRecId',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpenseSubCategories)
      };
    }

    return this._schema;
  }
}
