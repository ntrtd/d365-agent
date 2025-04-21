/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InboundShipmentOrderDocumentAttachmentMessages } from './InboundShipmentOrderDocumentAttachmentMessages';
import { InboundShipmentOrderDocumentAttachmentMessagesRequestBuilder } from './InboundShipmentOrderDocumentAttachmentMessagesRequestBuilder';
import { InboundShipmentOrderMessagesApi } from './InboundShipmentOrderMessagesApi';
import { DocuRestriction } from './DocuRestriction';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class InboundShipmentOrderDocumentAttachmentMessagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      InboundShipmentOrderDocumentAttachmentMessages<DeSerializersT>,
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
  ): InboundShipmentOrderDocumentAttachmentMessagesApi<DeSerializersT> {
    return new InboundShipmentOrderDocumentAttachmentMessagesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link inboundShipmentOrderMessage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_MESSAGE: OneToOneLink<
      InboundShipmentOrderDocumentAttachmentMessages<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderMessagesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [InboundShipmentOrderMessagesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      INBOUND_SHIPMENT_ORDER_MESSAGE: new OneToOneLink(
        'InboundShipmentOrderMessage',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = InboundShipmentOrderDocumentAttachmentMessages;

  requestBuilder(): InboundShipmentOrderDocumentAttachmentMessagesRequestBuilder<DeSerializersT> {
    return new InboundShipmentOrderDocumentAttachmentMessagesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InboundShipmentOrderDocumentAttachmentMessages<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InboundShipmentOrderDocumentAttachmentMessages<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InboundShipmentOrderDocumentAttachmentMessages<DeSerializersT>,
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
    typeof InboundShipmentOrderDocumentAttachmentMessages,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InboundShipmentOrderDocumentAttachmentMessages,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InboundShipmentOrderDocumentAttachmentMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOCUMENT_ID: OrderableEdmTypeField<
      InboundShipmentOrderDocumentAttachmentMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    SOURCE_SYSTEM_ID: OrderableEdmTypeField<
      InboundShipmentOrderDocumentAttachmentMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILE_NAME: OrderableEdmTypeField<
      InboundShipmentOrderDocumentAttachmentMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTACHMENT: EdmTypeField<
      InboundShipmentOrderDocumentAttachmentMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    DOCUMENT_ATTACHMENT_TYPE_CODE: OrderableEdmTypeField<
      InboundShipmentOrderDocumentAttachmentMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCESS_RESTRICTION: EnumField<
      InboundShipmentOrderDocumentAttachmentMessages<DeSerializers>,
      DeSerializersT,
      DocuRestriction,
      true,
      true
    >;
    FILE_TYPE: OrderableEdmTypeField<
      InboundShipmentOrderDocumentAttachmentMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTACHMENT_DESCRIPTION: OrderableEdmTypeField<
      InboundShipmentOrderDocumentAttachmentMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      InboundShipmentOrderDocumentAttachmentMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT_ATTACHMENT: EnumField<
      InboundShipmentOrderDocumentAttachmentMessages<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MESSAGE_ID: OrderableEdmTypeField<
      InboundShipmentOrderDocumentAttachmentMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderDocumentAttachmentMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inboundShipmentOrderMessage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_MESSAGE: OneToOneLink<
      InboundShipmentOrderDocumentAttachmentMessages<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderMessagesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      InboundShipmentOrderDocumentAttachmentMessages<DeSerializers>
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
         * Static representation of the {@link sourceSystemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ID: fieldBuilder.buildEdmTypeField(
          'SourceSystemId',
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
         * Static representation of the {@link isDefaultAttachment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_ATTACHMENT: fieldBuilder.buildEnumField(
          'IsDefaultAttachment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link messageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_ID: fieldBuilder.buildEdmTypeField(
          'MessageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          InboundShipmentOrderDocumentAttachmentMessages
        )
      };
    }

    return this._schema;
  }
}
