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
import type { ExpMobileAttachedDocumentsApi } from './ExpMobileAttachedDocumentsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ExpMobileAttachedDocuments" of service "d365_metadata".
 */
export class ExpMobileAttachedDocuments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExpMobileAttachedDocumentsType<T>
{
  /**
   * Technical entity name for ExpMobileAttachedDocuments.
   */
  static override _entityName = 'ExpMobileAttachedDocuments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpMobileAttachedDocuments entity.
   */
  static _keys = ['EntRecId'];
  /**
   * Ent Rec Id.
   */
  declare entRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Content Type.
   * @nullable
   */
  declare contentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Author.
   */
  declare author: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Exp Trans Number.
   * @nullable
   */
  declare expTransNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Justification.
   * @nullable
   */
  declare isJustification?: NoYes | null;
  /**
   * Captured Document.
   * @nullable
   */
  declare capturedDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creating Worker.
   */
  declare creatingWorker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Document Id.
   */
  declare documentId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Document Created Date Time.
   */
  declare documentCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Creating Date Time.
   */
  declare creatingDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ref Table Id.
   */
  declare refTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * File Extension.
   * @nullable
   */
  declare fileExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Actual Company Id.
   * @nullable
   */
  declare actualCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Docu Ref Table Name.
   * @nullable
   */
  declare docuRefTableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Company Id.
   * @nullable
   */
  declare refCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Rec Id.
   */
  declare refRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * File Name.
   * @nullable
   */
  declare fileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Receipt Attached.
   * @nullable
   */
  declare isReceiptAttached?: NoYes | null;
  /**
   * Is Receipt Valid.
   * @nullable
   */
  declare isReceiptValid?: NoYes | null;
  /**
   * Default Attachment.
   * @nullable
   */
  declare defaultAttachment?: NoYes | null;
  /**
   * Value Rec Id.
   */
  declare valueRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Document Created By.
   * @nullable
   */
  declare documentCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Captured Receipt.
   * @nullable
   */
  declare capturedReceipt?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ExpMobileAttachedDocumentsApi<T>) {
    super(_entityApi);
  }
}

export interface ExpMobileAttachedDocumentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  entRecId: DeserializedType<T, 'Edm.Int64'>;
  contentType?: DeserializedType<T, 'Edm.String'> | null;
  author: DeserializedType<T, 'Edm.Int64'>;
  expTransNumber?: DeserializedType<T, 'Edm.String'> | null;
  isJustification?: NoYes | null;
  capturedDocument?: DeserializedType<T, 'Edm.String'> | null;
  creatingWorker: DeserializedType<T, 'Edm.Int64'>;
  documentId: DeserializedType<T, 'Edm.Guid'>;
  documentCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  creatingDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  refTableId: DeserializedType<T, 'Edm.Int32'>;
  fileExtension?: DeserializedType<T, 'Edm.String'> | null;
  actualCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  docuRefTableName?: DeserializedType<T, 'Edm.String'> | null;
  refCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  refRecId: DeserializedType<T, 'Edm.Int64'>;
  fileName?: DeserializedType<T, 'Edm.String'> | null;
  isReceiptAttached?: NoYes | null;
  isReceiptValid?: NoYes | null;
  defaultAttachment?: NoYes | null;
  valueRecId: DeserializedType<T, 'Edm.Int64'>;
  documentCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  capturedReceipt?: DeserializedType<T, 'Edm.String'> | null;
}
