/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpenseSharedSubCategories } from './ExpenseSharedSubCategories';
import { ExpenseSharedSubCategoriesRequestBuilder } from './ExpenseSharedSubCategoriesRequestBuilder';
import { SharedCategoriesApi } from './SharedCategoriesApi';
import { ExpenseSubCategoriesApi } from './ExpenseSubCategoriesApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ExpenseSharedSubCategoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ExpenseSharedSubCategories<DeSerializersT>, DeSerializersT>
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
  ): ExpenseSharedSubCategoriesApi<DeSerializersT> {
    return new ExpenseSharedSubCategoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link belongsTo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BELONGS_TO: OneToOneLink<
      ExpenseSharedSubCategories<DeSerializersT>,
      DeSerializersT,
      SharedCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link expenseSubCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_SUB_CATEGORY: OneToManyLink<
      ExpenseSharedSubCategories<DeSerializersT>,
      DeSerializersT,
      ExpenseSubCategoriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SharedCategoriesApi<DeSerializersT>,
      ExpenseSubCategoriesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BELONGS_TO: new OneToOneLink('BelongsTo', this, linkedApis[0]),
      EXPENSE_SUB_CATEGORY: new OneToManyLink(
        'ExpenseSubCategory',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ExpenseSharedSubCategories;

  requestBuilder(): ExpenseSharedSubCategoriesRequestBuilder<DeSerializersT> {
    return new ExpenseSharedSubCategoriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpenseSharedSubCategories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExpenseSharedSubCategories<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExpenseSharedSubCategories<DeSerializersT>,
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
    typeof ExpenseSharedSubCategories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpenseSharedSubCategories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      ExpenseSharedSubCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHARED_CATEGORY_ID: OrderableEdmTypeField<
      ExpenseSharedSubCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ExpenseSharedSubCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_TYPE: OrderableEdmTypeField<
      ExpenseSharedSubCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SYSTEM_CREATED: EnumField<
      ExpenseSharedSubCategories<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCLUDE_FROM_RECOVERY: EnumField<
      ExpenseSharedSubCategories<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link belongsTo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BELONGS_TO: OneToOneLink<
      ExpenseSharedSubCategories<DeSerializersT>,
      DeSerializersT,
      SharedCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link expenseSubCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_SUB_CATEGORY: OneToManyLink<
      ExpenseSharedSubCategories<DeSerializersT>,
      DeSerializersT,
      ExpenseSubCategoriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExpenseSharedSubCategories<DeSerializers>>;
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
         * Static representation of the {@link sharedCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHARED_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'SharedCategoryId',
          'Edm.String',
          false
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
         * Static representation of the {@link chargeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_TYPE: fieldBuilder.buildEdmTypeField(
          'ChargeType',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link systemCreated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_CREATED: fieldBuilder.buildEnumField(
          'SystemCreated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link excludeFromRecovery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE_FROM_RECOVERY: fieldBuilder.buildEnumField(
          'ExcludeFromRecovery',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpenseSharedSubCategories)
      };
    }

    return this._schema;
  }
}
