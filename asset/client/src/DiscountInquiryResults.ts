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
import type { DiscountInquiryResultsApi } from './DiscountInquiryResultsApi';
import { RetailDiscountTypeEnum } from './RetailDiscountTypeEnum';
import { RetailMixAndMatchDiscountType } from './RetailMixAndMatchDiscountType';
import { NoYes } from './NoYes';
import { RetailLeastExpensiveMode } from './RetailLeastExpensiveMode';
import { GupDiscountMaxCriteriaType } from './GupDiscountMaxCriteriaType';
import { GupFreeItemRepeatable } from './GupFreeItemRepeatable';
import { RetailDisabledEnabled } from './RetailDisabledEnabled';
import { RetailDiscountOfferTypeBase } from './RetailDiscountOfferTypeBase';
import { GupFreeItemCalculationMethod } from './GupFreeItemCalculationMethod';
import { RetailDateValidationTypeBase } from './RetailDateValidationTypeBase';
import { GupFreeItemCriteriaType } from './GupFreeItemCriteriaType';
import { GupPriceComponent } from './GupPriceComponent';
import { RetailPricingDiscountProcessingStatus } from './RetailPricingDiscountProcessingStatus';
import { GupGroupAll } from './GupGroupAll';
import { RetailDiscountConcurrency } from './RetailDiscountConcurrency';

/**
 * This class represents the entity "DiscountInquiryResults" of service "d365_metadata".
 */
