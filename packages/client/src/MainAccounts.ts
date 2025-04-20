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
import type { MainAccountsApi } from './MainAccountsApi';
import { NoYes } from './NoYes';
import { DebCredProposal } from './DebCredProposal';
import { RepomoTypeMx } from './RepomoTypeMx';
import { DimensionLedgerAccountType } from './DimensionLedgerAccountType';
import { FieldControl } from './FieldControl';
import { DimensionLedgerAccountReportingType } from './DimensionLedgerAccountReportingType';
import { LedgerClosing } from './LedgerClosing';
import { FinancialReportingTranslationType } from './FinancialReportingTranslationType';
import { LedgerPostingType } from './LedgerPostingType';
import { AdjustmentMethodMx } from './AdjustmentMethodMx';
import { BalanceControls, BalanceControlsType } from './BalanceControls';
import {
  AccountTranslations,
  AccountTranslationsType
} from './AccountTranslations';
import {
  LedgerTransSettlementAccounts,
  LedgerTransSettlementAccountsType
} from './LedgerTransSettlementAccounts';
import {
  ConsolidateAccountGroups,
  ConsolidateAccountGroupsType
} from './ConsolidateAccountGroups';
import { ExchangeRateTypes, ExchangeRateTypesType } from './ExchangeRateTypes';
import { Currencies, CurrenciesType } from './Currencies';
import {
  MainAccountTotalAccountIntervals,
  MainAccountTotalAccountIntervalsType
} from './MainAccountTotalAccountIntervals';

/**
 * This class represents the entity "MainAccounts" of service "d365_metadata".
 */
