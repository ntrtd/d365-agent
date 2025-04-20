/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductSizeGroupLineTranslations } from './ProductSizeGroupLineTranslations';
import { ProductSizeGroupLineTranslationsRequestBuilder } from './ProductSizeGroupLineTranslationsRequestBuilder';
import { ProductSizeGroupLinesApi } from './ProductSizeGroupLinesApi';
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
export class ProductSizeGroupLineTranslationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductSizeGroupLineTranslations<DeSerializersT>, DeSerializersT>
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
  ): ProductSizeGroupLineTranslationsApi<DeSerializersT> {
    return new ProductSizeGroupLineTranslationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productSizeGroupLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE_GROUP_LINE: OneToOneLink<
      ProductSizeGroupLineTranslations<DeSerializersT>,
      DeSerializersT,
      ProductSizeGroupLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProductSizeGroupLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_SIZE_GROUP_LINE: new OneToOneLink(
        'ProductSizeGroupLine',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ProductSizeGroupLineTranslations;

  requestBuilder(): ProductSizeGroupLineTranslationsRequestBuilder<DeSerializersT> {
    return new ProductSizeGroupLineTranslationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductSizeGroupLineTranslations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductSizeGroupLineTranslations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductSizeGroupLineTranslations<DeSerializersT>,
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
    typeof ProductSizeGroupLineTranslations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductSizeGroupLineTranslations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_SIZE_GROUP_ID: OrderableEdmTypeField<
      ProductSizeGroupLineTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ProductSizeGroupLineTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      ProductSizeGroupLineTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSLATED_SIZE_DESCRIPTION: OrderableEdmTypeField<
      ProductSizeGroupLineTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSLATED_SIZE_NAME: OrderableEdmTypeField<
      ProductSizeGroupLineTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSizeGroupLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE_GROUP_LINE: OneToOneLink<
      ProductSizeGroupLineTranslations<DeSerializersT>,
      DeSerializersT,
      ProductSizeGroupLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductSizeGroupLineTranslations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productSizeGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeGroupId',
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
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link translatedSizeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATED_SIZE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TranslatedSizeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link translatedSizeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATED_SIZE_NAME: fieldBuilder.buildEdmTypeField(
          'TranslatedSizeName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductSizeGroupLineTranslations)
      };
    }

    return this._schema;
  }
}
