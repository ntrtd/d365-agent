/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpMobileUnattachedDocuments } from './ExpMobileUnattachedDocuments';
import { ExpMobileUnattachedDocumentsRequestBuilder } from './ExpMobileUnattachedDocumentsRequestBuilder';
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
export class ExpMobileUnattachedDocumentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ExpMobileUnattachedDocuments<DeSerializersT>, DeSerializersT>
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
  ): ExpMobileUnattachedDocumentsApi<DeSerializersT> {
    return new ExpMobileUnattachedDocumentsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExpMobileUnattachedDocuments;

  requestBuilder(): ExpMobileUnattachedDocumentsRequestBuilder<DeSerializersT> {
    return new ExpMobileUnattachedDocumentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpMobileUnattachedDocuments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExpMobileUnattachedDocuments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExpMobileUnattachedDocuments<DeSerializersT>,
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
    typeof ExpMobileUnattachedDocuments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpMobileUnattachedDocuments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ENT_REC_ID: OrderableEdmTypeField<
      ExpMobileUnattachedDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CONTENT_TYPE: OrderableEdmTypeField<
      ExpMobileUnattachedDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_REC_ID: OrderableEdmTypeField<
      ExpMobileUnattachedDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DOCU_REF_TABLE_NAME: OrderableEdmTypeField<
      ExpMobileUnattachedDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHOR: OrderableEdmTypeField<
      ExpMobileUnattachedDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DOCUMENT_CREATED_DATE_TIME: OrderableEdmTypeField<
      ExpMobileUnattachedDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REF_REC_ID: OrderableEdmTypeField<
      ExpMobileUnattachedDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FILE_NAME: OrderableEdmTypeField<
      ExpMobileUnattachedDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REF_TABLE_ID: OrderableEdmTypeField<
      ExpMobileUnattachedDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_RECEIPT_VALID: EnumField<
      ExpMobileUnattachedDocuments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_RECEIPT_ATTACHED: EnumField<
      ExpMobileUnattachedDocuments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTUAL_COMPANY_ID: OrderableEdmTypeField<
      ExpMobileUnattachedDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATING_WORKER: OrderableEdmTypeField<
      ExpMobileUnattachedDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DEFAULT_ATTACHMENT: EnumField<
      ExpMobileUnattachedDocuments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXP_TRANS_NUMBER: OrderableEdmTypeField<
      ExpMobileUnattachedDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILE_EXTENSION: OrderableEdmTypeField<
      ExpMobileUnattachedDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAPTURED_DOCUMENT: OrderableEdmTypeField<
      ExpMobileUnattachedDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      ExpMobileUnattachedDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_JUSTIFICATION: EnumField<
      ExpMobileUnattachedDocuments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REF_COMPANY_ID: OrderableEdmTypeField<
      ExpMobileUnattachedDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_ID: OrderableEdmTypeField<
      ExpMobileUnattachedDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    CREATING_DATE_TIME: OrderableEdmTypeField<
      ExpMobileUnattachedDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DOCUMENT_CREATED_BY: OrderableEdmTypeField<
      ExpMobileUnattachedDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ExpMobileUnattachedDocuments<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link entRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENT_REC_ID: fieldBuilder.buildEdmTypeField(
          'EntRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link contentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTENT_TYPE: fieldBuilder.buildEdmTypeField(
          'ContentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valueRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_REC_ID: fieldBuilder.buildEdmTypeField(
          'ValueRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link docuRefTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCU_REF_TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'DocuRefTableName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link author} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHOR: fieldBuilder.buildEdmTypeField('Author', 'Edm.Int64', false),
        /**
         * Static representation of the {@link documentCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'DocumentCreatedDateTime',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link fileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_NAME: fieldBuilder.buildEdmTypeField(
          'FileName',
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
         * Static representation of the {@link isReceiptValid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RECEIPT_VALID: fieldBuilder.buildEnumField(
          'IsReceiptValid',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isReceiptAttached} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RECEIPT_ATTACHED: fieldBuilder.buildEnumField(
          'IsReceiptAttached',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link actualCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'ActualCompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creatingWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATING_WORKER: fieldBuilder.buildEdmTypeField(
          'CreatingWorker',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link defaultAttachment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_ATTACHMENT: fieldBuilder.buildEnumField(
          'DefaultAttachment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link expTransNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXP_TRANS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExpTransNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fileExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_EXTENSION: fieldBuilder.buildEdmTypeField(
          'FileExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link capturedDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPTURED_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'CapturedDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link isJustification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_JUSTIFICATION: fieldBuilder.buildEnumField(
          'IsJustification',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link refCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'RefCompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_ID: fieldBuilder.buildEdmTypeField(
          'DocumentId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link creatingDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATING_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'CreatingDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link documentCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'DocumentCreatedBy',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpMobileUnattachedDocuments)
      };
    }

    return this._schema;
  }
}
