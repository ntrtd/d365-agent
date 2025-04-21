/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductMasterSizeTranslations } from './ProductMasterSizeTranslations';
import { ProductMasterSizeTranslationsRequestBuilder } from './ProductMasterSizeTranslationsRequestBuilder';
import { ProductMasterSizesApi } from './ProductMasterSizesApi';
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
export class ProductMasterSizeTranslationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductMasterSizeTranslations<DeSerializersT>, DeSerializersT>
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
  ): ProductMasterSizeTranslationsApi<DeSerializersT> {
    return new ProductMasterSizeTranslationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productMasterSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_SIZE: OneToOneLink<
      ProductMasterSizeTranslations<DeSerializersT>,
      DeSerializersT,
      ProductMasterSizesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProductMasterSizesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_MASTER_SIZE: new OneToOneLink(
        'ProductMasterSize',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ProductMasterSizeTranslations;

  requestBuilder(): ProductMasterSizeTranslationsRequestBuilder<DeSerializersT> {
    return new ProductMasterSizeTranslationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductMasterSizeTranslations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductMasterSizeTranslations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductMasterSizeTranslations<DeSerializersT>,
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
    typeof ProductMasterSizeTranslations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductMasterSizeTranslations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_MASTER_NUMBER: OrderableEdmTypeField<
      ProductMasterSizeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_MASTER_SIZE_ID: OrderableEdmTypeField<
      ProductMasterSizeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      ProductMasterSizeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSLATED_SIZE_DESCRIPTION: OrderableEdmTypeField<
      ProductMasterSizeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSLATED_SIZE_NAME: OrderableEdmTypeField<
      ProductMasterSizeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productMasterSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_SIZE: OneToOneLink<
      ProductMasterSizeTranslations<DeSerializersT>,
      DeSerializersT,
      ProductMasterSizesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductMasterSizeTranslations<DeSerializers>>;
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
         * Static representation of the {@link productMasterSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_MASTER_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductMasterSizeId',
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
        ALL_FIELDS: new AllFields('*', ProductMasterSizeTranslations)
      };
    }

    return this._schema;
  }
}
