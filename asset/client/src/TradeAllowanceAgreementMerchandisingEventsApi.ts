/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TradeAllowanceAgreementMerchandisingEvents } from './TradeAllowanceAgreementMerchandisingEvents';
import { TradeAllowanceAgreementMerchandisingEventsRequestBuilder } from './TradeAllowanceAgreementMerchandisingEventsRequestBuilder';
import { TradeAllowanceAgreementMerchandisingEventFundsApi } from './TradeAllowanceAgreementMerchandisingEventFundsApi';
import { TradeAllowanceAgreementMerchandisingEventLumpSumsApi } from './TradeAllowanceAgreementMerchandisingEventLumpSumsApi';
import { TradeAllowanceAgreementMerchandisingEventBillBacksApi } from './TradeAllowanceAgreementMerchandisingEventBillBacksApi';
import { TradeAllowanceAgreementMerchandisingEventProductsApi } from './TradeAllowanceAgreementMerchandisingEventProductsApi';
import { TradeAllowanceAgreementMerchandisingEventDiscountsApi } from './TradeAllowanceAgreementMerchandisingEventDiscountsApi';
import { TradeAllowanceAgreementMerchandisingEventProductsV2Api } from './TradeAllowanceAgreementMerchandisingEventProductsV2Api';
import { TradeAllowanceAgreementHeadersApi } from './TradeAllowanceAgreementHeadersApi';
import { McrMerchandisingEventCategory } from './McrMerchandisingEventCategory';
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
export class TradeAllowanceAgreementMerchandisingEventsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializersT>,
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
  ): TradeAllowanceAgreementMerchandisingEventsApi<DeSerializersT> {
    return new TradeAllowanceAgreementMerchandisingEventsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventFunds} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_FUNDS: OneToManyLink<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventFundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventLumpSums} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_LUMP_SUMS: OneToManyLink<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventLumpSumsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tradeAllowanceAgreementMerchandisingEventBillBack} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_BILL_BACK: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventBillBacksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_PRODUCTS: OneToManyLink<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventDiscounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_DISCOUNTS: OneToManyLink<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventDiscountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_PRODUCTS_V_2: OneToManyLink<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tradeAllowanceAgreementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_HEADER: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TradeAllowanceAgreementMerchandisingEventFundsApi<DeSerializersT>,
      TradeAllowanceAgreementMerchandisingEventLumpSumsApi<DeSerializersT>,
      TradeAllowanceAgreementMerchandisingEventBillBacksApi<DeSerializersT>,
      TradeAllowanceAgreementMerchandisingEventProductsApi<DeSerializersT>,
      TradeAllowanceAgreementMerchandisingEventDiscountsApi<DeSerializersT>,
      TradeAllowanceAgreementMerchandisingEventProductsV2Api<DeSerializersT>,
      TradeAllowanceAgreementHeadersApi<DeSerializersT>
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
      TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_BILL_BACK: new OneToOneLink(
        'TradeAllowanceAgreementMerchandisingEventBillBack',
        this,
        linkedApis[2]
      ),
      TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_PRODUCTS: new OneToManyLink(
        'TradeAllowanceAgreementMerchandisingEventProducts',
        this,
        linkedApis[3]
      ),
      TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_DISCOUNTS:
        new OneToManyLink(
          'TradeAllowanceAgreementMerchandisingEventDiscounts',
          this,
          linkedApis[4]
        ),
      TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_PRODUCTS_V_2:
        new OneToManyLink(
          'TradeAllowanceAgreementMerchandisingEventProductsV2',
          this,
          linkedApis[5]
        ),
      TRADE_ALLOWANCE_AGREEMENT_HEADER: new OneToOneLink(
        'TradeAllowanceAgreementHeader',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = TradeAllowanceAgreementMerchandisingEvents;

  requestBuilder(): TradeAllowanceAgreementMerchandisingEventsRequestBuilder<DeSerializersT> {
    return new TradeAllowanceAgreementMerchandisingEventsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TradeAllowanceAgreementMerchandisingEvents<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TradeAllowanceAgreementMerchandisingEvents<DeSerializersT>,
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
    typeof TradeAllowanceAgreementMerchandisingEvents,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TradeAllowanceAgreementMerchandisingEvents,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRADE_ALLOWANCE_AGREEMENT_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EVENT_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STANDARD_MERCHANDISING_EVENT_CATEGORY_TYPE: EnumField<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializers>,
      DeSerializersT,
      McrMerchandisingEventCategory,
      true,
      true
    >;
    MERCHANDISING_EVENT_CATEGORY_NAME: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EVENT_DESCRIPTION: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EVENT_COST_AMOUNT: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializers>,
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
      TradeAllowanceAgreementMerchandisingEvents<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventFundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventLumpSums} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_LUMP_SUMS: OneToManyLink<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventLumpSumsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tradeAllowanceAgreementMerchandisingEventBillBack} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_BILL_BACK: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventBillBacksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_PRODUCTS: OneToManyLink<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventDiscounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_DISCOUNTS: OneToManyLink<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventDiscountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_PRODUCTS_V_2: OneToManyLink<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tradeAllowanceAgreementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_HEADER: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      TradeAllowanceAgreementMerchandisingEvents<DeSerializers>
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
         * Static representation of the {@link tradeAllowanceAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRADE_ALLOWANCE_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'TradeAllowanceAgreementId',
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
         * Static representation of the {@link eventId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_ID: fieldBuilder.buildEdmTypeField(
          'EventId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link standardMerchandisingEventCategoryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_MERCHANDISING_EVENT_CATEGORY_TYPE: fieldBuilder.buildEnumField(
          'StandardMerchandisingEventCategoryType',
          McrMerchandisingEventCategory,
          true
        ),
        /**
         * Static representation of the {@link merchandisingEventCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERCHANDISING_EVENT_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'MerchandisingEventCategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eventDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'EventDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eventCostAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_COST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'EventCostAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          TradeAllowanceAgreementMerchandisingEvents
        )
      };
    }

    return this._schema;
  }
}
