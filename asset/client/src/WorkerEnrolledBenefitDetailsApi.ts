/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkerEnrolledBenefitDetails } from './WorkerEnrolledBenefitDetails';
import { WorkerEnrolledBenefitDetailsRequestBuilder } from './WorkerEnrolledBenefitDetailsRequestBuilder';
import { WorkerEnrolledBenefitsApi } from './WorkerEnrolledBenefitsApi';
import { PositionsV2Api } from './PositionsV2Api';
import { PayrollContributionBasis } from './PayrollContributionBasis';
import { PayrollDeductionBasis } from './PayrollDeductionBasis';
import { PayrollBenefitRateSource } from './PayrollBenefitRateSource';
import { NoYes } from './NoYes';
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
export class WorkerEnrolledBenefitDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<WorkerEnrolledBenefitDetails<DeSerializersT>, DeSerializersT>
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
  ): WorkerEnrolledBenefitDetailsApi<DeSerializersT> {
    return new WorkerEnrolledBenefitDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link workerEnrolledBenefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_BENEFIT: OneToOneLink<
      WorkerEnrolledBenefitDetails<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledBenefitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_V_2: OneToOneLink<
      WorkerEnrolledBenefitDetails<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkerEnrolledBenefitsApi<DeSerializersT>,
      PositionsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WORKER_ENROLLED_BENEFIT: new OneToOneLink(
        'WorkerEnrolledBenefit',
        this,
        linkedApis[0]
      ),
      POSITION_V_2: new OneToOneLink('PositionV2', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = WorkerEnrolledBenefitDetails;

  requestBuilder(): WorkerEnrolledBenefitDetailsRequestBuilder<DeSerializersT> {
    return new WorkerEnrolledBenefitDetailsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkerEnrolledBenefitDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WorkerEnrolledBenefitDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WorkerEnrolledBenefitDetails<DeSerializersT>,
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
    typeof WorkerEnrolledBenefitDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkerEnrolledBenefitDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BENEFIT_ID: OrderableEdmTypeField<
      WorkerEnrolledBenefitDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      WorkerEnrolledBenefitDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENROLLMENT_START: OrderableEdmTypeField<
      WorkerEnrolledBenefitDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ENROLLMENT_END: OrderableEdmTypeField<
      WorkerEnrolledBenefitDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BENEFIT_DETAIL_VALID_FROM: OrderableEdmTypeField<
      WorkerEnrolledBenefitDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BENEFIT_DETAIL_VALID_TO: OrderableEdmTypeField<
      WorkerEnrolledBenefitDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONTRIBUTION_AMOUNT_CUR: OrderableEdmTypeField<
      WorkerEnrolledBenefitDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTRIBUTION_BASIS: EnumField<
      WorkerEnrolledBenefitDetails<DeSerializers>,
      DeSerializersT,
      PayrollContributionBasis,
      true,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      WorkerEnrolledBenefitDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEDUCTION_PRIORITY_NUMBER: OrderableEdmTypeField<
      WorkerEnrolledBenefitDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DEDUCTION_BASIS: EnumField<
      WorkerEnrolledBenefitDetails<DeSerializers>,
      DeSerializersT,
      PayrollDeductionBasis,
      true,
      true
    >;
    CONTRIBUTION_RATE_SOURCE: EnumField<
      WorkerEnrolledBenefitDetails<DeSerializers>,
      DeSerializersT,
      PayrollBenefitRateSource,
      true,
      true
    >;
    POSITION_ID: OrderableEdmTypeField<
      WorkerEnrolledBenefitDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_LIMIT: EnumField<
      WorkerEnrolledBenefitDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CALCULATION_PRIORITY_NUMBER: OrderableEdmTypeField<
      WorkerEnrolledBenefitDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DATA_AREA: OrderableEdmTypeField<
      WorkerEnrolledBenefitDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEDUCTION_AMOUNT_CUR: OrderableEdmTypeField<
      WorkerEnrolledBenefitDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NOTE: OrderableEdmTypeField<
      WorkerEnrolledBenefitDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEDUCTION_RATE_SOURCE: EnumField<
      WorkerEnrolledBenefitDetails<DeSerializers>,
      DeSerializersT,
      PayrollBenefitRateSource,
      true,
      true
    >;
    IS_RETIREMENT_CATCH_UP: EnumField<
      WorkerEnrolledBenefitDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VEND_ACCOUNT_NUM: OrderableEdmTypeField<
      WorkerEnrolledBenefitDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workerEnrolledBenefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_BENEFIT: OneToOneLink<
      WorkerEnrolledBenefitDetails<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledBenefitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_V_2: OneToOneLink<
      WorkerEnrolledBenefitDetails<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkerEnrolledBenefitDetails<DeSerializers>>;
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
         * Static representation of the {@link benefitDetailValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_DETAIL_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'BenefitDetailValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link benefitDetailValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_DETAIL_VALID_TO: fieldBuilder.buildEdmTypeField(
          'BenefitDetailValidTo',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link contributionBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRIBUTION_BASIS: fieldBuilder.buildEnumField(
          'ContributionBasis',
          PayrollContributionBasis,
          true
        ),
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deductionPriorityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_PRIORITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeductionPriorityNumber',
          'Edm.Int64',
          false
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
         * Static representation of the {@link contributionRateSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRIBUTION_RATE_SOURCE: fieldBuilder.buildEnumField(
          'ContributionRateSource',
          PayrollBenefitRateSource,
          true
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
         * Static representation of the {@link overrideLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_LIMIT: fieldBuilder.buildEnumField(
          'OverrideLimit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link calculationPriorityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_PRIORITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'CalculationPriorityNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link dataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA: fieldBuilder.buildEdmTypeField(
          'DataArea',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
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
         * Static representation of the {@link isRetirementCatchUp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RETIREMENT_CATCH_UP: fieldBuilder.buildEnumField(
          'IsRetirementCatchUp',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendAccountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'VendAccountNum',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkerEnrolledBenefitDetails)
      };
    }

    return this._schema;
  }
}
