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
import type { AdjustmentParametersApi } from './AdjustmentParametersApi';
import { CustVendAmountDiffPostingModeRu } from './CustVendAmountDiffPostingModeRu';
import { NoYes } from './NoYes';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "AdjustmentParameters" of service "d365_metadata".
 */
export class AdjustmentParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AdjustmentParametersType<T>
{
  /**
   * Technical entity name for AdjustmentParameters.
   */
  static override _entityName = 'AdjustmentParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AdjustmentParameters entity.
   */
  static _keys = ['LedgerName'];
  /**
   * Ledger Name.
   */
  declare ledgerName: DeserializedType<T, 'Edm.String'>;
  /**
   * Advance Holder Tax Dimension Expense Code.
   * @nullable
   */
  declare advanceHolderTaxDimensionExpenseCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Tax Dimension Expense Code.
   * @nullable
   */
  declare customerTaxDimensionExpenseCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Advance Holder Advance Adjustment Offset Account.
   * @nullable
   */
  declare advanceHolderAdvanceAdjustmentOffsetAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vendor Tax Dimension Revenue Code.
   * @nullable
   */
  declare vendorTaxDimensionRevenueCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Tax Dimension Revenue Code.
   * @nullable
   */
  declare customerTaxDimensionRevenueCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Realized Loss.
   * @nullable
   */
  declare customerRealizedLoss?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Vat Adjustment Realized Loss.
   * @nullable
   */
  declare customerVatAdjustmentRealizedLoss?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Advance Holder Tax Accounting Advance Adjustment Loss.
   * @nullable
   */
  declare advanceHolderTaxAccountingAdvanceAdjustmentLoss?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Advance Adjustment Offset Account.
   * @nullable
   */
  declare customerAdvanceAdjustmentOffsetAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vendor Realized Gain.
   * @nullable
   */
  declare vendorRealizedGain?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Advance Holder Tax Dimension Revenue Code.
   * @nullable
   */
  declare advanceHolderTaxDimensionRevenueCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vendor Advance Adjustment Offset Account.
   * @nullable
   */
  declare vendorAdvanceAdjustmentOffsetAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Advance Holder Realized Gain.
   * @nullable
   */
  declare advanceHolderRealizedGain?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Advance Holder Tax Accounting Advance Adjustment Profit.
   * @nullable
   */
  declare advanceHolderTaxAccountingAdvanceAdjustmentProfit?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ledger Posting Mode.
   * @nullable
   */
  declare ledgerPostingMode?: CustVendAmountDiffPostingModeRu | null;
  /**
   * Vendor Tax Dimension Expense Code.
   * @nullable
   */
  declare vendorTaxDimensionExpenseCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ledger Posting Cust.
   * @nullable
   */
  declare ledgerPostingCust?: CustVendAmountDiffPostingModeRu | null;
  /**
   * Vat Adjustment Cust.
   * @nullable
   */
  declare vatAdjustmentCust?: NoYes | null;
  /**
   * Customer Advance Adjustment Profit.
   * @nullable
   */
  declare customerAdvanceAdjustmentProfit?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vendor Tax Accounting Advance Adjustment Profit.
   * @nullable
   */
  declare vendorTaxAccountingAdvanceAdjustmentProfit?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vend Posting Mode.
   * @nullable
   */
  declare vendPostingMode?: CustVendAmountDiffPostingModeRu | null;
  /**
   * Customer Vat Adjustment Realized Gain.
   * @nullable
   */
  declare customerVatAdjustmentRealizedGain?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Realized Gain.
   * @nullable
   */
  declare customerRealizedGain?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Tax Accounting Advance Adjustment Loss.
   * @nullable
   */
  declare vendorTaxAccountingAdvanceAdjustmentLoss?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Advance Holder Realized Loss.
   * @nullable
   */
  declare advanceHolderRealizedLoss?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Realized Loss.
   * @nullable
   */
  declare vendorRealizedLoss?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Advance Adjustment Loss.
   * @nullable
   */
  declare customerAdvanceAdjustmentLoss?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: AdjustmentParametersApi<T>) {
    super(_entityApi);
  }
}

export interface AdjustmentParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  ledgerName: DeserializedType<T, 'Edm.String'>;
  advanceHolderTaxDimensionExpenseCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  customerTaxDimensionExpenseCode?: DeserializedType<T, 'Edm.String'> | null;
  advanceHolderAdvanceAdjustmentOffsetAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  vendorTaxDimensionRevenueCode?: DeserializedType<T, 'Edm.String'> | null;
  customerTaxDimensionRevenueCode?: DeserializedType<T, 'Edm.String'> | null;
  customerRealizedLoss?: DeserializedType<T, 'Edm.String'> | null;
  customerVatAdjustmentRealizedLoss?: DeserializedType<T, 'Edm.String'> | null;
  advanceHolderTaxAccountingAdvanceAdjustmentLoss?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  customerAdvanceAdjustmentOffsetAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  vendorRealizedGain?: DeserializedType<T, 'Edm.String'> | null;
  advanceHolderTaxDimensionRevenueCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  vendorAdvanceAdjustmentOffsetAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  advanceHolderRealizedGain?: DeserializedType<T, 'Edm.String'> | null;
  advanceHolderTaxAccountingAdvanceAdjustmentProfit?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  ledgerPostingMode?: CustVendAmountDiffPostingModeRu | null;
  vendorTaxDimensionExpenseCode?: DeserializedType<T, 'Edm.String'> | null;
  ledgerPostingCust?: CustVendAmountDiffPostingModeRu | null;
  vatAdjustmentCust?: NoYes | null;
  customerAdvanceAdjustmentProfit?: DeserializedType<T, 'Edm.String'> | null;
  vendorTaxAccountingAdvanceAdjustmentProfit?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  vendPostingMode?: CustVendAmountDiffPostingModeRu | null;
  customerVatAdjustmentRealizedGain?: DeserializedType<T, 'Edm.String'> | null;
  customerRealizedGain?: DeserializedType<T, 'Edm.String'> | null;
  vendorTaxAccountingAdvanceAdjustmentLoss?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  advanceHolderRealizedLoss?: DeserializedType<T, 'Edm.String'> | null;
  vendorRealizedLoss?: DeserializedType<T, 'Edm.String'> | null;
  customerAdvanceAdjustmentLoss?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
