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
import type { PriceAdjustmentInquiryResultsApi } from './PriceAdjustmentInquiryResultsApi';
import { RetailDiscountConcurrency } from './RetailDiscountConcurrency';
import { NoYes } from './NoYes';
import { RetailDateValidationTypeBase } from './RetailDateValidationTypeBase';
import { GupPriceTermCalculateMethod } from './GupPriceTermCalculateMethod';
import { GupGroupAll } from './GupGroupAll';
import { RetailDisabledEnabled } from './RetailDisabledEnabled';

/**
 * This class represents the entity "PriceAdjustmentInquiryResults" of service "d365_metadata".
 */
export class PriceAdjustmentInquiryResults<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PriceAdjustmentInquiryResultsType<T>
{
  /**
   * Technical entity name for PriceAdjustmentInquiryResults.
   */
  static override _entityName = 'PriceAdjustmentInquiryResults';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PriceAdjustmentInquiryResults entity.
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
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Concurrency Mode.
   * @nullable
   */
  declare concurrencyMode?: RetailDiscountConcurrency | null;
  /**
   * Header 15.
   * @nullable
   */
  declare header15?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 10.
   * @nullable
   */
  declare header10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Percent Value.
   */
  declare discountPercentValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Price Component Code Name.
   * @nullable
   */
  declare priceComponentCodeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Tier Configuration Enabled.
   * @nullable
   */
  declare isTierConfigurationEnabled?: NoYes | null;
  /**
   * Date Validation Type.
   * @nullable
   */
  declare dateValidationType?: RetailDateValidationTypeBase | null;
  /**
   * Combination Header Structure.
   * @nullable
   */
  declare combinationHeaderStructure?: DeserializedType<T, 'Edm.String'> | null;
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
   * Header 11.
   * @nullable
   */
  declare header11?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tier Price Adjustment Method.
   * @nullable
   */
  declare tierPriceAdjustmentMethod?: GupPriceTermCalculateMethod | null;
  /**
   * Disclaimer.
   * @nullable
   */
  declare disclaimer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 1.
   * @nullable
   */
  declare header1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Validation Period Id.
   * @nullable
   */
  declare validationPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 3.
   * @nullable
   */
  declare header3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 14.
   * @nullable
   */
  declare header14?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 2.
   * @nullable
   */
  declare header2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
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
   * Header 13.
   * @nullable
   */
  declare header13?: DeserializedType<T, 'Edm.String'> | null;
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
   * Is Discount Code Required.
   * @nullable
   */
  declare isDiscountCodeRequired?: NoYes | null;
  /**
   * Header Pricing Group Code.
   * @nullable
   */
  declare headerPricingGroupCode?: GupGroupAll | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: RetailDisabledEnabled | null;
  /**
   * Print Description On Fiscal Receipt.
   * @nullable
   */
  declare printDescriptionOnFiscalReceipt?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Price Attribute Group Name.
   * @nullable
   */
  declare priceAttributeGroupName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PriceAdjustmentInquiryResultsApi<T>) {
    super(_entityApi);
  }
}

export interface PriceAdjustmentInquiryResultsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  offerId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  concurrencyMode?: RetailDiscountConcurrency | null;
  header15?: DeserializedType<T, 'Edm.String'> | null;
  header10?: DeserializedType<T, 'Edm.String'> | null;
  discountPercentValue: DeserializedType<T, 'Edm.Decimal'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  header12?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  priceComponentCodeName?: DeserializedType<T, 'Edm.String'> | null;
  isTierConfigurationEnabled?: NoYes | null;
  dateValidationType?: RetailDateValidationTypeBase | null;
  combinationHeaderStructure?: DeserializedType<T, 'Edm.String'> | null;
  header9?: DeserializedType<T, 'Edm.String'> | null;
  header8?: DeserializedType<T, 'Edm.String'> | null;
  header11?: DeserializedType<T, 'Edm.String'> | null;
  tierPriceAdjustmentMethod?: GupPriceTermCalculateMethod | null;
  disclaimer?: DeserializedType<T, 'Edm.String'> | null;
  header1?: DeserializedType<T, 'Edm.String'> | null;
  validationPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  header3?: DeserializedType<T, 'Edm.String'> | null;
  header14?: DeserializedType<T, 'Edm.String'> | null;
  header2?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  header5?: DeserializedType<T, 'Edm.String'> | null;
  header4?: DeserializedType<T, 'Edm.String'> | null;
  header13?: DeserializedType<T, 'Edm.String'> | null;
  header7?: DeserializedType<T, 'Edm.String'> | null;
  header6?: DeserializedType<T, 'Edm.String'> | null;
  isDiscountCodeRequired?: NoYes | null;
  headerPricingGroupCode?: GupGroupAll | null;
  status?: RetailDisabledEnabled | null;
  printDescriptionOnFiscalReceipt?: DeserializedType<T, 'Edm.String'> | null;
  priceAttributeGroupName?: DeserializedType<T, 'Edm.String'> | null;
}
