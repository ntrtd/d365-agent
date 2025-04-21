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
import type { RetailLoyaltyRewardPointTranslationsApi } from './RetailLoyaltyRewardPointTranslationsApi';

/**
 * This class represents the entity "RetailLoyaltyRewardPointTranslations" of service "d365_metadata".
 */
export class RetailLoyaltyRewardPointTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailLoyaltyRewardPointTranslationsType<T>
{
  /**
   * Technical entity name for RetailLoyaltyRewardPointTranslations.
   */
  static override _entityName = 'RetailLoyaltyRewardPointTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailLoyaltyRewardPointTranslations entity.
   */
  static _keys = ['LanguageId', 'RetailLoyaltyRewardPointId'];
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Retail Loyalty Reward Point Id.
   */
  declare retailLoyaltyRewardPointId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailLoyaltyRewardPointTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailLoyaltyRewardPointTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  languageId: DeserializedType<T, 'Edm.String'>;
  retailLoyaltyRewardPointId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
