/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankStmtIsoReportEntryBiEntities } from './BankStmtIsoReportEntryBiEntities';
import { BankStmtIsoReportEntryBiEntitiesRequestBuilder } from './BankStmtIsoReportEntryBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { DebitCredit } from './DebitCredit';
import { BankStatementLineStatus } from './BankStatementLineStatus';
import { BankPaymentType } from './BankPaymentType';
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
export class BankStmtIsoReportEntryBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BankStmtIsoReportEntryBiEntities<DeSerializersT>, DeSerializersT>
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
  ): BankStmtIsoReportEntryBiEntitiesApi<DeSerializersT> {
    return new BankStmtIsoReportEntryBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BankStmtIsoReportEntryBiEntities;

  requestBuilder(): BankStmtIsoReportEntryBiEntitiesRequestBuilder<DeSerializersT> {
    return new BankStmtIsoReportEntryBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BankStmtIsoReportEntryBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BankStmtIsoReportEntryBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BankStmtIsoReportEntryBiEntities<DeSerializersT>,
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
    typeof BankStmtIsoReportEntryBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BankStmtIsoReportEntryBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CREDITOR_REFERENCE_INFORMATION: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_ENTRY_INFORMATION: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_STATEMENT_COUNTER_CURRENCY: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_BANK_STMT_ISO_REPORT_ENTRY: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BANK_DOCUMENT_NUMBER: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_NEW_BANK_DOCUMENT: EnumField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_DATE: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REFERENCE_NUMBER: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_STMT_ISO_ACCOUNT_STATEMENT: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    AMOUNT_CREDIT_DEBIT_INDICATOR: EnumField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      DebitCredit,
      true,
      true
    >;
    RECONCILED: EnumField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RELATED_BANK_NAME: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTEREST_RATE: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REVERSAL_INDICATOR: EnumField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_ID: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRADING_PARTY: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ENTRY_REFERENCE: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ORIGIN_SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BANK_STATEMENT_INSTRUCTED_CURRENCY_AMT: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BANK_STATEMENT_COUNTER_CURRENCY_AMOUNT: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BANK_STATEMENT_COUNTER_EXCHANGE_RATE: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_STATEMENT_LINE_STATUS: EnumField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      BankStatementLineStatus,
      true,
      true
    >;
    CHARGE_RATE: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RELATED_BANK_ACCOUNT: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROPRIETARY_BANK_TRANSACTION_CODE: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_STATEMENT_INSTRUCTED_EXCHANGE_RATE: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_RATE: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BOOKING_DATE_TIME: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BANK_PAYMENT_TYPE: EnumField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      BankPaymentType,
      true,
      true
    >;
    BANK_STATEMENT_INSTRUCTED_CURRENCY: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_SERVICER_REFERENCE: OrderableEdmTypeField<
      BankStmtIsoReportEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BankStmtIsoReportEntryBiEntities<DeSerializers>>;
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link creditorReferenceInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDITOR_REFERENCE_INFORMATION: fieldBuilder.buildEdmTypeField(
          'CreditorReferenceInformation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link additionalEntryInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_ENTRY_INFORMATION: fieldBuilder.buildEdmTypeField(
          'AdditionalEntryInformation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankStatementCounterCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STATEMENT_COUNTER_CURRENCY: fieldBuilder.buildEdmTypeField(
          'BankStatementCounterCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentBankStmtIsoReportEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_BANK_STMT_ISO_REPORT_ENTRY: fieldBuilder.buildEdmTypeField(
          'ParentBankStmtISOReportEntry',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link bankDocumentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'BankDocumentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isNewBankDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_NEW_BANK_DOCUMENT: fieldBuilder.buildEnumField(
          'IsNewBankDocument',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DATE: fieldBuilder.buildEdmTypeField(
          'AccountingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link referenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReferenceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankStmtIsoAccountStatement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STMT_ISO_ACCOUNT_STATEMENT: fieldBuilder.buildEdmTypeField(
          'BankStmtISOAccountStatement',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link amountCreditDebitIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CREDIT_DEBIT_INDICATOR: fieldBuilder.buildEnumField(
          'AmountCreditDebitIndicator',
          DebitCredit,
          true
        ),
        /**
         * Static representation of the {@link reconciled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECONCILED: fieldBuilder.buildEnumField('Reconciled', NoYes, true),
        /**
         * Static representation of the {@link relatedBankName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATED_BANK_NAME: fieldBuilder.buildEdmTypeField(
          'RelatedBankName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interestRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_RATE: fieldBuilder.buildEdmTypeField(
          'InterestRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reversalIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSAL_INDICATOR: fieldBuilder.buildEnumField(
          'ReversalIndicator',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ID: fieldBuilder.buildEdmTypeField('TaxId', 'Edm.String', true),
        /**
         * Static representation of the {@link taxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tradingParty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRADING_PARTY: fieldBuilder.buildEdmTypeField(
          'TradingParty',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link entryReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_REFERENCE: fieldBuilder.buildEdmTypeField(
          'EntryReference',
          'Edm.String',
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
         * Static representation of the {@link originSourceDocumentLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN_SOURCE_DOCUMENT_LINE: fieldBuilder.buildEdmTypeField(
          'OriginSourceDocumentLine',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link bankStatementInstructedCurrencyAmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STATEMENT_INSTRUCTED_CURRENCY_AMT: fieldBuilder.buildEdmTypeField(
          'BankStatementInstructedCurrencyAmt',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bankStatementCounterCurrencyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STATEMENT_COUNTER_CURRENCY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BankStatementCounterCurrencyAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bankStatementCounterExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STATEMENT_COUNTER_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'BankStatementCounterExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link bankStatementLineStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STATEMENT_LINE_STATUS: fieldBuilder.buildEnumField(
          'BankStatementLineStatus',
          BankStatementLineStatus,
          true
        ),
        /**
         * Static representation of the {@link chargeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_RATE: fieldBuilder.buildEdmTypeField(
          'ChargeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sourceDocumentLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DOCUMENT_LINE: fieldBuilder.buildEdmTypeField(
          'SourceDocumentLine',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link relatedBankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATED_BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'RelatedBankAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link proprietaryBankTransactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPRIETARY_BANK_TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'ProprietaryBankTransactionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankStatementInstructedExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STATEMENT_INSTRUCTED_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'BankStatementInstructedExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link taxRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_RATE: fieldBuilder.buildEdmTypeField(
          'TaxRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bookingDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOKING_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'BookingDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link bankPaymentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_PAYMENT_TYPE: fieldBuilder.buildEnumField(
          'BankPaymentType',
          BankPaymentType,
          true
        ),
        /**
         * Static representation of the {@link bankStatementInstructedCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STATEMENT_INSTRUCTED_CURRENCY: fieldBuilder.buildEdmTypeField(
          'BankStatementInstructedCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountServicerReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_SERVICER_REFERENCE: fieldBuilder.buildEdmTypeField(
          'AccountServicerReference',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BankStmtIsoReportEntryBiEntities)
      };
    }

    return this._schema;
  }
}
