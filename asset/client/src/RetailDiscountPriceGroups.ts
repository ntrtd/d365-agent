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
import type { RetailDiscountPriceGroupsApi } from './RetailDiscountPriceGroupsApi';

/**
 * This class represents the entity "RetailDiscountPriceGroups" of service "d365_metadata".
 */
export class RetailDiscountPriceGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailDiscountPriceGroupsType<T>
{
  /**
   * Technical entity name for RetailDiscountPriceGroups.
   */
  static override _entityName = 'RetailDiscountPriceGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailDiscountPriceGroups entity.
   */
  static _keys = ['dataAreaId', 'OfferId', 'PriceGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Offer Id.
   */
  declare offerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Group Id.
   */
  declare priceGroupId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: RetailDiscountPriceGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailDiscountPriceGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  offerId: DeserializedType<T, 'Edm.String'>;
  priceGroupId: DeserializedType<T, 'Edm.String'>;
}
