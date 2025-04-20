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
import type { CurrencyParametersApi } from './CurrencyParametersApi';
import { CustVendAmountDiffPostingModeRu } from './CustVendAmountDiffPostingModeRu';
import { NoYes } from './NoYes';
import { ExchAdjTaxableTypeW } from './ExchAdjTaxableTypeW';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "CurrencyParameters" of service "d365_metadata".
 */
export class CurrencyParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CurrencyParametersType<T>
{
  /**
   * Technical entity name for CurrencyParameters.
   */
  static override _entityName = 'CurrencyParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CurrencyParameters entity.
   */
  static _keys = ['dataAreaId', 'Ledger_Name', 'Currency'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ledger Name.
   */
  declare ledgerName: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency.
   */
  declare currency: DeserializedType<T, 'Edm.String'>;
  /**
   * Vend Relized Loss Tax Posting Account.
   * @nullable
   */
  declare vendRelizedLossTaxPostingAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cust Unrealized Gain Main Account.
   * @nullable
   */
  declare custUnrealizedGainMainAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vend Relized Gain Tax Posting Account.
   * @nullable
   */
  declare vendRelizedGainTaxPostingAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vend Tax Dimension Prepayments Expense Code.
   * @nullable
   */
  declare vendTaxDimensionPrepaymentsExpenseCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vend Tax Dimension Conversion Expense Code.
   * @nullable
   */
  declare vendTaxDimensionConversionExpenseCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cust Tax Dimension Expense Code.
   * @nullable
   */
  declare custTaxDimensionExpenseCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cust Tax Primary Posting Ledger.
   * @nullable
   */
  declare custTaxPrimaryPostingLedger?: CustVendAmountDiffPostingModeRu | null;
  /**
   * Empl Unrealized Gain Main Account.
   * @nullable
   */
  declare emplUnrealizedGainMainAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vend Tax Dimension Prepayments Revenue Code.
   * @nullable
   */
  declare vendTaxDimensionPrepaymentsRevenueCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vend Conversion Gain.
   * @nullable
   */
  declare vendConversionGain?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Realized Loss Tax Posting Account.
   * @nullable
   */
  declare custRealizedLossTaxPostingAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Amount Difference In Tax Accounting.
   * @nullable
   */
  declare amountDifferenceInTaxAccounting?: NoYes | null;
  /**
   * Take Vat Into Account For Expenses.
   * @nullable
   */
  declare takeVatIntoAccountForExpenses?: NoYes | null;
  /**
   * Cust Realized Loss Sales Taxes.
   * @nullable
   */
  declare custRealizedLossSalesTaxes?: ExchAdjTaxableTypeW | null;
  /**
   * Vend Unrealized Loss Main Account.
   * @nullable
   */
  declare vendUnrealizedLossMainAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cust Realized Gain Main Account.
   * @nullable
   */
  declare custRealizedGainMainAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * General Tax Dimension Revenue Code.
   * @nullable
   */
  declare generalTaxDimensionRevenueCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cust Realized Loss Main Account.
   * @nullable
   */
  declare custRealizedLossMainAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Empl Tax Dimension Revenue Code.
   * @nullable
   */
  declare emplTaxDimensionRevenueCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cust Realized Gain Tax Posting Account.
   * @nullable
   */
  declare custRealizedGainTaxPostingAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cust Tax Dimension Revenue Code.
   * @nullable
   */
  declare custTaxDimensionRevenueCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Empl Realized Gain.
   * @nullable
   */
  declare emplRealizedGain?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Tax Dimension Prepayments Revenue Code.
   * @nullable
   */
  declare custTaxDimensionPrepaymentsRevenueCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Empl Tax Dimension Expense Code.
   * @nullable
   */
  declare emplTaxDimensionExpenseCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vend Tax Dimension Revenue Code.
   * @nullable
   */
  declare vendTaxDimensionRevenueCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vend Primary Posting Ledger.
   * @nullable
   */
  declare vendPrimaryPostingLedger?: CustVendAmountDiffPostingModeRu | null;
  /**
   * Vend Unrealized Gain Main Account.
   * @nullable
   */
  declare vendUnrealizedGainMainAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vend Realized Gain Main Account.
   * @nullable
   */
  declare vendRealizedGainMainAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vend Tax D Imension Expense Code.
   * @nullable
   */
  declare vendTaxDImensionExpenseCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vend Tax Dimension Conversion Revenue Code.
   * @nullable
   */
  declare vendTaxDimensionConversionRevenueCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Empl Unrealized Loss Main Account.
   * @nullable
   */
  declare emplUnrealizedLossMainAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cust Unrealized Loss Main Account.
   * @nullable
   */
  declare custUnrealizedLossMainAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vend Realized Loss Main Account.
   * @nullable
   */
  declare vendRealizedLossMainAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cust Primary Posting Ledger.
   * @nullable
   */
  declare custPrimaryPostingLedger?: CustVendAmountDiffPostingModeRu | null;
  /**
   * General Tax Dimension Expense Code.
   * @nullable
   */
  declare generalTaxDimensionExpenseCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cust Tax Dimension Prepayments Expense Code.
   * @nullable
   */
  declare custTaxDimensionPrepaymentsExpenseCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cust Realized Gain Sales Taxes.
   * @nullable
   */
  declare custRealizedGainSalesTaxes?: ExchAdjTaxableTypeW | null;
  /**
   * Vend Tax Primary Posting Ledger.
   * @nullable
   */
  declare vendTaxPrimaryPostingLedger?: CustVendAmountDiffPostingModeRu | null;
  /**
   * Vend Conversion Loss.
   * @nullable
   */
  declare vendConversionLoss?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Realized Gain Sales Taxes.
   * @nullable
   */
  declare vendRealizedGainSalesTaxes?: ExchAdjTaxableTypeW | null;
  /**
   * Empl Realized Loss Main Account.
   * @nullable
   */
  declare emplRealizedLossMainAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vend Realized Loss Sales Taxes.
   * @nullable
   */
  declare vendRealizedLossSalesTaxes?: ExchAdjTaxableTypeW | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: CurrencyParametersApi<T>) {
    super(_entityApi);
  }
}

