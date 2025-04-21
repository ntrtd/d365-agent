/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TradeAgreementInquiryResults } from './TradeAgreementInquiryResults';
import { TradeAgreementInquiryResultsRequestBuilder } from './TradeAgreementInquiryResultsRequestBuilder';
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
export class TradeAgreementInquiryResultsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TradeAgreementInquiryResults<DeSerializersT>, DeSerializersT>
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
  ): TradeAgreementInquiryResultsApi<DeSerializersT> {
    return new TradeAgreementInquiryResultsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TradeAgreementInquiryResults;

  requestBuilder(): TradeAgreementInquiryResultsRequestBuilder<DeSerializersT> {
    return new TradeAgreementInquiryResultsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TradeAgreementInquiryResults<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TradeAgreementInquiryResults<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TradeAgreementInquiryResults<DeSerializersT>,
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
    typeof TradeAgreementInquiryResults,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TradeAgreementInquiryResults,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRADE_AGREEMENT_JOURNAL_NUMBER: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HEADER_10: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_GENERIC_CURRENCY_SEARCH_ENABLED: EnumField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_14: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_11: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_9: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_8: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_15: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_1: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_3: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_2: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_5: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_4: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_7: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_6: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_GROUP: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRICE_QUANTITY: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROCESSING_LOG: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_PRICE_CHARGES: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_13: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_COMPONENT_CODE_NAME: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_7: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_6: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_5: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_4: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_3: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_2: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_1: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_SITE_ID: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_12: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_CUSTOMER_GROUP_CODE: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_9: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_8: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_LEAD_TIME_DAYS: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    UNIT_ID: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_FROM_DATE: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRICE_APPLY_ADJUSTMENT: EnumField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_15: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_QUANTITY: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ATTRIBUTE_BASED_PRICING_ID: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_14: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_11: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_DELIVERY_DATE_CONTROL_DISREGARD_LEAD_TIME: EnumField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMBINATION_HEADER_STRUCTURE: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_APPLIES_TO_ALL: EnumField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMBINATION_LINE_STRUCTURE: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_10: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_COMPONENT_COMBINATION: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_QUANTITY: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICE: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_12: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_SEARCH_CONTINUE: EnumField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HEADER_13: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_CURRENCY_CODE: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_TO_DATE: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRICE_WAREHOUSE_ID: OrderableEdmTypeField<
      TradeAgreementInquiryResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TradeAgreementInquiryResults<DeSerializers>>;
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
         * Static representation of the {@link header10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_10: fieldBuilder.buildEdmTypeField(
          'Header10',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isGenericCurrencySearchEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_GENERIC_CURRENCY_SEARCH_ENABLED: fieldBuilder.buildEnumField(
          'IsGenericCurrencySearchEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
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
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link header15} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_15: fieldBuilder.buildEdmTypeField(
          'Header15',
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
         * Static representation of the {@link customerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link header6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_6: fieldBuilder.buildEdmTypeField('Header6', 'Edm.String', true),
        /**
         * Static representation of the {@link priceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_GROUP: fieldBuilder.buildEdmTypeField(
          'PriceGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesPriceQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'SalesPriceQuantity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link line13} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_13: fieldBuilder.buildEdmTypeField('Line13', 'Edm.String', true),
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
         * Static representation of the {@link line7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_7: fieldBuilder.buildEdmTypeField('Line7', 'Edm.String', true),
        /**
         * Static representation of the {@link line6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_6: fieldBuilder.buildEdmTypeField('Line6', 'Edm.String', true),
        /**
         * Static representation of the {@link line5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_5: fieldBuilder.buildEdmTypeField('Line5', 'Edm.String', true),
        /**
         * Static representation of the {@link line4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_4: fieldBuilder.buildEdmTypeField('Line4', 'Edm.String', true),
        /**
         * Static representation of the {@link line3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_3: fieldBuilder.buildEdmTypeField('Line3', 'Edm.String', true),
        /**
         * Static representation of the {@link line2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_2: fieldBuilder.buildEdmTypeField('Line2', 'Edm.String', true),
        /**
         * Static representation of the {@link line1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_1: fieldBuilder.buildEdmTypeField('Line1', 'Edm.String', true),
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
         * Static representation of the {@link line12} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_12: fieldBuilder.buildEdmTypeField('Line12', 'Edm.String', true),
        /**
         * Static representation of the {@link priceCustomerGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_CUSTOMER_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'PriceCustomerGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link line9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_9: fieldBuilder.buildEdmTypeField('Line9', 'Edm.String', true),
        /**
         * Static representation of the {@link line8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_8: fieldBuilder.buildEdmTypeField('Line8', 'Edm.String', true),
        /**
         * Static representation of the {@link salesLeadTimeDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_LEAD_TIME_DAYS: fieldBuilder.buildEdmTypeField(
          'SalesLeadTimeDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link unitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_ID: fieldBuilder.buildEdmTypeField('UnitId', 'Edm.String', true),
        /**
         * Static representation of the {@link priceFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'PriceFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link priceApplyAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_APPLY_ADJUSTMENT: fieldBuilder.buildEnumField(
          'PriceApplyAdjustment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link line15} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_15: fieldBuilder.buildEdmTypeField('Line15', 'Edm.String', true),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
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
         * Static representation of the {@link attributeBasedPricingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_BASED_PRICING_ID: fieldBuilder.buildEdmTypeField(
          'AttributeBasedPricingId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link line14} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_14: fieldBuilder.buildEdmTypeField('Line14', 'Edm.String', true),
        /**
         * Static representation of the {@link line11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_11: fieldBuilder.buildEdmTypeField('Line11', 'Edm.String', true),
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
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          true
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
         * Static representation of the {@link unitAppliesToAll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_APPLIES_TO_ALL: fieldBuilder.buildEnumField(
          'UnitAppliesToAll',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link combinationLineStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMBINATION_LINE_STRUCTURE: fieldBuilder.buildEdmTypeField(
          'CombinationLineStructure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link line10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_10: fieldBuilder.buildEdmTypeField('Line10', 'Edm.String', true),
        /**
         * Static representation of the {@link priceComponentCombination} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_COMPONENT_COMBINATION: fieldBuilder.buildEdmTypeField(
          'PriceComponentCombination',
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
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
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
         * Static representation of the {@link willSearchContinue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_SEARCH_CONTINUE: fieldBuilder.buildEnumField(
          'WillSearchContinue',
          NoYes,
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
         * Static representation of the {@link priceCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'PriceCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_TO_DATE: fieldBuilder.buildEdmTypeField(
          'PriceToDate',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TradeAgreementInquiryResults)
      };
    }

    return this._schema;
  }
}
