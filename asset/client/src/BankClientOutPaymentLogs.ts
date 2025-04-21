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
import type { BankClientOutPaymentLogsApi } from './BankClientOutPaymentLogsApi';
import { PaymOrderStatusRu } from './PaymOrderStatusRu';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { BankClientDocumentTypeCategoryRu } from './BankClientDocumentTypeCategoryRu';

/**
 * This class represents the entity "BankClientOutPaymentLogs" of service "d365_metadata".
 */
export class BankClientOutPaymentLogs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BankClientOutPaymentLogsType<T>
{
  /**
   * Technical entity name for BankClientOutPaymentLogs.
   */
  static override _entityName = 'BankClientOutPaymentLogs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankClientOutPaymentLogs entity.
   */
  static _keys = ['dataAreaId', 'OrderNumber', 'OrderDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Order Number.
   */
  declare orderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Order Date.
   */
  declare orderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Payment Order Status.
   * @nullable
   */
  declare paymentOrderStatus?: PaymOrderStatusRu | null;
  /**
   * Method Of Payment.
   * @nullable
   */
  declare methodOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount In Transaction Currency.
   */
  declare amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bank Currency Transfer.
   * @nullable
   */
  declare bankCurrencyTransfer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Bank Account.
   * @nullable
   */
  declare bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date And Time.
   */
  declare dateAndTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Order Number.
   * @nullable
   */
  declare paymentOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Counteragent.
   * @nullable
   */
  declare counteragent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcType | null;
  /**
   * Document Type.
   * @nullable
   */
  declare documentType?: BankClientDocumentTypeCategoryRu | null;
  /**
   * Journal Number.
   * @nullable
   */
  declare journalNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Order Date.
   */
  declare paymentOrderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: BankClientOutPaymentLogsApi<T>) {
    super(_entityApi);
  }
}

export interface BankClientOutPaymentLogsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  orderNumber: DeserializedType<T, 'Edm.String'>;
  orderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  paymentOrderStatus?: PaymOrderStatusRu | null;
  methodOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  bankCurrencyTransfer?: DeserializedType<T, 'Edm.String'> | null;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  dateAndTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  paymentOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  counteragent?: DeserializedType<T, 'Edm.String'> | null;
  accountType?: LedgerJournalAcType | null;
  documentType?: BankClientDocumentTypeCategoryRu | null;
  journalNumber?: DeserializedType<T, 'Edm.String'> | null;
  paymentOrderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
