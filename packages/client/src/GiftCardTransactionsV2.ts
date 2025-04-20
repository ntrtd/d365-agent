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
import type { GiftCardTransactionsV2Api } from './GiftCardTransactionsV2Api';
import { RetailGiftCardOperation } from './RetailGiftCardOperation';
import { RetailGiftCards, RetailGiftCardsType } from './RetailGiftCards';
import {
  RetailTransactions,
  RetailTransactionsType
} from './RetailTransactions';

/**
 * This class represents the entity "GiftCardTransactionsV2" of service "d365_metadata".
 */
export class GiftCardTransactionsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements GiftCardTransactionsV2Type<T>
{
  /**
   * Technical entity name for GiftCardTransactionsV2.
   */
  static override _entityName = 'GiftCardTransactionsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GiftCardTransactionsV2 entity.
   */
  static _keys = ['dataAreaId', 'CardNumber', 'TransactionNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Card Number.
   */
  declare cardNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Number.
   */
  declare transactionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Receipt Id.
   * @nullable
   */
  declare receiptId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account.
   * @nullable
   */
  declare invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operation.
   * @nullable
   */
  declare operation?: RetailGiftCardOperation | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Staff.
   * @nullable
   */
  declare staff?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Channel Table Retail Channel Id.
   * @nullable
   */
  declare retailChannelTableRetailChannelId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Terminal Number.
   * @nullable
   */
  declare terminalNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link RetailGiftCards} entity.
   */
  declare retailGiftCard?: RetailGiftCards<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailTransactions} entity.
   */
  declare retailTransaction?: RetailTransactions<T> | null;

  constructor(_entityApi: GiftCardTransactionsV2Api<T>) {
    super(_entityApi);
  }
}

export interface GiftCardTransactionsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  cardNumber: DeserializedType<T, 'Edm.String'>;
  transactionNumber: DeserializedType<T, 'Edm.String'>;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  receiptId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  operation?: RetailGiftCardOperation | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  staff?: DeserializedType<T, 'Edm.String'> | null;
  retailChannelTableRetailChannelId?: DeserializedType<T, 'Edm.String'> | null;
  terminalNumber?: DeserializedType<T, 'Edm.String'> | null;
  retailGiftCard?: RetailGiftCardsType<T> | null;
  retailTransaction?: RetailTransactionsType<T> | null;
}
