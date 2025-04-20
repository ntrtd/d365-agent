/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankParameters } from './BankParameters';
import { BankParametersRequestBuilder } from './BankParametersRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { NoYes } from './NoYes';
import { PlExchDiffCalcType } from './PlExchDiffCalcType';
import { BankAccountNameKanaValidationJba_Jp } from './BankAccountNameKanaValidationJba_Jp';
import { CreditLimitTolerance } from './CreditLimitTolerance';
import { RCashCheckContract } from './RCashCheckContract';
import { ReuseVoucher } from './ReuseVoucher';
import { ErrorTolerance } from './ErrorTolerance';
import { HuExchOutflowType } from './HuExchOutflowType';
import { BankRevalExchRateSource } from './BankRevalExchRateSource';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BankParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BankParameters<DeSerializersT>, DeSerializersT>
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
  ): BankParametersApi<DeSerializersT> {
    return new BankParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      BankParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = BankParameters;

  requestBuilder(): BankParametersRequestBuilder<DeSerializersT> {
    return new BankParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BankParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BankParameters<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BankParameters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BankParameters, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BankParameters, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSTDATED_CHECKS_PAYMENT_JOURNAL_NAME: OrderableEdmTypeField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_CONFIRM_STATUS: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCHANGE_DIFFERENCES_TYPE: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      PlExchDiffCalcType,
      true,
      true
    >;
    JBA_FILE_KANA_NAME_VALIDATION_METHOD: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      BankAccountNameKanaValidationJba_Jp,
      true,
      true
    >;
    POSTING_ON_EARLIER_DATE: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLEARING_MAIN_ACCOUNT_ID_FOR_RECIEVED_POSTDATED_CHECKS_DISPLAY_VALUE: OrderableEdmTypeField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_BLANK_BANK_STATEMENT: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALIDATE_RECONCILIATION_MATCHING_DATE_DIFFERENCE: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_CHECKS_FOR_LEDGER_ACCOUNTS: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEPARTMENT_CODE: OrderableEdmTypeField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_POSTING: OrderableEdmTypeField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_COMMA_IN_BANK_ACCOUNT_KANA_NAME: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_LETTER_OF_CREDIT_EXPORT: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WITHHOLDING_TAX_MAIN_ACCOUNT_ID_FOR_POSTDATED_CHECKS_DISPLAY_VALUE: OrderableEdmTypeField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_INACTIVE_BANK_PRENOTE: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_LIMIT_TOLERANCE: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      CreditLimitTolerance,
      true,
      true
    >;
    ALLOW_CHECK_REUSE: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LETTER_OF_GUARANTEE_JOURNAL_NAME: OrderableEdmTypeField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_LETTER_OF_CREDIT_IMPORT: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURPOSE_CODE: OrderableEdmTypeField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ANALYSIS_CODE: OrderableEdmTypeField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATION_METHOD: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      RCashCheckContract,
      true,
      true
    >;
    ALLOW_BANK_CURRENCY_REVAL: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REQUIRE_CHECK_REVERSAL_REASON: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NONSUFFICIENT_FUNDS_TRANSACTION_TYPE: OrderableEdmTypeField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_LETTEROF_CREDIT_CHARGES_POSTING_ENABLED: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORTING_CURRENCY_EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATIONS_LIMIT: OrderableEdmTypeField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTDATED_CHECKS_JOURNAL_NAME: OrderableEdmTypeField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIRE_DEPOSIT_CANCELLATION_REASON: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REQUIRE_DEPOSIT_CANCELLATION_JOURNAL: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POST_JOURNAL_ENTRIES_FOR_POSTDATED_CHECKS: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    QUANTITY_OF_DAYS: OrderableEdmTypeField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DISALLOW_POSTING_EARLIER_THAN_CASH_REPORT_CLOSING_DATE: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_DATE_DIFFERENCE_FOR_RECONCILIATION_MATCHING: OrderableEdmTypeField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REQUIRE_CHECK_REVERSAL_JOURNAL: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_LETTER_OF_GUARANTEE: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_POSTDATED_CHECKS: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_PAYMENT_COPIES: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHECK_FOR_VOUCHER_USED: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      ReuseVoucher,
      true,
      true
    >;
    BOOKING_DATE_AS_DEFAULT_ACCOUNTING_DATE: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLEARING_MAIN_ACCOUNT_ID_FOR_ISSUED_POSTDATED_CHECKS_DISPLAY_VALUE: OrderableEdmTypeField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_OPERATIONS_LIMIT: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      ErrorTolerance,
      true,
      true
    >;
    ACCOUNTING_CURRENCY_EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATE_RECONCILIATION_MATCHING_TRANSACTION_TYPE: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCHANGE_RATE_ON_DISBURSEMENTS: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      HuExchOutflowType,
      true,
      true
    >;
    EXCH_ADJ_RATE_SOURCE: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      BankRevalExchRateSource,
      true,
      true
    >;
    SHOW_AMOUNTS_IN_DEBIT_CREDIT_ON_BANK_STATEMENT: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_BANK_ACCOUNT_STATEMENT_EDIT: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH: OrderableEdmTypeField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSN_ENABLE_ESCHEATMENT: EnumField<
      BankParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      BankParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BankParameters<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link postdatedChecksPaymentJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTDATED_CHECKS_PAYMENT_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'PostdatedChecksPaymentJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useConfirmStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_CONFIRM_STATUS: fieldBuilder.buildEnumField(
          'UseConfirmStatus',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link exchangeDifferencesType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_DIFFERENCES_TYPE: fieldBuilder.buildEnumField(
          'ExchangeDifferencesType',
          PlExchDiffCalcType,
          true
        ),
        /**
         * Static representation of the {@link jbaFileKanaNameValidationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JBA_FILE_KANA_NAME_VALIDATION_METHOD: fieldBuilder.buildEnumField(
          'JBAFileKanaNameValidationMethod',
          BankAccountNameKanaValidationJba_Jp,
          true
        ),
        /**
         * Static representation of the {@link postingOnEarlierDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_ON_EARLIER_DATE: fieldBuilder.buildEnumField(
          'PostingOnEarlierDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link clearingMainAccountIdForRecievedPostdatedChecksDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLEARING_MAIN_ACCOUNT_ID_FOR_RECIEVED_POSTDATED_CHECKS_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'ClearingMainAccountIdForRecievedPostdatedChecksDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link allowBlankBankStatement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_BLANK_BANK_STATEMENT: fieldBuilder.buildEnumField(
          'AllowBlankBankStatement',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link validateReconciliationMatchingDateDifference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_RECONCILIATION_MATCHING_DATE_DIFFERENCE:
          fieldBuilder.buildEnumField(
            'ValidateReconciliationMatchingDateDifference',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link allowChecksForLedgerAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CHECKS_FOR_LEDGER_ACCOUNTS: fieldBuilder.buildEnumField(
          'AllowChecksForLedgerAccounts',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link departmentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT_CODE: fieldBuilder.buildEdmTypeField(
          'DepartmentCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_POSTING: fieldBuilder.buildEdmTypeField(
          'CashPosting',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowCommaInBankAccountKanaName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_COMMA_IN_BANK_ACCOUNT_KANA_NAME: fieldBuilder.buildEnumField(
          'AllowCommaInBankAccountKanaName',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enableLetterOfCreditExport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_LETTER_OF_CREDIT_EXPORT: fieldBuilder.buildEnumField(
          'EnableLetterOfCreditExport',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxMainAccountIdForPostdatedChecksDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_MAIN_ACCOUNT_ID_FOR_POSTDATED_CHECKS_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'WithholdingTaxMainAccountIdForPostdatedChecksDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link allowInactiveBankPrenote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_INACTIVE_BANK_PRENOTE: fieldBuilder.buildEnumField(
          'AllowInactiveBankPrenote',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link creditLimitTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LIMIT_TOLERANCE: fieldBuilder.buildEnumField(
          'CreditLimitTolerance',
          CreditLimitTolerance,
          true
        ),
        /**
         * Static representation of the {@link allowCheckReuse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CHECK_REUSE: fieldBuilder.buildEnumField(
          'AllowCheckReuse',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link letterOfGuaranteeJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LETTER_OF_GUARANTEE_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'LetterOfGuaranteeJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enableLetterOfCreditImport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_LETTER_OF_CREDIT_IMPORT: fieldBuilder.buildEnumField(
          'EnableLetterOfCreditImport',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link purposeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURPOSE_CODE: fieldBuilder.buildEdmTypeField(
          'PurposeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link analysisCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANALYSIS_CODE: fieldBuilder.buildEdmTypeField(
          'AnalysisCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATION_METHOD: fieldBuilder.buildEnumField(
          'ValidationMethod',
          RCashCheckContract,
          true
        ),
        /**
         * Static representation of the {@link allowBankCurrencyReval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_BANK_CURRENCY_REVAL: fieldBuilder.buildEnumField(
          'AllowBankCurrencyReval',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link requireCheckReversalReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRE_CHECK_REVERSAL_REASON: fieldBuilder.buildEnumField(
          'RequireCheckReversalReason',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link nonsufficientFundsTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NONSUFFICIENT_FUNDS_TRANSACTION_TYPE: fieldBuilder.buildEdmTypeField(
          'NonsufficientFundsTransactionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isLetterofCreditChargesPostingEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LETTEROF_CREDIT_CHARGES_POSTING_ENABLED: fieldBuilder.buildEnumField(
          'IsLetterofCreditChargesPostingEnabled',
          NoYes,
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
         * Static representation of the {@link operationsLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATIONS_LIMIT: fieldBuilder.buildEdmTypeField(
          'OperationsLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link postdatedChecksJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTDATED_CHECKS_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'PostdatedChecksJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requireDepositCancellationReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRE_DEPOSIT_CANCELLATION_REASON: fieldBuilder.buildEnumField(
          'RequireDepositCancellationReason',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link requireDepositCancellationJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRE_DEPOSIT_CANCELLATION_JOURNAL: fieldBuilder.buildEnumField(
          'RequireDepositCancellationJournal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postJournalEntriesForPostdatedChecks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_JOURNAL_ENTRIES_FOR_POSTDATED_CHECKS: fieldBuilder.buildEnumField(
          'PostJournalEntriesForPostdatedChecks',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link quantityOfDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_OF_DAYS: fieldBuilder.buildEdmTypeField(
          'QuantityOfDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link disallowPostingEarlierThanCashReportClosingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISALLOW_POSTING_EARLIER_THAN_CASH_REPORT_CLOSING_DATE:
          fieldBuilder.buildEnumField(
            'DisallowPostingEarlierThanCashReportClosingDate',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link maxDateDifferenceForReconciliationMatching} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_DATE_DIFFERENCE_FOR_RECONCILIATION_MATCHING:
          fieldBuilder.buildEdmTypeField(
            'MaxDateDifferenceForReconciliationMatching',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link requireCheckReversalJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRE_CHECK_REVERSAL_JOURNAL: fieldBuilder.buildEnumField(
          'RequireCheckReversalJournal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enableLetterOfGuarantee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_LETTER_OF_GUARANTEE: fieldBuilder.buildEnumField(
          'EnableLetterOfGuarantee',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enablePostdatedChecks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_POSTDATED_CHECKS: fieldBuilder.buildEnumField(
          'EnablePostdatedChecks',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowPaymentCopies} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_PAYMENT_COPIES: fieldBuilder.buildEnumField(
          'AllowPaymentCopies',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link checkForVoucherUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_FOR_VOUCHER_USED: fieldBuilder.buildEnumField(
          'CheckForVoucherUsed',
          ReuseVoucher,
          true
        ),
        /**
         * Static representation of the {@link bookingDateAsDefaultAccountingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOKING_DATE_AS_DEFAULT_ACCOUNTING_DATE: fieldBuilder.buildEnumField(
          'BookingDateAsDefaultAccountingDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link clearingMainAccountIdForIssuedPostdatedChecksDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLEARING_MAIN_ACCOUNT_ID_FOR_ISSUED_POSTDATED_CHECKS_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'ClearingMainAccountIdForIssuedPostdatedChecksDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link checkOperationsLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_OPERATIONS_LIMIT: fieldBuilder.buildEnumField(
          'CheckOperationsLimit',
          ErrorTolerance,
          true
        ),
        /**
         * Static representation of the {@link accountingCurrencyExchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_CURRENCY_EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'AccountingCurrencyExchangeRateType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validateReconciliationMatchingTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_RECONCILIATION_MATCHING_TRANSACTION_TYPE:
          fieldBuilder.buildEnumField(
            'ValidateReconciliationMatchingTransactionType',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link exchangeRateOnDisbursements} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_ON_DISBURSEMENTS: fieldBuilder.buildEnumField(
          'ExchangeRateOnDisbursements',
          HuExchOutflowType,
          true
        ),
        /**
         * Static representation of the {@link exchAdjRateSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_ADJ_RATE_SOURCE: fieldBuilder.buildEnumField(
          'ExchAdjRateSource',
          BankRevalExchRateSource,
          true
        ),
        /**
         * Static representation of the {@link showAmountsInDebitCreditOnBankStatement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_AMOUNTS_IN_DEBIT_CREDIT_ON_BANK_STATEMENT:
          fieldBuilder.buildEnumField(
            'ShowAmountsInDebitCreditOnBankStatement',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link allowBankAccountStatementEdit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_BANK_ACCOUNT_STATEMENT_EDIT: fieldBuilder.buildEnumField(
          'AllowBankAccountStatementEdit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cash} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH: fieldBuilder.buildEdmTypeField('Cash', 'Edm.String', true),
        /**
         * Static representation of the {@link psnEnableEscheatment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSN_ENABLE_ESCHEATMENT: fieldBuilder.buildEnumField(
          'PSNEnableEscheatment',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BankParameters)
      };
    }

    return this._schema;
  }
}