export class DiscountInquiryResults<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DiscountInquiryResultsType<T>
{
  /**
   * Technical entity name for DiscountInquiryResults.
   */
  static override _entityName = 'DiscountInquiryResults';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiscountInquiryResults entity.
   */
  static _keys = ['dataAreaId', 'OfferId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Offer Id.
   */
  declare offerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Header 10.
   * @nullable
   */
  declare header10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multibuy Discount Type.
   * @nullable
   */
  declare multibuyDiscountType?: RetailDiscountTypeEnum | null;
  /**
   * Mix And Match Discount Type.
   * @nullable
   */
  declare mixAndMatchDiscountType?: RetailMixAndMatchDiscountType | null;
  /**
   * Disc On Pos.
   * @nullable
   */
  declare discOnPos?: NoYes | null;
  /**
   * Discount Percent Value.
   */
  declare discountPercentValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Code.
   * @nullable
   */
  declare discountCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Mix And Match Least Expensive Mode.
   * @nullable
   */
  declare mixAndMatchLeastExpensiveMode?: RetailLeastExpensiveMode | null;
  /**
   * Max Criteria Type.
   * @nullable
   */
  declare maxCriteriaType?: GupDiscountMaxCriteriaType | null;
  /**
   * Repeatable.
   * @nullable
   */
  declare repeatable?: GupFreeItemRepeatable | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: RetailDisabledEnabled | null;
  /**
   * Disabled Since.
   */
  declare disabledSince: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Periodic Discount Type.
   * @nullable
   */
  declare periodicDiscountType?: RetailDiscountOfferTypeBase | null;
  /**
   * Header 15.
   * @nullable
   */
  declare header15?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Attribute Group Name.
   * @nullable
   */
  declare priceAttributeGroupName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Header 6.
   * @nullable
   */
  declare header6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Gup Discount.
   * @nullable
   */
  declare isGupDiscount?: NoYes | null;
  /**
   * Free Item Calculation Method.
   * @nullable
   */
  declare freeItemCalculationMethod?: GupFreeItemCalculationMethod | null;
  /**
   * Pricing Priority Number.
   */
  declare pricingPriorityNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Mix And Match Deal Price.
   */
  declare mixAndMatchDealPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Discount Code Required.
   * @nullable
   */
  declare isDiscountCodeRequired?: NoYes | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Date Validation Type.
   * @nullable
   */
  declare dateValidationType?: RetailDateValidationTypeBase | null;
  /**
   * Free Item Criteria Type.
   * @nullable
   */
  declare freeItemCriteriaType?: GupFreeItemCriteriaType | null;
  /**
   * Print Description On Fiscal Receipt.
   * @nullable
   */
  declare printDescriptionOnFiscalReceipt?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Max Qty Or Amount.
   */
  declare maxQtyOrAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price Component Code Name.
   * @nullable
   */
  declare priceComponentCodeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mix And Match Count Non Discount Items.
   * @nullable
   */
  declare mixAndMatchCountNonDiscountItems?: NoYes | null;
  /**
   * Match All Associated Price Groups.
   * @nullable
   */
  declare matchAllAssociatedPriceGroups?: NoYes | null;
  /**
   * Price Component Type.
   * @nullable
   */
  declare priceComponentType?: GupPriceComponent | null;
  /**
   * Mix And Match Number Of Times Applicable.
   */
  declare mixAndMatchNumberOfTimesApplicable: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Mix And Match Discount Amount.
   */
  declare mixAndMatchDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Generates Bundle Id.
   * @nullable
   */
  declare generatesBundleId?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Processing Status.
   * @nullable
   */
  declare processingStatus?: RetailPricingDiscountProcessingStatus | null;
  /**
   * Discount Vendor Claim Group Name.
   * @nullable
   */
  declare discountVendorClaimGroupName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Mix And Match No Of Least Expensive Lines.
   */
  declare mixAndMatchNoOfLeastExpensiveLines: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Discount Ledger Dimension Display Value.
   * @nullable
   */
  declare discountLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Validation Period Id.
   * @nullable
   */
  declare validationPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Combination Header Structure.
   * @nullable
   */
  declare combinationHeaderStructure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offer Quantity Limit.
   */
  declare offerQuantityLimit: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Header Pricing Group Code.
   * @nullable
   */
  declare headerPricingGroupCode?: GupGroupAll | null;
  /**
   * Concurrency Mode.
   * @nullable
   */
  declare concurrencyMode?: RetailDiscountConcurrency | null;
  /**
   * Bar Code.
   * @nullable
   */
  declare barCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Disclaimer.
   * @nullable
   */
  declare disclaimer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Should Use Interval.
   * @nullable
   */
  declare shouldUseInterval?: NoYes | null;
  /**
   * Header 12.
   * @nullable
   */
  declare header12?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 13.
   * @nullable
   */
  declare header13?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Threshold Count Non Discount Items.
   * @nullable
   */
  declare thresholdCountNonDiscountItems?: NoYes | null;

  constructor(_entityApi: DiscountInquiryResultsApi<T>) {
    super(_entityApi);
  }
}

export interface DiscountInquiryResultsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  offerId: DeserializedType<T, 'Edm.String'>;
  header10?: DeserializedType<T, 'Edm.String'> | null;
  multibuyDiscountType?: RetailDiscountTypeEnum | null;
  mixAndMatchDiscountType?: RetailMixAndMatchDiscountType | null;
  discOnPos?: NoYes | null;
  discountPercentValue: DeserializedType<T, 'Edm.Decimal'>;
  discountCode?: DeserializedType<T, 'Edm.String'> | null;
  header14?: DeserializedType<T, 'Edm.String'> | null;
  header11?: DeserializedType<T, 'Edm.String'> | null;
  mixAndMatchLeastExpensiveMode?: RetailLeastExpensiveMode | null;
  maxCriteriaType?: GupDiscountMaxCriteriaType | null;
  repeatable?: GupFreeItemRepeatable | null;
  status?: RetailDisabledEnabled | null;
  disabledSince: DeserializedType<T, 'Edm.DateTimeOffset'>;
  header9?: DeserializedType<T, 'Edm.String'> | null;
  header8?: DeserializedType<T, 'Edm.String'> | null;
  periodicDiscountType?: RetailDiscountOfferTypeBase | null;
  header15?: DeserializedType<T, 'Edm.String'> | null;
  priceAttributeGroupName?: DeserializedType<T, 'Edm.String'> | null;
  header1?: DeserializedType<T, 'Edm.String'> | null;
  header3?: DeserializedType<T, 'Edm.String'> | null;
  header2?: DeserializedType<T, 'Edm.String'> | null;
  header5?: DeserializedType<T, 'Edm.String'> | null;
  header4?: DeserializedType<T, 'Edm.String'> | null;
  header7?: DeserializedType<T, 'Edm.String'> | null;
  header6?: DeserializedType<T, 'Edm.String'> | null;
  isGupDiscount?: NoYes | null;
  freeItemCalculationMethod?: GupFreeItemCalculationMethod | null;
  pricingPriorityNumber: DeserializedType<T, 'Edm.Int32'>;
  mixAndMatchDealPrice: DeserializedType<T, 'Edm.Decimal'>;
  isDiscountCodeRequired?: NoYes | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dateValidationType?: RetailDateValidationTypeBase | null;
  freeItemCriteriaType?: GupFreeItemCriteriaType | null;
  printDescriptionOnFiscalReceipt?: DeserializedType<T, 'Edm.String'> | null;
  maxQtyOrAmount: DeserializedType<T, 'Edm.Decimal'>;
  priceComponentCodeName?: DeserializedType<T, 'Edm.String'> | null;
  mixAndMatchCountNonDiscountItems?: NoYes | null;
  matchAllAssociatedPriceGroups?: NoYes | null;
  priceComponentType?: GupPriceComponent | null;
  mixAndMatchNumberOfTimesApplicable: DeserializedType<T, 'Edm.Int32'>;
  mixAndMatchDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  generatesBundleId?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  processingStatus?: RetailPricingDiscountProcessingStatus | null;
  discountVendorClaimGroupName?: DeserializedType<T, 'Edm.String'> | null;
  mixAndMatchNoOfLeastExpensiveLines: DeserializedType<T, 'Edm.Int32'>;
  discountLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  validationPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  combinationHeaderStructure?: DeserializedType<T, 'Edm.String'> | null;
  offerQuantityLimit: DeserializedType<T, 'Edm.Int32'>;
  headerPricingGroupCode?: GupGroupAll | null;
  concurrencyMode?: RetailDiscountConcurrency | null;
  barCode?: DeserializedType<T, 'Edm.String'> | null;
  disclaimer?: DeserializedType<T, 'Edm.String'> | null;
  shouldUseInterval?: NoYes | null;
  header12?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  header13?: DeserializedType<T, 'Edm.String'> | null;
  thresholdCountNonDiscountItems?: NoYes | null;
}
