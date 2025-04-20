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
import type { RetailGiftCardTransactionsApi } from './RetailGiftCardTransactionsApi';
import { RetailGiftCardOperation } from './RetailGiftCardOperation';
import { RetailGiftCards, RetailGiftCardsType } from './RetailGiftCards';
import {
  RetailTransactions,
  RetailTransactionsType
} from './RetailTransactions';

/**
 * This class represents the entity "RetailGiftCardTransactions" of service "d365_metadata".
 */
export class RetailGiftCardTransactions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailGiftCardTransactionsType<T>
{
  /**
   * Technical entity name for RetailGiftCardTransactions.
   */
  static override _entityName = 'RetailGiftCardTransactions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailGiftCardTransactions entity.
   */
  static _keys = ['dataAreaId', 'CardNumber', 'TransactionId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Card Number.
   */
  declare cardNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Mcr Invoice Account.
   * @nullable
   */
  declare mcrInvoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Staff Id.
   * @nullable
   */
  declare staffId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operation.
   * @nullable
   */
  declare operation?: RetailGiftCardOperation | null;
  /**
   * Receipt Id.
   * @nullable
   */
  declare receiptId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Terminal Id.
   * @nullable
   */
  declare terminalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Channel Table Retail Channel Id.
   * @nullable
   */
  declare retailChannelTableRetailChannelId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link RetailGiftCards} entity.
   */
  declare retailGiftCard?: RetailGiftCards<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailTransactions} entity.
   */
  declare retailTransaction?: RetailTransactions<T> | null;

  constructor(_entityApi: RetailGiftCardTransactionsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailGiftCardTransactionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  cardNumber: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  mcrInvoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  staffId?: DeserializedType<T, 'Edm.String'> | null;
  operation?: RetailGiftCardOperation | null;
  receiptId?: DeserializedType<T, 'Edm.String'> | null;
  terminalId?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  retailChannelTableRetailChannelId?: DeserializedType<T, 'Edm.String'> | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  retailGiftCard?: RetailGiftCardsType<T> | null;
  retailTransaction?: RetailTransactionsType<T> | null;
}
