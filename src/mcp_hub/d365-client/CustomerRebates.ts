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
import type { CustomerRebatesApi } from './CustomerRebatesApi';
import { PdsPaymtType } from './PdsPaymtType';
import { PdsRebateStatus } from './PdsRebateStatus';
import { NoYes } from './NoYes';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "CustomerRebates" of service "d365_metadata".
 */
export class CustomerRebates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomerRebatesType<T>
{
  /**
   * Technical entity name for CustomerRebates.
   */
  static override _entityName = 'CustomerRebates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerRebates entity.
   */
  static _keys = ['dataAreaId', 'RebateId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rebate Id.
   */
  declare rebateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Line Amount.
   */
  declare salesLineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Rebate Agreement Id.
   * @nullable
   */
  declare salesRebateAgreementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Rebate Product Group Id.
   * @nullable
   */
  declare salesRebateProductGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rebate Amount Per Product Unit Sold.
   */
  declare rebateAmountPerProductUnitSold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Starting Rebate Amount.
   */
  declare startingRebateAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Invoice Number.
   * @nullable
   */
  declare salesInvoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customers Order Reference.
   * @nullable
   */
  declare customersOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Invoice Date.
   */
  declare salesInvoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Accrual Main Account Id Display Value.
   * @nullable
   */
  declare defaultAccrualMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Price Quantity.
   */
  declare salesPriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Rebate Amount.
   */
  declare fixedRebateAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Invoice Line Creation Sequence Number.
   */
  declare salesInvoiceLineCreationSequenceNumber: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Corrected Rebate Amount.
   */
  declare correctedRebateAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Voucher Number.
   * @nullable
   */
  declare voucherNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group Code.
   * @nullable
   */
  declare salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoiced Catch Weight Quantity.
   */
  declare invoicedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rebate Balance Amount.
   */
  declare rebateBalanceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Order Number.
   * @nullable
   */
  declare salesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trade Allowance Agreement Merchandising Event Id.
   * @nullable
   */
  declare tradeAllowanceAgreementMerchandisingEventId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Accrual Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultAccrualLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoiced Sales Quantity.
   */
  declare invoicedSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Rebate Percentage.
   */
  declare rebatePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payment Type.
   * @nullable
   */
  declare paymentType?: PdsPaymtType | null;
  /**
   * Rebate Sales Amount.
   */
  declare rebateSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rebate Calculation Date.
   */
  declare rebateCalculationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Default Expense Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultExpenseLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Tax Item Group Code.
   * @nullable
   */
  declare salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Expense Main Account Id Display Value.
   * @nullable
   */
  declare defaultExpenseMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Rebate Status.
   * @nullable
   */
  declare rebateStatus?: PdsRebateStatus | null;
  /**
   * Sales Order Line Inventory Lot Id.
   * @nullable
   */
  declare salesOrderLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Rebate Customer Group Id.
   * @nullable
   */
  declare salesRebateCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Credit Rebate.
   * @nullable
   */
  declare isCreditRebate?: NoYes | null;
  /**
   * Sales Rebate Program Type Id.
   * @nullable
   */
  declare salesRebateProgramTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rebate Adjustment Date.
   */
  declare rebateAdjustmentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare defaultExpenseLedgerDimension?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare defaultExpenseMainAccountId?: DimensionCombinations<T> | null;

  constructor(_entityApi: CustomerRebatesApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerRebatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rebateId: DeserializedType<T, 'Edm.String'>;
  salesLineAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesRebateAgreementId?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesRebateProductGroupId?: DeserializedType<T, 'Edm.String'> | null;
  rebateAmountPerProductUnitSold: DeserializedType<T, 'Edm.Decimal'>;
  startingRebateAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesInvoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  customersOrderReference?: DeserializedType<T, 'Edm.String'> | null;
  salesInvoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultAccrualMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  salesPriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  fixedRebateAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesInvoiceLineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  correctedRebateAmount: DeserializedType<T, 'Edm.Decimal'>;
  voucherNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  invoicedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  rebateBalanceAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  tradeAllowanceAgreementMerchandisingEventId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  defaultAccrualLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  invoicedSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  rebatePercentage: DeserializedType<T, 'Edm.Decimal'>;
  paymentType?: PdsPaymtType | null;
  rebateSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  rebateCalculationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultExpenseLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  defaultExpenseMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  rebateStatus?: PdsRebateStatus | null;
  salesOrderLineInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  salesRebateCustomerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isCreditRebate?: NoYes | null;
  salesRebateProgramTypeId?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  rebateAdjustmentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultExpenseLedgerDimension?: DimensionSetsType<T> | null;
  defaultExpenseMainAccountId?: DimensionCombinationsType<T> | null;
}
