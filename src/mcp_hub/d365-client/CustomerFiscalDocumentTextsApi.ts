/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerFiscalDocumentTexts } from './CustomerFiscalDocumentTexts';
import { CustomerFiscalDocumentTextsRequestBuilder } from './CustomerFiscalDocumentTextsRequestBuilder';
import { NoYes } from './NoYes';
import { DocuRestriction } from './DocuRestriction';
import { FiscalDocumentTextTypeBr } from './FiscalDocumentTextTypeBr';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class CustomerFiscalDocumentTextsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CustomerFiscalDocumentTexts<DeSerializersT>, DeSerializersT>
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
  ): CustomerFiscalDocumentTextsApi<DeSerializersT> {
    return new CustomerFiscalDocumentTextsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustomerFiscalDocumentTexts;

  requestBuilder(): CustomerFiscalDocumentTextsRequestBuilder<DeSerializersT> {
    return new CustomerFiscalDocumentTextsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomerFiscalDocumentTexts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustomerFiscalDocumentTexts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerFiscalDocumentTexts<DeSerializersT>,
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
    typeof CustomerFiscalDocumentTexts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerFiscalDocumentTexts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustomerFiscalDocumentTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER: OrderableEdmTypeField<
      CustomerFiscalDocumentTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_DOCUMENT_TEXT: OrderableEdmTypeField<
      CustomerFiscalDocumentTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_INFORMATION: EnumField<
      CustomerFiscalDocumentTexts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RESTRICTION: EnumField<
      CustomerFiscalDocumentTexts<DeSerializers>,
      DeSerializersT,
      DocuRestriction,
      true,
      true
    >;
    TYPE: EnumField<
      CustomerFiscalDocumentTexts<DeSerializers>,
      DeSerializersT,
      FiscalDocumentTextTypeBr,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      CustomerFiscalDocumentTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      CustomerFiscalDocumentTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CustomerFiscalDocumentTexts<DeSerializers>>;
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
         * Static representation of the {@link customer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER: fieldBuilder.buildEdmTypeField(
          'Customer',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiscalDocumentText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_TEXT: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentText',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiscalInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_INFORMATION: fieldBuilder.buildEnumField(
          'FiscalInformation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link restriction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTRICTION: fieldBuilder.buildEnumField(
          'Restriction',
          DocuRestriction,
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          FiscalDocumentTextTypeBr,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerFiscalDocumentTexts)
      };
    }

    return this._schema;
  }
}
