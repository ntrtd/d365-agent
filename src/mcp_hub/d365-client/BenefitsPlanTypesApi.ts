/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsPlanTypes } from './BenefitsPlanTypes';
import { BenefitsPlanTypesRequestBuilder } from './BenefitsPlanTypesRequestBuilder';
import { PayrollWorkerBenefitPlansApi } from './PayrollWorkerBenefitPlansApi';
import { BenefitsLifeEventOptionsApi } from './BenefitsLifeEventOptionsApi';
import { BenefitsPlanTypeCoverageOptionsApi } from './BenefitsPlanTypeCoverageOptionsApi';
import { BenefitConcurrentEnrollment } from './BenefitConcurrentEnrollment';
import { BenefitDesigneeType } from './BenefitDesigneeType';
import { BenefitPlanTypeCode } from './BenefitPlanTypeCode';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BenefitsPlanTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitsPlanTypes<DeSerializersT>, DeSerializersT>
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
  ): BenefitsPlanTypesApi<DeSerializersT> {
    return new BenefitsPlanTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link payrollWorkerBenefitPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_WORKER_BENEFIT_PLAN: OneToOneLink<
      BenefitsPlanTypes<DeSerializersT>,
      DeSerializersT,
      PayrollWorkerBenefitPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsLifeEventOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_LIFE_EVENT_OPTION: OneToManyLink<
      BenefitsPlanTypes<DeSerializersT>,
      DeSerializersT,
      BenefitsLifeEventOptionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitPlanTypeCoverageOptions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PLAN_TYPE_COVERAGE_OPTIONS: OneToManyLink<
      BenefitsPlanTypes<DeSerializersT>,
      DeSerializersT,
      BenefitsPlanTypeCoverageOptionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayrollWorkerBenefitPlansApi<DeSerializersT>,
      BenefitsLifeEventOptionsApi<DeSerializersT>,
      BenefitsPlanTypeCoverageOptionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAYROLL_WORKER_BENEFIT_PLAN: new OneToOneLink(
        'PayrollWorkerBenefitPlan',
        this,
        linkedApis[0]
      ),
      BENEFITS_LIFE_EVENT_OPTION: new OneToManyLink(
        'BenefitsLifeEventOption',
        this,
        linkedApis[1]
      ),
      BENEFIT_PLAN_TYPE_COVERAGE_OPTIONS: new OneToManyLink(
        'BenefitPlanTypeCoverageOptions',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = BenefitsPlanTypes;

  requestBuilder(): BenefitsPlanTypesRequestBuilder<DeSerializersT> {
    return new BenefitsPlanTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitsPlanTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BenefitsPlanTypes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BenefitsPlanTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof BenefitsPlanTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsPlanTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PLAN_TYPE_ID: OrderableEdmTypeField<
      BenefitsPlanTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONCURRENT_ENROLLMENT: EnumField<
      BenefitsPlanTypes<DeSerializers>,
      DeSerializersT,
      BenefitConcurrentEnrollment,
      true,
      true
    >;
    CONTACT_TYPE: EnumField<
      BenefitsPlanTypes<DeSerializers>,
      DeSerializersT,
      BenefitDesigneeType,
      true,
      true
    >;
    PLAN_TYPE_CODE: EnumField<
      BenefitsPlanTypes<DeSerializers>,
      DeSerializersT,
      BenefitPlanTypeCode,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BenefitsPlanTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollWorkerBenefitPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_WORKER_BENEFIT_PLAN: OneToOneLink<
      BenefitsPlanTypes<DeSerializersT>,
      DeSerializersT,
      PayrollWorkerBenefitPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsLifeEventOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_LIFE_EVENT_OPTION: OneToManyLink<
      BenefitsPlanTypes<DeSerializersT>,
      DeSerializersT,
      BenefitsLifeEventOptionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitPlanTypeCoverageOptions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PLAN_TYPE_COVERAGE_OPTIONS: OneToManyLink<
      BenefitsPlanTypes<DeSerializersT>,
      DeSerializersT,
      BenefitsPlanTypeCoverageOptionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitsPlanTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link planTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'PlanTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link concurrentEnrollment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCURRENT_ENROLLMENT: fieldBuilder.buildEnumField(
          'ConcurrentEnrollment',
          BenefitConcurrentEnrollment,
          true
        ),
        /**
         * Static representation of the {@link contactType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_TYPE: fieldBuilder.buildEnumField(
          'ContactType',
          BenefitDesigneeType,
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
        ALL_FIELDS: new AllFields('*', BenefitsPlanTypes)
      };
    }

    return this._schema;
  }
}
