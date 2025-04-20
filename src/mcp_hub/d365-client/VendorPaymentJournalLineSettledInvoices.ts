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
import type { VendorPaymentJournalLineSettledInvoicesApi } from './VendorPaymentJournalLineSettledInvoicesApi';
import {
  VendorPaymentJournalHeaders,
  VendorPaymentJournalHeadersType
} from './VendorPaymentJournalHeaders';
import {
  VendorPaymentJournalLines,
  VendorPaymentJournalLinesType
} from './VendorPaymentJournalLines';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "VendorPaymentJournalLineSettledInvoices" of service "d365_metadata".
 */
export class VendorPaymentJournalLineSettledInvoices<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorPaymentJournalLineSettledInvoicesType<T>
{
  /**
   * Technical entity name for VendorPaymentJournalLineSettledInvoices.
   */
  static override _entityName = 'VendorPaymentJournalLineSettledInvoices';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorPaymentJournalLineSettledInvoices entity.
   */
  static _keys = [
    'JournalLineCompany',
    'JournalBatchNumber',
    'JournalLineNumber',
    'InvoiceNumber',
    'InvoiceCompany',
    'InvoiceDueDate'
  ];
  /**
   * Journal Line Company.
   */
  declare journalLineCompany: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Batch Number.
   */
  declare journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Line Number.
   */
  declare journalLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Number.
   */
  declare invoiceNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Company.
   */
  declare invoiceCompany: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Due Date.
   */
  declare invoiceDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice To Payment Cross Rate.
   */
  declare invoiceToPaymentCrossRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cash Discount To Take In Invoice Currency.
   */
  declare cashDiscountToTakeInInvoiceCurrency: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Settlement Amount In Invoice Currency.
   */
  declare settlementAmountInInvoiceCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Account.
   * @nullable
   */
  declare invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Display Value.
   * @nullable
   */
  declare accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link VendorPaymentJournalHeaders} entity.
   */
  declare vendorPaymentJournalHeaderRelatedRole?: VendorPaymentJournalHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorPaymentJournalLines} entity.
   */
  declare vendorPaymentJournalLineEntityRelatedRole?: VendorPaymentJournalLines<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare vendorPaymentJournalLineSettledInvoiceAccountCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: VendorPaymentJournalLineSettledInvoicesApi<T>) {
    super(_entityApi);
  }
}

export interface VendorPaymentJournalLineSettledInvoicesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  journalLineCompany: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  journalLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  invoiceNumber: DeserializedType<T, 'Edm.String'>;
  invoiceCompany: DeserializedType<T, 'Edm.String'>;
  invoiceDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceToPaymentCrossRate: DeserializedType<T, 'Edm.Decimal'>;
  cashDiscountToTakeInInvoiceCurrency: DeserializedType<T, 'Edm.Decimal'>;
  settlementAmountInInvoiceCurrency: DeserializedType<T, 'Edm.Decimal'>;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  vendorPaymentJournalHeaderRelatedRole?: VendorPaymentJournalHeadersType<T> | null;
  vendorPaymentJournalLineEntityRelatedRole?: VendorPaymentJournalLinesType<T> | null;
  vendorPaymentJournalLineSettledInvoiceAccountCombination?: DimensionCombinationsType<T> | null;
}
