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
import type { BankAccountTransBiEntitiesApi } from './BankAccountTransBiEntitiesApi';
import { NoYes } from './NoYes';
import { LedgerTransType } from './LedgerTransType';

/**
 * This class represents the entity "BankAccountTransBiEntities" of service "d365_metadata".
 */
export class BankAccountTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BankAccountTransBiEntitiesType<T>
{
  /**
   * Technical entity name for BankAccountTransBiEntities.
   */
  static override _entityName = 'BankAccountTransBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankAccountTransBiEntities entity.
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
   * Manual.
   * @nullable
   */
  declare manual?: NoYes | null;
  /**
   * Ledger Trans Type.
   * @nullable
   */
  declare ledgerTransType?: LedgerTransType | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Txt.
   * @nullable
   */
  declare txt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Correct.
   */
  declare amountCorrect: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reporting Currency Amount Correct Ru.
   */
  declare reportingCurrencyAmountCorrectRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reconciled.
   * @nullable
   */
  declare reconciled?: NoYes | null;
  /**
   * Reporting Currency Amount Ru.
   */
  declare reportingCurrencyAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Account Statement.
   * @nullable
   */
  declare accountStatement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Trans Currency Code.
   * @nullable
   */
  declare bankTransCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Central Bank Purpose Code Lv.
   * @nullable
   */
  declare centralBankPurposeCodeLv?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Summarization.
   * @nullable
   */
  declare isSummarization?: NoYes | null;
  /**
   * Amount Mst.
   */
  declare amountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cancel Pending.
   * @nullable
   */
  declare cancelPending?: NoYes | null;
  /**
   * Deposit Num.
   * @nullable
   */
  declare depositNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Ref Rec Id.
   */
  declare reasonRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Table Id.
   */
  declare sourceTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Amount Cur.
   */
  declare amountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Included.
   * @nullable
   */
  declare included?: NoYes | null;
  /**
   * Bank Payment Registration Num Lv.
   * @nullable
   */
  declare bankPaymentRegistrationNumLv?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Summarization Id.
   * @nullable
   */
  declare summarizationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Reporting Currency.
   */
  declare amountReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Correspondent Country Lv.
   * @nullable
   */
  declare correspondentCountryLv?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Rec Id Ru.
   */
  declare refRecIdRu: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cancel.
   * @nullable
   */
  declare cancel?: NoYes | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Payment Mode.
   * @nullable
   */
  declare paymentMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Trans Type.
   * @nullable
   */
  declare bankTransType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Currency Amount Correct Ru.
   */
  declare accountingCurrencyAmountCorrectRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Central Bank Purpose Text Lv.
   * @nullable
   */
  declare centralBankPurposeTextLv?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cleared Date.
   */
  declare clearedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cheque Num.
   * @nullable
   */
  declare chequeNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Bank Trans Amount Cur.
   */
  declare bankTransAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Account Statement Date.
   */
  declare accountStatementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source Rec Id.
   */
  declare sourceRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Account Id.
   * @nullable
   */
  declare accountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Acknowledgement Date.
   */
  declare acknowledgementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Reference.
   * @nullable
   */
  declare paymReference?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BankAccountTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface BankAccountTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  manual?: NoYes | null;
  ledgerTransType?: LedgerTransType | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  txt?: DeserializedType<T, 'Edm.String'> | null;
  amountCorrect: DeserializedType<T, 'Edm.Decimal'>;
  reportingCurrencyAmountCorrectRu: DeserializedType<T, 'Edm.Decimal'>;
  reconciled?: NoYes | null;
  reportingCurrencyAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  accountStatement?: DeserializedType<T, 'Edm.String'> | null;
  bankTransCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  centralBankPurposeCodeLv?: DeserializedType<T, 'Edm.String'> | null;
  isSummarization?: NoYes | null;
  amountMst: DeserializedType<T, 'Edm.Decimal'>;
  cancelPending?: NoYes | null;
  depositNum?: DeserializedType<T, 'Edm.String'> | null;
  reasonRefRecId: DeserializedType<T, 'Edm.Int64'>;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  sourceTableId: DeserializedType<T, 'Edm.Int32'>;
  amountCur: DeserializedType<T, 'Edm.Decimal'>;
  included?: NoYes | null;
  bankPaymentRegistrationNumLv?: DeserializedType<T, 'Edm.String'> | null;
  summarizationId?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  amountReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  correspondentCountryLv?: DeserializedType<T, 'Edm.String'> | null;
  refRecIdRu: DeserializedType<T, 'Edm.Int64'>;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  cancel?: NoYes | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  paymentMode?: DeserializedType<T, 'Edm.String'> | null;
  bankTransType?: DeserializedType<T, 'Edm.String'> | null;
  accountingCurrencyAmountCorrectRu: DeserializedType<T, 'Edm.Decimal'>;
  centralBankPurposeTextLv?: DeserializedType<T, 'Edm.String'> | null;
  clearedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  chequeNum?: DeserializedType<T, 'Edm.String'> | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  bankTransAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  accountStatementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceRecId: DeserializedType<T, 'Edm.Int64'>;
  accountId?: DeserializedType<T, 'Edm.String'> | null;
  acknowledgementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  paymReference?: DeserializedType<T, 'Edm.String'> | null;
}
