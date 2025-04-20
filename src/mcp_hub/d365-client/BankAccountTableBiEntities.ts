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
import type { BankAccountTableBiEntitiesApi } from './BankAccountTableBiEntitiesApi';
import { NoYes } from './NoYes';
import { MarkupModuleType } from './MarkupModuleType';
import { Timezone } from './Timezone';
import { DmfTimeZonePreference } from './DmfTimeZonePreference';
import { BankTransTypeJp } from './BankTransTypeJp';
import { BankCodeType } from './BankCodeType';
import { BankAccountHoldStatus } from './BankAccountHoldStatus';
import { LvPaymentOrderType } from './LvPaymentOrderType';
import { BankInterbankClearingCodeBe } from './BankInterbankClearingCodeBe';

/**
 * This class represents the entity "BankAccountTableBiEntities" of service "d365_metadata".
 */
export class BankAccountTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BankAccountTableBiEntitiesType<T>
{
  /**
   * Technical entity name for BankAccountTableBiEntities.
   */
  static override _entityName = 'BankAccountTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankAccountTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'AccountID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Id.
   */
  declare accountId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Remittance Ledger Dimension Values Json.
   * @nullable
   */
  declare invoiceRemittanceLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Telex.
   * @nullable
   */
  declare telex?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Profile Bills Remit Collection It.
   * @nullable
   */
  declare postingProfileBillsRemitCollectionIt?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pager.
   * @nullable
   */
  declare pager?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Reconciliation Enabled.
   * @nullable
   */
  declare bankReconciliationEnabled?: NoYes | null;
  /**
   * Active From.
   */
  declare activeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Bank Reconciliation Stmt As Paym Confirm.
   * @nullable
   */
  declare bankReconciliationStmtAsPaymConfirm?: NoYes | null;
  /**
   * Include Bank Bar Code Fi.
   * @nullable
   */
  declare includeBankBarCodeFi?: NoYes | null;
  /**
   * Bank Contract Account.
   * @nullable
   */
  declare bankContractAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sms.
   * @nullable
   */
  declare sms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Sort Code.
   * @nullable
   */
  declare bankSortCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Positive Pay Format Name.
   * @nullable
   */
  declare bankPositivePayFormatName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Registration Num.
   * @nullable
   */
  declare registrationNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Payment Fee Ledger Dimension Values Json.
   * @nullable
   */
  declare customerPaymentFeeLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Bank Company Statement Name.
   * @nullable
   */
  declare bankCompanyStatementName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Profile Remit Notes It.
   * @nullable
   */
  declare postingProfileRemitNotesIt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phone Local.
   * @nullable
   */
  declare phoneLocal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Constant Symbol.
   */
  declare bankConstantSymbol: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Nsf Fee Markup Group Module.
   * @nullable
   */
  declare nsfFeeMarkupGroupModule?: MarkupModuleType | null;
  /**
   * Location.
   */
  declare location: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Currency Sell Order Template Name Ru.
   * @nullable
   */
  declare currencySellOrderTemplateNameRu?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Giro Contract.
   * @nullable
   */
  declare giroContract?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Swift No.
   * @nullable
   */
  declare swiftNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Upii Name In.
   * @nullable
   */
  declare upiiNameIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nsf Fee Markup Group Id.
   * @nullable
   */
  declare nsfFeeMarkupGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Specific Symbol.
   * @nullable
   */
  declare specificSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Positive Pay Start Date.
   */
  declare bankPositivePayStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Qriban Ch.
   * @nullable
   */
  declare qribanCh?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Bank Prenote.
   * @nullable
   */
  declare isBankPrenote?: NoYes | null;
  /**
   * Currency Sell Order Template Ref Rec Id Ru.
   */
  declare currencySellOrderTemplateRefRecIdRu: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tele Fax.
   * @nullable
   */
  declare teleFax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Iban.
   * @nullable
   */
  declare iban?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Zone.
   * @nullable
   */
  declare timeZone?: Timezone | null;
  /**
   * Ledger Dimension.
   */
  declare ledgerDimension: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Disc Credit Max Mst.
   */
  declare discCreditMaxMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Debit Direct Id.
   * @nullable
   */
  declare debitDirectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Discount Ledger Dimension.
   */
  declare remittanceDiscountLedgerDimension: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Template File Name Ru.
   * @nullable
   */
  declare templateFileNameRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Zone Preference.
   * @nullable
   */
  declare timeZonePreference?: DmfTimeZonePreference | null;
  /**
   * Currency Order Template Name Ru.
   * @nullable
   */
  declare currencyOrderTemplateNameRu?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Bank Statement Format.
   */
  declare bankStatementFormat: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Paym Local Export Path Lt.
   * @nullable
   */
  declare paymLocalExportPathLt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Type Jp.
   * @nullable
   */
  declare transTypeJp?: BankTransTypeJp | null;
  /**
   * Invoice Remit Amount.
   */
  declare invoiceRemitAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bank Transfer Code.
   * @nullable
   */
  declare bankTransferCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active To.
   */
  declare activeTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Phone.
   * @nullable
   */
  declare phone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Suffix.
   * @nullable
   */
  declare bankSuffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reverse Debit Credit.
   * @nullable
   */
  declare reverseDebitCredit?: NoYes | null;
  /**
   * Bank Destination Name.
   * @nullable
   */
  declare bankDestinationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Group Id.
   * @nullable
   */
  declare bankGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Giro Contract Account.
   * @nullable
   */
  declare giroContractAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Upi Id In.
   * @nullable
   */
  declare upiIdIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cfm Bank Balance Minimum.
   */
  declare cfmBankBalanceMinimum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posting Profile Bills Remit Discount It.
   * @nullable
   */
  declare postingProfileBillsRemitDiscountIt?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Bank Recon Allowed Penny Difference.
   */
  declare bankReconAllowedPennyDifference: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remit Discount Amount.
   */
  declare remitDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bank Code Type.
   * @nullable
   */
  declare bankCodeType?: BankCodeType | null;
  /**
   * Corr Account W.
   * @nullable
   */
  declare corrAccountW?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Template Ref Rec Id Ru.
   */
  declare templateRefRecIdRu: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Currency Order Template Ref Rec Id Ru.
   */
  declare currencyOrderTemplateRefRecIdRu: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ledger Journal Name Id.
   * @nullable
   */
  declare ledgerJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person.
   * @nullable
   */
  declare contactPerson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Statement Name.
   * @nullable
   */
  declare bankStatementName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print Giro Fi.
   * @nullable
   */
  declare printGiroFi?: NoYes | null;
  /**
   * Paym Foreign Export Path Lt.
   * @nullable
   */
  declare paymForeignExportPathLt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Collection Ledger Dimension.
   */
  declare remittanceCollectionLedgerDimension: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bank Clearing Code.
   * @nullable
   */
  declare bankClearingCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cellular Phone.
   * @nullable
   */
  declare cellularPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prenote Response Days.
   */
  declare prenoteResponseDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Bank Reconciliation Match Rule Set.
   */
  declare bankReconciliationMatchRuleSet: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Paym Order Num Seq Id W.
   * @nullable
   */
  declare paymOrderNumSeqIdW?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Company Paym Id.
   * @nullable
   */
  declare companyPaymId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Division Paym Id.
   * @nullable
   */
  declare divisionPaymId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Recon Match Auto After Import.
   * @nullable
   */
  declare bankReconMatchAutoAfterImport?: NoYes | null;
  /**
   * Remittance Discount Ledger Dimension Values Json.
   * @nullable
   */
  declare remittanceDiscountLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Bank Account Status.
   * @nullable
   */
  declare bankAccountStatus?: BankAccountHoldStatus | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ifsc In.
   * @nullable
   */
  declare ifscIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Dimension Values Json.
   * @nullable
   */
  declare ledgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Payment Fee Ledger Dimension.
   */
  declare customerPaymentFeeLedgerDimension: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cust Paym Fee Post.
   * @nullable
   */
  declare custPaymFeePost?: NoYes | null;
  /**
   * Remit Collection Amount.
   */
  declare remitCollectionAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Account Name Kana Jp.
   * @nullable
   */
  declare accountNameKanaJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rfc Mx.
   * @nullable
   */
  declare rfcMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Collection Ledger Dimension Values Json.
   * @nullable
   */
  declare remittanceCollectionLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Lv Pay Order Type.
   * @nullable
   */
  declare lvPayOrderType?: LvPaymentOrderType | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Interbank Clearing Code Be.
   * @nullable
   */
  declare bankInterbankClearingCodeBe?: BankInterbankClearingCodeBe | null;
  /**
   * Over Draft Limit.
   */
  declare overDraftLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fee Contract Account.
   * @nullable
   */
  declare feeContractAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lv Default Bank.
   * @nullable
   */
  declare lvDefaultBank?: NoYes | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Remittance Ledger Dimension.
   */
  declare invoiceRemittanceLedgerDimension: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Nsf Ledger Journal Name.
   * @nullable
   */
  declare nsfLedgerJournalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Multi Currency.
   * @nullable
   */
  declare bankMultiCurrency?: NoYes | null;
  /**
   * Bank Cin.
   * @nullable
   */
  declare bankCin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Nacha File Blocked.
   * @nullable
   */
  declare isNachaFileBlocked?: NoYes | null;

