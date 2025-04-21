/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayPeriods } from './PayPeriods';
import { PayPeriodsRequestBuilder } from './PayPeriodsRequestBuilder';
import { PayrollCalculationFrequencyPayPeriodsApi } from './PayrollCalculationFrequencyPayPeriodsApi';
import { PayCyclesApi } from './PayCyclesApi';
import { EarningStatementLineInquiriesApi } from './EarningStatementLineInquiriesApi';
import { PayrollPeriodStatus } from './PayrollPeriodStatus';
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
export class PayPeriodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayPeriods<DeSerializersT>, DeSerializersT>
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
  ): PayPeriodsApi<DeSerializersT> {
    return new PayPeriodsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link payrollCalculationFrequencyPayPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_CALCULATION_FREQUENCY_PAY_PERIOD: OneToManyLink<
      PayPeriods<DeSerializersT>,
      DeSerializersT,
      PayrollCalculationFrequencyPayPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payCycle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_CYCLE: OneToOneLink<
      PayPeriods<DeSerializersT>,
      DeSerializersT,
      PayCyclesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollEarningStatement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EARNING_STATEMENT: OneToManyLink<
      PayPeriods<DeSerializersT>,
      DeSerializersT,
      EarningStatementLineInquiriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayrollCalculationFrequencyPayPeriodsApi<DeSerializersT>,
      PayCyclesApi<DeSerializersT>,
      EarningStatementLineInquiriesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAYROLL_CALCULATION_FREQUENCY_PAY_PERIOD: new OneToManyLink(
        'PayrollCalculationFrequencyPayPeriod',
        this,
        linkedApis[0]
      ),
      PAY_CYCLE: new OneToOneLink('PayCycle', this, linkedApis[1]),
      PAYROLL_EARNING_STATEMENT: new OneToManyLink(
        'PayrollEarningStatement',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = PayPeriods;

  requestBuilder(): PayPeriodsRequestBuilder<DeSerializersT> {
    return new PayPeriodsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayPeriods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PayPeriods<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PayPeriods<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PayPeriods, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PayPeriods, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PAY_CYCLE_ID: OrderableEdmTypeField<
      PayPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_START_DATE: OrderableEdmTypeField<
      PayPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PERIOD_END_DATE: OrderableEdmTypeField<
      PayPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMMENTS: OrderableEdmTypeField<
      PayPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      PayPeriods<DeSerializers>,
      DeSerializersT,
      PayrollPeriodStatus,
      true,
      true
    >;
    DEFAULT_PAYMENT_DATE: OrderableEdmTypeField<
      PayPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollCalculationFrequencyPayPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_CALCULATION_FREQUENCY_PAY_PERIOD: OneToManyLink<
      PayPeriods<DeSerializersT>,
      DeSerializersT,
      PayrollCalculationFrequencyPayPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payCycle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_CYCLE: OneToOneLink<
      PayPeriods<DeSerializersT>,
      DeSerializersT,
      PayCyclesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollEarningStatement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EARNING_STATEMENT: OneToManyLink<
      PayPeriods<DeSerializersT>,
      DeSerializersT,
      EarningStatementLineInquiriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayPeriods<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link payCycleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_CYCLE_ID: fieldBuilder.buildEdmTypeField(
          'PayCycleId',
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
         * Static representation of the {@link periodEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_END_DATE: fieldBuilder.buildEdmTypeField(
          'PeriodEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link comments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENTS: fieldBuilder.buildEdmTypeField(
          'Comments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          PayrollPeriodStatus,
          true
        ),
        /**
         * Static representation of the {@link defaultPaymentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PAYMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DefaultPaymentDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayPeriods)
      };
    }

    return this._schema;
  }
}
