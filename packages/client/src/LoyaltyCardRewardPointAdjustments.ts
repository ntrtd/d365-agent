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
import type { LoyaltyCardRewardPointAdjustmentsApi } from './LoyaltyCardRewardPointAdjustmentsApi';
import { RetailLoyaltyAdjustmentStatusBase } from './RetailLoyaltyAdjustmentStatusBase';

/**
 * This class represents the entity "LoyaltyCardRewardPointAdjustments" of service "d365_metadata".
 */
export class LoyaltyCardRewardPointAdjustments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LoyaltyCardRewardPointAdjustmentsType<T>
{
  /**
   * Technical entity name for LoyaltyCardRewardPointAdjustments.
   */
  static override _entityName = 'LoyaltyCardRewardPointAdjustments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LoyaltyCardRewardPointAdjustments entity.
   */
  static _keys = ['AdjustmentId'];
  /**
   * Adjustment Id.
   */
  declare adjustmentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Adjustment Status.
   * @nullable
   */
  declare adjustmentStatus?: RetailLoyaltyAdjustmentStatusBase | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Retail Affiliation Name.
   * @nullable
   */
  declare retailAffiliationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comment.
   * @nullable
   */
  declare comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Loyalty Reward Point Reward Point Id.
   * @nullable
   */
  declare retailLoyaltyRewardPointRewardPointId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Reward Point Amount Qty.
   */
  declare rewardPointAmountQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Loyalty Card Card Number.
   * @nullable
   */
  declare retailLoyaltyCardCardNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: LoyaltyCardRewardPointAdjustmentsApi<T>) {
    super(_entityApi);
  }
}

export interface LoyaltyCardRewardPointAdjustmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  adjustmentId: DeserializedType<T, 'Edm.String'>;
  adjustmentStatus?: RetailLoyaltyAdjustmentStatusBase | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  retailAffiliationName?: DeserializedType<T, 'Edm.String'> | null;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  retailLoyaltyRewardPointRewardPointId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  rewardPointAmountQty: DeserializedType<T, 'Edm.Decimal'>;
  retailLoyaltyCardCardNumber?: DeserializedType<T, 'Edm.String'> | null;
}
