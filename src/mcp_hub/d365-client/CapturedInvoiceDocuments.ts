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
import type { CapturedInvoiceDocumentsApi } from './CapturedInvoiceDocumentsApi';
import { CapturedInvoiceType } from './CapturedInvoiceType';
import { NoYes } from './NoYes';
import { CapturedInvoiceTransferState } from './CapturedInvoiceTransferState';

/**
 * This class represents the entity "CapturedInvoiceDocuments" of service "d365_metadata".
 */
export class CapturedInvoiceDocuments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CapturedInvoiceDocumentsType<T>
{
  /**
   * Technical entity name for CapturedInvoiceDocuments.
   */
  static override _entityName = 'CapturedInvoiceDocuments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CapturedInvoiceDocuments entity.
   */
  static _keys = ['dataAreaId', 'CapturedDocumentId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Captured Document Id.
   */
  declare capturedDocumentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Query String.
   * @nullable
   */
  declare queryString?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Captured Invoice Attachment 8.
   * @nullable
   */
  declare capturedInvoiceAttachment8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attachment Content 1.
   * @nullable
   */
  declare attachmentContent1?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Captured Invoice Attachment 5.
   * @nullable
   */
  declare capturedInvoiceAttachment5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Captured Invoice Attachment 6.
   * @nullable
   */
  declare capturedInvoiceAttachment6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Type.
   * @nullable
   */
  declare invoiceType?: CapturedInvoiceType | null;
  /**
   * Is Sync.
   * @nullable
   */
  declare isSync?: NoYes | null;
  /**
   * Captured Invoice Attachment 10.
   * @nullable
   */
  declare capturedInvoiceAttachment10?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ref Rec Id.
   */
  declare refRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Captured Invoice Attachment 3.
   * @nullable
   */
  declare capturedInvoiceAttachment3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Captured Invoice Attachment 4.
   * @nullable
   */
  declare capturedInvoiceAttachment4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Captured Invoice Attachment 9.
   * @nullable
   */
  declare capturedInvoiceAttachment9?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Captured Invoice Attachment 1.
   * @nullable
   */
  declare capturedInvoiceAttachment1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfer State.
   * @nullable
   */
  declare transferState?: CapturedInvoiceTransferState | null;
  /**
   * Batch Transfer Log.
   * @nullable
   */
  declare batchTransferLog?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Captured Invoice Attachment 2.
   * @nullable
   */
  declare capturedInvoiceAttachment2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Captured Invoice Attachment 7.
   * @nullable
   */
  declare capturedInvoiceAttachment7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Table Id.
   */
  declare refTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Captured Invoice Info.
   * @nullable
   */
  declare capturedInvoiceInfo?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CapturedInvoiceDocumentsApi<T>) {
    super(_entityApi);
  }
}

export interface CapturedInvoiceDocumentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  capturedDocumentId: DeserializedType<T, 'Edm.String'>;
  queryString?: DeserializedType<T, 'Edm.String'> | null;
  capturedInvoiceAttachment8?: DeserializedType<T, 'Edm.String'> | null;
  attachmentContent1?: DeserializedType<T, 'Edm.Binary'> | null;
  capturedInvoiceAttachment5?: DeserializedType<T, 'Edm.String'> | null;
  capturedInvoiceAttachment6?: DeserializedType<T, 'Edm.String'> | null;
  invoiceType?: CapturedInvoiceType | null;
  isSync?: NoYes | null;
  capturedInvoiceAttachment10?: DeserializedType<T, 'Edm.String'> | null;
  refRecId: DeserializedType<T, 'Edm.Int64'>;
  capturedInvoiceAttachment3?: DeserializedType<T, 'Edm.String'> | null;
  capturedInvoiceAttachment4?: DeserializedType<T, 'Edm.String'> | null;
  capturedInvoiceAttachment9?: DeserializedType<T, 'Edm.String'> | null;
  capturedInvoiceAttachment1?: DeserializedType<T, 'Edm.String'> | null;
  transferState?: CapturedInvoiceTransferState | null;
  batchTransferLog?: DeserializedType<T, 'Edm.String'> | null;
  capturedInvoiceAttachment2?: DeserializedType<T, 'Edm.String'> | null;
  capturedInvoiceAttachment7?: DeserializedType<T, 'Edm.String'> | null;
  refTableId: DeserializedType<T, 'Edm.Int32'>;
  capturedInvoiceInfo?: DeserializedType<T, 'Edm.String'> | null;
}
