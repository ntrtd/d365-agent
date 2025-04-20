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
import type { LoyaltyCardTiersV2Api } from './LoyaltyCardTiersV2Api';
import { RetailAffiliationType } from './RetailAffiliationType';

/**
 * This class represents the entity "LoyaltyCardTiersV2" of service "d365_metadata".
 */
export class LoyaltyCardTiersV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LoyaltyCardTiersV2Type<T>
{
  /**
   * Technical entity name for LoyaltyCardTiersV2.
   */
  static override _entityName = 'LoyaltyCardTiersV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LoyaltyCardTiersV2 entity.
   */
  static _keys = [
    'LoyaltyProgramName',
    'LoyaltyTierAffiliationName',
    'LoyaltyTierId',
    'LoyaltyCardNumber',
    'ValidFrom',
    'ValidTo'
  ];
  /**
   * Loyalty Program Name.
   */
  declare loyaltyProgramName: DeserializedType<T, 'Edm.String'>;
  /**
   * Loyalty Tier Affiliation Name.
   */
  declare loyaltyTierAffiliationName: DeserializedType<T, 'Edm.String'>;
  /**
   * Loyalty Tier Id.
   */
  declare loyaltyTierId: DeserializedType<T, 'Edm.String'>;
  /**
   * Loyalty Card Number.
   */
  declare loyaltyCardNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Affiliation Type.
   * @nullable
   */
  declare affiliationType?: RetailAffiliationType | null;

  constructor(_entityApi: LoyaltyCardTiersV2Api<T>) {
    super(_entityApi);
  }
}

export interface LoyaltyCardTiersV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  loyaltyProgramName: DeserializedType<T, 'Edm.String'>;
  loyaltyTierAffiliationName: DeserializedType<T, 'Edm.String'>;
  loyaltyTierId: DeserializedType<T, 'Edm.String'>;
  loyaltyCardNumber: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  affiliationType?: RetailAffiliationType | null;
}
