/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductNumberIdentifiedReleasedProductVariantExternalCodes } from './ProductNumberIdentifiedReleasedProductVariantExternalCodes';
import { ProductNumberIdentifiedReleasedProductVariantExternalCodesRequestBuilder } from './ProductNumberIdentifiedReleasedProductVariantExternalCodesRequestBuilder';
import { ProductNumberIdentifiedReleasedProductVariantsApi } from './ProductNumberIdentifiedReleasedProductVariantsApi';
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
export class ProductNumberIdentifiedReleasedProductVariantExternalCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ProductNumberIdentifiedReleasedProductVariantExternalCodes<DeSerializersT>,
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
  ): ProductNumberIdentifiedReleasedProductVariantExternalCodesApi<DeSerializersT> {
    return new ProductNumberIdentifiedReleasedProductVariantExternalCodesApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productNumberIdentifiedReleasedProductVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_NUMBER_IDENTIFIED_RELEASED_PRODUCT_VARIANT: OneToOneLink<
      ProductNumberIdentifiedReleasedProductVariantExternalCodes<DeSerializersT>,
      DeSerializersT,
      ProductNumberIdentifiedReleasedProductVariantsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductNumberIdentifiedReleasedProductVariantsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_NUMBER_IDENTIFIED_RELEASED_PRODUCT_VARIANT: new OneToOneLink(
        'ProductNumberIdentifiedReleasedProductVariant',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor =
    ProductNumberIdentifiedReleasedProductVariantExternalCodes;

  requestBuilder(): ProductNumberIdentifiedReleasedProductVariantExternalCodesRequestBuilder<DeSerializersT> {
    return new ProductNumberIdentifiedReleasedProductVariantExternalCodesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductNumberIdentifiedReleasedProductVariantExternalCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductNumberIdentifiedReleasedProductVariantExternalCodes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductNumberIdentifiedReleasedProductVariantExternalCodes<DeSerializersT>,
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
    typeof ProductNumberIdentifiedReleasedProductVariantExternalCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductNumberIdentifiedReleasedProductVariantExternalCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProductNumberIdentifiedReleasedProductVariantExternalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RELEASED_PRODUCT_VARIANT_EXTERNAL_CODE_CLASS_ID: OrderableEdmTypeField<
      ProductNumberIdentifiedReleasedProductVariantExternalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_VARIANT_NUMBER: OrderableEdmTypeField<
      ProductNumberIdentifiedReleasedProductVariantExternalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ProductNumberIdentifiedReleasedProductVariantExternalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ProductNumberIdentifiedReleasedProductVariantExternalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      ProductNumberIdentifiedReleasedProductVariantExternalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ProductNumberIdentifiedReleasedProductVariantExternalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ProductNumberIdentifiedReleasedProductVariantExternalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ProductNumberIdentifiedReleasedProductVariantExternalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ProductNumberIdentifiedReleasedProductVariantExternalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productNumberIdentifiedReleasedProductVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_NUMBER_IDENTIFIED_RELEASED_PRODUCT_VARIANT: OneToOneLink<
      ProductNumberIdentifiedReleasedProductVariantExternalCodes<DeSerializersT>,
      DeSerializersT,
      ProductNumberIdentifiedReleasedProductVariantsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      ProductNumberIdentifiedReleasedProductVariantExternalCodes<DeSerializers>
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
         * Static representation of the {@link releasedProductVariantExternalCodeClassId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASED_PRODUCT_VARIANT_EXTERNAL_CODE_CLASS_ID:
          fieldBuilder.buildEdmTypeField(
            'ReleasedProductVariantExternalCodeClassId',
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
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
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
         * Static representation of the {@link externalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_CODE: fieldBuilder.buildEdmTypeField(
          'ExternalCode',
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
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
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
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
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
          ProductNumberIdentifiedReleasedProductVariantExternalCodes
        )
      };
    }

    return this._schema;
  }
}
