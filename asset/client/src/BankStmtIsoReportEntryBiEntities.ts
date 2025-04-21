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
import type { BankStmtIsoReportEntryBiEntitiesApi } from './BankStmtIsoReportEntryBiEntitiesApi';
import { NoYes } from './NoYes';
import { DebitCredit } from './DebitCredit';
import { BankStatementLineStatus } from './BankStatementLineStatus';
import { BankPaymentType } from './BankPaymentType';

/**
 * This class represents the entity "BankStmtISOReportEntryBiEntities" of service "d365_metadata".
 */
export class BankStmtIsoReportEntryBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BankStmtIsoReportEntryBiEntitiesType<T>
{
  /**
   * Technical entity name for BankStmtIsoReportEntryBiEntities.
   */
  static override _entityName = 'BankStmtISOReportEntryBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankStmtIsoReportEntryBiEntities entity.
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
   * Creditor Reference Information.
   * @nullable
   */
  declare creditorReferenceInformation?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Additional Entry Information.
   * @nullable
   */
  declare additionalEntryInformation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Statement Counter Currency.
   * @nullable
   */
  declare bankStatementCounterCurrency?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Parent Bank Stmt Iso Report Entry.
   */
  declare parentBankStmtIsoReportEntry: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bank Document Number.
   * @nullable
   */
  declare bankDocumentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is New Bank Document.
   * @nullable
   */
  declare isNewBankDocument?: NoYes | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reference Number.
   * @nullable
   */
  declare referenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Stmt Iso Account Statement.
   */
  declare bankStmtIsoAccountStatement: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Amount Credit Debit Indicator.
   * @nullable
   */
  declare amountCreditDebitIndicator?: DebitCredit | null;
  /**
   * Reconciled.
   * @nullable
   */
  declare reconciled?: NoYes | null;
  /**
   * Related Bank Name.
   * @nullable
   */
  declare relatedBankName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Interest Rate.
   */
  declare interestRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reversal Indicator.
   * @nullable
   */
  declare reversalIndicator?: NoYes | null;
  /**
   * Tax Id.
   * @nullable
   */
  declare taxId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Amount.
   */
  declare taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Trading Party.
   */
  declare tradingParty: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Entry Reference.
   * @nullable
   */
  declare entryReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Origin Source Document Line.
   */
  declare originSourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bank Statement Instructed Currency Amt.
   */
  declare bankStatementInstructedCurrencyAmt: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Bank Statement Counter Currency Amount.
   */
  declare bankStatementCounterCurrencyAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Bank Statement Counter Exchange Rate.
   */
  declare bankStatementCounterExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Statement Line Status.
   * @nullable
   */
  declare bankStatementLineStatus?: BankStatementLineStatus | null;
  /**
   * Charge Rate.
   */
  declare chargeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Related Bank Account.
   * @nullable
   */
  declare relatedBankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proprietary Bank Transaction Code.
   * @nullable
   */
  declare proprietaryBankTransactionCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Bank Statement Instructed Exchange Rate.
   */
  declare bankStatementInstructedExchangeRate: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Rate.
   */
  declare taxRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Booking Date Time.
   */
  declare bookingDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Bank Payment Type.
   * @nullable
   */
  declare bankPaymentType?: BankPaymentType | null;
  /**
   * Bank Statement Instructed Currency.
   * @nullable
   */
  declare bankStatementInstructedCurrency?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Account Servicer Reference.
   * @nullable
   */
  declare accountServicerReference?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BankStmtIsoReportEntryBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface BankStmtIsoReportEntryBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  creditorReferenceInformation?: DeserializedType<T, 'Edm.String'> | null;
  additionalEntryInformation?: DeserializedType<T, 'Edm.String'> | null;
  bankStatementCounterCurrency?: DeserializedType<T, 'Edm.String'> | null;
  parentBankStmtIsoReportEntry: DeserializedType<T, 'Edm.Int64'>;
  bankDocumentNumber?: DeserializedType<T, 'Edm.String'> | null;
  isNewBankDocument?: NoYes | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  referenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  bankStmtIsoAccountStatement: DeserializedType<T, 'Edm.Int64'>;
  amountCreditDebitIndicator?: DebitCredit | null;
  reconciled?: NoYes | null;
  relatedBankName?: DeserializedType<T, 'Edm.String'> | null;
  interestRate: DeserializedType<T, 'Edm.Decimal'>;
  reversalIndicator?: NoYes | null;
  taxId?: DeserializedType<T, 'Edm.String'> | null;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  tradingParty: DeserializedType<T, 'Edm.Int64'>;
  entryReference?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  originSourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  bankStatementInstructedCurrencyAmt: DeserializedType<T, 'Edm.Decimal'>;
  bankStatementCounterCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  bankStatementCounterExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  bankStatementLineStatus?: BankStatementLineStatus | null;
  chargeRate: DeserializedType<T, 'Edm.Decimal'>;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  relatedBankAccount?: DeserializedType<T, 'Edm.String'> | null;
  proprietaryBankTransactionCode?: DeserializedType<T, 'Edm.String'> | null;
  bankStatementInstructedExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  taxRate: DeserializedType<T, 'Edm.Decimal'>;
  bookingDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  bankPaymentType?: BankPaymentType | null;
  bankStatementInstructedCurrency?: DeserializedType<T, 'Edm.String'> | null;
  accountServicerReference?: DeserializedType<T, 'Edm.String'> | null;
}
