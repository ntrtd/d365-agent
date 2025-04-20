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
import type { CdsOpenPurchasePriceJournalLinesApi } from './CdsOpenPurchasePriceJournalLinesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CDSOpenPurchasePriceJournalLines" of service "d365_metadata".
 */
export class CdsOpenPurchasePriceJournalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CdsOpenPurchasePriceJournalLinesType<T>
{
  /**
   * Technical entity name for CdsOpenPurchasePriceJournalLines.
   */
  static override _entityName = 'CDSOpenPurchasePriceJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsOpenPurchasePriceJournalLines entity.
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
   * Is Procurement Lead Time Using Working Days.
   * @nullable
   */
  declare isProcurementLeadTimeUsingWorkingDays?: NoYes | null;
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
   * Processing Log.
   * @nullable
   */
  declare processingLog?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CdsOpenPurchasePriceJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface CdsOpenPurchasePriceJournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  priceApplicableFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  willSearchContinue?: NoYes | null;
  procurementLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
  attributeBasedPricingId?: DeserializedType<T, 'Edm.String'> | null;
  priceCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  toQuantity: DeserializedType<T, 'Edm.Decimal'>;
  fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  willDeliveryDateControlDisregardLeadTime?: NoYes | null;
  isProcurementLeadTimeUsingWorkingDays?: NoYes | null;
  purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  priceApplicableToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  priceWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  price: DeserializedType<T, 'Edm.Decimal'>;
  priceSiteId?: DeserializedType<T, 'Edm.String'> | null;
  priceVendorGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  processingLog?: DeserializedType<T, 'Edm.String'> | null;
}
