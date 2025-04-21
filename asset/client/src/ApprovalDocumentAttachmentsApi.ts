/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApprovalDocumentAttachments } from './ApprovalDocumentAttachments';
import { ApprovalDocumentAttachmentsRequestBuilder } from './ApprovalDocumentAttachmentsRequestBuilder';
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
export class ApprovalDocumentAttachmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ApprovalDocumentAttachments<DeSerializersT>, DeSerializersT>
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
  ): ApprovalDocumentAttachmentsApi<DeSerializersT> {
    return new ApprovalDocumentAttachmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ApprovalDocumentAttachments;

  requestBuilder(): ApprovalDocumentAttachmentsRequestBuilder<DeSerializersT> {
    return new ApprovalDocumentAttachmentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ApprovalDocumentAttachments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ApprovalDocumentAttachments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ApprovalDocumentAttachments<DeSerializersT>,
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
    typeof ApprovalDocumentAttachments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ApprovalDocumentAttachments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    WORK_ITEM_REC_ID: OrderableEdmTypeField<
      ApprovalDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ATTACHMENT_REC_ID: OrderableEdmTypeField<
      ApprovalDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ATTACHED_NOTES: OrderableEdmTypeField<
      ApprovalDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTACHMENT_NAME: OrderableEdmTypeField<
      ApprovalDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVAL_USER: OrderableEdmTypeField<
      ApprovalDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ApprovalDocumentAttachments<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link workItemRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ITEM_REC_ID: fieldBuilder.buildEdmTypeField(
          'WorkItemRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link attachmentRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_REC_ID: fieldBuilder.buildEdmTypeField(
          'AttachmentRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link attachedNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHED_NOTES: fieldBuilder.buildEdmTypeField(
          'AttachedNotes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attachmentName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_NAME: fieldBuilder.buildEdmTypeField(
          'AttachmentName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link approvalUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_USER: fieldBuilder.buildEdmTypeField(
          'ApprovalUser',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ApprovalDocumentAttachments)
      };
    }

    return this._schema;
  }
}
