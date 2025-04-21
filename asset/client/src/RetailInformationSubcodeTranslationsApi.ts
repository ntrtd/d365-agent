/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailInformationSubcodeTranslations } from './RetailInformationSubcodeTranslations';
import { RetailInformationSubcodeTranslationsRequestBuilder } from './RetailInformationSubcodeTranslationsRequestBuilder';
import { RetailInformationSubcodesApi } from './RetailInformationSubcodesApi';
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
export class RetailInformationSubcodeTranslationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailInformationSubcodeTranslations<DeSerializersT>,
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
  ): RetailInformationSubcodeTranslationsApi<DeSerializersT> {
    return new RetailInformationSubcodeTranslationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailInformationSubcode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INFORMATION_SUBCODE: OneToOneLink<
      RetailInformationSubcodeTranslations<DeSerializersT>,
      DeSerializersT,
      RetailInformationSubcodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailInformationSubcodesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_INFORMATION_SUBCODE: new OneToOneLink(
        'RetailInformationSubcode',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RetailInformationSubcodeTranslations;

  requestBuilder(): RetailInformationSubcodeTranslationsRequestBuilder<DeSerializersT> {
    return new RetailInformationSubcodeTranslationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailInformationSubcodeTranslations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailInformationSubcodeTranslations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailInformationSubcodeTranslations<DeSerializersT>,
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
    typeof RetailInformationSubcodeTranslations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailInformationSubcodeTranslations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailInformationSubcodeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INFOCODE_ID: OrderableEdmTypeField<
      RetailInformationSubcodeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUBCODE_ID: OrderableEdmTypeField<
      RetailInformationSubcodeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      RetailInformationSubcodeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailInformationSubcodeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailInformationSubcode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INFORMATION_SUBCODE: OneToOneLink<
      RetailInformationSubcodeTranslations<DeSerializersT>,
      DeSerializersT,
      RetailInformationSubcodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailInformationSubcodeTranslations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link infocodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFOCODE_ID: fieldBuilder.buildEdmTypeField(
          'InfocodeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link subcodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBCODE_ID: fieldBuilder.buildEdmTypeField(
          'SubcodeId',
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailInformationSubcodeTranslations)
      };
    }

    return this._schema;
  }
}
