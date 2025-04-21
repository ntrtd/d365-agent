/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SharedCategories } from './SharedCategories';
import { SharedCategoriesRequestBuilder } from './SharedCategoriesRequestBuilder';
import { ExpenseSharedSubCategoriesApi } from './ExpenseSharedSubCategoriesApi';
import { CategoriesApi } from './CategoriesApi';
import { NoYes } from './NoYes';
import { TrvExpType } from './TrvExpType';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class SharedCategoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SharedCategories<DeSerializersT>, DeSerializersT>
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
  ): SharedCategoriesApi<DeSerializersT> {
    return new SharedCategoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link contains} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTAINS: OneToManyLink<
      SharedCategories<DeSerializersT>,
      DeSerializersT,
      ExpenseSharedSubCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link category} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CATEGORY: OneToManyLink<
      SharedCategories<DeSerializersT>,
      DeSerializersT,
      CategoriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ExpenseSharedSubCategoriesApi<DeSerializersT>,
      CategoriesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CONTAINS: new OneToManyLink('Contains', this, linkedApis[0]),
      CATEGORY: new OneToManyLink('Category', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = SharedCategories;

  requestBuilder(): SharedCategoriesRequestBuilder<DeSerializersT> {
    return new SharedCategoriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SharedCategories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SharedCategories<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SharedCategories<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SharedCategories, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SharedCategories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CATEGORY_ID: OrderableEdmTypeField<
      SharedCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY_NAME: OrderableEdmTypeField<
      SharedCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_IN_EXPENSE: EnumField<
      SharedCategories<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_IN_PROJECT: EnumField<
      SharedCategories<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPENSE_TYPE: EnumField<
      SharedCategories<DeSerializers>,
      DeSerializersT,
      TrvExpType,
      true,
      true
    >;
    USE_IN_PRODUCTION: EnumField<
      SharedCategories<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contains} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTAINS: OneToManyLink<
      SharedCategories<DeSerializersT>,
      DeSerializersT,
      ExpenseSharedSubCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link category} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CATEGORY: OneToManyLink<
      SharedCategories<DeSerializersT>,
      DeSerializersT,
      CategoriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SharedCategories<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link categoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'CategoryId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link categoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useInExpense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_IN_EXPENSE: fieldBuilder.buildEnumField(
          'UseInExpense',
          NoYes,
          true
        ),
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
         * Static representation of the {@link expenseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_TYPE: fieldBuilder.buildEnumField(
          'ExpenseType',
          TrvExpType,
          true
        ),
        /**
         * Static representation of the {@link useInProduction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_IN_PRODUCTION: fieldBuilder.buildEnumField(
          'UseInProduction',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SharedCategories)
      };
    }

    return this._schema;
  }
}
