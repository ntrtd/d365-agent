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
import type { ItemBasePricePendingApi } from './ItemBasePricePendingApi';
import { GupBasePriceType } from './GupBasePriceType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ItemBasePricePending" of service "d365_metadata".
 */
export class ItemBasePricePending<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ItemBasePricePendingType<T>
{
  /**
   * Technical entity name for ItemBasePricePending.
   */
  static override _entityName = 'ItemBasePricePending';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemBasePricePending entity.
   */
  static _keys = [
    'dataAreaId',
    'PriceType',
    'ItemId',
    'VersionId',
    'FromDate',
    'ProductConfigurationId',
    'ProductColorId',
    'PriceWarehouseId',
    'PriceSiteId',
    'ProductSizeId',
    'ProductStyleId',
    'ProductVersionId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Type.
   * @nullable
   */
  declare priceType?: GupBasePriceType | null;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Version Id.
   */
  declare versionId: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Warehouse Id.
   */
  declare priceWarehouseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Site Id.
   */
  declare priceSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Version Id.
   */
  declare productVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Markup.
   */
  declare markup: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price.
   */
  declare price: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price Allocate Markup.
   * @nullable
   */
  declare priceAllocateMarkup?: NoYes | null;
  /**
   * Markup Qty.
   */
  declare markupQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Id.
   * @nullable
   */
  declare unitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculated.
   * @nullable
   */
  declare calculated?: NoYes | null;
  /**
   * Price Qty.
   */
  declare priceQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Display Name.
   * @nullable
   */
  declare itemDisplayName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ItemBasePricePendingApi<T>) {
    super(_entityApi);
  }
}

export interface ItemBasePricePendingType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  priceType?: GupBasePriceType | null;
  itemId: DeserializedType<T, 'Edm.String'>;
  versionId: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  priceWarehouseId: DeserializedType<T, 'Edm.String'>;
  priceSiteId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  markup: DeserializedType<T, 'Edm.Decimal'>;
  price: DeserializedType<T, 'Edm.Decimal'>;
  priceAllocateMarkup?: NoYes | null;
  markupQty: DeserializedType<T, 'Edm.Decimal'>;
  unitId?: DeserializedType<T, 'Edm.String'> | null;
  calculated?: NoYes | null;
  priceQty: DeserializedType<T, 'Edm.Decimal'>;
  itemDisplayName?: DeserializedType<T, 'Edm.String'> | null;
}
