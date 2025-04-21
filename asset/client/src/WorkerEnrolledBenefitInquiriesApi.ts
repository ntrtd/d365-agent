/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkerEnrolledBenefitInquiries } from './WorkerEnrolledBenefitInquiries';
import { WorkerEnrolledBenefitInquiriesRequestBuilder } from './WorkerEnrolledBenefitInquiriesRequestBuilder';
import { WorkersApi } from './WorkersApi';
import { BenefitsApi } from './BenefitsApi';
import { PayrollBenefitRateSource } from './PayrollBenefitRateSource';
import { PayrollDeductionBasis } from './PayrollDeductionBasis';
import { PayrollCategory } from './PayrollCategory';
import { PayrollContributionBasis } from './PayrollContributionBasis';
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
export class WorkerEnrolledBenefitInquiriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<WorkerEnrolledBenefitInquiries<DeSerializersT>, DeSerializersT>
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
  ): WorkerEnrolledBenefitInquiriesApi<DeSerializersT> {
    return new WorkerEnrolledBenefitInquiriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      WorkerEnrolledBenefitInquiries<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT: OneToOneLink<
      WorkerEnrolledBenefitInquiries<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [WorkersApi<DeSerializersT>, BenefitsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      WORKER: new OneToOneLink('Worker', this, linkedApis[0]),
      BENEFIT: new OneToOneLink('Benefit', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = WorkerEnrolledBenefitInquiries;

  requestBuilder(): WorkerEnrolledBenefitInquiriesRequestBuilder<DeSerializersT> {
    return new WorkerEnrolledBenefitInquiriesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    WorkerEnrolledBenefitInquiries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WorkerEnrolledBenefitInquiries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WorkerEnrolledBenefitInquiries<DeSerializersT>,
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
    typeof WorkerEnrolledBenefitInquiries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkerEnrolledBenefitInquiries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    VALID_FROM: OrderableEdmTypeField<
      WorkerEnrolledBenefitInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      WorkerEnrolledBenefitInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEDUCTION_RATE_SOURCE: EnumField<
      WorkerEnrolledBenefitInquiries<DeSerializers>,
      DeSerializersT,
      PayrollBenefitRateSource,
      true,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      WorkerEnrolledBenefitInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEDUCTION_BASIS: EnumField<
      WorkerEnrolledBenefitInquiries<DeSerializers>,
      DeSerializersT,
      PayrollDeductionBasis,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      WorkerEnrolledBenefitInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEDUCTION_AMOUNT_CUR: OrderableEdmTypeField<
      WorkerEnrolledBenefitInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BENEFIT_PLAN_AND_OPTION: OrderableEdmTypeField<
      WorkerEnrolledBenefitInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYROLL_CATEGORY: EnumField<
      WorkerEnrolledBenefitInquiries<DeSerializers>,
      DeSerializersT,
      PayrollCategory,
      true,
      true
    >;
    CONTRIBUTION_BASIS: EnumField<
      WorkerEnrolledBenefitInquiries<DeSerializers>,
      DeSerializersT,
      PayrollContributionBasis,
      true,
      true
    >;
    CONTRIBUTION_RATE_SOURCE: EnumField<
      WorkerEnrolledBenefitInquiries<DeSerializers>,
      DeSerializersT,
      PayrollBenefitRateSource,
      true,
      true
    >;
    BENEFIT_TYPE_ID: OrderableEdmTypeField<
      WorkerEnrolledBenefitInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRIBUTION_AMOUNT_CUR: OrderableEdmTypeField<
      WorkerEnrolledBenefitInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BENEFIT_ID: OrderableEdmTypeField<
      WorkerEnrolledBenefitInquiries<DeSerializers>,
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
      WorkerEnrolledBenefitInquiries<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT: OneToOneLink<
      WorkerEnrolledBenefitInquiries<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkerEnrolledBenefitInquiries<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link deductionRateSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_RATE_SOURCE: fieldBuilder.buildEnumField(
          'DeductionRateSource',
          PayrollBenefitRateSource,
          true
        ),
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deductionBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_BASIS: fieldBuilder.buildEnumField(
          'DeductionBasis',
          PayrollDeductionBasis,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link deductionAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'DeductionAmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link benefitPlanAndOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_PLAN_AND_OPTION: fieldBuilder.buildEdmTypeField(
          'BenefitPlanAndOption',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payrollCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYROLL_CATEGORY: fieldBuilder.buildEnumField(
          'PayrollCategory',
          PayrollCategory,
          true
        ),
        /**
         * Static representation of the {@link contributionBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRIBUTION_BASIS: fieldBuilder.buildEnumField(
          'ContributionBasis',
          PayrollContributionBasis,
          true
        ),
        /**
         * Static representation of the {@link contributionRateSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRIBUTION_RATE_SOURCE: fieldBuilder.buildEnumField(
          'ContributionRateSource',
          PayrollBenefitRateSource,
          true
        ),
        /**
         * Static representation of the {@link benefitTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'BenefitTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contributionAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRIBUTION_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'ContributionAmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link benefitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_ID: fieldBuilder.buildEdmTypeField(
          'BenefitId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkerEnrolledBenefitInquiries)
      };
    }

    return this._schema;
  }
}
