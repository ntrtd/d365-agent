/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Benefits } from './Benefits';
import { BenefitsRequestBuilder } from './BenefitsRequestBuilder';
import { WorkerEnrolledBenefitInquiriesApi } from './WorkerEnrolledBenefitInquiriesApi';
import { DisposableIncomeBenefitsApi } from './DisposableIncomeBenefitsApi';
import { BenefitPlansApi } from './BenefitPlansApi';
import { BenefitOptionsApi } from './BenefitOptionsApi';
import { BenefitEarningBasisApi } from './BenefitEarningBasisApi';
import { BenefitHcmDetailsApi } from './BenefitHcmDetailsApi';
import { WorkerEnrolledBenefitsApi } from './WorkerEnrolledBenefitsApi';
import { BenefitEligibilityOverridesApi } from './BenefitEligibilityOverridesApi';
import { PayStatementBenefitLinesApi } from './PayStatementBenefitLinesApi';
import { BenefitDetailsApi } from './BenefitDetailsApi';
import { PayrollPositionDetailsApi } from './PayrollPositionDetailsApi';
import { DeductionArrearRecoveriesApi } from './DeductionArrearRecoveriesApi';
import { TotalCompStatementSectionBenefitsApi } from './TotalCompStatementSectionBenefitsApi';
import { PositionsApi } from './PositionsApi';
import { PayStatementBenefitLineInquiriesApi } from './PayStatementBenefitLineInquiriesApi';
import { DeductionArrearsApi } from './DeductionArrearsApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BenefitsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Benefits<DeSerializersT>, DeSerializersT>
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
  ): BenefitsApi<DeSerializersT> {
    return new BenefitsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link workerEnrolledBenefitInquiry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_BENEFIT_INQUIRY: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledBenefitInquiriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link disposableIncomeBenefits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISPOSABLE_INCOME_BENEFITS: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      DisposableIncomeBenefitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PLAN: OneToOneLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      BenefitPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_OPTION: OneToOneLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      BenefitOptionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitEarningBasis} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_EARNING_BASIS: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      BenefitEarningBasisApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_DETAILS: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      BenefitHcmDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerEnrolledBenefits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_BENEFITS: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledBenefitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitEligibilityOverrides} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_ELIGIBILITY_OVERRIDES: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      BenefitEligibilityOverridesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payStatementBenefitLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_BENEFIT_LINE: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      PayStatementBenefitLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_DETAIL: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      BenefitDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollPositionDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_POSITION_DETAIL: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      PayrollPositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deductionArrearRecovery} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEDUCTION_ARREAR_RECOVERY: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      DeductionArrearRecoveriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link totalCompStatementSectionBenefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOTAL_COMP_STATEMENT_SECTION_BENEFIT: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      TotalCompStatementSectionBenefitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      PositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payStatementBenefitLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_BENEFIT_LINES: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      PayStatementBenefitLineInquiriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deductionArrear} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEDUCTION_ARREAR: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      DeductionArrearsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkerEnrolledBenefitInquiriesApi<DeSerializersT>,
      DisposableIncomeBenefitsApi<DeSerializersT>,
      BenefitPlansApi<DeSerializersT>,
      BenefitOptionsApi<DeSerializersT>,
      BenefitEarningBasisApi<DeSerializersT>,
      BenefitHcmDetailsApi<DeSerializersT>,
      WorkerEnrolledBenefitsApi<DeSerializersT>,
      BenefitEligibilityOverridesApi<DeSerializersT>,
      PayStatementBenefitLinesApi<DeSerializersT>,
      BenefitDetailsApi<DeSerializersT>,
      PayrollPositionDetailsApi<DeSerializersT>,
      DeductionArrearRecoveriesApi<DeSerializersT>,
      TotalCompStatementSectionBenefitsApi<DeSerializersT>,
      PositionsApi<DeSerializersT>,
      PayStatementBenefitLineInquiriesApi<DeSerializersT>,
      DeductionArrearsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WORKER_ENROLLED_BENEFIT_INQUIRY: new OneToManyLink(
        'WorkerEnrolledBenefitInquiry',
        this,
        linkedApis[0]
      ),
      DISPOSABLE_INCOME_BENEFITS: new OneToManyLink(
        'DisposableIncomeBenefits',
        this,
        linkedApis[1]
      ),
      BENEFIT_PLAN: new OneToOneLink('BenefitPlan', this, linkedApis[2]),
      BENEFIT_OPTION: new OneToOneLink('BenefitOption', this, linkedApis[3]),
      BENEFIT_EARNING_BASIS: new OneToManyLink(
        'BenefitEarningBasis',
        this,
        linkedApis[4]
      ),
      BENEFIT_DETAILS: new OneToManyLink('BenefitDetails', this, linkedApis[5]),
      WORKER_ENROLLED_BENEFITS: new OneToManyLink(
        'WorkerEnrolledBenefits',
        this,
        linkedApis[6]
      ),
      BENEFIT_ELIGIBILITY_OVERRIDES: new OneToManyLink(
        'BenefitEligibilityOverrides',
        this,
        linkedApis[7]
      ),
      PAY_STATEMENT_BENEFIT_LINE: new OneToManyLink(
        'PayStatementBenefitLine',
        this,
        linkedApis[8]
      ),
      BENEFIT_DETAIL: new OneToManyLink('BenefitDetail', this, linkedApis[9]),
      PAYROLL_POSITION_DETAIL: new OneToManyLink(
        'PayrollPositionDetail',
        this,
        linkedApis[10]
      ),
      DEDUCTION_ARREAR_RECOVERY: new OneToManyLink(
        'DeductionArrearRecovery',
        this,
        linkedApis[11]
      ),
      TOTAL_COMP_STATEMENT_SECTION_BENEFIT: new OneToManyLink(
        'TotalCompStatementSectionBenefit',
        this,
        linkedApis[12]
      ),
      POSITIONS: new OneToManyLink('Positions', this, linkedApis[13]),
      PAY_STATEMENT_BENEFIT_LINES: new OneToManyLink(
        'PayStatementBenefitLines',
        this,
        linkedApis[14]
      ),
      DEDUCTION_ARREAR: new OneToManyLink(
        'DeductionArrear',
        this,
        linkedApis[15]
      )
    };
    return this;
  }

  entityConstructor = Benefits;

  requestBuilder(): BenefitsRequestBuilder<DeSerializersT> {
    return new BenefitsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Benefits<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Benefits<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Benefits<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Benefits, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Benefits, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BENEFIT_PLAN_ID: OrderableEdmTypeField<
      Benefits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BENEFIT_OPTION_ID: OrderableEdmTypeField<
      Benefits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EFFECTIVE: OrderableEdmTypeField<
      Benefits<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXPIRATION: OrderableEdmTypeField<
      Benefits<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BENEFIT_ID: OrderableEdmTypeField<
      Benefits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerEnrolledBenefitInquiry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_BENEFIT_INQUIRY: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledBenefitInquiriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link disposableIncomeBenefits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISPOSABLE_INCOME_BENEFITS: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      DisposableIncomeBenefitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PLAN: OneToOneLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      BenefitPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_OPTION: OneToOneLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      BenefitOptionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitEarningBasis} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_EARNING_BASIS: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      BenefitEarningBasisApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_DETAILS: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      BenefitHcmDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerEnrolledBenefits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_BENEFITS: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledBenefitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitEligibilityOverrides} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_ELIGIBILITY_OVERRIDES: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      BenefitEligibilityOverridesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payStatementBenefitLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_BENEFIT_LINE: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      PayStatementBenefitLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_DETAIL: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      BenefitDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollPositionDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_POSITION_DETAIL: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      PayrollPositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deductionArrearRecovery} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEDUCTION_ARREAR_RECOVERY: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      DeductionArrearRecoveriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link totalCompStatementSectionBenefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOTAL_COMP_STATEMENT_SECTION_BENEFIT: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      TotalCompStatementSectionBenefitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      PositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payStatementBenefitLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_BENEFIT_LINES: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      PayStatementBenefitLineInquiriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deductionArrear} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEDUCTION_ARREAR: OneToManyLink<
      Benefits<DeSerializersT>,
      DeSerializersT,
      DeductionArrearsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Benefits<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link benefitPlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'BenefitPlanId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link benefitOptionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_OPTION_ID: fieldBuilder.buildEdmTypeField(
          'BenefitOptionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link effective} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE: fieldBuilder.buildEdmTypeField(
          'Effective',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link expiration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION: fieldBuilder.buildEdmTypeField(
          'Expiration',
          'Edm.DateTimeOffset',
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
        ALL_FIELDS: new AllFields('*', Benefits)
      };
    }

    return this._schema;
  }
}
