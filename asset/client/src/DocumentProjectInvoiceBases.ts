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
import type { DocumentProjectInvoiceBasesApi } from './DocumentProjectInvoiceBasesApi';
import { NoYes } from './NoYes';
import { ProjInvoiceType } from './ProjInvoiceType';
import {
  DocumentProjInvoiceOnAccLines,
  DocumentProjInvoiceOnAccLinesType
} from './DocumentProjInvoiceOnAccLines';
import { DocumentCustTrans, DocumentCustTransType } from './DocumentCustTrans';
import {
  DocumentProjInvoiceRevenueLines,
  DocumentProjInvoiceRevenueLinesType
} from './DocumentProjInvoiceRevenueLines';
import {
  DocumentProjInvoiceCostLines,
  DocumentProjInvoiceCostLinesType
} from './DocumentProjInvoiceCostLines';
import {
  DocumentProjInvoiceEmplLines,
  DocumentProjInvoiceEmplLinesType
} from './DocumentProjInvoiceEmplLines';
import {
  BusinessDocumentTaxTransactions,
  BusinessDocumentTaxTransactionsType
} from './BusinessDocumentTaxTransactions';
import {
  DocumentProjInvoiceItemLines,
  DocumentProjInvoiceItemLinesType
} from './DocumentProjInvoiceItemLines';
import {
  DocumentCustVendCreditInvoicingJours,
  DocumentCustVendCreditInvoicingJoursType
} from './DocumentCustVendCreditInvoicingJours';

/**
 * This class represents the entity "DocumentProjectInvoiceBases" of service "d365_metadata".
 */
export class DocumentProjectInvoiceBases<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DocumentProjectInvoiceBasesType<T>
{
  /**
   * Technical entity name for DocumentProjectInvoiceBases.
   */
  static override _entityName = 'DocumentProjectInvoiceBases';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DocumentProjectInvoiceBases entity.
   */
  static _keys = [
    'dataAreaId',
    'ProjInvoiceId',
    'InvoiceDate',
    'NumberSequenceGroupId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Proj Invoice Id.
   */
  declare projInvoiceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Number Sequence Group Id.
   */
  declare numberSequenceGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Account Vat Registration Number.
   * @nullable
   */
  declare invoiceAccountVatRegistrationNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cust Table Rec Id.
   */
  declare custTableRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Data Area.
   * @nullable
   */
  declare dataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account.
   * @nullable
   */
  declare invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Voucher.
   * @nullable
   */
  declare ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Invoice Jour Rec Id.
   */
  declare projInvoiceJourRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Invoice Sales Id Id.
   * @nullable
   */
  declare taxInvoiceSalesIdId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Invoice Type Str.
   * @nullable
   */
  declare projInvoiceTypeStr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account Address.
   * @nullable
   */
  declare invoiceAccountAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prepayment.
   * @nullable
   */
  declare prepayment?: NoYes | null;
  /**
   * Invoice Account Name.
   * @nullable
   */
  declare invoiceAccountName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Amount.
   */
  declare invoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sum Line Disc.
   */
  declare sumLineDisc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Invoice Jour Table Id.
   */
  declare projInvoiceJourTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Invoice Account Address Additional.
   * @nullable
   */
  declare invoiceAccountAddressAdditional?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Proj Invoice Type.
   * @nullable
   */
  declare projInvoiceType?: ProjInvoiceType | null;
  /**
   * Order Account.
   * @nullable
   */
  declare orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Id.
   * @nullable
   */
  declare currencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link DocumentProjInvoiceOnAccLines} entity.
   */
  declare documentProjInvoiceOnAccLine: DocumentProjInvoiceOnAccLines<T>[];
  /**
   * One-to-many navigation property to the {@link DocumentCustTrans} entity.
   */
  declare documentCustTrans: DocumentCustTrans<T>[];
  /**
   * One-to-many navigation property to the {@link DocumentProjInvoiceRevenueLines} entity.
   */
  declare documentProjInvoiceRevenueLine: DocumentProjInvoiceRevenueLines<T>[];
  /**
   * One-to-many navigation property to the {@link DocumentProjInvoiceCostLines} entity.
   */
  declare documentProjInvoiceCostLine: DocumentProjInvoiceCostLines<T>[];
  /**
   * One-to-many navigation property to the {@link DocumentProjInvoiceEmplLines} entity.
   */
  declare documentProjInvoiceEmplLine: DocumentProjInvoiceEmplLines<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessDocumentTaxTransactions} entity.
   */
  declare businessDocumentTaxTransaction: BusinessDocumentTaxTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link DocumentProjInvoiceItemLines} entity.
   */
  declare documentProjInvoiceItemLine: DocumentProjInvoiceItemLines<T>[];
  /**
   * One-to-many navigation property to the {@link DocumentCustVendCreditInvoicingJours} entity.
   */
  declare custVendCreditInvoicingJour: DocumentCustVendCreditInvoicingJours<T>[];

  constructor(_entityApi: DocumentProjectInvoiceBasesApi<T>) {
    super(_entityApi);
  }
}

export interface DocumentProjectInvoiceBasesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projInvoiceId: DeserializedType<T, 'Edm.String'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  numberSequenceGroupId: DeserializedType<T, 'Edm.String'>;
  invoiceAccountVatRegistrationNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  custTableRecId: DeserializedType<T, 'Edm.Int64'>;
  dataArea?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  projInvoiceJourRecId: DeserializedType<T, 'Edm.Int64'>;
  taxInvoiceSalesIdId?: DeserializedType<T, 'Edm.String'> | null;
  projInvoiceTypeStr?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccountAddress?: DeserializedType<T, 'Edm.String'> | null;
  prepayment?: NoYes | null;
  invoiceAccountName?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  sumLineDisc: DeserializedType<T, 'Edm.Decimal'>;
  projInvoiceJourTableId: DeserializedType<T, 'Edm.Int32'>;
  invoiceAccountAddressAdditional?: DeserializedType<T, 'Edm.String'> | null;
  projInvoiceType?: ProjInvoiceType | null;
  orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  currencyId?: DeserializedType<T, 'Edm.String'> | null;
  documentProjInvoiceOnAccLine: DocumentProjInvoiceOnAccLinesType<T>[];
  documentCustTrans: DocumentCustTransType<T>[];
  documentProjInvoiceRevenueLine: DocumentProjInvoiceRevenueLinesType<T>[];
  documentProjInvoiceCostLine: DocumentProjInvoiceCostLinesType<T>[];
  documentProjInvoiceEmplLine: DocumentProjInvoiceEmplLinesType<T>[];
  businessDocumentTaxTransaction: BusinessDocumentTaxTransactionsType<T>[];
  documentProjInvoiceItemLine: DocumentProjInvoiceItemLinesType<T>[];
  custVendCreditInvoicingJour: DocumentCustVendCreditInvoicingJoursType<T>[];
}
