/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductMasterStyleTranslations } from './ProductMasterStyleTranslations';
import { ProductMasterStyleTranslationsRequestBuilder } from './ProductMasterStyleTranslationsRequestBuilder';
import { ProductMasterStylesApi } from './ProductMasterStylesApi';
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
export class ProductMasterStyleTranslationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductMasterStyleTranslations<DeSerializersT>, DeSerializersT>
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
  ): ProductMasterStyleTranslationsApi<DeSerializersT> {
    return new ProductMasterStyleTranslationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productMasterStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_STYLE: OneToOneLink<
      ProductMasterStyleTranslations<DeSerializersT>,
      DeSerializersT,
      ProductMasterStylesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProductMasterStylesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_MASTER_STYLE: new OneToOneLink(
        'ProductMasterStyle',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ProductMasterStyleTranslations;

  requestBuilder(): ProductMasterStyleTranslationsRequestBuilder<DeSerializersT> {
    return new ProductMasterStyleTranslationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductMasterStyleTranslations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductMasterStyleTranslations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductMasterStyleTranslations<DeSerializersT>,
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
    typeof ProductMasterStyleTranslations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductMasterStyleTranslations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_MASTER_NUMBER: OrderableEdmTypeField<
      ProductMasterStyleTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_MASTER_STYLE_ID: OrderableEdmTypeField<
      ProductMasterStyleTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      ProductMasterStyleTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSLATED_STYLE_DESCRIPTION: OrderableEdmTypeField<
      ProductMasterStyleTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSLATED_STYLE_NAME: OrderableEdmTypeField<
      ProductMasterStyleTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productMasterStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_STYLE: OneToOneLink<
      ProductMasterStyleTranslations<DeSerializersT>,
      DeSerializersT,
      ProductMasterStylesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductMasterStyleTranslations<DeSerializers>>;
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
         * Static representation of the {@link productMasterStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_MASTER_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductMasterStyleId',
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
        ALL_FIELDS: new AllFields('*', ProductMasterStyleTranslations)
      };
    }

    return this._schema;
  }
}
