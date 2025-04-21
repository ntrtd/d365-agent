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
import type { RetailLoyaltyTierPriceGroupsApi } from './RetailLoyaltyTierPriceGroupsApi';

/**
 * This class represents the entity "RetailLoyaltyTierPriceGroups" of service "d365_metadata".
 */
export class RetailLoyaltyTierPriceGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailLoyaltyTierPriceGroupsType<T>
{
  /**
   * Technical entity name for RetailLoyaltyTierPriceGroups.
   */
  static override _entityName = 'RetailLoyaltyTierPriceGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailLoyaltyTierPriceGroups entity.
   */
  static _keys = [
    'PriceGroupId',
    'LoyaltyTierId',
    'PriceGroupCompany',
    'LoyaltyName'
  ];
  /**
   * Price Group Id.
   */
  declare priceGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Loyalty Tier Id.
   */
  declare loyaltyTierId: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Group Company.
   */
  declare priceGroupCompany: DeserializedType<T, 'Edm.String'>;
  /**
   * Loyalty Name.
   */
  declare loyaltyName: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: RetailLoyaltyTierPriceGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailLoyaltyTierPriceGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  priceGroupId: DeserializedType<T, 'Edm.String'>;
  loyaltyTierId: DeserializedType<T, 'Edm.String'>;
  priceGroupCompany: DeserializedType<T, 'Edm.String'>;
  loyaltyName: DeserializedType<T, 'Edm.String'>;
}
