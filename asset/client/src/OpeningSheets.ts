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
import type { OpeningSheetsApi } from './OpeningSheetsApi';
import { NoYes } from './NoYes';
import { FiscalPeriodType } from './FiscalPeriodType';
import { DimensionLedgerAccountType } from './DimensionLedgerAccountType';
import { CurrentOperationsTax } from './CurrentOperationsTax';

/**
 * This class represents the entity "OpeningSheets" of service "d365_metadata".
 */
export class OpeningSheets<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements OpeningSheetsType<T>
{
  /**
   * Technical entity name for OpeningSheets.
   */
  static override _entityName = 'OpeningSheets';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OpeningSheets entity.
   */
  static _keys = [
    'dataAreaId',
    'Sheet',
    'LedgerOpeningTableMainAccountIdDisplayValue',
    'LedgerOpeningTableChartOfAccountsName',
    'LineNum'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sheet.
   */
  declare sheet: DeserializedType<T, 'Edm.String'>;
  /**
   * Ledger Opening Table Main Account Id Display Value.
   */
  declare ledgerOpeningTableMainAccountIdDisplayValue: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Ledger Opening Table Chart Of Accounts Name.
   */
  declare ledgerOpeningTableChartOfAccountsName: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Txt.
   * @nullable
   */
  declare txt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sum Balance.
   */
  declare sumBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Balance.
   */
  declare balance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ledger Opening Trans Main Account Main Account Id Display Value.
   * @nullable
   */
  declare ledgerOpeningTransMainAccountMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Trial Balance.
   */
  declare trialBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sum Capital.
   */
  declare sumCapital: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reconciled.
   * @nullable
   */
  declare reconciled?: NoYes | null;
  /**
   * Sum Trial Balance.
   */
  declare sumTrialBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Result.
   */
  declare result: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transfer.
   */
  declare transfer: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ledger Opening Trans Offset Account Main Account Id.
   * @nullable
   */
  declare ledgerOpeningTransOffsetAccountMainAccountId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fiscal Calendar Calendar Id.
   * @nullable
   */
  declare fiscalCalendarCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period Code.
   * @nullable
   */
  declare periodCode?: FiscalPeriodType | null;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Offset Account Display Value.
   * @nullable
   */
  declare offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Calendar Period Name.
   * @nullable
   */
  declare fiscalCalendarPeriodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: DimensionLedgerAccountType | null;
  /**
   * Sum Result.
   */
  declare sumResult: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sum Transfer.
   */
  declare sumTransfer: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Post Date.
   */
  declare postDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ledger Account Display Value.
   * @nullable
   */
  declare ledgerAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operations Tax.
   * @nullable
   */
  declare operationsTax?: CurrentOperationsTax | null;
  /**
   * Ledger Opening Trans Offset Account Chart Of Account Name.
   * @nullable
   */
  declare ledgerOpeningTransOffsetAccountChartOfAccountName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Acknowledgement Date.
   */
  declare acknowledgementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ledger Opening Trans Main Account Chart Of Account Name.
   * @nullable
   */
  declare ledgerOpeningTransMainAccountChartOfAccountName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Capital.
   */
  declare capital: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fiscal Calendar Year Name.
   * @nullable
   */
  declare fiscalCalendarYearName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Current Operations Tax.
   * @nullable
   */
  declare currentOperationsTax?: CurrentOperationsTax | null;

  constructor(_entityApi: OpeningSheetsApi<T>) {
    super(_entityApi);
  }
}

export interface OpeningSheetsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sheet: DeserializedType<T, 'Edm.String'>;
  ledgerOpeningTableMainAccountIdDisplayValue: DeserializedType<
    T,
    'Edm.String'
  >;
  ledgerOpeningTableChartOfAccountsName: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  txt?: DeserializedType<T, 'Edm.String'> | null;
  sumBalance: DeserializedType<T, 'Edm.Decimal'>;
  balance: DeserializedType<T, 'Edm.Decimal'>;
  ledgerOpeningTransMainAccountMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  trialBalance: DeserializedType<T, 'Edm.Decimal'>;
  sumCapital: DeserializedType<T, 'Edm.Decimal'>;
  reconciled?: NoYes | null;
  sumTrialBalance: DeserializedType<T, 'Edm.Decimal'>;
  result: DeserializedType<T, 'Edm.Decimal'>;
  transfer: DeserializedType<T, 'Edm.Decimal'>;
  ledgerOpeningTransOffsetAccountMainAccountId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  fiscalCalendarCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  periodCode?: FiscalPeriodType | null;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  fiscalCalendarPeriodName?: DeserializedType<T, 'Edm.String'> | null;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  accountType?: DimensionLedgerAccountType | null;
  sumResult: DeserializedType<T, 'Edm.Decimal'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  sumTransfer: DeserializedType<T, 'Edm.Decimal'>;
  postDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  ledgerAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  operationsTax?: CurrentOperationsTax | null;
  ledgerOpeningTransOffsetAccountChartOfAccountName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  acknowledgementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  ledgerOpeningTransMainAccountChartOfAccountName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  capital: DeserializedType<T, 'Edm.Decimal'>;
  fiscalCalendarYearName?: DeserializedType<T, 'Edm.String'> | null;
  currentOperationsTax?: CurrentOperationsTax | null;
}
