/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorFiscalDocumentTexts } from './VendorFiscalDocumentTexts';
import { VendorFiscalDocumentTextsRequestBuilder } from './VendorFiscalDocumentTextsRequestBuilder';
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
export class VendorFiscalDocumentTextsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendorFiscalDocumentTexts<DeSerializersT>, DeSerializersT>
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
  ): VendorFiscalDocumentTextsApi<DeSerializersT> {
    return new VendorFiscalDocumentTextsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendorFiscalDocumentTexts;

  requestBuilder(): VendorFiscalDocumentTextsRequestBuilder<DeSerializersT> {
    return new VendorFiscalDocumentTextsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorFiscalDocumentTexts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendorFiscalDocumentTexts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendorFiscalDocumentTexts<DeSerializersT>,
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
    typeof VendorFiscalDocumentTexts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorFiscalDocumentTexts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorFiscalDocumentTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR: OrderableEdmTypeField<
      VendorFiscalDocumentTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_DOCUMENT_TEXT: OrderableEdmTypeField<
      VendorFiscalDocumentTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_INFORMATION: EnumField<
      VendorFiscalDocumentTexts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RESTRICTION: EnumField<
      VendorFiscalDocumentTexts<DeSerializers>,
      DeSerializersT,
      DocuRestriction,
      true,
      true
    >;
    TYPE: EnumField<
      VendorFiscalDocumentTexts<DeSerializers>,
      DeSerializersT,
      FiscalDocumentTextTypeBr,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      VendorFiscalDocumentTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      VendorFiscalDocumentTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<VendorFiscalDocumentTexts<DeSerializers>>;
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
         * Static representation of the {@link vendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR: fieldBuilder.buildEdmTypeField('Vendor', 'Edm.String', false),
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
        ALL_FIELDS: new AllFields('*', VendorFiscalDocumentTexts)
      };
    }

    return this._schema;
  }
}
