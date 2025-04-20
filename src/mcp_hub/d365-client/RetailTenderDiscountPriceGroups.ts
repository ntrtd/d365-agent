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
import type { RetailTenderDiscountPriceGroupsApi } from './RetailTenderDiscountPriceGroupsApi';

/**
 * This class represents the entity "RetailTenderDiscountPriceGroups" of service "d365_metadata".
 */
export class RetailTenderDiscountPriceGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTenderDiscountPriceGroupsType<T>
{
  /**
   * Technical entity name for RetailTenderDiscountPriceGroups.
   */
  static override _entityName = 'RetailTenderDiscountPriceGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTenderDiscountPriceGroups entity.
   */
  static _keys = ['dataAreaId', 'PriceGroupId', 'OfferId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Group Id.
   */
  declare priceGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Offer Id.
   */
  declare offerId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: RetailTenderDiscountPriceGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTenderDiscountPriceGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  priceGroupId: DeserializedType<T, 'Edm.String'>;
  offerId: DeserializedType<T, 'Edm.String'>;
}
