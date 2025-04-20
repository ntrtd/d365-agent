/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsPlanEmployeesV2 } from './BenefitsPlanEmployeesV2';
import { BenefitsPlanEmployeesV2RequestBuilder } from './BenefitsPlanEmployeesV2RequestBuilder';
import { WorkersApi } from './WorkersApi';
import { BenefitLifeEventTypes } from './BenefitLifeEventTypes';
import { NoYes } from './NoYes';
import { BenefitEmployeePlanStatus } from './BenefitEmployeePlanStatus';
import { BenefitPlanTypeCode } from './BenefitPlanTypeCode';
import { BenefitCoverageCode } from './BenefitCoverageCode';
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
export class BenefitsPlanEmployeesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitsPlanEmployeesV2<DeSerializersT>, DeSerializersT>
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
  ): BenefitsPlanEmployeesV2Api<DeSerializersT> {
    return new BenefitsPlanEmployeesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      BenefitsPlanEmployeesV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [WorkersApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      WORKER: new OneToOneLink('Worker', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = BenefitsPlanEmployeesV2;

  requestBuilder(): BenefitsPlanEmployeesV2RequestBuilder<DeSerializersT> {
    return new BenefitsPlanEmployeesV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitsPlanEmployeesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitsPlanEmployeesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsPlanEmployeesV2<DeSerializersT>,
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
    typeof BenefitsPlanEmployeesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsPlanEmployeesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_PERIOD_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_OPTION_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REOPEN_REASON_CODE_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_EMPL_LIFE_EVENT_TYPES: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      BenefitLifeEventTypes,
      true,
      true
    >;
    PERCENTAGE: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LIFE_EVENT_AUTO_CANCEL_PLAN_PREV: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ESS_CHECKED_OUT: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENROLLMENT_REASON_CODE_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CANCELLATION_BY: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIFE_EVENT_ALLOW_CANCELLATION_PREV: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATUS: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      BenefitEmployeePlanStatus,
      true,
      true
    >;
    BENEFIT_CREDIT_HAS_RATE: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BENEFIT_CREDIT_APPLIED_VALUE: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_OPTION: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CANCELLATION_REASON_CODE_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLAN_TYPE_CODE: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      BenefitPlanTypeCode,
      true,
      true
    >;
    PROGRAM_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIFE_EVENT_ALLOW_CANCELLATION: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BENEFIT_CREDIT_LIFE_EVENT_PREVENT_SUB_ALLOCATION: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    L_IFE_EVENT_CHANGE_COVERAGE: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CANCELLATION_DATE_TIME: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LIFE_EVENT_AUTO_RE_OPEN_ELIGIBILITY: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENROLLMENT_START_DATE_TIME: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ANNUAL_CONTRIBUTION: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENROLLMENT_CONFIRMED_DATE_TIME: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COVERAGE_END_DATE_TIME: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BENEFIT_CREDIT_LIFE_EVENT_OPEN_ALLOCATION: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LIFE_EVENT_BENEFIT_CREDIT_APPLIED_VALUE: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADMINISTRATIVE_START_DATE_TIME: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAY_PERIOD: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BUNDLE_MASTER: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LIFE_EVENT_AUTO_CANCEL_PLAN: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CANCEL_REOPEN_LINK: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIFE_EVENT_REPORTING_WINDOW_PREV: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LIFE_EVENT_CHANGE_COVERAGE_PREV: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEDUCTION_END_DATE_TIME: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LIFE_EVENT_PREV: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEDUCTION_START_DATE_TIME: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COVERAGE_CODE: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      BenefitCoverageCode,
      true,
      true
    >;
    AMOUNT_EMPLOYEE: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CANCELLATION: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LIFE_EVENT_AUTO_RE_OPEN_ELIGIBILITY_PREV: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LIFE_EVENT_CHANGE_TO_NEW_PLAN: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LIFE_EVENT_CHANGE_TO_NEW_PLAN_PREV: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LIFE_EVENT_REPORTING_WINDOW: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COVERAGE_START_DATE_TIME: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AMOUNT_ADMIN: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COVERAGE_AMOUNT: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENROLLMENT_CONFIRMED: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENROLLMENT_CONFIRMED_BY: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIFE_EVENT: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BENEFIT_CREDIT_LIFE_EVENT_PREVENT_ADD_ALLOCATION: EnumField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AMOUNT_EMPLOYER: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BUNDLED_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      BenefitsPlanEmployeesV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitsPlanEmployeesV2<DeSerializers>>;
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
         * Static representation of the {@link planPeriodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'PlanPeriodId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link planId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_ID: fieldBuilder.buildEdmTypeField('PlanId', 'Edm.String', false),
        /**
         * Static representation of the {@link coverageOptionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_OPTION_ID: fieldBuilder.buildEdmTypeField(
          'CoverageOptionId',
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
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link reopenReasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REOPEN_REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'ReopenReasonCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodEmplLifeEventTypes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_EMPL_LIFE_EVENT_TYPES: fieldBuilder.buildEnumField(
          'PeriodEmplLifeEventTypes',
          BenefitLifeEventTypes,
          true
        ),
        /**
         * Static representation of the {@link percentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'Percentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lifeEventAutoCancelPlanPrev} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_AUTO_CANCEL_PLAN_PREV: fieldBuilder.buildEnumField(
          'LifeEventAutoCancelPlanPrev',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link essCheckedOut} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESS_CHECKED_OUT: fieldBuilder.buildEnumField(
          'ESSCheckedOut',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enrollmentReasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENROLLMENT_REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'EnrollmentReasonCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cancellationBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLATION_BY: fieldBuilder.buildEdmTypeField(
          'CancellationBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lifeEventAllowCancellationPrev} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_ALLOW_CANCELLATION_PREV: fieldBuilder.buildEnumField(
          'LifeEventAllowCancellationPrev',
          NoYes,
          true
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
         * Static representation of the {@link benefitCreditHasRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_CREDIT_HAS_RATE: fieldBuilder.buildEnumField(
          'BenefitCreditHasRate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link benefitCreditAppliedValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_CREDIT_APPLIED_VALUE: fieldBuilder.buildEdmTypeField(
          'BenefitCreditAppliedValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_OPTION: fieldBuilder.buildEnumField(
          'DefaultOption',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cancellationReasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLATION_REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'CancellationReasonCodeId',
          'Edm.String',
          true
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
         * Static representation of the {@link programId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROGRAM_ID: fieldBuilder.buildEdmTypeField(
          'ProgramId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lifeEventAllowCancellation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_ALLOW_CANCELLATION: fieldBuilder.buildEnumField(
          'LifeEventAllowCancellation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link benefitCreditLifeEventPreventSubAllocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_CREDIT_LIFE_EVENT_PREVENT_SUB_ALLOCATION:
          fieldBuilder.buildEnumField(
            'BenefitCreditLifeEventPreventSubAllocation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link lIfeEventChangeCoverage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        L_IFE_EVENT_CHANGE_COVERAGE: fieldBuilder.buildEnumField(
          'LIfeEventChangeCoverage',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cancellationDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLATION_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'CancellationDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link lifeEventAutoReOpenEligibility} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_AUTO_RE_OPEN_ELIGIBILITY: fieldBuilder.buildEnumField(
          'LifeEventAutoReOpenEligibility',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enrollmentStartDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENROLLMENT_START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'EnrollmentStartDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link annualContribution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNUAL_CONTRIBUTION: fieldBuilder.buildEdmTypeField(
          'AnnualContribution',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link enrollmentConfirmedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENROLLMENT_CONFIRMED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'EnrollmentConfirmedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link coverageEndDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_END_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'CoverageEndDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link benefitCreditLifeEventOpenAllocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_CREDIT_LIFE_EVENT_OPEN_ALLOCATION: fieldBuilder.buildEnumField(
          'BenefitCreditLifeEventOpenAllocation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lifeEventBenefitCreditAppliedValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_BENEFIT_CREDIT_APPLIED_VALUE: fieldBuilder.buildEdmTypeField(
          'LifeEventBenefitCreditAppliedValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link administrativeStartDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADMINISTRATIVE_START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'AdministrativeStartDateTime',
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
         * Static representation of the {@link bundleMaster} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUNDLE_MASTER: fieldBuilder.buildEnumField('BundleMaster', NoYes, true),
        /**
         * Static representation of the {@link lifeEventAutoCancelPlan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_AUTO_CANCEL_PLAN: fieldBuilder.buildEnumField(
          'LifeEventAutoCancelPlan',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cancelReopenLink} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCEL_REOPEN_LINK: fieldBuilder.buildEdmTypeField(
          'CancelReopenLink',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lifeEventReportingWindowPrev} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_REPORTING_WINDOW_PREV: fieldBuilder.buildEdmTypeField(
          'LifeEventReportingWindowPrev',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link lifeEventChangeCoveragePrev} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_CHANGE_COVERAGE_PREV: fieldBuilder.buildEnumField(
          'LifeEventChangeCoveragePrev',
          NoYes,
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
         * Static representation of the {@link lifeEventPrev} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_PREV: fieldBuilder.buildEnumField(
          'LifeEventPrev',
          NoYes,
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
         * Static representation of the {@link coverageCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_CODE: fieldBuilder.buildEnumField(
          'CoverageCode',
          BenefitCoverageCode,
          true
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
         * Static representation of the {@link cancellation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLATION: fieldBuilder.buildEnumField('Cancellation', NoYes, true),
        /**
         * Static representation of the {@link lifeEventAutoReOpenEligibilityPrev} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_AUTO_RE_OPEN_ELIGIBILITY_PREV: fieldBuilder.buildEnumField(
          'LifeEventAutoReOpenEligibilityPrev',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lifeEventChangeToNewPlan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_CHANGE_TO_NEW_PLAN: fieldBuilder.buildEnumField(
          'LifeEventChangeToNewPlan',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lifeEventChangeToNewPlanPrev} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_CHANGE_TO_NEW_PLAN_PREV: fieldBuilder.buildEnumField(
          'LifeEventChangeToNewPlanPrev',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lifeEventReportingWindow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_REPORTING_WINDOW: fieldBuilder.buildEdmTypeField(
          'LifeEventReportingWindow',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link coverageStartDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'CoverageStartDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link amountAdmin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_ADMIN: fieldBuilder.buildEdmTypeField(
          'AmountAdmin',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link coverageAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CoverageAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link enrollmentConfirmed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENROLLMENT_CONFIRMED: fieldBuilder.buildEnumField(
          'EnrollmentConfirmed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enrollmentConfirmedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENROLLMENT_CONFIRMED_BY: fieldBuilder.buildEdmTypeField(
          'EnrollmentConfirmedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lifeEvent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT: fieldBuilder.buildEnumField('LifeEvent', NoYes, true),
        /**
         * Static representation of the {@link benefitCreditLifeEventPreventAddAllocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_CREDIT_LIFE_EVENT_PREVENT_ADD_ALLOCATION:
          fieldBuilder.buildEnumField(
            'BenefitCreditLifeEventPreventAddAllocation',
            NoYes,
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
        /**
         * Static representation of the {@link bundledId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUNDLED_ID: fieldBuilder.buildEdmTypeField(
          'BundledId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsPlanEmployeesV2)
      };
    }

    return this._schema;
  }
}
