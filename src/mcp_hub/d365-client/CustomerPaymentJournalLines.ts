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
import type { CustomerPaymentJournalLinesApi } from './CustomerPaymentJournalLinesApi';
import { NoYes } from './NoYes';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { SettlementType } from './SettlementType';
import { CustVendGatewayOperatorOfacIndicatorUs } from './CustVendGatewayOperatorOfacIndicatorUs';
import { CustVendForeignExchIndicatorUs } from './CustVendForeignExchIndicatorUs';
import { CustVendForeignExchRefIndicatorUs } from './CustVendForeignExchRefIndicatorUs';
import { CustVendSecondaryOfacIndicatorUs } from './CustVendSecondaryOfacIndicatorUs';
import { CustVendOriginatingDfiQualifierUs } from './CustVendOriginatingDfiQualifierUs';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  CustomerPaymentMethods,
  CustomerPaymentMethodsType
} from './CustomerPaymentMethods';
import { VoucherTypes, VoucherTypesType } from './VoucherTypes';
import {
  CustomerPaymentJournalHeaders,
  CustomerPaymentJournalHeadersType
} from './CustomerPaymentJournalHeaders';
import { Currencies, CurrenciesType } from './Currencies';
import {
  OfficeAddinLegalEntities,
  OfficeAddinLegalEntitiesType
} from './OfficeAddinLegalEntities';
import { TaxGroups, TaxGroupsType } from './TaxGroups';
import {
  TaxItemGroupHeadings,
  TaxItemGroupHeadingsType
} from './TaxItemGroupHeadings';
import {
  CustomerPaymentJournalFees,
  CustomerPaymentJournalFeesType
} from './CustomerPaymentJournalFees';
import {
  PaymentJournalLineSettledInvoices,
  PaymentJournalLineSettledInvoicesType
} from './PaymentJournalLineSettledInvoices';

/**
 * This class represents the entity "CustomerPaymentJournalLines" of service "d365_metadata".
 */
