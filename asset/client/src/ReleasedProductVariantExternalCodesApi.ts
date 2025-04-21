/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReleasedProductVariantExternalCodes } from './ReleasedProductVariantExternalCodes';
import { ReleasedProductVariantExternalCodesRequestBuilder } from './ReleasedProductVariantExternalCodesRequestBuilder';
import { ProductColorsApi } from './ProductColorsApi';
import { ProductStylesApi } from './ProductStylesApi';
import { ProductSizesApi } from './ProductSizesApi';
import { ReleasedProductVariantsApi } from './ReleasedProductVariantsApi';
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
export class ReleasedProductVariantExternalCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ReleasedProductVariantExternalCodes<DeSerializersT>,
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
  ): ReleasedProductVariantExternalCodesApi<DeSerializersT> {
    return new ReleasedProductVariantExternalCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      ReleasedProductVariantExternalCodes<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      ReleasedProductVariantExternalCodes<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      ReleasedProductVariantExternalCodes<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT: OneToOneLink<
      ReleasedProductVariantExternalCodes<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductColorsApi<DeSerializersT>,
      ProductStylesApi<DeSerializersT>,
      ProductSizesApi<DeSerializersT>,
      ReleasedProductVariantsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_COLOR: new OneToOneLink('ProductColor', this, linkedApis[0]),
      PRODUCT_STYLE: new OneToOneLink('ProductStyle', this, linkedApis[1]),
      PRODUCT_SIZE: new OneToOneLink('ProductSize', this, linkedApis[2]),
      RELEASED_PRODUCT_VARIANT: new OneToOneLink(
        'ReleasedProductVariant',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = ReleasedProductVariantExternalCodes;

  requestBuilder(): ReleasedProductVariantExternalCodesRequestBuilder<DeSerializersT> {
    return new ReleasedProductVariantExternalCodesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ReleasedProductVariantExternalCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ReleasedProductVariantExternalCodes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReleasedProductVariantExternalCodes<DeSerializersT>,
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
    typeof ReleasedProductVariantExternalCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReleasedProductVariantExternalCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReleasedProductVariantExternalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RELEASED_PRODUCT_VARIANT_EXTERNAL_CODE_CLASS_ID: OrderableEdmTypeField<
      ReleasedProductVariantExternalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ReleasedProductVariantExternalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ReleasedProductVariantExternalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ReleasedProductVariantExternalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ReleasedProductVariantExternalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ReleasedProductVariantExternalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      ReleasedProductVariantExternalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      ReleasedProductVariantExternalCodes<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      ReleasedProductVariantExternalCodes<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      ReleasedProductVariantExternalCodes<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT: OneToOneLink<
      ReleasedProductVariantExternalCodes<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ReleasedProductVariantExternalCodes<DeSerializers>>;
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
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
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
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
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
         * Static representation of the {@link externalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_CODE: fieldBuilder.buildEdmTypeField(
          'ExternalCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReleasedProductVariantExternalCodes)
      };
    }

    return this._schema;
  }
}
