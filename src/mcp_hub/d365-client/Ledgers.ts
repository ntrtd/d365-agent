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
import type { LedgersApi } from './LedgersApi';
import { NoYes } from './NoYes';
import {
  BudgetControlConfigurations,
  BudgetControlConfigurationsType
} from './BudgetControlConfigurations';
import {
  CurrencyRevaluationAccounts,
  CurrencyRevaluationAccountsType
} from './CurrencyRevaluationAccounts';
import { Currencies, CurrenciesType } from './Currencies';
import {
  BudgetRegisterEntryLines,
  BudgetRegisterEntryLinesType
} from './BudgetRegisterEntryLines';
import { BudgetDimensions, BudgetDimensionsType } from './BudgetDimensions';
import {
  BudgetAllowTransferRules,
  BudgetAllowTransferRulesType
} from './BudgetAllowTransferRules';
import {
  BudgetRegisterEntries,
  BudgetRegisterEntriesType
} from './BudgetRegisterEntries';
import {
  BudgetRegisterEntryHeaders,
  BudgetRegisterEntryHeadersType
} from './BudgetRegisterEntryHeaders';

/**
 * This class represents the entity "Ledgers" of service "d365_metadata".
 */
export class Ledgers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LedgersType<T>
{
  /**
   * Technical entity name for Ledgers.
   */
  static override _entityName = 'Ledgers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Ledgers entity.
   */
  static _keys = ['LegalEntityId'];
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Structure Name 11.
   * @nullable
   */
  declare accountStructureName11?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account Id Unrealized Gain.
   * @nullable
   */
  declare mainAccountIdUnrealizedGain?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Balancing Financial Dimension.
   * @nullable
   */
  declare balancingFinancialDimension?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Main Account Id Realized Loss.
   * @nullable
   */
  declare mainAccountIdRealizedLoss?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account Id Financial Gain.
   * @nullable
   */
  declare mainAccountIdFinancialGain?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Structure Name 12.
   * @nullable
   */
  declare accountStructureName12?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account Id Financial Loss.
   * @nullable
   */
  declare mainAccountIdFinancialLoss?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Chart Of Accounts Rec Id.
   */
  declare chartOfAccountsRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Account Structure Name 17.
   * @nullable
   */
  declare accountStructureName17?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Structure Name 2.
   * @nullable
   */
  declare accountStructureName2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Structure Name 3.
   * @nullable
   */
  declare accountStructureName3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Structure Name 18.
   * @nullable
   */
  declare accountStructureName18?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Structure Name 1.
   * @nullable
   */
  declare accountStructureName1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Calendar.
   * @nullable
   */
  declare fiscalCalendar?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Structure Name 6.
   * @nullable
   */
  declare accountStructureName6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Structure Name 7.
   * @nullable
   */
  declare accountStructureName7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Exchange Rate Type.
   * @nullable
   */
  declare budgetExchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Structure Name 4.
   * @nullable
   */
  declare accountStructureName4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Structure Name 5.
   * @nullable
   */
  declare accountStructureName5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Structure Name 8.
   * @nullable
   */
  declare accountStructureName8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Budget Control Enabled.
   * @nullable
   */
  declare isBudgetControlEnabled?: NoYes | null;
  /**
   * Account Structure Name 9.
   * @nullable
   */
  declare accountStructureName9?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Chart Of Accounts.
   * @nullable
   */
  declare chartOfAccounts?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Structure Name 20.
   * @nullable
   */
  declare accountStructureName20?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Structure Name 10.
   * @nullable
   */
  declare accountStructureName10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account Id Unrealized Loss.
   * @nullable
   */
  declare mainAccountIdUnrealizedLoss?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Account Structure Name 15.
   * @nullable
   */
  declare accountStructureName15?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Structure Name 16.
   * @nullable
   */
  declare accountStructureName16?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Currency.
   * @nullable
   */
  declare accountingCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Structure Name 13.
   * @nullable
   */
  declare accountStructureName13?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Rec Id.
   */
  declare ledgerRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Account Structure Name 14.
   * @nullable
   */
  declare accountStructureName14?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate Type.
   * @nullable
   */
  declare exchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Currency Exchange Rate Type.
   * @nullable
   */
  declare reportingCurrencyExchangeRateType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Main Account Id Realized Gain.
   * @nullable
   */
  declare mainAccountIdRealizedGain?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Currency.
   * @nullable
   */
  declare reportingCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Structure Name 19.
   * @nullable
   */
  declare accountStructureName19?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link BudgetControlConfigurations} entity.
   */
  declare ledgerEntity: BudgetControlConfigurations<T>[];
  /**
   * One-to-many navigation property to the {@link CurrencyRevaluationAccounts} entity.
   */
  declare currencyRevaluationAccount: CurrencyRevaluationAccounts<T>[];
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare ledgerReportingCurrency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare ledgerAccountingCurrency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link BudgetRegisterEntryLines} entity.
   */
  declare budgetRegisterEntryLinePrimaryLedger?: BudgetRegisterEntryLines<T> | null;
  /**
   * One-to-many navigation property to the {@link BudgetDimensions} entity.
   */
  declare primaryLedgerBudgetDimension: BudgetDimensions<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetAllowTransferRules} entity.
   */
  declare budgetAllowTransferRuleLedgerEntity: BudgetAllowTransferRules<T>[];
  /**
   * One-to-one navigation property to the {@link BudgetRegisterEntries} entity.
   */
  declare budgetRegisterEntry?: BudgetRegisterEntries<T> | null;
  /**
   * One-to-one navigation property to the {@link BudgetRegisterEntryHeaders} entity.
   */
  declare budgetRegisterEntryHeaderPrimaryLedger?: BudgetRegisterEntryHeaders<T> | null;

  constructor(_entityApi: LedgersApi<T>) {
    super(_entityApi);
  }
}

