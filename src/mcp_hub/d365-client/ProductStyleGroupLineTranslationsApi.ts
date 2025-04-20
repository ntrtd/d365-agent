/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductStyleGroupLineTranslations } from './ProductStyleGroupLineTranslations';
import { ProductStyleGroupLineTranslationsRequestBuilder } from './ProductStyleGroupLineTranslationsRequestBuilder';
import { ProductStyleGroupLinesApi } from './ProductStyleGroupLinesApi';
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
export class ProductStyleGroupLineTranslationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductStyleGroupLineTranslations<DeSerializersT>, DeSerializersT>
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
  ): ProductStyleGroupLineTranslationsApi<DeSerializersT> {
    return new ProductStyleGroupLineTranslationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productStyleGroupLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE_GROUP_LINE: OneToOneLink<
      ProductStyleGroupLineTranslations<DeSerializersT>,
      DeSerializersT,
      ProductStyleGroupLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProductStyleGroupLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_STYLE_GROUP_LINE: new OneToOneLink(
        'ProductStyleGroupLine',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ProductStyleGroupLineTranslations;

  requestBuilder(): ProductStyleGroupLineTranslationsRequestBuilder<DeSerializersT> {
    return new ProductStyleGroupLineTranslationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductStyleGroupLineTranslations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductStyleGroupLineTranslations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductStyleGroupLineTranslations<DeSerializersT>,
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
    typeof ProductStyleGroupLineTranslations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductStyleGroupLineTranslations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_STYLE_GROUP_ID: OrderableEdmTypeField<
      ProductStyleGroupLineTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ProductStyleGroupLineTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      ProductStyleGroupLineTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSLATED_STYLE_DESCRIPTION: OrderableEdmTypeField<
      ProductStyleGroupLineTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSLATED_STYLE_NAME: OrderableEdmTypeField<
      ProductStyleGroupLineTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyleGroupLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE_GROUP_LINE: OneToOneLink<
      ProductStyleGroupLineTranslations<DeSerializersT>,
      DeSerializersT,
      ProductStyleGroupLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductStyleGroupLineTranslations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productStyleGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleGroupId',
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
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link translatedStyleDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATED_STYLE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TranslatedStyleDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link translatedStyleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATED_STYLE_NAME: fieldBuilder.buildEdmTypeField(
          'TranslatedStyleName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductStyleGroupLineTranslations)
      };
    }

    return this._schema;
  }
}
