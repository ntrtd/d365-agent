/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductCategoryHierarchies } from './ProductCategoryHierarchies';
import { ProductCategoryHierarchiesRequestBuilder } from './ProductCategoryHierarchiesRequestBuilder';
import { RetailCatalogProductAttributeValuesApi } from './RetailCatalogProductAttributeValuesApi';
import { RetailProductHierarchyCategoriesApi } from './RetailProductHierarchyCategoriesApi';
import { ProductCategoryHierarchyRolesApi } from './ProductCategoryHierarchyRolesApi';
import { ProcurementProductCategoriesApi } from './ProcurementProductCategoriesApi';
import { RetailCallCentersApi } from './RetailCallCentersApi';
import { RetailStoresApi } from './RetailStoresApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductCategoryHierarchiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductCategoryHierarchies<DeSerializersT>, DeSerializersT>
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
  ): ProductCategoryHierarchiesApi<DeSerializersT> {
    return new ProductCategoryHierarchiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogProductAttributeValue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_PRODUCT_ATTRIBUTE_VALUE: OneToManyLink<
      ProductCategoryHierarchies<DeSerializersT>,
      DeSerializersT,
      RetailCatalogProductAttributeValuesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailProductHierarchyCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_PRODUCT_HIERARCHY_CATEGORY: OneToOneLink<
      ProductCategoryHierarchies<DeSerializersT>,
      DeSerializersT,
      RetailProductHierarchyCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productCategoryHierarchyRoles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY_HIERARCHY_ROLES: OneToManyLink<
      ProductCategoryHierarchies<DeSerializersT>,
      DeSerializersT,
      ProductCategoryHierarchyRolesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productCategories} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORIES: OneToManyLink<
      ProductCategoryHierarchies<DeSerializersT>,
      DeSerializersT,
      ProcurementProductCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCallCenter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CALL_CENTER: OneToManyLink<
      ProductCategoryHierarchies<DeSerializersT>,
      DeSerializersT,
      RetailCallCentersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToManyLink<
      ProductCategoryHierarchies<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailCatalogProductAttributeValuesApi<DeSerializersT>,
      RetailProductHierarchyCategoriesApi<DeSerializersT>,
      ProductCategoryHierarchyRolesApi<DeSerializersT>,
      ProcurementProductCategoriesApi<DeSerializersT>,
      RetailCallCentersApi<DeSerializersT>,
      RetailStoresApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_CATALOG_PRODUCT_ATTRIBUTE_VALUE: new OneToManyLink(
        'RetailCatalogProductAttributeValue',
        this,
        linkedApis[0]
      ),
      RETAIL_PRODUCT_HIERARCHY_CATEGORY: new OneToOneLink(
        'RetailProductHierarchyCategory',
        this,
        linkedApis[1]
      ),
      PRODUCT_CATEGORY_HIERARCHY_ROLES: new OneToManyLink(
        'ProductCategoryHierarchyRoles',
        this,
        linkedApis[2]
      ),
      PRODUCT_CATEGORIES: new OneToManyLink(
        'ProductCategories',
        this,
        linkedApis[3]
      ),
      RETAIL_CALL_CENTER: new OneToManyLink(
        'RetailCallCenter',
        this,
        linkedApis[4]
      ),
      RETAIL_STORE: new OneToManyLink('RetailStore', this, linkedApis[5])
    };
    return this;
  }

  entityConstructor = ProductCategoryHierarchies;

  requestBuilder(): ProductCategoryHierarchiesRequestBuilder<DeSerializersT> {
    return new ProductCategoryHierarchiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductCategoryHierarchies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductCategoryHierarchies<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductCategoryHierarchies<DeSerializersT>,
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
    typeof ProductCategoryHierarchies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductCategoryHierarchies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    HIERARCHY_NAME: OrderableEdmTypeField<
      ProductCategoryHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HIERARCHY_DESCRIPTION: OrderableEdmTypeField<
      ProductCategoryHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogProductAttributeValue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_PRODUCT_ATTRIBUTE_VALUE: OneToManyLink<
      ProductCategoryHierarchies<DeSerializersT>,
      DeSerializersT,
      RetailCatalogProductAttributeValuesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailProductHierarchyCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_PRODUCT_HIERARCHY_CATEGORY: OneToOneLink<
      ProductCategoryHierarchies<DeSerializersT>,
      DeSerializersT,
      RetailProductHierarchyCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productCategoryHierarchyRoles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY_HIERARCHY_ROLES: OneToManyLink<
      ProductCategoryHierarchies<DeSerializersT>,
      DeSerializersT,
      ProductCategoryHierarchyRolesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productCategories} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORIES: OneToManyLink<
      ProductCategoryHierarchies<DeSerializersT>,
      DeSerializersT,
      ProcurementProductCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCallCenter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CALL_CENTER: OneToManyLink<
      ProductCategoryHierarchies<DeSerializersT>,
      DeSerializersT,
      RetailCallCentersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToManyLink<
      ProductCategoryHierarchies<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductCategoryHierarchies<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link hierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'HierarchyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link hierarchyDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'HierarchyDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductCategoryHierarchies)
      };
    }

    return this._schema;
  }
}