export interface LedgersType<T extends DeSerializers = DefaultDeSerializers> {
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  accountStructureName11?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountIdUnrealizedGain?: DeserializedType<T, 'Edm.String'> | null;
  balancingFinancialDimension?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountIdRealizedLoss?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountIdFinancialGain?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  accountStructureName12?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountIdFinancialLoss?: DeserializedType<T, 'Edm.String'> | null;
  chartOfAccountsRecId: DeserializedType<T, 'Edm.Int64'>;
  accountStructureName17?: DeserializedType<T, 'Edm.String'> | null;
  accountStructureName2?: DeserializedType<T, 'Edm.String'> | null;
  accountStructureName3?: DeserializedType<T, 'Edm.String'> | null;
  accountStructureName18?: DeserializedType<T, 'Edm.String'> | null;
  accountStructureName1?: DeserializedType<T, 'Edm.String'> | null;
  fiscalCalendar?: DeserializedType<T, 'Edm.String'> | null;
  accountStructureName6?: DeserializedType<T, 'Edm.String'> | null;
  accountStructureName7?: DeserializedType<T, 'Edm.String'> | null;
  budgetExchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  accountStructureName4?: DeserializedType<T, 'Edm.String'> | null;
  accountStructureName5?: DeserializedType<T, 'Edm.String'> | null;
  accountStructureName8?: DeserializedType<T, 'Edm.String'> | null;
  isBudgetControlEnabled?: NoYes | null;
  accountStructureName9?: DeserializedType<T, 'Edm.String'> | null;
  chartOfAccounts?: DeserializedType<T, 'Edm.String'> | null;
  accountStructureName20?: DeserializedType<T, 'Edm.String'> | null;
  accountStructureName10?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountIdUnrealizedLoss?: DeserializedType<T, 'Edm.String'> | null;
  accountStructureName15?: DeserializedType<T, 'Edm.String'> | null;
  accountStructureName16?: DeserializedType<T, 'Edm.String'> | null;
  accountingCurrency?: DeserializedType<T, 'Edm.String'> | null;
  accountStructureName13?: DeserializedType<T, 'Edm.String'> | null;
  ledgerRecId: DeserializedType<T, 'Edm.Int64'>;
  accountStructureName14?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrencyExchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountIdRealizedGain?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrency?: DeserializedType<T, 'Edm.String'> | null;
  accountStructureName19?: DeserializedType<T, 'Edm.String'> | null;
  ledgerEntity: BudgetControlConfigurationsType<T>[];
  currencyRevaluationAccount: CurrencyRevaluationAccountsType<T>[];
  ledgerReportingCurrency?: CurrenciesType<T> | null;
  ledgerAccountingCurrency?: CurrenciesType<T> | null;
  budgetRegisterEntryLinePrimaryLedger?: BudgetRegisterEntryLinesType<T> | null;
  primaryLedgerBudgetDimension: BudgetDimensionsType<T>[];
  budgetAllowTransferRuleLedgerEntity: BudgetAllowTransferRulesType<T>[];
  budgetRegisterEntry?: BudgetRegisterEntriesType<T> | null;
  budgetRegisterEntryHeaderPrimaryLedger?: BudgetRegisterEntryHeadersType<T> | null;
}
