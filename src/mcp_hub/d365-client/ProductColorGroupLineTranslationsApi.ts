/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductColorGroupLineTranslations } from './ProductColorGroupLineTranslations';
import { ProductColorGroupLineTranslationsRequestBuilder } from './ProductColorGroupLineTranslationsRequestBuilder';
import { ProductColorGroupLinesApi } from './ProductColorGroupLinesApi';
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
export class ProductColorGroupLineTranslationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductColorGroupLineTranslations<DeSerializersT>, DeSerializersT>
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
  ): ProductColorGroupLineTranslationsApi<DeSerializersT> {
    return new ProductColorGroupLineTranslationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productColorGroupLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR_GROUP_LINE: OneToOneLink<
      ProductColorGroupLineTranslations<DeSerializersT>,
      DeSerializersT,
      ProductColorGroupLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProductColorGroupLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_COLOR_GROUP_LINE: new OneToOneLink(
        'ProductColorGroupLine',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ProductColorGroupLineTranslations;

  requestBuilder(): ProductColorGroupLineTranslationsRequestBuilder<DeSerializersT> {
    return new ProductColorGroupLineTranslationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductColorGroupLineTranslations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductColorGroupLineTranslations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductColorGroupLineTranslations<DeSerializersT>,
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
    typeof ProductColorGroupLineTranslations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductColorGroupLineTranslations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_COLOR_GROUP_ID: OrderableEdmTypeField<
      ProductColorGroupLineTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ProductColorGroupLineTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      ProductColorGroupLineTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSLATED_COLOR_DESCRIPTION: OrderableEdmTypeField<
      ProductColorGroupLineTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSLATED_COLOR_NAME: OrderableEdmTypeField<
      ProductColorGroupLineTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColorGroupLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR_GROUP_LINE: OneToOneLink<
      ProductColorGroupLineTranslations<DeSerializersT>,
      DeSerializersT,
      ProductColorGroupLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductColorGroupLineTranslations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productColorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorGroupId',
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
        ALL_FIELDS: new AllFields('*', ProductColorGroupLineTranslations)
      };
    }

    return this._schema;
  }
}
