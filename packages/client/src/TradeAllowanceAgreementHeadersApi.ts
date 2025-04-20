/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TradeAllowanceAgreementHeaders } from './TradeAllowanceAgreementHeaders';
import { TradeAllowanceAgreementHeadersRequestBuilder } from './TradeAllowanceAgreementHeadersRequestBuilder';
import { TradeAllowanceAgreementMerchandisingEventFundsApi } from './TradeAllowanceAgreementMerchandisingEventFundsApi';
import { TradeAllowanceAgreementMerchandisingEventLumpSumsApi } from './TradeAllowanceAgreementMerchandisingEventLumpSumsApi';
import { TradeAllowanceAgreementMerchandisingEventBillBacksApi } from './TradeAllowanceAgreementMerchandisingEventBillBacksApi';
import { UnitsOfMeasureApi } from './UnitsOfMeasureApi';
import { CurrenciesApi } from './CurrenciesApi';
import { WorkersApi } from './WorkersApi';
import { CustomersV3Api } from './CustomersV3Api';
import { TradeAllowanceAgreementFundsApi } from './TradeAllowanceAgreementFundsApi';
import { TradeAllowanceAgreementMerchandisingEventProductsV2Api } from './TradeAllowanceAgreementMerchandisingEventProductsV2Api';
import { TradeAllowanceAgreementProductsV2Api } from './TradeAllowanceAgreementProductsV2Api';
import { TradeAllowanceAgreementMerchandisingEventsApi } from './TradeAllowanceAgreementMerchandisingEventsApi';
import { TradeAllowanceAgreementProductsApi } from './TradeAllowanceAgreementProductsApi';
import { NoYes } from './NoYes';
import { TamStatus } from './TamStatus';
import { TamPromoMgmtApprovalStatus } from './TamPromoMgmtApprovalStatus';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class TradeAllowanceAgreementHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TradeAllowanceAgreementHeaders<DeSerializersT>, DeSerializersT>
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
  ): TradeAllowanceAgreementHeadersApi<DeSerializersT> {
    return new TradeAllowanceAgreementHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventFunds} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_FUNDS: OneToManyLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventFundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventLumpSums} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_LUMP_SUMS: OneToManyLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventLumpSumsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventBillBacks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_BILL_BACKS: OneToManyLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventBillBacksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASURE: OneToOneLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER: OneToOneLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementFunds} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_FUNDS: OneToManyLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementFundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_PRODUCTS_V_2: OneToManyLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_PRODUCTS_V_2: OneToManyLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEvents} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENTS: OneToManyLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_PRODUCTS: OneToManyLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementProductsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TradeAllowanceAgreementMerchandisingEventFundsApi<DeSerializersT>,
      TradeAllowanceAgreementMerchandisingEventLumpSumsApi<DeSerializersT>,
      TradeAllowanceAgreementMerchandisingEventBillBacksApi<DeSerializersT>,
      UnitsOfMeasureApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      CustomersV3Api<DeSerializersT>,
      TradeAllowanceAgreementFundsApi<DeSerializersT>,
      TradeAllowanceAgreementMerchandisingEventProductsV2Api<DeSerializersT>,
      TradeAllowanceAgreementProductsV2Api<DeSerializersT>,
      TradeAllowanceAgreementMerchandisingEventsApi<DeSerializersT>,
      TradeAllowanceAgreementProductsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_FUNDS: new OneToManyLink(
        'TradeAllowanceAgreementMerchandisingEventFunds',
        this,
        linkedApis[0]
      ),
      TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_LUMP_SUMS:
        new OneToManyLink(
          'TradeAllowanceAgreementMerchandisingEventLumpSums',
          this,
          linkedApis[1]
        ),
      TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_BILL_BACKS:
        new OneToManyLink(
          'TradeAllowanceAgreementMerchandisingEventBillBacks',
          this,
          linkedApis[2]
        ),
      UNIT_OF_MEASURE: new OneToOneLink('UnitOfMeasure', this, linkedApis[3]),
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[4]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[5]),
      CUSTOMER: new OneToOneLink('Customer', this, linkedApis[6]),
      TRADE_ALLOWANCE_AGREEMENT_FUNDS: new OneToManyLink(
        'TradeAllowanceAgreementFunds',
        this,
        linkedApis[7]
      ),
      TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_PRODUCTS_V_2:
        new OneToManyLink(
          'TradeAllowanceAgreementMerchandisingEventProductsV2',
          this,
          linkedApis[8]
        ),
      TRADE_ALLOWANCE_AGREEMENT_PRODUCTS_V_2: new OneToManyLink(
        'TradeAllowanceAgreementProductsV2',
        this,
        linkedApis[9]
      ),
      TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENTS: new OneToManyLink(
        'TradeAllowanceAgreementMerchandisingEvents',
        this,
        linkedApis[10]
      ),
      TRADE_ALLOWANCE_AGREEMENT_PRODUCTS: new OneToManyLink(
        'TradeAllowanceAgreementProducts',
        this,
        linkedApis[11]
      )
    };
    return this;
  }

  entityConstructor = TradeAllowanceAgreementHeaders;

  requestBuilder(): TradeAllowanceAgreementHeadersRequestBuilder<DeSerializersT> {
    return new TradeAllowanceAgreementHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TradeAllowanceAgreementHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TradeAllowanceAgreementHeaders<DeSerializersT>,
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
    typeof TradeAllowanceAgreementHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TradeAllowanceAgreementHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AGREEMENT_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_REQUESTED_SHIP_DATE: OrderableEdmTypeField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OWNING_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROMOTION_LIFT_PERCENTAGE: OrderableEdmTypeField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROMOTION_COST_AMOUNT: OrderableEdmTypeField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRADE_ALLOWANCE_AGREEMENT_PERIOD_NAME: OrderableEdmTypeField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_LUMP_SUM_PAYOUT_DATE: OrderableEdmTypeField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BASE_QUANTITY_UNIT_SYMBOL: OrderableEdmTypeField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_CURRENCY_CODE: OrderableEdmTypeField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASE_QUANTITY: OrderableEdmTypeField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGREEMENT_DETAILS: OrderableEdmTypeField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_BASE_QUANTITY_OVERRIDDEN: EnumField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AGREEMENT_STATUS: EnumField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      TamStatus,
      true,
      true
    >;
    TO_REQUESTED_RECEIPT_DATE: OrderableEdmTypeField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TO_REQUESTED_SHIP_DATE: OrderableEdmTypeField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AGREEMENT_DESCRIPTION: OrderableEdmTypeField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW_APPROVAL_STATUS: EnumField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      TamPromoMgmtApprovalStatus,
      true,
      true
    >;
    FROM_REQUESTED_RECEIPT_DATE: OrderableEdmTypeField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FROM_ORDER_DATE: OrderableEdmTypeField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FROM_LUMP_SUM_PAYOUT_DATE: OrderableEdmTypeField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TO_ORDER_DATE: OrderableEdmTypeField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MARKETING_OBJECTIVE_CODE: OrderableEdmTypeField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPECTED_PROMOTIONAL_QUANTITY: OrderableEdmTypeField<
      TradeAllowanceAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventFunds} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_FUNDS: OneToManyLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventFundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventLumpSums} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_LUMP_SUMS: OneToManyLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventLumpSumsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventBillBacks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_BILL_BACKS: OneToManyLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventBillBacksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASURE: OneToOneLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER: OneToOneLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementFunds} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_FUNDS: OneToManyLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementFundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_PRODUCTS_V_2: OneToManyLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_PRODUCTS_V_2: OneToManyLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEvents} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENTS: OneToManyLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_PRODUCTS: OneToManyLink<
      TradeAllowanceAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementProductsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TradeAllowanceAgreementHeaders<DeSerializers>>;
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
         * Static representation of the {@link agreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'AgreementId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link customerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerAccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fromRequestedShipDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_REQUESTED_SHIP_DATE: fieldBuilder.buildEdmTypeField(
          'FromRequestedShipDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link owningWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNING_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'OwningWorkerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link promotionLiftPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMOTION_LIFT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'PromotionLiftPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link promotionCostAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMOTION_COST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PromotionCostAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tradeAllowanceAgreementPeriodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRADE_ALLOWANCE_AGREEMENT_PERIOD_NAME: fieldBuilder.buildEdmTypeField(
          'TradeAllowanceAgreementPeriodName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toLumpSumPayoutDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_LUMP_SUM_PAYOUT_DATE: fieldBuilder.buildEdmTypeField(
          'ToLumpSumPayoutDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link baseQuantityUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_QUANTITY_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'BaseQuantityUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agreementCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'AgreementCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link baseQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'BaseQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link agreementDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_DETAILS: fieldBuilder.buildEdmTypeField(
          'AgreementDetails',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isBaseQuantityOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BASE_QUANTITY_OVERRIDDEN: fieldBuilder.buildEnumField(
          'IsBaseQuantityOverridden',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link agreementStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_STATUS: fieldBuilder.buildEnumField(
          'AgreementStatus',
          TamStatus,
          true
        ),
        /**
         * Static representation of the {@link toRequestedReceiptDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_REQUESTED_RECEIPT_DATE: fieldBuilder.buildEdmTypeField(
          'ToRequestedReceiptDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link toRequestedShipDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_REQUESTED_SHIP_DATE: fieldBuilder.buildEdmTypeField(
          'ToRequestedShipDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link agreementDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AgreementDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workflowApprovalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_APPROVAL_STATUS: fieldBuilder.buildEnumField(
          'WorkflowApprovalStatus',
          TamPromoMgmtApprovalStatus,
          true
        ),
        /**
         * Static representation of the {@link fromRequestedReceiptDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_REQUESTED_RECEIPT_DATE: fieldBuilder.buildEdmTypeField(
          'FromRequestedReceiptDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link fromOrderDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_ORDER_DATE: fieldBuilder.buildEdmTypeField(
          'FromOrderDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link fromLumpSumPayoutDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_LUMP_SUM_PAYOUT_DATE: fieldBuilder.buildEdmTypeField(
          'FromLumpSumPayoutDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link toOrderDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_ORDER_DATE: fieldBuilder.buildEdmTypeField(
          'ToOrderDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link marketingObjectiveCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKETING_OBJECTIVE_CODE: fieldBuilder.buildEdmTypeField(
          'MarketingObjectiveCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expectedPromotionalQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_PROMOTIONAL_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ExpectedPromotionalQuantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TradeAllowanceAgreementHeaders)
      };
    }

    return this._schema;
  }
}
