/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductCategories } from './ProductCategories';
import { ProductCategoriesRequestBuilder } from './ProductCategoriesRequestBuilder';
import { RetailCatalogProductAttributeValuesApi } from './RetailCatalogProductAttributeValuesApi';
import { RetailCatalogProductCategoriesApi } from './RetailCatalogProductCategoriesApi';
import { ChannelCategoryAttributesApi } from './ChannelCategoryAttributesApi';
import { ProductCategoryAssignmentsApi } from './ProductCategoryAssignmentsApi';
import { SpecialCategoryMembersApi } from './SpecialCategoryMembersApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductCategoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductCategories<DeSerializersT>, DeSerializersT>
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
  ): ProductCategoriesApi<DeSerializersT> {
    return new ProductCategoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogProductAttributeValue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_PRODUCT_ATTRIBUTE_VALUE: OneToManyLink<
      ProductCategories<DeSerializersT>,
      DeSerializersT,
      RetailCatalogProductAttributeValuesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogProductCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_PRODUCT_CATEGORY: OneToManyLink<
      ProductCategories<DeSerializersT>,
      DeSerializersT,
      RetailCatalogProductCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link channelCategoryAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHANNEL_CATEGORY_ATTRIBUTE: OneToManyLink<
      ProductCategories<DeSerializersT>,
      DeSerializersT,
      ChannelCategoryAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productCategoryAssignments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY_ASSIGNMENTS: OneToManyLink<
      ProductCategories<DeSerializersT>,
      DeSerializersT,
      ProductCategoryAssignmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentProductCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_PRODUCT_CATEGORY: OneToOneLink<
      ProductCategories<DeSerializersT>,
      DeSerializersT,
      ProductCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link childProductCategories} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHILD_PRODUCT_CATEGORIES: OneToManyLink<
      ProductCategories<DeSerializersT>,
      DeSerializersT,
      ProductCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link specialCategoryMember} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SPECIAL_CATEGORY_MEMBER: OneToManyLink<
      ProductCategories<DeSerializersT>,
      DeSerializersT,
      SpecialCategoryMembersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailCatalogProductAttributeValuesApi<DeSerializersT>,
      RetailCatalogProductCategoriesApi<DeSerializersT>,
      ChannelCategoryAttributesApi<DeSerializersT>,
      ProductCategoryAssignmentsApi<DeSerializersT>,
      ProductCategoriesApi<DeSerializersT>,
      ProductCategoriesApi<DeSerializersT>,
      SpecialCategoryMembersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_CATALOG_PRODUCT_ATTRIBUTE_VALUE: new OneToManyLink(
        'RetailCatalogProductAttributeValue',
        this,
        linkedApis[0]
      ),
      RETAIL_CATALOG_PRODUCT_CATEGORY: new OneToManyLink(
        'RetailCatalogProductCategory',
        this,
        linkedApis[1]
      ),
      CHANNEL_CATEGORY_ATTRIBUTE: new OneToManyLink(
        'ChannelCategoryAttribute',
        this,
        linkedApis[2]
      ),
      PRODUCT_CATEGORY_ASSIGNMENTS: new OneToManyLink(
        'ProductCategoryAssignments',
        this,
        linkedApis[3]
      ),
      PARENT_PRODUCT_CATEGORY: new OneToOneLink(
        'ParentProductCategory',
        this,
        linkedApis[4]
      ),
      CHILD_PRODUCT_CATEGORIES: new OneToManyLink(
        'ChildProductCategories',
        this,
        linkedApis[5]
      ),
      SPECIAL_CATEGORY_MEMBER: new OneToManyLink(
        'SpecialCategoryMember',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = ProductCategories;

  requestBuilder(): ProductCategoriesRequestBuilder<DeSerializersT> {
    return new ProductCategoriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductCategories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductCategories<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductCategories<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ProductCategories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductCategories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      ProductCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY_NAME: OrderableEdmTypeField<
      ProductCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_CATEGORY_INHERITING_PARENT_PRODUCT_ATTRIBUTES: EnumField<
      ProductCategories<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARENT_PRODUCT_CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      ProductCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_PRODUCT_CATEGORY_CODE: OrderableEdmTypeField<
      ProductCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_TANGIBLE_PRODUCT: EnumField<
      ProductCategories<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CATEGORY_KEYWORDS: OrderableEdmTypeField<
      ProductCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PK_WI_U_CODE: OrderableEdmTypeField<
      ProductCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_DESCRIPTION: OrderableEdmTypeField<
      ProductCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CATEGORY_INHERITING_PARENT_CATEGORY_ATTRIBUTES: EnumField<
      ProductCategories<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CATEGORY_CODE: OrderableEdmTypeField<
      ProductCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_ID: OrderableEdmTypeField<
      ProductCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    DEFAULT_PROJECT_GLOBAL_CATEGORY_ID: OrderableEdmTypeField<
      ProductCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_CATEGORY_NAME: OrderableEdmTypeField<
      ProductCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_PRODUCT_CATEGORY_NAME: OrderableEdmTypeField<
      ProductCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FRIENDLY_CATEGORY_NAME: OrderableEdmTypeField<
      ProductCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_RECORD_ID: OrderableEdmTypeField<
      ProductCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogProductAttributeValue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_PRODUCT_ATTRIBUTE_VALUE: OneToManyLink<
      ProductCategories<DeSerializersT>,
      DeSerializersT,
      RetailCatalogProductAttributeValuesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogProductCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_PRODUCT_CATEGORY: OneToManyLink<
      ProductCategories<DeSerializersT>,
      DeSerializersT,
      RetailCatalogProductCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link channelCategoryAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHANNEL_CATEGORY_ATTRIBUTE: OneToManyLink<
      ProductCategories<DeSerializersT>,
      DeSerializersT,
      ChannelCategoryAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productCategoryAssignments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY_ASSIGNMENTS: OneToManyLink<
      ProductCategories<DeSerializersT>,
      DeSerializersT,
      ProductCategoryAssignmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentProductCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_PRODUCT_CATEGORY: OneToOneLink<
      ProductCategories<DeSerializersT>,
      DeSerializersT,
      ProductCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link childProductCategories} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHILD_PRODUCT_CATEGORIES: OneToManyLink<
      ProductCategories<DeSerializersT>,
      DeSerializersT,
      ProductCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link specialCategoryMember} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SPECIAL_CATEGORY_MEMBER: OneToManyLink<
      ProductCategories<DeSerializersT>,
      DeSerializersT,
      SpecialCategoryMembersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductCategories<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productCategoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'ProductCategoryHierarchyName',
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
         * Static representation of the {@link isCategoryInheritingParentProductAttributes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CATEGORY_INHERITING_PARENT_PRODUCT_ATTRIBUTES:
          fieldBuilder.buildEnumField(
            'IsCategoryInheritingParentProductAttributes',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link parentProductCategoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_PRODUCT_CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'ParentProductCategoryHierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentProductCategoryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_PRODUCT_CATEGORY_CODE: fieldBuilder.buildEdmTypeField(
          'ParentProductCategoryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isTangibleProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TANGIBLE_PRODUCT: fieldBuilder.buildEnumField(
          'IsTangibleProduct',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link categoryKeywords} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_KEYWORDS: fieldBuilder.buildEdmTypeField(
          'CategoryKeywords',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pkWiUCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PK_WI_U_CODE: fieldBuilder.buildEdmTypeField(
          'PKWiUCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link categoryDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'CategoryDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCategoryInheritingParentCategoryAttributes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CATEGORY_INHERITING_PARENT_CATEGORY_ATTRIBUTES:
          fieldBuilder.buildEnumField(
            'IsCategoryInheritingParentCategoryAttributes',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link categoryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_CODE: fieldBuilder.buildEdmTypeField(
          'CategoryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_ID: fieldBuilder.buildEdmTypeField(
          'ExternalId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link defaultProjectGlobalCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PROJECT_GLOBAL_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'DefaultProjectGlobalCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'ProjectCategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentProductCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_PRODUCT_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'ParentProductCategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link friendlyCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRIENDLY_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'FriendlyCategoryName',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductCategories)
      };
    }

    return this._schema;
  }
}
