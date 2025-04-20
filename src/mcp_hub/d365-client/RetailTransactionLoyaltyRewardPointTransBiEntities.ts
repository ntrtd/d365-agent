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
import type { RetailTransactionLoyaltyRewardPointTransBiEntitiesApi } from './RetailTransactionLoyaltyRewardPointTransBiEntitiesApi';
import { RetailLoyaltyRewardPointEntryType } from './RetailLoyaltyRewardPointEntryType';

/**
 * This class represents the entity "RetailTransactionLoyaltyRewardPointTransBIEntities" of service "d365_metadata".
 */
export class RetailTransactionLoyaltyRewardPointTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionLoyaltyRewardPointTransBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionLoyaltyRewardPointTransBiEntities.
   */
  static override _entityName =
    'RetailTransactionLoyaltyRewardPointTransBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionLoyaltyRewardPointTransBiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'storeId',
    'terminalId',
    'transactionId',
    'LineNum'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Id.
   */
  declare storeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal Id.
   */
  declare terminalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Entry Type.
   * @nullable
   */
  declare entryType?: RetailLoyaltyRewardPointEntryType | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Number.
   * @nullable
   */
  declare cardNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Staff Id.
   * @nullable
   */
  declare staffId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reward Point Amount Qty.
   */
  declare rewardPointAmountQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Replication Counter From Origin.
   */
  declare replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Entry Time.
   */
  declare entryTime: DeserializedType<T, 'Edm.Int32'>;
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
   * Entry Date.
   */
  declare entryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cust Account.
   * @nullable
   */
  declare custAccount?: DeserializedType<T, 'Edm.String'> | null;

  constructor(
    _entityApi: RetailTransactionLoyaltyRewardPointTransBiEntitiesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface RetailTransactionLoyaltyRewardPointTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  storeId: DeserializedType<T, 'Edm.String'>;
  terminalId: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  entryType?: RetailLoyaltyRewardPointEntryType | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  cardNumber?: DeserializedType<T, 'Edm.String'> | null;
  staffId?: DeserializedType<T, 'Edm.String'> | null;
  rewardPointAmountQty: DeserializedType<T, 'Edm.Decimal'>;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  entryTime: DeserializedType<T, 'Edm.Int32'>;
  retailTransactionSalesTransLineNum: DeserializedType<T, 'Edm.Decimal'>;
  receiptId?: DeserializedType<T, 'Edm.String'> | null;
  entryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  custAccount?: DeserializedType<T, 'Edm.String'> | null;
}
