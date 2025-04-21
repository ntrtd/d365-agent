/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PublishedRequestForQuotationHeaderDocumentAttachments } from './PublishedRequestForQuotationHeaderDocumentAttachments';
import { PublishedRequestForQuotationHeaderDocumentAttachmentsRequestBuilder } from './PublishedRequestForQuotationHeaderDocumentAttachmentsRequestBuilder';
import { NoYes } from './NoYes';
import { DocuRestriction } from './DocuRestriction';
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
  EnumField,
  EdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class PublishedRequestForQuotationHeaderDocumentAttachmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      PublishedRequestForQuotationHeaderDocumentAttachments<DeSerializersT>,
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
  ): PublishedRequestForQuotationHeaderDocumentAttachmentsApi<DeSerializersT> {
    return new PublishedRequestForQuotationHeaderDocumentAttachmentsApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PublishedRequestForQuotationHeaderDocumentAttachments;

  requestBuilder(): PublishedRequestForQuotationHeaderDocumentAttachmentsRequestBuilder<DeSerializersT> {
    return new PublishedRequestForQuotationHeaderDocumentAttachmentsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PublishedRequestForQuotationHeaderDocumentAttachments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PublishedRequestForQuotationHeaderDocumentAttachments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PublishedRequestForQuotationHeaderDocumentAttachments<DeSerializersT>,
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
    typeof PublishedRequestForQuotationHeaderDocumentAttachments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PublishedRequestForQuotationHeaderDocumentAttachments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PublishedRequestForQuotationHeaderDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOCUMENT_ID: OrderableEdmTypeField<
      PublishedRequestForQuotationHeaderDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PUBLISHED_RFQ_CASE_NUMBER: OrderableEdmTypeField<
      PublishedRequestForQuotationHeaderDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILE_TYPE: OrderableEdmTypeField<
      PublishedRequestForQuotationHeaderDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT_ATTACHMENT: EnumField<
      PublishedRequestForQuotationHeaderDocumentAttachments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCESS_RESTRICTION: EnumField<
      PublishedRequestForQuotationHeaderDocumentAttachments<DeSerializers>,
      DeSerializersT,
      DocuRestriction,
      true,
      true
    >;
    ATTACHMENT_DESCRIPTION: OrderableEdmTypeField<
      PublishedRequestForQuotationHeaderDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      PublishedRequestForQuotationHeaderDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_ATTACHMENT_TYPE_CODE: OrderableEdmTypeField<
      PublishedRequestForQuotationHeaderDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILE_NAME: OrderableEdmTypeField<
      PublishedRequestForQuotationHeaderDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTACHMENT: EdmTypeField<
      PublishedRequestForQuotationHeaderDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      PublishedRequestForQuotationHeaderDocumentAttachments<DeSerializers>
    >;
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
         * Static representation of the {@link documentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_ID: fieldBuilder.buildEdmTypeField(
          'DocumentId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link publishedRfqCaseNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PUBLISHED_RFQ_CASE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PublishedRFQCaseNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fileType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_TYPE: fieldBuilder.buildEdmTypeField(
          'FileType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDefaultAttachment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_ATTACHMENT: fieldBuilder.buildEnumField(
          'IsDefaultAttachment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link accessRestriction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCESS_RESTRICTION: fieldBuilder.buildEnumField(
          'AccessRestriction',
          DocuRestriction,
          true
        ),
        /**
         * Static representation of the {@link attachmentDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AttachmentDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link documentAttachmentTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_ATTACHMENT_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'DocumentAttachmentTypeCode',
          'Edm.String',
          true
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
         * Static representation of the {@link attachment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT: fieldBuilder.buildEdmTypeField(
          'Attachment',
          'Edm.Binary',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          PublishedRequestForQuotationHeaderDocumentAttachments
        )
      };
    }

    return this._schema;
  }
}
