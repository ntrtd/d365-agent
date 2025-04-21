/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CapturedInvoiceDocuments } from './CapturedInvoiceDocuments';
import { CapturedInvoiceDocumentsRequestBuilder } from './CapturedInvoiceDocumentsRequestBuilder';
import { CapturedInvoiceType } from './CapturedInvoiceType';
import { NoYes } from './NoYes';
import { CapturedInvoiceTransferState } from './CapturedInvoiceTransferState';
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
  EdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class CapturedInvoiceDocumentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CapturedInvoiceDocuments<DeSerializersT>, DeSerializersT>
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
  ): CapturedInvoiceDocumentsApi<DeSerializersT> {
    return new CapturedInvoiceDocumentsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CapturedInvoiceDocuments;

  requestBuilder(): CapturedInvoiceDocumentsRequestBuilder<DeSerializersT> {
    return new CapturedInvoiceDocumentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CapturedInvoiceDocuments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CapturedInvoiceDocuments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CapturedInvoiceDocuments<DeSerializersT>,
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
    typeof CapturedInvoiceDocuments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CapturedInvoiceDocuments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CapturedInvoiceDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CAPTURED_DOCUMENT_ID: OrderableEdmTypeField<
      CapturedInvoiceDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUERY_STRING: OrderableEdmTypeField<
      CapturedInvoiceDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAPTURED_INVOICE_ATTACHMENT_8: OrderableEdmTypeField<
      CapturedInvoiceDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTACHMENT_CONTENT_1: EdmTypeField<
      CapturedInvoiceDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    CAPTURED_INVOICE_ATTACHMENT_5: OrderableEdmTypeField<
      CapturedInvoiceDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAPTURED_INVOICE_ATTACHMENT_6: OrderableEdmTypeField<
      CapturedInvoiceDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_TYPE: EnumField<
      CapturedInvoiceDocuments<DeSerializers>,
      DeSerializersT,
      CapturedInvoiceType,
      true,
      true
    >;
    IS_SYNC: EnumField<
      CapturedInvoiceDocuments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CAPTURED_INVOICE_ATTACHMENT_10: OrderableEdmTypeField<
      CapturedInvoiceDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REF_REC_ID: OrderableEdmTypeField<
      CapturedInvoiceDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CAPTURED_INVOICE_ATTACHMENT_3: OrderableEdmTypeField<
      CapturedInvoiceDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAPTURED_INVOICE_ATTACHMENT_4: OrderableEdmTypeField<
      CapturedInvoiceDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAPTURED_INVOICE_ATTACHMENT_9: OrderableEdmTypeField<
      CapturedInvoiceDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAPTURED_INVOICE_ATTACHMENT_1: OrderableEdmTypeField<
      CapturedInvoiceDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFER_STATE: EnumField<
      CapturedInvoiceDocuments<DeSerializers>,
      DeSerializersT,
      CapturedInvoiceTransferState,
      true,
      true
    >;
    BATCH_TRANSFER_LOG: OrderableEdmTypeField<
      CapturedInvoiceDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAPTURED_INVOICE_ATTACHMENT_2: OrderableEdmTypeField<
      CapturedInvoiceDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAPTURED_INVOICE_ATTACHMENT_7: OrderableEdmTypeField<
      CapturedInvoiceDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REF_TABLE_ID: OrderableEdmTypeField<
      CapturedInvoiceDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CAPTURED_INVOICE_INFO: OrderableEdmTypeField<
      CapturedInvoiceDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CapturedInvoiceDocuments<DeSerializers>>;
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
         * Static representation of the {@link capturedDocumentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPTURED_DOCUMENT_ID: fieldBuilder.buildEdmTypeField(
          'CapturedDocumentId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link queryString} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUERY_STRING: fieldBuilder.buildEdmTypeField(
          'QueryString',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link capturedInvoiceAttachment8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPTURED_INVOICE_ATTACHMENT_8: fieldBuilder.buildEdmTypeField(
          'CapturedInvoiceAttachment8',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attachmentContent1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_CONTENT_1: fieldBuilder.buildEdmTypeField(
          'AttachmentContent1',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link capturedInvoiceAttachment5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPTURED_INVOICE_ATTACHMENT_5: fieldBuilder.buildEdmTypeField(
          'CapturedInvoiceAttachment5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link capturedInvoiceAttachment6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPTURED_INVOICE_ATTACHMENT_6: fieldBuilder.buildEdmTypeField(
          'CapturedInvoiceAttachment6',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TYPE: fieldBuilder.buildEnumField(
          'InvoiceType',
          CapturedInvoiceType,
          true
        ),
        /**
         * Static representation of the {@link isSync} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SYNC: fieldBuilder.buildEnumField('IsSync', NoYes, true),
        /**
         * Static representation of the {@link capturedInvoiceAttachment10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPTURED_INVOICE_ATTACHMENT_10: fieldBuilder.buildEdmTypeField(
          'CapturedInvoiceAttachment10',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link refRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'RefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link capturedInvoiceAttachment3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPTURED_INVOICE_ATTACHMENT_3: fieldBuilder.buildEdmTypeField(
          'CapturedInvoiceAttachment3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link capturedInvoiceAttachment4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPTURED_INVOICE_ATTACHMENT_4: fieldBuilder.buildEdmTypeField(
          'CapturedInvoiceAttachment4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link capturedInvoiceAttachment9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPTURED_INVOICE_ATTACHMENT_9: fieldBuilder.buildEdmTypeField(
          'CapturedInvoiceAttachment9',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link capturedInvoiceAttachment1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPTURED_INVOICE_ATTACHMENT_1: fieldBuilder.buildEdmTypeField(
          'CapturedInvoiceAttachment1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transferState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_STATE: fieldBuilder.buildEnumField(
          'TransferState',
          CapturedInvoiceTransferState,
          true
        ),
        /**
         * Static representation of the {@link batchTransferLog} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_TRANSFER_LOG: fieldBuilder.buildEdmTypeField(
          'BatchTransferLog',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link capturedInvoiceAttachment2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPTURED_INVOICE_ATTACHMENT_2: fieldBuilder.buildEdmTypeField(
          'CapturedInvoiceAttachment2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link capturedInvoiceAttachment7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPTURED_INVOICE_ATTACHMENT_7: fieldBuilder.buildEdmTypeField(
          'CapturedInvoiceAttachment7',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link refTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'RefTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link capturedInvoiceInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPTURED_INVOICE_INFO: fieldBuilder.buildEdmTypeField(
          'CapturedInvoiceInfo',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CapturedInvoiceDocuments)
      };
    }

    return this._schema;
  }
}
