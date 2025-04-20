/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FinancialDimensionValueTranslations } from './FinancialDimensionValueTranslations';
import { FinancialDimensionValueTranslationsRequestBuilder } from './FinancialDimensionValueTranslationsRequestBuilder';
import { DimensionAttributesApi } from './DimensionAttributesApi';
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
export class FinancialDimensionValueTranslationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FinancialDimensionValueTranslations<DeSerializersT>,
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
  ): FinancialDimensionValueTranslationsApi<DeSerializersT> {
    return new FinancialDimensionValueTranslationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionValueTranslationEntityRelatedRoleDimensionAttributeEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_TRANSLATION_ENTITY_RELATED_ROLE_DIMENSION_ATTRIBUTE_ENTITY: OneToOneLink<
      FinancialDimensionValueTranslations<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionAttributesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      FINANCIAL_DIMENSION_VALUE_TRANSLATION_ENTITY_RELATED_ROLE_DIMENSION_ATTRIBUTE_ENTITY:
        new OneToOneLink(
          'FinancialDimensionValueTranslationEntity_RelatedRole_DimensionAttributeEntity',
          this,
          linkedApis[0]
        )
    };
    return this;
  }

  entityConstructor = FinancialDimensionValueTranslations;

  requestBuilder(): FinancialDimensionValueTranslationsRequestBuilder<DeSerializersT> {
    return new FinancialDimensionValueTranslationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FinancialDimensionValueTranslations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FinancialDimensionValueTranslations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FinancialDimensionValueTranslations<DeSerializersT>,
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
    typeof FinancialDimensionValueTranslations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FinancialDimensionValueTranslations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FINANCIAL_DIMENSION: OrderableEdmTypeField<
      FinancialDimensionValueTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_CODE: OrderableEdmTypeField<
      FinancialDimensionValueTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FINANCIAL_DIMENSION_VALUE: OrderableEdmTypeField<
      FinancialDimensionValueTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSLATED_DESCRIPTION: OrderableEdmTypeField<
      FinancialDimensionValueTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionValueTranslationEntityRelatedRoleDimensionAttributeEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_TRANSLATION_ENTITY_RELATED_ROLE_DIMENSION_ATTRIBUTE_ENTITY: OneToOneLink<
      FinancialDimensionValueTranslations<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FinancialDimensionValueTranslations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link financialDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_DIMENSION: fieldBuilder.buildEdmTypeField(
          'FinancialDimension',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link languageCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_CODE: fieldBuilder.buildEdmTypeField(
          'LanguageCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link financialDimensionValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_DIMENSION_VALUE: fieldBuilder.buildEdmTypeField(
          'FinancialDimensionValue',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link translatedDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATED_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TranslatedDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FinancialDimensionValueTranslations)
      };
    }

    return this._schema;
  }
}
