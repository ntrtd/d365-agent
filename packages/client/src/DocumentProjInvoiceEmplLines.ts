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
import type { DocumentProjInvoiceEmplLinesApi } from './DocumentProjInvoiceEmplLinesApi';
import {
  DocumentProjectInvoiceBases,
  DocumentProjectInvoiceBasesType
} from './DocumentProjectInvoiceBases';
import {
  BusinessDocumentTaxTransactions,
  BusinessDocumentTaxTransactionsType
} from './BusinessDocumentTaxTransactions';

/**
 * This class represents the entity "DocumentProjInvoiceEmplLines" of service "d365_metadata".
 */
export class DocumentProjInvoiceEmplLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DocumentProjInvoiceEmplLinesType<T>
{
  /**
   * Technical entity name for DocumentProjInvoiceEmplLines.
   */
  static override _entityName = 'DocumentProjInvoiceEmplLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DocumentProjInvoiceEmplLines entity.
   */
  static _keys = ['dataAreaId', 'TransId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Trans Id.
   */
  declare transId: DeserializedType<T, 'Edm.String'>;
  /**
   * Txt.
   * @nullable
   */
  declare txt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Invoice Id.
   * @nullable
   */
  declare projInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Area.
   * @nullable
   */
  declare dataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ledger Voucher.
   * @nullable
   */
  declare ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Amount.
   */
  declare taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Invoice Empl Table Id.
   */
  declare projInvoiceEmplTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Proj Invoice Empl Rec Id.
   */
  declare projInvoiceEmplRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Group Id.
   * @nullable
   */
  declare taxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link DocumentProjectInvoiceBases} entity.
   */
  declare documentProjectInvoiceBase?: DocumentProjectInvoiceBases<T> | null;
  /**
   * One-to-many navigation property to the {@link BusinessDocumentTaxTransactions} entity.
   */
  declare businessDocumentTaxTransaction: BusinessDocumentTaxTransactions<T>[];

  constructor(_entityApi: DocumentProjInvoiceEmplLinesApi<T>) {
    super(_entityApi);
  }
}

export interface DocumentProjInvoiceEmplLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transId: DeserializedType<T, 'Edm.String'>;
  txt?: DeserializedType<T, 'Edm.String'> | null;
  projInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  dataArea?: DeserializedType<T, 'Edm.String'> | null;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  projInvoiceEmplTableId: DeserializedType<T, 'Edm.Int32'>;
  projInvoiceEmplRecId: DeserializedType<T, 'Edm.Int64'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  taxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  documentProjectInvoiceBase?: DocumentProjectInvoiceBasesType<T> | null;
  businessDocumentTaxTransaction: BusinessDocumentTaxTransactionsType<T>[];
}
