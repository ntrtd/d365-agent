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
import type { RetailDiscountLinesApi } from './RetailDiscountLinesApi';
import { RetailDealPriceDiscountPctBase } from './RetailDealPriceDiscountPctBase';
import { RetailDiscountOfferLineDiscMethodBase } from './RetailDiscountOfferLineDiscMethodBase';
import { RetailDiscountThresholdLineDiscountMethodBase } from './RetailDiscountThresholdLineDiscountMethodBase';
import { NoYes } from './NoYes';
import { RetailOfferLineDiscountMethodBaseN1 } from './RetailOfferLineDiscountMethodBaseN1';
import { RetailDiscountLineIncludeExcludeTypeBase } from './RetailDiscountLineIncludeExcludeTypeBase';
import { RetailDiscounts, RetailDiscountsType } from './RetailDiscounts';
import {
  ShippingThresholdDiscounts,
  ShippingThresholdDiscountsType
} from './ShippingThresholdDiscounts';

/**
 * This class represents the entity "RetailDiscountLines" of service "d365_metadata".
 */
export class RetailDiscountLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailDiscountLinesType<T>
{
  /**
   * Technical entity name for RetailDiscountLines.
   */
  static override _entityName = 'RetailDiscountLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailDiscountLines entity.
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
   * Offer Price N 1.
   */
  declare offerPriceN1: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mix And Match Number Of Items Needed.
   */
  declare mixAndMatchNumberOfItemsNeeded: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Threshold Line Quantity Limit.
   */
  declare thresholdLineQuantityLimit: DeserializedType<T, 'Edm.Decimal'>;
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
   * Offer Price Incl Tax N 1.
   */
  declare offerPriceInclTaxN1: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: RetailDiscountLineIncludeExcludeTypeBase | null;
  /**
   * Threshold Tier Amount.
   */
  declare thresholdTierAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Name.
   * @nullable
   */
  declare categoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Percent Or Value.
   */
  declare discountPercentOrValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Config Id.
   * @nullable
   */
  declare configId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Size.
   * @nullable
   */
  declare size?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Hierarchy Name.
   * @nullable
   */
  declare categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offer Discount Amount.
   */
  declare offerDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link RetailDiscounts} entity.
   */
  declare retailDiscount?: RetailDiscounts<T> | null;
  /**
   * One-to-one navigation property to the {@link ShippingThresholdDiscounts} entity.
   */
  declare shippingThresholdDiscount?: ShippingThresholdDiscounts<T> | null;

  constructor(_entityApi: RetailDiscountLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailDiscountLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  offerId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  offerDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  mixAndMatchDiscountType?: RetailDealPriceDiscountPctBase | null;
  mixAndMatchLineGroup?: DeserializedType<T, 'Edm.String'> | null;
  unitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  offerPrice: DeserializedType<T, 'Edm.Decimal'>;
  offerDiscountMethod?: RetailDiscountOfferLineDiscMethodBase | null;
  style?: DeserializedType<T, 'Edm.String'> | null;
  thresholdApplyingLineDiscountMethod?: RetailDiscountThresholdLineDiscountMethodBase | null;
  isDiscountApplyingLine?: NoYes | null;
  offerPriceN1: DeserializedType<T, 'Edm.Decimal'>;
  mixAndMatchNumberOfItemsNeeded: DeserializedType<T, 'Edm.Int32'>;
  thresholdLineQuantityLimit: DeserializedType<T, 'Edm.Decimal'>;
  offerDiscountMethodN1?: RetailOfferLineDiscountMethodBaseN1 | null;
  color?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  offerPriceInclTaxN1: DeserializedType<T, 'Edm.Decimal'>;
  lineType?: RetailDiscountLineIncludeExcludeTypeBase | null;
  thresholdTierAmount: DeserializedType<T, 'Edm.Decimal'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  categoryName?: DeserializedType<T, 'Edm.String'> | null;
  discountPercentOrValue: DeserializedType<T, 'Edm.Decimal'>;
  configId?: DeserializedType<T, 'Edm.String'> | null;
  size?: DeserializedType<T, 'Edm.String'> | null;
  categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  offerDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  retailDiscount?: RetailDiscountsType<T> | null;
  shippingThresholdDiscount?: ShippingThresholdDiscountsType<T> | null;
}
