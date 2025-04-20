/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerCurrencyParameters } from './LedgerCurrencyParameters';
import { LedgerCurrencyParametersRequestBuilder } from './LedgerCurrencyParametersRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { CustVendAmountDiffPostingModeRu } from './CustVendAmountDiffPostingModeRu';
import { ExchAdjTaxableTypeW } from './ExchAdjTaxableTypeW';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class LedgerCurrencyParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LedgerCurrencyParameters<DeSerializersT>, DeSerializersT>
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
  ): LedgerCurrencyParametersApi<DeSerializersT> {
    return new LedgerCurrencyParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      LedgerCurrencyParameters<DeSerializersT>,
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

  entityConstructor = LedgerCurrencyParameters;

  requestBuilder(): LedgerCurrencyParametersRequestBuilder<DeSerializersT> {
    return new LedgerCurrencyParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LedgerCurrencyParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LedgerCurrencyParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerCurrencyParameters<DeSerializersT>,
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
    typeof LedgerCurrencyParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerCurrencyParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEDGER_NAME: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOSS_VEND_EXPENSE_CODE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONVERT_PROFIT_INCOME_CODE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFIT_CUST_INCOME_CODE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REALIZED_PROFIT_EMPL_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REALIZED_LOSS_EMPL_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_POSTING_MODE: EnumField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      CustVendAmountDiffPostingModeRu,
      true,
      true
    >;
    EXCH_RATE_NONREAL_LOSS_TAX_CUST: EnumField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      ExchAdjTaxableTypeW,
      true,
      true
    >;
    VEND_POSTING_MODE_TAX: EnumField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      CustVendAmountDiffPostingModeRu,
      true,
      true
    >;
    CUST_POSTING_MODE_TAX: EnumField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      CustVendAmountDiffPostingModeRu,
      true,
      true
    >;
    EXCH_RATE_PROFIT_TAX_VEND: EnumField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      ExchAdjTaxableTypeW,
      true,
      true
    >;
    EXCH_RATE_POS: EnumField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      ExchAdjTaxableTypeW,
      true,
      true
    >;
    EXCH_RATE_LOSS_TAX_VEND: EnumField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      ExchAdjTaxableTypeW,
      true,
      true
    >;
    LOSS_CUST_EXPENSE_CODE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFIT_VEND_PREPAYMENT_INCOME_CODE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AMOUNT_DIFFERENCE_LOSS: EnumField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCH_RATE_NONREAL_PROFIT_TAX_CUST: EnumField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      ExchAdjTaxableTypeW,
      true,
      true
    >;
    UNREALIZED_PROFIT_EMPL_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AMOUNT_DIFF_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFIT_CUST_PREPAYMENT_INCOME_CODE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNREALIZED_PROFIT_CUST_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REALIZED_PROFIT_VEND_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AMOUNT_DIFFERENCE: EnumField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    UNREALIZED_LOSS_EMPL_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REALIZED_LOSS_VEND_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOSS_GENERAL_EXPENSE_CODE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNREALIZED_LOSS_VEND_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOSS_VEND_PREPAYMENT_EXPENSE_CODE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCH_RATE_NEG: EnumField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      ExchAdjTaxableTypeW,
      true,
      true
    >;
    VEND_POSTING_MODE: EnumField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      CustVendAmountDiffPostingModeRu,
      true,
      true
    >;
    PROFIT_EMPL_INCOME_CODE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUR_CONVERT_LOSS_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOSS_EMPL_EXPENSE_CODE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUR_CONVERT_PROFIT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REALIZED_PROFIT_CUST_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOSS_CUST_PREPAYMENT_EXPENSE_CODE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REALIZED_LOSS_CUST_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AMOUNT_DIFF_LOSS_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFIT_VEND_INCOME_CODE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AMOUNT_DIFF_PROFIT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNREALIZED_LOSS_CUST_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNREALIZED_PROFIT_VEND_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONVERT_LOSS_EXPENSE_CODE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFIT_GENERAL_INCOME_CODE: OrderableEdmTypeField<
      LedgerCurrencyParameters<DeSerializers>,
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
      LedgerCurrencyParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LedgerCurrencyParameters<DeSerializers>>;
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
         * Static representation of the {@link ledgerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_NAME: fieldBuilder.buildEdmTypeField(
          'Ledger_Name',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lossVendExpenseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOSS_VEND_EXPENSE_CODE: fieldBuilder.buildEdmTypeField(
          'LossVendExpenseCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link convertProfitIncomeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONVERT_PROFIT_INCOME_CODE: fieldBuilder.buildEdmTypeField(
          'ConvertProfitIncomeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link profitCustIncomeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_CUST_INCOME_CODE: fieldBuilder.buildEdmTypeField(
          'ProfitCustIncomeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link realizedProfitEmplLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REALIZED_PROFIT_EMPL_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'RealizedProfitEmplLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link realizedLossEmplLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REALIZED_LOSS_EMPL_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'RealizedLossEmplLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link custPostingMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_POSTING_MODE: fieldBuilder.buildEnumField(
          'CustPostingMode',
          CustVendAmountDiffPostingModeRu,
          true
        ),
        /**
         * Static representation of the {@link exchRateNonrealLossTaxCust} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE_NONREAL_LOSS_TAX_CUST: fieldBuilder.buildEnumField(
          'ExchRateNonrealLossTaxCust',
          ExchAdjTaxableTypeW,
          true
        ),
        /**
         * Static representation of the {@link vendPostingModeTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_POSTING_MODE_TAX: fieldBuilder.buildEnumField(
          'VendPostingModeTax',
          CustVendAmountDiffPostingModeRu,
          true
        ),
        /**
         * Static representation of the {@link custPostingModeTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_POSTING_MODE_TAX: fieldBuilder.buildEnumField(
          'CustPostingModeTax',
          CustVendAmountDiffPostingModeRu,
          true
        ),
        /**
         * Static representation of the {@link exchRateProfitTaxVend} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE_PROFIT_TAX_VEND: fieldBuilder.buildEnumField(
          'ExchRateProfitTaxVend',
          ExchAdjTaxableTypeW,
          true
        ),
        /**
         * Static representation of the {@link exchRatePos} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE_POS: fieldBuilder.buildEnumField(
          'ExchRatePos',
          ExchAdjTaxableTypeW,
          true
        ),
        /**
         * Static representation of the {@link exchRateLossTaxVend} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE_LOSS_TAX_VEND: fieldBuilder.buildEnumField(
          'ExchRateLossTaxVend',
          ExchAdjTaxableTypeW,
          true
        ),
        /**
         * Static representation of the {@link lossCustExpenseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOSS_CUST_EXPENSE_CODE: fieldBuilder.buildEdmTypeField(
          'LossCustExpenseCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link profitVendPrepaymentIncomeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_VEND_PREPAYMENT_INCOME_CODE: fieldBuilder.buildEdmTypeField(
          'ProfitVendPrepaymentIncomeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxAmountDifferenceLoss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_DIFFERENCE_LOSS: fieldBuilder.buildEnumField(
          'TaxAmountDifferenceLoss',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link exchRateNonrealProfitTaxCust} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE_NONREAL_PROFIT_TAX_CUST: fieldBuilder.buildEnumField(
          'ExchRateNonrealProfitTaxCust',
          ExchAdjTaxableTypeW,
          true
        ),
        /**
         * Static representation of the {@link unrealizedProfitEmplLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNREALIZED_PROFIT_EMPL_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'UnrealizedProfitEmplLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link taxAmountDiffLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_DIFF_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'TaxAmountDiffLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link profitCustPrepaymentIncomeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_CUST_PREPAYMENT_INCOME_CODE: fieldBuilder.buildEdmTypeField(
          'ProfitCustPrepaymentIncomeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unrealizedProfitCustLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNREALIZED_PROFIT_CUST_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'UnrealizedProfitCustLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link realizedProfitVendLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REALIZED_PROFIT_VEND_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'RealizedProfitVendLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link taxAmountDifference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_DIFFERENCE: fieldBuilder.buildEnumField(
          'TaxAmountDifference',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link unrealizedLossEmplLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNREALIZED_LOSS_EMPL_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'UnrealizedLossEmplLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link realizedLossVendLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REALIZED_LOSS_VEND_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'RealizedLossVendLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link lossGeneralExpenseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOSS_GENERAL_EXPENSE_CODE: fieldBuilder.buildEdmTypeField(
          'LossGeneralExpenseCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unrealizedLossVendLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNREALIZED_LOSS_VEND_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'UnrealizedLossVendLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link lossVendPrepaymentExpenseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOSS_VEND_PREPAYMENT_EXPENSE_CODE: fieldBuilder.buildEdmTypeField(
          'LossVendPrepaymentExpenseCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchRateNeg} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE_NEG: fieldBuilder.buildEnumField(
          'ExchRateNeg',
          ExchAdjTaxableTypeW,
          true
        ),
        /**
         * Static representation of the {@link vendPostingMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_POSTING_MODE: fieldBuilder.buildEnumField(
          'VendPostingMode',
          CustVendAmountDiffPostingModeRu,
          true
        ),
        /**
         * Static representation of the {@link profitEmplIncomeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_EMPL_INCOME_CODE: fieldBuilder.buildEdmTypeField(
          'ProfitEmplIncomeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link curConvertLossLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUR_CONVERT_LOSS_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'CurConvertLossLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link lossEmplExpenseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOSS_EMPL_EXPENSE_CODE: fieldBuilder.buildEdmTypeField(
          'LossEmplExpenseCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link curConvertProfitLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUR_CONVERT_PROFIT_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'CurConvertProfitLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link realizedProfitCustLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REALIZED_PROFIT_CUST_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'RealizedProfitCustLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link lossCustPrepaymentExpenseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOSS_CUST_PREPAYMENT_EXPENSE_CODE: fieldBuilder.buildEdmTypeField(
          'LossCustPrepaymentExpenseCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link realizedLossCustLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REALIZED_LOSS_CUST_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'RealizedLossCustLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link taxAmountDiffLossLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_DIFF_LOSS_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'TaxAmountDiffLossLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link profitVendIncomeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_VEND_INCOME_CODE: fieldBuilder.buildEdmTypeField(
          'ProfitVendIncomeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxAmountDiffProfitLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_DIFF_PROFIT_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'TaxAmountDiffProfitLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link unrealizedLossCustLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNREALIZED_LOSS_CUST_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'UnrealizedLossCustLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link unrealizedProfitVendLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNREALIZED_PROFIT_VEND_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'UnrealizedProfitVendLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link convertLossExpenseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONVERT_LOSS_EXPENSE_CODE: fieldBuilder.buildEdmTypeField(
          'ConvertLossExpenseCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link profitGeneralIncomeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_GENERAL_INCOME_CODE: fieldBuilder.buildEdmTypeField(
          'ProfitGeneralIncomeCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LedgerCurrencyParameters)
      };
    }

    return this._schema;
  }
}
