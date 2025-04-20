/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayrollWorkerBenefitPlans } from './PayrollWorkerBenefitPlans';
import { PayrollWorkerBenefitPlansRequestBuilder } from './PayrollWorkerBenefitPlansRequestBuilder';
import { BaseWorkersApi } from './BaseWorkersApi';
import { BenefitsPlanTypesApi } from './BenefitsPlanTypesApi';
import { BenefitsPlansApi } from './BenefitsPlansApi';
import { BenefitsCoverageOptionsApi } from './BenefitsCoverageOptionsApi';
import { BenefitsPeriodsApi } from './BenefitsPeriodsApi';
import { BenefitPlanTypeCode } from './BenefitPlanTypeCode';
import { BenefitEmployeePlanStatus } from './BenefitEmployeePlanStatus';
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
export class PayrollWorkerBenefitPlansApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PayrollWorkerBenefitPlans<DeSerializersT>, DeSerializersT>
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
  ): PayrollWorkerBenefitPlansApi<DeSerializersT> {
    return new PayrollWorkerBenefitPlansApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link baseWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKER: OneToOneLink<
      PayrollWorkerBenefitPlans<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPlanType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PLAN_TYPE: OneToOneLink<
      PayrollWorkerBenefitPlans<DeSerializersT>,
      DeSerializersT,
      BenefitsPlanTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PLAN: OneToOneLink<
      PayrollWorkerBenefitPlans<DeSerializersT>,
      DeSerializersT,
      BenefitsPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsCoverageOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_COVERAGE_OPTION: OneToOneLink<
      PayrollWorkerBenefitPlans<DeSerializersT>,
      DeSerializersT,
      BenefitsCoverageOptionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PERIOD: OneToOneLink<
      PayrollWorkerBenefitPlans<DeSerializersT>,
      DeSerializersT,
      BenefitsPeriodsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BaseWorkersApi<DeSerializersT>,
      BenefitsPlanTypesApi<DeSerializersT>,
      BenefitsPlansApi<DeSerializersT>,
      BenefitsCoverageOptionsApi<DeSerializersT>,
      BenefitsPeriodsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BASE_WORKER: new OneToOneLink('BaseWorker', this, linkedApis[0]),
      BENEFITS_PLAN_TYPE: new OneToOneLink(
        'BenefitsPlanType',
        this,
        linkedApis[1]
      ),
      BENEFITS_PLAN: new OneToOneLink('BenefitsPlan', this, linkedApis[2]),
      BENEFITS_COVERAGE_OPTION: new OneToOneLink(
        'BenefitsCoverageOption',
        this,
        linkedApis[3]
      ),
      BENEFITS_PERIOD: new OneToOneLink('BenefitsPeriod', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = PayrollWorkerBenefitPlans;

  requestBuilder(): PayrollWorkerBenefitPlansRequestBuilder<DeSerializersT> {
    return new PayrollWorkerBenefitPlansRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayrollWorkerBenefitPlans<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayrollWorkerBenefitPlans<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayrollWorkerBenefitPlans<DeSerializersT>,
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
    typeof PayrollWorkerBenefitPlans,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayrollWorkerBenefitPlans,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      PayrollWorkerBenefitPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      PayrollWorkerBenefitPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_ID: OrderableEdmTypeField<
      PayrollWorkerBenefitPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_ID: OrderableEdmTypeField<
      PayrollWorkerBenefitPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_TYPE_ID: OrderableEdmTypeField<
      PayrollWorkerBenefitPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEDUCTION_START_DATE_TIME: OrderableEdmTypeField<
      PayrollWorkerBenefitPlans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PLAN_TYPE_CODE: EnumField<
      PayrollWorkerBenefitPlans<DeSerializers>,
      DeSerializersT,
      BenefitPlanTypeCode,
      true,
      true
    >;
    DEDUCTION_END_DATE_TIME: OrderableEdmTypeField<
      PayrollWorkerBenefitPlans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AMOUNT_EMPLOYEE: OrderableEdmTypeField<
      PayrollWorkerBenefitPlans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PayrollWorkerBenefitPlans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAY_PERIOD: OrderableEdmTypeField<
      PayrollWorkerBenefitPlans<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COVERAGE_OPTION_ID: OrderableEdmTypeField<
      PayrollWorkerBenefitPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PayrollWorkerBenefitPlans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STATUS: EnumField<
      PayrollWorkerBenefitPlans<DeSerializers>,
      DeSerializersT,
      BenefitEmployeePlanStatus,
      true,
      true
    >;
    AMOUNT_EMPLOYER: OrderableEdmTypeField<
      PayrollWorkerBenefitPlans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link baseWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKER: OneToOneLink<
      PayrollWorkerBenefitPlans<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPlanType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PLAN_TYPE: OneToOneLink<
      PayrollWorkerBenefitPlans<DeSerializersT>,
      DeSerializersT,
      BenefitsPlanTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PLAN: OneToOneLink<
      PayrollWorkerBenefitPlans<DeSerializersT>,
      DeSerializersT,
      BenefitsPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsCoverageOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_COVERAGE_OPTION: OneToOneLink<
      PayrollWorkerBenefitPlans<DeSerializersT>,
      DeSerializersT,
      BenefitsCoverageOptionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PERIOD: OneToOneLink<
      PayrollWorkerBenefitPlans<DeSerializersT>,
      DeSerializersT,
      BenefitsPeriodsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayrollWorkerBenefitPlans<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link planId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_ID: fieldBuilder.buildEdmTypeField('PlanId', 'Edm.String', false),
        /**
         * Static representation of the {@link planTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'PlanTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deductionStartDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'DeductionStartDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link planTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_TYPE_CODE: fieldBuilder.buildEnumField(
          'PlanTypeCode',
          BenefitPlanTypeCode,
          true
        ),
        /**
         * Static representation of the {@link deductionEndDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_END_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'DeductionEndDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link amountEmployee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_EMPLOYEE: fieldBuilder.buildEdmTypeField(
          'AmountEmployee',
          'Edm.Decimal',
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
         * Static representation of the {@link payPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_PERIOD: fieldBuilder.buildEdmTypeField(
          'PayPeriod',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link coverageOptionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_OPTION_ID: fieldBuilder.buildEdmTypeField(
          'CoverageOptionId',
          'Edm.String',
          true
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
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          BenefitEmployeePlanStatus,
          true
        ),
        /**
         * Static representation of the {@link amountEmployer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_EMPLOYER: fieldBuilder.buildEdmTypeField(
          'AmountEmployer',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayrollWorkerBenefitPlans)
      };
    }

    return this._schema;
  }
}
