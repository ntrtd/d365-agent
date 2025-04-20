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
import type { ExpMobileUnattachedDocumentsApi } from './ExpMobileUnattachedDocumentsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ExpMobileUnattachedDocuments" of service "d365_metadata".
 */
export class ExpMobileUnattachedDocuments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExpMobileUnattachedDocumentsType<T>
{
  /**
   * Technical entity name for ExpMobileUnattachedDocuments.
   */
  static override _entityName = 'ExpMobileUnattachedDocuments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpMobileUnattachedDocuments entity.
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
   * Value Rec Id.
   */
  declare valueRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Docu Ref Table Name.
   * @nullable
   */
  declare docuRefTableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Author.
   */
  declare author: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Document Created Date Time.
   */
  declare documentCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Ref Table Id.
   */
  declare refTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Receipt Valid.
   * @nullable
   */
  declare isReceiptValid?: NoYes | null;
  /**
   * Is Receipt Attached.
   * @nullable
   */
  declare isReceiptAttached?: NoYes | null;
  /**
   * Actual Company Id.
   * @nullable
   */
  declare actualCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creating Worker.
   */
  declare creatingWorker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Default Attachment.
   * @nullable
   */
  declare defaultAttachment?: NoYes | null;
  /**
   * Exp Trans Number.
   * @nullable
   */
  declare expTransNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * File Extension.
   * @nullable
   */
  declare fileExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Captured Document.
   * @nullable
   */
  declare capturedDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Justification.
   * @nullable
   */
  declare isJustification?: NoYes | null;
  /**
   * Ref Company Id.
   * @nullable
   */
  declare refCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Id.
   */
  declare documentId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Creating Date Time.
   */
  declare creatingDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Document Created By.
   * @nullable
   */
  declare documentCreatedBy?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ExpMobileUnattachedDocumentsApi<T>) {
    super(_entityApi);
  }
}

export interface ExpMobileUnattachedDocumentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  entRecId: DeserializedType<T, 'Edm.Int64'>;
  contentType?: DeserializedType<T, 'Edm.String'> | null;
  valueRecId: DeserializedType<T, 'Edm.Int64'>;
  docuRefTableName?: DeserializedType<T, 'Edm.String'> | null;
  author: DeserializedType<T, 'Edm.Int64'>;
  documentCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  refRecId: DeserializedType<T, 'Edm.Int64'>;
  fileName?: DeserializedType<T, 'Edm.String'> | null;
  refTableId: DeserializedType<T, 'Edm.Int32'>;
  isReceiptValid?: NoYes | null;
  isReceiptAttached?: NoYes | null;
  actualCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  creatingWorker: DeserializedType<T, 'Edm.Int64'>;
  defaultAttachment?: NoYes | null;
  expTransNumber?: DeserializedType<T, 'Edm.String'> | null;
  fileExtension?: DeserializedType<T, 'Edm.String'> | null;
  capturedDocument?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  isJustification?: NoYes | null;
  refCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  documentId: DeserializedType<T, 'Edm.Guid'>;
  creatingDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  documentCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
}
