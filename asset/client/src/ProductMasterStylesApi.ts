/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductMasterStyles } from './ProductMasterStyles';
import { ProductMasterStylesRequestBuilder } from './ProductMasterStylesRequestBuilder';
import { ProductMasterStyleTranslationsApi } from './ProductMasterStyleTranslationsApi';
import { ProductStylesApi } from './ProductStylesApi';
import { AllProductsApi } from './AllProductsApi';
import { ProductMastersApi } from './ProductMastersApi';
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
export class ProductMasterStylesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductMasterStyles<DeSerializersT>, DeSerializersT>
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
  ): ProductMasterStylesApi<DeSerializersT> {
    return new ProductMasterStylesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link productMasterStyleTranslations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_STYLE_TRANSLATIONS: OneToManyLink<
      ProductMasterStyles<DeSerializersT>,
      DeSerializersT,
      ProductMasterStyleTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      ProductMasterStyles<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link everyProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EVERY_PRODUCT: OneToOneLink<
      ProductMasterStyles<DeSerializersT>,
      DeSerializersT,
      AllProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER: OneToOneLink<
      ProductMasterStyles<DeSerializersT>,
      DeSerializersT,
      ProductMastersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductMasterStyleTranslationsApi<DeSerializersT>,
      ProductStylesApi<DeSerializersT>,
      AllProductsApi<DeSerializersT>,
      ProductMastersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_MASTER_STYLE_TRANSLATIONS: new OneToManyLink(
        'ProductMasterStyleTranslations',
        this,
        linkedApis[0]
      ),
      PRODUCT_STYLE: new OneToOneLink('ProductStyle', this, linkedApis[1]),
      EVERY_PRODUCT: new OneToOneLink('EveryProduct', this, linkedApis[2]),
      PRODUCT_MASTER: new OneToOneLink('ProductMaster', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = ProductMasterStyles;

  requestBuilder(): ProductMasterStylesRequestBuilder<DeSerializersT> {
    return new ProductMasterStylesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductMasterStyles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductMasterStyles<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductMasterStyles<DeSerializersT>,
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
    typeof ProductMasterStyles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductMasterStyles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_MASTER_NUMBER: OrderableEdmTypeField<
      ProductMasterStyles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ProductMasterStyles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISPLAY_SEQUENCE_NUMBER: OrderableEdmTypeField<
      ProductMasterStyles<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPLENISHMENT_WEIGHT: OrderableEdmTypeField<
      ProductMasterStyles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterStyleTranslations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_STYLE_TRANSLATIONS: OneToManyLink<
      ProductMasterStyles<DeSerializersT>,
      DeSerializersT,
      ProductMasterStyleTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      ProductMasterStyles<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link everyProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EVERY_PRODUCT: OneToOneLink<
      ProductMasterStyles<DeSerializersT>,
      DeSerializersT,
      AllProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER: OneToOneLink<
      ProductMasterStyles<DeSerializersT>,
      DeSerializersT,
      ProductMastersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductMasterStyles<DeSerializers>>;
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
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link displaySequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'DisplaySequenceNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link replenishmentWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_WEIGHT: fieldBuilder.buildEdmTypeField(
          'ReplenishmentWeight',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductMasterStyles)
      };
    }

    return this._schema;
  }
}
