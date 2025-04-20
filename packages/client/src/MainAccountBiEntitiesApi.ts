/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MainAccountBiEntities } from './MainAccountBiEntities';
import { MainAccountBiEntitiesRequestBuilder } from './MainAccountBiEntitiesRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class MainAccountBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MainAccountBiEntities<DeSerializersT>, DeSerializersT>
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
  ): MainAccountBiEntitiesApi<DeSerializersT> {
    return new MainAccountBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MainAccountBiEntities;

  requestBuilder(): MainAccountBiEntitiesRequestBuilder<DeSerializersT> {
    return new MainAccountBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MainAccountBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MainAccountBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MainAccountBiEntities<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof MainAccountBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MainAccountBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    MAIN_ACCOUNT_ID: OrderableEdmTypeField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEDGER_CHART_OF_ACCOUNTS: OrderableEdmTypeField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SRU_CODE: OrderableEdmTypeField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_MAIN_ACCOUNT: OrderableEdmTypeField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REPORTING_EXCHANGE_ADJUSTMENT_RATE_TYPE: OrderableEdmTypeField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CLOSING: EnumField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerClosing,
      true,
      true
    >;
    MAIN_ACCOUNT_TEMPLATE: OrderableEdmTypeField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    OPENING_ACCOUNT: OrderableEdmTypeField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXCHANGE_ADJUSTED: EnumField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPOMO_TYPE_MX: EnumField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      RepomoTypeMx,
      true,
      true
    >;
    UNIT_OF_MEASURE: OrderableEdmTypeField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_CREATED_DATE_TIME: OrderableEdmTypeField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STANDARD_MAIN_ACCOUNT_W: OrderableEdmTypeField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INFLATION_ADJUSTMENT_MX: EnumField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FINANCIAL_REPORTING_TRANSLATION_TYPE: EnumField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      FinancialReportingTranslationType,
      true,
      true
    >;
    CONSOLIDATION_MAIN_ACCOUNT: OrderableEdmTypeField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_CATEGORY_REF: OrderableEdmTypeField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CLOSE_TYPE: EnumField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      AccountCloseType,
      true,
      true
    >;
    ADJUSTMENT_METHOD_MX: EnumField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      AdjustmentMethodMx,
      true,
      true
    >;
    MANDATORY_PAYMENT_REFERENCE: EnumField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TYPE: EnumField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      DimensionLedgerAccountType,
      true,
      true
    >;
    MONETARY: EnumField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEBIT_CREDIT_BALANCE_DEMAND: EnumField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      DebCredProposal,
      true,
      true
    >;
    EXCHANGE_ADJUSTMENT_RATE_TYPE: OrderableEdmTypeField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    POSTING_TYPE: EnumField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerPostingType,
      true,
      true
    >;
    DEBIT_CREDIT_PROPOSAL: EnumField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      DebCredProposal,
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANSFER_YEAR_END_ACCOUNT_ES: OrderableEdmTypeField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VALIDATE_CURRENCY: EnumField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      FieldControl,
      true,
      true
    >;
    USER_INFO_ID: OrderableEdmTypeField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_ACCOUNT_TYPE: EnumField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      DimensionLedgerAccountReportingType,
      true,
      true
    >;
    FINANCIAL_REPORTING_EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VALIDATE_POSTING: EnumField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      FieldControl,
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALIDATE_USER: EnumField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      FieldControl,
      true,
      true
    >;
    DEBIT_CREDIT_CHECK: EnumField<
      MainAccountBiEntities<DeSerializers>,
      DeSerializersT,
      DebCredProposal,
      true,
      true
    >;
    ALL_FIELDS: AllFields<MainAccountBiEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link ledgerChartOfAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_CHART_OF_ACCOUNTS: fieldBuilder.buildEdmTypeField(
          'LedgerChartOfAccounts',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sruCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SRU_CODE: fieldBuilder.buildEdmTypeField('SRUCode', 'Edm.String', true),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link parentMainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_MAIN_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ParentMainAccount',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link reportingExchangeAdjustmentRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_EXCHANGE_ADJUSTMENT_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'ReportingExchangeAdjustmentRateType',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link closing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING: fieldBuilder.buildEnumField('Closing', LedgerClosing, true),
        /**
         * Static representation of the {@link mainAccountTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'MainAccountTemplate',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link openingAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPENING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'OpeningAccount',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link exchangeAdjusted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_ADJUSTED: fieldBuilder.buildEnumField(
          'ExchangeAdjusted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link repomoTypeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPOMO_TYPE_MX: fieldBuilder.buildEnumField(
          'RepomoType_MX',
          RepomoTypeMx,
          true
        ),
        /**
         * Static representation of the {@link unitOfMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasure',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sysCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysCreatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sysCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'SysCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link standardMainAccountW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_MAIN_ACCOUNT_W: fieldBuilder.buildEdmTypeField(
          'StandardMainAccount_W',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link inflationAdjustmentMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFLATION_ADJUSTMENT_MX: fieldBuilder.buildEnumField(
          'InflationAdjustment_MX',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link financialReportingTranslationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_REPORTING_TRANSLATION_TYPE: fieldBuilder.buildEnumField(
          'FinancialReportingTranslationType',
          FinancialReportingTranslationType,
          true
        ),
        /**
         * Static representation of the {@link consolidationMainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSOLIDATION_MAIN_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ConsolidationMainAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountCategoryRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CATEGORY_REF: fieldBuilder.buildEdmTypeField(
          'AccountCategoryRef',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link closeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSE_TYPE: fieldBuilder.buildEnumField(
          'CloseType',
          AccountCloseType,
          true
        ),
        /**
         * Static representation of the {@link adjustmentMethodMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_METHOD_MX: fieldBuilder.buildEnumField(
          'AdjustmentMethod_MX',
          AdjustmentMethodMx,
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
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          DimensionLedgerAccountType,
          true
        ),
        /**
         * Static representation of the {@link monetary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONETARY: fieldBuilder.buildEnumField('Monetary', NoYes, true),
        /**
         * Static representation of the {@link debitCreditBalanceDemand} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_CREDIT_BALANCE_DEMAND: fieldBuilder.buildEnumField(
          'DebitCreditBalanceDemand',
          DebCredProposal,
          true
        ),
        /**
         * Static representation of the {@link exchangeAdjustmentRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_ADJUSTMENT_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'ExchangeAdjustmentRateType',
          'Edm.Int64',
          false
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
         * Static representation of the {@link debitCreditProposal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_CREDIT_PROPOSAL: fieldBuilder.buildEnumField(
          'DebitCreditProposal',
          DebCredProposal,
          true
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link transferYearEndAccountEs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_YEAR_END_ACCOUNT_ES: fieldBuilder.buildEdmTypeField(
          'TransferYearEndAccount_ES',
          'Edm.Int64',
          false
        ),
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
         * Static representation of the {@link userInfoId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_INFO_ID: fieldBuilder.buildEdmTypeField(
          'UserInfoId',
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
         * Static representation of the {@link financialReportingExchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_REPORTING_EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'FinancialReportingExchangeRateType',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link validatePosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_POSTING: fieldBuilder.buildEnumField(
          'ValidatePosting',
          FieldControl,
          true
        ),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link debitCreditCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_CREDIT_CHECK: fieldBuilder.buildEnumField(
          'DebitCreditCheck',
          DebCredProposal,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MainAccountBiEntities)
      };
    }

    return this._schema;
  }
}
