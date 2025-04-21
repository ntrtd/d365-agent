/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitPlans } from './BenefitPlans';
import { BenefitPlansRequestBuilder } from './BenefitPlansRequestBuilder';
import { BenefitsApi } from './BenefitsApi';
import { BenefitExternalReportingsApi } from './BenefitExternalReportingsApi';
import { BenefitEligibilityOverridesApi } from './BenefitEligibilityOverridesApi';
import { RetirementBenefitPlanDetailsApi } from './RetirementBenefitPlanDetailsApi';
import { BenefitTaxRulesUsApi } from './BenefitTaxRulesUsApi';
import { BenefitPlanDefaultDimensionsApi } from './BenefitPlanDefaultDimensionsApi';
import { CurrenciesApi } from './CurrenciesApi';
import { BenefitTypesApi } from './BenefitTypesApi';
import { NoYes } from './NoYes';
import { PayrollContributionMethod } from './PayrollContributionMethod';
import { PayrollLimitPeriod } from './PayrollLimitPeriod';
import { PayrollImpact } from './PayrollImpact';
import { PayrollRetirementType } from './PayrollRetirementType';
import { PayrollArrearLimitMethod } from './PayrollArrearLimitMethod';
import { PayrollContributionLimitMethod } from './PayrollContributionLimitMethod';
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
export class BenefitPlansApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitPlans<DeSerializersT>, DeSerializersT>
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
  ): BenefitPlansApi<DeSerializersT> {
    return new BenefitPlansApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link benefits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS: OneToManyLink<
      BenefitPlans<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitExternalReporting} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_EXTERNAL_REPORTING: OneToManyLink<
      BenefitPlans<DeSerializersT>,
      DeSerializersT,
      BenefitExternalReportingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitEligibilityOverrides} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_ELIGIBILITY_OVERRIDES: OneToManyLink<
      BenefitPlans<DeSerializersT>,
      DeSerializersT,
      BenefitEligibilityOverridesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retirementBenefitPlanDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETIREMENT_BENEFIT_PLAN_DETAIL: OneToOneLink<
      BenefitPlans<DeSerializersT>,
      DeSerializersT,
      RetirementBenefitPlanDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitTaxRuleUs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_TAX_RULE_US: OneToOneLink<
      BenefitPlans<DeSerializersT>,
      DeSerializersT,
      BenefitTaxRulesUsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link defaultDimensions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_DIMENSIONS: OneToManyLink<
      BenefitPlans<DeSerializersT>,
      DeSerializersT,
      BenefitPlanDefaultDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      BenefitPlans<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_TYPE: OneToOneLink<
      BenefitPlans<DeSerializersT>,
      DeSerializersT,
      BenefitTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitsApi<DeSerializersT>,
      BenefitExternalReportingsApi<DeSerializersT>,
      BenefitEligibilityOverridesApi<DeSerializersT>,
      RetirementBenefitPlanDetailsApi<DeSerializersT>,
      BenefitTaxRulesUsApi<DeSerializersT>,
      BenefitPlanDefaultDimensionsApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      BenefitTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFITS: new OneToManyLink('Benefits', this, linkedApis[0]),
      BENEFIT_EXTERNAL_REPORTING: new OneToManyLink(
        'BenefitExternalReporting',
        this,
        linkedApis[1]
      ),
      BENEFIT_ELIGIBILITY_OVERRIDES: new OneToManyLink(
        'BenefitEligibilityOverrides',
        this,
        linkedApis[2]
      ),
      RETIREMENT_BENEFIT_PLAN_DETAIL: new OneToOneLink(
        'RetirementBenefitPlanDetail',
        this,
        linkedApis[3]
      ),
      BENEFIT_TAX_RULE_US: new OneToOneLink(
        'BenefitTaxRuleUS',
        this,
        linkedApis[4]
      ),
      DEFAULT_DIMENSIONS: new OneToManyLink(
        'DefaultDimensions',
        this,
        linkedApis[5]
      ),
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[6]),
      BENEFIT_TYPE: new OneToOneLink('BenefitType', this, linkedApis[7])
    };
    return this;
  }

  entityConstructor = BenefitPlans;

  requestBuilder(): BenefitPlansRequestBuilder<DeSerializersT> {
    return new BenefitPlansRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitPlans<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BenefitPlans<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BenefitPlans<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BenefitPlans, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BenefitPlans, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PLAN: OrderableEdmTypeField<
      BenefitPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BenefitPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_AFFORDABLE_CARE_ACT_REPORTABLE: EnumField<
      BenefitPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      BenefitPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRIBUTION_METHOD: EnumField<
      BenefitPlans<DeSerializers>,
      DeSerializersT,
      PayrollContributionMethod,
      true,
      true
    >;
    DEFAULT_CONTRIBUTION_LIMIT_PERIOD: EnumField<
      BenefitPlans<DeSerializers>,
      DeSerializersT,
      PayrollLimitPeriod,
      true,
      true
    >;
    PAYMENT_TYPE_IS_ADDITIONAL: EnumField<
      BenefitPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEDUCTION_PRIORITY: OrderableEdmTypeField<
      BenefitPlans<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PAYMENT_TYPE_IS_GROSS_UP: EnumField<
      BenefitPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYROLL_IMPACT: EnumField<
      BenefitPlans<DeSerializers>,
      DeSerializersT,
      PayrollImpact,
      true,
      true
    >;
    RETIREMENT_TYPE: EnumField<
      BenefitPlans<DeSerializers>,
      DeSerializersT,
      PayrollRetirementType,
      true,
      true
    >;
    DEDUCTION_METHOD: EnumField<
      BenefitPlans<DeSerializers>,
      DeSerializersT,
      PayrollArrearLimitMethod,
      true,
      true
    >;
    PAYMENT_TYPE_IS_PRIMARY: EnumField<
      BenefitPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_CONTRIBUTION_LIMIT_AMOUNT: OrderableEdmTypeField<
      BenefitPlans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_DEDUCTION_LIMIT_AMOUNT: OrderableEdmTypeField<
      BenefitPlans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_DEDUCTION_LIMIT_PERIOD: EnumField<
      BenefitPlans<DeSerializers>,
      DeSerializersT,
      PayrollLimitPeriod,
      true,
      true
    >;
    CONTRIBUTION_LIMIT_METHOD: EnumField<
      BenefitPlans<DeSerializers>,
      DeSerializersT,
      PayrollContributionLimitMethod,
      true,
      true
    >;
    IS_PAY_STATEMENT_LINE_LOCKED: EnumField<
      BenefitPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TYPE_ID: OrderableEdmTypeField<
      BenefitPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ARREAR_GENERATED: EnumField<
      BenefitPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS: OneToManyLink<
      BenefitPlans<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitExternalReporting} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_EXTERNAL_REPORTING: OneToManyLink<
      BenefitPlans<DeSerializersT>,
      DeSerializersT,
      BenefitExternalReportingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitEligibilityOverrides} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_ELIGIBILITY_OVERRIDES: OneToManyLink<
      BenefitPlans<DeSerializersT>,
      DeSerializersT,
      BenefitEligibilityOverridesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retirementBenefitPlanDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETIREMENT_BENEFIT_PLAN_DETAIL: OneToOneLink<
      BenefitPlans<DeSerializersT>,
      DeSerializersT,
      RetirementBenefitPlanDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitTaxRuleUs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_TAX_RULE_US: OneToOneLink<
      BenefitPlans<DeSerializersT>,
      DeSerializersT,
      BenefitTaxRulesUsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link defaultDimensions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_DIMENSIONS: OneToManyLink<
      BenefitPlans<DeSerializersT>,
      DeSerializersT,
      BenefitPlanDefaultDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      BenefitPlans<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_TYPE: OneToOneLink<
      BenefitPlans<DeSerializersT>,
      DeSerializersT,
      BenefitTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitPlans<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link plan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN: fieldBuilder.buildEdmTypeField('Plan', 'Edm.String', false),
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
         * Static representation of the {@link isAffordableCareActReportable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_AFFORDABLE_CARE_ACT_REPORTABLE: fieldBuilder.buildEnumField(
          'IsAffordableCareActReportable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contributionMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRIBUTION_METHOD: fieldBuilder.buildEnumField(
          'ContributionMethod',
          PayrollContributionMethod,
          true
        ),
        /**
         * Static representation of the {@link defaultContributionLimitPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CONTRIBUTION_LIMIT_PERIOD: fieldBuilder.buildEnumField(
          'DefaultContributionLimitPeriod',
          PayrollLimitPeriod,
          true
        ),
        /**
         * Static representation of the {@link paymentTypeIsAdditional} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TYPE_IS_ADDITIONAL: fieldBuilder.buildEnumField(
          'PaymentTypeIsAdditional',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deductionPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_PRIORITY: fieldBuilder.buildEdmTypeField(
          'DeductionPriority',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link paymentTypeIsGrossUp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TYPE_IS_GROSS_UP: fieldBuilder.buildEnumField(
          'PaymentTypeIsGrossUp',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link payrollImpact} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYROLL_IMPACT: fieldBuilder.buildEnumField(
          'PayrollImpact',
          PayrollImpact,
          true
        ),
        /**
         * Static representation of the {@link retirementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETIREMENT_TYPE: fieldBuilder.buildEnumField(
          'RetirementType',
          PayrollRetirementType,
          true
        ),
        /**
         * Static representation of the {@link deductionMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_METHOD: fieldBuilder.buildEnumField(
          'DeductionMethod',
          PayrollArrearLimitMethod,
          true
        ),
        /**
         * Static representation of the {@link paymentTypeIsPrimary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TYPE_IS_PRIMARY: fieldBuilder.buildEnumField(
          'PaymentTypeIsPrimary',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultContributionLimitAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CONTRIBUTION_LIMIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DefaultContributionLimitAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultDeductionLimitAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DEDUCTION_LIMIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DefaultDeductionLimitAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultDeductionLimitPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DEDUCTION_LIMIT_PERIOD: fieldBuilder.buildEnumField(
          'DefaultDeductionLimitPeriod',
          PayrollLimitPeriod,
          true
        ),
        /**
         * Static representation of the {@link contributionLimitMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRIBUTION_LIMIT_METHOD: fieldBuilder.buildEnumField(
          'ContributionLimitMethod',
          PayrollContributionLimitMethod,
          true
        ),
        /**
         * Static representation of the {@link isPayStatementLineLocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PAY_STATEMENT_LINE_LOCKED: fieldBuilder.buildEnumField(
          'IsPayStatementLineLocked',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link typeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_ID: fieldBuilder.buildEdmTypeField('TypeId', 'Edm.String', true),
        /**
         * Static representation of the {@link isArrearGenerated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ARREAR_GENERATED: fieldBuilder.buildEnumField(
          'IsArrearGenerated',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitPlans)
      };
    }

    return this._schema;
  }
}
