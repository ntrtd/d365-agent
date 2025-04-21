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
import type { InventItemPricesV2Api } from './InventItemPricesV2Api';
import { CostingVersionPriceType } from './CostingVersionPriceType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "InventItemPricesV2" of service "d365_metadata".
 */
export class InventItemPricesV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InventItemPricesV2Type<T>
{
  /**
   * Technical entity name for InventItemPricesV2.
   */
  static override _entityName = 'InventItemPricesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventItemPricesV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemNumber',
    'CostingVersionId',
    'PriceType',
    'FromDate',
    'PriceSiteId',
    'ProductConfigurationId',
    'ProductColorId',
    'ProductSizeId',
    'ProductStyleId',
    'ProductVersionId',
    'IsActive',
    'PriceCreatedDateTime'
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
   * Price Type.
   * @nullable
   */
  declare priceType?: CostingVersionPriceType | null;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Product Version Id.
   */
  declare productVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * Price Created Date Time.
   */
  declare priceCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Calculation Number.
   * @nullable
   */
  declare calculationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Price Including Charges.
   * @nullable
   */
  declare isPriceIncludingCharges?: NoYes | null;

  constructor(_entityApi: InventItemPricesV2Api<T>) {
    super(_entityApi);
  }
}

export interface InventItemPricesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  costingVersionId: DeserializedType<T, 'Edm.String'>;
  priceType?: CostingVersionPriceType | null;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  priceSiteId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  isActive?: NoYes | null;
  priceCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  priceChargesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  priceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  price: DeserializedType<T, 'Edm.Decimal'>;
  fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  calculationNumber?: DeserializedType<T, 'Edm.String'> | null;
  isPriceIncludingCharges?: NoYes | null;
}
