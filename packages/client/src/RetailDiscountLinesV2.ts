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
import type { RetailDiscountLinesV2Api } from './RetailDiscountLinesV2Api';
import { RetailDealPriceDiscountPctBase } from './RetailDealPriceDiscountPctBase';
import { RetailDiscountOfferLineDiscMethodBase } from './RetailDiscountOfferLineDiscMethodBase';
import { RetailDiscountLineIncludeExcludeTypeBase } from './RetailDiscountLineIncludeExcludeTypeBase';
import { NoYes } from './NoYes';
import { RetailOfferLineDiscountMethodBaseN1 } from './RetailOfferLineDiscountMethodBaseN1';
import { RetailDiscountThresholdLineDiscountMethodBase } from './RetailDiscountThresholdLineDiscountMethodBase';

/**
 * This class represents the entity "RetailDiscountLinesV2" of service "d365_metadata".
 */
export class RetailDiscountLinesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailDiscountLinesV2Type<T>
{
  /**
   * Technical entity name for RetailDiscountLinesV2.
   */
  static override _entityName = 'RetailDiscountLinesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailDiscountLinesV2 entity.
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
   * Prop Value 3.
   * @nullable
   */
  declare propValue3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Threshold Line Quantity Limit.
   */
  declare thresholdLineQuantityLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Prop Value 6.
   * @nullable
   */
  declare propValue6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mix And Match Discount Type.
   * @nullable
   */
  declare mixAndMatchDiscountType?: RetailDealPriceDiscountPctBase | null;
  /**
   * Mix And Match Number Of Items Needed.
   */
  declare mixAndMatchNumberOfItemsNeeded: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Prop Value 2.
   * @nullable
   */
  declare propValue2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eco Res Style Name.
   * @nullable
   */
  declare ecoResStyleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Percent Or Value.
   */
  declare discountPercentOrValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Eco Res Size Name.
   * @nullable
   */
  declare ecoResSizeName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Offer Discount Amount.
   */
  declare offerDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dlv Mode Code.
   * @nullable
   */
  declare dlvModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Catalog Id.
   * @nullable
   */
  declare catalogId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offer Discount Method.
   * @nullable
   */
  declare offerDiscountMethod?: RetailDiscountOfferLineDiscMethodBase | null;
  /**
   * Offer Price Incl Tax N 1.
   */
  declare offerPriceInclTaxN1: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Eco Res Configuration Name.
   * @nullable
   */
  declare ecoResConfigurationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Site Id.
   * @nullable
   */
  declare inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Location Id.
   * @nullable
   */
  declare inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: RetailDiscountLineIncludeExcludeTypeBase | null;
  /**
   * Prop Value 9.
   * @nullable
   */
  declare propValue9?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Discount Applying Line.
   * @nullable
   */
  declare isDiscountApplyingLine?: NoYes | null;
  /**
   * Prop Value 5.
   * @nullable
   */
  declare propValue5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prop Value 8.
   * @nullable
   */
  declare propValue8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eco Res Color Name.
   * @nullable
   */
  declare ecoResColorName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prop Value 1.
   * @nullable
   */
  declare propValue1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prop Value 4.
   * @nullable
   */
  declare propValue4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offer Price.
   */
  declare offerPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mix And Match Line Group.
   * @nullable
   */
  declare mixAndMatchLineGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Display Product Number.
   * @nullable
   */
  declare displayProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offer Discount Method N 1.
   * @nullable
   */
  declare offerDiscountMethodN1?: RetailOfferLineDiscountMethodBaseN1 | null;
  /**
   * Prop Value 0.
   * @nullable
   */
  declare propValue0?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Threshold Applying Line Discount Method.
   * @nullable
   */
  declare thresholdApplyingLineDiscountMethod?: RetailDiscountThresholdLineDiscountMethodBase | null;
  /**
   * Offer Price N 1.
   */
  declare offerPriceN1: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Category Name.
   * @nullable
   */
  declare categoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Threshold Tier Amount.
   */
  declare thresholdTierAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Prop Value 7.
   * @nullable
   */
  declare propValue7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Variant Display Product Number.
   * @nullable
   */
  declare productVariantDisplayProductNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Category Hierarchy Name.
   * @nullable
   */
  declare categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailDiscountLinesV2Api<T>) {
    super(_entityApi);
  }
}

export interface RetailDiscountLinesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  offerId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  propValue3?: DeserializedType<T, 'Edm.String'> | null;
  thresholdLineQuantityLimit: DeserializedType<T, 'Edm.Decimal'>;
  propValue6?: DeserializedType<T, 'Edm.String'> | null;
  mixAndMatchDiscountType?: RetailDealPriceDiscountPctBase | null;
  mixAndMatchNumberOfItemsNeeded: DeserializedType<T, 'Edm.Int32'>;
  propValue2?: DeserializedType<T, 'Edm.String'> | null;
  ecoResStyleName?: DeserializedType<T, 'Edm.String'> | null;
  discountPercentOrValue: DeserializedType<T, 'Edm.Decimal'>;
  ecoResSizeName?: DeserializedType<T, 'Edm.String'> | null;
  offerDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  unitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  offerDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  dlvModeCode?: DeserializedType<T, 'Edm.String'> | null;
  catalogId?: DeserializedType<T, 'Edm.String'> | null;
  offerDiscountMethod?: RetailDiscountOfferLineDiscMethodBase | null;
  offerPriceInclTaxN1: DeserializedType<T, 'Edm.Decimal'>;
  ecoResConfigurationName?: DeserializedType<T, 'Edm.String'> | null;
  inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  lineType?: RetailDiscountLineIncludeExcludeTypeBase | null;
  propValue9?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  isDiscountApplyingLine?: NoYes | null;
  propValue5?: DeserializedType<T, 'Edm.String'> | null;
  propValue8?: DeserializedType<T, 'Edm.String'> | null;
  ecoResColorName?: DeserializedType<T, 'Edm.String'> | null;
  propValue1?: DeserializedType<T, 'Edm.String'> | null;
  propValue4?: DeserializedType<T, 'Edm.String'> | null;
  offerPrice: DeserializedType<T, 'Edm.Decimal'>;
  mixAndMatchLineGroup?: DeserializedType<T, 'Edm.String'> | null;
  displayProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  offerDiscountMethodN1?: RetailOfferLineDiscountMethodBaseN1 | null;
  propValue0?: DeserializedType<T, 'Edm.String'> | null;
  thresholdApplyingLineDiscountMethod?: RetailDiscountThresholdLineDiscountMethodBase | null;
  offerPriceN1: DeserializedType<T, 'Edm.Decimal'>;
  categoryName?: DeserializedType<T, 'Edm.String'> | null;
  thresholdTierAmount: DeserializedType<T, 'Edm.Decimal'>;
  propValue7?: DeserializedType<T, 'Edm.String'> | null;
  productVariantDisplayProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
}
