/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsWaitingPeriods } from './BenefitsWaitingPeriods';
import { BenefitsWaitingPeriodsRequestBuilder } from './BenefitsWaitingPeriodsRequestBuilder';
import { BenefitsPlanEligibilityRulesApi } from './BenefitsPlanEligibilityRulesApi';
import { BenefitWaitingPeriodMethod } from './BenefitWaitingPeriodMethod';
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
export class BenefitsWaitingPeriodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitsWaitingPeriods<DeSerializersT>, DeSerializersT>
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
  ): BenefitsWaitingPeriodsApi<DeSerializersT> {
    return new BenefitsWaitingPeriodsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link planEligibilityRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLAN_ELIGIBILITY_RULES: OneToManyLink<
      BenefitsWaitingPeriods<DeSerializersT>,
      DeSerializersT,
      BenefitsPlanEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsPlanEligibilityRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PLAN_ELIGIBILITY_RULES: OneToManyLink<
      BenefitsWaitingPeriods<DeSerializersT>,
      DeSerializersT,
      BenefitsPlanEligibilityRulesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitsPlanEligibilityRulesApi<DeSerializersT>,
      BenefitsPlanEligibilityRulesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PLAN_ELIGIBILITY_RULES: new OneToManyLink(
        'PlanEligibilityRules',
        this,
        linkedApis[0]
      ),
      BENEFITS_PLAN_ELIGIBILITY_RULES: new OneToManyLink(
        'BenefitsPlanEligibilityRules',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BenefitsWaitingPeriods;

  requestBuilder(): BenefitsWaitingPeriodsRequestBuilder<DeSerializersT> {
    return new BenefitsWaitingPeriodsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitsWaitingPeriods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitsWaitingPeriods<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsWaitingPeriods<DeSerializersT>,
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
    typeof BenefitsWaitingPeriods,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsWaitingPeriods,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    WAITING_CODE: OrderableEdmTypeField<
      BenefitsWaitingPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAITING_DAYS: OrderableEdmTypeField<
      BenefitsWaitingPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DAYS: OrderableEdmTypeField<
      BenefitsWaitingPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MONTHS: OrderableEdmTypeField<
      BenefitsWaitingPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BenefitsWaitingPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAITING_METHOD: EnumField<
      BenefitsWaitingPeriods<DeSerializers>,
      DeSerializersT,
      BenefitWaitingPeriodMethod,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link planEligibilityRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLAN_ELIGIBILITY_RULES: OneToManyLink<
      BenefitsWaitingPeriods<DeSerializersT>,
      DeSerializersT,
      BenefitsPlanEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsPlanEligibilityRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PLAN_ELIGIBILITY_RULES: OneToManyLink<
      BenefitsWaitingPeriods<DeSerializersT>,
      DeSerializersT,
      BenefitsPlanEligibilityRulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitsWaitingPeriods<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link waitingCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAITING_CODE: fieldBuilder.buildEdmTypeField(
          'WaitingCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link waitingDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAITING_DAYS: fieldBuilder.buildEdmTypeField(
          'WaitingDays',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link days} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAYS: fieldBuilder.buildEdmTypeField('Days', 'Edm.Int32', false),
        /**
         * Static representation of the {@link months} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTHS: fieldBuilder.buildEdmTypeField('Months', 'Edm.Int32', false),
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
         * Static representation of the {@link waitingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAITING_METHOD: fieldBuilder.buildEnumField(
          'WaitingMethod',
          BenefitWaitingPeriodMethod,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsWaitingPeriods)
      };
    }

    return this._schema;
  }
}
