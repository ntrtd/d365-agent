/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsPeriods } from './BenefitsPeriods';
import { BenefitsPeriodsRequestBuilder } from './BenefitsPeriodsRequestBuilder';
import { BenefitPeriodEmployeesApi } from './BenefitPeriodEmployeesApi';
import { BenefitPeriodEmplGroupLifeEventsApi } from './BenefitPeriodEmplGroupLifeEventsApi';
import { BenefitPeriodEmplLifeEventsApi } from './BenefitPeriodEmplLifeEventsApi';
import { PayrollWorkerBenefitPlansApi } from './PayrollWorkerBenefitPlansApi';
import { BenefitsPeriodEmployeeLifeEventTransactionsApi } from './BenefitsPeriodEmployeeLifeEventTransactionsApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BenefitsPeriodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitsPeriods<DeSerializersT>, DeSerializersT>
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
  ): BenefitsPeriodsApi<DeSerializersT> {
    return new BenefitsPeriodsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link benefitPeriodEmployee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PERIOD_EMPLOYEE: OneToManyLink<
      BenefitsPeriods<DeSerializersT>,
      DeSerializersT,
      BenefitPeriodEmployeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitPeriodEmplGroupLifeEvent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PERIOD_EMPL_GROUP_LIFE_EVENT: OneToManyLink<
      BenefitsPeriods<DeSerializersT>,
      DeSerializersT,
      BenefitPeriodEmplGroupLifeEventsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitPeriodEmplLifeEvent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PERIOD_EMPL_LIFE_EVENT: OneToManyLink<
      BenefitsPeriods<DeSerializersT>,
      DeSerializersT,
      BenefitPeriodEmplLifeEventsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollWorkerBenefitPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_WORKER_BENEFIT_PLAN: OneToOneLink<
      BenefitsPeriods<DeSerializersT>,
      DeSerializersT,
      PayrollWorkerBenefitPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsPeriodEmployeeLifeEventTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PERIOD_EMPLOYEE_LIFE_EVENT_TRANSACTION: OneToManyLink<
      BenefitsPeriods<DeSerializersT>,
      DeSerializersT,
      BenefitsPeriodEmployeeLifeEventTransactionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitPeriodEmployeesApi<DeSerializersT>,
      BenefitPeriodEmplGroupLifeEventsApi<DeSerializersT>,
      BenefitPeriodEmplLifeEventsApi<DeSerializersT>,
      PayrollWorkerBenefitPlansApi<DeSerializersT>,
      BenefitsPeriodEmployeeLifeEventTransactionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFIT_PERIOD_EMPLOYEE: new OneToManyLink(
        'BenefitPeriodEmployee',
        this,
        linkedApis[0]
      ),
      BENEFIT_PERIOD_EMPL_GROUP_LIFE_EVENT: new OneToManyLink(
        'BenefitPeriodEmplGroupLifeEvent',
        this,
        linkedApis[1]
      ),
      BENEFIT_PERIOD_EMPL_LIFE_EVENT: new OneToManyLink(
        'BenefitPeriodEmplLifeEvent',
        this,
        linkedApis[2]
      ),
      PAYROLL_WORKER_BENEFIT_PLAN: new OneToOneLink(
        'PayrollWorkerBenefitPlan',
        this,
        linkedApis[3]
      ),
      BENEFITS_PERIOD_EMPLOYEE_LIFE_EVENT_TRANSACTION: new OneToManyLink(
        'BenefitsPeriodEmployeeLifeEventTransaction',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = BenefitsPeriods;

  requestBuilder(): BenefitsPeriodsRequestBuilder<DeSerializersT> {
    return new BenefitsPeriodsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitsPeriods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BenefitsPeriods<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BenefitsPeriods<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BenefitsPeriods, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsPeriods,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERIOD_ID: OrderableEdmTypeField<
      BenefitsPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      BenefitsPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ENROLL_END_DATE_TIME: OrderableEdmTypeField<
      BenefitsPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PREVIOUS_PERIOD_ID: OrderableEdmTypeField<
      BenefitsPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENROLL_START_DATE_TIME: OrderableEdmTypeField<
      BenefitsPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      BenefitsPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ENROLL_START_DATE: OrderableEdmTypeField<
      BenefitsPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ENROLL_END_DATE: OrderableEdmTypeField<
      BenefitsPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitPeriodEmployee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PERIOD_EMPLOYEE: OneToManyLink<
      BenefitsPeriods<DeSerializersT>,
      DeSerializersT,
      BenefitPeriodEmployeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitPeriodEmplGroupLifeEvent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PERIOD_EMPL_GROUP_LIFE_EVENT: OneToManyLink<
      BenefitsPeriods<DeSerializersT>,
      DeSerializersT,
      BenefitPeriodEmplGroupLifeEventsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitPeriodEmplLifeEvent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PERIOD_EMPL_LIFE_EVENT: OneToManyLink<
      BenefitsPeriods<DeSerializersT>,
      DeSerializersT,
      BenefitPeriodEmplLifeEventsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollWorkerBenefitPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_WORKER_BENEFIT_PLAN: OneToOneLink<
      BenefitsPeriods<DeSerializersT>,
      DeSerializersT,
      PayrollWorkerBenefitPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsPeriodEmployeeLifeEventTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PERIOD_EMPLOYEE_LIFE_EVENT_TRANSACTION: OneToManyLink<
      BenefitsPeriods<DeSerializersT>,
      DeSerializersT,
      BenefitsPeriodEmployeeLifeEventTransactionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitsPeriods<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link periodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'PeriodId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link enrollEndDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENROLL_END_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'EnrollEndDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link previousPeriodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVIOUS_PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'PreviousPeriodId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enrollStartDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENROLL_START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'EnrollStartDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link enrollStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENROLL_START_DATE: fieldBuilder.buildEdmTypeField(
          'EnrollStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link enrollEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENROLL_END_DATE: fieldBuilder.buildEdmTypeField(
          'EnrollEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsPeriods)
      };
    }

    return this._schema;
  }
}
