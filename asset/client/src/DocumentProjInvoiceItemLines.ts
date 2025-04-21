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
import type { DocumentProjInvoiceItemLinesApi } from './DocumentProjInvoiceItemLinesApi';
import {
  BusinessDocumentTaxTransactions,
  BusinessDocumentTaxTransactionsType
} from './BusinessDocumentTaxTransactions';
import {
  DocumentProjectInvoiceBases,
  DocumentProjectInvoiceBasesType
} from './DocumentProjectInvoiceBases';

/**
 * This class represents the entity "DocumentProjInvoiceItemLines" of service "d365_metadata".
 */
export class DocumentProjInvoiceItemLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DocumentProjInvoiceItemLinesType<T>
{
  /**
   * Technical entity name for DocumentProjInvoiceItemLines.
   */
  static override _entityName = 'DocumentProjInvoiceItemLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DocumentProjInvoiceItemLines entity.
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
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Data Area.
   * @nullable
   */
  declare dataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Invoice Item Rec Id.
   */
  declare projInvoiceItemRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Proj Invoice Item Table Id.
   */
  declare projInvoiceItemTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Amount.
   */
  declare taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ledger Voucher.
   * @nullable
   */
  declare ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Invoice Id.
   * @nullable
   */
  declare projInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Txt.
   * @nullable
   */
  declare txt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group Id.
   * @nullable
   */
  declare taxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link BusinessDocumentTaxTransactions} entity.
   */
  declare businessDocumentTaxTransaction: BusinessDocumentTaxTransactions<T>[];
  /**
   * One-to-one navigation property to the {@link DocumentProjectInvoiceBases} entity.
   */
  declare documentProjectInvoiceBase?: DocumentProjectInvoiceBases<T> | null;

  constructor(_entityApi: DocumentProjInvoiceItemLinesApi<T>) {
    super(_entityApi);
  }
}

export interface DocumentProjInvoiceItemLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transId: DeserializedType<T, 'Edm.String'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dataArea?: DeserializedType<T, 'Edm.String'> | null;
  projInvoiceItemRecId: DeserializedType<T, 'Edm.Int64'>;
  projInvoiceItemTableId: DeserializedType<T, 'Edm.Int32'>;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  projInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  txt?: DeserializedType<T, 'Edm.String'> | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  taxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  businessDocumentTaxTransaction: BusinessDocumentTaxTransactionsType<T>[];
  documentProjectInvoiceBase?: DocumentProjectInvoiceBasesType<T> | null;
}