export class CustomerPaymentJournalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerPaymentJournalLinesType<T>
{
  /**
   * Technical entity name for CustomerPaymentJournalLines.
   */
  static override _entityName = 'CustomerPaymentJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerPaymentJournalLines entity.
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
   * Use Sales Tax Direction From Main Account.
   * @nullable
   */
  declare useSalesTaxDirectionFromMainAccount?: NoYes | null;
  /**
   * Marked Invoice.
   * @nullable
   */
  declare markedInvoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deposit Number.
   * @nullable
   */
  declare depositNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Withholding Tax Group.
   * @nullable
   */
  declare itemWithholdingTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Account Type.
   * @nullable
   */
  declare offsetAccountType?: LedgerJournalAcType | null;
  /**
   * Postdated Check Cashier Display Value.
   * @nullable
   */
  declare postdatedCheckCashierDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Postdated Check Maturity Date.
   */
  declare postdatedCheckMaturityDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Settle Voucher.
   * @nullable
   */
  declare settleVoucher?: SettlementType | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Nachaiatofac Screening Indicator.
   * @nullable
   */
  declare nachaiatofacScreeningIndicator?: CustVendGatewayOperatorOfacIndicatorUs | null;
  /**
   * Bank Transaction Type.
   * @nullable
   */
  declare bankTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Reference.
   * @nullable
   */
  declare paymentReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Name.
   * @nullable
   */
  declare customerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Chinese Voucher Type.
   * @nullable
   */
  declare chineseVoucherType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nachaiat Foreign Exchange Indicator.
   * @nullable
   */
  declare nachaiatForeignExchangeIndicator?: CustVendForeignExchIndicatorUs | null;
  /**
   * Postdated Check Salesperson Display Value.
   * @nullable
   */
  declare postdatedCheckSalespersonDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Nachaiat Foreign Exchange Reference Indicator.
   * @nullable
   */
  declare nachaiatForeignExchangeReferenceIndicator?: CustVendForeignExchRefIndicatorUs | null;
  /**
   * Debit Amount.
   */
  declare debitAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nachaiatofac Secondary Screening Indicator.
   * @nullable
   */
  declare nachaiatofacSecondaryScreeningIndicator?: CustVendSecondaryOfacIndicatorUs | null;
  /**
   * Third Party Bank Account Id.
   * @nullable
   */
  declare thirdPartyBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Text.
   * @nullable
   */
  declare transactionText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postdated Check Number.
   * @nullable
   */
  declare postdatedCheckNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Default Dimensions For Account Display Value.
   * @nullable
   */
  declare defaultDimensionsForAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Postdated Check Original Check Number.
   * @nullable
   */
  declare postdatedCheckOriginalCheckNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Payment Method Name.
   * @nullable
   */
  declare paymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Central Bank Import Date.
   */
  declare centralBankImportDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Nachaiat Receiving Dfi Qualifier.
   * @nullable
   */
  declare nachaiatReceivingDfiQualifier?: CustVendOriginatingDfiQualifierUs | null;
  /**
   * Offset Transaction Text.
   * @nullable
   */
  declare offsetTransactionText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Marked Invoice Company.
   * @nullable
   */
  declare markedInvoiceCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use A Bank Deposit Slip.
   * @nullable
   */
  declare useABankDepositSlip?: NoYes | null;
  /**
   * Payment Specification.
   * @nullable
   */
  declare paymentSpecification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Fin Tag Display Value.
   * @nullable
   */
  declare offsetFinTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postdated Check Is Replacement Check.
   * @nullable
   */
  declare postdatedCheckIsReplacementCheck?: NoYes | null;
  /**
   * Nachaiat Originating Dfi Qualifier.
   * @nullable
   */
  declare nachaiatOriginatingDfiQualifier?: CustVendOriginatingDfiQualifierUs | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcType | null;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
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
   * Payment Id.
   * @nullable
   */
  declare paymentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculate Withholding Tax.
   * @nullable
   */
  declare calculateWithholdingTax?: NoYes | null;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postdated Check Reason For Stop.
   * @nullable
   */
  declare postdatedCheckReasonForStop?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Is Prepayment.
   * @nullable
   */
  declare isPrepayment?: NoYes | null;
  /**
   * Nachaiat Foreign Exchange Reference.
   * @nullable
   */
  declare nachaiatForeignExchangeReference?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Dimensions For Offset Account Display Value.
   * @nullable
   */
  declare defaultDimensionsForOffsetAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Secondary Exchange Rate.
   */
  declare secondaryExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Postdated Check Received Date.
   */
  declare postdatedCheckReceivedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postdated Check Bank Branch.
   * @nullable
   */
  declare postdatedCheckBankBranch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Central Bank Purpose Code.
   * @nullable
   */
  declare centralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postdated Check Replacement Comments.
   * @nullable
   */
  declare postdatedCheckReplacementComments?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Postdated Check Stop Payment.
   * @nullable
   */
  declare postdatedCheckStopPayment?: NoYes | null;
  /**
   * Chinese Voucher.
   * @nullable
   */
  declare chineseVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postdated Check Bank Name.
   * @nullable
   */
  declare postdatedCheckBankName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Central Bank Purpose Text.
   * @nullable
   */
  declare centralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Notes.
   * @nullable
   */
  declare paymentNotes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare customerPaymentJournalLineOffsetAccountCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare customerPaymentJournalLineDefaultDimensionOffsetEntityRole?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomerPaymentMethods} entity.
   */
  declare customerPaymentJournalLinePaymentMethodEntityRole?: CustomerPaymentMethods<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare customerPaymentJournalLineDefaultDimensionAccountEntityRole?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link VoucherTypes} entity.
   */
  declare customerPaymentJournalLineLedgerVoucherTypeEntityRole?: VoucherTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomerPaymentJournalHeaders} entity.
   */
  declare customerPaymentJournalLineHeaderEntityRole?: CustomerPaymentJournalHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare customerPaymentJournalLineCurrentyEntityRole?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link OfficeAddinLegalEntities} entity.
   */
  declare customerPaymentJournalLineEntityCompany?: OfficeAddinLegalEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxGroups} entity.
   */
  declare customerPaymentJournalLineTaxGroupEntityRole?: TaxGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxItemGroupHeadings} entity.
   */
  declare customerPaymentJournalLineTaxItemGroupEntityRole?: TaxItemGroupHeadings<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare customerPaymentJournalLineAccountCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-many navigation property to the {@link CustomerPaymentJournalFees} entity.
   */
  declare customerPaymentJournalFee: CustomerPaymentJournalFees<T>[];
  /**
   * One-to-many navigation property to the {@link PaymentJournalLineSettledInvoices} entity.
   */
  declare customerPaymentJournalLineRole: PaymentJournalLineSettledInvoices<T>[];

  constructor(_entityApi: CustomerPaymentJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerPaymentJournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  useSalesTaxDirectionFromMainAccount?: NoYes | null;
  markedInvoice?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  depositNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemWithholdingTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  offsetAccountType?: LedgerJournalAcType | null;
  postdatedCheckCashierDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  postdatedCheckMaturityDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  settleVoucher?: SettlementType | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  nachaiatofacScreeningIndicator?: CustVendGatewayOperatorOfacIndicatorUs | null;
  bankTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  paymentReference?: DeserializedType<T, 'Edm.String'> | null;
  customerName?: DeserializedType<T, 'Edm.String'> | null;
  chineseVoucherType?: DeserializedType<T, 'Edm.String'> | null;
  nachaiatForeignExchangeIndicator?: CustVendForeignExchIndicatorUs | null;
  postdatedCheckSalespersonDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  nachaiatForeignExchangeReferenceIndicator?: CustVendForeignExchRefIndicatorUs | null;
  debitAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  nachaiatofacSecondaryScreeningIndicator?: CustVendSecondaryOfacIndicatorUs | null;
  thirdPartyBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  transactionText?: DeserializedType<T, 'Edm.String'> | null;
  postdatedCheckNumber?: DeserializedType<T, 'Edm.String'> | null;
  offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionsForAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  postdatedCheckOriginalCheckNumber?: DeserializedType<T, 'Edm.String'> | null;
  paymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  centralBankImportDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  nachaiatReceivingDfiQualifier?: CustVendOriginatingDfiQualifierUs | null;
  offsetTransactionText?: DeserializedType<T, 'Edm.String'> | null;
  markedInvoiceCompany?: DeserializedType<T, 'Edm.String'> | null;
  useABankDepositSlip?: NoYes | null;
  paymentSpecification?: DeserializedType<T, 'Edm.String'> | null;
  offsetFinTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  postdatedCheckIsReplacementCheck?: NoYes | null;
  nachaiatOriginatingDfiQualifier?: CustVendOriginatingDfiQualifierUs | null;
  accountType?: LedgerJournalAcType | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  paymentId?: DeserializedType<T, 'Edm.String'> | null;
  calculateWithholdingTax?: NoYes | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  postdatedCheckReasonForStop?: DeserializedType<T, 'Edm.String'> | null;
  creditAmount: DeserializedType<T, 'Edm.Decimal'>;
  overrideSalesTax?: NoYes | null;
  offsetCompany?: DeserializedType<T, 'Edm.String'> | null;
  isPrepayment?: NoYes | null;
  nachaiatForeignExchangeReference?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionsForOffsetAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  reportingCurrencyExchRateSecondary: DeserializedType<T, 'Edm.Decimal'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  secondaryExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  postdatedCheckReceivedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  postdatedCheckBankBranch?: DeserializedType<T, 'Edm.String'> | null;
  centralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  postdatedCheckReplacementComments?: DeserializedType<T, 'Edm.String'> | null;
  postdatedCheckStopPayment?: NoYes | null;
  chineseVoucher?: DeserializedType<T, 'Edm.String'> | null;
  postdatedCheckBankName?: DeserializedType<T, 'Edm.String'> | null;
  centralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  paymentNotes?: DeserializedType<T, 'Edm.String'> | null;
  customerPaymentJournalLineOffsetAccountCombination?: DimensionCombinationsType<T> | null;
  customerPaymentJournalLineDefaultDimensionOffsetEntityRole?: DimensionSetsType<T> | null;
  customerPaymentJournalLinePaymentMethodEntityRole?: CustomerPaymentMethodsType<T> | null;
  customerPaymentJournalLineDefaultDimensionAccountEntityRole?: DimensionSetsType<T> | null;
  customerPaymentJournalLineLedgerVoucherTypeEntityRole?: VoucherTypesType<T> | null;
  customerPaymentJournalLineHeaderEntityRole?: CustomerPaymentJournalHeadersType<T> | null;
  customerPaymentJournalLineCurrentyEntityRole?: CurrenciesType<T> | null;
  customerPaymentJournalLineEntityCompany?: OfficeAddinLegalEntitiesType<T> | null;
  customerPaymentJournalLineTaxGroupEntityRole?: TaxGroupsType<T> | null;
  customerPaymentJournalLineTaxItemGroupEntityRole?: TaxItemGroupHeadingsType<T> | null;
  customerPaymentJournalLineAccountCombination?: DimensionCombinationsType<T> | null;
  customerPaymentJournalFee: CustomerPaymentJournalFeesType<T>[];
  customerPaymentJournalLineRole: PaymentJournalLineSettledInvoicesType<T>[];
}
