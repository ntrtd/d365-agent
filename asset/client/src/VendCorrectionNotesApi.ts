/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendCorrectionNotes } from './VendCorrectionNotes';
import { VendCorrectionNotesRequestBuilder } from './VendCorrectionNotesRequestBuilder';
import { NoYes } from './NoYes';
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
export class VendCorrectionNotesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendCorrectionNotes<DeSerializersT>, DeSerializersT>
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
  ): VendCorrectionNotesApi<DeSerializersT> {
    return new VendCorrectionNotesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendCorrectionNotes;

  requestBuilder(): VendCorrectionNotesRequestBuilder<DeSerializersT> {
    return new VendCorrectionNotesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendCorrectionNotes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VendCorrectionNotes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendCorrectionNotes<DeSerializersT>,
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
    typeof VendCorrectionNotes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendCorrectionNotes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendCorrectionNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CORRECTION_NOTE_ID: OrderableEdmTypeField<
      VendCorrectionNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      VendCorrectionNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      VendCorrectionNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTED: EnumField<
      VendCorrectionNotes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DATE: OrderableEdmTypeField<
      VendCorrectionNotes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ORIGINAL_TEXT: OrderableEdmTypeField<
      VendCorrectionNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      VendCorrectionNotes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CORRECTED_TEXT: OrderableEdmTypeField<
      VendCorrectionNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<VendCorrectionNotes<DeSerializers>>;
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
         * Static representation of the {@link correctionNoteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_NOTE_ID: fieldBuilder.buildEdmTypeField(
          'CorrectionNoteId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEdmTypeField('Invoice', 'Edm.String', true),
        /**
         * Static representation of the {@link invoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link posted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED: fieldBuilder.buildEnumField('Posted', NoYes, true),
        /**
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link originalText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_TEXT: fieldBuilder.buildEdmTypeField(
          'OriginalText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link correctedText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_TEXT: fieldBuilder.buildEdmTypeField(
          'CorrectedText',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendCorrectionNotes)
      };
    }

    return this._schema;
  }
}
