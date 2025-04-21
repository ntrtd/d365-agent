/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsPlans } from './BenefitsPlans';
import { BenefitsPlansRequestBuilder } from './BenefitsPlansRequestBuilder';
import { BenefitsPlanEligibilityRulesApi } from './BenefitsPlanEligibilityRulesApi';
import { BenefitsProgramsApi } from './BenefitsProgramsApi';
import { BenefitsBundlesApi } from './BenefitsBundlesApi';
import { PayrollWorkerBenefitPlansApi } from './PayrollWorkerBenefitPlansApi';
import { NoYes } from './NoYes';
import { BenefitPlanContribution } from './BenefitPlanContribution';
import { BenefitProgramPlanStatus } from './BenefitProgramPlanStatus';
import { BenefitCovIncDirection } from './BenefitCovIncDirection';
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
export class BenefitsPlansApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitsPlans<DeSerializersT>, DeSerializersT>
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
  ): BenefitsPlansApi<DeSerializersT> {
    return new BenefitsPlansApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link benefitsPlanEligibilityRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PLAN_ELIGIBILITY_RULE: OneToManyLink<
      BenefitsPlans<DeSerializersT>,
      DeSerializersT,
      BenefitsPlanEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsProgram} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PROGRAM: OneToOneLink<
      BenefitsPlans<DeSerializersT>,
      DeSerializersT,
      BenefitsProgramsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsBundle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_BUNDLE: OneToOneLink<
      BenefitsPlans<DeSerializersT>,
      DeSerializersT,
      BenefitsBundlesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollWorkerBenefitPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_WORKER_BENEFIT_PLAN: OneToOneLink<
      BenefitsPlans<DeSerializersT>,
      DeSerializersT,
      PayrollWorkerBenefitPlansApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitsPlanEligibilityRulesApi<DeSerializersT>,
      BenefitsProgramsApi<DeSerializersT>,
      BenefitsBundlesApi<DeSerializersT>,
      PayrollWorkerBenefitPlansApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFITS_PLAN_ELIGIBILITY_RULE: new OneToManyLink(
        'BenefitsPlanEligibilityRule',
        this,
        linkedApis[0]
      ),
      BENEFITS_PROGRAM: new OneToOneLink(
        'BenefitsProgram',
        this,
        linkedApis[1]
      ),
      BENEFITS_BUNDLE: new OneToOneLink('BenefitsBundle', this, linkedApis[2]),
      PAYROLL_WORKER_BENEFIT_PLAN: new OneToOneLink(
        'PayrollWorkerBenefitPlan',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = BenefitsPlans;

  requestBuilder(): BenefitsPlansRequestBuilder<DeSerializersT> {
    return new BenefitsPlansRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitsPlans<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BenefitsPlans<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BenefitsPlans<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BenefitsPlans, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BenefitsPlans, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PLAN_ID: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BENEFIT_SUPPLIER_VENDOR_ACCOUNT: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACA_REPORTABLE: EnumField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTRIBUTOR: EnumField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      BenefitPlanContribution,
      true,
      true
    >;
    INCEPTION_DATE_TIME: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POST_TAX_ELIGIBLE: EnumField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BENEFIT_SUPPLIER_EXPENSE_ACCOUNT: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUNDLE_ID: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      BenefitProgramPlanStatus,
      true,
      true
    >;
    EVIDENCE_OF_INSURABILITY_AMOUNT: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRE_TAX_ELIGIBLE: EnumField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BENEFIT_ADMINISTRATOR_EXPENSE_ACCOUNT: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BENEFIT_ADMINISTRATOR_CURRENCY: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLOSED_FOR_NEW_ENROLLMENTS: EnumField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEPARTMENT_ID: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_CONTINUE_ENROLLMENT: EnumField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMPLOYER_MATCH_PERCENT: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EMPLOYER_MATCH: EnumField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MAXIMUM_ANNUAL_CONTRIBUTION: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROGRAM_ID: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUNDLE_REQUIRED: EnumField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMPLOYER_MAXIMUM_ANNUAL_AMOUNT: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PLAN_INFO: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRORATE_CONTRIBUTIONS: EnumField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HIPAA: EnumField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MANDATORY_PLAN: EnumField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PLAN_TYPE_ID: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COBRA: EnumField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTO_ENROLL_BY_DEFAULT: EnumField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUNDLE_MASTER: EnumField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MINIMUM_COVERAGE: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COVERAGE_INCREMENTAL_DIRECTION: EnumField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      BenefitCovIncDirection,
      true,
      true
    >;
    BENEFIT_ADMINISTRATOR_ALTERNATE_REFERENCE: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYER_MATCH_CAP: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_COVERAGE: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSITION_ID: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_UNIT_ID: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCEPTION_DATE: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALLOW_FUTURE_BIRTH_DATE_ELIGIBILITY: EnumField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BENEFIT_SUPPLIER_ALTERNATE_REFERENCE: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_ANNUAL_CONTRIBUTION: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AUTO_ENROLL_FROM_PRIOR_YEAR: EnumField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BENEFIT_ADMINISTRATOR_VENDOR_REFERENCE: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EVIDENCE_OF_INSURABILITY: EnumField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BENEFIT_SUPPLIER_VENDOR_REFERENCE: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BENEFIT_ADMINISTRATOR_VENDOR_ACCOUNT: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION_ID: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COVERAGE_INCREMENTAL_AMOUNT: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    USE_COVERAGE_INCREMENTS: EnumField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BENEFIT_SUPPLIER_CURRENCY: OrderableEdmTypeField<
      BenefitsPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsPlanEligibilityRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PLAN_ELIGIBILITY_RULE: OneToManyLink<
      BenefitsPlans<DeSerializersT>,
      DeSerializersT,
      BenefitsPlanEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsProgram} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PROGRAM: OneToOneLink<
      BenefitsPlans<DeSerializersT>,
      DeSerializersT,
      BenefitsProgramsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsBundle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_BUNDLE: OneToOneLink<
      BenefitsPlans<DeSerializersT>,
      DeSerializersT,
      BenefitsBundlesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollWorkerBenefitPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_WORKER_BENEFIT_PLAN: OneToOneLink<
      BenefitsPlans<DeSerializersT>,
      DeSerializersT,
      PayrollWorkerBenefitPlansApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitsPlans<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link planId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_ID: fieldBuilder.buildEdmTypeField('PlanId', 'Edm.String', false),
        /**
         * Static representation of the {@link benefitSupplierVendorAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_SUPPLIER_VENDOR_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'BenefitSupplierVendorAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link acaReportable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACA_REPORTABLE: fieldBuilder.buildEnumField(
          'ACAReportable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link contributor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRIBUTOR: fieldBuilder.buildEnumField(
          'Contributor',
          BenefitPlanContribution,
          true
        ),
        /**
         * Static representation of the {@link inceptionDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCEPTION_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'InceptionDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link postTaxEligible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_TAX_ELIGIBLE: fieldBuilder.buildEnumField(
          'PostTaxEligible',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link benefitSupplierExpenseAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_SUPPLIER_EXPENSE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'BenefitSupplierExpenseAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bundleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUNDLE_ID: fieldBuilder.buildEdmTypeField(
          'BundleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          BenefitProgramPlanStatus,
          true
        ),
        /**
         * Static representation of the {@link evidenceOfInsurabilityAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVIDENCE_OF_INSURABILITY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'EvidenceOfInsurabilityAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link preTaxEligible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRE_TAX_ELIGIBLE: fieldBuilder.buildEnumField(
          'PreTaxEligible',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link benefitAdministratorExpenseAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_ADMINISTRATOR_EXPENSE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'BenefitAdministratorExpenseAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link benefitAdministratorCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_ADMINISTRATOR_CURRENCY: fieldBuilder.buildEdmTypeField(
          'BenefitAdministratorCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link closedForNewEnrollments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_FOR_NEW_ENROLLMENTS: fieldBuilder.buildEnumField(
          'ClosedForNewEnrollments',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link departmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT_ID: fieldBuilder.buildEdmTypeField(
          'DepartmentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowContinueEnrollment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CONTINUE_ENROLLMENT: fieldBuilder.buildEnumField(
          'AllowContinueEnrollment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link employerMatchPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYER_MATCH_PERCENT: fieldBuilder.buildEdmTypeField(
          'EmployerMatchPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link employerMatch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYER_MATCH: fieldBuilder.buildEnumField(
          'EmployerMatch',
          NoYes,
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
         * Static representation of the {@link maximumAnnualContribution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_ANNUAL_CONTRIBUTION: fieldBuilder.buildEdmTypeField(
          'MaximumAnnualContribution',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link bundleRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUNDLE_REQUIRED: fieldBuilder.buildEnumField(
          'BundleRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link employerMaximumAnnualAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYER_MAXIMUM_ANNUAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'EmployerMaximumAnnualAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link planInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_INFO: fieldBuilder.buildEdmTypeField(
          'PlanInfo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prorateContributions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRORATE_CONTRIBUTIONS: fieldBuilder.buildEnumField(
          'ProrateContributions',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link hipaa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIPAA: fieldBuilder.buildEnumField('HIPAA', NoYes, true),
        /**
         * Static representation of the {@link mandatoryPlan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY_PLAN: fieldBuilder.buildEnumField(
          'MandatoryPlan',
          NoYes,
          true
        ),
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
         * Static representation of the {@link cobra} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COBRA: fieldBuilder.buildEnumField('COBRA', NoYes, true),
        /**
         * Static representation of the {@link autoEnrollByDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_ENROLL_BY_DEFAULT: fieldBuilder.buildEnumField(
          'AutoEnrollByDefault',
          NoYes,
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
         * Static representation of the {@link bundleMaster} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUNDLE_MASTER: fieldBuilder.buildEnumField('BundleMaster', NoYes, true),
        /**
         * Static representation of the {@link minimumCoverage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_COVERAGE: fieldBuilder.buildEdmTypeField(
          'MinimumCoverage',
          'Edm.Decimal',
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
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link coverageIncrementalDirection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_INCREMENTAL_DIRECTION: fieldBuilder.buildEnumField(
          'CoverageIncrementalDirection',
          BenefitCovIncDirection,
          true
        ),
        /**
         * Static representation of the {@link benefitAdministratorAlternateReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_ADMINISTRATOR_ALTERNATE_REFERENCE:
          fieldBuilder.buildEdmTypeField(
            'BenefitAdministratorAlternateReference',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link employerMatchCap} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYER_MATCH_CAP: fieldBuilder.buildEdmTypeField(
          'EmployerMatchCap',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maximumCoverage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_COVERAGE: fieldBuilder.buildEdmTypeField(
          'MaximumCoverage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link positionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_ID: fieldBuilder.buildEdmTypeField(
          'PositionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'BusinessUnitId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inceptionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCEPTION_DATE: fieldBuilder.buildEdmTypeField(
          'InceptionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link allowFutureBirthDateEligibility} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_FUTURE_BIRTH_DATE_ELIGIBILITY: fieldBuilder.buildEnumField(
          'AllowFutureBirthDateEligibility',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link benefitSupplierAlternateReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_SUPPLIER_ALTERNATE_REFERENCE: fieldBuilder.buildEdmTypeField(
          'BenefitSupplierAlternateReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minimumAnnualContribution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_ANNUAL_CONTRIBUTION: fieldBuilder.buildEdmTypeField(
          'MinimumAnnualContribution',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link autoEnrollFromPriorYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_ENROLL_FROM_PRIOR_YEAR: fieldBuilder.buildEnumField(
          'AutoEnrollFromPriorYear',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link benefitAdministratorVendorReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_ADMINISTRATOR_VENDOR_REFERENCE: fieldBuilder.buildEdmTypeField(
          'BenefitAdministratorVendorReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link evidenceOfInsurability} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVIDENCE_OF_INSURABILITY: fieldBuilder.buildEnumField(
          'EvidenceOfInsurability',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link benefitSupplierVendorReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_SUPPLIER_VENDOR_REFERENCE: fieldBuilder.buildEdmTypeField(
          'BenefitSupplierVendorReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link benefitAdministratorVendorAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_ADMINISTRATOR_VENDOR_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'BenefitAdministratorVendorAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link locationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link coverageIncrementalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_INCREMENTAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CoverageIncrementalAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link useCoverageIncrements} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_COVERAGE_INCREMENTS: fieldBuilder.buildEnumField(
          'UseCoverageIncrements',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link benefitSupplierCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_SUPPLIER_CURRENCY: fieldBuilder.buildEdmTypeField(
          'BenefitSupplierCurrency',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsPlans)
      };
    }

    return this._schema;
  }
}
