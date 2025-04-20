/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { InboundShipmentOrderDocumentAttachmentMessagesApi } from './InboundShipmentOrderDocumentAttachmentMessagesApi';
import { DocuRestriction } from './DocuRestriction';
import { NoYes } from './NoYes';
import {
  InboundShipmentOrderMessages,
  InboundShipmentOrderMessagesType
} from './InboundShipmentOrderMessages';

/**
 * This class represents the entity "InboundShipmentOrderDocumentAttachmentMessages" of service "d365_metadata".
 */
export class InboundShipmentOrderDocumentAttachmentMessages<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InboundShipmentOrderDocumentAttachmentMessagesType<T>
{
  /**
   * Technical entity name for InboundShipmentOrderDocumentAttachmentMessages.
   */
  static override _entityName =
    'InboundShipmentOrderDocumentAttachmentMessages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InboundShipmentOrderDocumentAttachmentMessages entity.
   */
  static _keys = ['dataAreaId', 'DocumentId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Id.
   */
  declare documentId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Source System Id.
   * @nullable
   */
  declare sourceSystemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * File Name.
   * @nullable
   */
  declare fileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attachment.
   * @nullable
   */
  declare attachment?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Document Attachment Type Code.
   * @nullable
   */
  declare documentAttachmentTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Access Restriction.
   * @nullable
   */
  declare accessRestriction?: DocuRestriction | null;
  /**
   * File Type.
   * @nullable
   */
  declare fileType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attachment Description.
   * @nullable
   */
  declare attachmentDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Default Attachment.
   * @nullable
   */
  declare isDefaultAttachment?: NoYes | null;
  /**
   * Message Id.
   * @nullable
   */
  declare messageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Number.
   * @nullable
   */
  declare orderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link InboundShipmentOrderMessages} entity.
   */
  declare inboundShipmentOrderMessage?: InboundShipmentOrderMessages<T> | null;

  constructor(
    _entityApi: InboundShipmentOrderDocumentAttachmentMessagesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface InboundShipmentOrderDocumentAttachmentMessagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentId: DeserializedType<T, 'Edm.Guid'>;
  sourceSystemId?: DeserializedType<T, 'Edm.String'> | null;
  fileName?: DeserializedType<T, 'Edm.String'> | null;
  attachment?: DeserializedType<T, 'Edm.Binary'> | null;
  documentAttachmentTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  accessRestriction?: DocuRestriction | null;
  fileType?: DeserializedType<T, 'Edm.String'> | null;
  attachmentDescription?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultAttachment?: NoYes | null;
  messageId?: DeserializedType<T, 'Edm.String'> | null;
  orderNumber?: DeserializedType<T, 'Edm.String'> | null;
  inboundShipmentOrderMessage?: InboundShipmentOrderMessagesType<T> | null;
}
