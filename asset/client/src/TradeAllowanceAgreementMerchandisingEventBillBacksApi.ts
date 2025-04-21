/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TradeAllowanceAgreementMerchandisingEventBillBacks } from './TradeAllowanceAgreementMerchandisingEventBillBacks';
import { TradeAllowanceAgreementMerchandisingEventBillBacksRequestBuilder } from './TradeAllowanceAgreementMerchandisingEventBillBacksRequestBuilder';
import { TradeAllowanceAgreementMerchandisingEventBillBackLinesApi } from './TradeAllowanceAgreementMerchandisingEventBillBackLinesApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { TradeAllowanceAgreementMerchandisingEventsApi } from './TradeAllowanceAgreementMerchandisingEventsApi';
import { TradeAllowanceAgreementHeadersApi } from './TradeAllowanceAgreementHeadersApi';
import { PdsUnitType } from './PdsUnitType';
import { PdsRebateCalcDateType } from './PdsRebateCalcDateType';
import { NoYes } from './NoYes';
import { PdsRebateUomOption } from './PdsRebateUomOption';
import { PdsCumulationPeriod } from './PdsCumulationPeriod';
import { PdsRebateLineBreakType } from './PdsRebateLineBreakType';
import { PdsRebateTakenFrom } from './PdsRebateTakenFrom';
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
export class TradeAllowanceAgreementMerchandisingEventBillBacksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializersT>,
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
  ): TradeAllowanceAgreementMerchandisingEventBillBacksApi<DeSerializersT> {
    return new TradeAllowanceAgreementMerchandisingEventBillBacksApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventBillBackLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_BILL_BACK_LINES: OneToManyLink<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventBillBackLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link expenseMainAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_MAIN_ACCOUNT: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link accrualMainAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCRUAL_MAIN_ACCOUNT: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tradeAllowanceAgreementMerchandisingEvent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tradeAllowanceAgreementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_HEADER: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TradeAllowanceAgreementMerchandisingEventBillBackLinesApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      TradeAllowanceAgreementMerchandisingEventsApi<DeSerializersT>,
      TradeAllowanceAgreementHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_BILL_BACK_LINES:
        new OneToManyLink(
          'TradeAllowanceAgreementMerchandisingEventBillBackLines',
          this,
          linkedApis[0]
        ),
      EXPENSE_MAIN_ACCOUNT: new OneToOneLink(
        'ExpenseMainAccount',
        this,
        linkedApis[1]
      ),
      ACCRUAL_MAIN_ACCOUNT: new OneToOneLink(
        'AccrualMainAccount',
        this,
        linkedApis[2]
      ),
      TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT: new OneToOneLink(
        'TradeAllowanceAgreementMerchandisingEvent',
        this,
        linkedApis[3]
      ),
      TRADE_ALLOWANCE_AGREEMENT_HEADER: new OneToOneLink(
        'TradeAllowanceAgreementHeader',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = TradeAllowanceAgreementMerchandisingEventBillBacks;

  requestBuilder(): TradeAllowanceAgreementMerchandisingEventBillBacksRequestBuilder<DeSerializersT> {
    return new TradeAllowanceAgreementMerchandisingEventBillBacksRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializersT>,
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
    typeof TradeAllowanceAgreementMerchandisingEventBillBacks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TradeAllowanceAgreementMerchandisingEventBillBacks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRADE_ALLOWANCE_AGREEMENT_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_BACK_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_BACK_QUANTITY_TYPE: EnumField<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializers>,
      DeSerializersT,
      PdsUnitType,
      true,
      true
    >;
    SALES_CUMULATION_METHOD_CUSTOMIZED_PERIOD_TYPE: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPENSE_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATION_SEARCH_DATE_TYPE: EnumField<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializers>,
      DeSerializersT,
      PdsRebateCalcDateType,
      true,
      true
    >;
    SALES_REBATE_PROGRAM_TYPE_ID: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_BILL_BACK_QUANTITY_QUALIFYING_REBATE: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_APPROVAL_REQUIRED: EnumField<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_TAXABLE: EnumField<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BILL_BACK_UNIT_SYMBOL: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_BACK_AMOUNT_CALCULATION_OPTION: EnumField<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializers>,
      DeSerializersT,
      PdsRebateUomOption,
      true,
      true
    >;
    ACCRUAL_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_BILL_BACK_AMOUNT_QUALIFYING_REBATE: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_CUMULATION_METHOD: EnumField<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializers>,
      DeSerializersT,
      PdsCumulationPeriod,
      true,
      true
    >;
    REBATE_BREAK_BASIS: EnumField<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializers>,
      DeSerializersT,
      PdsRebateLineBreakType,
      true,
      true
    >;
    LINE_AMOUNT_BASIS: EnumField<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializers>,
      DeSerializersT,
      PdsRebateTakenFrom,
      true,
      true
    >;
    BILL_BACK_CLAIM_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventBillBackLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_BILL_BACK_LINES: OneToManyLink<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventBillBackLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link expenseMainAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_MAIN_ACCOUNT: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link accrualMainAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCRUAL_MAIN_ACCOUNT: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tradeAllowanceAgreementMerchandisingEvent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tradeAllowanceAgreementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_HEADER: OneToOneLink<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      TradeAllowanceAgreementMerchandisingEventBillBacks<DeSerializers>
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
         * Static representation of the {@link billBackId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_BACK_ID: fieldBuilder.buildEdmTypeField(
          'BillBackId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link billBackQuantityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_BACK_QUANTITY_TYPE: fieldBuilder.buildEnumField(
          'BillBackQuantityType',
          PdsUnitType,
          true
        ),
        /**
         * Static representation of the {@link salesCumulationMethodCustomizedPeriodType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CUMULATION_METHOD_CUSTOMIZED_PERIOD_TYPE:
          fieldBuilder.buildEdmTypeField(
            'SalesCumulationMethodCustomizedPeriodType',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link expenseMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_MAIN_ACCOUNT_ID_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'ExpenseMainAccountIdDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calculationSearchDateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_SEARCH_DATE_TYPE: fieldBuilder.buildEnumField(
          'CalculationSearchDateType',
          PdsRebateCalcDateType,
          true
        ),
        /**
         * Static representation of the {@link salesRebateProgramTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_REBATE_PROGRAM_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'SalesRebateProgramTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minimumBillBackQuantityQualifyingRebate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_BILL_BACK_QUANTITY_QUALIFYING_REBATE:
          fieldBuilder.buildEdmTypeField(
            'MinimumBillBackQuantityQualifyingRebate',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link isApprovalRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_APPROVAL_REQUIRED: fieldBuilder.buildEnumField(
          'IsApprovalRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isTaxable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TAXABLE: fieldBuilder.buildEnumField('IsTaxable', NoYes, true),
        /**
         * Static representation of the {@link billBackUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_BACK_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'BillBackUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billBackAmountCalculationOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_BACK_AMOUNT_CALCULATION_OPTION: fieldBuilder.buildEnumField(
          'BillBackAmountCalculationOption',
          PdsRebateUomOption,
          true
        ),
        /**
         * Static representation of the {@link accrualMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_MAIN_ACCOUNT_ID_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'AccrualMainAccountIdDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minimumBillBackAmountQualifyingRebate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_BILL_BACK_AMOUNT_QUALIFYING_REBATE:
          fieldBuilder.buildEdmTypeField(
            'MinimumBillBackAmountQualifyingRebate',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link salesCumulationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CUMULATION_METHOD: fieldBuilder.buildEnumField(
          'SalesCumulationMethod',
          PdsCumulationPeriod,
          true
        ),
        /**
         * Static representation of the {@link rebateBreakBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_BREAK_BASIS: fieldBuilder.buildEnumField(
          'RebateBreakBasis',
          PdsRebateLineBreakType,
          true
        ),
        /**
         * Static representation of the {@link lineAmountBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT_BASIS: fieldBuilder.buildEnumField(
          'LineAmountBasis',
          PdsRebateTakenFrom,
          true
        ),
        /**
         * Static representation of the {@link billBackClaimVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_BACK_CLAIM_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'BillBackClaimVendorAccountNumber',
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
          TradeAllowanceAgreementMerchandisingEventBillBacks
        )
      };
    }

    return this._schema;
  }
}
