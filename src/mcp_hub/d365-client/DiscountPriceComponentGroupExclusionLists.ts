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
import type { DiscountPriceComponentGroupExclusionListsApi } from './DiscountPriceComponentGroupExclusionListsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "DiscountPriceComponentGroupExclusionLists" of service "d365_metadata".
 */
export class DiscountPriceComponentGroupExclusionLists<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DiscountPriceComponentGroupExclusionListsType<T>
{
  /**
   * Technical entity name for DiscountPriceComponentGroupExclusionLists.
   */
  static override _entityName = 'DiscountPriceComponentGroupExclusionLists';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiscountPriceComponentGroupExclusionLists entity.
   */
  static _keys = ['dataAreaId', 'OfferId', 'PriceComponentCodeGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Offer Id.
   */
  declare offerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Component Code Group.
   */
  declare priceComponentCodeGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Excluded.
   * @nullable
   */
  declare isExcluded?: NoYes | null;

  constructor(_entityApi: DiscountPriceComponentGroupExclusionListsApi<T>) {
    super(_entityApi);
  }
}

export interface DiscountPriceComponentGroupExclusionListsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  offerId: DeserializedType<T, 'Edm.String'>;
  priceComponentCodeGroup: DeserializedType<T, 'Edm.String'>;
  isExcluded?: NoYes | null;
}
