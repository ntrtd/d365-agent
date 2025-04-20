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
import type { RetailLoyaltyCardTiersApi } from './RetailLoyaltyCardTiersApi';

/**
 * This class represents the entity "RetailLoyaltyCardTiers" of service "d365_metadata".
 */
export class RetailLoyaltyCardTiers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailLoyaltyCardTiersType<T>
{
  /**
   * Technical entity name for RetailLoyaltyCardTiers.
   */
  static override _entityName = 'RetailLoyaltyCardTiers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailLoyaltyCardTiers entity.
   */
  static _keys = [
    'LoyaltyCard',
    'LoyaltyTier',
    'ValidFrom',
    'ValidTo',
    'LoyaltyProgramName'
  ];
  /**
   * Loyalty Card.
   */
  declare loyaltyCard: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Loyalty Tier.
   */
  declare loyaltyTier: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Loyalty Program Name.
   */
  declare loyaltyProgramName: DeserializedType<T, 'Edm.String'>;
  /**
   * Loyalty Tier Id.
   * @nullable
   */
  declare loyaltyTierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Affiliation.
   */
  declare affiliation: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Loyalty Tier Affiliation Name.
   * @nullable
   */
  declare loyaltyTierAffiliationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loyalty Card Number.
   * @nullable
   */
  declare loyaltyCardNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailLoyaltyCardTiersApi<T>) {
    super(_entityApi);
  }
}

export interface RetailLoyaltyCardTiersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  loyaltyCard: DeserializedType<T, 'Edm.Int64'>;
  loyaltyTier: DeserializedType<T, 'Edm.Int64'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  loyaltyProgramName: DeserializedType<T, 'Edm.String'>;
  loyaltyTierId?: DeserializedType<T, 'Edm.String'> | null;
  affiliation: DeserializedType<T, 'Edm.Int64'>;
  loyaltyTierAffiliationName?: DeserializedType<T, 'Edm.String'> | null;
  loyaltyCardNumber?: DeserializedType<T, 'Edm.String'> | null;
}
