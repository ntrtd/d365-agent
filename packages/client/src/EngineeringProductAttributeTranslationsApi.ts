/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringProductAttributeTranslations } from './EngineeringProductAttributeTranslations';
import { EngineeringProductAttributeTranslationsRequestBuilder } from './EngineeringProductAttributeTranslationsRequestBuilder';
import { EngineeringProductAttributesApi } from './EngineeringProductAttributesApi';
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
export class EngineeringProductAttributeTranslationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringProductAttributeTranslations<DeSerializersT>,
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
  ): EngineeringProductAttributeTranslationsApi<DeSerializersT> {
    return new EngineeringProductAttributeTranslationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link engineeringProductAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_ATTRIBUTE: OneToOneLink<
      EngineeringProductAttributeTranslations<DeSerializersT>,
      DeSerializersT,
      EngineeringProductAttributesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [EngineeringProductAttributesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_PRODUCT_ATTRIBUTE: new OneToOneLink(
        'EngineeringProductAttribute',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = EngineeringProductAttributeTranslations;

  requestBuilder(): EngineeringProductAttributeTranslationsRequestBuilder<DeSerializersT> {
    return new EngineeringProductAttributeTranslationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringProductAttributeTranslations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringProductAttributeTranslations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringProductAttributeTranslations<DeSerializersT>,
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
    typeof EngineeringProductAttributeTranslations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringProductAttributeTranslations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ENGINEERING_PRODUCT_ATTRIBUTE_NAME: OrderableEdmTypeField<
      EngineeringProductAttributeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      EngineeringProductAttributeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSLATED_ATTRIBUTE_HELP_TEXT: OrderableEdmTypeField<
      EngineeringProductAttributeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSLATED_ATTRIBUTE_DESCRIPTION: OrderableEdmTypeField<
      EngineeringProductAttributeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSLATED_FRIENDLY_ATTRIBUTE_NAME: OrderableEdmTypeField<
      EngineeringProductAttributeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringProductAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_ATTRIBUTE: OneToOneLink<
      EngineeringProductAttributeTranslations<DeSerializersT>,
      DeSerializersT,
      EngineeringProductAttributesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      EngineeringProductAttributeTranslations<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link engineeringProductAttributeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_PRODUCT_ATTRIBUTE_NAME: fieldBuilder.buildEdmTypeField(
          'EngineeringProductAttributeName',
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
         * Static representation of the {@link translatedAttributeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATED_ATTRIBUTE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TranslatedAttributeDescription',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EngineeringProductAttributeTranslations)
      };
    }

    return this._schema;
  }
}
