/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeasePaymentScheduleContractsHistory } from './LeasePaymentScheduleContractsHistory';
import { LeasePaymentScheduleContractsHistoryRequestBuilder } from './LeasePaymentScheduleContractsHistoryRequestBuilder';
import { AssetLeaseCreatedBy } from './AssetLeaseCreatedBy';
import { AssetLeaseLeaseTermInterval } from './AssetLeaseLeaseTermInterval';
import { NoYesCombo } from './NoYesCombo';
import { AssetLeasePaymentFrequency } from './AssetLeasePaymentFrequency';
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
export class LeasePaymentScheduleContractsHistoryApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      LeasePaymentScheduleContractsHistory<DeSerializersT>,
      DeSerializersT
    >
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
  ): LeasePaymentScheduleContractsHistoryApi<DeSerializersT> {
    return new LeasePaymentScheduleContractsHistoryApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LeasePaymentScheduleContractsHistory;

  requestBuilder(): LeasePaymentScheduleContractsHistoryRequestBuilder<DeSerializersT> {
    return new LeasePaymentScheduleContractsHistoryRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LeasePaymentScheduleContractsHistory<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LeasePaymentScheduleContractsHistory<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeasePaymentScheduleContractsHistory<DeSerializersT>,
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
    typeof LeasePaymentScheduleContractsHistory,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeasePaymentScheduleContractsHistory,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeasePaymentScheduleContractsHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEASE_ID: OrderableEdmTypeField<
      LeasePaymentScheduleContractsHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEASE_COUNTER: OrderableEdmTypeField<
      LeasePaymentScheduleContractsHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      LeasePaymentScheduleContractsHistory<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      LeasePaymentScheduleContractsHistory<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COST_PER_UNIT: OrderableEdmTypeField<
      LeasePaymentScheduleContractsHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INDEX_RATE: OrderableEdmTypeField<
      LeasePaymentScheduleContractsHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYMENT_AMOUNT: OrderableEdmTypeField<
      LeasePaymentScheduleContractsHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TERM: OrderableEdmTypeField<
      LeasePaymentScheduleContractsHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECORD_CREATED_BY: EnumField<
      LeasePaymentScheduleContractsHistory<DeSerializers>,
      DeSerializersT,
      AssetLeaseCreatedBy,
      true,
      true
    >;
    INTERVAL: EnumField<
      LeasePaymentScheduleContractsHistory<DeSerializers>,
      DeSerializersT,
      AssetLeaseLeaseTermInterval,
      true,
      true
    >;
    INDEX_TYPE: OrderableEdmTypeField<
      LeasePaymentScheduleContractsHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIODS: OrderableEdmTypeField<
      LeasePaymentScheduleContractsHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXCERCISE: EnumField<
      LeasePaymentScheduleContractsHistory<DeSerializers>,
      DeSerializersT,
      NoYesCombo,
      true,
      true
    >;
    FREQUENCY: EnumField<
      LeasePaymentScheduleContractsHistory<DeSerializers>,
      DeSerializersT,
      AssetLeasePaymentFrequency,
      true,
      true
    >;
    VARIABLE_PAYMENT: OrderableEdmTypeField<
      LeasePaymentScheduleContractsHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LeasePaymentScheduleContractsHistory<DeSerializers>>;
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
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link costPerUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_PER_UNIT: fieldBuilder.buildEdmTypeField(
          'CostPerUnit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link indexRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEX_RATE: fieldBuilder.buildEdmTypeField(
          'IndexRate',
          'Edm.Decimal',
          false
        ),
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
         * Static representation of the {@link term} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERM: fieldBuilder.buildEdmTypeField('Term', 'Edm.String', true),
        /**
         * Static representation of the {@link recordCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_CREATED_BY: fieldBuilder.buildEnumField(
          'RecordCreatedBy',
          AssetLeaseCreatedBy,
          true
        ),
        /**
         * Static representation of the {@link interval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERVAL: fieldBuilder.buildEnumField(
          'Interval',
          AssetLeaseLeaseTermInterval,
          true
        ),
        /**
         * Static representation of the {@link indexType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEX_TYPE: fieldBuilder.buildEdmTypeField(
          'IndexType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIODS: fieldBuilder.buildEdmTypeField('Periods', 'Edm.Int32', false),
        /**
         * Static representation of the {@link excercise} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCERCISE: fieldBuilder.buildEnumField('Excercise', NoYesCombo, true),
        /**
         * Static representation of the {@link frequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREQUENCY: fieldBuilder.buildEnumField(
          'Frequency',
          AssetLeasePaymentFrequency,
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeasePaymentScheduleContractsHistory)
      };
    }

    return this._schema;
  }
}
