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
import type { RetailTransactionLoyaltyRewardPointsLinesApi } from './RetailTransactionLoyaltyRewardPointsLinesApi';
import { RetailLoyaltyRewardPointEntryType } from './RetailLoyaltyRewardPointEntryType';

/**
 * This class represents the entity "RetailTransactionLoyaltyRewardPointsLines" of service "d365_metadata".
 */
export class RetailTransactionLoyaltyRewardPointsLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionLoyaltyRewardPointsLinesType<T>
{
  /**
   * Technical entity name for RetailTransactionLoyaltyRewardPointsLines.
   */
  static override _entityName = 'RetailTransactionLoyaltyRewardPointsLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionLoyaltyRewardPointsLines entity.
   */
  static _keys = [
    'dataAreaId',
    'OperatingUnitNumber',
    'LineNumber',
    'Terminal',
    'TransactionNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Number.
   */
  declare transactionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Loyalty Name.
   * @nullable
   */
  declare loyaltyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entry Time.
   */
  declare entryTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Loyalty Tier Id.
   * @nullable
   */
  declare loyaltyTierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reward Point Id.
   * @nullable
   */
  declare rewardPointId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entry Type.
   * @nullable
   */
  declare entryType?: RetailLoyaltyRewardPointEntryType | null;
  /**
   * Retail Transaction Sales Trans Line Num.
   */
  declare retailTransactionSalesTransLineNum: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Receipt Number.
   * @nullable
   */
  declare receiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entry Date.
   */
  declare entryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reward Points.
   */
  declare rewardPoints: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Loyalty Card Number.
   * @nullable
   */
  declare loyaltyCardNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailTransactionLoyaltyRewardPointsLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionLoyaltyRewardPointsLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionNumber: DeserializedType<T, 'Edm.String'>;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  loyaltyName?: DeserializedType<T, 'Edm.String'> | null;
  entryTime: DeserializedType<T, 'Edm.Int32'>;
  loyaltyTierId?: DeserializedType<T, 'Edm.String'> | null;
  rewardPointId?: DeserializedType<T, 'Edm.String'> | null;
  entryType?: RetailLoyaltyRewardPointEntryType | null;
  retailTransactionSalesTransLineNum: DeserializedType<T, 'Edm.Decimal'>;
  receiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  entryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  rewardPoints: DeserializedType<T, 'Edm.Decimal'>;
  loyaltyCardNumber?: DeserializedType<T, 'Edm.String'> | null;
}
