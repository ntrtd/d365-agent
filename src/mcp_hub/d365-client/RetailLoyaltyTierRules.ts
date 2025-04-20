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
import type { RetailLoyaltyTierRulesApi } from './RetailLoyaltyTierRulesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailLoyaltyTierRules" of service "d365_metadata".
 */
export class RetailLoyaltyTierRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailLoyaltyTierRulesType<T>
{
  /**
   * Technical entity name for RetailLoyaltyTierRules.
   */
  static override _entityName = 'RetailLoyaltyTierRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailLoyaltyTierRules entity.
   */
  static _keys = [
    'LoyaltyName',
    'LoyaltyTierId',
    'RewardPointId',
    'EvaluationDateInterval'
  ];
  /**
   * Loyalty Name.
   */
  declare loyaltyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Loyalty Tier Id.
   */
  declare loyaltyTierId: DeserializedType<T, 'Edm.String'>;
  /**
   * Reward Point Id.
   */
  declare rewardPointId: DeserializedType<T, 'Edm.String'>;
  /**
   * Evaluation Date Interval.
   */
  declare evaluationDateInterval: DeserializedType<T, 'Edm.String'>;
  /**
   * Min Value.
   */
  declare minValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pool Related Cards.
   * @nullable
   */
  declare poolRelatedCards?: NoYes | null;

  constructor(_entityApi: RetailLoyaltyTierRulesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailLoyaltyTierRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  loyaltyName: DeserializedType<T, 'Edm.String'>;
  loyaltyTierId: DeserializedType<T, 'Edm.String'>;
  rewardPointId: DeserializedType<T, 'Edm.String'>;
  evaluationDateInterval: DeserializedType<T, 'Edm.String'>;
  minValue: DeserializedType<T, 'Edm.Decimal'>;
  poolRelatedCards?: NoYes | null;
}
