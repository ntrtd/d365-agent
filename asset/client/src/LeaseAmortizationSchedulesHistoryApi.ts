/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaseAmortizationSchedulesHistory } from './LeaseAmortizationSchedulesHistory';
import { LeaseAmortizationSchedulesHistoryRequestBuilder } from './LeaseAmortizationSchedulesHistoryRequestBuilder';
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
export class LeaseAmortizationSchedulesHistoryApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LeaseAmortizationSchedulesHistory<DeSerializersT>, DeSerializersT>
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
  ): LeaseAmortizationSchedulesHistoryApi<DeSerializersT> {
    return new LeaseAmortizationSchedulesHistoryApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LeaseAmortizationSchedulesHistory;

  requestBuilder(): LeaseAmortizationSchedulesHistoryRequestBuilder<DeSerializersT> {
    return new LeaseAmortizationSchedulesHistoryRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LeaseAmortizationSchedulesHistory<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LeaseAmortizationSchedulesHistory<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeaseAmortizationSchedulesHistory<DeSerializersT>,
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
    typeof LeaseAmortizationSchedulesHistory,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaseAmortizationSchedulesHistory,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEASE_ID: OrderableEdmTypeField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_LEASE_COUNTER: OrderableEdmTypeField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PERIOD_START_DATE: OrderableEdmTypeField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DISCOUNTED_PAYMENT_AMOUNT: OrderableEdmTypeField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHORT_TERM_JOURNAL_POSTED: EnumField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTEREST: OrderableEdmTypeField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCRUED_INTEREST: OrderableEdmTypeField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOURNAL_POSTED: EnumField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FIN_TAG_DISPLAY_VALUE: OrderableEdmTypeField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_PAYMENT: OrderableEdmTypeField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LONG_TERM_LIABILITY: OrderableEdmTypeField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTEREST_EXPENSE: OrderableEdmTypeField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHORT_TERM_JOURNAL_CREATED: EnumField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BEGINNING_BALANCE: OrderableEdmTypeField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENDING_BALANCE: OrderableEdmTypeField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHORT_TERM_JOURNAL_NUM: OrderableEdmTypeField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MONTHS: OrderableEdmTypeField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PERIOD: OrderableEdmTypeField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    JOURNAL_NUM: OrderableEdmTypeField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_END_DATE: OrderableEdmTypeField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEASE_COUNTER: OrderableEdmTypeField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRINCIPAL_BALANCE: OrderableEdmTypeField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHORT_TERM_LIABILITY: OrderableEdmTypeField<
      LeaseAmortizationSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LeaseAmortizationSchedulesHistory<DeSerializers>>;
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
         * Static representation of the {@link periodStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_START_DATE: fieldBuilder.buildEdmTypeField(
          'PeriodStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link discountedPaymentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNTED_PAYMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DiscountedPaymentAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shortTermJournalPosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_TERM_JOURNAL_POSTED: fieldBuilder.buildEnumField(
          'ShortTermJournalPosted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link interest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST: fieldBuilder.buildEdmTypeField(
          'Interest',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accruedInterest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUED_INTEREST: fieldBuilder.buildEdmTypeField(
          'AccruedInterest',
          'Edm.Decimal',
          false
        ),
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
         * Static representation of the {@link finTagDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIN_TAG_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'FinTagDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_PAYMENT: fieldBuilder.buildEdmTypeField(
          'TotalPayment',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link longTermLiability} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LONG_TERM_LIABILITY: fieldBuilder.buildEdmTypeField(
          'LongTermLiability',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link interestExpense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_EXPENSE: fieldBuilder.buildEdmTypeField(
          'InterestExpense',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shortTermJournalCreated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_TERM_JOURNAL_CREATED: fieldBuilder.buildEnumField(
          'ShortTermJournalCreated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link beginningBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEGINNING_BALANCE: fieldBuilder.buildEdmTypeField(
          'BeginningBalance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link endingBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENDING_BALANCE: fieldBuilder.buildEdmTypeField(
          'EndingBalance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shortTermJournalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_TERM_JOURNAL_NUM: fieldBuilder.buildEdmTypeField(
          'ShortTermJournalNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link months} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTHS: fieldBuilder.buildEdmTypeField('Months', 'Edm.Int32', false),
        /**
         * Static representation of the {@link period} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD: fieldBuilder.buildEdmTypeField('Period', 'Edm.Int32', false),
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
         * Static representation of the {@link periodEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_END_DATE: fieldBuilder.buildEdmTypeField(
          'PeriodEndDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link principalBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINCIPAL_BALANCE: fieldBuilder.buildEdmTypeField(
          'PrincipalBalance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shortTermLiability} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_TERM_LIABILITY: fieldBuilder.buildEdmTypeField(
          'ShortTermLiability',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaseAmortizationSchedulesHistory)
      };
    }

    return this._schema;
  }
}