export interface CurrencyParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  ledgerName: DeserializedType<T, 'Edm.String'>;
  currency: DeserializedType<T, 'Edm.String'>;
  vendRelizedLossTaxPostingAccount?: DeserializedType<T, 'Edm.String'> | null;
  custUnrealizedGainMainAccount?: DeserializedType<T, 'Edm.String'> | null;
  vendRelizedGainTaxPostingAccount?: DeserializedType<T, 'Edm.String'> | null;
  vendTaxDimensionPrepaymentsExpenseCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  vendTaxDimensionConversionExpenseCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  custTaxDimensionExpenseCode?: DeserializedType<T, 'Edm.String'> | null;
  custTaxPrimaryPostingLedger?: CustVendAmountDiffPostingModeRu | null;
  emplUnrealizedGainMainAccount?: DeserializedType<T, 'Edm.String'> | null;
  vendTaxDimensionPrepaymentsRevenueCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  vendConversionGain?: DeserializedType<T, 'Edm.String'> | null;
  custRealizedLossTaxPostingAccount?: DeserializedType<T, 'Edm.String'> | null;
  amountDifferenceInTaxAccounting?: NoYes | null;
  takeVatIntoAccountForExpenses?: NoYes | null;
  custRealizedLossSalesTaxes?: ExchAdjTaxableTypeW | null;
  vendUnrealizedLossMainAccount?: DeserializedType<T, 'Edm.String'> | null;
  custRealizedGainMainAccount?: DeserializedType<T, 'Edm.String'> | null;
  generalTaxDimensionRevenueCode?: DeserializedType<T, 'Edm.String'> | null;
  custRealizedLossMainAccount?: DeserializedType<T, 'Edm.String'> | null;
  emplTaxDimensionRevenueCode?: DeserializedType<T, 'Edm.String'> | null;
  custRealizedGainTaxPostingAccount?: DeserializedType<T, 'Edm.String'> | null;
  custTaxDimensionRevenueCode?: DeserializedType<T, 'Edm.String'> | null;
  emplRealizedGain?: DeserializedType<T, 'Edm.String'> | null;
  custTaxDimensionPrepaymentsRevenueCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  emplTaxDimensionExpenseCode?: DeserializedType<T, 'Edm.String'> | null;
  vendTaxDimensionRevenueCode?: DeserializedType<T, 'Edm.String'> | null;
  vendPrimaryPostingLedger?: CustVendAmountDiffPostingModeRu | null;
  vendUnrealizedGainMainAccount?: DeserializedType<T, 'Edm.String'> | null;
  vendRealizedGainMainAccount?: DeserializedType<T, 'Edm.String'> | null;
  vendTaxDImensionExpenseCode?: DeserializedType<T, 'Edm.String'> | null;
  vendTaxDimensionConversionRevenueCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  emplUnrealizedLossMainAccount?: DeserializedType<T, 'Edm.String'> | null;
  custUnrealizedLossMainAccount?: DeserializedType<T, 'Edm.String'> | null;
  vendRealizedLossMainAccount?: DeserializedType<T, 'Edm.String'> | null;
  custPrimaryPostingLedger?: CustVendAmountDiffPostingModeRu | null;
  generalTaxDimensionExpenseCode?: DeserializedType<T, 'Edm.String'> | null;
  custTaxDimensionPrepaymentsExpenseCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  custRealizedGainSalesTaxes?: ExchAdjTaxableTypeW | null;
  vendTaxPrimaryPostingLedger?: CustVendAmountDiffPostingModeRu | null;
  vendConversionLoss?: DeserializedType<T, 'Edm.String'> | null;
  vendRealizedGainSalesTaxes?: ExchAdjTaxableTypeW | null;
  emplRealizedLossMainAccount?: DeserializedType<T, 'Edm.String'> | null;
  vendRealizedLossSalesTaxes?: ExchAdjTaxableTypeW | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
