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
import type { GeneralLedgerCustInvoiceJournalLinesApi } from './GeneralLedgerCustInvoiceJournalLinesApi';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { Listcode } from './Listcode';
import { LedgerTransType } from './LedgerTransType';
import { NoYes } from './NoYes';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
import {
  GeneralLedgerCustInvoiceJournalHeaders,
  GeneralLedgerCustInvoiceJournalHeadersType
} from './GeneralLedgerCustInvoiceJournalHeaders';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { VoucherTypes, VoucherTypesType } from './VoucherTypes';
import {
  OfficeAddinLegalEntities,
  OfficeAddinLegalEntitiesType
} from './OfficeAddinLegalEntities';
import { Currencies, CurrenciesType } from './Currencies';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "GeneralLedgerCustInvoiceJournalLines" of service "d365_metadata".
 */
export class GeneralLedgerCustInvoiceJournalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements GeneralLedgerCustInvoiceJournalLinesType<T>
{
  /**
   * Technical entity name for GeneralLedgerCustInvoiceJournalLines.
   */
  static override _entityName = 'GeneralLedgerCustInvoiceJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GeneralLedgerCustInvoiceJournalLines entity.
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
   * Credit Amount.
   */
  declare creditAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cust Vend Bank Account Id.
   * @nullable
   */
  declare custVendBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Code.
   * @nullable
   */
  declare reasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount Date.
   */
  declare cashDiscountDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Offset Account Type.
   * @nullable
   */
  declare offsetAccountType?: LedgerJournalAcType | null;
  /**
   * Exch Rate.
   */
  declare exchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Sales Tax Group.
   * @nullable
   */
  declare itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Transaction Text.
   * @nullable
   */
  declare offsetTransactionText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Method Of Payment.
   * @nullable
   */
  declare methodOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Text.
   * @nullable
   */
  declare transactionText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Listcode.
   * @nullable
   */
  declare listcode?: Listcode | null;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: LedgerTransType | null;
  /**
   * Offset Account Display Value.
   * @nullable
   */
  declare offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Currency Exch Rate.
   */
  declare reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cash Discount Code.
   * @nullable
   */
  declare cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Withholding Calculation Enabled.
   * @nullable
   */
  declare isWithholdingCalculationEnabled?: NoYes | null;
  /**
   * Delivery Date.
   */
  declare deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Offset Company.
   * @nullable
   */
  declare offsetCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Chinese Voucher.
   * @nullable
   */
  declare chineseVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Chinese Voucher Type.
   * @nullable
   */
  declare chineseVoucherType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account Display Value.
   * @nullable
   */
  declare customerAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Document Number.
   * @nullable
   */
  declare documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exch Rate Secondary.
   */
  declare exchRateSecondary: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Debit Amount.
   */
  declare debitAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Transaction Type.
   * @nullable
   */
  declare bankTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Withholding Tax Group Code.
   * @nullable
   */
  declare itemWithholdingTaxGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cash Discount Amount.
   */
  declare cashDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Approved.
   * @nullable
   */
  declare approved?: NoYes | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcType | null;
  /**
   * Type Of Operation.
   * @nullable
   */
  declare typeOfOperation?: VendorOperationTypeMx | null;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Exempt Number.
   * @nullable
   */
  declare taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approved By.
   * @nullable
   */
  declare approvedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Comment.
   * @nullable
   */
  declare reasonComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Terms Of Payment.
   * @nullable
   */
  declare termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Specification.
   * @nullable
   */
  declare paymentSpecification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link GeneralLedgerCustInvoiceJournalHeaders} entity.
   */
  declare custInvoiceJournalLineComposite?: GeneralLedgerCustInvoiceJournalHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare custInvoiceJournalDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link VoucherTypes} entity.
   */
  declare voucherType?: VoucherTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link OfficeAddinLegalEntities} entity.
   */
  declare custInvoiceJournalLineEntityOffsetCompany?: OfficeAddinLegalEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare custAccountCombinationOffsetCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare custInvoiceJournalLineEntityCurrency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link OfficeAddinLegalEntities} entity.
   */
  declare custInvoiceJournalLineEntityCompany?: OfficeAddinLegalEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare custInvoiceJourLineEntityDefaultDim?: DimensionSets<T> | null;

  constructor(_entityApi: GeneralLedgerCustInvoiceJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface GeneralLedgerCustInvoiceJournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  creditAmount: DeserializedType<T, 'Edm.Decimal'>;
  custVendBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  reasonCode?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  offsetAccountType?: LedgerJournalAcType | null;
  exchRate: DeserializedType<T, 'Edm.Decimal'>;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  offsetTransactionText?: DeserializedType<T, 'Edm.String'> | null;
  methodOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  transactionText?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  listcode?: Listcode | null;
  transactionType?: LedgerTransType | null;
  offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  isWithholdingCalculationEnabled?: NoYes | null;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  offsetCompany?: DeserializedType<T, 'Edm.String'> | null;
  chineseVoucher?: DeserializedType<T, 'Edm.String'> | null;
  chineseVoucherType?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  exchRateSecondary: DeserializedType<T, 'Edm.Decimal'>;
  debitAmount: DeserializedType<T, 'Edm.Decimal'>;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  bankTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  itemWithholdingTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cashDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  approved?: NoYes | null;
  overrideSalesTax?: NoYes | null;
  accountType?: LedgerJournalAcType | null;
  typeOfOperation?: VendorOperationTypeMx | null;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  approvedBy?: DeserializedType<T, 'Edm.String'> | null;
  reasonComment?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  paymentSpecification?: DeserializedType<T, 'Edm.String'> | null;
  custInvoiceJournalLineComposite?: GeneralLedgerCustInvoiceJournalHeadersType<T> | null;
  custInvoiceJournalDimensionCombination?: DimensionCombinationsType<T> | null;
  voucherType?: VoucherTypesType<T> | null;
  custInvoiceJournalLineEntityOffsetCompany?: OfficeAddinLegalEntitiesType<T> | null;
  custAccountCombinationOffsetCombination?: DimensionCombinationsType<T> | null;
  custInvoiceJournalLineEntityCurrency?: CurrenciesType<T> | null;
  custInvoiceJournalLineEntityCompany?: OfficeAddinLegalEntitiesType<T> | null;
  custInvoiceJourLineEntityDefaultDim?: DimensionSetsType<T> | null;
}
