/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailCatalogProductCategories } from './RetailCatalogProductCategories';
import { RetailCatalogProductCategoriesRequestBuilder } from './RetailCatalogProductCategoriesRequestBuilder';
import { RetailCatalogProductsApi } from './RetailCatalogProductsApi';
import { ProductCategoriesApi } from './ProductCategoriesApi';
import { CatalogProductExcludeIncludeType } from './CatalogProductExcludeIncludeType';
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
export class RetailCatalogProductCategoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailCatalogProductCategories<DeSerializersT>, DeSerializersT>
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
  ): RetailCatalogProductCategoriesApi<DeSerializersT> {
    return new RetailCatalogProductCategoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailCatalogProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_PRODUCT: OneToOneLink<
      RetailCatalogProductCategories<DeSerializersT>,
      DeSerializersT,
      RetailCatalogProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY: OneToOneLink<
      RetailCatalogProductCategories<DeSerializersT>,
      DeSerializersT,
      ProductCategoriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailCatalogProductsApi<DeSerializersT>,
      ProductCategoriesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_CATALOG_PRODUCT: new OneToOneLink(
        'RetailCatalogProduct',
        this,
        linkedApis[0]
      ),
      PRODUCT_CATEGORY: new OneToOneLink('ProductCategory', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = RetailCatalogProductCategories;

  requestBuilder(): RetailCatalogProductCategoriesRequestBuilder<DeSerializersT> {
    return new RetailCatalogProductCategoriesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailCatalogProductCategories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailCatalogProductCategories<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailCatalogProductCategories<DeSerializersT>,
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
    typeof RetailCatalogProductCategories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailCatalogProductCategories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CATALOG_NUMBER: OrderableEdmTypeField<
      RetailCatalogProductCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISPLAY_PRODUCT_NUMBER: OrderableEdmTypeField<
      RetailCatalogProductCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY_NAME: OrderableEdmTypeField<
      RetailCatalogProductCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      RetailCatalogProductCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INCLUDE_EXCLUDE_TYPE: EnumField<
      RetailCatalogProductCategories<DeSerializers>,
      DeSerializersT,
      CatalogProductExcludeIncludeType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailCatalogProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_PRODUCT: OneToOneLink<
      RetailCatalogProductCategories<DeSerializersT>,
      DeSerializersT,
      RetailCatalogProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY: OneToOneLink<
      RetailCatalogProductCategories<DeSerializersT>,
      DeSerializersT,
      ProductCategoriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailCatalogProductCategories<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link catalogNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATALOG_NUMBER: fieldBuilder.buildEdmTypeField(
          'CatalogNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link displayProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DisplayProductNumber',
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
         * Static representation of the {@link includeExcludeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_EXCLUDE_TYPE: fieldBuilder.buildEnumField(
          'IncludeExcludeType',
          CatalogProductExcludeIncludeType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailCatalogProductCategories)
      };
    }

    return this._schema;
  }
}
