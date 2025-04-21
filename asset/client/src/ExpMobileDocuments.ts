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
import type { ExpMobileDocumentsApi } from './ExpMobileDocumentsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ExpMobileDocuments" of service "d365_metadata".
 */
export class ExpMobileDocuments<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExpMobileDocumentsType<T>
{
  /**
   * Technical entity name for ExpMobileDocuments.
   */
  static override _entityName = 'ExpMobileDocuments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpMobileDocuments entity.
   */
  static _keys = ['EntRecId'];
  /**
   * Ent Rec Id.
   */
  declare entRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * File Name.
   * @nullable
   */
  declare fileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Captured Receipt.
   * @nullable
   */
  declare capturedReceipt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Attached To Expense.
   */
  declare isAttachedToExpense: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default Attachment.
   * @nullable
   */
  declare defaultAttachment?: NoYes | null;
  /**
   * Ref Company Id.
   * @nullable
   */
  declare refCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Value Rec Id.
   */
  declare valueRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Justification.
   * @nullable
   */
  declare isJustification?: NoYes | null;
  /**
   * Actual Company Id.
   * @nullable
   */
  declare actualCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Captured Document.
   * @nullable
   */
  declare capturedDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * File Extension.
   * @nullable
   */
  declare fileExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Rec Id.
   */
  declare refRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Content Type.
   * @nullable
   */
  declare contentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created By 1.
   * @nullable
   */
  declare createdBy1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Author.
   */
  declare author: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Receipt Attached.
   * @nullable
   */
  declare isReceiptAttached?: NoYes | null;
  /**
   * Exp Trans Number.
   * @nullable
   */
  declare expTransNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Table Id.
   */
  declare refTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Created Date Time 1.
   */
  declare createdDateTime1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Document Id.
   */
  declare documentId: DeserializedType<T, 'Edm.Guid'>;

  constructor(_entityApi: ExpMobileDocumentsApi<T>) {
    super(_entityApi);
  }
}

export interface ExpMobileDocumentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  entRecId: DeserializedType<T, 'Edm.Int64'>;
  fileName?: DeserializedType<T, 'Edm.String'> | null;
  capturedReceipt?: DeserializedType<T, 'Edm.String'> | null;
  isAttachedToExpense: DeserializedType<T, 'Edm.Int32'>;
  defaultAttachment?: NoYes | null;
  refCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  valueRecId: DeserializedType<T, 'Edm.Int64'>;
  isJustification?: NoYes | null;
  actualCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  capturedDocument?: DeserializedType<T, 'Edm.String'> | null;
  fileExtension?: DeserializedType<T, 'Edm.String'> | null;
  refRecId: DeserializedType<T, 'Edm.Int64'>;
  contentType?: DeserializedType<T, 'Edm.String'> | null;
  createdBy1?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  author: DeserializedType<T, 'Edm.Int64'>;
  isReceiptAttached?: NoYes | null;
  expTransNumber?: DeserializedType<T, 'Edm.String'> | null;
  refTableId: DeserializedType<T, 'Edm.Int32'>;
  createdDateTime1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  documentId: DeserializedType<T, 'Edm.Guid'>;
}
