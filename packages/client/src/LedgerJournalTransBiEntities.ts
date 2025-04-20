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
import type { LedgerJournalTransBiEntitiesApi } from './LedgerJournalTransBiEntitiesApi';
import { RCashDocRepresType } from './RCashDocRepresType';
import { RCashPayLedgerTransType } from './RCashPayLedgerTransType';
import { Listcode } from './Listcode';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
import { NoYes } from './NoYes';
import { FactureCorrectionTypeRu } from './FactureCorrectionTypeRu';
import { GsthstTaxTypeCa } from './GsthstTaxTypeCa';
import { CustVendNegInstProtestReason } from './CustVendNegInstProtestReason';
import { ArrivalPostingType } from './ArrivalPostingType';
import { BankRemittanceType } from './BankRemittanceType';
import { CustVendPaymStatus } from './CustVendPaymStatus';
import { PeriodUnit } from './PeriodUnit';
import { SettlementType } from './SettlementType';
import { CommProfileTypeRu } from './CommProfileTypeRu';
import { LedgerTransType } from './LedgerTransType';

/**
 * This class represents the entity "LedgerJournalTransBiEntities" of service "d365_metadata".
 */
export class LedgerJournalTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerJournalTransBiEntitiesType<T>
{
  /**
   * Technical entity name for LedgerJournalTransBiEntities.
   */
  static override _entityName = 'LedgerJournalTransBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerJournalTransBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax 1099 State.
   * @nullable
   */
  declare tax1099State?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Notes.
   * @nullable
   */
  declare paymentNotes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 Fields.
   */
  declare tax1099Fields: DeserializedType<T, 'Edm.Int64'>;
  /**
   * R Cash Doc Repres Type.
   * @nullable
   */
  declare rCashDocRepresType?: RCashDocRepresType | null;
  /**
   * Agreement Company Ru.
   * @nullable
   */
  declare agreementCompanyRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Copy Reverse Cn.
   */
  declare refCopyReverseCn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Addressing Pl.
   * @nullable
   */
  declare addressingPl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Einvoice Paym Trans Num.
   */
  declare custEinvoicePaymTransNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Intent Letter Id It.
   * @nullable
   */
  declare intentLetterIdIt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Location.
   */
  declare remittanceLocation: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Packed Extensions.
   * @nullable
   */
  declare packedExtensions?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * R Cash Pay Trans Type.
   * @nullable
   */
  declare rCashPayTransType?: RCashPayLedgerTransType | null;
  /**
   * Cash Disc Code.
   * @nullable
   */
  declare cashDiscCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Client Document Type Id Ru.
   * @nullable
   */
  declare bankClientDocumentTypeIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Listcode.
   * @nullable
   */
  declare listcode?: Listcode | null;
  /**
   * Debit Currency Code Lt.
   * @nullable
   */
  declare debitCurrencyCodeLt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Offset Agreement Company Ru.
   * @nullable
   */
  declare offsetAgreementCompanyRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Ref Rec Id.
   */
  declare reasonRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcType | null;
  /**
   * Offset Posting Profile Ru.
   * @nullable
   */
  declare offsetPostingProfileRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Currency Transfer Log Ru.
   */
  declare bankCurrencyTransferLogRu: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Transfer Currency Ru.
   * @nullable
   */
  declare transferCurrencyRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Bank Account.
   */
  declare vendBankAccount: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Offset Ledger Dimension Values Json.
   * @nullable
   */
  declare offsetLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Paym Reference.
   * @nullable
   */
  declare paymReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fb Sped Ecf Derex Clasification Code Br.
   */
  declare fbSpedEcfDerexClasificationCodeBr: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Import Date.
   */
  declare importDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Offset Company.
   * @nullable
   */
  declare offsetCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Paym Ref Rec Id Ru.
   */
  declare vatPaymRefRecIdRu: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bank Bill Of Exchange Num.
   * @nullable
   */
  declare bankBillOfExchangeNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Period Payment Code Pl.
   * @nullable
   */
  declare taxPeriodPaymentCodePl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operation Type Mx.
   * @nullable
   */
  declare operationTypeMx?: VendorOperationTypeMx | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Cur Debit.
   */
  declare amountCurDebit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Skip Blocked For Manual Entry Check.
   * @nullable
   */
  declare skipBlockedForManualEntryCheck?: NoYes | null;
  /**
   * Invoice.
   * @nullable
   */
  declare invoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 Rec Id.
   */
  declare tax1099RecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Mcr Ref Paym Id.
   */
  declare mcrRefPaymId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Due.
   */
  declare due: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Bank Promissory Note Num.
   * @nullable
   */
  declare bankPromissoryNoteNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Instruction 2.
   */
  declare paymInstruction2: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bank Comm Account Id Ru.
   * @nullable
   */
  declare bankCommAccountIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cancel.
   * @nullable
   */
  declare cancel?: NoYes | null;
  /**
   * Invoice Series Mx.
   * @nullable
   */
  declare invoiceSeriesMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Withhold Calculate Th.
   * @nullable
   */
  declare taxWithholdCalculateTh?: NoYes | null;
  /**
   * Neg Inst Id.
   * @nullable
   */
  declare negInstId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delay Tax Calculation.
   * @nullable
   */
  declare delayTaxCalculation?: NoYes | null;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Prepayment.
   * @nullable
   */
  declare prepayment?: NoYes | null;
  /**
   * Paym Instruction 3.
   */
  declare paymInstruction3: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Correction Type Ru.
   * @nullable
   */
  declare correctionTypeRu?: FactureCorrectionTypeRu | null;
  /**
   * Last Transferred.
   */
  declare lastTransferred: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Corrected Invoice Id Ru.
   * @nullable
   */
  declare correctedInvoiceIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account Type.
   * @nullable
   */
  declare mainAccountType?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Paym Spec.
   * @nullable
   */
  declare paymSpec?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Trans Type.
   * @nullable
   */
  declare bankTransType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address.
   */
  declare remittanceAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * No Edit.
   * @nullable
   */
  declare noEdit?: NoYes | null;
  /**
   * Gsthst Tax Type Ca.
   * @nullable
   */
  declare gsthstTaxTypeCa?: GsthstTaxTypeCa | null;
  /**
   * Foreign Company.
   * @nullable
   */
  declare foreignCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cfdiuuid Mx.
   * @nullable
   */
  declare cfdiuuidMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fin Tag.
   */
  declare finTag: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Remittee Currency.
   * @nullable
   */
  declare remitteeCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Account Agreement Id Ru.
   * @nullable
   */
  declare offsetAccountAgreementIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transferred By.
   * @nullable
   */
  declare transferredBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Marked Invoice.
   * @nullable
   */
  declare markedInvoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Voucher Type Cn.
   */
  declare ledgerVoucherTypeCn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Offset Fin Tag.
   */
  declare offsetFinTag: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bank Currency.
   * @nullable
   */
  declare bankCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Account Type.
   * @nullable
   */
  declare offsetAccountType?: LedgerJournalAcType | null;
  /**
   * Foreign Voucher.
   * @nullable
   */
  declare foreignVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eu Sales List.
   * @nullable
   */
  declare euSalesList?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Announcement Num Ru.
   * @nullable
   */
  declare announcementNumRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reverse Entry.
   * @nullable
   */
  declare reverseEntry?: NoYes | null;
  /**
   * Bank Currency Deal Course Ru.
   */
  declare bankCurrencyDealCourseRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Further Posting Type.
   * @nullable
   */
  declare furtherPostingType?: NoYes | null;
  /**
   * Approver.
   */
  declare approver: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Date Cash Disc.
   */
  declare dateCashDisc: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Markup Code Ru.
   * @nullable
   */
  declare markupCodeRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Currency Amount.
   */
  declare bankCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cust Vend Neg Inst Protest Reason.
   * @nullable
   */
  declare custVendNegInstProtestReason?: CustVendNegInstProtestReason | null;
  /**
   * File Created.
   */
  declare fileCreated: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vend Invoice Declaration Is.
   */
  declare vendInvoiceDeclarationIs: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Purch Ledger Posting.
   * @nullable
   */
  declare purchLedgerPosting?: ArrivalPostingType | null;
  /**
   * Purch Id Range.
   * @nullable
   */
  declare purchIdRange?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * R Cash Doc Repres Person Id.
   * @nullable
   */
  declare rCashDocRepresPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plafond Date It.
   */
  declare plafondDateIt: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Original Document As Facture Ru.
   * @nullable
   */
  declare useOriginalDocumentAsFactureRu?: NoYes | null;
  /**
   * Bank Remittance Type.
   * @nullable
   */
  declare bankRemittanceType?: BankRemittanceType | null;
  /**
   * Bank Deposit Voucher.
   * @nullable
   */
  declare bankDepositVoucher?: NoYes | null;
  /**
   * Cash Disc Base Days.
   */
  declare cashDiscBaseDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Payment Status.
   * @nullable
   */
  declare paymentStatus?: CustVendPaymStatus | null;
  /**
   * Tax 1099 Amount.
   */
  declare tax1099Amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Corrected Invoice Date Ru.
   */
  declare correctedInvoiceDateRu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Direct Debit Mandate.
   */
  declare directDebitMandate: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Transfer.
   * @nullable
   */
  declare transfer?: NoYes | null;
  /**
   * Release Date.
   */
  declare releaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ledger Dimension.
   */
  declare ledgerDimension: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Document Num.
   * @nullable
   */
  declare documentNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Einvoice Paym Delivery Num.
   */
  declare custEinvoicePaymDeliveryNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Mcr Paym Order Id.
   * @nullable
   */
  declare mcrPaymOrderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Trans Id.
   */
  declare vendTransId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Payment.
   * @nullable
   */
  declare payment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Int Bank Lv.
   * @nullable
   */
  declare intBankLv?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Disc Percent.
   */
  declare cashDiscPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reporting Currency Exch Rate Secondary.
   */
  declare reportingCurrencyExchRateSecondary: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Repres Person Card W.
   * @nullable
   */
  declare represPersonCardW?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Freq Code.
   * @nullable
   */
  declare freqCode?: PeriodUnit | null;
  /**
   * Amount Cur Credit.
   */
  declare amountCurCredit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Withhold Alternate Vendor Acct Th.
   * @nullable
   */
  declare taxWithholdAlternateVendorAcctTh?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Bank Deposit Num.
   * @nullable
   */
  declare bankDepositNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Vat Date.
   */
  declare vendorVatDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Bank Cheque Deposit Trans Ref Rec Id.
   */
  declare bankChequeDepositTransRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cust Trans Id.
   */
  declare custTransId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Exch Rate.
   */
  declare exchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vat Num Journal.
   * @nullable
   */
  declare vatNumJournal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intra Com Vat Due Date W.
   * @nullable
   */
  declare intraComVatDueDateW?: NoYes | null;
  /**
   * Correct Ru.
   * @nullable
   */
  declare correctRu?: NoYes | null;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Paym Instruction 1.
   */
  declare paymInstruction1: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Remain Amount.
   */
  declare remainAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mcr Print Txt On Check.
   * @nullable
   */
  declare mcrPrintTxtOnCheck?: NoYes | null;
  /**
   * Pool Rec Id.
   */
  declare poolRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reporting Currency Exch Rate.
   */
  declare reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bank Neg Inst Recipient Name.
   * @nullable
   */
  declare bankNegInstRecipientName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Direction Control.
   * @nullable
   */
  declare taxDirectionControl?: NoYes | null;
  /**
   * Tax Code.
   * @nullable
   */
  declare taxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat On Payment Ru.
   * @nullable
   */
  declare vatOnPaymentRu?: NoYes | null;
  /**
   * Triangulation.
   * @nullable
   */
  declare triangulation?: NoYes | null;
  /**
   * Further Posting Rec Id.
   */
  declare furtherPostingRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Payment Account.
   * @nullable
   */
  declare paymentAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Mode.
   * @nullable
   */
  declare paymMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Vend Bank Account Id.
   * @nullable
   */
  declare custVendBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Id.
   * @nullable
   */
  declare paymId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Dimension Values Json.
   * @nullable
   */
  declare ledgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Marked Invoice Rec Id.
   */
  declare markedInvoiceRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cash Disc Amount.
   */
  declare cashDiscAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Settle Voucher.
   * @nullable
   */
  declare settleVoucher?: SettlementType | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Date W.
   */
  declare receiptDateW: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vend Paym Fee Group Jp.
   * @nullable
   */
  declare vendPaymFeeGroupJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transferred.
   * @nullable
   */
  declare transferred?: NoYes | null;
  /**
   * Repres Person Name W.
   * @nullable
   */
  declare represPersonNameW?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comm Profile Type Ru.
   * @nullable
   */
  declare commProfileTypeRu?: CommProfileTypeRu | null;
  /**
   * Bank Agreement Ext Ru.
   */
  declare bankAgreementExtRu: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Print Account Num Ru.
   * @nullable
   */
  declare bankPrintAccountNumRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Num.
   * @nullable
   */
  declare journalNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher Cn.
   * @nullable
   */
  declare voucherCn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Txt.
   * @nullable
   */
  declare txt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enterprise Number.
   * @nullable
   */
  declare enterpriseNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inform By Telex Lt.
   * @nullable
   */
  declare informByTelexLt?: NoYes | null;
  /**
   * Tax 1099 State Amount.
   */
  declare tax1099StateAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bank Resp Worker Id Ru.
   */
  declare bankRespWorkerIdRu: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bank Remittance File Id.
   * @nullable
   */
  declare bankRemittanceFileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Sequence Num.
   */
  declare paymentSequenceNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Credit Card Auth Trans Ref Id.
   */
  declare creditCardAuthTransRefId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Offset Ledger Dimension.
   */
  declare offsetLedgerDimension: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bank Central Bank Trans Type Cur Ru.
   * @nullable
   */
  declare bankCentralBankTransTypeCurRu?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Price.
   */
  declare price: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vat Tax Agent Vend Account Ru.
   * @nullable
   */
  declare vatTaxAgentVendAccountRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Reconcile Account At Post.
   * @nullable
   */
  declare bankReconcileAccountAtPost?: NoYes | null;
  /**
   * Cash Receipt Num Lv.
   * @nullable
   */
  declare cashReceiptNumLv?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Purpose Lt.
   * @nullable
   */
  declare paymPurposeLt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Release Date.
   */
  declare invoiceReleaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Marked Invoice Company.
   * @nullable
   */
  declare markedInvoiceCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invisible.
   * @nullable
   */
  declare invisible?: NoYes | null;
  /**
   * Ledger Dimension Name.
   * @nullable
   */
  declare ledgerDimensionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transferred On.
   */
  declare transferredOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Provisional Assessment In.
   * @nullable
   */
  declare provisionalAssessmentIn?: NoYes | null;
  /**
   * Exch Rate Second.
   */
  declare exchRateSecond: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Electronic Payment Number.
   * @nullable
   */
  declare electronicPaymentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rev Rec Id.
   */
  declare revRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bank Central Bank Purpose Text.
   * @nullable
   */
  declare bankCentralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Agreement Id Ru.
   * @nullable
   */
  declare accountAgreementIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account Id.
   * @nullable
   */
  declare bankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Base W.
   */
  declare taxBaseW: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Withhold Item Group Heading Th.
   */
  declare taxWithholdItemGroupHeadingTh: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Acknowledgement Date.
   */
  declare acknowledgementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transferred To.
   * @nullable
   */
  declare transferredTo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Withhold Group.
   * @nullable
   */
  declare taxWithholdGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Release Date Comment.
   * @nullable
   */
  declare releaseDateComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Vend Account Id Ru.
   * @nullable
   */
  declare bankVendAccountIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Vend Account Pl.
   * @nullable
   */
  declare custVendAccountPl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Einvoice Paym Section Num.
   */
  declare custEinvoicePaymSectionNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Mcrcc General Ledger Id.
   * @nullable
   */
  declare mcrccGeneralLedgerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Instruction 4.
   */
  declare paymInstruction4: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reverse Date.
   */
  declare reverseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Offset Txt.
   * @nullable
   */
  declare offsetTxt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attachments Cn.
   */
  declare attachmentsCn: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Order Id.
   * @nullable
   */
  declare salesOrderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Central Bank Purpose Code.
   * @nullable
   */
  declare bankCentralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Disc Base Date.
   */
  declare cashDiscBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vat Operation Code Ru.
   * @nullable
   */
  declare vatOperationCodeRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Journal Dlv Date Es.
   */
  declare ledgerJournalDlvDateEs: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Approved.
   * @nullable
   */
  declare approved?: NoYes | null;
  /**
   * Budget Source Ledger Entry Unposted.
   */
  declare budgetSourceLedgerEntryUnposted: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Freq Value.
   */
  declare freqValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Loading Date.
   */
  declare loadingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Error Code Payment.
   * @nullable
   */
  declare errorCodePayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inform By Phone Lt.
   * @nullable
   */
  declare informByPhoneLt?: NoYes | null;
  /**
   * Bank Spec Account Id Ru.
   * @nullable
   */
  declare bankSpecAccountIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Due Date W.
   */
  declare vatDueDateW: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cust Bank Account.
   */
  declare custBankAccount: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cust Facture Auto Create Ru.
   * @nullable
   */
  declare custFactureAutoCreateRu?: NoYes | null;
  /**
   * Cust Vend Name Pl.
   * @nullable
   */
  declare custVendNamePl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Sched.
   * @nullable
   */
  declare paymSched?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: LedgerTransType | null;
  /**
   * Bank Trans Summarization Id.
   * @nullable
   */
  declare bankTransSummarizationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Payment Registration Num Lv.
   * @nullable
   */
  declare bankPaymentRegistrationNumLv?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Bank Cheque Num.
   * @nullable
   */
  declare bankChequeNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Off Session Id Ru.
   * @nullable
   */
  declare offSessionIdRu?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LedgerJournalTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerJournalTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  tax1099State?: DeserializedType<T, 'Edm.String'> | null;
  paymentNotes?: DeserializedType<T, 'Edm.String'> | null;
  tax1099Fields: DeserializedType<T, 'Edm.Int64'>;
  rCashDocRepresType?: RCashDocRepresType | null;
  agreementCompanyRu?: DeserializedType<T, 'Edm.String'> | null;
  refCopyReverseCn: DeserializedType<T, 'Edm.Int64'>;
  addressingPl?: DeserializedType<T, 'Edm.String'> | null;
  custEinvoicePaymTransNum: DeserializedType<T, 'Edm.Int32'>;
  intentLetterIdIt?: DeserializedType<T, 'Edm.String'> | null;
  remittanceLocation: DeserializedType<T, 'Edm.Int64'>;
  packedExtensions?: DeserializedType<T, 'Edm.Binary'> | null;
  rCashPayTransType?: RCashPayLedgerTransType | null;
  cashDiscCode?: DeserializedType<T, 'Edm.String'> | null;
  bankClientDocumentTypeIdRu?: DeserializedType<T, 'Edm.String'> | null;
  listcode?: Listcode | null;
  debitCurrencyCodeLt?: DeserializedType<T, 'Edm.String'> | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  offsetAgreementCompanyRu?: DeserializedType<T, 'Edm.String'> | null;
  reasonRefRecId: DeserializedType<T, 'Edm.Int64'>;
  accountType?: LedgerJournalAcType | null;
  offsetPostingProfileRu?: DeserializedType<T, 'Edm.String'> | null;
  bankCurrencyTransferLogRu: DeserializedType<T, 'Edm.Int64'>;
  transferCurrencyRu?: DeserializedType<T, 'Edm.String'> | null;
  vendBankAccount: DeserializedType<T, 'Edm.Int64'>;
  offsetLedgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  paymReference?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  fbSpedEcfDerexClasificationCodeBr: DeserializedType<T, 'Edm.Int64'>;
  importDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  offsetCompany?: DeserializedType<T, 'Edm.String'> | null;
  vatPaymRefRecIdRu: DeserializedType<T, 'Edm.Int64'>;
  bankBillOfExchangeNum?: DeserializedType<T, 'Edm.String'> | null;
  taxPeriodPaymentCodePl?: DeserializedType<T, 'Edm.String'> | null;
  operationTypeMx?: VendorOperationTypeMx | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  amountCurDebit: DeserializedType<T, 'Edm.Decimal'>;
  skipBlockedForManualEntryCheck?: NoYes | null;
  invoice?: DeserializedType<T, 'Edm.String'> | null;
  tax1099RecId: DeserializedType<T, 'Edm.Int64'>;
  mcrRefPaymId: DeserializedType<T, 'Edm.Int64'>;
  due: DeserializedType<T, 'Edm.DateTimeOffset'>;
  bankPromissoryNoteNum?: DeserializedType<T, 'Edm.String'> | null;
  paymInstruction2: DeserializedType<T, 'Edm.Int64'>;
  bankCommAccountIdRu?: DeserializedType<T, 'Edm.String'> | null;
  cancel?: NoYes | null;
  invoiceSeriesMx?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxWithholdCalculateTh?: NoYes | null;
  negInstId?: DeserializedType<T, 'Edm.String'> | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  delayTaxCalculation?: NoYes | null;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  prepayment?: NoYes | null;
  paymInstruction3: DeserializedType<T, 'Edm.Int64'>;
  correctionTypeRu?: FactureCorrectionTypeRu | null;
  lastTransferred: DeserializedType<T, 'Edm.DateTimeOffset'>;
  correctedInvoiceIdRu?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountType?: DeserializedType<T, 'Edm.Binary'> | null;
  paymSpec?: DeserializedType<T, 'Edm.String'> | null;
  bankTransType?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddress: DeserializedType<T, 'Edm.Int64'>;
  noEdit?: NoYes | null;
  gsthstTaxTypeCa?: GsthstTaxTypeCa | null;
  foreignCompany?: DeserializedType<T, 'Edm.String'> | null;
  cfdiuuidMx?: DeserializedType<T, 'Edm.String'> | null;
  finTag: DeserializedType<T, 'Edm.Int64'>;
  remitteeCurrency?: DeserializedType<T, 'Edm.String'> | null;
  offsetAccountAgreementIdRu?: DeserializedType<T, 'Edm.String'> | null;
  transferredBy?: DeserializedType<T, 'Edm.String'> | null;
  markedInvoice?: DeserializedType<T, 'Edm.String'> | null;
  ledgerVoucherTypeCn: DeserializedType<T, 'Edm.Int64'>;
  offsetFinTag: DeserializedType<T, 'Edm.Int64'>;
  bankCurrency?: DeserializedType<T, 'Edm.String'> | null;
  offsetAccountType?: LedgerJournalAcType | null;
  foreignVoucher?: DeserializedType<T, 'Edm.String'> | null;
  euSalesList?: DeserializedType<T, 'Edm.String'> | null;
  announcementNumRu?: DeserializedType<T, 'Edm.String'> | null;
  reverseEntry?: NoYes | null;
  bankCurrencyDealCourseRu: DeserializedType<T, 'Edm.Decimal'>;
  furtherPostingType?: NoYes | null;
  approver: DeserializedType<T, 'Edm.Int64'>;
  dateCashDisc: DeserializedType<T, 'Edm.DateTimeOffset'>;
  markupCodeRu?: DeserializedType<T, 'Edm.String'> | null;
  bankCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  custVendNegInstProtestReason?: CustVendNegInstProtestReason | null;
  fileCreated: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendInvoiceDeclarationIs: DeserializedType<T, 'Edm.Int64'>;
  purchLedgerPosting?: ArrivalPostingType | null;
  purchIdRange?: DeserializedType<T, 'Edm.String'> | null;
  rCashDocRepresPersonId?: DeserializedType<T, 'Edm.String'> | null;
  plafondDateIt: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  useOriginalDocumentAsFactureRu?: NoYes | null;
  bankRemittanceType?: BankRemittanceType | null;
  bankDepositVoucher?: NoYes | null;
  cashDiscBaseDays: DeserializedType<T, 'Edm.Int32'>;
  paymentStatus?: CustVendPaymStatus | null;
  tax1099Amount: DeserializedType<T, 'Edm.Decimal'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  correctedInvoiceDateRu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  directDebitMandate: DeserializedType<T, 'Edm.Int64'>;
  transfer?: NoYes | null;
  releaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  ledgerDimension: DeserializedType<T, 'Edm.Int64'>;
  documentNum?: DeserializedType<T, 'Edm.String'> | null;
  custEinvoicePaymDeliveryNum: DeserializedType<T, 'Edm.Int32'>;
  mcrPaymOrderId?: DeserializedType<T, 'Edm.String'> | null;
  vendTransId: DeserializedType<T, 'Edm.Int64'>;
  payment?: DeserializedType<T, 'Edm.String'> | null;
  intBankLv?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscPercent: DeserializedType<T, 'Edm.Decimal'>;
  reportingCurrencyExchRateSecondary: DeserializedType<T, 'Edm.Decimal'>;
  represPersonCardW?: DeserializedType<T, 'Edm.String'> | null;
  freqCode?: PeriodUnit | null;
  amountCurCredit: DeserializedType<T, 'Edm.Decimal'>;
  taxWithholdAlternateVendorAcctTh?: DeserializedType<T, 'Edm.String'> | null;
  bankDepositNum?: DeserializedType<T, 'Edm.String'> | null;
  vendorVatDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  bankChequeDepositTransRefRecId: DeserializedType<T, 'Edm.Int64'>;
  custTransId: DeserializedType<T, 'Edm.Int64'>;
  exchRate: DeserializedType<T, 'Edm.Decimal'>;
  vatNumJournal?: DeserializedType<T, 'Edm.String'> | null;
  intraComVatDueDateW?: NoYes | null;
  correctRu?: NoYes | null;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  paymInstruction1: DeserializedType<T, 'Edm.Int64'>;
  remainAmount: DeserializedType<T, 'Edm.Decimal'>;
  mcrPrintTxtOnCheck?: NoYes | null;
  poolRecId: DeserializedType<T, 'Edm.Int64'>;
  reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  bankNegInstRecipientName?: DeserializedType<T, 'Edm.String'> | null;
  taxDirectionControl?: NoYes | null;
  taxCode?: DeserializedType<T, 'Edm.String'> | null;
  vatOnPaymentRu?: NoYes | null;
  triangulation?: NoYes | null;
  furtherPostingRecId: DeserializedType<T, 'Edm.Int64'>;
  paymentAccount?: DeserializedType<T, 'Edm.String'> | null;
  paymMode?: DeserializedType<T, 'Edm.String'> | null;
  custVendBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  paymId?: DeserializedType<T, 'Edm.String'> | null;
  ledgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  markedInvoiceRecId: DeserializedType<T, 'Edm.Int64'>;
  cashDiscAmount: DeserializedType<T, 'Edm.Decimal'>;
  settleVoucher?: SettlementType | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  receiptDateW: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendPaymFeeGroupJp?: DeserializedType<T, 'Edm.String'> | null;
  transferred?: NoYes | null;
  represPersonNameW?: DeserializedType<T, 'Edm.String'> | null;
  commProfileTypeRu?: CommProfileTypeRu | null;
  bankAgreementExtRu: DeserializedType<T, 'Edm.Int64'>;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  bankPrintAccountNumRu?: DeserializedType<T, 'Edm.String'> | null;
  journalNum?: DeserializedType<T, 'Edm.String'> | null;
  voucherCn?: DeserializedType<T, 'Edm.String'> | null;
  txt?: DeserializedType<T, 'Edm.String'> | null;
  enterpriseNumber?: DeserializedType<T, 'Edm.String'> | null;
  informByTelexLt?: NoYes | null;
  tax1099StateAmount: DeserializedType<T, 'Edm.Decimal'>;
  bankRespWorkerIdRu: DeserializedType<T, 'Edm.Int64'>;
  bankRemittanceFileId?: DeserializedType<T, 'Edm.String'> | null;
  paymentSequenceNum: DeserializedType<T, 'Edm.Int32'>;
  creditCardAuthTransRefId: DeserializedType<T, 'Edm.Int64'>;
  offsetLedgerDimension: DeserializedType<T, 'Edm.Int64'>;
  bankCentralBankTransTypeCurRu?: DeserializedType<T, 'Edm.String'> | null;
  price: DeserializedType<T, 'Edm.Decimal'>;
  vatTaxAgentVendAccountRu?: DeserializedType<T, 'Edm.String'> | null;
  bankReconcileAccountAtPost?: NoYes | null;
  cashReceiptNumLv?: DeserializedType<T, 'Edm.String'> | null;
  paymPurposeLt?: DeserializedType<T, 'Edm.String'> | null;
  invoiceReleaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  markedInvoiceCompany?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invisible?: NoYes | null;
  ledgerDimensionName?: DeserializedType<T, 'Edm.String'> | null;
  transferredOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  provisionalAssessmentIn?: NoYes | null;
  exchRateSecond: DeserializedType<T, 'Edm.Decimal'>;
  electronicPaymentNumber?: DeserializedType<T, 'Edm.String'> | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  revRecId: DeserializedType<T, 'Edm.Int64'>;
  bankCentralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  accountAgreementIdRu?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  taxBaseW: DeserializedType<T, 'Edm.Decimal'>;
  taxWithholdItemGroupHeadingTh: DeserializedType<T, 'Edm.Int64'>;
  acknowledgementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transferredTo?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdGroup?: DeserializedType<T, 'Edm.String'> | null;
  releaseDateComment?: DeserializedType<T, 'Edm.String'> | null;
  bankVendAccountIdRu?: DeserializedType<T, 'Edm.String'> | null;
  custVendAccountPl?: DeserializedType<T, 'Edm.String'> | null;
  custEinvoicePaymSectionNum: DeserializedType<T, 'Edm.Int32'>;
  mcrccGeneralLedgerId?: DeserializedType<T, 'Edm.String'> | null;
  paymInstruction4: DeserializedType<T, 'Edm.Int64'>;
  reverseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  offsetTxt?: DeserializedType<T, 'Edm.String'> | null;
  attachmentsCn: DeserializedType<T, 'Edm.Int32'>;
  salesOrderId?: DeserializedType<T, 'Edm.String'> | null;
  bankCentralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vatOperationCodeRu?: DeserializedType<T, 'Edm.String'> | null;
  ledgerJournalDlvDateEs: DeserializedType<T, 'Edm.DateTimeOffset'>;
  approved?: NoYes | null;
  budgetSourceLedgerEntryUnposted: DeserializedType<T, 'Edm.Int64'>;
  freqValue: DeserializedType<T, 'Edm.Int32'>;
  loadingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  errorCodePayment?: DeserializedType<T, 'Edm.String'> | null;
  informByPhoneLt?: NoYes | null;
  bankSpecAccountIdRu?: DeserializedType<T, 'Edm.String'> | null;
  vatDueDateW: DeserializedType<T, 'Edm.DateTimeOffset'>;
  custBankAccount: DeserializedType<T, 'Edm.Int64'>;
  custFactureAutoCreateRu?: NoYes | null;
  custVendNamePl?: DeserializedType<T, 'Edm.String'> | null;
  paymSched?: DeserializedType<T, 'Edm.String'> | null;
  transactionType?: LedgerTransType | null;
  bankTransSummarizationId?: DeserializedType<T, 'Edm.String'> | null;
  bankPaymentRegistrationNumLv?: DeserializedType<T, 'Edm.String'> | null;
  bankChequeNum?: DeserializedType<T, 'Edm.String'> | null;
  offSessionIdRu?: DeserializedType<T, 'Edm.String'> | null;
}
