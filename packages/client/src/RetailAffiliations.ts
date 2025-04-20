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
import type { RetailAffiliationsApi } from './RetailAffiliationsApi';
import { NoYesCombo } from './NoYesCombo';
import {
  LoyaltyCardRewardPointNonTransactionalActivityV2Entity,
  LoyaltyCardRewardPointNonTransactionalActivityV2EntityType
} from './LoyaltyCardRewardPointNonTransactionalActivityV2Entity';
import {
  RetailAffiliationPriceGroups,
  RetailAffiliationPriceGroupsType
} from './RetailAffiliationPriceGroups';
import {
  LoyaltyCardRewardPointNonTransactionalActivities,
  LoyaltyCardRewardPointNonTransactionalActivitiesType
} from './LoyaltyCardRewardPointNonTransactionalActivities';

/**
 * This class represents the entity "RetailAffiliations" of service "d365_metadata".
 */
export class RetailAffiliations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailAffiliationsType<T>
{
  /**
   * Technical entity name for RetailAffiliations.
   */
  static override _entityName = 'RetailAffiliations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailAffiliations entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Hide In Channels.
   * @nullable
   */
  declare hideInChannels?: NoYesCombo | null;
  /**
   * One-to-many navigation property to the {@link LoyaltyCardRewardPointNonTransactionalActivityV2Entity} entity.
   */
  declare loyaltyCardRewardPointNonTransactionalActivityV2Entity: LoyaltyCardRewardPointNonTransactionalActivityV2Entity<T>[];
  /**
   * One-to-many navigation property to the {@link RetailAffiliationPriceGroups} entity.
   */
  declare retailAffiliationPriceGroup: RetailAffiliationPriceGroups<T>[];
  /**
   * One-to-many navigation property to the {@link LoyaltyCardRewardPointNonTransactionalActivities} entity.
   */
  declare loyaltyCardRewardPointNonTransactionalActivity: LoyaltyCardRewardPointNonTransactionalActivities<T>[];

  constructor(_entityApi: RetailAffiliationsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailAffiliationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  hideInChannels?: NoYesCombo | null;
  loyaltyCardRewardPointNonTransactionalActivityV2Entity: LoyaltyCardRewardPointNonTransactionalActivityV2EntityType<T>[];
  retailAffiliationPriceGroup: RetailAffiliationPriceGroupsType<T>[];
  loyaltyCardRewardPointNonTransactionalActivity: LoyaltyCardRewardPointNonTransactionalActivitiesType<T>[];
}