  constructor(_entityApi: BankAccountTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface BankAccountTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountId: DeserializedType<T, 'Edm.String'>;
  invoiceRemittanceLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  telex?: DeserializedType<T, 'Edm.String'> | null;
  postingProfileBillsRemitCollectionIt?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  pager?: DeserializedType<T, 'Edm.String'> | null;
  bankReconciliationEnabled?: NoYes | null;
  activeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  bankReconciliationStmtAsPaymConfirm?: NoYes | null;
  includeBankBarCodeFi?: NoYes | null;
  bankContractAccount?: DeserializedType<T, 'Edm.String'> | null;
  sms?: DeserializedType<T, 'Edm.String'> | null;
  bankSortCode?: DeserializedType<T, 'Edm.String'> | null;
  bankPositivePayFormatName?: DeserializedType<T, 'Edm.String'> | null;
  registrationNum?: DeserializedType<T, 'Edm.String'> | null;
  customerPaymentFeeLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  bankCompanyStatementName?: DeserializedType<T, 'Edm.String'> | null;
  postingProfileRemitNotesIt?: DeserializedType<T, 'Edm.String'> | null;
  phoneLocal?: DeserializedType<T, 'Edm.String'> | null;
  bankConstantSymbol: DeserializedType<T, 'Edm.Int64'>;
  nsfFeeMarkupGroupModule?: MarkupModuleType | null;
  location: DeserializedType<T, 'Edm.Int64'>;
  currencySellOrderTemplateNameRu?: DeserializedType<T, 'Edm.String'> | null;
  giroContract?: DeserializedType<T, 'Edm.String'> | null;
  swiftNo?: DeserializedType<T, 'Edm.String'> | null;
  upiiNameIn?: DeserializedType<T, 'Edm.String'> | null;
  nsfFeeMarkupGroupId?: DeserializedType<T, 'Edm.String'> | null;
  specificSymbol?: DeserializedType<T, 'Edm.String'> | null;
  bankPositivePayStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  qribanCh?: DeserializedType<T, 'Edm.String'> | null;
  isBankPrenote?: NoYes | null;
  currencySellOrderTemplateRefRecIdRu: DeserializedType<T, 'Edm.Int64'>;
  teleFax?: DeserializedType<T, 'Edm.String'> | null;
  iban?: DeserializedType<T, 'Edm.String'> | null;
  timeZone?: Timezone | null;
  ledgerDimension: DeserializedType<T, 'Edm.Int64'>;
  discCreditMaxMst: DeserializedType<T, 'Edm.Decimal'>;
  debitDirectId?: DeserializedType<T, 'Edm.String'> | null;
  remittanceDiscountLedgerDimension: DeserializedType<T, 'Edm.Int64'>;
  templateFileNameRu?: DeserializedType<T, 'Edm.String'> | null;
  timeZonePreference?: DmfTimeZonePreference | null;
  currencyOrderTemplateNameRu?: DeserializedType<T, 'Edm.String'> | null;
  bankStatementFormat: DeserializedType<T, 'Edm.Int64'>;
  paymLocalExportPathLt?: DeserializedType<T, 'Edm.String'> | null;
  transTypeJp?: BankTransTypeJp | null;
  invoiceRemitAmount: DeserializedType<T, 'Edm.Decimal'>;
  bankTransferCode?: DeserializedType<T, 'Edm.String'> | null;
  activeTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  phone?: DeserializedType<T, 'Edm.String'> | null;
  bankSuffix?: DeserializedType<T, 'Edm.String'> | null;
  reverseDebitCredit?: NoYes | null;
  bankDestinationName?: DeserializedType<T, 'Edm.String'> | null;
  bankGroupId?: DeserializedType<T, 'Edm.String'> | null;
  giroContractAccount?: DeserializedType<T, 'Edm.String'> | null;
  upiIdIn?: DeserializedType<T, 'Edm.String'> | null;
  cfmBankBalanceMinimum: DeserializedType<T, 'Edm.Decimal'>;
  postingProfileBillsRemitDiscountIt?: DeserializedType<T, 'Edm.String'> | null;
  bankReconAllowedPennyDifference: DeserializedType<T, 'Edm.Decimal'>;
  remitDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  bankCodeType?: BankCodeType | null;
  corrAccountW?: DeserializedType<T, 'Edm.String'> | null;
  templateRefRecIdRu: DeserializedType<T, 'Edm.Int64'>;
  currencyOrderTemplateRefRecIdRu: DeserializedType<T, 'Edm.Int64'>;
  ledgerJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  contactPerson?: DeserializedType<T, 'Edm.String'> | null;
  bankStatementName?: DeserializedType<T, 'Edm.String'> | null;
  printGiroFi?: NoYes | null;
  paymForeignExportPathLt?: DeserializedType<T, 'Edm.String'> | null;
  remittanceCollectionLedgerDimension: DeserializedType<T, 'Edm.Int64'>;
  bankClearingCode?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  cellularPhone?: DeserializedType<T, 'Edm.String'> | null;
  prenoteResponseDays: DeserializedType<T, 'Edm.Int32'>;
  bankReconciliationMatchRuleSet: DeserializedType<T, 'Edm.Int64'>;
  paymOrderNumSeqIdW?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  companyPaymId?: DeserializedType<T, 'Edm.String'> | null;
  divisionPaymId?: DeserializedType<T, 'Edm.String'> | null;
  bankReconMatchAutoAfterImport?: NoYes | null;
  remittanceDiscountLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  bankAccountStatus?: BankAccountHoldStatus | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  ifscIn?: DeserializedType<T, 'Edm.String'> | null;
  ledgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  customerPaymentFeeLedgerDimension: DeserializedType<T, 'Edm.Int64'>;
  custPaymFeePost?: NoYes | null;
  remitCollectionAmount: DeserializedType<T, 'Edm.Decimal'>;
  accountNameKanaJp?: DeserializedType<T, 'Edm.String'> | null;
  rfcMx?: DeserializedType<T, 'Edm.String'> | null;
  remittanceCollectionLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  lvPayOrderType?: LvPaymentOrderType | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  bankInterbankClearingCodeBe?: BankInterbankClearingCodeBe | null;
  overDraftLimit: DeserializedType<T, 'Edm.Decimal'>;
  feeContractAccount?: DeserializedType<T, 'Edm.String'> | null;
  lvDefaultBank?: NoYes | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  invoiceRemittanceLedgerDimension: DeserializedType<T, 'Edm.Int64'>;
  nsfLedgerJournalName?: DeserializedType<T, 'Edm.String'> | null;
  bankMultiCurrency?: NoYes | null;
  bankCin?: DeserializedType<T, 'Edm.String'> | null;
  isNachaFileBlocked?: NoYes | null;
}
