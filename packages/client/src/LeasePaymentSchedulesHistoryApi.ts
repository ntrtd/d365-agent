/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeasePaymentSchedulesHistory } from './LeasePaymentSchedulesHistory';
import { LeasePaymentSchedulesHistoryRequestBuilder } from './LeasePaymentSchedulesHistoryRequestBuilder';
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
export class LeasePaymentSchedulesHistoryApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LeasePaymentSchedulesHistory<DeSerializersT>, DeSerializersT>
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
  ): LeasePaymentSchedulesHistoryApi<DeSerializersT> {
    return new LeasePaymentSchedulesHistoryApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LeasePaymentSchedulesHistory;

  requestBuilder(): LeasePaymentSchedulesHistoryRequestBuilder<DeSerializersT> {
    return new LeasePaymentSchedulesHistoryRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeasePaymentSchedulesHistory<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LeasePaymentSchedulesHistory<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeasePaymentSchedulesHistory<DeSerializersT>,
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
    typeof LeasePaymentSchedulesHistory,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeasePaymentSchedulesHistory,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeasePaymentSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEASE_ID: OrderableEdmTypeField<
      LeasePaymentSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEASE_COUNTER: OrderableEdmTypeField<
      LeasePaymentSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SCHEDULE_LINE_DATE: OrderableEdmTypeField<
      LeasePaymentSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STRAIGHT_LINE_COST: OrderableEdmTypeField<
      LeasePaymentSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIN_TAG_DISPLAY_VALUE: OrderableEdmTypeField<
      LeasePaymentSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_POSTED: EnumField<
      LeasePaymentSchedulesHistory<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_CONFIRMED: EnumField<
      LeasePaymentSchedulesHistory<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRESENT_VALUE: OrderableEdmTypeField<
      LeasePaymentSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_LEASE_COUNTER: OrderableEdmTypeField<
      LeasePaymentSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VARIABLE_PAYMENT: OrderableEdmTypeField<
      LeasePaymentSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_PRESENT_VALUE: OrderableEdmTypeField<
      LeasePaymentSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MONTHS: OrderableEdmTypeField<
      LeasePaymentSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    JOURNAL_CREATED: EnumField<
      LeasePaymentSchedulesHistory<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOURNAL_NUM: OrderableEdmTypeField<
      LeasePaymentSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTER: OrderableEdmTypeField<
      LeasePaymentSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PAYMENT_AMOUNT: OrderableEdmTypeField<
      LeasePaymentSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUMBER_OF_PAYMENT: OrderableEdmTypeField<
      LeasePaymentSchedulesHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LeasePaymentSchedulesHistory<DeSerializers>>;
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
         * Static representation of the {@link leaseCounter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_COUNTER: fieldBuilder.buildEdmTypeField(
          'LeaseCounter',
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
         * Static representation of the {@link straightLineCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STRAIGHT_LINE_COST: fieldBuilder.buildEdmTypeField(
          'StraightLineCost',
          'Edm.Decimal',
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
         * Static representation of the {@link journalPosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_POSTED: fieldBuilder.buildEnumField(
          'JournalPosted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link paymentConfirmed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CONFIRMED: fieldBuilder.buildEnumField(
          'PaymentConfirmed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link presentValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRESENT_VALUE: fieldBuilder.buildEdmTypeField(
          'PresentValue',
          'Edm.Decimal',
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
         * Static representation of the {@link variablePayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIABLE_PAYMENT: fieldBuilder.buildEdmTypeField(
          'VariablePayment',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalPresentValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_PRESENT_VALUE: fieldBuilder.buildEdmTypeField(
          'TotalPresentValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link months} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTHS: fieldBuilder.buildEdmTypeField('Months', 'Edm.Int32', false),
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
         * Static representation of the {@link journalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUM: fieldBuilder.buildEdmTypeField(
          'JournalNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link counter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTER: fieldBuilder.buildEdmTypeField('Counter', 'Edm.Int32', false),
        /**
         * Static representation of the {@link paymentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PaymentAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link numberOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'NumberOfPayment',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeasePaymentSchedulesHistory)
      };
    }

    return this._schema;
  }
}