export class MainAccounts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MainAccountsType<T>
{
  /**
   * Technical entity name for MainAccounts.
   */
  static override _entityName = 'MainAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MainAccounts entity.
   */
  static _keys = ['ChartOfAccounts', 'MainAccountId'];
  /**
   * Chart Of Accounts.
   */
  declare chartOfAccounts: DeserializedType<T, 'Edm.String'>;
  /**
   * Main Account Id.
   */
  declare mainAccountId: DeserializedType<T, 'Edm.String'>;
  /**
   * Active From.
   */
  declare activeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Account Category Description.
   * @nullable
   */
  declare accountCategoryDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Foreign Currency Revaluation.
   * @nullable
   */
  declare foreignCurrencyRevaluation?: NoYes | null;
  /**
   * Balance Control.
   * @nullable
   */
  declare balanceControl?: DebCredProposal | null;
  /**
   * Debit Credit Requirement.
   * @nullable
   */
  declare debitCreditRequirement?: DebCredProposal | null;
  /**
   * User.
   * @nullable
   */
  declare user?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account Rec Id.
   */
  declare mainAccountRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Do Not Allow Manual Entry.
   * @nullable
   */
  declare doNotAllowManualEntry?: NoYes | null;
  /**
   * Repomo Type.
   * @nullable
   */
  declare repomoType?: RepomoTypeMx | null;
  /**
   * Main Account Type.
   * @nullable
   */
  declare mainAccountType?: DimensionLedgerAccountType | null;
  /**
   * Validate User.
   * @nullable
   */
  declare validateUser?: FieldControl | null;
  /**
   * Financial Reporting Exchange Rate Type.
   * @nullable
   */
  declare financialReportingExchangeRateType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Offset Account Display Value.
   * @nullable
   */
  declare offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Account Type.
   * @nullable
   */
  declare reportingAccountType?: DimensionLedgerAccountReportingType | null;
  /**
   * Main Account Category.
   * @nullable
   */
  declare mainAccountCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Chart Of Accounts Rec Id.
   */
  declare chartOfAccountsRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Opening Account Id.
   * @nullable
   */
  declare openingAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Suspended.
   * @nullable
   */
  declare isSuspended?: NoYes | null;
  /**
   * Active To.
   */
  declare activeTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Inflation Adjustment.
   * @nullable
   */
  declare inflationAdjustment?: NoYes | null;
  /**
   * Closing.
   * @nullable
   */
  declare closing?: LedgerClosing | null;
  /**
   * Validate Currency.
   * @nullable
   */
  declare validateCurrency?: FieldControl | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sru Code.
   * @nullable
   */
  declare sruCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Debit Credit Default.
   * @nullable
   */
  declare debitCreditDefault?: DebCredProposal | null;
  /**
   * Exchange Adjustment Rate Type.
   * @nullable
   */
  declare exchangeAdjustmentRateType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Financial Reporting Currency Translation Type.
   * @nullable
   */
  declare financialReportingCurrencyTranslationType?: FinancialReportingTranslationType | null;
  /**
   * Default Currency.
   * @nullable
   */
  declare defaultCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Consolidation Account.
   * @nullable
   */
  declare defaultConsolidationAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Mandatory Payment Reference.
   * @nullable
   */
  declare mandatoryPaymentReference?: NoYes | null;
  /**
   * Posting Type.
   * @nullable
   */
  declare postingType?: LedgerPostingType | null;
  /**
   * Reporting Exchange Adjustment Rate Type.
   * @nullable
   */
  declare reportingExchangeAdjustmentRateType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Parent Main Account Id.
   * @nullable
   */
  declare parentMainAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Adjustment Method.
   * @nullable
   */
  declare adjustmentMethod?: AdjustmentMethodMx | null;
  /**
   * Monetary.
   * @nullable
   */
  declare monetary?: NoYes | null;
  /**
   * Validate Posting Type.
   * @nullable
   */
  declare validatePostingType?: FieldControl | null;
  /**
   * One-to-many navigation property to the {@link BalanceControls} entity.
   */
  declare ledgerBalanceControlMainAccountRole: BalanceControls<T>[];
  /**
   * One-to-many navigation property to the {@link AccountTranslations} entity.
   */
  declare mainAccountEntityRole: AccountTranslations<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerTransSettlementAccounts} entity.
   */
  declare ledgerTransSettlementAccountsMainAccountEntityRole: LedgerTransSettlementAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link ConsolidateAccountGroups} entity.
   */
  declare consolidationMainAccountEntityRole2: ConsolidateAccountGroups<T>[];
  /**
   * One-to-many navigation property to the {@link ConsolidateAccountGroups} entity.
   */
  declare mainAccountEntityRole2: ConsolidateAccountGroups<T>[];
  /**
   * One-to-one navigation property to the {@link ExchangeRateTypes} entity.
   */
  declare mainAccountExchangeAdjustmentRateType?: ExchangeRateTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;
  /**
   * One-to-many navigation property to the {@link MainAccountTotalAccountIntervals} entity.
   */
  declare totalAccountMainAccountEntityRole: MainAccountTotalAccountIntervals<T>[];

  constructor(_entityApi: MainAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface MainAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  chartOfAccounts: DeserializedType<T, 'Edm.String'>;
  mainAccountId: DeserializedType<T, 'Edm.String'>;
  activeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  accountCategoryDescription?: DeserializedType<T, 'Edm.String'> | null;
  foreignCurrencyRevaluation?: NoYes | null;
  balanceControl?: DebCredProposal | null;
  debitCreditRequirement?: DebCredProposal | null;
  user?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountRecId: DeserializedType<T, 'Edm.Int64'>;
  doNotAllowManualEntry?: NoYes | null;
  repomoType?: RepomoTypeMx | null;
  mainAccountType?: DimensionLedgerAccountType | null;
  validateUser?: FieldControl | null;
  financialReportingExchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  reportingAccountType?: DimensionLedgerAccountReportingType | null;
  mainAccountCategory?: DeserializedType<T, 'Edm.String'> | null;
  chartOfAccountsRecId: DeserializedType<T, 'Edm.Int64'>;
  openingAccountId?: DeserializedType<T, 'Edm.String'> | null;
  isSuspended?: NoYes | null;
  activeTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inflationAdjustment?: NoYes | null;
  closing?: LedgerClosing | null;
  validateCurrency?: FieldControl | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  sruCode?: DeserializedType<T, 'Edm.String'> | null;
  debitCreditDefault?: DebCredProposal | null;
  exchangeAdjustmentRateType?: DeserializedType<T, 'Edm.String'> | null;
  financialReportingCurrencyTranslationType?: FinancialReportingTranslationType | null;
  defaultCurrency?: DeserializedType<T, 'Edm.String'> | null;
  defaultConsolidationAccount?: DeserializedType<T, 'Edm.String'> | null;
  mandatoryPaymentReference?: NoYes | null;
  postingType?: LedgerPostingType | null;
  reportingExchangeAdjustmentRateType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  parentMainAccountId?: DeserializedType<T, 'Edm.String'> | null;
  adjustmentMethod?: AdjustmentMethodMx | null;
  monetary?: NoYes | null;
  validatePostingType?: FieldControl | null;
  ledgerBalanceControlMainAccountRole: BalanceControlsType<T>[];
  mainAccountEntityRole: AccountTranslationsType<T>[];
  ledgerTransSettlementAccountsMainAccountEntityRole: LedgerTransSettlementAccountsType<T>[];
  consolidationMainAccountEntityRole2: ConsolidateAccountGroupsType<T>[];
  mainAccountEntityRole2: ConsolidateAccountGroupsType<T>[];
  mainAccountExchangeAdjustmentRateType?: ExchangeRateTypesType<T> | null;
  currency?: CurrenciesType<T> | null;
  totalAccountMainAccountEntityRole: MainAccountTotalAccountIntervalsType<T>[];
}
