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
import type { DiscountAndMarginComponentPriceAdjustmentsApi } from './DiscountAndMarginComponentPriceAdjustmentsApi';
import { RetailDiscountTypeEnum } from './RetailDiscountTypeEnum';
import { RetailMixAndMatchDiscountType } from './RetailMixAndMatchDiscountType';
import { RetailLeastExpensiveMode } from './RetailLeastExpensiveMode';
import { GupDiscountMaxCriteriaType } from './GupDiscountMaxCriteriaType';
import { GupFreeItemRepeatable } from './GupFreeItemRepeatable';
import { RetailDisabledEnabled } from './RetailDisabledEnabled';
import { RetailDiscountOfferTypeBase } from './RetailDiscountOfferTypeBase';
import { GupFreeItemCalculationMethod } from './GupFreeItemCalculationMethod';
import { NoYes } from './NoYes';
import { RetailDateValidationTypeBase } from './RetailDateValidationTypeBase';
import { GupFreeItemCriteriaType } from './GupFreeItemCriteriaType';
import { GupGroupAll } from './GupGroupAll';
import { RetailPricingDiscountProcessingStatus } from './RetailPricingDiscountProcessingStatus';
import { RetailDiscountConcurrency } from './RetailDiscountConcurrency';
import {
  DiscountAndMarginComponentPriceAdjustmentLines,
  DiscountAndMarginComponentPriceAdjustmentLinesType
} from './DiscountAndMarginComponentPriceAdjustmentLines';

/**
 * This class represents the entity "DiscountAndMarginComponentPriceAdjustments" of service "d365_metadata".
 */
export class DiscountAndMarginComponentPriceAdjustments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DiscountAndMarginComponentPriceAdjustmentsType<T>
{
  /**
   * Technical entity name for DiscountAndMarginComponentPriceAdjustments.
   */
  static override _entityName = 'DiscountAndMarginComponentPriceAdjustments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiscountAndMarginComponentPriceAdjustments entity.
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
   * Discount Percent Value.
   */
  declare discountPercentValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Code.
   * @nullable
   */
  declare discountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Of Measure Symbol.
   * @nullable
   */
  declare unitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
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
   * Header Exclusion.
   * @nullable
   */
  declare headerExclusion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Component Code Name.
   * @nullable
   */
  declare priceComponentCodeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Match All Associated Price Groups.
   * @nullable
   */
  declare matchAllAssociatedPriceGroups?: NoYes | null;
  /**
   * Price Attribute Group Type.
   * @nullable
   */
  declare priceAttributeGroupType?: GupGroupAll | null;
  /**
   * Mix And Match Discount Amount.
   */
  declare mixAndMatchDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Claimable.
   * @nullable
   */
  declare claimable?: NoYes | null;
  /**
   * Offer Quantity Limit.
   */
  declare offerQuantityLimit: DeserializedType<T, 'Edm.Int32'>;
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
  /**
   * Discount Claim Posting Offset.
   * @nullable
   */
  declare discountClaimPostingOffset?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link DiscountAndMarginComponentPriceAdjustmentLines} entity.
   */
  declare discountAndMarginComponentPriceAdjustmentLine: DiscountAndMarginComponentPriceAdjustmentLines<T>[];

  constructor(_entityApi: DiscountAndMarginComponentPriceAdjustmentsApi<T>) {
    super(_entityApi);
  }
}

export interface DiscountAndMarginComponentPriceAdjustmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  offerId: DeserializedType<T, 'Edm.String'>;
  header10?: DeserializedType<T, 'Edm.String'> | null;
  multibuyDiscountType?: RetailDiscountTypeEnum | null;
  mixAndMatchDiscountType?: RetailMixAndMatchDiscountType | null;
  discountPercentValue: DeserializedType<T, 'Edm.Decimal'>;
  discountCode?: DeserializedType<T, 'Edm.String'> | null;
  unitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
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
  freeItemCalculationMethod?: GupFreeItemCalculationMethod | null;
  pricingPriorityNumber: DeserializedType<T, 'Edm.Int32'>;
  mixAndMatchDealPrice: DeserializedType<T, 'Edm.Decimal'>;
  isDiscountCodeRequired?: NoYes | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dateValidationType?: RetailDateValidationTypeBase | null;
  freeItemCriteriaType?: GupFreeItemCriteriaType | null;
  printDescriptionOnFiscalReceipt?: DeserializedType<T, 'Edm.String'> | null;
  maxQtyOrAmount: DeserializedType<T, 'Edm.Decimal'>;
  headerExclusion?: DeserializedType<T, 'Edm.String'> | null;
  priceComponentCodeName?: DeserializedType<T, 'Edm.String'> | null;
  matchAllAssociatedPriceGroups?: NoYes | null;
  priceAttributeGroupType?: GupGroupAll | null;
  mixAndMatchDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  processingStatus?: RetailPricingDiscountProcessingStatus | null;
  discountVendorClaimGroupName?: DeserializedType<T, 'Edm.String'> | null;
  mixAndMatchNoOfLeastExpensiveLines: DeserializedType<T, 'Edm.Int32'>;
  validationPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  combinationHeaderStructure?: DeserializedType<T, 'Edm.String'> | null;
  claimable?: NoYes | null;
  offerQuantityLimit: DeserializedType<T, 'Edm.Int32'>;
  concurrencyMode?: RetailDiscountConcurrency | null;
  barCode?: DeserializedType<T, 'Edm.String'> | null;
  disclaimer?: DeserializedType<T, 'Edm.String'> | null;
  shouldUseInterval?: NoYes | null;
  header12?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  header13?: DeserializedType<T, 'Edm.String'> | null;
  thresholdCountNonDiscountItems?: NoYes | null;
  discountClaimPostingOffset?: DeserializedType<T, 'Edm.String'> | null;
  discountAndMarginComponentPriceAdjustmentLine: DiscountAndMarginComponentPriceAdjustmentLinesType<T>[];
}
