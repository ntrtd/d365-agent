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
import type { RetailDiscountsApi } from './RetailDiscountsApi';
import { RetailPricingDiscountProcessingStatus } from './RetailPricingDiscountProcessingStatus';
import { RetailMixAndMatchDiscountType } from './RetailMixAndMatchDiscountType';
import { NoYes } from './NoYes';
import { RetailDisabledEnabled } from './RetailDisabledEnabled';
import { RetailDiscountTypeEnum } from './RetailDiscountTypeEnum';
import { RetailDiscountConcurrency } from './RetailDiscountConcurrency';
import { RetailDateValidationTypeBase } from './RetailDateValidationTypeBase';
import { RetailLeastExpensiveMode } from './RetailLeastExpensiveMode';
import { RetailDiscountOfferTypeBase } from './RetailDiscountOfferTypeBase';
import {
  RetailDiscountLines,
  RetailDiscountLinesType
} from './RetailDiscountLines';

/**
 * This class represents the entity "RetailDiscounts" of service "d365_metadata".
 */
export class RetailDiscounts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailDiscountsType<T>
{
  /**
   * Technical entity name for RetailDiscounts.
   */
  static override _entityName = 'RetailDiscounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailDiscounts entity.
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
   * Processing Status.
   * @nullable
   */
  declare processingStatus?: RetailPricingDiscountProcessingStatus | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mix And Match Discount Type.
   * @nullable
   */
  declare mixAndMatchDiscountType?: RetailMixAndMatchDiscountType | null;
  /**
   * Is Discount Code Required.
   * @nullable
   */
  declare isDiscountCodeRequired?: NoYes | null;
  /**
   * Offer Quantity Limit.
   */
  declare offerQuantityLimit: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Mix And Match No Of Least Expensive Lines.
   */
  declare mixAndMatchNoOfLeastExpensiveLines: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: RetailDisabledEnabled | null;
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
   * Threshold Count Non Discount Items.
   * @nullable
   */
  declare thresholdCountNonDiscountItems?: NoYes | null;
  /**
   * Disabled Since.
   */
  declare disabledSince: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Multibuy Discount Type.
   * @nullable
   */
  declare multibuyDiscountType?: RetailDiscountTypeEnum | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mix And Match Discount Amount.
   */
  declare mixAndMatchDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Record Id.
   */
  declare discountRecordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Validation Period Id.
   * @nullable
   */
  declare validationPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Percent Value.
   */
  declare discountPercentValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pricing Priority Number.
   */
  declare pricingPriorityNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Concurrency Mode.
   * @nullable
   */
  declare concurrencyMode?: RetailDiscountConcurrency | null;
  /**
   * Date Validation Type.
   * @nullable
   */
  declare dateValidationType?: RetailDateValidationTypeBase | null;
  /**
   * Mix And Match Deal Price.
   */
  declare mixAndMatchDealPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Code.
   * @nullable
   */
  declare discountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print Description On Fiscal Receipt.
   * @nullable
   */
  declare printDescriptionOnFiscalReceipt?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Discount Ledger Dimension Display Value.
   * @nullable
   */
  declare discountLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Mix And Match Least Expensive Mode.
   * @nullable
   */
  declare mixAndMatchLeastExpensiveMode?: RetailLeastExpensiveMode | null;
  /**
   * Match All Associated Price Groups.
   * @nullable
   */
  declare matchAllAssociatedPriceGroups?: NoYes | null;
  /**
   * Periodic Discount Type.
   * @nullable
   */
  declare periodicDiscountType?: RetailDiscountOfferTypeBase | null;
  /**
   * One-to-many navigation property to the {@link RetailDiscountLines} entity.
   */
  declare retailDiscountLine: RetailDiscountLines<T>[];

  constructor(_entityApi: RetailDiscountsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailDiscountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  offerId: DeserializedType<T, 'Edm.String'>;
  processingStatus?: RetailPricingDiscountProcessingStatus | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  mixAndMatchDiscountType?: RetailMixAndMatchDiscountType | null;
  isDiscountCodeRequired?: NoYes | null;
  offerQuantityLimit: DeserializedType<T, 'Edm.Int32'>;
  mixAndMatchNoOfLeastExpensiveLines: DeserializedType<T, 'Edm.Int32'>;
  status?: RetailDisabledEnabled | null;
  barCode?: DeserializedType<T, 'Edm.String'> | null;
  disclaimer?: DeserializedType<T, 'Edm.String'> | null;
  thresholdCountNonDiscountItems?: NoYes | null;
  disabledSince: DeserializedType<T, 'Edm.DateTimeOffset'>;
  multibuyDiscountType?: RetailDiscountTypeEnum | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  mixAndMatchDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  discountRecordId: DeserializedType<T, 'Edm.Int64'>;
  validationPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  discountPercentValue: DeserializedType<T, 'Edm.Decimal'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  pricingPriorityNumber: DeserializedType<T, 'Edm.Int32'>;
  concurrencyMode?: RetailDiscountConcurrency | null;
  dateValidationType?: RetailDateValidationTypeBase | null;
  mixAndMatchDealPrice: DeserializedType<T, 'Edm.Decimal'>;
  discountCode?: DeserializedType<T, 'Edm.String'> | null;
  printDescriptionOnFiscalReceipt?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  discountLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  mixAndMatchLeastExpensiveMode?: RetailLeastExpensiveMode | null;
  matchAllAssociatedPriceGroups?: NoYes | null;
  periodicDiscountType?: RetailDiscountOfferTypeBase | null;
  retailDiscountLine: RetailDiscountLinesType<T>[];
}
