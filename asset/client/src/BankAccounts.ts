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
import type { BankAccountsApi } from './BankAccountsApi';
import { NoYes } from './NoYes';
import { BankAccountHoldStatus } from './BankAccountHoldStatus';
import { Timezone } from './Timezone';
import { BankTransTypeJp } from './BankTransTypeJp';
import { BankCodeType } from './BankCodeType';
import { BankCheckLayouts, BankCheckLayoutsType } from './BankCheckLayouts';
import {
  BankBillOfExchangeLayouts,
  BankBillOfExchangeLayoutsType
} from './BankBillOfExchangeLayouts';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { BankGroups, BankGroupsType } from './BankGroups';
import { Currencies, CurrenciesType } from './Currencies';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  CustomerChargeGroup,
  CustomerChargeGroupType
} from './CustomerChargeGroup';
import { JournalNames, JournalNamesType } from './JournalNames';
import {
  ReconciliationMatchRuleSets,
  ReconciliationMatchRuleSetsType
} from './ReconciliationMatchRuleSets';

/**
 * This class represents the entity "BankAccounts" of service "d365_metadata".
 */
export class BankAccounts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BankAccountsType<T>
{
  /**
   * Technical entity name for BankAccounts.
   */
  static override _entityName = 'BankAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankAccounts entity.
   */
  static _keys = ['dataAreaId', 'BankAccountId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Bank Account Id.
   */
  declare bankAccountId: DeserializedType<T, 'Edm.String'>;
  /**
   * Use Bank Statements As Confirmation Of Electronic Payments.
   * @nullable
   */
  declare useBankStatementsAsConfirmationOfElectronicPayments?: NoYes | null;
  /**
   * Address Description.
   * @nullable
   */
  declare addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Interests Fee.
   */
  declare discountInterestsFee: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Post Customer Payment Fee.
   * @nullable
   */
  declare postCustomerPaymentFee?: NoYes | null;
  /**
   * Drawer.
   * @nullable
   */
  declare drawer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address State.
   * @nullable
   */
  declare addressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address City.
   * @nullable
   */
  declare addressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Internet Address.
   * @nullable
   */
  declare contactInternetAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reconciliation Matching Rule Set Id.
   * @nullable
   */
  declare reconciliationMatchingRuleSetId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Address Latitude.
   */
  declare addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Address Zip Code.
   * @nullable
   */
  declare addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Phone Number Extension.
   * @nullable
   */
  declare contactPhoneNumberExtension?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Contact Telex Number.
   * @nullable
   */
  declare contactTelexNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Post Account.
   * @nullable
   */
  declare contractPostAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Remit Main Account Id Display Value.
   * @nullable
   */
  declare invoiceRemitMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Destination Name.
   * @nullable
   */
  declare destinationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Number.
   * @nullable
   */
  declare accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Non Sufficient Funds Journal Name.
   * @nullable
   */
  declare nonSufficientFundsJournalName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Address County.
   * @nullable
   */
  declare addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Specific Symbol.
   * @nullable
   */
  declare bankSpecificSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Location Id.
   * @nullable
   */
  declare addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Direct Debit Id.
   * @nullable
   */
  declare directDebitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Esr.
   * @nullable
   */
  declare esr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reconcile After Statement Import.
   * @nullable
   */
  declare reconcileAfterStatementImport?: NoYes | null;
  /**
   * Accounting Currency Exchange Rate Type.
   * @nullable
   */
  declare accountingCurrencyExchangeRateType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Bank Constant Symbol.
   * @nullable
   */
  declare bankConstantSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Clearing Code.
   * @nullable
   */
  declare clearingCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Main Account Id Display Value.
   * @nullable
   */
  declare discountMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Address Street.
   * @nullable
   */
  declare addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Payment Fee Main Account Id Display Value.
   * @nullable
   */
  declare customerPaymentFeeMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Address Valid To.
   */
  declare addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Rfc Number.
   * @nullable
   */
  declare rfcNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account Status.
   * @nullable
   */
  declare bankAccountStatus?: BankAccountHoldStatus | null;
  /**
   * Collection Expenses Fee.
   */
  declare collectionExpensesFee: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Besr Id Number.
   * @nullable
   */
  declare besrIdNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Swift Code.
   * @nullable
   */
  declare swiftCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enable Advanced Bank Reconciliation.
   * @nullable
   */
  declare enableAdvancedBankReconciliation?: NoYes | null;
  /**
   * Address Time Zone.
   * @nullable
   */
  declare addressTimeZone?: Timezone | null;
  /**
   * Collection Main Account Id Display Value.
   * @nullable
   */
  declare collectionMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Prenote Response Days.
   */
  declare prenoteResponseDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Bank Group Id.
   * @nullable
   */
  declare bankGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Limit.
   */
  declare creditLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Kana Name.
   * @nullable
   */
  declare kanaName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Suffix.
   * @nullable
   */
  declare suffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fee Esr Account Number.
   * @nullable
   */
  declare feeEsrAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Main Account Id Display Value.
   * @nullable
   */
  declare bankMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Company Statement Name.
   * @nullable
   */
  declare companyStatementName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Positive Pay Start Date.
   */
  declare positivePayStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Statement Name.
   * @nullable
   */
  declare statementName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Email.
   * @nullable
   */
  declare contactEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Full Primary Address.
   * @nullable
   */
  declare fullPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Valid From.
   */
  declare addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Non Sufficient Funds Charges Group Id.
   * @nullable
   */
  declare nonSufficientFundsChargesGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Address District Name.
   * @nullable
   */
  declare addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fee Journal Name.
   * @nullable
   */
  declare feeJournalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Remit Fee.
   */
  declare invoiceRemitFee: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Contact Pager.
   * @nullable
   */
  declare contactPager?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Transaction Type.
   * @nullable
   */
  declare bankTransactionType?: BankTransTypeJp | null;
  /**
   * Banks Identification Of Company.
   * @nullable
   */
  declare banksIdentificationOfCompany?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Routing Number Type.
   * @nullable
   */
  declare routingNumberType?: BankCodeType | null;
  /**
   * Bank Statement Format Id.
   * @nullable
   */
  declare bankStatementFormatId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Mobile Phone.
   * @nullable
   */
  declare contactMobilePhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sort Code.
   * @nullable
   */
  declare sortCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Name.
   * @nullable
   */
  declare contactName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active To.
   */
  declare activeTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Iban.
   * @nullable
   */
  declare iban?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Control Internal Number.
   * @nullable
   */
  declare controlInternalNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Fax Number.
   * @nullable
   */
  declare contactFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Reporting Currency Exchange Rate Type.
   * @nullable
   */
  declare reportingCurrencyExchangeRateType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Address Country Iso Code.
   * @nullable
   */
  declare addressCountryIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Longitude.
   */
  declare addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allow Transactions In Additional Currencies.
   * @nullable
   */
  declare allowTransactionsInAdditionalCurrencies?: NoYes | null;
  /**
   * Positive Pay Format Name.
   * @nullable
   */
  declare positivePayFormatName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Prenote Required.
   * @nullable
   */
  declare isPrenoteRequired?: NoYes | null;
  /**
   * Active From.
   */
  declare activeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address Country.
   * @nullable
   */
  declare addressCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Sms.
   * @nullable
   */
  declare contactSms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Discounting Maximum.
   */
  declare paymentDiscountingMaximum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allowed Penny Difference For Reconciliation.
   */
  declare allowedPennyDifferenceForReconciliation: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Contact Phone Number.
   * @nullable
   */
  declare contactPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Routing Number.
   * @nullable
   */
  declare routingNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Profile Bills Remit Discount It.
   * @nullable
   */
  declare postingProfileBillsRemitDiscountIt?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Posting Profile Bills Remit Collection It.
   * @nullable
   */
  declare postingProfileBillsRemitCollectionIt?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Posting Profile Remit Notes It.
   * @nullable
   */
  declare postingProfileRemitNotesIt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qriban.
   * @nullable
   */
  declare qriban?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BankCheckLayouts} entity.
   */
  declare bankCheckLayout?: BankCheckLayouts<T> | null;
  /**
   * One-to-one navigation property to the {@link BankBillOfExchangeLayouts} entity.
   */
  declare bankBillOfExchangeLayout?: BankBillOfExchangeLayouts<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link BankGroups} entity.
   */
  declare bankGroup?: BankGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomerChargeGroup} entity.
   */
  declare customerChargeGroups?: CustomerChargeGroup<T> | null;
  /**
   * One-to-one navigation property to the {@link JournalNames} entity.
   */
  declare journalName?: JournalNames<T> | null;
  /**
   * One-to-one navigation property to the {@link ReconciliationMatchRuleSets} entity.
   */
  declare reconciliationMatchRuleSet?: ReconciliationMatchRuleSets<T> | null;

  constructor(_entityApi: BankAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface BankAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  bankAccountId: DeserializedType<T, 'Edm.String'>;
  useBankStatementsAsConfirmationOfElectronicPayments?: NoYes | null;
  addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  discountInterestsFee: DeserializedType<T, 'Edm.Decimal'>;
  postCustomerPaymentFee?: NoYes | null;
  drawer?: DeserializedType<T, 'Edm.String'> | null;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  contactInternetAddress?: DeserializedType<T, 'Edm.String'> | null;
  reconciliationMatchingRuleSetId?: DeserializedType<T, 'Edm.String'> | null;
  addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  contactPhoneNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
  contactTelexNumber?: DeserializedType<T, 'Edm.String'> | null;
  contractPostAccount?: DeserializedType<T, 'Edm.String'> | null;
  invoiceRemitMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  destinationName?: DeserializedType<T, 'Edm.String'> | null;
  accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  nonSufficientFundsJournalName?: DeserializedType<T, 'Edm.String'> | null;
  addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  bankSpecificSymbol?: DeserializedType<T, 'Edm.String'> | null;
  addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  directDebitId?: DeserializedType<T, 'Edm.String'> | null;
  esr?: DeserializedType<T, 'Edm.String'> | null;
  reconcileAfterStatementImport?: NoYes | null;
  accountingCurrencyExchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  bankConstantSymbol?: DeserializedType<T, 'Edm.String'> | null;
  clearingCode?: DeserializedType<T, 'Edm.String'> | null;
  discountMainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  customerPaymentFeeMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  rfcNumber?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountStatus?: BankAccountHoldStatus | null;
  collectionExpensesFee: DeserializedType<T, 'Edm.Decimal'>;
  besrIdNumber?: DeserializedType<T, 'Edm.String'> | null;
  swiftCode?: DeserializedType<T, 'Edm.String'> | null;
  enableAdvancedBankReconciliation?: NoYes | null;
  addressTimeZone?: Timezone | null;
  collectionMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  prenoteResponseDays: DeserializedType<T, 'Edm.Int32'>;
  bankGroupId?: DeserializedType<T, 'Edm.String'> | null;
  creditLimit: DeserializedType<T, 'Edm.Decimal'>;
  kanaName?: DeserializedType<T, 'Edm.String'> | null;
  suffix?: DeserializedType<T, 'Edm.String'> | null;
  feeEsrAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  bankMainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  companyStatementName?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  positivePayStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  statementName?: DeserializedType<T, 'Edm.String'> | null;
  contactEmail?: DeserializedType<T, 'Edm.String'> | null;
  fullPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  nonSufficientFundsChargesGroupId?: DeserializedType<T, 'Edm.String'> | null;
  addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  feeJournalName?: DeserializedType<T, 'Edm.String'> | null;
  invoiceRemitFee: DeserializedType<T, 'Edm.Decimal'>;
  contactPager?: DeserializedType<T, 'Edm.String'> | null;
  bankTransactionType?: BankTransTypeJp | null;
  banksIdentificationOfCompany?: DeserializedType<T, 'Edm.String'> | null;
  routingNumberType?: BankCodeType | null;
  bankStatementFormatId?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  contactMobilePhone?: DeserializedType<T, 'Edm.String'> | null;
  sortCode?: DeserializedType<T, 'Edm.String'> | null;
  contactName?: DeserializedType<T, 'Edm.String'> | null;
  activeTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  iban?: DeserializedType<T, 'Edm.String'> | null;
  controlInternalNumber?: DeserializedType<T, 'Edm.String'> | null;
  contactFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrencyExchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  allowTransactionsInAdditionalCurrencies?: NoYes | null;
  positivePayFormatName?: DeserializedType<T, 'Edm.String'> | null;
  isPrenoteRequired?: NoYes | null;
  activeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressCountry?: DeserializedType<T, 'Edm.String'> | null;
  contactSms?: DeserializedType<T, 'Edm.String'> | null;
  paymentDiscountingMaximum: DeserializedType<T, 'Edm.Decimal'>;
  allowedPennyDifferenceForReconciliation: DeserializedType<T, 'Edm.Decimal'>;
  contactPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  routingNumber?: DeserializedType<T, 'Edm.String'> | null;
  postingProfileBillsRemitDiscountIt?: DeserializedType<T, 'Edm.String'> | null;
  postingProfileBillsRemitCollectionIt?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  postingProfileRemitNotesIt?: DeserializedType<T, 'Edm.String'> | null;
  qriban?: DeserializedType<T, 'Edm.String'> | null;
  bankCheckLayout?: BankCheckLayoutsType<T> | null;
  bankBillOfExchangeLayout?: BankBillOfExchangeLayoutsType<T> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  bankGroup?: BankGroupsType<T> | null;
  currency?: CurrenciesType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  customerChargeGroups?: CustomerChargeGroupType<T> | null;
  journalName?: JournalNamesType<T> | null;
  reconciliationMatchRuleSet?: ReconciliationMatchRuleSetsType<T> | null;
}
