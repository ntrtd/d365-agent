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
import type { DocumentBatchSubmissionItemsApi } from './DocumentBatchSubmissionItemsApi';
import {
  BusinessDocumentSalesInvoiceBases,
  BusinessDocumentSalesInvoiceBasesType
} from './BusinessDocumentSalesInvoiceBases';

/**
 * This class represents the entity "DocumentBatchSubmissionItems" of service "d365_metadata".
 */
export class DocumentBatchSubmissionItems<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DocumentBatchSubmissionItemsType<T>
{
  /**
   * Technical entity name for DocumentBatchSubmissionItems.
   */
  static override _entityName = 'DocumentBatchSubmissionItems';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DocumentBatchSubmissionItems entity.
   */
  static _keys = ['dataAreaId', 'SubmissionId', 'RefTableId', 'RefRecId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Submission Id.
   */
  declare submissionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ref Table Id.
   */
  declare refTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ref Rec Id.
   */
  declare refRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Data Area.
   * @nullable
   */
  declare dataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Type Table Name.
   * @nullable
   */
  declare documentTypeTableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BusinessDocumentSalesInvoiceBases} entity.
   */
  declare businessDocumentSalesInvoiceBase?: BusinessDocumentSalesInvoiceBases<T> | null;

  constructor(_entityApi: DocumentBatchSubmissionItemsApi<T>) {
    super(_entityApi);
  }
}

export interface DocumentBatchSubmissionItemsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  submissionId: DeserializedType<T, 'Edm.String'>;
  refTableId: DeserializedType<T, 'Edm.Int32'>;
  refRecId: DeserializedType<T, 'Edm.Int64'>;
  dataArea?: DeserializedType<T, 'Edm.String'> | null;
  documentTypeTableName?: DeserializedType<T, 'Edm.String'> | null;
  businessDocumentSalesInvoiceBase?: BusinessDocumentSalesInvoiceBasesType<T> | null;
}
