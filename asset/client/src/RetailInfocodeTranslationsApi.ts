/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailInfocodeTranslations } from './RetailInfocodeTranslations';
import { RetailInfocodeTranslationsRequestBuilder } from './RetailInfocodeTranslationsRequestBuilder';
import { InfocodesApi } from './InfocodesApi';
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
export class RetailInfocodeTranslationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailInfocodeTranslations<DeSerializersT>, DeSerializersT>
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
  ): RetailInfocodeTranslationsApi<DeSerializersT> {
    return new RetailInfocodeTranslationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link infocode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INFOCODE: OneToOneLink<
      RetailInfocodeTranslations<DeSerializersT>,
      DeSerializersT,
      InfocodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [InfocodesApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      INFOCODE: new OneToOneLink('Infocode', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = RetailInfocodeTranslations;

  requestBuilder(): RetailInfocodeTranslationsRequestBuilder<DeSerializersT> {
    return new RetailInfocodeTranslationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailInfocodeTranslations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailInfocodeTranslations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailInfocodeTranslations<DeSerializersT>,
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
    typeof RetailInfocodeTranslations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailInfocodeTranslations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailInfocodeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RETAIL_INFOCODE_TABLE_INFOCODE_ID: OrderableEdmTypeField<
      RetailInfocodeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      RetailInfocodeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailInfocodeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROMPT: OrderableEdmTypeField<
      RetailInfocodeTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link infocode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INFOCODE: OneToOneLink<
      RetailInfocodeTranslations<DeSerializersT>,
      DeSerializersT,
      InfocodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailInfocodeTranslations<DeSerializers>>;
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
         * Static representation of the {@link retailInfocodeTableInfocodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_INFOCODE_TABLE_INFOCODE_ID: fieldBuilder.buildEdmTypeField(
          'RetailInfocodeTable_infocodeId',
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
        /**
         * Static representation of the {@link prompt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMPT: fieldBuilder.buildEdmTypeField('Prompt', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailInfocodeTranslations)
      };
    }

    return this._schema;
  }
}
