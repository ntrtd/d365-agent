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
import type { RetailGiftCardsApi } from './RetailGiftCardsApi';
import { NoYes } from './NoYes';
import { McrGiftCardType } from './McrGiftCardType';
import { RetailGiftCardStatus } from './RetailGiftCardStatus';
import {
  RetailGiftCardTransactions,
  RetailGiftCardTransactionsType
} from './RetailGiftCardTransactions';
import {
  GiftCardTransactionsV2,
  GiftCardTransactionsV2Type
} from './GiftCardTransactionsV2';

/**
 * This class represents the entity "RetailGiftCards" of service "d365_metadata".
 */
export class RetailGiftCards<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailGiftCardsType<T>
{
  /**
   * Technical entity name for RetailGiftCards.
   */
  static override _entityName = 'RetailGiftCards';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailGiftCards entity.
   */
  static _keys = ['dataAreaId', 'EntryId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Entry Id.
   */
  declare entryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Minimum Reload In Accounting Currency.
   */
  declare minimumReloadInAccountingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Active From.
   */
  declare activeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Face Value.
   */
  declare faceValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reserved By Transaction Id.
   * @nullable
   */
  declare reservedByTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Reserved.
   * @nullable
   */
  declare isReserved?: NoYes | null;
  /**
   * Reserved By Retail Channel.
   * @nullable
   */
  declare reservedByRetailChannel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reserved By Retail Terminal.
   * @nullable
   */
  declare reservedByRetailTerminal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Call Center Gift Card Type.
   * @nullable
   */
  declare callCenterGiftCardType?: McrGiftCardType | null;
  /**
   * Maximum Balance In Accounting Currency.
   */
  declare maximumBalanceInAccountingCurrency: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Non Reloadable.
   * @nullable
   */
  declare nonReloadable?: NoYes | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: RetailGiftCardStatus | null;
  /**
   * Expiry Date.
   */
  declare expiryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One Time Redemption.
   * @nullable
   */
  declare oneTimeRedemption?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link RetailGiftCardTransactions} entity.
   */
  declare retailGiftCardTransactions: RetailGiftCardTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link GiftCardTransactionsV2} entity.
   */
  declare giftCardTransactionV2: GiftCardTransactionsV2<T>[];

  constructor(_entityApi: RetailGiftCardsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailGiftCardsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  entryId: DeserializedType<T, 'Edm.String'>;
  minimumReloadInAccountingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  activeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  faceValue: DeserializedType<T, 'Edm.Decimal'>;
  reservedByTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  isReserved?: NoYes | null;
  reservedByRetailChannel?: DeserializedType<T, 'Edm.String'> | null;
  reservedByRetailTerminal?: DeserializedType<T, 'Edm.String'> | null;
  callCenterGiftCardType?: McrGiftCardType | null;
  maximumBalanceInAccountingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  nonReloadable?: NoYes | null;
  status?: RetailGiftCardStatus | null;
  expiryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  oneTimeRedemption?: NoYes | null;
  retailGiftCardTransactions: RetailGiftCardTransactionsType<T>[];
  giftCardTransactionV2: GiftCardTransactionsV2Type<T>[];
}
