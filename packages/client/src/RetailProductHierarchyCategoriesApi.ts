/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailProductHierarchyCategories } from './RetailProductHierarchyCategories';
import { RetailProductHierarchyCategoriesRequestBuilder } from './RetailProductHierarchyCategoriesRequestBuilder';
import { ProductCategoryHierarchiesApi } from './ProductCategoryHierarchiesApi';
import { RetailEcoResCategoryApi } from './RetailEcoResCategoryApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailProductHierarchyCategoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailProductHierarchyCategories<DeSerializersT>, DeSerializersT>
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
  ): RetailProductHierarchyCategoriesApi<DeSerializersT> {
    return new RetailProductHierarchyCategoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productCategoryHierarchy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY_HIERARCHY: OneToOneLink<
      RetailProductHierarchyCategories<DeSerializersT>,
      DeSerializersT,
      ProductCategoryHierarchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailEcoResCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_ECO_RES_CATEGORY: OneToOneLink<
      RetailProductHierarchyCategories<DeSerializersT>,
      DeSerializersT,
      RetailEcoResCategoryApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductCategoryHierarchiesApi<DeSerializersT>,
      RetailEcoResCategoryApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_CATEGORY_HIERARCHY: new OneToOneLink(
        'ProductCategoryHierarchy',
        this,
        linkedApis[0]
      ),
      RETAIL_ECO_RES_CATEGORY: new OneToOneLink(
        'RetailEcoResCategory',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = RetailProductHierarchyCategories;

  requestBuilder(): RetailProductHierarchyCategoriesRequestBuilder<DeSerializersT> {
    return new RetailProductHierarchyCategoriesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailProductHierarchyCategories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailProductHierarchyCategories<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailProductHierarchyCategories<DeSerializersT>,
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
    typeof RetailProductHierarchyCategories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailProductHierarchyCategories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CATEGORY_NAME: OrderableEdmTypeField<
      RetailProductHierarchyCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      RetailProductHierarchyCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARENT_CATEGORY_NAME: OrderableEdmTypeField<
      RetailProductHierarchyCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_RECORD_ID: OrderableEdmTypeField<
      RetailProductHierarchyCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PARENT_CATEGORY_RECORD_ID: OrderableEdmTypeField<
      RetailProductHierarchyCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productCategoryHierarchy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY_HIERARCHY: OneToOneLink<
      RetailProductHierarchyCategories<DeSerializersT>,
      DeSerializersT,
      ProductCategoryHierarchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailEcoResCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_ECO_RES_CATEGORY: OneToOneLink<
      RetailProductHierarchyCategories<DeSerializersT>,
      DeSerializersT,
      RetailEcoResCategoryApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailProductHierarchyCategories<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link categoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link categoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryHierarchyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link parentCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'ParentCategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link categoryRecordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_RECORD_ID: fieldBuilder.buildEdmTypeField(
          'CategoryRecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link parentCategoryRecordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_CATEGORY_RECORD_ID: fieldBuilder.buildEdmTypeField(
          'ParentCategoryRecordId',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailProductHierarchyCategories)
      };
    }

    return this._schema;
  }
}
