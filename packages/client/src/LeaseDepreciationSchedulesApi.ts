/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaseDepreciationSchedules } from './LeaseDepreciationSchedules';
import { LeaseDepreciationSchedulesRequestBuilder } from './LeaseDepreciationSchedulesRequestBuilder';
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
export class LeaseDepreciationSchedulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LeaseDepreciationSchedules<DeSerializersT>, DeSerializersT>
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
  ): LeaseDepreciationSchedulesApi<DeSerializersT> {
    return new LeaseDepreciationSchedulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LeaseDepreciationSchedules;

  requestBuilder(): LeaseDepreciationSchedulesRequestBuilder<DeSerializersT> {
    return new LeaseDepreciationSchedulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaseDepreciationSchedules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LeaseDepreciationSchedules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeaseDepreciationSchedules<DeSerializersT>,
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
    typeof LeaseDepreciationSchedules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaseDepreciationSchedules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEASE_ID: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_START_DATE: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AMORTIZATION_EXPENSE_REPORTING_AMOUNT: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCHANGE_RATE_REPORTING: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERIOD: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ASSET_ROU_ACCOUNTING_AMOUNT: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCUMULATED_AMORTIZATION: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NET_BOOK_ACCOUNTING_AMOUNT: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NET_BOOK_REPORTING_AMOUNT: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_END_DATE: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FIN_TAG_DISPLAY_VALUE: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCUMULATED_AMORTIZATION_ACCOUNTING_AMOUNT: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMORTIZATION_EXPENSE: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSET_ROU_TRANSACTION_AMOUNT: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSET_ROU_REPORTING_AMOUNT: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LATEST_JOURNAL_NUM: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MONTH: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BEGINNING_NET_BOOK_REPORTING_AMOUNT: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BEGINNING_NET_BOOK_ACCOUNTING_AMOUNT: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMORTIZATION_EXPENSE_ACCOUNTING_AMOUNT: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCUMULATED_AMORTIZATION_REPORTING_AMOUNT: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NET_BOOK_VALUE: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REVERSED: EnumField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOURNAL_POSTED: EnumField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BEGINNING_NET_BOOK_VALUE: OrderableEdmTypeField<
      LeaseDepreciationSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LeaseDepreciationSchedules<DeSerializers>>;
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
         * Static representation of the {@link periodStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_START_DATE: fieldBuilder.buildEdmTypeField(
          'PeriodStartDate',
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
         * Static representation of the {@link journalBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalBatchNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
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
         * Static representation of the {@link month} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTH: fieldBuilder.buildEdmTypeField('Month', 'Edm.Int32', false),
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
        ALL_FIELDS: new AllFields('*', LeaseDepreciationSchedules)
      };
    }

    return this._schema;
  }
}
