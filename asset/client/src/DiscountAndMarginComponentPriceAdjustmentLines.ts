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
import type { DiscountAndMarginComponentPriceAdjustmentLinesApi } from './DiscountAndMarginComponentPriceAdjustmentLinesApi';
import { RetailDealPriceDiscountPctBase } from './RetailDealPriceDiscountPctBase';
import { RetailDiscountOfferLineDiscMethodBase } from './RetailDiscountOfferLineDiscMethodBase';
import { RetailDiscountThresholdLineDiscountMethodBase } from './RetailDiscountThresholdLineDiscountMethodBase';
import { NoYes } from './NoYes';
import { RetailOfferLineDiscountMethodBaseN1 } from './RetailOfferLineDiscountMethodBaseN1';
import { GupGroupAll } from './GupGroupAll';
import { RetailDiscountLineIncludeExcludeTypeBase } from './RetailDiscountLineIncludeExcludeTypeBase';
import { GupPricingRuleExclusionType } from './GupPricingRuleExclusionType';
import {
  DiscountAndMarginComponentPriceAdjustments,
  DiscountAndMarginComponentPriceAdjustmentsType
} from './DiscountAndMarginComponentPriceAdjustments';

/**
 * This class represents the entity "DiscountAndMarginComponentPriceAdjustmentLines" of service "d365_metadata".
 */
export class DiscountAndMarginComponentPriceAdjustmentLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DiscountAndMarginComponentPriceAdjustmentLinesType<T>
{
  /**
   * Technical entity name for DiscountAndMarginComponentPriceAdjustmentLines.
   */
  static override _entityName =
    'DiscountAndMarginComponentPriceAdjustmentLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiscountAndMarginComponentPriceAdjustmentLines entity.
   */
  static _keys = ['dataAreaId', 'OfferId', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Offer Id.
   */
  declare offerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Warehouse.
   * @nullable
   */
  declare warehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Status.
   * @nullable
   */
  declare inventoryStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offer Discount Percentage.
   */
  declare offerDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mix And Match Discount Type.
   * @nullable
   */
  declare mixAndMatchDiscountType?: RetailDealPriceDiscountPctBase | null;
  /**
   * Mix And Match Line Group.
   * @nullable
   */
  declare mixAndMatchLineGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Of Measure Symbol.
   * @nullable
   */
  declare unitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offer Price.
   */
  declare offerPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Offer Discount Method.
   * @nullable
   */
  declare offerDiscountMethod?: RetailDiscountOfferLineDiscMethodBase | null;
  /**
   * License Plate.
   * @nullable
   */
  declare licensePlate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Style.
   * @nullable
   */
  declare style?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Threshold Applying Line Discount Method.
   * @nullable
   */
  declare thresholdApplyingLineDiscountMethod?: RetailDiscountThresholdLineDiscountMethodBase | null;
  /**
   * Is Discount Applying Line.
   * @nullable
   */
  declare isDiscountApplyingLine?: NoYes | null;
  /**
   * Serial Number.
   * @nullable
   */
  declare serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 11.
   * @nullable
   */
  declare line11?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offer Price N 1.
   */
  declare offerPriceN1: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Threshold Line Quantity Limit.
   */
  declare thresholdLineQuantityLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mix And Match Number Of Items Needed.
   */
  declare mixAndMatchNumberOfItemsNeeded: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Price Attribute Group Name.
   * @nullable
   */
  declare priceAttributeGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Least Quantity.
   */
  declare leastQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Combination Line Structure.
   * @nullable
   */
  declare combinationLineStructure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offer Discount Method N 1.
   * @nullable
   */
  declare offerDiscountMethodN1?: RetailOfferLineDiscountMethodBaseN1 | null;
  /**
   * Color.
   * @nullable
   */
  declare color?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Batch Number.
   * @nullable
   */
  declare batchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 13.
   * @nullable
   */
  declare line13?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Attribute Group Type.
   * @nullable
   */
  declare priceAttributeGroupType?: GupGroupAll | null;
  /**
   * Line 15.
   * @nullable
   */
  declare line15?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Free Item Group.
   */
  declare freeItemGroup: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Offer Price Incl Tax N 1.
   */
  declare offerPriceInclTaxN1: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: RetailDiscountLineIncludeExcludeTypeBase | null;
  /**
   * Least Amount.
   */
  declare leastAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Location.
   * @nullable
   */
  declare location?: DeserializedType<T, 'Edm.String'> | null;
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
   * Configuration.
   * @nullable
   */
  declare configuration?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Exclusion Type.
   * @nullable
   */
  declare lineExclusionType?: GupPricingRuleExclusionType | null;
  /**
   * Threshold Tier Amount.
   */
  declare thresholdTierAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line 10.
   * @nullable
   */
  declare line10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Percent Or Value.
   */
  declare discountPercentOrValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Site.
   * @nullable
   */
  declare site?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Applies To All.
   * @nullable
   */
  declare unitAppliesToAll?: NoYes | null;
  /**
   * Line Exclusion.
   * @nullable
   */
  declare lineExclusion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Size.
   * @nullable
   */
  declare size?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 12.
   * @nullable
   */
  declare line12?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 14.
   * @nullable
   */
  declare line14?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offer Discount Amount.
   */
  declare offerDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Mandatory.
   * @nullable
   */
  declare isMandatory?: NoYes | null;
  /**
   * Owner.
   * @nullable
   */
  declare owner?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DiscountAndMarginComponentPriceAdjustments} entity.
   */
  declare discountAndMarginComponentPriceAdjustment?: DiscountAndMarginComponentPriceAdjustments<T> | null;

