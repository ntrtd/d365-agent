/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaseDepreciationSchedulesHistory } from './LeaseDepreciationSchedulesHistory';
import { LeaseDepreciationSchedulesHistoryRequestBuilder } from './LeaseDepreciationSchedulesHistoryRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class LeaseDepreciationSchedulesHistoryApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LeaseDepreciationSchedulesHistory<DeSerializersT>, DeSerializersT>
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
  ): LeaseDepreciationSchedulesHistoryApi<DeSerializersT> {
    return new LeaseDepreciationSchedulesHistoryApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LeaseDepreciationSchedulesHistory;

  requestBuilder(): LeaseDepreciationSchedulesHistoryRequestBuilder<DeSerializersT> {
    return new LeaseDepreciationSchedulesHistoryRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LeaseDepreciationSchedulesHistory<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LeaseDepreciationSchedulesHistory<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeaseDepreciationSchedulesHistory<DeSerializersT>,
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
    typeof LeaseDepreciationSchedulesHistory,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaseDepreciationSchedulesHistory,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEASE_ID: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_LEASE_COUNTER: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SCHEDULE_LINE_DATE: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AMORTIZATION_EXPENSE_REPORTING_AMOUNT: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEASE_COUNTER: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXCHANGE_RATE_REPORTING: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERIOD: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ASSET_ROU_ACCOUNTING_AMOUNT: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCUMULATED_AMORTIZATION: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NET_BOOK_ACCOUNTING_AMOUNT: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NET_BOOK_REPORTING_AMOUNT: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERIOD_END_DATE: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FIN_TAG_DISPLAY_VALUE: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCUMULATED_AMORTIZATION_ACCOUNTING_AMOUNT: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMORTIZATION_EXPENSE: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSET_ROU_TRANSACTION_AMOUNT: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSET_ROU_REPORTING_AMOUNT: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LATEST_JOURNAL_NUM: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BEGINNING_NET_BOOK_REPORTING_AMOUNT: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BEGINNING_NET_BOOK_ACCOUNTING_AMOUNT: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMORTIZATION_EXPENSE_ACCOUNTING_AMOUNT: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCUMULATED_AMORTIZATION_REPORTING_AMOUNT: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MONTHS: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NET_BOOK_VALUE: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REVERSED: EnumField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOURNAL_POSTED: EnumField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOURNAL_NUM: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_CREATED: EnumField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BEGINNING_NET_BOOK_VALUE: OrderableEdmTypeField<
      LeaseDepreciationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LeaseDepreciationSchedulesHistory<DeSerializers>>;
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
         * Static representation of the {@link leaseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_ID: fieldBuilder.buildEdmTypeField(
          'LeaseId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineLeaseCounter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_LEASE_COUNTER: fieldBuilder.buildEdmTypeField(
          'LineLeaseCounter',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link scheduleLineDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_LINE_DATE: fieldBuilder.buildEdmTypeField(
          'ScheduleLineDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link amortizationExpenseReportingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMORTIZATION_EXPENSE_REPORTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AmortizationExpenseReportingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link leaseCounter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_COUNTER: fieldBuilder.buildEdmTypeField(
          'LeaseCounter',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link exchangeRateReporting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_REPORTING: fieldBuilder.buildEdmTypeField(
          'ExchangeRateReporting',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link period} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD: fieldBuilder.buildEdmTypeField('Period', 'Edm.Int32', false),
        /**
         * Static representation of the {@link assetRouAccountingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ROU_ACCOUNTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AssetROUAccountingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accumulatedAmortization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCUMULATED_AMORTIZATION: fieldBuilder.buildEdmTypeField(
          'AccumulatedAmortization',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link netBookAccountingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_BOOK_ACCOUNTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NetBookAccountingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link netBookReportingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_BOOK_REPORTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NetBookReportingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link periodEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_END_DATE: fieldBuilder.buildEdmTypeField(
          'PeriodEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link finTagDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIN_TAG_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'FinTagDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accumulatedAmortizationAccountingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCUMULATED_AMORTIZATION_ACCOUNTING_AMOUNT:
          fieldBuilder.buildEdmTypeField(
            'AccumulatedAmortizationAccountingAmount',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link amortizationExpense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMORTIZATION_EXPENSE: fieldBuilder.buildEdmTypeField(
          'AmortizationExpense',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link assetRouTransactionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ROU_TRANSACTION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AssetROUTransactionAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link assetRouReportingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ROU_REPORTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AssetROUReportingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link latestJournalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LATEST_JOURNAL_NUM: fieldBuilder.buildEdmTypeField(
          'LatestJournalNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link beginningNetBookReportingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEGINNING_NET_BOOK_REPORTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BeginningNetBookReportingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link beginningNetBookAccountingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEGINNING_NET_BOOK_ACCOUNTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BeginningNetBookAccountingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amortizationExpenseAccountingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMORTIZATION_EXPENSE_ACCOUNTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AmortizationExpenseAccountingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accumulatedAmortizationReportingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCUMULATED_AMORTIZATION_REPORTING_AMOUNT:
          fieldBuilder.buildEdmTypeField(
            'AccumulatedAmortizationReportingAmount',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link months} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTHS: fieldBuilder.buildEdmTypeField('Months', 'Edm.Int32', false),
        /**
         * Static representation of the {@link netBookValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_BOOK_VALUE: fieldBuilder.buildEdmTypeField(
          'NetBookValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reversed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSED: fieldBuilder.buildEnumField('Reversed', NoYes, true),
        /**
         * Static representation of the {@link journalPosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_POSTED: fieldBuilder.buildEnumField(
          'JournalPosted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link journalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUM: fieldBuilder.buildEdmTypeField(
          'JournalNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalCreated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_CREATED: fieldBuilder.buildEnumField(
          'JournalCreated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link beginningNetBookValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEGINNING_NET_BOOK_VALUE: fieldBuilder.buildEdmTypeField(
          'BeginningNetBookValue',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaseDepreciationSchedulesHistory)
      };
    }

    return this._schema;
  }
}
