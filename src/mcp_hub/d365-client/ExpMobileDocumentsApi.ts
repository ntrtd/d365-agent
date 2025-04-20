/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpMobileDocuments } from './ExpMobileDocuments';
import { ExpMobileDocumentsRequestBuilder } from './ExpMobileDocumentsRequestBuilder';
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
export class ExpMobileDocumentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExpMobileDocuments<DeSerializersT>, DeSerializersT>
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
  ): ExpMobileDocumentsApi<DeSerializersT> {
    return new ExpMobileDocumentsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExpMobileDocuments;

  requestBuilder(): ExpMobileDocumentsRequestBuilder<DeSerializersT> {
    return new ExpMobileDocumentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpMobileDocuments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExpMobileDocuments<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExpMobileDocuments<DeSerializersT>,
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
    typeof ExpMobileDocuments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpMobileDocuments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ENT_REC_ID: OrderableEdmTypeField<
      ExpMobileDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FILE_NAME: OrderableEdmTypeField<
      ExpMobileDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAPTURED_RECEIPT: OrderableEdmTypeField<
      ExpMobileDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ATTACHED_TO_EXPENSE: OrderableEdmTypeField<
      ExpMobileDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_ATTACHMENT: EnumField<
      ExpMobileDocuments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REF_COMPANY_ID: OrderableEdmTypeField<
      ExpMobileDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_REC_ID: OrderableEdmTypeField<
      ExpMobileDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_JUSTIFICATION: EnumField<
      ExpMobileDocuments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTUAL_COMPANY_ID: OrderableEdmTypeField<
      ExpMobileDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAPTURED_DOCUMENT: OrderableEdmTypeField<
      ExpMobileDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILE_EXTENSION: OrderableEdmTypeField<
      ExpMobileDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REF_REC_ID: OrderableEdmTypeField<
      ExpMobileDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CONTENT_TYPE: OrderableEdmTypeField<
      ExpMobileDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_BY_1: OrderableEdmTypeField<
      ExpMobileDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ExpMobileDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      ExpMobileDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHOR: OrderableEdmTypeField<
      ExpMobileDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_RECEIPT_ATTACHED: EnumField<
      ExpMobileDocuments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXP_TRANS_NUMBER: OrderableEdmTypeField<
      ExpMobileDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REF_TABLE_ID: OrderableEdmTypeField<
      ExpMobileDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREATED_DATE_TIME_1: OrderableEdmTypeField<
      ExpMobileDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DOCUMENT_ID: OrderableEdmTypeField<
      ExpMobileDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ExpMobileDocuments<DeSerializers>>;
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
         * Static representation of the {@link fileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_NAME: fieldBuilder.buildEdmTypeField(
          'FileName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link capturedReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPTURED_RECEIPT: fieldBuilder.buildEdmTypeField(
          'CapturedReceipt',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isAttachedToExpense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ATTACHED_TO_EXPENSE: fieldBuilder.buildEdmTypeField(
          'IsAttachedToExpense',
          'Edm.Int32',
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
         * Static representation of the {@link refCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'RefCompanyId',
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
         * Static representation of the {@link isJustification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_JUSTIFICATION: fieldBuilder.buildEnumField(
          'IsJustification',
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
         * Static representation of the {@link capturedDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPTURED_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'CapturedDocument',
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
         * Static representation of the {@link refRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'RefRecId',
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
         * Static representation of the {@link createdBy1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY_1: fieldBuilder.buildEdmTypeField(
          'CreatedBy1',
          'Edm.String',
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
        /**
         * Static representation of the {@link author} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHOR: fieldBuilder.buildEdmTypeField('Author', 'Edm.Int64', false),
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
         * Static representation of the {@link expTransNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXP_TRANS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExpTransNumber',
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
         * Static representation of the {@link createdDateTime1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_DATE_TIME_1: fieldBuilder.buildEdmTypeField(
          'CreatedDateTime1',
          'Edm.DateTimeOffset',
          false
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpMobileDocuments)
      };
    }

    return this._schema;
  }
}
