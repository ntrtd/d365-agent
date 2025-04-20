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
import type { DocumentProjInvoiceCostLinesApi } from './DocumentProjInvoiceCostLinesApi';
import {
  DocumentProjectInvoiceBases,
  DocumentProjectInvoiceBasesType
} from './DocumentProjectInvoiceBases';
import {
  BusinessDocumentTaxTransactions,
  BusinessDocumentTaxTransactionsType
} from './BusinessDocumentTaxTransactions';

/**
 * This class represents the entity "DocumentProjInvoiceCostLines" of service "d365_metadata".
 */
export class DocumentProjInvoiceCostLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DocumentProjInvoiceCostLinesType<T>
{
  /**
   * Technical entity name for DocumentProjInvoiceCostLines.
   */
  static override _entityName = 'DocumentProjInvoiceCostLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DocumentProjInvoiceCostLines entity.
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
   * Proj Invoice Cost Table Id.
   */
  declare projInvoiceCostTableId: DeserializedType<T, 'Edm.Int32'>;
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
   * Proj Invoice Cost Rec Id.
   */
  declare projInvoiceCostRecId: DeserializedType<T, 'Edm.Int64'>;
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
   * Tax Group Id.
   * @nullable
   */
  declare taxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link DocumentProjectInvoiceBases} entity.
   */
  declare documentProjectInvoiceBase?: DocumentProjectInvoiceBases<T> | null;
  /**
   * One-to-many navigation property to the {@link BusinessDocumentTaxTransactions} entity.
   */
  declare businessDocumentTaxTransaction: BusinessDocumentTaxTransactions<T>[];

  constructor(_entityApi: DocumentProjInvoiceCostLinesApi<T>) {
    super(_entityApi);
  }
}

export interface DocumentProjInvoiceCostLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transId: DeserializedType<T, 'Edm.String'>;
  projInvoiceCostTableId: DeserializedType<T, 'Edm.Int32'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dataArea?: DeserializedType<T, 'Edm.String'> | null;
  projInvoiceCostRecId: DeserializedType<T, 'Edm.Int64'>;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  projInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  txt?: DeserializedType<T, 'Edm.String'> | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  documentProjectInvoiceBase?: DocumentProjectInvoiceBasesType<T> | null;
  businessDocumentTaxTransaction: BusinessDocumentTaxTransactionsType<T>[];
}
