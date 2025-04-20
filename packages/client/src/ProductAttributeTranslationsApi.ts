/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductAttributeTranslations } from './ProductAttributeTranslations';
import { ProductAttributeTranslationsRequestBuilder } from './ProductAttributeTranslationsRequestBuilder';
import { ProductAttributesApi } from './ProductAttributesApi';
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
export class ProductAttributeTranslationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductAttributeTranslations<DeSerializersT>, DeSerializersT>
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
  ): ProductAttributeTranslationsApi<DeSerializersT> {
    return new ProductAttributeTranslationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ATTRIBUTE: OneToOneLink<
      ProductAttributeTranslations<DeSerializersT>,
      DeSerializersT,
      ProductAttributesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProductAttributesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_ATTRIBUTE: new OneToOneLink(
        'ProductAttribute',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ProductAttributeTranslations;

  requestBuilder(): ProductAttributeTranslationsRequestBuilder<DeSerializersT> {
    return new ProductAttributeTranslationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductAttributeTranslations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductAttributeTranslations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductAttributeTranslations<DeSerializersT>,
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
    typeof ProductAttributeTranslations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductAttributeTranslations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_ATTRIBUTE_NAME: OrderableEdmTypeField<
      ProductAttributeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_ATTRIBUTE_TYPE_NAME: OrderableEdmTypeField<
      ProductAttributeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      ProductAttributeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSLATED_ATTRIBUTE_HELP_TEXT: OrderableEdmTypeField<
      ProductAttributeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSLATED_FRIENDLY_ATTRIBUTE_NAME: OrderableEdmTypeField<
      ProductAttributeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSLATED_ATTRIBUTE_DESCRIPTION: OrderableEdmTypeField<
      ProductAttributeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ATTRIBUTE: OneToOneLink<
      ProductAttributeTranslations<DeSerializersT>,
      DeSerializersT,
      ProductAttributesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductAttributeTranslations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productAttributeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_ATTRIBUTE_NAME: fieldBuilder.buildEdmTypeField(
          'ProductAttributeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productAttributeTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_ATTRIBUTE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'ProductAttributeTypeName',
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
         * Static representation of the {@link translatedAttributeHelpText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATED_ATTRIBUTE_HELP_TEXT: fieldBuilder.buildEdmTypeField(
          'TranslatedAttributeHelpText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link translatedFriendlyAttributeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATED_FRIENDLY_ATTRIBUTE_NAME: fieldBuilder.buildEdmTypeField(
          'TranslatedFriendlyAttributeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link translatedAttributeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATED_ATTRIBUTE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TranslatedAttributeDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductAttributeTranslations)
      };
    }

    return this._schema;
  }
}
