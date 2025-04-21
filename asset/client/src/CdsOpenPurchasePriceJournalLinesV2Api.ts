/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CdsOpenPurchasePriceJournalLinesV2 } from './CdsOpenPurchasePriceJournalLinesV2';
import { CdsOpenPurchasePriceJournalLinesV2RequestBuilder } from './CdsOpenPurchasePriceJournalLinesV2RequestBuilder';
import { NoYes } from './NoYes';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class CdsOpenPurchasePriceJournalLinesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializersT>,
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
  ): CdsOpenPurchasePriceJournalLinesV2Api<DeSerializersT> {
    return new CdsOpenPurchasePriceJournalLinesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CdsOpenPurchasePriceJournalLinesV2;

  requestBuilder(): CdsOpenPurchasePriceJournalLinesV2RequestBuilder<DeSerializersT> {
    return new CdsOpenPurchasePriceJournalLinesV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CdsOpenPurchasePriceJournalLinesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CdsOpenPurchasePriceJournalLinesV2<DeSerializersT>,
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
    typeof CdsOpenPurchasePriceJournalLinesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CdsOpenPurchasePriceJournalLinesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRADE_AGREEMENT_JOURNAL_NUMBER: OrderableEdmTypeField<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICE_APPLICABLE_FROM_DATE: OrderableEdmTypeField<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WILL_SEARCH_CONTINUE: EnumField<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROCUREMENT_LEAD_TIME_DAYS: OrderableEdmTypeField<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    QUANTITY_UNIT_SYMBOL: OrderableEdmTypeField<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTRIBUTE_BASED_PRICING_ID: OrderableEdmTypeField<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_CURRENCY_CODE: OrderableEdmTypeField<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_QUANTITY: OrderableEdmTypeField<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIXED_PRICE_CHARGES: OrderableEdmTypeField<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WILL_DELIVERY_DATE_CONTROL_DISREGARD_LEAD_TIME: EnumField<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PROCUREMENT_LEAD_TIME_USING_WORKING_DAYS: EnumField<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCHASE_PRICE_QUANTITY: OrderableEdmTypeField<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICE_APPLICABLE_TO_DATE: OrderableEdmTypeField<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRICE_WAREHOUSE_ID: OrderableEdmTypeField<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_QUANTITY: OrderableEdmTypeField<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICE: OrderableEdmTypeField<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICE_SITE_ID: OrderableEdmTypeField<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_VENDOR_GROUP_CODE: OrderableEdmTypeField<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESSING_LOG: OrderableEdmTypeField<
      CdsOpenPurchasePriceJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CdsOpenPurchasePriceJournalLinesV2<DeSerializers>>;
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
         * Static representation of the {@link tradeAgreementJournalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRADE_AGREEMENT_JOURNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'TradeAgreementJournalNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link priceApplicableFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_APPLICABLE_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'PriceApplicableFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link willSearchContinue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_SEARCH_CONTINUE: fieldBuilder.buildEnumField(
          'WillSearchContinue',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link procurementLeadTimeDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_LEAD_TIME_DAYS: fieldBuilder.buildEdmTypeField(
          'ProcurementLeadTimeDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link quantityUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'QuantityUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attributeBasedPricingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_BASED_PRICING_ID: fieldBuilder.buildEdmTypeField(
          'AttributeBasedPricingId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'PriceCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ToQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fixedPriceCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_PRICE_CHARGES: fieldBuilder.buildEdmTypeField(
          'FixedPriceCharges',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link willDeliveryDateControlDisregardLeadTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_DELIVERY_DATE_CONTROL_DISREGARD_LEAD_TIME:
          fieldBuilder.buildEnumField(
            'WillDeliveryDateControlDisregardLeadTime',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isProcurementLeadTimeUsingWorkingDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PROCUREMENT_LEAD_TIME_USING_WORKING_DAYS:
          fieldBuilder.buildEnumField(
            'IsProcurementLeadTimeUsingWorkingDays',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link purchasePriceQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PRICE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PurchasePriceQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link priceApplicableToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_APPLICABLE_TO_DATE: fieldBuilder.buildEdmTypeField(
          'PriceApplicableToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link priceWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'PriceWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fromQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_QUANTITY: fieldBuilder.buildEdmTypeField(
          'FromQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link price} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE: fieldBuilder.buildEdmTypeField('Price', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link priceSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_SITE_ID: fieldBuilder.buildEdmTypeField(
          'PriceSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceVendorGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_VENDOR_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'PriceVendorGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link processingLog} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSING_LOG: fieldBuilder.buildEdmTypeField(
          'ProcessingLog',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CdsOpenPurchasePriceJournalLinesV2)
      };
    }

    return this._schema;
  }
}
