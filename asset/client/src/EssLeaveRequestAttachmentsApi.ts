/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EssLeaveRequestAttachments } from './EssLeaveRequestAttachments';
import { EssLeaveRequestAttachmentsRequestBuilder } from './EssLeaveRequestAttachmentsRequestBuilder';
import { NoYes } from './NoYes';
import { DocuRestriction } from './DocuRestriction';
import { DocuStorageProviderType } from './DocuStorageProviderType';
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
export class EssLeaveRequestAttachmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EssLeaveRequestAttachments<DeSerializersT>, DeSerializersT>
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
  ): EssLeaveRequestAttachmentsApi<DeSerializersT> {
    return new EssLeaveRequestAttachmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EssLeaveRequestAttachments;

  requestBuilder(): EssLeaveRequestAttachmentsRequestBuilder<DeSerializersT> {
    return new EssLeaveRequestAttachmentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EssLeaveRequestAttachments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EssLeaveRequestAttachments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EssLeaveRequestAttachments<DeSerializersT>,
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
    typeof EssLeaveRequestAttachments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EssLeaveRequestAttachments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOCUMENT_ID: OrderableEdmTypeField<
      EssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    FILE_NAME: OrderableEdmTypeField<
      EssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_ATTACHMENT: EnumField<
      EssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      EssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESTRICTION: EnumField<
      EssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      DocuRestriction,
      true,
      true
    >;
    FILE_TYPE: OrderableEdmTypeField<
      EssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILE_PATH: OrderableEdmTypeField<
      EssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORAGE_PROVIDER_ID: EnumField<
      EssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      DocuStorageProviderType,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      EssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      EssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILE_CONTENTS: EdmTypeField<
      EssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    TYPE_ID: OrderableEdmTypeField<
      EssLeaveRequestAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<EssLeaveRequestAttachments<DeSerializers>>;
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
         * Static representation of the {@link fileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_NAME: fieldBuilder.buildEdmTypeField(
          'FileName',
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
         * Static representation of the {@link requestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'RequestId',
          'Edm.String',
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
         * Static representation of the {@link fileType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_TYPE: fieldBuilder.buildEdmTypeField(
          'FileType',
          'Edm.String',
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
         * Static representation of the {@link fileContents} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_CONTENTS: fieldBuilder.buildEdmTypeField(
          'FileContents',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link typeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_ID: fieldBuilder.buildEdmTypeField('TypeId', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EssLeaveRequestAttachments)
      };
    }

    return this._schema;
  }
}
