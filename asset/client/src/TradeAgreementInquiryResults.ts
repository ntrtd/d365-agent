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
import type { TradeAgreementInquiryResultsApi } from './TradeAgreementInquiryResultsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "TradeAgreementInquiryResults" of service "d365_metadata".
 */
export class TradeAgreementInquiryResults<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TradeAgreementInquiryResultsType<T>
{
  /**
   * Technical entity name for TradeAgreementInquiryResults.
   */
  static override _entityName = 'TradeAgreementInquiryResults';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TradeAgreementInquiryResults entity.
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
   * Header 10.
   * @nullable
   */
  declare header10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Generic Currency Search Enabled.
   * @nullable
   */
  declare isGenericCurrencySearchEnabled?: NoYes | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 14.
   * @nullable
   */
  declare header14?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 11.
   * @nullable
   */
  declare header11?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 9.
   * @nullable
   */
  declare header9?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 8.
   * @nullable
   */
  declare header8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 15.
   * @nullable
   */
  declare header15?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 1.
   * @nullable
   */
  declare header1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 3.
   * @nullable
   */
  declare header3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 2.
   * @nullable
   */
  declare header2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 5.
   * @nullable
   */
  declare header5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 4.
   * @nullable
   */
  declare header4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 7.
   * @nullable
   */
  declare header7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 6.
   * @nullable
   */
  declare header6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Group.
   * @nullable
   */
  declare priceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Price Quantity.
   */
  declare salesPriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Processing Log.
   * @nullable
   */
  declare processingLog?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Price Charges.
   */
  declare fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line 13.
   * @nullable
   */
  declare line13?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Component Code Name.
   * @nullable
   */
  declare priceComponentCodeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 7.
   * @nullable
   */
  declare line7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 6.
   * @nullable
   */
  declare line6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 5.
   * @nullable
   */
  declare line5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 4.
   * @nullable
   */
  declare line4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 3.
   * @nullable
   */
  declare line3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 2.
   * @nullable
   */
  declare line2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 1.
   * @nullable
   */
  declare line1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Site Id.
   * @nullable
   */
  declare priceSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 12.
   * @nullable
   */
  declare line12?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Customer Group Code.
   * @nullable
   */
  declare priceCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 9.
   * @nullable
   */
  declare line9?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 8.
   * @nullable
   */
  declare line8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Lead Time Days.
   */
  declare salesLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Unit Id.
   * @nullable
   */
  declare unitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price From Date.
   */
  declare priceFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Price Apply Adjustment.
   * @nullable
   */
  declare priceApplyAdjustment?: NoYes | null;
  /**
   * Line 15.
   * @nullable
   */
  declare line15?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Quantity.
   */
  declare toQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Attribute Based Pricing Id.
   * @nullable
   */
  declare attributeBasedPricingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 14.
   * @nullable
   */
  declare line14?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 11.
   * @nullable
   */
  declare line11?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Delivery Date Control Disregard Lead Time.
   * @nullable
   */
  declare willDeliveryDateControlDisregardLeadTime?: NoYes | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Combination Header Structure.
   * @nullable
   */
  declare combinationHeaderStructure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Applies To All.
   * @nullable
   */
  declare unitAppliesToAll?: NoYes | null;
  /**
   * Combination Line Structure.
   * @nullable
   */
  declare combinationLineStructure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 10.
   * @nullable
   */
  declare line10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Component Combination.
   * @nullable
   */
  declare priceComponentCombination?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Quantity.
   */
  declare fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price.
   */
  declare price: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 12.
   * @nullable
   */
  declare header12?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Search Continue.
   * @nullable
   */
  declare willSearchContinue?: NoYes | null;
  /**
   * Header 13.
   * @nullable
   */
  declare header13?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Currency Code.
   * @nullable
   */
  declare priceCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price To Date.
   */
  declare priceToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Price Warehouse Id.
   * @nullable
   */
  declare priceWarehouseId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TradeAgreementInquiryResultsApi<T>) {
    super(_entityApi);
  }
}

export interface TradeAgreementInquiryResultsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  header10?: DeserializedType<T, 'Edm.String'> | null;
  isGenericCurrencySearchEnabled?: NoYes | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  header14?: DeserializedType<T, 'Edm.String'> | null;
  header11?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  header9?: DeserializedType<T, 'Edm.String'> | null;
  header8?: DeserializedType<T, 'Edm.String'> | null;
  header15?: DeserializedType<T, 'Edm.String'> | null;
  header1?: DeserializedType<T, 'Edm.String'> | null;
  header3?: DeserializedType<T, 'Edm.String'> | null;
  header2?: DeserializedType<T, 'Edm.String'> | null;
  header5?: DeserializedType<T, 'Edm.String'> | null;
  header4?: DeserializedType<T, 'Edm.String'> | null;
  header7?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  header6?: DeserializedType<T, 'Edm.String'> | null;
  priceGroup?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  salesPriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  processingLog?: DeserializedType<T, 'Edm.String'> | null;
  fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  line13?: DeserializedType<T, 'Edm.String'> | null;
  priceComponentCodeName?: DeserializedType<T, 'Edm.String'> | null;
  line7?: DeserializedType<T, 'Edm.String'> | null;
  line6?: DeserializedType<T, 'Edm.String'> | null;
  line5?: DeserializedType<T, 'Edm.String'> | null;
  line4?: DeserializedType<T, 'Edm.String'> | null;
  line3?: DeserializedType<T, 'Edm.String'> | null;
  line2?: DeserializedType<T, 'Edm.String'> | null;
  line1?: DeserializedType<T, 'Edm.String'> | null;
  priceSiteId?: DeserializedType<T, 'Edm.String'> | null;
  line12?: DeserializedType<T, 'Edm.String'> | null;
  priceCustomerGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  line9?: DeserializedType<T, 'Edm.String'> | null;
  line8?: DeserializedType<T, 'Edm.String'> | null;
  salesLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  unitId?: DeserializedType<T, 'Edm.String'> | null;
  priceFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  priceApplyAdjustment?: NoYes | null;
  line15?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  toQuantity: DeserializedType<T, 'Edm.Decimal'>;
  attributeBasedPricingId?: DeserializedType<T, 'Edm.String'> | null;
  line14?: DeserializedType<T, 'Edm.String'> | null;
  line11?: DeserializedType<T, 'Edm.String'> | null;
  willDeliveryDateControlDisregardLeadTime?: NoYes | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  combinationHeaderStructure?: DeserializedType<T, 'Edm.String'> | null;
  unitAppliesToAll?: NoYes | null;
  combinationLineStructure?: DeserializedType<T, 'Edm.String'> | null;
  line10?: DeserializedType<T, 'Edm.String'> | null;
  priceComponentCombination?: DeserializedType<T, 'Edm.String'> | null;
  fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  price: DeserializedType<T, 'Edm.Decimal'>;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  header12?: DeserializedType<T, 'Edm.String'> | null;
  willSearchContinue?: NoYes | null;
  header13?: DeserializedType<T, 'Edm.String'> | null;
  priceCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  priceToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  priceWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
}
