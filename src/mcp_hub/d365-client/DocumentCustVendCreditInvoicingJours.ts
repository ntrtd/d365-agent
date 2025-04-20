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
import type { DocumentCustVendCreditInvoicingJoursApi } from './DocumentCustVendCreditInvoicingJoursApi';
import {
  BusinessDocumentSalesInvoiceBases,
  BusinessDocumentSalesInvoiceBasesType
} from './BusinessDocumentSalesInvoiceBases';
import {
  DocumentProjectInvoiceBases,
  DocumentProjectInvoiceBasesType
} from './DocumentProjectInvoiceBases';

/**
 * This class represents the entity "DocumentCustVendCreditInvoicingJours" of service "d365_metadata".
 */
export class DocumentCustVendCreditInvoicingJours<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DocumentCustVendCreditInvoicingJoursType<T>
{
  /**
   * Technical entity name for DocumentCustVendCreditInvoicingJours.
   */
  static override _entityName = 'DocumentCustVendCreditInvoicingJours';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DocumentCustVendCreditInvoicingJours entity.
   */
  static _keys = ['dataAreaId', 'InvoiceTableId', 'InvoiceRecId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Table Id.
   */
  declare invoiceTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Invoice Rec Id.
   */
  declare invoiceRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Data Area.
   * @nullable
   */
  declare dataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Ref Rec Id.
   */
  declare reasonRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Corrected Invoice Rec Id.
   */
  declare correctedInvoiceRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cust Vend Corrected Invoice Date.
   */
  declare custVendCorrectedInvoiceDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Tax Invoice Operation.
   * @nullable
   */
  declare taxInvoiceOperation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BusinessDocumentSalesInvoiceBases} entity.
   */
  declare custInvoiceJourCorrection?: BusinessDocumentSalesInvoiceBases<T> | null;
  /**
   * One-to-one navigation property to the {@link DocumentProjectInvoiceBases} entity.
   */
  declare projInvoiceJourCorrected?: DocumentProjectInvoiceBases<T> | null;

  constructor(_entityApi: DocumentCustVendCreditInvoicingJoursApi<T>) {
    super(_entityApi);
  }
}

export interface DocumentCustVendCreditInvoicingJoursType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  invoiceTableId: DeserializedType<T, 'Edm.Int32'>;
  invoiceRecId: DeserializedType<T, 'Edm.Int64'>;
  dataArea?: DeserializedType<T, 'Edm.String'> | null;
  reasonRefRecId: DeserializedType<T, 'Edm.Int64'>;
  correctedInvoiceRecId: DeserializedType<T, 'Edm.Int64'>;
  custVendCorrectedInvoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxInvoiceOperation?: DeserializedType<T, 'Edm.String'> | null;
  custInvoiceJourCorrection?: BusinessDocumentSalesInvoiceBasesType<T> | null;
  projInvoiceJourCorrected?: DocumentProjectInvoiceBasesType<T> | null;
}
