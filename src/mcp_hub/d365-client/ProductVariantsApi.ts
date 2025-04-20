/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductVariants } from './ProductVariants';
import { ProductVariantsRequestBuilder } from './ProductVariantsRequestBuilder';
import { ReleasedProductVariantsApi } from './ReleasedProductVariantsApi';
import { ProductMastersApi } from './ProductMastersApi';
import { ProductTranslationsApi } from './ProductTranslationsApi';
import { RetailKitComponentsApi } from './RetailKitComponentsApi';
import { SpecialCategoryMembersApi } from './SpecialCategoryMembersApi';
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
export class ProductVariantsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductVariants<DeSerializersT>, DeSerializersT>
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
  ): ProductVariantsApi<DeSerializersT> {
    return new ProductVariantsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT: OneToManyLink<
      ProductVariants<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER: OneToOneLink<
      ProductVariants<DeSerializersT>,
      DeSerializersT,
      ProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productTranslation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_TRANSLATION: OneToManyLink<
      ProductVariants<DeSerializersT>,
      DeSerializersT,
      ProductTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailKitComponent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT_COMPONENT: OneToManyLink<
      ProductVariants<DeSerializersT>,
      DeSerializersT,
      RetailKitComponentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link specialCategoryMember} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SPECIAL_CATEGORY_MEMBER: OneToManyLink<
      ProductVariants<DeSerializersT>,
      DeSerializersT,
      SpecialCategoryMembersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ReleasedProductVariantsApi<DeSerializersT>,
      ProductMastersApi<DeSerializersT>,
      ProductTranslationsApi<DeSerializersT>,
      RetailKitComponentsApi<DeSerializersT>,
      SpecialCategoryMembersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RELEASED_PRODUCT_VARIANT: new OneToManyLink(
        'ReleasedProductVariant',
        this,
        linkedApis[0]
      ),
      PRODUCT_MASTER: new OneToOneLink('ProductMaster', this, linkedApis[1]),
      PRODUCT_TRANSLATION: new OneToManyLink(
        'ProductTranslation',
        this,
        linkedApis[2]
      ),
      RETAIL_KIT_COMPONENT: new OneToManyLink(
        'RetailKitComponent',
        this,
        linkedApis[3]
      ),
      SPECIAL_CATEGORY_MEMBER: new OneToManyLink(
        'SpecialCategoryMember',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = ProductVariants;

  requestBuilder(): ProductVariantsRequestBuilder<DeSerializersT> {
    return new ProductVariantsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductVariants<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductVariants<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductVariants<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProductVariants, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductVariants,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_MASTER_NUMBER: OrderableEdmTypeField<
      ProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      ProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VARIANT_NUMBER: OrderableEdmTypeField<
      ProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SEARCH_NAME: OrderableEdmTypeField<
      ProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      ProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT: OneToManyLink<
      ProductVariants<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER: OneToOneLink<
      ProductVariants<DeSerializersT>,
      DeSerializersT,
      ProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productTranslation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_TRANSLATION: OneToManyLink<
      ProductVariants<DeSerializersT>,
      DeSerializersT,
      ProductTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailKitComponent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT_COMPONENT: OneToManyLink<
      ProductVariants<DeSerializersT>,
      DeSerializersT,
      RetailKitComponentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link specialCategoryMember} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SPECIAL_CATEGORY_MEMBER: OneToManyLink<
      ProductVariants<DeSerializersT>,
      DeSerializersT,
      SpecialCategoryMembersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductVariants<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productMasterNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_MASTER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductMasterNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ProductDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productVariantNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VARIANT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductVariantNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productSearchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'ProductSearchName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NAME: fieldBuilder.buildEdmTypeField(
          'ProductName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductVariants)
      };
    }

    return this._schema;
  }
}
