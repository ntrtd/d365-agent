/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { LedgerCurrencyParametersApi } from './LedgerCurrencyParametersApi';
import { CustVendAmountDiffPostingModeRu } from './CustVendAmountDiffPostingModeRu';
import { ExchAdjTaxableTypeW } from './ExchAdjTaxableTypeW';
import { NoYes } from './NoYes';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "LedgerCurrencyParameters" of service "d365_metadata".
 */
export class LedgerCurrencyParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerCurrencyParametersType<T>
{
  /**
   * Technical entity name for LedgerCurrencyParameters.
   */
  static override _entityName = 'LedgerCurrencyParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerCurrencyParameters entity.
   */
  static _keys = ['dataAreaId', 'Ledger_Name', 'CurrencyCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ledger Name.
   */
  declare ledgerName: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency Code.
   */
  declare currencyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Loss Vend Expense Code.
   * @nullable
   */
  declare lossVendExpenseCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Convert Profit Income Code.
   * @nullable
   */
  declare convertProfitIncomeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profit Cust Income Code.
   * @nullable
   */
  declare profitCustIncomeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Realized Profit Empl Ledger Dimension Display Value.
   * @nullable
   */
  declare realizedProfitEmplLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Realized Loss Empl Ledger Dimension Display Value.
   * @nullable
   */
  declare realizedLossEmplLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cust Posting Mode.
   * @nullable
   */
  declare custPostingMode?: CustVendAmountDiffPostingModeRu | null;
  /**
   * Exch Rate Nonreal Loss Tax Cust.
   * @nullable
   */
  declare exchRateNonrealLossTaxCust?: ExchAdjTaxableTypeW | null;
  /**
   * Vend Posting Mode Tax.
   * @nullable
   */
  declare vendPostingModeTax?: CustVendAmountDiffPostingModeRu | null;
  /**
   * Cust Posting Mode Tax.
   * @nullable
   */
  declare custPostingModeTax?: CustVendAmountDiffPostingModeRu | null;
  /**
   * Exch Rate Profit Tax Vend.
   * @nullable
   */
  declare exchRateProfitTaxVend?: ExchAdjTaxableTypeW | null;
  /**
   * Exch Rate Pos.
   * @nullable
   */
  declare exchRatePos?: ExchAdjTaxableTypeW | null;
  /**
   * Exch Rate Loss Tax Vend.
   * @nullable
   */
  declare exchRateLossTaxVend?: ExchAdjTaxableTypeW | null;
  /**
   * Loss Cust Expense Code.
   * @nullable
   */
  declare lossCustExpenseCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profit Vend Prepayment Income Code.
   * @nullable
   */
  declare profitVendPrepaymentIncomeCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Amount Difference Loss.
   * @nullable
   */
  declare taxAmountDifferenceLoss?: NoYes | null;
  /**
   * Exch Rate Nonreal Profit Tax Cust.
   * @nullable
   */
  declare exchRateNonrealProfitTaxCust?: ExchAdjTaxableTypeW | null;
  /**
   * Unrealized Profit Empl Ledger Dimension Display Value.
   * @nullable
   */
  declare unrealizedProfitEmplLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Amount Diff Ledger Dimension Display Value.
   * @nullable
   */
  declare taxAmountDiffLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Profit Cust Prepayment Income Code.
   * @nullable
   */
  declare profitCustPrepaymentIncomeCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Unrealized Profit Cust Ledger Dimension Display Value.
   * @nullable
   */
  declare unrealizedProfitCustLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Realized Profit Vend Ledger Dimension Display Value.
   * @nullable
   */
  declare realizedProfitVendLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Amount Difference.
   * @nullable
   */
  declare taxAmountDifference?: NoYes | null;
  /**
   * Unrealized Loss Empl Ledger Dimension Display Value.
   * @nullable
   */
  declare unrealizedLossEmplLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Realized Loss Vend Ledger Dimension Display Value.
   * @nullable
   */
  declare realizedLossVendLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Loss General Expense Code.
   * @nullable
   */
  declare lossGeneralExpenseCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unrealized Loss Vend Ledger Dimension Display Value.
   * @nullable
   */
  declare unrealizedLossVendLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Loss Vend Prepayment Expense Code.
   * @nullable
   */
  declare lossVendPrepaymentExpenseCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Exch Rate Neg.
   * @nullable
   */
  declare exchRateNeg?: ExchAdjTaxableTypeW | null;
  /**
   * Vend Posting Mode.
   * @nullable
   */
  declare vendPostingMode?: CustVendAmountDiffPostingModeRu | null;
  /**
   * Profit Empl Income Code.
   * @nullable
   */
  declare profitEmplIncomeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cur Convert Loss Ledger Dimension Display Value.
   * @nullable
   */
  declare curConvertLossLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Loss Empl Expense Code.
   * @nullable
   */
  declare lossEmplExpenseCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cur Convert Profit Ledger Dimension Display Value.
   * @nullable
   */
  declare curConvertProfitLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Realized Profit Cust Ledger Dimension Display Value.
   * @nullable
   */
  declare realizedProfitCustLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Loss Cust Prepayment Expense Code.
   * @nullable
   */
  declare lossCustPrepaymentExpenseCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Realized Loss Cust Ledger Dimension Display Value.
   * @nullable
   */
  declare realizedLossCustLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Amount Diff Loss Ledger Dimension Display Value.
   * @nullable
   */
  declare taxAmountDiffLossLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Profit Vend Income Code.
   * @nullable
   */
  declare profitVendIncomeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Amount Diff Profit Ledger Dimension Display Value.
   * @nullable
   */
  declare taxAmountDiffProfitLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Unrealized Loss Cust Ledger Dimension Display Value.
   * @nullable
   */
  declare unrealizedLossCustLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Unrealized Profit Vend Ledger Dimension Display Value.
   * @nullable
   */
  declare unrealizedProfitVendLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Convert Loss Expense Code.
   * @nullable
   */
  declare convertLossExpenseCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profit General Income Code.
   * @nullable
   */
  declare profitGeneralIncomeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: LedgerCurrencyParametersApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerCurrencyParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  ledgerName: DeserializedType<T, 'Edm.String'>;
  currencyCode: DeserializedType<T, 'Edm.String'>;
  lossVendExpenseCode?: DeserializedType<T, 'Edm.String'> | null;
  convertProfitIncomeCode?: DeserializedType<T, 'Edm.String'> | null;
  profitCustIncomeCode?: DeserializedType<T, 'Edm.String'> | null;
  realizedProfitEmplLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  realizedLossEmplLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  custPostingMode?: CustVendAmountDiffPostingModeRu | null;
  exchRateNonrealLossTaxCust?: ExchAdjTaxableTypeW | null;
  vendPostingModeTax?: CustVendAmountDiffPostingModeRu | null;
  custPostingModeTax?: CustVendAmountDiffPostingModeRu | null;
  exchRateProfitTaxVend?: ExchAdjTaxableTypeW | null;
  exchRatePos?: ExchAdjTaxableTypeW | null;
  exchRateLossTaxVend?: ExchAdjTaxableTypeW | null;
  lossCustExpenseCode?: DeserializedType<T, 'Edm.String'> | null;
  profitVendPrepaymentIncomeCode?: DeserializedType<T, 'Edm.String'> | null;
  taxAmountDifferenceLoss?: NoYes | null;
  exchRateNonrealProfitTaxCust?: ExchAdjTaxableTypeW | null;
  unrealizedProfitEmplLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  taxAmountDiffLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  profitCustPrepaymentIncomeCode?: DeserializedType<T, 'Edm.String'> | null;
  unrealizedProfitCustLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  realizedProfitVendLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  taxAmountDifference?: NoYes | null;
  unrealizedLossEmplLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  realizedLossVendLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  lossGeneralExpenseCode?: DeserializedType<T, 'Edm.String'> | null;
  unrealizedLossVendLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  lossVendPrepaymentExpenseCode?: DeserializedType<T, 'Edm.String'> | null;
  exchRateNeg?: ExchAdjTaxableTypeW | null;
  vendPostingMode?: CustVendAmountDiffPostingModeRu | null;
  profitEmplIncomeCode?: DeserializedType<T, 'Edm.String'> | null;
  curConvertLossLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  lossEmplExpenseCode?: DeserializedType<T, 'Edm.String'> | null;
  curConvertProfitLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  realizedProfitCustLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  lossCustPrepaymentExpenseCode?: DeserializedType<T, 'Edm.String'> | null;
  realizedLossCustLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  taxAmountDiffLossLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  profitVendIncomeCode?: DeserializedType<T, 'Edm.String'> | null;
  taxAmountDiffProfitLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  unrealizedLossCustLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  unrealizedProfitVendLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  convertLossExpenseCode?: DeserializedType<T, 'Edm.String'> | null;
  profitGeneralIncomeCode?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
