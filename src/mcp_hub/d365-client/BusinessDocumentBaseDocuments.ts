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
import type { BusinessDocumentBaseDocumentsApi } from './BusinessDocumentBaseDocumentsApi';
import { DocumentTypeIt } from './DocumentTypeIt';
import {
  BusinessDocumentSalesInvoiceBases,
  BusinessDocumentSalesInvoiceBasesType
} from './BusinessDocumentSalesInvoiceBases';

/**
 * This class represents the entity "BusinessDocumentBaseDocuments" of service "d365_metadata".
 */
export class BusinessDocumentBaseDocuments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessDocumentBaseDocumentsType<T>
{
  /**
   * Technical entity name for BusinessDocumentBaseDocuments.
   */
  static override _entityName = 'BusinessDocumentBaseDocuments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessDocumentBaseDocuments entity.
   */
  static _keys = ['dataAreaId', 'BaseDocumentRecId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Base Document Rec Id.
   */
  declare baseDocumentRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cip Ecode.
   * @nullable
   */
  declare cipEcode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Order Or Agreement Code.
   * @nullable
   */
  declare orderOrAgreementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Number.
   * @nullable
   */
  declare documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tender Code.
   * @nullable
   */
  declare tenderCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Rec Id.
   */
  declare refRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sales Id.
   * @nullable
   */
  declare salesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Type.
   * @nullable
   */
  declare documentType?: DocumentTypeIt | null;
  /**
   * Document Type Str.
   * @nullable
   */
  declare documentTypeStr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Table Id.
   */
  declare refTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link BusinessDocumentSalesInvoiceBases} entity.
   */
  declare businessDocumentSalesInvoiceBase?: BusinessDocumentSalesInvoiceBases<T> | null;

  constructor(_entityApi: BusinessDocumentBaseDocumentsApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessDocumentBaseDocumentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  baseDocumentRecId: DeserializedType<T, 'Edm.Int64'>;
  cipEcode?: DeserializedType<T, 'Edm.String'> | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  orderOrAgreementCode?: DeserializedType<T, 'Edm.String'> | null;
  documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  tenderCode?: DeserializedType<T, 'Edm.String'> | null;
  refRecId: DeserializedType<T, 'Edm.Int64'>;
  salesId?: DeserializedType<T, 'Edm.String'> | null;
  documentType?: DocumentTypeIt | null;
  documentTypeStr?: DeserializedType<T, 'Edm.String'> | null;
  refTableId: DeserializedType<T, 'Edm.Int32'>;
  lineNumber: DeserializedType<T, 'Edm.Int32'>;
  businessDocumentSalesInvoiceBase?: BusinessDocumentSalesInvoiceBasesType<T> | null;
}
