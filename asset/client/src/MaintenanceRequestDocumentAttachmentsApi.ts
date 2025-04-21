/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaintenanceRequestDocumentAttachments } from './MaintenanceRequestDocumentAttachments';
import { MaintenanceRequestDocumentAttachmentsRequestBuilder } from './MaintenanceRequestDocumentAttachmentsRequestBuilder';
import { DocumentTypesApi } from './DocumentTypesApi';
import { AssetMaintenanceRequestsV2Api } from './AssetMaintenanceRequestsV2Api';
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
  EdmTypeField,
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class MaintenanceRequestDocumentAttachmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      MaintenanceRequestDocumentAttachments<DeSerializersT>,
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
  ): MaintenanceRequestDocumentAttachmentsApi<DeSerializersT> {
    return new MaintenanceRequestDocumentAttachmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link documentAttachmentType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_ATTACHMENT_TYPE: OneToOneLink<
      MaintenanceRequestDocumentAttachments<DeSerializersT>,
      DeSerializersT,
      DocumentTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link documentAttachment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_ATTACHMENT: OneToOneLink<
      MaintenanceRequestDocumentAttachments<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DocumentTypesApi<DeSerializersT>,
      AssetMaintenanceRequestsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DOCUMENT_ATTACHMENT_TYPE: new OneToOneLink(
        'DocumentAttachmentType',
        this,
        linkedApis[0]
      ),
      DOCUMENT_ATTACHMENT: new OneToOneLink(
        'DocumentAttachment',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = MaintenanceRequestDocumentAttachments;

  requestBuilder(): MaintenanceRequestDocumentAttachmentsRequestBuilder<DeSerializersT> {
    return new MaintenanceRequestDocumentAttachmentsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MaintenanceRequestDocumentAttachments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MaintenanceRequestDocumentAttachments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaintenanceRequestDocumentAttachments<DeSerializersT>,
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
    typeof MaintenanceRequestDocumentAttachments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaintenanceRequestDocumentAttachments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MaintenanceRequestDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      MaintenanceRequestDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOCUMENT_ATTACHMENT_TYPE_CODE: OrderableEdmTypeField<
      MaintenanceRequestDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTACHMENT_DESCRIPTION: OrderableEdmTypeField<
      MaintenanceRequestDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTACHED_DATE_TIME: OrderableEdmTypeField<
      MaintenanceRequestDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ATTACHMENT: EdmTypeField<
      MaintenanceRequestDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    ACCESS_RESTRICTION: EnumField<
      MaintenanceRequestDocumentAttachments<DeSerializers>,
      DeSerializersT,
      DocuRestriction,
      true,
      true
    >;
    FILE_TYPE: OrderableEdmTypeField<
      MaintenanceRequestDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_FILE_NAME: OrderableEdmTypeField<
      MaintenanceRequestDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTACHING_USER_ID: OrderableEdmTypeField<
      MaintenanceRequestDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILE_LOCATION: OrderableEdmTypeField<
      MaintenanceRequestDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      MaintenanceRequestDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_ATTACHMENT_TYPE_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      MaintenanceRequestDocumentAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link documentAttachmentType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_ATTACHMENT_TYPE: OneToOneLink<
      MaintenanceRequestDocumentAttachments<DeSerializersT>,
      DeSerializersT,
      DocumentTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link documentAttachment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_ATTACHMENT: OneToOneLink<
      MaintenanceRequestDocumentAttachments<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MaintenanceRequestDocumentAttachments<DeSerializers>>;
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
         * Static representation of the {@link requestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'RequestId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link documentAttachmentTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_ATTACHMENT_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'DocumentAttachmentTypeCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link attachmentDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AttachmentDescription',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link attachedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'AttachedDateTime',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link fileType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_TYPE: fieldBuilder.buildEdmTypeField(
          'FileType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originalFileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_FILE_NAME: fieldBuilder.buildEdmTypeField(
          'OriginalFileName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attachingUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHING_USER_ID: fieldBuilder.buildEdmTypeField(
          'AttachingUserId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fileLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_LOCATION: fieldBuilder.buildEdmTypeField(
          'FileLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link documentAttachmentTypeLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_ATTACHMENT_TYPE_LEGAL_ENTITY_ID:
          fieldBuilder.buildEdmTypeField(
            'DocumentAttachmentTypeLegalEntityId',
            'Edm.String',
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MaintenanceRequestDocumentAttachments)
      };
    }

    return this._schema;
  }
}
