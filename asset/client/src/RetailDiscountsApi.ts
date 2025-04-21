/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailDiscounts } from './RetailDiscounts';
import { RetailDiscountsRequestBuilder } from './RetailDiscountsRequestBuilder';
import { RetailDiscountLinesApi } from './RetailDiscountLinesApi';
import { RetailPricingDiscountProcessingStatus } from './RetailPricingDiscountProcessingStatus';
import { RetailMixAndMatchDiscountType } from './RetailMixAndMatchDiscountType';
import { NoYes } from './NoYes';
import { RetailDisabledEnabled } from './RetailDisabledEnabled';
import { RetailDiscountTypeEnum } from './RetailDiscountTypeEnum';
import { RetailDiscountConcurrency } from './RetailDiscountConcurrency';
import { RetailDateValidationTypeBase } from './RetailDateValidationTypeBase';
import { RetailLeastExpensiveMode } from './RetailLeastExpensiveMode';
import { RetailDiscountOfferTypeBase } from './RetailDiscountOfferTypeBase';
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
export class RetailDiscountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailDiscounts<DeSerializersT>, DeSerializersT>
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
  ): RetailDiscountsApi<DeSerializersT> {
    return new RetailDiscountsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailDiscountLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_DISCOUNT_LINE: OneToManyLink<
      RetailDiscounts<DeSerializersT>,
      DeSerializersT,
      RetailDiscountLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailDiscountLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_DISCOUNT_LINE: new OneToManyLink(
        'RetailDiscountLine',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RetailDiscounts;

  requestBuilder(): RetailDiscountsRequestBuilder<DeSerializersT> {
    return new RetailDiscountsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailDiscounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailDiscounts<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailDiscounts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RetailDiscounts, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailDiscounts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OFFER_ID: OrderableEdmTypeField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROCESSING_STATUS: EnumField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      RetailPricingDiscountProcessingStatus,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIX_AND_MATCH_DISCOUNT_TYPE: EnumField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      RetailMixAndMatchDiscountType,
      true,
      true
    >;
    IS_DISCOUNT_CODE_REQUIRED: EnumField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OFFER_QUANTITY_LIMIT: OrderableEdmTypeField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MIX_AND_MATCH_NO_OF_LEAST_EXPENSIVE_LINES: OrderableEdmTypeField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STATUS: EnumField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      RetailDisabledEnabled,
      true,
      true
    >;
    BAR_CODE: OrderableEdmTypeField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCLAIMER: OrderableEdmTypeField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THRESHOLD_COUNT_NON_DISCOUNT_ITEMS: EnumField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISABLED_SINCE: OrderableEdmTypeField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MULTIBUY_DISCOUNT_TYPE: EnumField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      RetailDiscountTypeEnum,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIX_AND_MATCH_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_RECORD_ID: OrderableEdmTypeField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VALIDATION_PERIOD_ID: OrderableEdmTypeField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_PERCENT_VALUE: OrderableEdmTypeField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICING_PRIORITY_NUMBER: OrderableEdmTypeField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONCURRENCY_MODE: EnumField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      RetailDiscountConcurrency,
      true,
      true
    >;
    DATE_VALIDATION_TYPE: EnumField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      RetailDateValidationTypeBase,
      true,
      true
    >;
    MIX_AND_MATCH_DEAL_PRICE: OrderableEdmTypeField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_CODE: OrderableEdmTypeField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_DESCRIPTION_ON_FISCAL_RECEIPT: OrderableEdmTypeField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DISCOUNT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MIX_AND_MATCH_LEAST_EXPENSIVE_MODE: EnumField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      RetailLeastExpensiveMode,
      true,
      true
    >;
    MATCH_ALL_ASSOCIATED_PRICE_GROUPS: EnumField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERIODIC_DISCOUNT_TYPE: EnumField<
      RetailDiscounts<DeSerializers>,
      DeSerializersT,
      RetailDiscountOfferTypeBase,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailDiscountLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_DISCOUNT_LINE: OneToManyLink<
      RetailDiscounts<DeSerializersT>,
      DeSerializersT,
      RetailDiscountLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailDiscounts<DeSerializers>>;
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
         * Static representation of the {@link processingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSING_STATUS: fieldBuilder.buildEnumField(
          'ProcessingStatus',
          RetailPricingDiscountProcessingStatus,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
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
         * Static representation of the {@link isDiscountCodeRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DISCOUNT_CODE_REQUIRED: fieldBuilder.buildEnumField(
          'IsDiscountCodeRequired',
          NoYes,
          true
        ),
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
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          RetailDisabledEnabled,
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
         * Static representation of the {@link thresholdCountNonDiscountItems} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THRESHOLD_COUNT_NON_DISCOUNT_ITEMS: fieldBuilder.buildEnumField(
          'ThresholdCountNonDiscountItems',
          NoYes,
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
         * Static representation of the {@link multibuyDiscountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTIBUY_DISCOUNT_TYPE: fieldBuilder.buildEnumField(
          'MultibuyDiscountType',
          RetailDiscountTypeEnum,
          true
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
         * Static representation of the {@link mixAndMatchDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIX_AND_MATCH_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MixAndMatchDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discountRecordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_RECORD_ID: fieldBuilder.buildEdmTypeField(
          'DiscountRecordId',
          'Edm.Int64',
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
         * Static representation of the {@link discountPercentValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_PERCENT_VALUE: fieldBuilder.buildEdmTypeField(
          'DiscountPercentValue',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link pricingPriorityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICING_PRIORITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PricingPriorityNumber',
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
         * Static representation of the {@link dateValidationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_VALIDATION_TYPE: fieldBuilder.buildEnumField(
          'DateValidationType',
          RetailDateValidationTypeBase,
          true
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
         * Static representation of the {@link discountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'DiscountCode',
          'Edm.String',
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
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link discountLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DiscountLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link mixAndMatchLeastExpensiveMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIX_AND_MATCH_LEAST_EXPENSIVE_MODE: fieldBuilder.buildEnumField(
          'MixAndMatchLeastExpensiveMode',
          RetailLeastExpensiveMode,
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
         * Static representation of the {@link periodicDiscountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIODIC_DISCOUNT_TYPE: fieldBuilder.buildEnumField(
          'PeriodicDiscountType',
          RetailDiscountOfferTypeBase,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailDiscounts)
      };
    }

    return this._schema;
  }
}
