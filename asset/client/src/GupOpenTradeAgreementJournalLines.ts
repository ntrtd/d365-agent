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
import type { GupOpenTradeAgreementJournalLinesApi } from './GupOpenTradeAgreementJournalLinesApi';
import { NoYes } from './NoYes';
import { GupPricingRuleExclusionType } from './GupPricingRuleExclusionType';
import {
  OperationalSitesV2,
  OperationalSitesV2Type
} from './OperationalSitesV2';
import {
  SalesTradeAgreementAttributeGroupCombinations,
  SalesTradeAgreementAttributeGroupCombinationsType
} from './SalesTradeAgreementAttributeGroupCombinations';
import { Warehouses, WarehousesType } from './Warehouses';

/**
 * This class represents the entity "GUPOpenTradeAgreementJournalLines" of service "d365_metadata".
 */
export class GupOpenTradeAgreementJournalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements GupOpenTradeAgreementJournalLinesType<T>
{
  /**
   * Technical entity name for GupOpenTradeAgreementJournalLines.
   */
  static override _entityName = 'GUPOpenTradeAgreementJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GupOpenTradeAgreementJournalLines entity.
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
   * Quantity Unit Symbol.
   * @nullable
   */
  declare quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
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
   * Sales Lead Time Days.
   */
  declare salesLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Price Apply Adjustment.
   * @nullable
   */
  declare priceApplyAdjustment?: NoYes | null;
  /**
   * Price Applicable From Date.
   */
  declare priceApplicableFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Price Component Combination.
   * @nullable
   */
  declare priceComponentCombination?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Quantity.
   */
  declare fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price Applicable To Date.
   */
  declare priceApplicableToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Will Search Continue.
   * @nullable
   */
  declare willSearchContinue?: NoYes | null;
  /**
   * Line Exclusion Type.
   * @nullable
   */
  declare lineExclusionType?: GupPricingRuleExclusionType | null;
  /**
   * Price Currency Code.
   * @nullable
   */
  declare priceCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Exclusion.
   * @nullable
   */
  declare lineExclusion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Warehouse Id.
   * @nullable
   */
  declare priceWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSitesV2} entity.
   */
  declare operationalSiteV2?: OperationalSitesV2<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesTradeAgreementAttributeGroupCombinations} entity.
   */
  declare salesTradeAgreementAttributeGroupCombination?: SalesTradeAgreementAttributeGroupCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare warehouse?: Warehouses<T> | null;

  constructor(_entityApi: GupOpenTradeAgreementJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface GupOpenTradeAgreementJournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  isGenericCurrencySearchEnabled?: NoYes | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  quantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  header1?: DeserializedType<T, 'Edm.String'> | null;
  header3?: DeserializedType<T, 'Edm.String'> | null;
  header2?: DeserializedType<T, 'Edm.String'> | null;
  header5?: DeserializedType<T, 'Edm.String'> | null;
  header4?: DeserializedType<T, 'Edm.String'> | null;
  header7?: DeserializedType<T, 'Edm.String'> | null;
  header6?: DeserializedType<T, 'Edm.String'> | null;
  priceGroup?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  salesPriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  processingLog?: DeserializedType<T, 'Edm.String'> | null;
  fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  headerExclusion?: DeserializedType<T, 'Edm.String'> | null;
  priceComponentCodeName?: DeserializedType<T, 'Edm.String'> | null;
  line7?: DeserializedType<T, 'Edm.String'> | null;
  line6?: DeserializedType<T, 'Edm.String'> | null;
  line5?: DeserializedType<T, 'Edm.String'> | null;
  line4?: DeserializedType<T, 'Edm.String'> | null;
  line3?: DeserializedType<T, 'Edm.String'> | null;
  line2?: DeserializedType<T, 'Edm.String'> | null;
  line1?: DeserializedType<T, 'Edm.String'> | null;
  priceSiteId?: DeserializedType<T, 'Edm.String'> | null;
  salesLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  priceApplyAdjustment?: NoYes | null;
  priceApplicableFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  toQuantity: DeserializedType<T, 'Edm.Decimal'>;
  attributeBasedPricingId?: DeserializedType<T, 'Edm.String'> | null;
  willDeliveryDateControlDisregardLeadTime?: NoYes | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  combinationHeaderStructure?: DeserializedType<T, 'Edm.String'> | null;
  unitAppliesToAll?: NoYes | null;
  combinationLineStructure?: DeserializedType<T, 'Edm.String'> | null;
  priceComponentCombination?: DeserializedType<T, 'Edm.String'> | null;
  fromQuantity: DeserializedType<T, 'Edm.Decimal'>;
  priceApplicableToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  price: DeserializedType<T, 'Edm.Decimal'>;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  willSearchContinue?: NoYes | null;
  lineExclusionType?: GupPricingRuleExclusionType | null;
  priceCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  lineExclusion?: DeserializedType<T, 'Edm.String'> | null;
  priceWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  operationalSiteV2?: OperationalSitesV2Type<T> | null;
  salesTradeAgreementAttributeGroupCombination?: SalesTradeAgreementAttributeGroupCombinationsType<T> | null;
  warehouse?: WarehousesType<T> | null;
}
