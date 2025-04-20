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
import type { RetailLoyaltyTiersApi } from './RetailLoyaltyTiersApi';

/**
 * This class represents the entity "RetailLoyaltyTiers" of service "d365_metadata".
 */
export class RetailLoyaltyTiers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailLoyaltyTiersType<T>
{
  /**
   * Technical entity name for RetailLoyaltyTiers.
   */
  static override _entityName = 'RetailLoyaltyTiers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailLoyaltyTiers entity.
   */
  static _keys = ['LoyaltyName', 'TierId'];
  /**
   * Loyalty Name.
   */
  declare loyaltyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Tier Id.
   */
  declare tierId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid Date Interval.
   * @nullable
   */
  declare validDateInterval?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tier Level.
   */
  declare tierLevel: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailLoyaltyTiersApi<T>) {
    super(_entityApi);
  }
}

export interface RetailLoyaltyTiersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  loyaltyName: DeserializedType<T, 'Edm.String'>;
  tierId: DeserializedType<T, 'Edm.String'>;
  validDateInterval?: DeserializedType<T, 'Edm.String'> | null;
  tierLevel: DeserializedType<T, 'Edm.Decimal'>;
}
