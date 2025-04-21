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
import type { GupParametersApi } from './GupParametersApi';
import { GupFreeItemConcurrencyControlModel } from './GupFreeItemConcurrencyControlModel';
import { RetailBookingLedgerAccountTypeBase } from './RetailBookingLedgerAccountTypeBase';
import { NoYes } from './NoYes';
import { GupActivePriceCalcPriceRule } from './GupActivePriceCalcPriceRule';
import { GupBasePriceType } from './GupBasePriceType';
import { GupFreeItemCalculationBase } from './GupFreeItemCalculationBase';
import { GupPriceComponentCodeMaintenanceMode } from './GupPriceComponentCodeMaintenanceMode';
import { GupBasePriceVersionPriceBasis } from './GupBasePriceVersionPriceBasis';
import { GupActivePriceCalcPriceBasis } from './GupActivePriceCalcPriceBasis';
import { SalesPriceDateType } from './SalesPriceDateType';
import { GupBasePriceVersionPriceRule } from './GupBasePriceVersionPriceRule';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "GUPParameters" of service "d365_metadata".
 */
export class GupParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements GupParametersType<T>
{
  /**
   * Technical entity name for GupParameters.
   */
  static override _entityName = 'GUPParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GupParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Free Item Concurrency Control Model.
   * @nullable
   */
  declare freeItemConcurrencyControlModel?: GupFreeItemConcurrencyControlModel | null;
  /**
   * Ledger Account Type.
   * @nullable
   */
  declare ledgerAccountType?: RetailBookingLedgerAccountTypeBase | null;
  /**
   * Post Periodic Disc.
   * @nullable
   */
  declare postPeriodicDisc?: NoYes | null;
  /**
   * Sales Order Attribute Group Name.
   * @nullable
   */
  declare salesOrderAttributeGroupName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Price Disc Search Again Default.
   * @nullable
   */
  declare priceDiscSearchAgainDefault?: NoYes | null;
  /**
   * Price Search Without Attributes.
   * @nullable
   */
  declare priceSearchWithoutAttributes?: NoYes | null;
  /**
   * Post Periodic Discount For Orders.
   * @nullable
   */
  declare postPeriodicDiscountForOrders?: NoYes | null;
  /**
   * Active Price Price Rule.
   * @nullable
   */
  declare activePricePriceRule?: GupActivePriceCalcPriceRule | null;
  /**
   * Search Auto Charges Without Attributes.
   * @nullable
   */
  declare searchAutoChargesWithoutAttributes?: NoYes | null;
  /**
   * Free Item Ledger Dimension Display Value.
   * @nullable
   */
  declare freeItemLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Enable Global Unified Pricing On Sales Order.
   * @nullable
   */
  declare enableGlobalUnifiedPricingOnSalesOrder?: NoYes | null;
  /**
   * Enable Price Tree.
   * @nullable
   */
  declare enablePriceTree?: NoYes | null;
  /**
   * Mix Match Ledger Dimension Display Value.
   * @nullable
   */
  declare mixMatchLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Post Margin Component Adjustments.
   * @nullable
   */
  declare postMarginComponentAdjustments?: NoYes | null;
  /**
   * Active Price Fallback Price Basis.
   * @nullable
   */
  declare activePriceFallbackPriceBasis?: GupBasePriceType | null;
  /**
   * Enable Delayed Price And Discount Calculation.
   * @nullable
   */
  declare enableDelayedPriceAndDiscountCalculation?: NoYes | null;
  /**
   * Post Sales Trade Agreement Price.
   * @nullable
   */
  declare postSalesTradeAgreementPrice?: NoYes | null;
  /**
   * Threshold Ledger Dimension Display Value.
   * @nullable
   */
  declare thresholdLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Coupon Barcode Setup Id.
   * @nullable
   */
  declare couponBarcodeSetupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Free Item Calculation Base.
   * @nullable
   */
  declare freeItemCalculationBase?: GupFreeItemCalculationBase | null;
  /**
   * Default Price Component Code Maintenance Mode.
   * @nullable
   */
  declare defaultPriceComponentCodeMaintenanceMode?: GupPriceComponentCodeMaintenanceMode | null;
  /**
   * Auto Confirm Sales Order With Complete.
   * @nullable
   */
  declare autoConfirmSalesOrderWithComplete?: NoYes | null;
  /**
   * Cleanup Expired Discounts Required Days.
   */
  declare cleanupExpiredDiscountsRequiredDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Allow Apply Adjustments To Standard Trade Agreements.
   * @nullable
   */
  declare allowApplyAdjustmentsToStandardTradeAgreements?: NoYes | null;
  /**
   * Multi Buy Ledger Dimension Display Value.
   * @nullable
   */
  declare multiBuyLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Mcr Enable Price Details.
   * @nullable
   */
  declare mcrEnablePriceDetails?: NoYes | null;
  /**
   * Discount Vendor Claim Journal Name.
   * @nullable
   */
  declare discountVendorClaimJournalName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Margin Component Adjustment Default Ledger Dimension Display Value.
   * @nullable
   */
  declare marginComponentAdjustmentDefaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Multi Thread Calculation Thread Nums.
   */
  declare multiThreadCalculationThreadNums: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Hold Together For Discount Rounding.
   * @nullable
   */
  declare holdTogetherForDiscountRounding?: NoYes | null;
  /**
   * Base Price Price Basis.
   * @nullable
   */
  declare basePricePriceBasis?: GupBasePriceVersionPriceBasis | null;
  /**
   * Active Price Price Basis.
   * @nullable
   */
  declare activePricePriceBasis?: GupActivePriceCalcPriceBasis | null;
  /**
   * Apply Discounts To Price Overrides.
   * @nullable
   */
  declare applyDiscountsToPriceOverrides?: NoYes | null;
  /**
   * Apply Discounts To Price Keyed In.
   * @nullable
   */
  declare applyDiscountsToPriceKeyedIn?: NoYes | null;
  /**
   * Price Tree Attribute Name.
   * @nullable
   */
  declare priceTreeAttributeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Attribute Group Name.
   * @nullable
   */
  declare customerAttributeGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Trade Agreement Price Default Ledger Dimension Display Value.
   * @nullable
   */
  declare salesTradeAgreementPriceDefaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Price Date Type.
   * @nullable
   */
  declare priceDateType?: SalesPriceDateType | null;
  /**
   * Post Infocode Disc.
   * @nullable
   */
  declare postInfocodeDisc?: NoYes | null;
  /**
   * Base Price Price Rule.
   * @nullable
   */
  declare basePricePriceRule?: GupBasePriceVersionPriceRule | null;
  /**
   * Skip Order Completion.
   * @nullable
   */
  declare skipOrderCompletion?: NoYes | null;
  /**
   * Offer Ledger Dimension Display Value.
   * @nullable
   */
  declare offerLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: GupParametersApi<T>) {
    super(_entityApi);
  }
}

