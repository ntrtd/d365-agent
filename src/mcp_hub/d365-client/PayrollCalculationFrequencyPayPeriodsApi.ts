/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayrollCalculationFrequencyPayPeriods } from './PayrollCalculationFrequencyPayPeriods';
import { PayrollCalculationFrequencyPayPeriodsRequestBuilder } from './PayrollCalculationFrequencyPayPeriodsRequestBuilder';
import { PayrollCalculationFrequenciesApi } from './PayrollCalculationFrequenciesApi';
import { PayPeriodsApi } from './PayPeriodsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PayrollCalculationFrequencyPayPeriodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      PayrollCalculationFrequencyPayPeriods<DeSerializersT>,
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
  ): PayrollCalculationFrequencyPayPeriodsApi<DeSerializersT> {
    return new PayrollCalculationFrequencyPayPeriodsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link payrollCalculationFrequency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_CALCULATION_FREQUENCY: OneToOneLink<
      PayrollCalculationFrequencyPayPeriods<DeSerializersT>,
      DeSerializersT,
      PayrollCalculationFrequenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_PERIOD: OneToOneLink<
      PayrollCalculationFrequencyPayPeriods<DeSerializersT>,
      DeSerializersT,
      PayPeriodsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayrollCalculationFrequenciesApi<DeSerializersT>,
      PayPeriodsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAYROLL_CALCULATION_FREQUENCY: new OneToOneLink(
        'PayrollCalculationFrequency',
        this,
        linkedApis[0]
      ),
      PAY_PERIOD: new OneToOneLink('PayPeriod', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = PayrollCalculationFrequencyPayPeriods;

  requestBuilder(): PayrollCalculationFrequencyPayPeriodsRequestBuilder<DeSerializersT> {
    return new PayrollCalculationFrequencyPayPeriodsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PayrollCalculationFrequencyPayPeriods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayrollCalculationFrequencyPayPeriods<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayrollCalculationFrequencyPayPeriods<DeSerializersT>,
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
    typeof PayrollCalculationFrequencyPayPeriods,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayrollCalculationFrequencyPayPeriods,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CALCULATION_FREQUENCY_ID: OrderableEdmTypeField<
      PayrollCalculationFrequencyPayPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAY_CYCLE_ID: OrderableEdmTypeField<
      PayrollCalculationFrequencyPayPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_END_DATE: OrderableEdmTypeField<
      PayrollCalculationFrequencyPayPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PERIOD_STATUS: EnumField<
      PayrollCalculationFrequencyPayPeriods<DeSerializers>,
      DeSerializersT,
      PayrollPeriodStatus,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PayrollCalculationFrequencyPayPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_START_DATE: OrderableEdmTypeField<
      PayrollCalculationFrequencyPayPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFAULT_PAYMENT_DATE: OrderableEdmTypeField<
      PayrollCalculationFrequencyPayPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollCalculationFrequency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_CALCULATION_FREQUENCY: OneToOneLink<
      PayrollCalculationFrequencyPayPeriods<DeSerializersT>,
      DeSerializersT,
      PayrollCalculationFrequenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_PERIOD: OneToOneLink<
      PayrollCalculationFrequencyPayPeriods<DeSerializersT>,
      DeSerializersT,
      PayPeriodsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayrollCalculationFrequencyPayPeriods<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link calculationFrequencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_FREQUENCY_ID: fieldBuilder.buildEdmTypeField(
          'CalculationFrequencyId',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link periodEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_END_DATE: fieldBuilder.buildEdmTypeField(
          'PeriodEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link periodStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_STATUS: fieldBuilder.buildEnumField(
          'PeriodStatus',
          PayrollPeriodStatus,
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
         * Static representation of the {@link periodStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_START_DATE: fieldBuilder.buildEdmTypeField(
          'PeriodStartDate',
          'Edm.DateTimeOffset',
          false
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
        ALL_FIELDS: new AllFields('*', PayrollCalculationFrequencyPayPeriods)
      };
    }

    return this._schema;
  }
}
