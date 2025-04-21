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
import type { PriceAdjustmentLineInquiryResultsApi } from './PriceAdjustmentLineInquiryResultsApi';
import { RetailOfferLineDiscountMethodBaseN1 } from './RetailOfferLineDiscountMethodBaseN1';
import { RetailDiscountLineIncludeExcludeTypeBase } from './RetailDiscountLineIncludeExcludeTypeBase';
import { GupGroupAll } from './GupGroupAll';
import { NoYes } from './NoYes';
import { GupPriceTermCalculateMethod } from './GupPriceTermCalculateMethod';

/**
 * This class represents the entity "PriceAdjustmentLineInquiryResults" of service "d365_metadata".
 */
export class PriceAdjustmentLineInquiryResults<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PriceAdjustmentLineInquiryResultsType<T>
{
  /**
   * Technical entity name for PriceAdjustmentLineInquiryResults.
   */
  static override _entityName = 'PriceAdjustmentLineInquiryResults';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PriceAdjustmentLineInquiryResults entity.
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
   * Discounted Sale Price Including Tax.
   */
  declare discountedSalePriceIncludingTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
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
   * Price Attribute Group Name.
   * @nullable
   */
  declare priceAttributeGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Combination Line Structure.
   * @nullable
   */
  declare combinationLineStructure?: DeserializedType<T, 'Edm.String'> | null;
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
   * Discount Method N 1.
   * @nullable
   */
  declare discountMethodN1?: RetailOfferLineDiscountMethodBaseN1 | null;
  /**
   * Line 13.
   * @nullable
   */
  declare line13?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity Limit.
   */
  declare quantityLimit: DeserializedType<T, 'Edm.Decimal'>;
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
   * Line Type.
   * @nullable
   */
  declare lineType?: RetailDiscountLineIncludeExcludeTypeBase | null;
  /**
   * Discount Percentage.
   */
  declare discountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Symbol.
   * @nullable
   */
  declare symbol?: DeserializedType<T, 'Edm.String'> | null;
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
   * Discount Price N 1.
   */
  declare discountPriceN1: DeserializedType<T, 'Edm.Decimal'>;
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
   * Discount Price.
   */
  declare discountPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cash Discount Amount.
   */
  declare cashDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Line Pricing Group Code.
   * @nullable
   */
  declare linePricingGroupCode?: GupGroupAll | null;
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
   * Calculation Method.
   * @nullable
   */
  declare calculationMethod?: GupPriceTermCalculateMethod | null;
  /**
   * Line 14.
   * @nullable
   */
  declare line14?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Owner.
   * @nullable
   */
  declare owner?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PriceAdjustmentLineInquiryResultsApi<T>) {
    super(_entityApi);
  }
}

export interface PriceAdjustmentLineInquiryResultsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  offerId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  inventoryStatus?: DeserializedType<T, 'Edm.String'> | null;
  discountedSalePriceIncludingTax: DeserializedType<T, 'Edm.Decimal'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  licensePlate?: DeserializedType<T, 'Edm.String'> | null;
  style?: DeserializedType<T, 'Edm.String'> | null;
  serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  line11?: DeserializedType<T, 'Edm.String'> | null;
  priceAttributeGroupName?: DeserializedType<T, 'Edm.String'> | null;
  combinationLineStructure?: DeserializedType<T, 'Edm.String'> | null;
  color?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  batchNumber?: DeserializedType<T, 'Edm.String'> | null;
  discountMethodN1?: RetailOfferLineDiscountMethodBaseN1 | null;
  line13?: DeserializedType<T, 'Edm.String'> | null;
  quantityLimit: DeserializedType<T, 'Edm.Decimal'>;
  line15?: DeserializedType<T, 'Edm.String'> | null;
  freeItemGroup: DeserializedType<T, 'Edm.Int32'>;
  lineType?: RetailDiscountLineIncludeExcludeTypeBase | null;
  discountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  symbol?: DeserializedType<T, 'Edm.String'> | null;
  line7?: DeserializedType<T, 'Edm.String'> | null;
  line6?: DeserializedType<T, 'Edm.String'> | null;
  line5?: DeserializedType<T, 'Edm.String'> | null;
  line4?: DeserializedType<T, 'Edm.String'> | null;
  line3?: DeserializedType<T, 'Edm.String'> | null;
  line2?: DeserializedType<T, 'Edm.String'> | null;
  line1?: DeserializedType<T, 'Edm.String'> | null;
  discountPriceN1: DeserializedType<T, 'Edm.Decimal'>;
  location?: DeserializedType<T, 'Edm.String'> | null;
  line9?: DeserializedType<T, 'Edm.String'> | null;
  line8?: DeserializedType<T, 'Edm.String'> | null;
  configuration?: DeserializedType<T, 'Edm.String'> | null;
  discountPrice: DeserializedType<T, 'Edm.Decimal'>;
  cashDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  line10?: DeserializedType<T, 'Edm.String'> | null;
  discountPercentOrValue: DeserializedType<T, 'Edm.Decimal'>;
  linePricingGroupCode?: GupGroupAll | null;
  site?: DeserializedType<T, 'Edm.String'> | null;
  unitAppliesToAll?: NoYes | null;
  size?: DeserializedType<T, 'Edm.String'> | null;
  line12?: DeserializedType<T, 'Edm.String'> | null;
  calculationMethod?: GupPriceTermCalculateMethod | null;
  line14?: DeserializedType<T, 'Edm.String'> | null;
  owner?: DeserializedType<T, 'Edm.String'> | null;
}