export interface GupParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  freeItemConcurrencyControlModel?: GupFreeItemConcurrencyControlModel | null;
  ledgerAccountType?: RetailBookingLedgerAccountTypeBase | null;
  postPeriodicDisc?: NoYes | null;
  salesOrderAttributeGroupName?: DeserializedType<T, 'Edm.String'> | null;
  priceDiscSearchAgainDefault?: NoYes | null;
  priceSearchWithoutAttributes?: NoYes | null;
  postPeriodicDiscountForOrders?: NoYes | null;
  activePricePriceRule?: GupActivePriceCalcPriceRule | null;
  searchAutoChargesWithoutAttributes?: NoYes | null;
  freeItemLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  enableGlobalUnifiedPricingOnSalesOrder?: NoYes | null;
  enablePriceTree?: NoYes | null;
  mixMatchLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  postMarginComponentAdjustments?: NoYes | null;
  activePriceFallbackPriceBasis?: GupBasePriceType | null;
  enableDelayedPriceAndDiscountCalculation?: NoYes | null;
  postSalesTradeAgreementPrice?: NoYes | null;
  thresholdLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  couponBarcodeSetupId?: DeserializedType<T, 'Edm.String'> | null;
  freeItemCalculationBase?: GupFreeItemCalculationBase | null;
  defaultPriceComponentCodeMaintenanceMode?: GupPriceComponentCodeMaintenanceMode | null;
  autoConfirmSalesOrderWithComplete?: NoYes | null;
  cleanupExpiredDiscountsRequiredDays: DeserializedType<T, 'Edm.Int32'>;
  allowApplyAdjustmentsToStandardTradeAgreements?: NoYes | null;
  multiBuyLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  mcrEnablePriceDetails?: NoYes | null;
  discountVendorClaimJournalName?: DeserializedType<T, 'Edm.String'> | null;
  marginComponentAdjustmentDefaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  multiThreadCalculationThreadNums: DeserializedType<T, 'Edm.Int32'>;
  holdTogetherForDiscountRounding?: NoYes | null;
  basePricePriceBasis?: GupBasePriceVersionPriceBasis | null;
  activePricePriceBasis?: GupActivePriceCalcPriceBasis | null;
  applyDiscountsToPriceOverrides?: NoYes | null;
  applyDiscountsToPriceKeyedIn?: NoYes | null;
  priceTreeAttributeName?: DeserializedType<T, 'Edm.String'> | null;
  customerAttributeGroupName?: DeserializedType<T, 'Edm.String'> | null;
  salesTradeAgreementPriceDefaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  priceDateType?: SalesPriceDateType | null;
  postInfocodeDisc?: NoYes | null;
  basePricePriceRule?: GupBasePriceVersionPriceRule | null;
  skipOrderCompletion?: NoYes | null;
  offerLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
