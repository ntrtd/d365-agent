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
import type { MainAccountBiEntitiesApi } from './MainAccountBiEntitiesApi';
import { LedgerClosing } from './LedgerClosing';
import { NoYes } from './NoYes';
import { RepomoTypeMx } from './RepomoTypeMx';
import { FinancialReportingTranslationType } from './FinancialReportingTranslationType';
import { AccountCloseType } from './AccountCloseType';
import { AdjustmentMethodMx } from './AdjustmentMethodMx';
import { DimensionLedgerAccountType } from './DimensionLedgerAccountType';
import { DebCredProposal } from './DebCredProposal';
import { LedgerPostingType } from './LedgerPostingType';
import { FieldControl } from './FieldControl';
import { DimensionLedgerAccountReportingType } from './DimensionLedgerAccountReportingType';

/**
 * This class represents the entity "MainAccountBiEntities" of service "d365_metadata".
 */
export class MainAccountBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MainAccountBiEntitiesType<T>
{
  /**
   * Technical entity name for MainAccountBiEntities.
   */
  static override _entityName = 'MainAccountBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MainAccountBiEntities entity.
   */
  static _keys = ['MainAccountId', 'LedgerChartOfAccounts'];
  /**
   * Main Account Id.
   */
  declare mainAccountId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ledger Chart Of Accounts.
   */
  declare ledgerChartOfAccounts: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sru Code.
   * @nullable
   */
  declare sruCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Main Account.
   */
  declare parentMainAccount: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reporting Exchange Adjustment Rate Type.
   */
  declare reportingExchangeAdjustmentRateType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Closing.
   * @nullable
   */
  declare closing?: LedgerClosing | null;
  /**
   * Main Account Template.
   */
  declare mainAccountTemplate: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Opening Account.
   */
  declare openingAccount: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Exchange Adjusted.
   * @nullable
   */
  declare exchangeAdjusted?: NoYes | null;
  /**
   * Repomo Type Mx.
   * @nullable
   */
  declare repomoTypeMx?: RepomoTypeMx | null;
  /**
   * Unit Of Measure.
   */
  declare unitOfMeasure: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Created Date Time.
   */
  declare sysCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Standard Main Account W.
   */
  declare standardMainAccountW: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Inflation Adjustment Mx.
   * @nullable
   */
  declare inflationAdjustmentMx?: NoYes | null;
  /**
   * Financial Reporting Translation Type.
   * @nullable
   */
  declare financialReportingTranslationType?: FinancialReportingTranslationType | null;
  /**
   * Consolidation Main Account.
   * @nullable
   */
  declare consolidationMainAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Category Ref.
   */
  declare accountCategoryRef: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Close Type.
   * @nullable
   */
  declare closeType?: AccountCloseType | null;
  /**
   * Adjustment Method Mx.
   * @nullable
   */
  declare adjustmentMethodMx?: AdjustmentMethodMx | null;
  /**
   * Mandatory Payment Reference.
   * @nullable
   */
  declare mandatoryPaymentReference?: NoYes | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: DimensionLedgerAccountType | null;
  /**
   * Monetary.
   * @nullable
   */
  declare monetary?: NoYes | null;
  /**
   * Debit Credit Balance Demand.
   * @nullable
   */
  declare debitCreditBalanceDemand?: DebCredProposal | null;
  /**
   * Exchange Adjustment Rate Type.
   */
  declare exchangeAdjustmentRateType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Posting Type.
   * @nullable
   */
  declare postingType?: LedgerPostingType | null;
  /**
   * Debit Credit Proposal.
   * @nullable
   */
  declare debitCreditProposal?: DebCredProposal | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Transfer Year End Account Es.
   */
  declare transferYearEndAccountEs: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Validate Currency.
   * @nullable
   */
  declare validateCurrency?: FieldControl | null;
  /**
   * User Info Id.
   * @nullable
   */
  declare userInfoId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Account Type.
   * @nullable
   */
  declare reportingAccountType?: DimensionLedgerAccountReportingType | null;
  /**
   * Financial Reporting Exchange Rate Type.
   */
  declare financialReportingExchangeRateType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Validate Posting.
   * @nullable
   */
  declare validatePosting?: FieldControl | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Validate User.
   * @nullable
   */
  declare validateUser?: FieldControl | null;
  /**
   * Debit Credit Check.
   * @nullable
   */
  declare debitCreditCheck?: DebCredProposal | null;

  constructor(_entityApi: MainAccountBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface MainAccountBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  mainAccountId: DeserializedType<T, 'Edm.String'>;
  ledgerChartOfAccounts: DeserializedType<T, 'Edm.Int64'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  sruCode?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  parentMainAccount: DeserializedType<T, 'Edm.Int64'>;
  reportingExchangeAdjustmentRateType: DeserializedType<T, 'Edm.Int64'>;
  closing?: LedgerClosing | null;
  mainAccountTemplate: DeserializedType<T, 'Edm.Int64'>;
  openingAccount: DeserializedType<T, 'Edm.Int64'>;
  exchangeAdjusted?: NoYes | null;
  repomoTypeMx?: RepomoTypeMx | null;
  unitOfMeasure: DeserializedType<T, 'Edm.Int64'>;
  sysCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  standardMainAccountW: DeserializedType<T, 'Edm.Int64'>;
  inflationAdjustmentMx?: NoYes | null;
  financialReportingTranslationType?: FinancialReportingTranslationType | null;
  consolidationMainAccount?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  accountCategoryRef: DeserializedType<T, 'Edm.Int32'>;
  closeType?: AccountCloseType | null;
  adjustmentMethodMx?: AdjustmentMethodMx | null;
  mandatoryPaymentReference?: NoYes | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  type?: DimensionLedgerAccountType | null;
  monetary?: NoYes | null;
  debitCreditBalanceDemand?: DebCredProposal | null;
  exchangeAdjustmentRateType: DeserializedType<T, 'Edm.Int64'>;
  postingType?: LedgerPostingType | null;
  debitCreditProposal?: DebCredProposal | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  transferYearEndAccountEs: DeserializedType<T, 'Edm.Int64'>;
  validateCurrency?: FieldControl | null;
  userInfoId?: DeserializedType<T, 'Edm.String'> | null;
  reportingAccountType?: DimensionLedgerAccountReportingType | null;
  financialReportingExchangeRateType: DeserializedType<T, 'Edm.Int64'>;
  validatePosting?: FieldControl | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validateUser?: FieldControl | null;
  debitCreditCheck?: DebCredProposal | null;
}
