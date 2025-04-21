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
import type { InventItemPendingPricesApi } from './InventItemPendingPricesApi';
import { CostingVersionPriceType } from './CostingVersionPriceType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "InventItemPendingPrices" of service "d365_metadata".
 */
export class InventItemPendingPrices<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventItemPendingPricesType<T>
{
  /**
   * Technical entity name for InventItemPendingPrices.
   */
  static override _entityName = 'InventItemPendingPrices';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventItemPendingPrices entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemNumber',
    'CostingVersionId',
    'FromDate',
    'PriceType',
    'PriceSiteId',
    'ProductConfigurationId',
    'ProductColorId',
    'ProductSizeId',
    'ProductStyleId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Costing Version Id.
   */
  declare costingVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Price Type.
   * @nullable
   */
  declare priceType?: CostingVersionPriceType | null;
  /**
   * Price Site Id.
   */
  declare priceSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Unit Symbol.
   * @nullable
   */
  declare productUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Charges Quantity.
   */
  declare priceChargesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price Quantity.
   */
  declare priceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price.
   */
  declare price: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Price Charges.
   */
  declare fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Price Including Charges.
   * @nullable
   */
  declare isPriceIncludingCharges?: NoYes | null;

  constructor(_entityApi: InventItemPendingPricesApi<T>) {
    super(_entityApi);
  }
}

export interface InventItemPendingPricesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  costingVersionId: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  priceType?: CostingVersionPriceType | null;
  priceSiteId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  priceChargesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  priceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  price: DeserializedType<T, 'Edm.Decimal'>;
  fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  isPriceIncludingCharges?: NoYes | null;
}
