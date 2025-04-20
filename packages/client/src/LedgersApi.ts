/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Ledgers } from './Ledgers';
import { LedgersRequestBuilder } from './LedgersRequestBuilder';
import { BudgetControlConfigurationsApi } from './BudgetControlConfigurationsApi';
import { CurrencyRevaluationAccountsApi } from './CurrencyRevaluationAccountsApi';
import { CurrenciesApi } from './CurrenciesApi';
import { BudgetRegisterEntryLinesApi } from './BudgetRegisterEntryLinesApi';
import { BudgetDimensionsApi } from './BudgetDimensionsApi';
import { BudgetAllowTransferRulesApi } from './BudgetAllowTransferRulesApi';
import { BudgetRegisterEntriesApi } from './BudgetRegisterEntriesApi';
import { BudgetRegisterEntryHeadersApi } from './BudgetRegisterEntryHeadersApi';
import { NoYes } from './NoYes';
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
export class LedgersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Ledgers<DeSerializersT>, DeSerializersT>
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
  ): LedgersApi<DeSerializersT> {
    return new LedgersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link ledgerEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ENTITY: OneToManyLink<
      Ledgers<DeSerializersT>,
      DeSerializersT,
      BudgetControlConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link currencyRevaluationAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY_REVALUATION_ACCOUNT: OneToManyLink<
      Ledgers<DeSerializersT>,
      DeSerializersT,
      CurrencyRevaluationAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerReportingCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_REPORTING_CURRENCY: OneToOneLink<
      Ledgers<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountingCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNTING_CURRENCY: OneToOneLink<
      Ledgers<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntryLinePrimaryLedger} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY_LINE_PRIMARY_LEDGER: OneToOneLink<
      Ledgers<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntryLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link primaryLedgerBudgetDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRIMARY_LEDGER_BUDGET_DIMENSION: OneToManyLink<
      Ledgers<DeSerializersT>,
      DeSerializersT,
      BudgetDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetAllowTransferRuleLedgerEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_ALLOW_TRANSFER_RULE_LEDGER_ENTITY: OneToManyLink<
      Ledgers<DeSerializersT>,
      DeSerializersT,
      BudgetAllowTransferRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY: OneToOneLink<
      Ledgers<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntryHeaderPrimaryLedger} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY_HEADER_PRIMARY_LEDGER: OneToOneLink<
      Ledgers<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntryHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BudgetControlConfigurationsApi<DeSerializersT>,
      CurrencyRevaluationAccountsApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      BudgetRegisterEntryLinesApi<DeSerializersT>,
      BudgetDimensionsApi<DeSerializersT>,
      BudgetAllowTransferRulesApi<DeSerializersT>,
      BudgetRegisterEntriesApi<DeSerializersT>,
      BudgetRegisterEntryHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_ENTITY: new OneToManyLink('LedgerEntity', this, linkedApis[0]),
      CURRENCY_REVALUATION_ACCOUNT: new OneToManyLink(
        'CurrencyRevaluationAccount',
        this,
        linkedApis[1]
      ),
      LEDGER_REPORTING_CURRENCY: new OneToOneLink(
        'LedgerReportingCurrency',
        this,
        linkedApis[2]
      ),
      LEDGER_ACCOUNTING_CURRENCY: new OneToOneLink(
        'LedgerAccountingCurrency',
        this,
        linkedApis[3]
      ),
      BUDGET_REGISTER_ENTRY_LINE_PRIMARY_LEDGER: new OneToOneLink(
        'BudgetRegisterEntryLinePrimaryLedger',
        this,
        linkedApis[4]
      ),
      PRIMARY_LEDGER_BUDGET_DIMENSION: new OneToManyLink(
        'PrimaryLedgerBudgetDimension',
        this,
        linkedApis[5]
      ),
      BUDGET_ALLOW_TRANSFER_RULE_LEDGER_ENTITY: new OneToManyLink(
        'BudgetAllowTransferRuleLedgerEntity',
        this,
        linkedApis[6]
      ),
      BUDGET_REGISTER_ENTRY: new OneToOneLink(
        'BudgetRegisterEntry',
        this,
        linkedApis[7]
      ),
      BUDGET_REGISTER_ENTRY_HEADER_PRIMARY_LEDGER: new OneToOneLink(
        'BudgetRegisterEntryHeaderPrimaryLedger',
        this,
        linkedApis[8]
      )
    };
    return this;
  }

  entityConstructor = Ledgers;

  requestBuilder(): LedgersRequestBuilder<DeSerializersT> {
    return new LedgersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Ledgers<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Ledgers<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Ledgers<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Ledgers, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Ledgers, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_STRUCTURE_NAME_11: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT_ID_UNREALIZED_GAIN: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BALANCING_FINANCIAL_DIMENSION: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT_ID_REALIZED_LOSS: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT_ID_FINANCIAL_GAIN: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_STRUCTURE_NAME_12: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT_ID_FINANCIAL_LOSS: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHART_OF_ACCOUNTS_REC_ID: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ACCOUNT_STRUCTURE_NAME_17: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_STRUCTURE_NAME_2: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_STRUCTURE_NAME_3: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_STRUCTURE_NAME_18: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_STRUCTURE_NAME_1: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_CALENDAR: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_STRUCTURE_NAME_6: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_STRUCTURE_NAME_7: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_STRUCTURE_NAME_4: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_STRUCTURE_NAME_5: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_STRUCTURE_NAME_8: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_BUDGET_CONTROL_ENABLED: EnumField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCOUNT_STRUCTURE_NAME_9: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHART_OF_ACCOUNTS: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_STRUCTURE_NAME_20: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_STRUCTURE_NAME_10: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT_ID_UNREALIZED_LOSS: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_STRUCTURE_NAME_15: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_STRUCTURE_NAME_16: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_CURRENCY: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_STRUCTURE_NAME_13: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_REC_ID: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ACCOUNT_STRUCTURE_NAME_14: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CURRENCY_EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT_ID_REALIZED_GAIN: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CURRENCY: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_STRUCTURE_NAME_19: OrderableEdmTypeField<
      Ledgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ENTITY: OneToManyLink<
      Ledgers<DeSerializersT>,
      DeSerializersT,
      BudgetControlConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link currencyRevaluationAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY_REVALUATION_ACCOUNT: OneToManyLink<
      Ledgers<DeSerializersT>,
      DeSerializersT,
      CurrencyRevaluationAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerReportingCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_REPORTING_CURRENCY: OneToOneLink<
      Ledgers<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountingCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNTING_CURRENCY: OneToOneLink<
      Ledgers<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntryLinePrimaryLedger} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY_LINE_PRIMARY_LEDGER: OneToOneLink<
      Ledgers<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntryLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link primaryLedgerBudgetDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRIMARY_LEDGER_BUDGET_DIMENSION: OneToManyLink<
      Ledgers<DeSerializersT>,
      DeSerializersT,
      BudgetDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetAllowTransferRuleLedgerEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_ALLOW_TRANSFER_RULE_LEDGER_ENTITY: OneToManyLink<
      Ledgers<DeSerializersT>,
      DeSerializersT,
      BudgetAllowTransferRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY: OneToOneLink<
      Ledgers<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntryHeaderPrimaryLedger} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY_HEADER_PRIMARY_LEDGER: OneToOneLink<
      Ledgers<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntryHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Ledgers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accountStructureName11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE_NAME_11: fieldBuilder.buildEdmTypeField(
          'AccountStructureName11',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mainAccountIdUnrealizedGain} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_ID_UNREALIZED_GAIN: fieldBuilder.buildEdmTypeField(
          'MainAccountIdUnrealizedGain',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link balancingFinancialDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BALANCING_FINANCIAL_DIMENSION: fieldBuilder.buildEdmTypeField(
          'BalancingFinancialDimension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mainAccountIdRealizedLoss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_ID_REALIZED_LOSS: fieldBuilder.buildEdmTypeField(
          'MainAccountIdRealizedLoss',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mainAccountIdFinancialGain} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_ID_FINANCIAL_GAIN: fieldBuilder.buildEdmTypeField(
          'MainAccountIdFinancialGain',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountStructureName12} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE_NAME_12: fieldBuilder.buildEdmTypeField(
          'AccountStructureName12',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mainAccountIdFinancialLoss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_ID_FINANCIAL_LOSS: fieldBuilder.buildEdmTypeField(
          'MainAccountIdFinancialLoss',
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
         * Static representation of the {@link accountStructureName17} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE_NAME_17: fieldBuilder.buildEdmTypeField(
          'AccountStructureName17',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountStructureName2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE_NAME_2: fieldBuilder.buildEdmTypeField(
          'AccountStructureName2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountStructureName3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE_NAME_3: fieldBuilder.buildEdmTypeField(
          'AccountStructureName3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountStructureName18} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE_NAME_18: fieldBuilder.buildEdmTypeField(
          'AccountStructureName18',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountStructureName1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE_NAME_1: fieldBuilder.buildEdmTypeField(
          'AccountStructureName1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR: fieldBuilder.buildEdmTypeField(
          'FiscalCalendar',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountStructureName6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE_NAME_6: fieldBuilder.buildEdmTypeField(
          'AccountStructureName6',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountStructureName7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE_NAME_7: fieldBuilder.buildEdmTypeField(
          'AccountStructureName7',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetExchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'BudgetExchangeRateType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountStructureName4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE_NAME_4: fieldBuilder.buildEdmTypeField(
          'AccountStructureName4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountStructureName5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE_NAME_5: fieldBuilder.buildEdmTypeField(
          'AccountStructureName5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountStructureName8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE_NAME_8: fieldBuilder.buildEdmTypeField(
          'AccountStructureName8',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isBudgetControlEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BUDGET_CONTROL_ENABLED: fieldBuilder.buildEnumField(
          'IsBudgetControlEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link accountStructureName9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE_NAME_9: fieldBuilder.buildEdmTypeField(
          'AccountStructureName9',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chartOfAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHART_OF_ACCOUNTS: fieldBuilder.buildEdmTypeField(
          'ChartOfAccounts',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountStructureName20} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE_NAME_20: fieldBuilder.buildEdmTypeField(
          'AccountStructureName20',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountStructureName10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE_NAME_10: fieldBuilder.buildEdmTypeField(
          'AccountStructureName10',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mainAccountIdUnrealizedLoss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_ID_UNREALIZED_LOSS: fieldBuilder.buildEdmTypeField(
          'MainAccountIdUnrealizedLoss',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountStructureName15} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE_NAME_15: fieldBuilder.buildEdmTypeField(
          'AccountStructureName15',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountStructureName16} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE_NAME_16: fieldBuilder.buildEdmTypeField(
          'AccountStructureName16',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AccountingCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountStructureName13} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE_NAME_13: fieldBuilder.buildEdmTypeField(
          'AccountStructureName13',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_REC_ID: fieldBuilder.buildEdmTypeField(
          'LedgerRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link accountStructureName14} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE_NAME_14: fieldBuilder.buildEdmTypeField(
          'AccountStructureName14',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link exchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'ExchangeRateType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportingCurrencyExchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyExchangeRateType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mainAccountIdRealizedGain} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_ID_REALIZED_GAIN: fieldBuilder.buildEdmTypeField(
          'MainAccountIdRealizedGain',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'ReportingCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountStructureName19} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE_NAME_19: fieldBuilder.buildEdmTypeField(
          'AccountStructureName19',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Ledgers)
      };
    }

    return this._schema;
  }
}
