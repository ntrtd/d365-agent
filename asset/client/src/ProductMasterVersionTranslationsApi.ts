/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductMasterVersionTranslations } from './ProductMasterVersionTranslations';
import { ProductMasterVersionTranslationsRequestBuilder } from './ProductMasterVersionTranslationsRequestBuilder';
import { ProductMasterVersionsApi } from './ProductMasterVersionsApi';
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
export class ProductMasterVersionTranslationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductMasterVersionTranslations<DeSerializersT>, DeSerializersT>
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
  ): ProductMasterVersionTranslationsApi<DeSerializersT> {
    return new ProductMasterVersionTranslationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productMasterVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_VERSION: OneToOneLink<
      ProductMasterVersionTranslations<DeSerializersT>,
      DeSerializersT,
      ProductMasterVersionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProductMasterVersionsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_MASTER_VERSION: new OneToOneLink(
        'ProductMasterVersion',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ProductMasterVersionTranslations;

  requestBuilder(): ProductMasterVersionTranslationsRequestBuilder<DeSerializersT> {
    return new ProductMasterVersionTranslationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductMasterVersionTranslations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductMasterVersionTranslations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductMasterVersionTranslations<DeSerializersT>,
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
    typeof ProductMasterVersionTranslations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductMasterVersionTranslations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_MASTER_NUMBER: OrderableEdmTypeField<
      ProductMasterVersionTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_MASTER_VERSION_ID: OrderableEdmTypeField<
      ProductMasterVersionTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      ProductMasterVersionTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSLATED_VERSION_NAME: OrderableEdmTypeField<
      ProductMasterVersionTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSLATED_VERSION_DESCRIPTION: OrderableEdmTypeField<
      ProductMasterVersionTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productMasterVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_VERSION: OneToOneLink<
      ProductMasterVersionTranslations<DeSerializersT>,
      DeSerializersT,
      ProductMasterVersionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductMasterVersionTranslations<DeSerializers>>;
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
         * Static representation of the {@link productMasterVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_MASTER_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductMasterVersionId',
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
         * Static representation of the {@link translatedVersionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATED_VERSION_NAME: fieldBuilder.buildEdmTypeField(
          'TranslatedVersionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link translatedVersionDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATED_VERSION_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TranslatedVersionDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductMasterVersionTranslations)
      };
    }

    return this._schema;
  }
}
