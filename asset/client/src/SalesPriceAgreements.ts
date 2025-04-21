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
import type { SalesPriceAgreementsApi } from './SalesPriceAgreementsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "SalesPriceAgreements" of service "d365_metadata".
 */
export class SalesPriceAgreements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesPriceAgreementsType<T>
{
  /**
   * Technical entity name for SalesPriceAgreements.
   */
  static override _entityName = 'SalesPriceAgreements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesPriceAgreements entity.
   */
  static _keys = ['dataAreaId', 'RecordId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Price Applicable From Date.
   */
  declare priceApplicableFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Will Search Continue.
   * @nullable
   */
  declare willSearchContinue?: NoYes | null;
  /**
   * Sales Price Quantity.
   */
  declare salesPriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity Unity Symbol.
   * @nullable
   */
  declare quantityUnitySymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attribute Based Pricing Id.
   * @nullable
   */
  declare attributeBasedPricingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Currency Code.
   * @nullable
   */
  declare priceCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Quantity.
   */
  declare toQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Price Charges.
   */
  declare fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Will Delivery Date Control Disregard Lead Time.
   * @nullable
   */
  declare willDeliveryDateControlDisregardLeadTime?: NoYes | null;
  /**
   * Price Warehouse Id.
   * @nullable
   */
  declare priceWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Applicable To Date.
   */
  declare priceApplicableToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Lead Time Days.
   */
  declare salesLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * From Quantity.
   */
  declare fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Customer Group Code.
   * @nullable
   */
  declare priceCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price.
   */
  declare price: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price Site Id.
   * @nullable
   */
  declare priceSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Generic Currency Search Enabled.
   * @nullable
   */
  declare isGenericCurrencySearchEnabled?: NoYes | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Productconfiguration Id.
   * @nullable
   */
  declare productconfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SalesPriceAgreementsApi<T>) {
    super(_entityApi);
  }
}

export interface SalesPriceAgreementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  recordId: DeserializedType<T, 'Edm.Int64'>;
  priceApplicableFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  willSearchContinue?: NoYes | null;
  salesPriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  quantityUnitySymbol?: DeserializedType<T, 'Edm.String'> | null;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
  attributeBasedPricingId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  priceCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  toQuantity: DeserializedType<T, 'Edm.Decimal'>;
  fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  willDeliveryDateControlDisregardLeadTime?: NoYes | null;
  priceWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  priceApplicableToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  priceCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  price: DeserializedType<T, 'Edm.Decimal'>;
  priceSiteId?: DeserializedType<T, 'Edm.String'> | null;
  isGenericCurrencySearchEnabled?: NoYes | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  productconfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
}
