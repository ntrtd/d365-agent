/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductNumberIdentifiedReleasedProductVariants } from './ProductNumberIdentifiedReleasedProductVariants';
import { ProductNumberIdentifiedReleasedProductVariantsRequestBuilder } from './ProductNumberIdentifiedReleasedProductVariantsRequestBuilder';
import { ProductNumberIdentifiedReleasedProductVariantExternalCodesApi } from './ProductNumberIdentifiedReleasedProductVariantExternalCodesApi';
import { ReleasedProductMastersV2Api } from './ReleasedProductMastersV2Api';
import { ProductMastersApi } from './ProductMastersApi';
import { ProductNumberIdentifiedProductVariantsApi } from './ProductNumberIdentifiedProductVariantsApi';
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
export class ProductNumberIdentifiedReleasedProductVariantsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ProductNumberIdentifiedReleasedProductVariants<DeSerializersT>,
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
  ): ProductNumberIdentifiedReleasedProductVariantsApi<DeSerializersT> {
    return new ProductNumberIdentifiedReleasedProductVariantsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link productNumberIdentifiedReleasedProductVariantExternalCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_NUMBER_IDENTIFIED_RELEASED_PRODUCT_VARIANT_EXTERNAL_CODES: OneToManyLink<
      ProductNumberIdentifiedReleasedProductVariants<DeSerializersT>,
      DeSerializersT,
      ProductNumberIdentifiedReleasedProductVariantExternalCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_MASTER: OneToOneLink<
      ProductNumberIdentifiedReleasedProductVariants<DeSerializersT>,
      DeSerializersT,
      ReleasedProductMastersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER: OneToOneLink<
      ProductNumberIdentifiedReleasedProductVariants<DeSerializersT>,
      DeSerializersT,
      ProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VARIANT: OneToOneLink<
      ProductNumberIdentifiedReleasedProductVariants<DeSerializersT>,
      DeSerializersT,
      ProductNumberIdentifiedProductVariantsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductNumberIdentifiedReleasedProductVariantExternalCodesApi<DeSerializersT>,
      ReleasedProductMastersV2Api<DeSerializersT>,
      ProductMastersApi<DeSerializersT>,
      ProductNumberIdentifiedProductVariantsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_NUMBER_IDENTIFIED_RELEASED_PRODUCT_VARIANT_EXTERNAL_CODES:
        new OneToManyLink(
          'ProductNumberIdentifiedReleasedProductVariantExternalCodes',
          this,
          linkedApis[0]
        ),
      RELEASED_PRODUCT_MASTER: new OneToOneLink(
        'ReleasedProductMaster',
        this,
        linkedApis[1]
      ),
      PRODUCT_MASTER: new OneToOneLink('ProductMaster', this, linkedApis[2]),
      PRODUCT_VARIANT: new OneToOneLink('ProductVariant', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = ProductNumberIdentifiedReleasedProductVariants;

  requestBuilder(): ProductNumberIdentifiedReleasedProductVariantsRequestBuilder<DeSerializersT> {
    return new ProductNumberIdentifiedReleasedProductVariantsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductNumberIdentifiedReleasedProductVariants<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductNumberIdentifiedReleasedProductVariants<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductNumberIdentifiedReleasedProductVariants<DeSerializersT>,
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
    typeof ProductNumberIdentifiedReleasedProductVariants,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductNumberIdentifiedReleasedProductVariants,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProductNumberIdentifiedReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_VARIANT_NUMBER: OrderableEdmTypeField<
      ProductNumberIdentifiedReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ProductNumberIdentifiedReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ProductNumberIdentifiedReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ProductNumberIdentifiedReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ProductNumberIdentifiedReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ProductNumberIdentifiedReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ProductNumberIdentifiedReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_MASTER_NUMBER: OrderableEdmTypeField<
      ProductNumberIdentifiedReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_SALES_TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      ProductNumberIdentifiedReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_SALES_TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      ProductNumberIdentifiedReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SEARCH_NAME: OrderableEdmTypeField<
      ProductNumberIdentifiedReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productNumberIdentifiedReleasedProductVariantExternalCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_NUMBER_IDENTIFIED_RELEASED_PRODUCT_VARIANT_EXTERNAL_CODES: OneToManyLink<
      ProductNumberIdentifiedReleasedProductVariants<DeSerializersT>,
      DeSerializersT,
      ProductNumberIdentifiedReleasedProductVariantExternalCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_MASTER: OneToOneLink<
      ProductNumberIdentifiedReleasedProductVariants<DeSerializersT>,
      DeSerializersT,
      ReleasedProductMastersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER: OneToOneLink<
      ProductNumberIdentifiedReleasedProductVariants<DeSerializersT>,
      DeSerializersT,
      ProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VARIANT: OneToOneLink<
      ProductNumberIdentifiedReleasedProductVariants<DeSerializersT>,
      DeSerializersT,
      ProductNumberIdentifiedProductVariantsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      ProductNumberIdentifiedReleasedProductVariants<DeSerializers>
    >;
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
         * Static representation of the {@link productVariantNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VARIANT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductVariantNumber',
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
          true
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productMasterNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_MASTER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductMasterNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesSalesTaxItemGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_SALES_TAX_ITEM_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesSalesTaxItemGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseSalesTaxItemGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_SALES_TAX_ITEM_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'PurchaseSalesTaxItemGroupCode',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          ProductNumberIdentifiedReleasedProductVariants
        )
      };
    }

    return this._schema;
  }
}
