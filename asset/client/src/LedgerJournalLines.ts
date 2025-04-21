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
import type { LedgerJournalLinesApi } from './LedgerJournalLinesApi';
import { NoYes } from './NoYes';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { Currencies, CurrenciesType } from './Currencies';
import { LegalEntities, LegalEntitiesType } from './LegalEntities';
import { TaxGroups, TaxGroupsType } from './TaxGroups';
import {
  TaxItemGroupHeadings,
  TaxItemGroupHeadingsType
} from './TaxItemGroupHeadings';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  LedgerJournalHeaders,
  LedgerJournalHeadersType
} from './LedgerJournalHeaders';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { VoucherTypes, VoucherTypesType } from './VoucherTypes';

/**
 * This class represents the entity "LedgerJournalLines" of service "d365_metadata".
 */
export class LedgerJournalLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LedgerJournalLinesType<T>
{
  /**
   * Technical entity name for LedgerJournalLines.
   */
  static override _entityName = 'LedgerJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerJournalLines entity.
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
   * Reverse Entry.
   * @nullable
   */
  declare reverseEntry?: NoYes | null;
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
   * Text.
   * @nullable
   */
  declare text?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Account Type.
   * @nullable
   */
  declare offsetAccountType?: LedgerJournalAcType | null;
  /**
   * Is Withholding Calculation Enabled.
   * @nullable
   */
  declare isWithholdingCalculationEnabled?: NoYes | null;
  /**
   * Reverse Date.
   */
  declare reverseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Payment Reference.
   * @nullable
   */
  declare paymentReference?: DeserializedType<T, 'Edm.String'> | null;
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
   * Exch Rate.
   */
  declare exchRate: DeserializedType<T, 'Edm.Decimal'>;
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
   * Offset Default Dimension Display Value.
   * @nullable
   */
  declare offsetDefaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Offset Fin Tag Display Value.
   * @nullable
   */
  declare offsetFinTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
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
   * Reporting Currency Exch Rate.
   */
  declare reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fin Tag Display Value.
   * @nullable
   */
  declare finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
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
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exch Rate Second.
   */
  declare exchRateSecond: DeserializedType<T, 'Edm.Decimal'>;
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
   * Item Withholding Tax Group Code.
   * @nullable
   */
  declare itemWithholdingTaxGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Exempt Number.
   * @nullable
   */
  declare taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Currency Exch Rate Secondary.
   */
  declare reportingCurrencyExchRateSecondary: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Chinese Voucher.
   * @nullable
   */
  declare chineseVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Percentage.
   */
  declare discountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Offset Text.
   * @nullable
   */
  declare offsetText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare ledgerJournalLineCurrency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link LegalEntities} entity.
   */
  declare ledgerJournalLineCompany?: LegalEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxGroups} entity.
   */
  declare ledgerJournalLineSalesTaxGroup?: TaxGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link LegalEntities} entity.
   */
  declare ledgerJournalLineOffsetCompany?: LegalEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxItemGroupHeadings} entity.
   */
  declare ledgerJournalLineItemSalesTaxGroup?: TaxItemGroupHeadings<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare ledgerJournalLineDefaultDimension?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link LegalEntities} entity.
   */
  declare legalEntity?: LegalEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare ledgerJournalLineOffsetDefaultDimension?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link LedgerJournalHeaders} entity.
   */
  declare ledgerJournalHeader?: LedgerJournalHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare ledgerJournalLineOffsetLedgerDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare ledgerJournalLineLedgerDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link VoucherTypes} entity.
   */
  declare voucherType?: VoucherTypes<T> | null;

  constructor(_entityApi: LedgerJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerJournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  reverseEntry?: NoYes | null;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  text?: DeserializedType<T, 'Edm.String'> | null;
  offsetAccountType?: LedgerJournalAcType | null;
  isWithholdingCalculationEnabled?: NoYes | null;
  reverseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  paymentReference?: DeserializedType<T, 'Edm.String'> | null;
  document?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  exchRate: DeserializedType<T, 'Edm.Decimal'>;
  chineseVoucherType?: DeserializedType<T, 'Edm.String'> | null;
  debitAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscount?: DeserializedType<T, 'Edm.String'> | null;
  offsetDefaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  offsetFinTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  accountType?: LedgerJournalAcType | null;
  invoice?: DeserializedType<T, 'Edm.String'> | null;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  paymentId?: DeserializedType<T, 'Edm.String'> | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  exchRateSecond: DeserializedType<T, 'Edm.Decimal'>;
  creditAmount: DeserializedType<T, 'Edm.Decimal'>;
  overrideSalesTax?: NoYes | null;
  offsetCompany?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  itemWithholdingTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrencyExchRateSecondary: DeserializedType<T, 'Edm.Decimal'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  chineseVoucher?: DeserializedType<T, 'Edm.String'> | null;
  discountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  offsetText?: DeserializedType<T, 'Edm.String'> | null;
  ledgerJournalLineCurrency?: CurrenciesType<T> | null;
  ledgerJournalLineCompany?: LegalEntitiesType<T> | null;
  ledgerJournalLineSalesTaxGroup?: TaxGroupsType<T> | null;
  ledgerJournalLineOffsetCompany?: LegalEntitiesType<T> | null;
  ledgerJournalLineItemSalesTaxGroup?: TaxItemGroupHeadingsType<T> | null;
  ledgerJournalLineDefaultDimension?: DimensionSetsType<T> | null;
  legalEntity?: LegalEntitiesType<T> | null;
  ledgerJournalLineOffsetDefaultDimension?: DimensionSetsType<T> | null;
  ledgerJournalHeader?: LedgerJournalHeadersType<T> | null;
  ledgerJournalLineOffsetLedgerDimensionCombination?: DimensionCombinationsType<T> | null;
  ledgerJournalLineLedgerDimensionCombination?: DimensionCombinationsType<T> | null;
  voucherType?: VoucherTypesType<T> | null;
}
