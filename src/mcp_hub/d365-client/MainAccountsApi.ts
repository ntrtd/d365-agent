/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MainAccounts } from './MainAccounts';
import { MainAccountsRequestBuilder } from './MainAccountsRequestBuilder';
import { BalanceControlsApi } from './BalanceControlsApi';
import { AccountTranslationsApi } from './AccountTranslationsApi';
import { LedgerTransSettlementAccountsApi } from './LedgerTransSettlementAccountsApi';
import { ConsolidateAccountGroupsApi } from './ConsolidateAccountGroupsApi';
import { ExchangeRateTypesApi } from './ExchangeRateTypesApi';
import { CurrenciesApi } from './CurrenciesApi';
import { MainAccountTotalAccountIntervalsApi } from './MainAccountTotalAccountIntervalsApi';
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
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class MainAccountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MainAccounts<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): MainAccountsApi<DeSerializersT> {
    return new MainAccountsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link ledgerBalanceControlMainAccountRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_BALANCE_CONTROL_MAIN_ACCOUNT_ROLE: OneToManyLink<
      MainAccounts<DeSerializersT>,
      DeSerializersT,
      BalanceControlsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link mainAccountEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_ACCOUNT_ENTITY_ROLE: OneToManyLink<
      MainAccounts<DeSerializersT>,
      DeSerializersT,
      AccountTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerTransSettlementAccountsMainAccountEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_TRANS_SETTLEMENT_ACCOUNTS_MAIN_ACCOUNT_ENTITY_ROLE: OneToManyLink<
      MainAccounts<DeSerializersT>,
      DeSerializersT,
      LedgerTransSettlementAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link consolidationMainAccountEntityRole2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONSOLIDATION_MAIN_ACCOUNT_ENTITY_ROLE_2: OneToManyLink<
      MainAccounts<DeSerializersT>,
      DeSerializersT,
      ConsolidateAccountGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link mainAccountEntityRole2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_ACCOUNT_ENTITY_ROLE_2: OneToManyLink<
      MainAccounts<DeSerializersT>,
      DeSerializersT,
      ConsolidateAccountGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link mainAccountExchangeAdjustmentRateType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_ACCOUNT_EXCHANGE_ADJUSTMENT_RATE_TYPE: OneToOneLink<
      MainAccounts<DeSerializersT>,
      DeSerializersT,
      ExchangeRateTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      MainAccounts<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link totalAccountMainAccountEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOTAL_ACCOUNT_MAIN_ACCOUNT_ENTITY_ROLE: OneToManyLink<
      MainAccounts<DeSerializersT>,
      DeSerializersT,
      MainAccountTotalAccountIntervalsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BalanceControlsApi<DeSerializersT>,
      AccountTranslationsApi<DeSerializersT>,
      LedgerTransSettlementAccountsApi<DeSerializersT>,
      ConsolidateAccountGroupsApi<DeSerializersT>,
      ConsolidateAccountGroupsApi<DeSerializersT>,
      ExchangeRateTypesApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      MainAccountTotalAccountIntervalsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_BALANCE_CONTROL_MAIN_ACCOUNT_ROLE: new OneToManyLink(
        'LedgerBalanceControlMainAccountRole',
        this,
        linkedApis[0]
      ),
      MAIN_ACCOUNT_ENTITY_ROLE: new OneToManyLink(
        'MainAccountEntityRole',
        this,
        linkedApis[1]
      ),
      LEDGER_TRANS_SETTLEMENT_ACCOUNTS_MAIN_ACCOUNT_ENTITY_ROLE:
        new OneToManyLink(
          'LedgerTransSettlementAccountsMainAccountEntityRole',
          this,
          linkedApis[2]
        ),
      CONSOLIDATION_MAIN_ACCOUNT_ENTITY_ROLE_2: new OneToManyLink(
        'ConsolidationMainAccountEntityRole2',
        this,
        linkedApis[3]
      ),
      MAIN_ACCOUNT_ENTITY_ROLE_2: new OneToManyLink(
        'MainAccountEntityRole2',
        this,
        linkedApis[4]
      ),
      MAIN_ACCOUNT_EXCHANGE_ADJUSTMENT_RATE_TYPE: new OneToOneLink(
        'MainAccountExchangeAdjustmentRateType',
        this,
        linkedApis[5]
      ),
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[6]),
      TOTAL_ACCOUNT_MAIN_ACCOUNT_ENTITY_ROLE: new OneToManyLink(
        'TotalAccountMainAccountEntityRole',
        this,
        linkedApis[7]
      )
    };
    return this;
  }

  entityConstructor = MainAccounts;

  requestBuilder(): MainAccountsRequestBuilder<DeSerializersT> {
    return new MainAccountsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MainAccounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MainAccounts<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<MainAccounts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof MainAccounts, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(MainAccounts, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CHART_OF_ACCOUNTS: OrderableEdmTypeField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAIN_ACCOUNT_ID: OrderableEdmTypeField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTIVE_FROM: OrderableEdmTypeField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACCOUNT_CATEGORY_DESCRIPTION: OrderableEdmTypeField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGN_CURRENCY_REVALUATION: EnumField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BALANCE_CONTROL: EnumField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      DebCredProposal,
      true,
      true
    >;
    DEBIT_CREDIT_REQUIREMENT: EnumField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      DebCredProposal,
      true,
      true
    >;
    USER: OrderableEdmTypeField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT_REC_ID: OrderableEdmTypeField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DO_NOT_ALLOW_MANUAL_ENTRY: EnumField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPOMO_TYPE: EnumField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      RepomoTypeMx,
      true,
      true
    >;
    MAIN_ACCOUNT_TYPE: EnumField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      DimensionLedgerAccountType,
      true,
      true
    >;
    VALIDATE_USER: EnumField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      FieldControl,
      true,
      true
    >;
    FINANCIAL_REPORTING_EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_ACCOUNT_TYPE: EnumField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      DimensionLedgerAccountReportingType,
      true,
      true
    >;
    MAIN_ACCOUNT_CATEGORY: OrderableEdmTypeField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHART_OF_ACCOUNTS_REC_ID: OrderableEdmTypeField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    OPENING_ACCOUNT_ID: OrderableEdmTypeField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SUSPENDED: EnumField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTIVE_TO: OrderableEdmTypeField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INFLATION_ADJUSTMENT: EnumField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLOSING: EnumField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      LedgerClosing,
      true,
      true
    >;
    VALIDATE_CURRENCY: EnumField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      FieldControl,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SRU_CODE: OrderableEdmTypeField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEBIT_CREDIT_DEFAULT: EnumField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      DebCredProposal,
      true,
      true
    >;
    EXCHANGE_ADJUSTMENT_RATE_TYPE: OrderableEdmTypeField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINANCIAL_REPORTING_CURRENCY_TRANSLATION_TYPE: EnumField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      FinancialReportingTranslationType,
      true,
      true
    >;
    DEFAULT_CURRENCY: OrderableEdmTypeField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_CONSOLIDATION_ACCOUNT: OrderableEdmTypeField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANDATORY_PAYMENT_REFERENCE: EnumField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_TYPE: EnumField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      LedgerPostingType,
      true,
      true
    >;
    REPORTING_EXCHANGE_ADJUSTMENT_RATE_TYPE: OrderableEdmTypeField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_MAIN_ACCOUNT_ID: OrderableEdmTypeField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADJUSTMENT_METHOD: EnumField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      AdjustmentMethodMx,
      true,
      true
    >;
    MONETARY: EnumField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALIDATE_POSTING_TYPE: EnumField<
      MainAccounts<DeSerializers>,
      DeSerializersT,
      FieldControl,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerBalanceControlMainAccountRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_BALANCE_CONTROL_MAIN_ACCOUNT_ROLE: OneToManyLink<
      MainAccounts<DeSerializersT>,
      DeSerializersT,
      BalanceControlsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link mainAccountEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_ACCOUNT_ENTITY_ROLE: OneToManyLink<
      MainAccounts<DeSerializersT>,
      DeSerializersT,
      AccountTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerTransSettlementAccountsMainAccountEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_TRANS_SETTLEMENT_ACCOUNTS_MAIN_ACCOUNT_ENTITY_ROLE: OneToManyLink<
      MainAccounts<DeSerializersT>,
      DeSerializersT,
      LedgerTransSettlementAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link consolidationMainAccountEntityRole2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONSOLIDATION_MAIN_ACCOUNT_ENTITY_ROLE_2: OneToManyLink<
      MainAccounts<DeSerializersT>,
      DeSerializersT,
      ConsolidateAccountGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link mainAccountEntityRole2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_ACCOUNT_ENTITY_ROLE_2: OneToManyLink<
      MainAccounts<DeSerializersT>,
      DeSerializersT,
      ConsolidateAccountGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link mainAccountExchangeAdjustmentRateType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_ACCOUNT_EXCHANGE_ADJUSTMENT_RATE_TYPE: OneToOneLink<
      MainAccounts<DeSerializersT>,
      DeSerializersT,
      ExchangeRateTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      MainAccounts<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link totalAccountMainAccountEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOTAL_ACCOUNT_MAIN_ACCOUNT_ENTITY_ROLE: OneToManyLink<
      MainAccounts<DeSerializersT>,
      DeSerializersT,
      MainAccountTotalAccountIntervalsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MainAccounts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link chartOfAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHART_OF_ACCOUNTS: fieldBuilder.buildEdmTypeField(
          'ChartOfAccounts',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link mainAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'MainAccountId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link activeFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_FROM: fieldBuilder.buildEdmTypeField(
          'ActiveFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link accountCategoryDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CATEGORY_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AccountCategoryDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link foreignCurrencyRevaluation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_CURRENCY_REVALUATION: fieldBuilder.buildEnumField(
          'ForeignCurrencyRevaluation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link balanceControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BALANCE_CONTROL: fieldBuilder.buildEnumField(
          'BalanceControl',
          DebCredProposal,
          true
        ),
        /**
         * Static representation of the {@link debitCreditRequirement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_CREDIT_REQUIREMENT: fieldBuilder.buildEnumField(
          'DebitCreditRequirement',
          DebCredProposal,
          true
        ),
        /**
         * Static representation of the {@link user} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER: fieldBuilder.buildEdmTypeField('User', 'Edm.String', true),
        /**
         * Static representation of the {@link mainAccountRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_REC_ID: fieldBuilder.buildEdmTypeField(
          'MainAccountRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link doNotAllowManualEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DO_NOT_ALLOW_MANUAL_ENTRY: fieldBuilder.buildEnumField(
          'DoNotAllowManualEntry',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link repomoType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPOMO_TYPE: fieldBuilder.buildEnumField(
          'RepomoType',
          RepomoTypeMx,
          true
        ),
        /**
         * Static representation of the {@link mainAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'MainAccountType',
          DimensionLedgerAccountType,
          true
        ),
        /**
         * Static representation of the {@link validateUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_USER: fieldBuilder.buildEnumField(
          'ValidateUser',
          FieldControl,
          true
        ),
        /**
         * Static representation of the {@link financialReportingExchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_REPORTING_EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'FinancialReportingExchangeRateType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsetAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportingAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'ReportingAccountType',
          DimensionLedgerAccountReportingType,
          true
        ),
        /**
         * Static representation of the {@link mainAccountCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'MainAccountCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chartOfAccountsRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHART_OF_ACCOUNTS_REC_ID: fieldBuilder.buildEdmTypeField(
          'ChartOfAccountsRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link openingAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPENING_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'OpeningAccountId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSuspended} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SUSPENDED: fieldBuilder.buildEnumField('IsSuspended', NoYes, true),
        /**
         * Static representation of the {@link activeTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_TO: fieldBuilder.buildEdmTypeField(
          'ActiveTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link inflationAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFLATION_ADJUSTMENT: fieldBuilder.buildEnumField(
          'InflationAdjustment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link closing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING: fieldBuilder.buildEnumField('Closing', LedgerClosing, true),
        /**
         * Static representation of the {@link validateCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_CURRENCY: fieldBuilder.buildEnumField(
          'ValidateCurrency',
          FieldControl,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link sruCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SRU_CODE: fieldBuilder.buildEdmTypeField('SRUCode', 'Edm.String', true),
        /**
         * Static representation of the {@link debitCreditDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_CREDIT_DEFAULT: fieldBuilder.buildEnumField(
          'DebitCreditDefault',
          DebCredProposal,
          true
        ),
        /**
         * Static representation of the {@link exchangeAdjustmentRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_ADJUSTMENT_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'ExchangeAdjustmentRateType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link financialReportingCurrencyTranslationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_REPORTING_CURRENCY_TRANSLATION_TYPE:
          fieldBuilder.buildEnumField(
            'FinancialReportingCurrencyTranslationType',
            FinancialReportingTranslationType,
            true
          ),
        /**
         * Static representation of the {@link defaultCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CURRENCY: fieldBuilder.buildEdmTypeField(
          'DefaultCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultConsolidationAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CONSOLIDATION_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DefaultConsolidationAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mandatoryPaymentReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY_PAYMENT_REFERENCE: fieldBuilder.buildEnumField(
          'MandatoryPaymentReference',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_TYPE: fieldBuilder.buildEnumField(
          'PostingType',
          LedgerPostingType,
          true
        ),
        /**
         * Static representation of the {@link reportingExchangeAdjustmentRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_EXCHANGE_ADJUSTMENT_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'ReportingExchangeAdjustmentRateType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentMainAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_MAIN_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'ParentMainAccountId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link adjustmentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_METHOD: fieldBuilder.buildEnumField(
          'AdjustmentMethod',
          AdjustmentMethodMx,
          true
        ),
        /**
         * Static representation of the {@link monetary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONETARY: fieldBuilder.buildEnumField('Monetary', NoYes, true),
        /**
         * Static representation of the {@link validatePostingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_POSTING_TYPE: fieldBuilder.buildEnumField(
          'ValidatePostingType',
          FieldControl,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MainAccounts)
      };
    }

    return this._schema;
  }
}
