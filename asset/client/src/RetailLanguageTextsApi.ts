/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailLanguageTexts } from './RetailLanguageTexts';
import { RetailLanguageTextsRequestBuilder } from './RetailLanguageTextsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class RetailLanguageTextsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailLanguageTexts<DeSerializersT>, DeSerializersT>
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
  ): RetailLanguageTextsApi<DeSerializersT> {
    return new RetailLanguageTextsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailLanguageTexts;

  requestBuilder(): RetailLanguageTextsRequestBuilder<DeSerializersT> {
    return new RetailLanguageTextsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailLanguageTexts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailLanguageTexts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailLanguageTexts<DeSerializersT>,
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
    typeof RetailLanguageTexts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailLanguageTexts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailLanguageTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      RetailLanguageTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEXT_ID: OrderableEdmTypeField<
      RetailLanguageTexts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ERROR_TEXT: OrderableEdmTypeField<
      RetailLanguageTexts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FIRST_IN_VERSION: OrderableEdmTypeField<
      RetailLanguageTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_UPDATED: OrderableEdmTypeField<
      RetailLanguageTexts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DATE_CREATED: OrderableEdmTypeField<
      RetailLanguageTexts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MODULE_ID: OrderableEdmTypeField<
      RetailLanguageTexts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TEXT: OrderableEdmTypeField<
      RetailLanguageTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailLanguageTexts<DeSerializers>>;
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
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link textId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_ID: fieldBuilder.buildEdmTypeField('TextId', 'Edm.Int32', false),
        /**
         * Static representation of the {@link errorText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_TEXT: fieldBuilder.buildEdmTypeField(
          'ErrorText',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link firstInVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_IN_VERSION: fieldBuilder.buildEdmTypeField(
          'FirstInVersion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateUpdated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_UPDATED: fieldBuilder.buildEdmTypeField(
          'DateUpdated',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dateCreated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_CREATED: fieldBuilder.buildEdmTypeField(
          'DateCreated',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link moduleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULE_ID: fieldBuilder.buildEdmTypeField(
          'ModuleId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link text} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT: fieldBuilder.buildEdmTypeField('Text', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailLanguageTexts)
      };
    }

    return this._schema;
  }
}
