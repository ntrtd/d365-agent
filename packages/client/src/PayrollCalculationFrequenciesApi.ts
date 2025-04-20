/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayrollCalculationFrequencies } from './PayrollCalculationFrequencies';
import { PayrollCalculationFrequenciesRequestBuilder } from './PayrollCalculationFrequenciesRequestBuilder';
import { PremiumEarningCodesApi } from './PremiumEarningCodesApi';
import { WorkerPositionEarningCodesV2Api } from './WorkerPositionEarningCodesV2Api';
import { WorkerPositionEarningCodesApi } from './WorkerPositionEarningCodesApi';
import { PayrollCalculationFrequencyPayPeriodsApi } from './PayrollCalculationFrequencyPayPeriodsApi';
import { PayrollCalculationBasis } from './PayrollCalculationBasis';
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
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class PayrollCalculationFrequenciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PayrollCalculationFrequencies<DeSerializersT>, DeSerializersT>
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
  ): PayrollCalculationFrequenciesApi<DeSerializersT> {
    return new PayrollCalculationFrequenciesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link premiumEarnings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PREMIUM_EARNINGS: OneToManyLink<
      PayrollCalculationFrequencies<DeSerializersT>,
      DeSerializersT,
      PremiumEarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerPositionEarningCodeV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_POSITION_EARNING_CODE_V_2: OneToManyLink<
      PayrollCalculationFrequencies<DeSerializersT>,
      DeSerializersT,
      WorkerPositionEarningCodesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerPositionEarningCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_POSITION_EARNING_CODE: OneToManyLink<
      PayrollCalculationFrequencies<DeSerializersT>,
      DeSerializersT,
      WorkerPositionEarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollCalculationFrequencyPayPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_CALCULATION_FREQUENCY_PAY_PERIOD: OneToManyLink<
      PayrollCalculationFrequencies<DeSerializersT>,
      DeSerializersT,
      PayrollCalculationFrequencyPayPeriodsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PremiumEarningCodesApi<DeSerializersT>,
      WorkerPositionEarningCodesV2Api<DeSerializersT>,
      WorkerPositionEarningCodesApi<DeSerializersT>,
      PayrollCalculationFrequencyPayPeriodsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PREMIUM_EARNINGS: new OneToManyLink(
        'PremiumEarnings',
        this,
        linkedApis[0]
      ),
      WORKER_POSITION_EARNING_CODE_V_2: new OneToManyLink(
        'WorkerPositionEarningCodeV2',
        this,
        linkedApis[1]
      ),
      WORKER_POSITION_EARNING_CODE: new OneToManyLink(
        'WorkerPositionEarningCode',
        this,
        linkedApis[2]
      ),
      PAYROLL_CALCULATION_FREQUENCY_PAY_PERIOD: new OneToManyLink(
        'PayrollCalculationFrequencyPayPeriod',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = PayrollCalculationFrequencies;

  requestBuilder(): PayrollCalculationFrequenciesRequestBuilder<DeSerializersT> {
    return new PayrollCalculationFrequenciesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PayrollCalculationFrequencies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayrollCalculationFrequencies<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayrollCalculationFrequencies<DeSerializersT>,
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
    typeof PayrollCalculationFrequencies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayrollCalculationFrequencies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FREQUENCY: OrderableEdmTypeField<
      PayrollCalculationFrequencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FREQUENCY_CONTROL: EnumField<
      PayrollCalculationFrequencies<DeSerializers>,
      DeSerializersT,
      PayrollCalculationBasis,
      true,
      true
    >;
    IS_IMMUTABLE: EnumField<
      PayrollCalculationFrequencies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PayrollCalculationFrequencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link premiumEarnings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PREMIUM_EARNINGS: OneToManyLink<
      PayrollCalculationFrequencies<DeSerializersT>,
      DeSerializersT,
      PremiumEarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerPositionEarningCodeV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_POSITION_EARNING_CODE_V_2: OneToManyLink<
      PayrollCalculationFrequencies<DeSerializersT>,
      DeSerializersT,
      WorkerPositionEarningCodesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerPositionEarningCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_POSITION_EARNING_CODE: OneToManyLink<
      PayrollCalculationFrequencies<DeSerializersT>,
      DeSerializersT,
      WorkerPositionEarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollCalculationFrequencyPayPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_CALCULATION_FREQUENCY_PAY_PERIOD: OneToManyLink<
      PayrollCalculationFrequencies<DeSerializersT>,
      DeSerializersT,
      PayrollCalculationFrequencyPayPeriodsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayrollCalculationFrequencies<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link frequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREQUENCY: fieldBuilder.buildEdmTypeField(
          'Frequency',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link frequencyControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREQUENCY_CONTROL: fieldBuilder.buildEnumField(
          'FrequencyControl',
          PayrollCalculationBasis,
          true
        ),
        /**
         * Static representation of the {@link isImmutable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_IMMUTABLE: fieldBuilder.buildEnumField('IsImmutable', NoYes, true),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayrollCalculationFrequencies)
      };
    }

    return this._schema;
  }
}
