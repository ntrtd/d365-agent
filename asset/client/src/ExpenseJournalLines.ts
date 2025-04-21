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
import type { ExpenseJournalLinesApi } from './ExpenseJournalLinesApi';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { LedgerTransType } from './LedgerTransType';
import { NoYes } from './NoYes';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { Currencies, CurrenciesType } from './Currencies';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { LegalEntities, LegalEntitiesType } from './LegalEntities';
import {
  ExpenseJournalHeaders,
  ExpenseJournalHeadersType
} from './ExpenseJournalHeaders';
import {
  ProjectLineProperties,
  ProjectLinePropertiesType
} from './ProjectLineProperties';
import { VoucherTypes, VoucherTypesType } from './VoucherTypes';

/**
 * This class represents the entity "ExpenseJournalLines" of service "d365_metadata".
 */
export class ExpenseJournalLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExpenseJournalLinesType<T>
{
  /**
   * Technical entity name for ExpenseJournalLines.
   */
  static override _entityName = 'ExpenseJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpenseJournalLines entity.
   */
  static _keys = ['dataAreaId', 'JournalBatchNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Batch Number.
   */
  declare journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Sales Tax Group.
   * @nullable
   */
  declare itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount Date.
   */
  declare cashDiscountDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Cost Quantity.
   */
  declare projectCostQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Text.
   * @nullable
   */
  declare text?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Account Type.
   * @nullable
   */
  declare offsetAccountType?: LedgerJournalAcType | null;
  /**
   * Resource Company Id.
   * @nullable
   */
  declare resourceCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Tax Item Group Sales.
   * @nullable
   */
  declare projectTaxItemGroupSales?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher Date.
   */
  declare voucherDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Tax Group Sales.
   * @nullable
   */
  declare projectTaxGroupSales?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approved By.
   * @nullable
   */
  declare approvedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Line Property.
   * @nullable
   */
  declare projectLineProperty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document.
   * @nullable
   */
  declare document?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount Amount.
   */
  declare cashDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: LedgerTransType | null;
  /**
   * Chinese Voucher Type.
   * @nullable
   */
  declare chineseVoucherType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Debit Amount.
   */
  declare debitAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Tax Code.
   * @nullable
   */
  declare salesTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Project Sales Price.
   */
  declare projectSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Category.
   * @nullable
   */
  declare projectCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Account Display Value.
   * @nullable
   */
  declare offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Display Value.
   * @nullable
   */
  declare accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount.
   * @nullable
   */
  declare cashDiscount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource Id.
   * @nullable
   */
  declare resourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order.
   * @nullable
   */
  declare purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Default Dimension Display Value.
   * @nullable
   */
  declare offsetDefaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Offset Transaction Text.
   * @nullable
   */
  declare offsetTransactionText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Specification.
   * @nullable
   */
  declare paymentSpecification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Sales Currency Code.
   * @nullable
   */
  declare projectSalesCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Actual Sales Tax Amount.
   */
  declare actualSalesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcType | null;
  /**
   * Invoice.
   * @nullable
   */
  declare invoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Project Date.
   */
  declare projectDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Reversing Entry.
   * @nullable
   */
  declare isReversingEntry?: NoYes | null;
  /**
   * Payment Method.
   * @nullable
   */
  declare paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Id.
   * @nullable
   */
  declare paymentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment.
   * @nullable
   */
  declare payment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Cost Price.
   */
  declare projectCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Excempt Number.
   * @nullable
   */
  declare taxExcemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Amount.
   */
  declare creditAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Offset Company.
   * @nullable
   */
  declare offsetCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delay Tax Calculation.
   * @nullable
   */
  declare delayTaxCalculation?: NoYes | null;
  /**
   * Secondary Exchange Rate.
   */
  declare secondaryExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Approved.
   * @nullable
   */
  declare approved?: NoYes | null;
  /**
   * Chinese Voucher.
   * @nullable
   */
  declare chineseVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reversing Date.
   */
  declare reversingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Account Company.
   * @nullable
   */
  declare accountCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare projExpenseJournalLineOffsetLedgerDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare projExpenseJournalLineLedgerDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare projectExpenseJournalLineCurrencies?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare expenseJournalLineDefaultDimension?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link LegalEntities} entity.
   */
  declare legalEntity?: LegalEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare expenseJournalLineOffsetDefaultDimension?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link ExpenseJournalHeaders} entity.
   */
  declare expenseJournalHeader?: ExpenseJournalHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link ProjectLineProperties} entity.
   */
  declare projExpenseJournalLineProperties?: ProjectLineProperties<T> | null;
  /**
   * One-to-one navigation property to the {@link VoucherTypes} entity.
   */
  declare voucherType?: VoucherTypes<T> | null;

  constructor(_entityApi: ExpenseJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface ExpenseJournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  projectCostQuantity: DeserializedType<T, 'Edm.Decimal'>;
  text?: DeserializedType<T, 'Edm.String'> | null;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  offsetAccountType?: LedgerJournalAcType | null;
  resourceCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  projectTaxItemGroupSales?: DeserializedType<T, 'Edm.String'> | null;
  voucherDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  projectTaxGroupSales?: DeserializedType<T, 'Edm.String'> | null;
  approvedBy?: DeserializedType<T, 'Edm.String'> | null;
  projectLineProperty?: DeserializedType<T, 'Edm.String'> | null;
  document?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  transactionType?: LedgerTransType | null;
  chineseVoucherType?: DeserializedType<T, 'Edm.String'> | null;
  debitAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projectSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  projectCategory?: DeserializedType<T, 'Edm.String'> | null;
  offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscount?: DeserializedType<T, 'Edm.String'> | null;
  resourceId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  offsetDefaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  offsetTransactionText?: DeserializedType<T, 'Edm.String'> | null;
  paymentSpecification?: DeserializedType<T, 'Edm.String'> | null;
  projectSalesCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  actualSalesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  accountType?: LedgerJournalAcType | null;
  invoice?: DeserializedType<T, 'Edm.String'> | null;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projectDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  isReversingEntry?: NoYes | null;
  paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  paymentId?: DeserializedType<T, 'Edm.String'> | null;
  payment?: DeserializedType<T, 'Edm.String'> | null;
  projectCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  taxExcemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  creditAmount: DeserializedType<T, 'Edm.Decimal'>;
  overrideSalesTax?: NoYes | null;
  offsetCompany?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  delayTaxCalculation?: NoYes | null;
  secondaryExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  approved?: NoYes | null;
  chineseVoucher?: DeserializedType<T, 'Edm.String'> | null;
  reversingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  accountCompany?: DeserializedType<T, 'Edm.String'> | null;
  projExpenseJournalLineOffsetLedgerDimensionCombination?: DimensionCombinationsType<T> | null;
  projExpenseJournalLineLedgerDimensionCombination?: DimensionCombinationsType<T> | null;
  projectExpenseJournalLineCurrencies?: CurrenciesType<T> | null;
  expenseJournalLineDefaultDimension?: DimensionSetsType<T> | null;
  legalEntity?: LegalEntitiesType<T> | null;
  expenseJournalLineOffsetDefaultDimension?: DimensionSetsType<T> | null;
  expenseJournalHeader?: ExpenseJournalHeadersType<T> | null;
  projExpenseJournalLineProperties?: ProjectLinePropertiesType<T> | null;
  voucherType?: VoucherTypesType<T> | null;
}
