/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GupParameters } from './GupParameters';
import { GupParametersRequestBuilder } from './GupParametersRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
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
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class GupParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<GupParameters<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): GupParametersApi<DeSerializersT> {
    return new GupParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      GupParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = GupParameters;

  requestBuilder(): GupParametersRequestBuilder<DeSerializersT> {
    return new GupParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    GupParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<GupParameters<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<GupParameters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof GupParameters, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(GupParameters, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FREE_ITEM_CONCURRENCY_CONTROL_MODEL: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      GupFreeItemConcurrencyControlModel,
      true,
      true
    >;
    LEDGER_ACCOUNT_TYPE: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      RetailBookingLedgerAccountTypeBase,
      true,
      true
    >;
    POST_PERIODIC_DISC: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_ORDER_ATTRIBUTE_GROUP_NAME: OrderableEdmTypeField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_DISC_SEARCH_AGAIN_DEFAULT: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRICE_SEARCH_WITHOUT_ATTRIBUTES: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POST_PERIODIC_DISCOUNT_FOR_ORDERS: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTIVE_PRICE_PRICE_RULE: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      GupActivePriceCalcPriceRule,
      true,
      true
    >;
    SEARCH_AUTO_CHARGES_WITHOUT_ATTRIBUTES: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FREE_ITEM_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_GLOBAL_UNIFIED_PRICING_ON_SALES_ORDER: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_PRICE_TREE: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MIX_MATCH_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_MARGIN_COMPONENT_ADJUSTMENTS: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTIVE_PRICE_FALLBACK_PRICE_BASIS: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      GupBasePriceType,
      true,
      true
    >;
    ENABLE_DELAYED_PRICE_AND_DISCOUNT_CALCULATION: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POST_SALES_TRADE_AGREEMENT_PRICE: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    THRESHOLD_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUPON_BARCODE_SETUP_ID: OrderableEdmTypeField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREE_ITEM_CALCULATION_BASE: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      GupFreeItemCalculationBase,
      true,
      true
    >;
    DEFAULT_PRICE_COMPONENT_CODE_MAINTENANCE_MODE: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      GupPriceComponentCodeMaintenanceMode,
      true,
      true
    >;
    AUTO_CONFIRM_SALES_ORDER_WITH_COMPLETE: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLEANUP_EXPIRED_DISCOUNTS_REQUIRED_DAYS: OrderableEdmTypeField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALLOW_APPLY_ADJUSTMENTS_TO_STANDARD_TRADE_AGREEMENTS: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MULTI_BUY_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_ENABLE_PRICE_DETAILS: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISCOUNT_VENDOR_CLAIM_JOURNAL_NAME: OrderableEdmTypeField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARGIN_COMPONENT_ADJUSTMENT_DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTI_THREAD_CALCULATION_THREAD_NUMS: OrderableEdmTypeField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    HOLD_TOGETHER_FOR_DISCOUNT_ROUNDING: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BASE_PRICE_PRICE_BASIS: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      GupBasePriceVersionPriceBasis,
      true,
      true
    >;
    ACTIVE_PRICE_PRICE_BASIS: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      GupActivePriceCalcPriceBasis,
      true,
      true
    >;
    APPLY_DISCOUNTS_TO_PRICE_OVERRIDES: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    APPLY_DISCOUNTS_TO_PRICE_KEYED_IN: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRICE_TREE_ATTRIBUTE_NAME: OrderableEdmTypeField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ATTRIBUTE_GROUP_NAME: OrderableEdmTypeField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TRADE_AGREEMENT_PRICE_DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_DATE_TYPE: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      SalesPriceDateType,
      true,
      true
    >;
    POST_INFOCODE_DISC: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BASE_PRICE_PRICE_RULE: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      GupBasePriceVersionPriceRule,
      true,
      true
    >;
    SKIP_ORDER_COMPLETION: EnumField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OFFER_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      GupParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      GupParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<GupParameters<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link freeItemConcurrencyControlModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_ITEM_CONCURRENCY_CONTROL_MODEL: fieldBuilder.buildEnumField(
          'FreeItemConcurrencyControlModel',
          GupFreeItemConcurrencyControlModel,
          true
        ),
        /**
         * Static representation of the {@link ledgerAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'ledgerAccountType',
          RetailBookingLedgerAccountTypeBase,
          true
        ),
        /**
         * Static representation of the {@link postPeriodicDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_PERIODIC_DISC: fieldBuilder.buildEnumField(
          'postPeriodicDisc',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesOrderAttributeGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_ATTRIBUTE_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'SalesOrderAttributeGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceDiscSearchAgainDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_DISC_SEARCH_AGAIN_DEFAULT: fieldBuilder.buildEnumField(
          'PriceDiscSearchAgainDefault',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link priceSearchWithoutAttributes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_SEARCH_WITHOUT_ATTRIBUTES: fieldBuilder.buildEnumField(
          'PriceSearchWithoutAttributes',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postPeriodicDiscountForOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_PERIODIC_DISCOUNT_FOR_ORDERS: fieldBuilder.buildEnumField(
          'PostPeriodicDiscountForOrders',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link activePricePriceRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_PRICE_PRICE_RULE: fieldBuilder.buildEnumField(
          'ActivePrice_PriceRule',
          GupActivePriceCalcPriceRule,
          true
        ),
        /**
         * Static representation of the {@link searchAutoChargesWithoutAttributes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEARCH_AUTO_CHARGES_WITHOUT_ATTRIBUTES: fieldBuilder.buildEnumField(
          'SearchAutoChargesWithoutAttributes',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link freeItemLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_ITEM_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'FreeItemLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link enableGlobalUnifiedPricingOnSalesOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_GLOBAL_UNIFIED_PRICING_ON_SALES_ORDER:
          fieldBuilder.buildEnumField(
            'EnableGlobalUnifiedPricingOnSalesOrder',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link enablePriceTree} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_PRICE_TREE: fieldBuilder.buildEnumField(
          'EnablePriceTree',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mixMatchLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIX_MATCH_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'MixMatchLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link postMarginComponentAdjustments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_MARGIN_COMPONENT_ADJUSTMENTS: fieldBuilder.buildEnumField(
          'PostMarginComponentAdjustments',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link activePriceFallbackPriceBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_PRICE_FALLBACK_PRICE_BASIS: fieldBuilder.buildEnumField(
          'ActivePrice_FallbackPriceBasis',
          GupBasePriceType,
          true
        ),
        /**
         * Static representation of the {@link enableDelayedPriceAndDiscountCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_DELAYED_PRICE_AND_DISCOUNT_CALCULATION:
          fieldBuilder.buildEnumField(
            'EnableDelayedPriceAndDiscountCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link postSalesTradeAgreementPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_SALES_TRADE_AGREEMENT_PRICE: fieldBuilder.buildEnumField(
          'PostSalesTradeAgreementPrice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link thresholdLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THRESHOLD_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'ThresholdLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link couponBarcodeSetupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUPON_BARCODE_SETUP_ID: fieldBuilder.buildEdmTypeField(
          'CouponBarcodeSetupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freeItemCalculationBase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_ITEM_CALCULATION_BASE: fieldBuilder.buildEnumField(
          'FreeItemCalculationBase',
          GupFreeItemCalculationBase,
          true
        ),
        /**
         * Static representation of the {@link defaultPriceComponentCodeMaintenanceMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PRICE_COMPONENT_CODE_MAINTENANCE_MODE:
          fieldBuilder.buildEnumField(
            'DefaultPriceComponentCodeMaintenanceMode',
            GupPriceComponentCodeMaintenanceMode,
            true
          ),
        /**
         * Static representation of the {@link autoConfirmSalesOrderWithComplete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_CONFIRM_SALES_ORDER_WITH_COMPLETE: fieldBuilder.buildEnumField(
          'AutoConfirmSalesOrderWithComplete',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cleanupExpiredDiscountsRequiredDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLEANUP_EXPIRED_DISCOUNTS_REQUIRED_DAYS: fieldBuilder.buildEdmTypeField(
          'CleanupExpiredDiscountsRequiredDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link allowApplyAdjustmentsToStandardTradeAgreements} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_APPLY_ADJUSTMENTS_TO_STANDARD_TRADE_AGREEMENTS:
          fieldBuilder.buildEnumField(
            'AllowApplyAdjustmentsToStandardTradeAgreements',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link multiBuyLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTI_BUY_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'MultiBuyLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link mcrEnablePriceDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_ENABLE_PRICE_DETAILS: fieldBuilder.buildEnumField(
          'MCREnablePriceDetails',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link discountVendorClaimJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_VENDOR_CLAIM_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'DiscountVendorClaimJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link marginComponentAdjustmentDefaultLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARGIN_COMPONENT_ADJUSTMENT_DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'MarginComponentAdjustmentDefaultLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link multiThreadCalculationThreadNums} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTI_THREAD_CALCULATION_THREAD_NUMS: fieldBuilder.buildEdmTypeField(
          'MultiThreadCalculationThreadNums',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link holdTogetherForDiscountRounding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOLD_TOGETHER_FOR_DISCOUNT_ROUNDING: fieldBuilder.buildEnumField(
          'HoldTogetherForDiscountRounding',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link basePricePriceBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_PRICE_PRICE_BASIS: fieldBuilder.buildEnumField(
          'BasePrice_PriceBasis',
          GupBasePriceVersionPriceBasis,
          true
        ),
        /**
         * Static representation of the {@link activePricePriceBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_PRICE_PRICE_BASIS: fieldBuilder.buildEnumField(
          'ActivePrice_PriceBasis',
          GupActivePriceCalcPriceBasis,
          true
        ),
        /**
         * Static representation of the {@link applyDiscountsToPriceOverrides} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_DISCOUNTS_TO_PRICE_OVERRIDES: fieldBuilder.buildEnumField(
          'ApplyDiscountsToPriceOverrides',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link applyDiscountsToPriceKeyedIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_DISCOUNTS_TO_PRICE_KEYED_IN: fieldBuilder.buildEnumField(
          'ApplyDiscountsToPriceKeyedIn',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link priceTreeAttributeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_TREE_ATTRIBUTE_NAME: fieldBuilder.buildEdmTypeField(
          'PriceTreeAttributeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerAttributeGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ATTRIBUTE_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'CustomerAttributeGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTradeAgreementPriceDefaultLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TRADE_AGREEMENT_PRICE_DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'SalesTradeAgreementPriceDefaultLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link priceDateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_DATE_TYPE: fieldBuilder.buildEnumField(
          'PriceDateType',
          SalesPriceDateType,
          true
        ),
        /**
         * Static representation of the {@link postInfocodeDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_INFOCODE_DISC: fieldBuilder.buildEnumField(
          'postInfocodeDisc',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link basePricePriceRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_PRICE_PRICE_RULE: fieldBuilder.buildEnumField(
          'BasePrice_PriceRule',
          GupBasePriceVersionPriceRule,
          true
        ),
        /**
         * Static representation of the {@link skipOrderCompletion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_ORDER_COMPLETION: fieldBuilder.buildEnumField(
          'SkipOrderCompletion',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link offerLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFER_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OfferLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GupParameters)
      };
    }

    return this._schema;
  }
}
