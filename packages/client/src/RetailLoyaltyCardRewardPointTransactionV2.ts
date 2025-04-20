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
import type { RetailLoyaltyCardRewardPointTransactionV2Api } from './RetailLoyaltyCardRewardPointTransactionV2Api';
import { RetailLoyaltyRewardPointEntryType } from './RetailLoyaltyRewardPointEntryType';
import { RetailLoyaltyTransactionType } from './RetailLoyaltyTransactionType';
import { RetailLoyaltyTenderTypeBase } from './RetailLoyaltyTenderTypeBase';

/**
 * This class represents the entity "RetailLoyaltyCardRewardPointTransactionV2" of service "d365_metadata".
 */
export class RetailLoyaltyCardRewardPointTransactionV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailLoyaltyCardRewardPointTransactionV2Type<T>
{
  /**
   * Technical entity name for RetailLoyaltyCardRewardPointTransactionV2.
   */
  static override _entityName = 'RetailLoyaltyCardRewardPointTransactionV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailLoyaltyCardRewardPointTransactionV2 entity.
   */
  static _keys = [
    'OperatingUnitNumber',
    'storeId',
    'Terminal',
    'TransactionNumber',
    'LoyaltyTransactionCompany',
    'LoyaltyTransactionLineNumber',
    'SalesOrderId',
    'AdjustmentId',
    'CardNumber',
    'NonTransactionalActivityId',
    'EntryDate',
    'EntryTime'
  ];
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Id.
   */
  declare storeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Number.
   */
  declare transactionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Loyalty Transaction Company.
   */
  declare loyaltyTransactionCompany: DeserializedType<T, 'Edm.String'>;
  /**
   * Loyalty Transaction Line Number.
   */
  declare loyaltyTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Order Id.
   */
  declare salesOrderId: DeserializedType<T, 'Edm.String'>;
  /**
   * Adjustment Id.
   */
  declare adjustmentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Card Number.
   */
  declare cardNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Non Transactional Activity Id.
   */
  declare nonTransactionalActivityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Entry Date.
   */
  declare entryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Entry Time.
   */
  declare entryTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Loyalty Tier Loyalty Program Name.
   * @nullable
   */
  declare loyaltyTierLoyaltyProgramName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Loyalty Other Activity Type Name.
   * @nullable
   */
  declare loyaltyOtherActivityTypeName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Entry Type.
   * @nullable
   */
  declare entryType?: RetailLoyaltyRewardPointEntryType | null;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Line Line Num.
   */
  declare salesLineLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reward Point Amount Qty.
   */
  declare rewardPointAmountQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Loyalty Transaction Type.
   * @nullable
   */
  declare loyaltyTransactionType?: RetailLoyaltyTransactionType | null;
  /**
   * Customer Account Company.
   * @nullable
   */
  declare customerAccountCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remaining.
   */
  declare remaining: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Loyalty Program Name.
   * @nullable
   */
  declare loyaltyProgramName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operator Id.
   * @nullable
   */
  declare operatorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Tender Type.
   * @nullable
   */
  declare cardTenderType?: RetailLoyaltyTenderTypeBase | null;
  /**
   * Retail Transaction Sales Trans Line Num.
   */
  declare retailTransactionSalesTransLineNum: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Receipt Id.
   * @nullable
   */
  declare receiptId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reward Point Id.
   * @nullable
   */
  declare rewardPointId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loyalty Tier Id.
   * @nullable
   */
  declare loyaltyTierId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailLoyaltyCardRewardPointTransactionV2Api<T>) {
    super(_entityApi);
  }
}

export interface RetailLoyaltyCardRewardPointTransactionV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  storeId: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionNumber: DeserializedType<T, 'Edm.String'>;
  loyaltyTransactionCompany: DeserializedType<T, 'Edm.String'>;
  loyaltyTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  salesOrderId: DeserializedType<T, 'Edm.String'>;
  adjustmentId: DeserializedType<T, 'Edm.String'>;
  cardNumber: DeserializedType<T, 'Edm.String'>;
  nonTransactionalActivityId: DeserializedType<T, 'Edm.String'>;
  entryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  entryTime: DeserializedType<T, 'Edm.Int32'>;
  loyaltyTierLoyaltyProgramName?: DeserializedType<T, 'Edm.String'> | null;
  loyaltyOtherActivityTypeName?: DeserializedType<T, 'Edm.String'> | null;
  entryType?: RetailLoyaltyRewardPointEntryType | null;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  salesLineLineNum: DeserializedType<T, 'Edm.Decimal'>;
  rewardPointAmountQty: DeserializedType<T, 'Edm.Decimal'>;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  loyaltyTransactionType?: RetailLoyaltyTransactionType | null;
  customerAccountCompany?: DeserializedType<T, 'Edm.String'> | null;
  remaining: DeserializedType<T, 'Edm.Decimal'>;
  loyaltyProgramName?: DeserializedType<T, 'Edm.String'> | null;
  operatorId?: DeserializedType<T, 'Edm.String'> | null;
  cardTenderType?: RetailLoyaltyTenderTypeBase | null;
  retailTransactionSalesTransLineNum: DeserializedType<T, 'Edm.Decimal'>;
  receiptId?: DeserializedType<T, 'Edm.String'> | null;
  rewardPointId?: DeserializedType<T, 'Edm.String'> | null;
  loyaltyTierId?: DeserializedType<T, 'Edm.String'> | null;
}
