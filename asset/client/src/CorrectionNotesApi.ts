/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CorrectionNotes } from './CorrectionNotes';
import { CorrectionNotesRequestBuilder } from './CorrectionNotesRequestBuilder';
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
export class CorrectionNotesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CorrectionNotes<DeSerializersT>, DeSerializersT>
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
  ): CorrectionNotesApi<DeSerializersT> {
    return new CorrectionNotesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CorrectionNotes;

  requestBuilder(): CorrectionNotesRequestBuilder<DeSerializersT> {
    return new CorrectionNotesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CorrectionNotes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CorrectionNotes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CorrectionNotes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CorrectionNotes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CorrectionNotes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CorrectionNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CORRECTION_NOTE: OrderableEdmTypeField<
      CorrectionNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      CorrectionNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      CorrectionNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATE: OrderableEdmTypeField<
      CorrectionNotes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      CorrectionNotes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ORIGINAL_TEXT: OrderableEdmTypeField<
      CorrectionNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTED_TEXT: OrderableEdmTypeField<
      CorrectionNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTED: EnumField<
      CorrectionNotes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CorrectionNotes<DeSerializers>>;
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
         * Static representation of the {@link correctionNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_NOTE: fieldBuilder.buildEdmTypeField(
          'CorrectionNote',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEdmTypeField('Invoice', 'Edm.String', false),
        /**
         * Static representation of the {@link invoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAccount',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link documentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentDate',
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
         * Static representation of the {@link correctedText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_TEXT: fieldBuilder.buildEdmTypeField(
          'CorrectedText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link posted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED: fieldBuilder.buildEnumField('Posted', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CorrectionNotes)
      };
    }

    return this._schema;
  }
}
