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
import type { RetailLoyaltyTierTranslationsApi } from './RetailLoyaltyTierTranslationsApi';

/**
 * This class represents the entity "RetailLoyaltyTierTranslations" of service "d365_metadata".
 */
export class RetailLoyaltyTierTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailLoyaltyTierTranslationsType<T>
{
  /**
   * Technical entity name for RetailLoyaltyTierTranslations.
   */
  static override _entityName = 'RetailLoyaltyTierTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailLoyaltyTierTranslations entity.
   */
  static _keys = ['LanguageId', 'LoyaltyProgramName', 'LoyaltyTierId'];
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Loyalty Program Name.
   */
  declare loyaltyProgramName: DeserializedType<T, 'Edm.String'>;
  /**
   * Loyalty Tier Id.
   */
  declare loyaltyTierId: DeserializedType<T, 'Edm.String'>;
  /**
   * Loyalty Tier.
   */
  declare loyaltyTier: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailLoyaltyTierTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailLoyaltyTierTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  languageId: DeserializedType<T, 'Edm.String'>;
  loyaltyProgramName: DeserializedType<T, 'Edm.String'>;
  loyaltyTierId: DeserializedType<T, 'Edm.String'>;
  loyaltyTier: DeserializedType<T, 'Edm.Int64'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
