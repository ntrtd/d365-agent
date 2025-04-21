/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkerEnrolledBenefitLimits } from './WorkerEnrolledBenefitLimits';
import { WorkerEnrolledBenefitLimitsRequestBuilder } from './WorkerEnrolledBenefitLimitsRequestBuilder';
import { WorkerEnrolledBenefitsApi } from './WorkerEnrolledBenefitsApi';
import { PayrollLimitPeriod } from './PayrollLimitPeriod';
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
export class WorkerEnrolledBenefitLimitsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<WorkerEnrolledBenefitLimits<DeSerializersT>, DeSerializersT>
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
  ): WorkerEnrolledBenefitLimitsApi<DeSerializersT> {
    return new WorkerEnrolledBenefitLimitsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link workerEnrolledBenefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_BENEFIT: OneToOneLink<
      WorkerEnrolledBenefitLimits<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledBenefitsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [WorkerEnrolledBenefitsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      WORKER_ENROLLED_BENEFIT: new OneToOneLink(
        'WorkerEnrolledBenefit',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = WorkerEnrolledBenefitLimits;

  requestBuilder(): WorkerEnrolledBenefitLimitsRequestBuilder<DeSerializersT> {
    return new WorkerEnrolledBenefitLimitsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkerEnrolledBenefitLimits<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WorkerEnrolledBenefitLimits<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WorkerEnrolledBenefitLimits<DeSerializersT>,
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
    typeof WorkerEnrolledBenefitLimits,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkerEnrolledBenefitLimits,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BENEFIT_ID: OrderableEdmTypeField<
      WorkerEnrolledBenefitLimits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      WorkerEnrolledBenefitLimits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENROLLMENT_START: OrderableEdmTypeField<
      WorkerEnrolledBenefitLimits<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ENROLLMENT_END: OrderableEdmTypeField<
      WorkerEnrolledBenefitLimits<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEDUCTION_LIMIT_PERIOD: EnumField<
      WorkerEnrolledBenefitLimits<DeSerializers>,
      DeSerializersT,
      PayrollLimitPeriod,
      true,
      true
    >;
    DEDUCTION_LIMIT_END_DATE: OrderableEdmTypeField<
      WorkerEnrolledBenefitLimits<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONTRIBUTION_LIMIT_PERIOD_REMAINING: OrderableEdmTypeField<
      WorkerEnrolledBenefitLimits<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTRIBUTION_LIMIT_PERIOD: EnumField<
      WorkerEnrolledBenefitLimits<DeSerializers>,
      DeSerializersT,
      PayrollLimitPeriod,
      true,
      true
    >;
    DEDUCTION_LIMIT_PERIOD_REMAINING: OrderableEdmTypeField<
      WorkerEnrolledBenefitLimits<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEDUCTION_LIMIT_AMOUNT: OrderableEdmTypeField<
      WorkerEnrolledBenefitLimits<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTRIBUTION_LIMIT_AMOUNT: OrderableEdmTypeField<
      WorkerEnrolledBenefitLimits<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTRIBUTION_LIMIT_END_DATE: OrderableEdmTypeField<
      WorkerEnrolledBenefitLimits<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workerEnrolledBenefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_BENEFIT: OneToOneLink<
      WorkerEnrolledBenefitLimits<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledBenefitsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkerEnrolledBenefitLimits<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link benefitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_ID: fieldBuilder.buildEdmTypeField(
          'BenefitId',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link enrollmentStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENROLLMENT_START: fieldBuilder.buildEdmTypeField(
          'EnrollmentStart',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link enrollmentEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENROLLMENT_END: fieldBuilder.buildEdmTypeField(
          'EnrollmentEnd',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deductionLimitPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_LIMIT_PERIOD: fieldBuilder.buildEnumField(
          'DeductionLimitPeriod',
          PayrollLimitPeriod,
          true
        ),
        /**
         * Static representation of the {@link deductionLimitEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_LIMIT_END_DATE: fieldBuilder.buildEdmTypeField(
          'DeductionLimitEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link contributionLimitPeriodRemaining} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRIBUTION_LIMIT_PERIOD_REMAINING: fieldBuilder.buildEdmTypeField(
          'ContributionLimitPeriodRemaining',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link contributionLimitPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRIBUTION_LIMIT_PERIOD: fieldBuilder.buildEnumField(
          'ContributionLimitPeriod',
          PayrollLimitPeriod,
          true
        ),
        /**
         * Static representation of the {@link deductionLimitPeriodRemaining} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_LIMIT_PERIOD_REMAINING: fieldBuilder.buildEdmTypeField(
          'DeductionLimitPeriodRemaining',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deductionLimitAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_LIMIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DeductionLimitAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link contributionLimitAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRIBUTION_LIMIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ContributionLimitAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link contributionLimitEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRIBUTION_LIMIT_END_DATE: fieldBuilder.buildEdmTypeField(
          'ContributionLimitEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkerEnrolledBenefitLimits)
      };
    }

    return this._schema;
  }
}