  constructor(
    _entityApi: DiscountAndMarginComponentPriceAdjustmentLinesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface DiscountAndMarginComponentPriceAdjustmentLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  offerId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  inventoryStatus?: DeserializedType<T, 'Edm.String'> | null;
  offerDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  mixAndMatchDiscountType?: RetailDealPriceDiscountPctBase | null;
  mixAndMatchLineGroup?: DeserializedType<T, 'Edm.String'> | null;
  unitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  offerPrice: DeserializedType<T, 'Edm.Decimal'>;
  offerDiscountMethod?: RetailDiscountOfferLineDiscMethodBase | null;
  licensePlate?: DeserializedType<T, 'Edm.String'> | null;
  style?: DeserializedType<T, 'Edm.String'> | null;
  thresholdApplyingLineDiscountMethod?: RetailDiscountThresholdLineDiscountMethodBase | null;
  isDiscountApplyingLine?: NoYes | null;
  serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  line11?: DeserializedType<T, 'Edm.String'> | null;
  offerPriceN1: DeserializedType<T, 'Edm.Decimal'>;
  thresholdLineQuantityLimit: DeserializedType<T, 'Edm.Decimal'>;
  mixAndMatchNumberOfItemsNeeded: DeserializedType<T, 'Edm.Int32'>;
  priceAttributeGroupName?: DeserializedType<T, 'Edm.String'> | null;
  leastQuantity: DeserializedType<T, 'Edm.Decimal'>;
  combinationLineStructure?: DeserializedType<T, 'Edm.String'> | null;
  offerDiscountMethodN1?: RetailOfferLineDiscountMethodBaseN1 | null;
  color?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  batchNumber?: DeserializedType<T, 'Edm.String'> | null;
  line13?: DeserializedType<T, 'Edm.String'> | null;
  priceAttributeGroupType?: GupGroupAll | null;
  line15?: DeserializedType<T, 'Edm.String'> | null;
  freeItemGroup: DeserializedType<T, 'Edm.Int32'>;
  offerPriceInclTaxN1: DeserializedType<T, 'Edm.Decimal'>;
  lineType?: RetailDiscountLineIncludeExcludeTypeBase | null;
  leastAmount: DeserializedType<T, 'Edm.Decimal'>;
  line7?: DeserializedType<T, 'Edm.String'> | null;
  line6?: DeserializedType<T, 'Edm.String'> | null;
  line5?: DeserializedType<T, 'Edm.String'> | null;
  line4?: DeserializedType<T, 'Edm.String'> | null;
  line3?: DeserializedType<T, 'Edm.String'> | null;
  line2?: DeserializedType<T, 'Edm.String'> | null;
  line1?: DeserializedType<T, 'Edm.String'> | null;
  location?: DeserializedType<T, 'Edm.String'> | null;
  line9?: DeserializedType<T, 'Edm.String'> | null;
  line8?: DeserializedType<T, 'Edm.String'> | null;
  configuration?: DeserializedType<T, 'Edm.String'> | null;
  lineExclusionType?: GupPricingRuleExclusionType | null;
  thresholdTierAmount: DeserializedType<T, 'Edm.Decimal'>;
  line10?: DeserializedType<T, 'Edm.String'> | null;
  discountPercentOrValue: DeserializedType<T, 'Edm.Decimal'>;
  site?: DeserializedType<T, 'Edm.String'> | null;
  unitAppliesToAll?: NoYes | null;
  lineExclusion?: DeserializedType<T, 'Edm.String'> | null;
  size?: DeserializedType<T, 'Edm.String'> | null;
  line12?: DeserializedType<T, 'Edm.String'> | null;
  line14?: DeserializedType<T, 'Edm.String'> | null;
  offerDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  isMandatory?: NoYes | null;
  owner?: DeserializedType<T, 'Edm.String'> | null;
  discountAndMarginComponentPriceAdjustment?: DiscountAndMarginComponentPriceAdjustmentsType<T> | null;
}
