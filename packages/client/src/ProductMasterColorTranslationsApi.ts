/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductMasterColorTranslations } from './ProductMasterColorTranslations';
import { ProductMasterColorTranslationsRequestBuilder } from './ProductMasterColorTranslationsRequestBuilder';
import { ProductMasterColorsApi } from './ProductMasterColorsApi';
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
export class ProductMasterColorTranslationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductMasterColorTranslations<DeSerializersT>, DeSerializersT>
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
  ): ProductMasterColorTranslationsApi<DeSerializersT> {
    return new ProductMasterColorTranslationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productMasterColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_COLOR: OneToOneLink<
      ProductMasterColorTranslations<DeSerializersT>,
      DeSerializersT,
      ProductMasterColorsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProductMasterColorsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_MASTER_COLOR: new OneToOneLink(
        'ProductMasterColor',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ProductMasterColorTranslations;

  requestBuilder(): ProductMasterColorTranslationsRequestBuilder<DeSerializersT> {
    return new ProductMasterColorTranslationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductMasterColorTranslations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductMasterColorTranslations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductMasterColorTranslations<DeSerializersT>,
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
    typeof ProductMasterColorTranslations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductMasterColorTranslations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_MASTER_NUMBER: OrderableEdmTypeField<
      ProductMasterColorTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_MASTER_COLOR_ID: OrderableEdmTypeField<
      ProductMasterColorTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      ProductMasterColorTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSLATED_COLOR_DESCRIPTION: OrderableEdmTypeField<
      ProductMasterColorTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSLATED_COLOR_NAME: OrderableEdmTypeField<
      ProductMasterColorTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productMasterColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_COLOR: OneToOneLink<
      ProductMasterColorTranslations<DeSerializersT>,
      DeSerializersT,
      ProductMasterColorsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductMasterColorTranslations<DeSerializers>>;
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
         * Static representation of the {@link productMasterColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_MASTER_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductMasterColorId',
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
         * Static representation of the {@link translatedColorDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATED_COLOR_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TranslatedColorDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link translatedColorName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATED_COLOR_NAME: fieldBuilder.buildEdmTypeField(
          'TranslatedColorName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductMasterColorTranslations)
      };
    }

    return this._schema;
  }
}
