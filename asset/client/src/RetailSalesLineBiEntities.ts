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
import type { RetailSalesLineBiEntitiesApi } from './RetailSalesLineBiEntitiesApi';
import { RetailFulfillmentLineStatus } from './RetailFulfillmentLineStatus';
import { RetailSalesLineQuantityColumnsVersion } from './RetailSalesLineQuantityColumnsVersion';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailSalesLineBiEntities" of service "d365_metadata".
 */
export class RetailSalesLineBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailSalesLineBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailSalesLineBiEntities.
   */
  static override _entityName = 'RetailSalesLineBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailSalesLineBiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'SalesLine',
    'FulfillmentStatus',
    'FulfillmentStoreId',
    'PickupEndTime',
    'PickupStartTime',
    'QuantityPicked',
    'QuantityPacked',
    'QuantityInvoiced',
    'QuantityNotProcessed',
    'QuantityColumnsVersion',
    'QuantityPhysicallyReserved'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Line.
   */
  declare salesLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Fulfillment Status.
   * @nullable
   */
  declare fulfillmentStatus?: RetailFulfillmentLineStatus | null;
  /**
   * Fulfillment Store Id.
   */
  declare fulfillmentStoreId: DeserializedType<T, 'Edm.String'>;
  /**
   * Pickup End Time.
   */
  declare pickupEndTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Pickup Start Time.
   */
  declare pickupStartTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Quantity Picked.
   */
  declare quantityPicked: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity Packed.
   */
  declare quantityPacked: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity Invoiced.
   */
  declare quantityInvoiced: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity Not Processed.
   */
  declare quantityNotProcessed: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity Columns Version.
   * @nullable
   */
  declare quantityColumnsVersion?: RetailSalesLineQuantityColumnsVersion | null;
  /**
   * Quantity Physically Reserved.
   */
  declare quantityPhysicallyReserved: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Information.
   * @nullable
   */
  declare information?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Price Locked.
   * @nullable
   */
  declare isPriceLocked?: NoYes | null;
  /**
   * Periodic Discount.
   */
  declare periodicDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Infocode Id.
   * @nullable
   */
  declare subInfocodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Retail Product List Line Update Id.
   * @nullable
   */
  declare retailProductListLineUpdateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Line Dsc Amount.
   */
  declare lineDscAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Trans Id.
   * @nullable
   */
  declare inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Exempt Price Inclusive Reduction Amount.
   */
  declare taxExemptPriceInclusiveReductionAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Line Manual Discount Percentage.
   */
  declare lineManualDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Periodic Percentage Discount.
   */
  declare periodicPercentageDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Listing Id.
   * @nullable
   */
  declare listingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Total Discount.
   */
  declare totalDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Reason Code Id.
   * @nullable
   */
  declare returnReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Manual Discount Amount.
   */
  declare lineManualDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tender Discount.
   */
  declare tenderDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Pct Discount.
   */
  declare totalPctDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Price Keyed In.
   * @nullable
   */
  declare isPriceKeyedIn?: NoYes | null;
  /**
   * Line Percentage Discount.
   */
  declare linePercentageDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Exempt Price Inclusive Original Price.
   */
  declare taxExemptPriceInclusiveOriginalPrice: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Original Price.
   */
  declare originalPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Infocode Id.
   * @nullable
   */
  declare infocodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tender Discount Percentage.
   */
  declare tenderDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Price Overridden.
   * @nullable
   */
  declare isPriceOverridden?: NoYes | null;
  /**
   * Price Override Reason Code.
   * @nullable
   */
  declare priceOverrideReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Catalog.
   */
  declare catalog: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: RetailSalesLineBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailSalesLineBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesLine: DeserializedType<T, 'Edm.Int64'>;
  fulfillmentStatus?: RetailFulfillmentLineStatus | null;
  fulfillmentStoreId: DeserializedType<T, 'Edm.String'>;
  pickupEndTime: DeserializedType<T, 'Edm.Int32'>;
  pickupStartTime: DeserializedType<T, 'Edm.Int32'>;
  quantityPicked: DeserializedType<T, 'Edm.Decimal'>;
  quantityPacked: DeserializedType<T, 'Edm.Decimal'>;
  quantityInvoiced: DeserializedType<T, 'Edm.Decimal'>;
  quantityNotProcessed: DeserializedType<T, 'Edm.Decimal'>;
  quantityColumnsVersion?: RetailSalesLineQuantityColumnsVersion | null;
  quantityPhysicallyReserved: DeserializedType<T, 'Edm.Decimal'>;
  information?: DeserializedType<T, 'Edm.String'> | null;
  isPriceLocked?: NoYes | null;
  periodicDiscount: DeserializedType<T, 'Edm.Decimal'>;
  subInfocodeId?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  retailProductListLineUpdateId?: DeserializedType<T, 'Edm.String'> | null;
  lineDscAmount: DeserializedType<T, 'Edm.Decimal'>;
  inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptPriceInclusiveReductionAmount: DeserializedType<T, 'Edm.Decimal'>;
  lineManualDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  periodicPercentageDiscount: DeserializedType<T, 'Edm.Decimal'>;
  listingId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  totalDiscount: DeserializedType<T, 'Edm.Decimal'>;
  returnReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  lineManualDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  tenderDiscount: DeserializedType<T, 'Edm.Decimal'>;
  totalPctDiscount: DeserializedType<T, 'Edm.Decimal'>;
  isPriceKeyedIn?: NoYes | null;
  linePercentageDiscount: DeserializedType<T, 'Edm.Decimal'>;
  taxExemptPriceInclusiveOriginalPrice: DeserializedType<T, 'Edm.Decimal'>;
  originalPrice: DeserializedType<T, 'Edm.Decimal'>;
  infocodeId?: DeserializedType<T, 'Edm.String'> | null;
  tenderDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  isPriceOverridden?: NoYes | null;
  priceOverrideReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  catalog: DeserializedType<T, 'Edm.Int64'>;
}
