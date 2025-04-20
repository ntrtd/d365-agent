/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailCatalogProducts } from './RetailCatalogProducts';
import { RetailCatalogProductsRequestBuilder } from './RetailCatalogProductsRequestBuilder';
import { RetailCatalogProductAttributeValuesApi } from './RetailCatalogProductAttributeValuesApi';
import { RetailCatalogsApi } from './RetailCatalogsApi';
import { RetailCatalogInternalOrganizationProductAttributeValuesApi } from './RetailCatalogInternalOrganizationProductAttributeValuesApi';
import { RetailCatalogProductCategoriesApi } from './RetailCatalogProductCategoriesApi';
import { RetailCatalogInternalOrganizationProductAttributeValues2Api } from './RetailCatalogInternalOrganizationProductAttributeValues2Api';
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
export class RetailCatalogProductsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailCatalogProducts<DeSerializersT>, DeSerializersT>
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
  ): RetailCatalogProductsApi<DeSerializersT> {
    return new RetailCatalogProductsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailCatalogProductAttributeValue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_PRODUCT_ATTRIBUTE_VALUE: OneToOneLink<
      RetailCatalogProducts<DeSerializersT>,
      DeSerializersT,
      RetailCatalogProductAttributeValuesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailCatalog} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG: OneToOneLink<
      RetailCatalogProducts<DeSerializersT>,
      DeSerializersT,
      RetailCatalogsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogInternalOrganizationProductAttributeValue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE: OneToManyLink<
      RetailCatalogProducts<DeSerializersT>,
      DeSerializersT,
      RetailCatalogInternalOrganizationProductAttributeValuesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogProductCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_PRODUCT_CATEGORY: OneToManyLink<
      RetailCatalogProducts<DeSerializersT>,
      DeSerializersT,
      RetailCatalogProductCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogInternalOrganizationProductAttributeValue2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: OneToManyLink<
      RetailCatalogProducts<DeSerializersT>,
      DeSerializersT,
      RetailCatalogInternalOrganizationProductAttributeValues2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailCatalogProductAttributeValuesApi<DeSerializersT>,
      RetailCatalogsApi<DeSerializersT>,
      RetailCatalogInternalOrganizationProductAttributeValuesApi<DeSerializersT>,
      RetailCatalogProductCategoriesApi<DeSerializersT>,
      RetailCatalogInternalOrganizationProductAttributeValues2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_CATALOG_PRODUCT_ATTRIBUTE_VALUE: new OneToOneLink(
        'RetailCatalogProductAttributeValue',
        this,
        linkedApis[0]
      ),
      RETAIL_CATALOG: new OneToOneLink('RetailCatalog', this, linkedApis[1]),
      RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE:
        new OneToManyLink(
          'RetailCatalogInternalOrganizationProductAttributeValue',
          this,
          linkedApis[2]
        ),
      RETAIL_CATALOG_PRODUCT_CATEGORY: new OneToManyLink(
        'RetailCatalogProductCategory',
        this,
        linkedApis[3]
      ),
      RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2:
        new OneToManyLink(
          'RetailCatalogInternalOrganizationProductAttributeValue2',
          this,
          linkedApis[4]
        )
    };
    return this;
  }

  entityConstructor = RetailCatalogProducts;

  requestBuilder(): RetailCatalogProductsRequestBuilder<DeSerializersT> {
    return new RetailCatalogProductsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailCatalogProducts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailCatalogProducts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailCatalogProducts<DeSerializersT>,
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
    typeof RetailCatalogProducts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailCatalogProducts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CATALOG_NUMBER: OrderableEdmTypeField<
      RetailCatalogProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISPLAY_PRODUCT_NUMBER: OrderableEdmTypeField<
      RetailCatalogProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISPLAY_ORDER: OrderableEdmTypeField<
      RetailCatalogProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    USE_HIERARCHY: EnumField<
      RetailCatalogProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailCatalogProductAttributeValue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_PRODUCT_ATTRIBUTE_VALUE: OneToOneLink<
      RetailCatalogProducts<DeSerializersT>,
      DeSerializersT,
      RetailCatalogProductAttributeValuesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailCatalog} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG: OneToOneLink<
      RetailCatalogProducts<DeSerializersT>,
      DeSerializersT,
      RetailCatalogsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogInternalOrganizationProductAttributeValue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE: OneToManyLink<
      RetailCatalogProducts<DeSerializersT>,
      DeSerializersT,
      RetailCatalogInternalOrganizationProductAttributeValuesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogProductCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_PRODUCT_CATEGORY: OneToManyLink<
      RetailCatalogProducts<DeSerializersT>,
      DeSerializersT,
      RetailCatalogProductCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogInternalOrganizationProductAttributeValue2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: OneToManyLink<
      RetailCatalogProducts<DeSerializersT>,
      DeSerializersT,
      RetailCatalogInternalOrganizationProductAttributeValues2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailCatalogProducts<DeSerializers>>;
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
         * Static representation of the {@link displayOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_ORDER: fieldBuilder.buildEdmTypeField(
          'DisplayOrder',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link useHierarchy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_HIERARCHY: fieldBuilder.buildEnumField('UseHierarchy', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailCatalogProducts)
      };
    }

    return this._schema;
  }
}
