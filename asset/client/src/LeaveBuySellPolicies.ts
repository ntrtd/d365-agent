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
import type { LeaveBuySellPoliciesApi } from './LeaveBuySellPoliciesApi';
import { LeaveBuySellPolicyTypeCategory } from './LeaveBuySellPolicyTypeCategory';
import { NoYes } from './NoYes';
import {
  LeaveBuySellPolicySellTiers,
  LeaveBuySellPolicySellTiersType
} from './LeaveBuySellPolicySellTiers';
import {
  LeaveBuySellRequests,
  LeaveBuySellRequestsType
} from './LeaveBuySellRequests';
import {
  LeaveBuySellPolicyBuyTiers,
  LeaveBuySellPolicyBuyTiersType
} from './LeaveBuySellPolicyBuyTiers';

/**
 * This class represents the entity "LeaveBuySellPolicies" of service "d365_metadata".
 */
export class LeaveBuySellPolicies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaveBuySellPoliciesType<T>
{
  /**
   * Technical entity name for LeaveBuySellPolicies.
   */
  static override _entityName = 'LeaveBuySellPolicies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaveBuySellPolicies entity.
   */
  static _keys = ['dataAreaId', 'Policy'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Policy.
   */
  declare policy: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maximum Amount Sell.
   */
  declare maximumAmountSell: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Category.
   * @nullable
   */
  declare category?: LeaveBuySellPolicyTypeCategory | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Use Full Time Equivalency Sell.
   * @nullable
   */
  declare useFullTimeEquivalencySell?: NoYes | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Maximum Amount Buy.
   */
  declare maximumAmountBuy: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Use Full Time Equivalency Buy.
   * @nullable
   */
  declare useFullTimeEquivalencyBuy?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link LeaveBuySellPolicySellTiers} entity.
   */
  declare leaveBuySellPolicySellTier?: LeaveBuySellPolicySellTiers<T> | null;
  /**
   * One-to-many navigation property to the {@link LeaveBuySellRequests} entity.
   */
  declare leaveBuySellRequest: LeaveBuySellRequests<T>[];
  /**
   * One-to-one navigation property to the {@link LeaveBuySellPolicyBuyTiers} entity.
   */
  declare leaveBuySellPolicyBuyTier?: LeaveBuySellPolicyBuyTiers<T> | null;

  constructor(_entityApi: LeaveBuySellPoliciesApi<T>) {
    super(_entityApi);
  }
}

export interface LeaveBuySellPoliciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  policy: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  maximumAmountSell: DeserializedType<T, 'Edm.Decimal'>;
  category?: LeaveBuySellPolicyTypeCategory | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  useFullTimeEquivalencySell?: NoYes | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  maximumAmountBuy: DeserializedType<T, 'Edm.Decimal'>;
  useFullTimeEquivalencyBuy?: NoYes | null;
  leaveBuySellPolicySellTier?: LeaveBuySellPolicySellTiersType<T> | null;
  leaveBuySellRequest: LeaveBuySellRequestsType<T>[];
  leaveBuySellPolicyBuyTier?: LeaveBuySellPolicyBuyTiersType<T> | null;
}
