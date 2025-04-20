/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsPlanEligibilityRules } from './BenefitsPlanEligibilityRules';
import { BenefitsPlanEligibilityRulesRequestBuilder } from './BenefitsPlanEligibilityRulesRequestBuilder';
import { BenefitsPlansApi } from './BenefitsPlansApi';
import { BenefitsWaitingPeriodsApi } from './BenefitsWaitingPeriodsApi';
import { BenefitsEligibilityRulesApi } from './BenefitsEligibilityRulesApi';
import { BenefitRuleStartDate } from './BenefitRuleStartDate';
import { BenefitAction } from './BenefitAction';
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
export class BenefitsPlanEligibilityRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BenefitsPlanEligibilityRules<DeSerializersT>, DeSerializersT>
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
  ): BenefitsPlanEligibilityRulesApi<DeSerializersT> {
    return new BenefitsPlanEligibilityRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PLAN: OneToOneLink<
      BenefitsPlanEligibilityRules<DeSerializersT>,
      DeSerializersT,
      BenefitsPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsWaitingPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_WAITING_PERIOD: OneToOneLink<
      BenefitsPlanEligibilityRules<DeSerializersT>,
      DeSerializersT,
      BenefitsWaitingPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsEligibilityRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_ELIGIBILITY_RULE: OneToOneLink<
      BenefitsPlanEligibilityRules<DeSerializersT>,
      DeSerializersT,
      BenefitsEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsDeductionWaitingPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_DEDUCTION_WAITING_PERIOD: OneToOneLink<
      BenefitsPlanEligibilityRules<DeSerializersT>,
      DeSerializersT,
      BenefitsWaitingPeriodsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitsPlansApi<DeSerializersT>,
      BenefitsWaitingPeriodsApi<DeSerializersT>,
      BenefitsEligibilityRulesApi<DeSerializersT>,
      BenefitsWaitingPeriodsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFITS_PLAN: new OneToOneLink('BenefitsPlan', this, linkedApis[0]),
      BENEFITS_WAITING_PERIOD: new OneToOneLink(
        'BenefitsWaitingPeriod',
        this,
        linkedApis[1]
      ),
      BENEFITS_ELIGIBILITY_RULE: new OneToOneLink(
        'BenefitsEligibilityRule',
        this,
        linkedApis[2]
      ),
      BENEFITS_DEDUCTION_WAITING_PERIOD: new OneToOneLink(
        'BenefitsDeductionWaitingPeriod',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = BenefitsPlanEligibilityRules;

  requestBuilder(): BenefitsPlanEligibilityRulesRequestBuilder<DeSerializersT> {
    return new BenefitsPlanEligibilityRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitsPlanEligibilityRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitsPlanEligibilityRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsPlanEligibilityRules<DeSerializersT>,
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
    typeof BenefitsPlanEligibilityRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsPlanEligibilityRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PLAN_ID: OrderableEdmTypeField<
      BenefitsPlanEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ELIGIBILITY_RULE_ID: OrderableEdmTypeField<
      BenefitsPlanEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      BenefitsPlanEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_DATE: EnumField<
      BenefitsPlanEligibilityRules<DeSerializers>,
      DeSerializersT,
      BenefitRuleStartDate,
      true,
      true
    >;
    DEDUCTION_WAITING_PERIOD_ID: OrderableEdmTypeField<
      BenefitsPlanEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTION_TYPE: EnumField<
      BenefitsPlanEligibilityRules<DeSerializers>,
      DeSerializersT,
      BenefitAction,
      true,
      true
    >;
    COVERAGE_WAITING_PERIOD_ID: OrderableEdmTypeField<
      BenefitsPlanEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PLAN: OneToOneLink<
      BenefitsPlanEligibilityRules<DeSerializersT>,
      DeSerializersT,
      BenefitsPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsWaitingPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_WAITING_PERIOD: OneToOneLink<
      BenefitsPlanEligibilityRules<DeSerializersT>,
      DeSerializersT,
      BenefitsWaitingPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsEligibilityRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_ELIGIBILITY_RULE: OneToOneLink<
      BenefitsPlanEligibilityRules<DeSerializersT>,
      DeSerializersT,
      BenefitsEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsDeductionWaitingPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_DEDUCTION_WAITING_PERIOD: OneToOneLink<
      BenefitsPlanEligibilityRules<DeSerializersT>,
      DeSerializersT,
      BenefitsWaitingPeriodsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitsPlanEligibilityRules<DeSerializers>>;
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
         * Static representation of the {@link eligibilityRuleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELIGIBILITY_RULE_ID: fieldBuilder.buildEdmTypeField(
          'EligibilityRuleId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sourceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DATE: fieldBuilder.buildEnumField(
          'SourceDate',
          BenefitRuleStartDate,
          true
        ),
        /**
         * Static representation of the {@link deductionWaitingPeriodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_WAITING_PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'DeductionWaitingPeriodId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link actionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_TYPE: fieldBuilder.buildEnumField(
          'ActionType',
          BenefitAction,
          true
        ),
        /**
         * Static representation of the {@link coverageWaitingPeriodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_WAITING_PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'CoverageWaitingPeriodId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsPlanEligibilityRules)
      };
    }

    return this._schema;
  }
}
