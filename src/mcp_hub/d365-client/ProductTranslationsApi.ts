/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductTranslations } from './ProductTranslations';
import { ProductTranslationsRequestBuilder } from './ProductTranslationsRequestBuilder';
import { DistinctProductsApi } from './DistinctProductsApi';
import { ProductVariantsApi } from './ProductVariantsApi';
import { ReleasedProductMastersV2Api } from './ReleasedProductMastersV2Api';
import { ReleasedProductMastersApi } from './ReleasedProductMastersApi';
import { ReleasedProductVariantsApi } from './ReleasedProductVariantsApi';
import { ProductMastersApi } from './ProductMastersApi';
import { ReleasedDistinctProductsV2Api } from './ReleasedDistinctProductsV2Api';
import { ReleasedDistinctProductsApi } from './ReleasedDistinctProductsApi';
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
export class ProductTranslationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductTranslations<DeSerializersT>, DeSerializersT>
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
  ): ProductTranslationsApi<DeSerializersT> {
    return new ProductTranslationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link distinctProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTINCT_PRODUCT: OneToOneLink<
      ProductTranslations<DeSerializersT>,
      DeSerializersT,
      DistinctProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VARIANT: OneToOneLink<
      ProductTranslations<DeSerializersT>,
      DeSerializersT,
      ProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductMasterV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_MASTER_V_2: OneToOneLink<
      ProductTranslations<DeSerializersT>,
      DeSerializersT,
      ReleasedProductMastersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_MASTER: OneToOneLink<
      ProductTranslations<DeSerializersT>,
      DeSerializersT,
      ReleasedProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT: OneToOneLink<
      ProductTranslations<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER: OneToOneLink<
      ProductTranslations<DeSerializersT>,
      DeSerializersT,
      ProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedDistinctProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_DISTINCT_PRODUCT_V_2: OneToOneLink<
      ProductTranslations<DeSerializersT>,
      DeSerializersT,
      ReleasedDistinctProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedDistinctProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_DISTINCT_PRODUCT: OneToOneLink<
      ProductTranslations<DeSerializersT>,
      DeSerializersT,
      ReleasedDistinctProductsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DistinctProductsApi<DeSerializersT>,
      ProductVariantsApi<DeSerializersT>,
      ReleasedProductMastersV2Api<DeSerializersT>,
      ReleasedProductMastersApi<DeSerializersT>,
      ReleasedProductVariantsApi<DeSerializersT>,
      ProductMastersApi<DeSerializersT>,
      ReleasedDistinctProductsV2Api<DeSerializersT>,
      ReleasedDistinctProductsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DISTINCT_PRODUCT: new OneToOneLink(
        'DistinctProduct',
        this,
        linkedApis[0]
      ),
      PRODUCT_VARIANT: new OneToOneLink('ProductVariant', this, linkedApis[1]),
      RELEASED_PRODUCT_MASTER_V_2: new OneToOneLink(
        'ReleasedProductMasterV2',
        this,
        linkedApis[2]
      ),
      RELEASED_PRODUCT_MASTER: new OneToOneLink(
        'ReleasedProductMaster',
        this,
        linkedApis[3]
      ),
      RELEASED_PRODUCT_VARIANT: new OneToOneLink(
        'ReleasedProductVariant',
        this,
        linkedApis[4]
      ),
      PRODUCT_MASTER: new OneToOneLink('ProductMaster', this, linkedApis[5]),
      RELEASED_DISTINCT_PRODUCT_V_2: new OneToOneLink(
        'ReleasedDistinctProductV2',
        this,
        linkedApis[6]
      ),
      RELEASED_DISTINCT_PRODUCT: new OneToOneLink(
        'ReleasedDistinctProduct',
        this,
        linkedApis[7]
      )
    };
    return this;
  }

  entityConstructor = ProductTranslations;

  requestBuilder(): ProductTranslationsRequestBuilder<DeSerializersT> {
    return new ProductTranslationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductTranslations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductTranslations<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductTranslations<DeSerializersT>,
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
    typeof ProductTranslations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductTranslations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_NUMBER: OrderableEdmTypeField<
      ProductTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      ProductTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      ProductTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProductTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link distinctProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTINCT_PRODUCT: OneToOneLink<
      ProductTranslations<DeSerializersT>,
      DeSerializersT,
      DistinctProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VARIANT: OneToOneLink<
      ProductTranslations<DeSerializersT>,
      DeSerializersT,
      ProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductMasterV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_MASTER_V_2: OneToOneLink<
      ProductTranslations<DeSerializersT>,
      DeSerializersT,
      ReleasedProductMastersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_MASTER: OneToOneLink<
      ProductTranslations<DeSerializersT>,
      DeSerializersT,
      ReleasedProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT: OneToOneLink<
      ProductTranslations<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER: OneToOneLink<
      ProductTranslations<DeSerializersT>,
      DeSerializersT,
      ProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedDistinctProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_DISTINCT_PRODUCT_V_2: OneToOneLink<
      ProductTranslations<DeSerializersT>,
      DeSerializersT,
      ReleasedDistinctProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedDistinctProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_DISTINCT_PRODUCT: OneToOneLink<
      ProductTranslations<DeSerializersT>,
      DeSerializersT,
      ReleasedDistinctProductsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductTranslations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          false
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
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductTranslations)
      };
    }

    return this._schema;
  }
}
