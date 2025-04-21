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
import type { RetailLoyaltyRewardPointsApi } from './RetailLoyaltyRewardPointsApi';
import { RetailLoyaltyRewardPointType } from './RetailLoyaltyRewardPointType';
import { NoYes } from './NoYes';
import { RetailDayMonthYear } from './RetailDayMonthYear';

/**
 * This class represents the entity "RetailLoyaltyRewardPoints" of service "d365_metadata".
 */
export class RetailLoyaltyRewardPoints<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailLoyaltyRewardPointsType<T>
{
  /**
   * Technical entity name for RetailLoyaltyRewardPoints.
   */
  static override _entityName = 'RetailLoyaltyRewardPoints';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailLoyaltyRewardPoints entity.
   */
  static _keys = ['RewardPointId'];
  /**
   * Reward Point Id.
   */
  declare rewardPointId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maximum Loyalty Reward Points.
   */
  declare maximumLoyaltyRewardPoints: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Vesting Time Value.
   */
  declare vestingTimeValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Redeem Ranking.
   */
  declare redeemRanking: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Expiration Time Value.
   */
  declare expirationTimeValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reward Point Type.
   * @nullable
   */
  declare rewardPointType?: RetailLoyaltyRewardPointType | null;
  /**
   * Redeemable.
   * @nullable
   */
  declare redeemable?: NoYes | null;
  /**
   * Reward Point Currency.
   * @nullable
   */
  declare rewardPointCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vesting Time Unit.
   * @nullable
   */
  declare vestingTimeUnit?: RetailDayMonthYear | null;
  /**
   * Expiration Time Unit.
   * @nullable
   */
  declare expirationTimeUnit?: RetailDayMonthYear | null;

  constructor(_entityApi: RetailLoyaltyRewardPointsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailLoyaltyRewardPointsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  rewardPointId: DeserializedType<T, 'Edm.String'>;
  maximumLoyaltyRewardPoints: DeserializedType<T, 'Edm.Int64'>;
  vestingTimeValue: DeserializedType<T, 'Edm.Int32'>;
  redeemRanking: DeserializedType<T, 'Edm.Int32'>;
  expirationTimeValue: DeserializedType<T, 'Edm.Int32'>;
  rewardPointType?: RetailLoyaltyRewardPointType | null;
  redeemable?: NoYes | null;
  rewardPointCurrency?: DeserializedType<T, 'Edm.String'> | null;
  vestingTimeUnit?: RetailDayMonthYear | null;
  expirationTimeUnit?: RetailDayMonthYear | null;
}
