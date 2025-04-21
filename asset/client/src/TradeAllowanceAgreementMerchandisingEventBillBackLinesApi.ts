/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TradeAllowanceAgreementMerchandisingEventBillBackLines } from './TradeAllowanceAgreementMerchandisingEventBillBackLines';
import { TradeAllowanceAgreementMerchandisingEventBillBackLinesRequestBuilder } from './TradeAllowanceAgreementMerchandisingEventBillBackLinesRequestBuilder';
import { TradeAllowanceAgreementMerchandisingEventBillBacksApi } from './TradeAllowanceAgreementMerchandisingEventBillBacksApi';
import { UnitsOfMeasureApi } from './UnitsOfMeasureApi';
import { CurrenciesApi } from './CurrenciesApi';
import { PdsRebateAmtType } from './PdsRebateAmtType';
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
export class TradeAllowanceAgreementMerchandisingEventBillBackLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<DeSerializersT>,
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
  ): TradeAllowanceAgreementMerchandisingEventBillBackLinesApi<DeSerializersT> {
    return new TradeAllowanceAgreementMerchandisingEventBillBackLinesApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link tradeAllowanceAgreementMerchandisingEventBillBack} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_BILL_BACK: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventBillBacksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link billBackQuantityUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_BACK_QUANTITY_UNIT_OF_MEASURE: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link billBackAmountCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_BACK_AMOUNT_CURRENCY: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TradeAllowanceAgreementMerchandisingEventBillBacksApi<DeSerializersT>,
      UnitsOfMeasureApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_BILL_BACK: new OneToOneLink(
        'TradeAllowanceAgreementMerchandisingEventBillBack',
        this,
        linkedApis[0]
      ),
      BILL_BACK_QUANTITY_UNIT_OF_MEASURE: new OneToOneLink(
        'BillBackQuantityUnitOfMeasure',
        this,
        linkedApis[1]
      ),
      BILL_BACK_AMOUNT_CURRENCY: new OneToOneLink(
        'BillBackAmountCurrency',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = TradeAllowanceAgreementMerchandisingEventBillBackLines;

  requestBuilder(): TradeAllowanceAgreementMerchandisingEventBillBackLinesRequestBuilder<DeSerializersT> {
    return new TradeAllowanceAgreementMerchandisingEventBillBackLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TradeAllowanceAgreementMerchandisingEventBillBackLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TradeAllowanceAgreementMerchandisingEventBillBackLines<DeSerializersT>,
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
    typeof TradeAllowanceAgreementMerchandisingEventBillBackLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TradeAllowanceAgreementMerchandisingEventBillBackLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRADE_ALLOWANCE_AGREEMENT_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_BILL_BACK_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FROM_BILL_BACK_QUANTITY: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BILL_BACK_AMOUNT_CURRENCY_CODE: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_BACK_QUANTITY_UNIT_SYMBOL: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_BACK_AMOUNT_TYPE: EnumField<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<DeSerializers>,
      DeSerializersT,
      PdsRebateAmtType,
      true,
      true
    >;
    TO_BILL_BACK_QUANTITY: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BILL_BACK_AMOUNT: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tradeAllowanceAgreementMerchandisingEventBillBack} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_BILL_BACK: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventBillBacksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link billBackQuantityUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_BACK_QUANTITY_UNIT_OF_MEASURE: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link billBackAmountCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_BACK_AMOUNT_CURRENCY: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      TradeAllowanceAgreementMerchandisingEventBillBackLines<DeSerializers>
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
         * Static representation of the {@link tradeAllowanceAgreementMerchandisingEventId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_ID:
          fieldBuilder.buildEdmTypeField(
            'TradeAllowanceAgreementMerchandisingEventId',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link tradeAllowanceAgreementMerchandisingEventBillBackId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_BILL_BACK_ID:
          fieldBuilder.buildEdmTypeField(
            'TradeAllowanceAgreementMerchandisingEventBillBackId',
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
         * Static representation of the {@link fromBillBackQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_BILL_BACK_QUANTITY: fieldBuilder.buildEdmTypeField(
          'FromBillBackQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link billBackAmountCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_BACK_AMOUNT_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'BillBackAmountCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billBackQuantityUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_BACK_QUANTITY_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'BillBackQuantityUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billBackAmountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_BACK_AMOUNT_TYPE: fieldBuilder.buildEnumField(
          'BillBackAmountType',
          PdsRebateAmtType,
          true
        ),
        /**
         * Static representation of the {@link toBillBackQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_BILL_BACK_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ToBillBackQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link billBackAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_BACK_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BillBackAmount',
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
          TradeAllowanceAgreementMerchandisingEventBillBackLines
        )
      };
    }

    return this._schema;
  }
}
