/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductMasterColors } from './ProductMasterColors';
import { ProductMasterColorsRequestBuilder } from './ProductMasterColorsRequestBuilder';
import { ProductColorsApi } from './ProductColorsApi';
import { AllProductsApi } from './AllProductsApi';
import { ProductMastersApi } from './ProductMastersApi';
import { ProductMasterColorTranslationsApi } from './ProductMasterColorTranslationsApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductMasterColorsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductMasterColors<DeSerializersT>, DeSerializersT>
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
  ): ProductMasterColorsApi<DeSerializersT> {
    return new ProductMasterColorsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      ProductMasterColors<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link everyProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EVERY_PRODUCT: OneToOneLink<
      ProductMasterColors<DeSerializersT>,
      DeSerializersT,
      AllProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER: OneToOneLink<
      ProductMasterColors<DeSerializersT>,
      DeSerializersT,
      ProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterColorTranslations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_COLOR_TRANSLATIONS: OneToManyLink<
      ProductMasterColors<DeSerializersT>,
      DeSerializersT,
      ProductMasterColorTranslationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductColorsApi<DeSerializersT>,
      AllProductsApi<DeSerializersT>,
      ProductMastersApi<DeSerializersT>,
      ProductMasterColorTranslationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_COLOR: new OneToOneLink('ProductColor', this, linkedApis[0]),
      EVERY_PRODUCT: new OneToOneLink('EveryProduct', this, linkedApis[1]),
      PRODUCT_MASTER: new OneToOneLink('ProductMaster', this, linkedApis[2]),
      PRODUCT_MASTER_COLOR_TRANSLATIONS: new OneToManyLink(
        'ProductMasterColorTranslations',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = ProductMasterColors;

  requestBuilder(): ProductMasterColorsRequestBuilder<DeSerializersT> {
    return new ProductMasterColorsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductMasterColors<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductMasterColors<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductMasterColors<DeSerializersT>,
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
    typeof ProductMasterColors,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductMasterColors,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_MASTER_NUMBER: OrderableEdmTypeField<
      ProductMasterColors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ProductMasterColors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISPLAY_SEQUENCE_NUMBER: OrderableEdmTypeField<
      ProductMasterColors<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPLENISHMENT_WEIGHT: OrderableEdmTypeField<
      ProductMasterColors<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      ProductMasterColors<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link everyProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EVERY_PRODUCT: OneToOneLink<
      ProductMasterColors<DeSerializersT>,
      DeSerializersT,
      AllProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER: OneToOneLink<
      ProductMasterColors<DeSerializersT>,
      DeSerializersT,
      ProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterColorTranslations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_COLOR_TRANSLATIONS: OneToManyLink<
      ProductMasterColors<DeSerializersT>,
      DeSerializersT,
      ProductMasterColorTranslationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductMasterColors<DeSerializers>>;
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
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
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
        ALL_FIELDS: new AllFields('*', ProductMasterColors)
      };
    }

    return this._schema;
  }
}
