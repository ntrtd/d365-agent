/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MssLeaveRequestAttachments } from './MssLeaveRequestAttachments';
import { MssLeaveRequestAttachmentsRequestBuilder } from './MssLeaveRequestAttachmentsRequestBuilder';
import { LeaveRequestApprovalStatus } from './LeaveRequestApprovalStatus';
import { DocuRestriction } from './DocuRestriction';
import { DocuStorageProviderType } from './DocuStorageProviderType';
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
  EdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class MssLeaveRequestAttachmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<MssLeaveRequestAttachments<DeSerializersT>, DeSerializersT>
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
  ): MssLeaveRequestAttachmentsApi<DeSerializersT> {
    return new MssLeaveRequestAttachmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MssLeaveRequestAttachments;

  requestBuilder(): MssLeaveRequestAttachmentsRequestBuilder<DeSerializersT> {
    return new MssLeaveRequestAttachmentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MssLeaveRequestAttachments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MssLeaveRequestAttachments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MssLeaveRequestAttachments<DeSerializersT>,
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
    typeof MssLeaveRequestAttachments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MssLeaveRequestAttachments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DOCUMENT_ID: OrderableEdmTypeField<
      MssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    FILE_CONTENTS: EdmTypeField<
      MssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      MssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILE_TYPE: OrderableEdmTypeField<
      MssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      MssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      MssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      LeaveRequestApprovalStatus,
      true,
      true
    >;
    TYPE_ID: OrderableEdmTypeField<
      MssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      MssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESTRICTION: EnumField<
      MssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      DocuRestriction,
      true,
      true
    >;
    STORAGE_PROVIDER_ID: EnumField<
      MssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      DocuStorageProviderType,
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      MssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILE_NAME: OrderableEdmTypeField<
      MssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW_PERSONNEL_NUMBER: OrderableEdmTypeField<
      MssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_ATTACHMENT: EnumField<
      MssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FILE_PATH: OrderableEdmTypeField<
      MssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<MssLeaveRequestAttachments<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link fileContents} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_CONTENTS: fieldBuilder.buildEdmTypeField(
          'FileContents',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link requestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'RequestId',
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          LeaveRequestApprovalStatus,
          true
        ),
        /**
         * Static representation of the {@link typeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_ID: fieldBuilder.buildEdmTypeField('TypeId', 'Edm.String', true),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserId', 'Edm.String', true),
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
         * Static representation of the {@link storageProviderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_PROVIDER_ID: fieldBuilder.buildEnumField(
          'StorageProviderId',
          DocuStorageProviderType,
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
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
         * Static representation of the {@link workflowPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkflowPersonnelNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link filePath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_PATH: fieldBuilder.buildEdmTypeField(
          'FilePath',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MssLeaveRequestAttachments)
      };
    }

    return this._schema;
  }
}
