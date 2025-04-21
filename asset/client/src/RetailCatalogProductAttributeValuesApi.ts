/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailCatalogProductAttributeValues } from './RetailCatalogProductAttributeValues';
import { RetailCatalogProductAttributeValuesRequestBuilder } from './RetailCatalogProductAttributeValuesRequestBuilder';
import { ProductCategoriesApi } from './ProductCategoriesApi';
import { ProductCategoryHierarchiesApi } from './ProductCategoryHierarchiesApi';
import { RetailCatalogsApi } from './RetailCatalogsApi';
import { RetailCatalogProductsApi } from './RetailCatalogProductsApi';
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
export class RetailCatalogProductAttributeValuesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailCatalogProductAttributeValues<DeSerializersT>,
      DeSerializersT
    >
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
  ): RetailCatalogProductAttributeValuesApi<DeSerializersT> {
    return new RetailCatalogProductAttributeValuesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY: OneToOneLink<
      RetailCatalogProductAttributeValues<DeSerializersT>,
      DeSerializersT,
      ProductCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productCategoryHierarchy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY_HIERARCHY: OneToOneLink<
      RetailCatalogProductAttributeValues<DeSerializersT>,
      DeSerializersT,
      ProductCategoryHierarchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailCatalog} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG: OneToOneLink<
      RetailCatalogProductAttributeValues<DeSerializersT>,
      DeSerializersT,
      RetailCatalogsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailCatalogProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_PRODUCT: OneToOneLink<
      RetailCatalogProductAttributeValues<DeSerializersT>,
      DeSerializersT,
      RetailCatalogProductsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductCategoriesApi<DeSerializersT>,
      ProductCategoryHierarchiesApi<DeSerializersT>,
      RetailCatalogsApi<DeSerializersT>,
      RetailCatalogProductsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_CATEGORY: new OneToOneLink(
        'ProductCategory',
        this,
        linkedApis[0]
      ),
      PRODUCT_CATEGORY_HIERARCHY: new OneToOneLink(
        'ProductCategoryHierarchy',
        this,
        linkedApis[1]
      ),
      RETAIL_CATALOG: new OneToOneLink('RetailCatalog', this, linkedApis[2]),
      RETAIL_CATALOG_PRODUCT: new OneToOneLink(
        'RetailCatalogProduct',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = RetailCatalogProductAttributeValues;

  requestBuilder(): RetailCatalogProductAttributeValuesRequestBuilder<DeSerializersT> {
    return new RetailCatalogProductAttributeValuesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailCatalogProductAttributeValues<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailCatalogProductAttributeValues<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailCatalogProductAttributeValues<DeSerializersT>,
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
    typeof RetailCatalogProductAttributeValues,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailCatalogProductAttributeValues,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CATALOG_NUMBER: OrderableEdmTypeField<
      RetailCatalogProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      RetailCatalogProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY_NAME: OrderableEdmTypeField<
      RetailCatalogProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISPLAY_PRODUCT_NUMBER: OrderableEdmTypeField<
      RetailCatalogProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_GROUP_NAME: OrderableEdmTypeField<
      RetailCatalogProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_NAME: OrderableEdmTypeField<
      RetailCatalogProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_TYPE_NAME: OrderableEdmTypeField<
      RetailCatalogProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTEGER_VALUE: OrderableEdmTypeField<
      RetailCatalogProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      RetailCatalogProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_TIME_VALUE: OrderableEdmTypeField<
      RetailCatalogProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DECIMAL_VALUE: OrderableEdmTypeField<
      RetailCatalogProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BOOLEAN_VALUE: EnumField<
      RetailCatalogProductAttributeValues<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY_VALUE: OrderableEdmTypeField<
      RetailCatalogProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TEXT_VALUE: OrderableEdmTypeField<
      RetailCatalogProductAttributeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY: OneToOneLink<
      RetailCatalogProductAttributeValues<DeSerializersT>,
      DeSerializersT,
      ProductCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productCategoryHierarchy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY_HIERARCHY: OneToOneLink<
      RetailCatalogProductAttributeValues<DeSerializersT>,
      DeSerializersT,
      ProductCategoryHierarchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailCatalog} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG: OneToOneLink<
      RetailCatalogProductAttributeValues<DeSerializersT>,
      DeSerializersT,
      RetailCatalogsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailCatalogProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_PRODUCT: OneToOneLink<
      RetailCatalogProductAttributeValues<DeSerializersT>,
      DeSerializersT,
      RetailCatalogProductsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailCatalogProductAttributeValues<DeSerializers>>;
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
         * Static representation of the {@link categoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryHierarchyName',
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
         * Static representation of the {@link displayProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DisplayProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link attributeGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'AttributeGroupName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link attributeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_NAME: fieldBuilder.buildEdmTypeField(
          'AttributeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link attributeTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'AttributeTypeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link integerValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEGER_VALUE: fieldBuilder.buildEdmTypeField(
          'IntegerValue',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateTimeValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_TIME_VALUE: fieldBuilder.buildEdmTypeField(
          'DateTimeValue',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link decimalValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECIMAL_VALUE: fieldBuilder.buildEdmTypeField(
          'DecimalValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link booleanValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOLEAN_VALUE: fieldBuilder.buildEnumField('BooleanValue', NoYes, true),
        /**
         * Static representation of the {@link currencyValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_VALUE: fieldBuilder.buildEdmTypeField(
          'CurrencyValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link textValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_VALUE: fieldBuilder.buildEdmTypeField(
          'TextValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailCatalogProductAttributeValues)
      };
    }

    return this._schema;
  }
}
