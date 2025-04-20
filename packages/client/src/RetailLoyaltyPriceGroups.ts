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
import type { RetailLoyaltyPriceGroupsApi } from './RetailLoyaltyPriceGroupsApi';
import {
  PriceCustomerGroups,
  PriceCustomerGroupsType
} from './PriceCustomerGroups';
import { RetailLoyalties, RetailLoyaltiesType } from './RetailLoyalties';

/**
 * This class represents the entity "RetailLoyaltyPriceGroups" of service "d365_metadata".
 */
export class RetailLoyaltyPriceGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailLoyaltyPriceGroupsType<T>
{
  /**
   * Technical entity name for RetailLoyaltyPriceGroups.
   */
  static override _entityName = 'RetailLoyaltyPriceGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailLoyaltyPriceGroups entity.
   */
  static _keys = ['dataAreaId', 'LoyaltyName', 'PriceCustomerGroupCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Loyalty Name.
   */
  declare loyaltyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Customer Group Code.
   */
  declare priceCustomerGroupCode: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link PriceCustomerGroups} entity.
   */
  declare priceCustomerGroup?: PriceCustomerGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailLoyalties} entity.
   */
  declare retailLoyalty?: RetailLoyalties<T> | null;

  constructor(_entityApi: RetailLoyaltyPriceGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailLoyaltyPriceGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  loyaltyName: DeserializedType<T, 'Edm.String'>;
  priceCustomerGroupCode: DeserializedType<T, 'Edm.String'>;
  priceCustomerGroup?: PriceCustomerGroupsType<T> | null;
  retailLoyalty?: RetailLoyaltiesType<T> | null;
}
