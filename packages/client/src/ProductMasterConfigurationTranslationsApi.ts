/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductMasterConfigurationTranslations } from './ProductMasterConfigurationTranslations';
import { ProductMasterConfigurationTranslationsRequestBuilder } from './ProductMasterConfigurationTranslationsRequestBuilder';
import { ProductMasterConfigurationsApi } from './ProductMasterConfigurationsApi';
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
export class ProductMasterConfigurationTranslationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ProductMasterConfigurationTranslations<DeSerializersT>,
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
  ): ProductMasterConfigurationTranslationsApi<DeSerializersT> {
    return new ProductMasterConfigurationTranslationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productMasterConfiguration} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_CONFIGURATION: OneToOneLink<
      ProductMasterConfigurationTranslations<DeSerializersT>,
      DeSerializersT,
      ProductMasterConfigurationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProductMasterConfigurationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_MASTER_CONFIGURATION: new OneToOneLink(
        'ProductMasterConfiguration',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ProductMasterConfigurationTranslations;

  requestBuilder(): ProductMasterConfigurationTranslationsRequestBuilder<DeSerializersT> {
    return new ProductMasterConfigurationTranslationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductMasterConfigurationTranslations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductMasterConfigurationTranslations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductMasterConfigurationTranslations<DeSerializersT>,
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
    typeof ProductMasterConfigurationTranslations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductMasterConfigurationTranslations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_MASTER_NUMBER: OrderableEdmTypeField<
      ProductMasterConfigurationTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_MASTER_CONFIGURATION_ID: OrderableEdmTypeField<
      ProductMasterConfigurationTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      ProductMasterConfigurationTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSLATED_CONFIGURATION_NAME: OrderableEdmTypeField<
      ProductMasterConfigurationTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSLATED_CONFIGURATION_DESCRIPTION: OrderableEdmTypeField<
      ProductMasterConfigurationTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productMasterConfiguration} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_CONFIGURATION: OneToOneLink<
      ProductMasterConfigurationTranslations<DeSerializersT>,
      DeSerializersT,
      ProductMasterConfigurationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      ProductMasterConfigurationTranslations<DeSerializers>
    >;
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
         * Static representation of the {@link productMasterConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_MASTER_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductMasterConfigurationId',
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
         * Static representation of the {@link translatedConfigurationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATED_CONFIGURATION_NAME: fieldBuilder.buildEdmTypeField(
          'TranslatedConfigurationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link translatedConfigurationDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATED_CONFIGURATION_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TranslatedConfigurationDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductMasterConfigurationTranslations)
      };
    }

    return this._schema;
  }
}
