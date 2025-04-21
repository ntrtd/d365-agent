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
import type { DiscountLineInquiryResultsApi } from './DiscountLineInquiryResultsApi';
import { GupGroupAll } from './GupGroupAll';
import { NoYes } from './NoYes';
import { RetailOfferLineDiscountMethodBaseN1 } from './RetailOfferLineDiscountMethodBaseN1';
import { RetailDiscountLineIncludeExcludeTypeBase } from './RetailDiscountLineIncludeExcludeTypeBase';
import { RetailDealPriceDiscountPctBase } from './RetailDealPriceDiscountPctBase';
import { RetailDiscountOfferLineDiscMethodBase } from './RetailDiscountOfferLineDiscMethodBase';
import { RetailDisabledEnabled } from './RetailDisabledEnabled';
import { RetailDiscountThresholdLineDiscountMethodBase } from './RetailDiscountThresholdLineDiscountMethodBase';

/**
 * This class represents the entity "DiscountLineInquiryResults" of service "d365_metadata".
 */
export class DiscountLineInquiryResults<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DiscountLineInquiryResultsType<T>
{
  /**
   * Technical entity name for DiscountLineInquiryResults.
   */
  static override _entityName = 'DiscountLineInquiryResults';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiscountLineInquiryResults entity.
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
   * Line Pricing Group Code.
   * @nullable
   */
  declare linePricingGroupCode?: GupGroupAll | null;
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
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Serial Number.
   * @nullable
   */
  declare serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Color.
   * @nullable
   */
  declare color?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offer Price N 1.
   */
  declare offerPriceN1: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Applies To All.
   * @nullable
   */
  declare unitAppliesToAll?: NoYes | null;
  /**
   * Inventory Status.
   * @nullable
   */
  declare inventoryStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offer Price.
   */
  declare offerPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Owner.
   * @nullable
   */
  declare owner?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Discount Applying Line.
   * @nullable
   */
  declare isDiscountApplyingLine?: NoYes | null;
  /**
   * Warehouse.
   * @nullable
   */
  declare warehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Free Item Group.
   */
  declare freeItemGroup: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Mix And Match Line Group.
   * @nullable
   */
  declare mixAndMatchLineGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Least Quantity.
   */
  declare leastQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Offer Discount Percentage.
   */
  declare offerDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Of Measure Symbol.
   * @nullable
   */
  declare unitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 10.
   * @nullable
   */
  declare line10?: DeserializedType<T, 'Edm.String'> | null;
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
   * Line 15.
   * @nullable
   */
  declare line15?: DeserializedType<T, 'Edm.String'> | null;
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
   * Offer Discount Method N 1.
   * @nullable
   */
  declare offerDiscountMethodN1?: RetailOfferLineDiscountMethodBaseN1 | null;
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
   * Batch Number.
   * @nullable
   */
  declare batchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Threshold Tier Amount.
   */
  declare thresholdTierAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Least Amount.
   */
  declare leastAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: RetailDiscountLineIncludeExcludeTypeBase | null;
  /**
   * Line 13.
   * @nullable
   */
  declare line13?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mix And Match Discount Type.
   * @nullable
   */
  declare mixAndMatchDiscountType?: RetailDealPriceDiscountPctBase | null;
  /**
   * Offer Discount Amount.
   */
  declare offerDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line 9.
   * @nullable
   */
  declare line9?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mix And Match Number Of Items Needed.
   */
  declare mixAndMatchNumberOfItemsNeeded: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Line 8.
   * @nullable
   */
  declare line8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Percent Or Value.
   */
  declare discountPercentOrValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offer Discount Method.
   * @nullable
   */
  declare offerDiscountMethod?: RetailDiscountOfferLineDiscMethodBase | null;
  /**
   * Configuration.
   * @nullable
   */
  declare configuration?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity Limit.
   */
  declare quantityLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * License Plate.
   * @nullable
   */
  declare licensePlate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Discount Code Required.
   * @nullable
   */
  declare isDiscountCodeRequired?: NoYes | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: RetailDisabledEnabled | null;
  /**
   * Site.
   * @nullable
   */
  declare site?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Combination Line Structure.
   * @nullable
   */
  declare combinationLineStructure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offer Price Incl Tax N 1.
   */
  declare offerPriceInclTaxN1: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Location.
   * @nullable
   */
  declare location?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Style.
   * @nullable
   */
  declare style?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Threshold Line Discount Method.
   * @nullable
   */
  declare thresholdLineDiscountMethod?: RetailDiscountThresholdLineDiscountMethodBase | null;
  /**
   * Line 14.
   * @nullable
   */
  declare line14?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Attribute Group Name.
   * @nullable
   */
  declare priceAttributeGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offer Price Incl Tax.
   */
  declare offerPriceInclTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Mandatory.
   * @nullable
   */
  declare isMandatory?: NoYes | null;
  /**
   * Line 11.
   * @nullable
   */
  declare line11?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DiscountLineInquiryResultsApi<T>) {
    super(_entityApi);
  }
}

export interface DiscountLineInquiryResultsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  offerId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  linePricingGroupCode?: GupGroupAll | null;
  size?: DeserializedType<T, 'Edm.String'> | null;
  line12?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  color?: DeserializedType<T, 'Edm.String'> | null;
  offerPriceN1: DeserializedType<T, 'Edm.Decimal'>;
  unitAppliesToAll?: NoYes | null;
  inventoryStatus?: DeserializedType<T, 'Edm.String'> | null;
  offerPrice: DeserializedType<T, 'Edm.Decimal'>;
  owner?: DeserializedType<T, 'Edm.String'> | null;
  isDiscountApplyingLine?: NoYes | null;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  freeItemGroup: DeserializedType<T, 'Edm.Int32'>;
  mixAndMatchLineGroup?: DeserializedType<T, 'Edm.String'> | null;
  leastQuantity: DeserializedType<T, 'Edm.Decimal'>;
  offerDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  unitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  line10?: DeserializedType<T, 'Edm.String'> | null;
  line7?: DeserializedType<T, 'Edm.String'> | null;
  line6?: DeserializedType<T, 'Edm.String'> | null;
  line15?: DeserializedType<T, 'Edm.String'> | null;
  line5?: DeserializedType<T, 'Edm.String'> | null;
  line4?: DeserializedType<T, 'Edm.String'> | null;
  line3?: DeserializedType<T, 'Edm.String'> | null;
  offerDiscountMethodN1?: RetailOfferLineDiscountMethodBaseN1 | null;
  line2?: DeserializedType<T, 'Edm.String'> | null;
  line1?: DeserializedType<T, 'Edm.String'> | null;
  batchNumber?: DeserializedType<T, 'Edm.String'> | null;
  thresholdTierAmount: DeserializedType<T, 'Edm.Decimal'>;
  leastAmount: DeserializedType<T, 'Edm.Decimal'>;
  lineType?: RetailDiscountLineIncludeExcludeTypeBase | null;
  line13?: DeserializedType<T, 'Edm.String'> | null;
  mixAndMatchDiscountType?: RetailDealPriceDiscountPctBase | null;
  offerDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  line9?: DeserializedType<T, 'Edm.String'> | null;
  mixAndMatchNumberOfItemsNeeded: DeserializedType<T, 'Edm.Int32'>;
  line8?: DeserializedType<T, 'Edm.String'> | null;
  discountPercentOrValue: DeserializedType<T, 'Edm.Decimal'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  offerDiscountMethod?: RetailDiscountOfferLineDiscMethodBase | null;
  configuration?: DeserializedType<T, 'Edm.String'> | null;
  quantityLimit: DeserializedType<T, 'Edm.Decimal'>;
  licensePlate?: DeserializedType<T, 'Edm.String'> | null;
  isDiscountCodeRequired?: NoYes | null;
  status?: RetailDisabledEnabled | null;
  site?: DeserializedType<T, 'Edm.String'> | null;
  combinationLineStructure?: DeserializedType<T, 'Edm.String'> | null;
  offerPriceInclTaxN1: DeserializedType<T, 'Edm.Decimal'>;
  location?: DeserializedType<T, 'Edm.String'> | null;
  style?: DeserializedType<T, 'Edm.String'> | null;
  thresholdLineDiscountMethod?: RetailDiscountThresholdLineDiscountMethodBase | null;
  line14?: DeserializedType<T, 'Edm.String'> | null;
  priceAttributeGroupName?: DeserializedType<T, 'Edm.String'> | null;
  offerPriceInclTax: DeserializedType<T, 'Edm.Decimal'>;
  isMandatory?: NoYes | null;
  line11?: DeserializedType<T, 'Edm.String'> | null;
}
