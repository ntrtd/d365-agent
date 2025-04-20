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
import type { DocumentProjInvoiceOnAccLinesApi } from './DocumentProjInvoiceOnAccLinesApi';
import {
  DocumentProjectInvoiceBases,
  DocumentProjectInvoiceBasesType
} from './DocumentProjectInvoiceBases';
import {
  BusinessDocumentTaxTransactions,
  BusinessDocumentTaxTransactionsType
} from './BusinessDocumentTaxTransactions';

/**
 * This class represents the entity "DocumentProjInvoiceOnAccLines" of service "d365_metadata".
 */
export class DocumentProjInvoiceOnAccLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DocumentProjInvoiceOnAccLinesType<T>
{
  /**
   * Technical entity name for DocumentProjInvoiceOnAccLines.
   */
  static override _entityName = 'DocumentProjInvoiceOnAccLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DocumentProjInvoiceOnAccLines entity.
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
   * Proj Invoice On Acc Table Id.
   */
  declare projInvoiceOnAccTableId: DeserializedType<T, 'Edm.Int32'>;
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
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Proj Invoice On Acc Rec Id.
   */
  declare projInvoiceOnAccRecId: DeserializedType<T, 'Edm.Int64'>;
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

  constructor(_entityApi: DocumentProjInvoiceOnAccLinesApi<T>) {
    super(_entityApi);
  }
}

export interface DocumentProjInvoiceOnAccLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transId: DeserializedType<T, 'Edm.String'>;
  txt?: DeserializedType<T, 'Edm.String'> | null;
  projInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  projInvoiceOnAccTableId: DeserializedType<T, 'Edm.Int32'>;
  dataArea?: DeserializedType<T, 'Edm.String'> | null;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projInvoiceOnAccRecId: DeserializedType<T, 'Edm.Int64'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  taxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  documentProjectInvoiceBase?: DocumentProjectInvoiceBasesType<T> | null;
  businessDocumentTaxTransaction: BusinessDocumentTaxTransactionsType<T>[];
}
