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
import type { OpenPurchasePriceJournalLinesApi } from './OpenPurchasePriceJournalLinesApi';
import { NoYes } from './NoYes';
import {
  ReleasedDistinctProductsV2,
  ReleasedDistinctProductsV2Type
} from './ReleasedDistinctProductsV2';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import { PriceVendorGroups, PriceVendorGroupsType } from './PriceVendorGroups';
import { Warehouses, WarehousesType } from './Warehouses';

/**
 * This class represents the entity "OpenPurchasePriceJournalLines" of service "d365_metadata".
 */
export class OpenPurchasePriceJournalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OpenPurchasePriceJournalLinesType<T>
{
  /**
   * Technical entity name for OpenPurchasePriceJournalLines.
   */
  static override _entityName = 'OpenPurchasePriceJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OpenPurchasePriceJournalLines entity.
   */
  static _keys = ['dataAreaId', 'TradeAgreementJournalNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Trade Agreement Journal Number.
   */
  declare tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Procurement Lead Time Days.
   */
  declare procurementLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Quantity Unit Symbol.
   * @nullable
   */
  declare quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
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
   * Is Procurement Lead Time Using Working Days.
   * @nullable
   */
  declare isProcurementLeadTimeUsingWorkingDays?: NoYes | null;
  /**
   * Will Delivery Date Control Disregard Lead Time.
   * @nullable
   */
  declare willDeliveryDateControlDisregardLeadTime?: NoYes | null;
  /**
   * Purchase Price Quantity.
   */
  declare purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price Applicable To Date.
   */
  declare priceApplicableToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Price Warehouse Id.
   * @nullable
   */
  declare priceWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Quantity.
   */
  declare fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
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
   * Price Vendor Group Code.
   * @nullable
   */
  declare priceVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Processing Log.
   * @nullable
   */
  declare processingLog?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedDistinctProductsV2} entity.
   */
  declare releasedDistinctProductV2?: ReleasedDistinctProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare vendorV2?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare operationalSite?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link PriceVendorGroups} entity.
   */
  declare priceVendorGroup?: PriceVendorGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare warehouse?: Warehouses<T> | null;

  constructor(_entityApi: OpenPurchasePriceJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface OpenPurchasePriceJournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  priceApplicableFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  willSearchContinue?: NoYes | null;
  procurementLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  attributeBasedPricingId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  priceCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  toQuantity: DeserializedType<T, 'Edm.Decimal'>;
  fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  isProcurementLeadTimeUsingWorkingDays?: NoYes | null;
  willDeliveryDateControlDisregardLeadTime?: NoYes | null;
  purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  priceApplicableToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  priceWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  price: DeserializedType<T, 'Edm.Decimal'>;
  priceSiteId?: DeserializedType<T, 'Edm.String'> | null;
  priceVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  processingLog?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  releasedDistinctProductV2?: ReleasedDistinctProductsV2Type<T> | null;
  vendorV2?: VendorsV2Type<T> | null;
  operationalSite?: OperationalSitesType<T> | null;
  priceVendorGroup?: PriceVendorGroupsType<T> | null;
  warehouse?: WarehousesType<T> | null;
}
