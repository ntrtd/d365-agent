/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiscountAndMarginComponentPriceAdjustments } from './DiscountAndMarginComponentPriceAdjustments';
import { DiscountAndMarginComponentPriceAdjustmentsRequestBuilder } from './DiscountAndMarginComponentPriceAdjustmentsRequestBuilder';
import { DiscountAndMarginComponentPriceAdjustmentLinesApi } from './DiscountAndMarginComponentPriceAdjustmentLinesApi';
import { RetailDiscountTypeEnum } from './RetailDiscountTypeEnum';
import { RetailMixAndMatchDiscountType } from './RetailMixAndMatchDiscountType';
import { RetailLeastExpensiveMode } from './RetailLeastExpensiveMode';
import { GupDiscountMaxCriteriaType } from './GupDiscountMaxCriteriaType';
import { GupFreeItemRepeatable } from './GupFreeItemRepeatable';
import { RetailDisabledEnabled } from './RetailDisabledEnabled';
import { RetailDiscountOfferTypeBase } from './RetailDiscountOfferTypeBase';
import { GupFreeItemCalculationMethod } from './GupFreeItemCalculationMethod';
import { NoYes } from './NoYes';
import { RetailDateValidationTypeBase } from './RetailDateValidationTypeBase';
import { GupFreeItemCriteriaType } from './GupFreeItemCriteriaType';
import { GupGroupAll } from './GupGroupAll';
import { RetailPricingDiscountProcessingStatus } from './RetailPricingDiscountProcessingStatus';
import { RetailDiscountConcurrency } from './RetailDiscountConcurrency';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class DiscountAndMarginComponentPriceAdjustmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      DiscountAndMarginComponentPriceAdjustments<DeSerializersT>,
      DeSerializersT
    >
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
  ): DiscountAndMarginComponentPriceAdjustmentsApi<DeSerializersT> {
    return new DiscountAndMarginComponentPriceAdjustmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link discountAndMarginComponentPriceAdjustmentLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCOUNT_AND_MARGIN_COMPONENT_PRICE_ADJUSTMENT_LINE: OneToManyLink<
      DiscountAndMarginComponentPriceAdjustments<DeSerializersT>,
      DeSerializersT,
      DiscountAndMarginComponentPriceAdjustmentLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DiscountAndMarginComponentPriceAdjustmentLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DISCOUNT_AND_MARGIN_COMPONENT_PRICE_ADJUSTMENT_LINE: new OneToManyLink(
        'DiscountAndMarginComponentPriceAdjustmentLine',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = DiscountAndMarginComponentPriceAdjustments;

  requestBuilder(): DiscountAndMarginComponentPriceAdjustmentsRequestBuilder<DeSerializersT> {
    return new DiscountAndMarginComponentPriceAdjustmentsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    DiscountAndMarginComponentPriceAdjustments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DiscountAndMarginComponentPriceAdjustments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DiscountAndMarginComponentPriceAdjustments<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof DiscountAndMarginComponentPriceAdjustments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DiscountAndMarginComponentPriceAdjustments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OFFER_ID: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEADER_10: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTIBUY_DISCOUNT_TYPE: EnumField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      RetailDiscountTypeEnum,
      true,
      true
    >;
    MIX_AND_MATCH_DISCOUNT_TYPE: EnumField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      RetailMixAndMatchDiscountType,
      true,
      true
    >;
    DISCOUNT_PERCENT_VALUE: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_CODE: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_OF_MEASURE_SYMBOL: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_14: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_11: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIX_AND_MATCH_LEAST_EXPENSIVE_MODE: EnumField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      RetailLeastExpensiveMode,
      true,
      true
    >;
    MAX_CRITERIA_TYPE: EnumField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      GupDiscountMaxCriteriaType,
      true,
      true
    >;
    REPEATABLE: EnumField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      GupFreeItemRepeatable,
      true,
      true
    >;
    STATUS: EnumField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      RetailDisabledEnabled,
      true,
      true
    >;
    DISABLED_SINCE: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    HEADER_9: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_8: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIODIC_DISCOUNT_TYPE: EnumField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      RetailDiscountOfferTypeBase,
      true,
      true
    >;
    HEADER_15: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_ATTRIBUTE_GROUP_NAME: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_1: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_3: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_2: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_5: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_4: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_7: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_6: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREE_ITEM_CALCULATION_METHOD: EnumField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      GupFreeItemCalculationMethod,
      true,
      true
    >;
    PRICING_PRIORITY_NUMBER: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MIX_AND_MATCH_DEAL_PRICE: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_DISCOUNT_CODE_REQUIRED: EnumField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DATE_VALIDATION_TYPE: EnumField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      RetailDateValidationTypeBase,
      true,
      true
    >;
    FREE_ITEM_CRITERIA_TYPE: EnumField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      GupFreeItemCriteriaType,
      true,
      true
    >;
    PRINT_DESCRIPTION_ON_FISCAL_RECEIPT: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAX_QTY_OR_AMOUNT: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HEADER_EXCLUSION: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_COMPONENT_CODE_NAME: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATCH_ALL_ASSOCIATED_PRICE_GROUPS: EnumField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRICE_ATTRIBUTE_GROUP_TYPE: EnumField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      GupGroupAll,
      true,
      true
    >;
    MIX_AND_MATCH_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESSING_STATUS: EnumField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      RetailPricingDiscountProcessingStatus,
      true,
      true
    >;
    DISCOUNT_VENDOR_CLAIM_GROUP_NAME: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIX_AND_MATCH_NO_OF_LEAST_EXPENSIVE_LINES: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VALIDATION_PERIOD_ID: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMBINATION_HEADER_STRUCTURE: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLAIMABLE: EnumField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OFFER_QUANTITY_LIMIT: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONCURRENCY_MODE: EnumField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      RetailDiscountConcurrency,
      true,
      true
    >;
    BAR_CODE: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCLAIMER: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHOULD_USE_INTERVAL: EnumField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HEADER_12: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_13: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THRESHOLD_COUNT_NON_DISCOUNT_ITEMS: EnumField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISCOUNT_CLAIM_POSTING_OFFSET: OrderableEdmTypeField<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link discountAndMarginComponentPriceAdjustmentLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISCOUNT_AND_MARGIN_COMPONENT_PRICE_ADJUSTMENT_LINE: OneToManyLink<
      DiscountAndMarginComponentPriceAdjustments<DeSerializersT>,
      DeSerializersT,
      DiscountAndMarginComponentPriceAdjustmentLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      DiscountAndMarginComponentPriceAdjustments<DeSerializers>
    >;
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
         * Static representation of the {@link offerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFER_ID: fieldBuilder.buildEdmTypeField(
          'OfferId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link header10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_10: fieldBuilder.buildEdmTypeField(
          'Header10',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link multibuyDiscountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTIBUY_DISCOUNT_TYPE: fieldBuilder.buildEnumField(
          'MultibuyDiscountType',
          RetailDiscountTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link mixAndMatchDiscountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIX_AND_MATCH_DISCOUNT_TYPE: fieldBuilder.buildEnumField(
          'MixAndMatchDiscountType',
          RetailMixAndMatchDiscountType,
          true
        ),
        /**
         * Static representation of the {@link discountPercentValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_PERCENT_VALUE: fieldBuilder.buildEdmTypeField(
          'DiscountPercentValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'DiscountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitOfMeasureSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE_SYMBOL: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasureSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link header14} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_14: fieldBuilder.buildEdmTypeField(
          'Header14',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link header11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_11: fieldBuilder.buildEdmTypeField(
          'Header11',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mixAndMatchLeastExpensiveMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIX_AND_MATCH_LEAST_EXPENSIVE_MODE: fieldBuilder.buildEnumField(
          'MixAndMatchLeastExpensiveMode',
          RetailLeastExpensiveMode,
          true
        ),
        /**
         * Static representation of the {@link maxCriteriaType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_CRITERIA_TYPE: fieldBuilder.buildEnumField(
          'MaxCriteriaType',
          GupDiscountMaxCriteriaType,
          true
        ),
        /**
         * Static representation of the {@link repeatable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPEATABLE: fieldBuilder.buildEnumField(
          'Repeatable',
          GupFreeItemRepeatable,
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          RetailDisabledEnabled,
          true
        ),
        /**
         * Static representation of the {@link disabledSince} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISABLED_SINCE: fieldBuilder.buildEdmTypeField(
          'DisabledSince',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link header9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_9: fieldBuilder.buildEdmTypeField('Header9', 'Edm.String', true),
        /**
         * Static representation of the {@link header8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_8: fieldBuilder.buildEdmTypeField('Header8', 'Edm.String', true),
        /**
         * Static representation of the {@link periodicDiscountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIODIC_DISCOUNT_TYPE: fieldBuilder.buildEnumField(
          'PeriodicDiscountType',
          RetailDiscountOfferTypeBase,
          true
        ),
        /**
         * Static representation of the {@link header15} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_15: fieldBuilder.buildEdmTypeField(
          'Header15',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceAttributeGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_ATTRIBUTE_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'PriceAttributeGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link header1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_1: fieldBuilder.buildEdmTypeField('Header1', 'Edm.String', true),
        /**
         * Static representation of the {@link header3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_3: fieldBuilder.buildEdmTypeField('Header3', 'Edm.String', true),
        /**
         * Static representation of the {@link header2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_2: fieldBuilder.buildEdmTypeField('Header2', 'Edm.String', true),
        /**
         * Static representation of the {@link header5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_5: fieldBuilder.buildEdmTypeField('Header5', 'Edm.String', true),
        /**
         * Static representation of the {@link header4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_4: fieldBuilder.buildEdmTypeField('Header4', 'Edm.String', true),
        /**
         * Static representation of the {@link header7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_7: fieldBuilder.buildEdmTypeField('Header7', 'Edm.String', true),
        /**
         * Static representation of the {@link header6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_6: fieldBuilder.buildEdmTypeField('Header6', 'Edm.String', true),
        /**
         * Static representation of the {@link freeItemCalculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_ITEM_CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'FreeItemCalculationMethod',
          GupFreeItemCalculationMethod,
          true
        ),
        /**
         * Static representation of the {@link pricingPriorityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICING_PRIORITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PricingPriorityNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mixAndMatchDealPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIX_AND_MATCH_DEAL_PRICE: fieldBuilder.buildEdmTypeField(
          'MixAndMatchDealPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isDiscountCodeRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DISCOUNT_CODE_REQUIRED: fieldBuilder.buildEnumField(
          'IsDiscountCodeRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dateValidationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_VALIDATION_TYPE: fieldBuilder.buildEnumField(
          'DateValidationType',
          RetailDateValidationTypeBase,
          true
        ),
        /**
         * Static representation of the {@link freeItemCriteriaType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_ITEM_CRITERIA_TYPE: fieldBuilder.buildEnumField(
          'FreeItemCriteriaType',
          GupFreeItemCriteriaType,
          true
        ),
        /**
         * Static representation of the {@link printDescriptionOnFiscalReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_DESCRIPTION_ON_FISCAL_RECEIPT: fieldBuilder.buildEdmTypeField(
          'PrintDescriptionOnFiscalReceipt',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maxQtyOrAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_QTY_OR_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaxQtyOrAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link headerExclusion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_EXCLUSION: fieldBuilder.buildEdmTypeField(
          'HeaderExclusion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceComponentCodeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_COMPONENT_CODE_NAME: fieldBuilder.buildEdmTypeField(
          'PriceComponentCodeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link matchAllAssociatedPriceGroups} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCH_ALL_ASSOCIATED_PRICE_GROUPS: fieldBuilder.buildEnumField(
          'MatchAllAssociatedPriceGroups',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link priceAttributeGroupType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_ATTRIBUTE_GROUP_TYPE: fieldBuilder.buildEnumField(
          'PriceAttributeGroupType',
          GupGroupAll,
          true
        ),
        /**
         * Static representation of the {@link mixAndMatchDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIX_AND_MATCH_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MixAndMatchDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link processingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSING_STATUS: fieldBuilder.buildEnumField(
          'ProcessingStatus',
          RetailPricingDiscountProcessingStatus,
          true
        ),
        /**
         * Static representation of the {@link discountVendorClaimGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_VENDOR_CLAIM_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'DiscountVendorClaimGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mixAndMatchNoOfLeastExpensiveLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIX_AND_MATCH_NO_OF_LEAST_EXPENSIVE_LINES:
          fieldBuilder.buildEdmTypeField(
            'MixAndMatchNoOfLeastExpensiveLines',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link validationPeriodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATION_PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'ValidationPeriodId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link combinationHeaderStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMBINATION_HEADER_STRUCTURE: fieldBuilder.buildEdmTypeField(
          'CombinationHeaderStructure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link claimable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLAIMABLE: fieldBuilder.buildEnumField('Claimable', NoYes, true),
        /**
         * Static representation of the {@link offerQuantityLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFER_QUANTITY_LIMIT: fieldBuilder.buildEdmTypeField(
          'OfferQuantityLimit',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link concurrencyMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCURRENCY_MODE: fieldBuilder.buildEnumField(
          'ConcurrencyMode',
          RetailDiscountConcurrency,
          true
        ),
        /**
         * Static representation of the {@link barCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BAR_CODE: fieldBuilder.buildEdmTypeField('BarCode', 'Edm.String', true),
        /**
         * Static representation of the {@link disclaimer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCLAIMER: fieldBuilder.buildEdmTypeField(
          'Disclaimer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shouldUseInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOULD_USE_INTERVAL: fieldBuilder.buildEnumField(
          'ShouldUseInterval',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link header12} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_12: fieldBuilder.buildEdmTypeField(
          'Header12',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link header13} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_13: fieldBuilder.buildEdmTypeField(
          'Header13',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link thresholdCountNonDiscountItems} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THRESHOLD_COUNT_NON_DISCOUNT_ITEMS: fieldBuilder.buildEnumField(
          'ThresholdCountNonDiscountItems',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link discountClaimPostingOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_CLAIM_POSTING_OFFSET: fieldBuilder.buildEdmTypeField(
          'DiscountClaimPostingOffset',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          DiscountAndMarginComponentPriceAdjustments
        )
      };
    }

    return this._schema;
  }
}
