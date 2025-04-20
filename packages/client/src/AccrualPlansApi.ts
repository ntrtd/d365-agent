/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AccrualPlans } from './AccrualPlans';
import { AccrualPlansRequestBuilder } from './AccrualPlansRequestBuilder';
import { WorkerEnrolledAccrualsApi } from './WorkerEnrolledAccrualsApi';
import { AccrualBasisEarningCodesApi } from './AccrualBasisEarningCodesApi';
import { AccrualPlanRulesApi } from './AccrualPlanRulesApi';
import { AccrualEarningCodesApi } from './AccrualEarningCodesApi';
import { WorkerEnrolledAccrualInquiriesApi } from './WorkerEnrolledAccrualInquiriesApi';
import { NoYes } from './NoYes';
import { PayrollWorkerAccrualDateMethod } from './PayrollWorkerAccrualDateMethod';
import { PayrollAccrualMethod } from './PayrollAccrualMethod';
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
export class AccrualPlansApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AccrualPlans<DeSerializersT>, DeSerializersT>
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
  ): AccrualPlansApi<DeSerializersT> {
    return new AccrualPlansApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link workerEnrolledAccruals} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_ACCRUALS: OneToManyLink<
      AccrualPlans<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledAccrualsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link accrualBasisEarningCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCRUAL_BASIS_EARNING_CODES: OneToManyLink<
      AccrualPlans<DeSerializersT>,
      DeSerializersT,
      AccrualBasisEarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link accrualPlanRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCRUAL_PLAN_RULES: OneToManyLink<
      AccrualPlans<DeSerializersT>,
      DeSerializersT,
      AccrualPlanRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link accrualEarningCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCRUAL_EARNING_CODES: OneToManyLink<
      AccrualPlans<DeSerializersT>,
      DeSerializersT,
      AccrualEarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerEnrolledAccrualInquiry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_ACCRUAL_INQUIRY: OneToManyLink<
      AccrualPlans<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledAccrualInquiriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkerEnrolledAccrualsApi<DeSerializersT>,
      AccrualBasisEarningCodesApi<DeSerializersT>,
      AccrualPlanRulesApi<DeSerializersT>,
      AccrualEarningCodesApi<DeSerializersT>,
      WorkerEnrolledAccrualInquiriesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WORKER_ENROLLED_ACCRUALS: new OneToManyLink(
        'WorkerEnrolledAccruals',
        this,
        linkedApis[0]
      ),
      ACCRUAL_BASIS_EARNING_CODES: new OneToManyLink(
        'AccrualBasisEarningCodes',
        this,
        linkedApis[1]
      ),
      ACCRUAL_PLAN_RULES: new OneToManyLink(
        'AccrualPlanRules',
        this,
        linkedApis[2]
      ),
      ACCRUAL_EARNING_CODES: new OneToManyLink(
        'AccrualEarningCodes',
        this,
        linkedApis[3]
      ),
      WORKER_ENROLLED_ACCRUAL_INQUIRY: new OneToManyLink(
        'WorkerEnrolledAccrualInquiry',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = AccrualPlans;

  requestBuilder(): AccrualPlansRequestBuilder<DeSerializersT> {
    return new AccrualPlansRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AccrualPlans<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AccrualPlans<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AccrualPlans<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AccrualPlans, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(AccrualPlans, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACCRUAL_ID: OrderableEdmTypeField<
      AccrualPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AccrualPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STARTING_DATE: OrderableEdmTypeField<
      AccrualPlans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CAN_CARRY_FORWARD: EnumField<
      AccrualPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOM_ACCRUAL_DATE: OrderableEdmTypeField<
      AccrualPlans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_ACCRUAL_DATE_METHOD: EnumField<
      AccrualPlans<DeSerializers>,
      DeSerializersT,
      PayrollWorkerAccrualDateMethod,
      true,
      true
    >;
    ACCRUAL_METHOD: EnumField<
      AccrualPlans<DeSerializers>,
      DeSerializersT,
      PayrollAccrualMethod,
      true,
      true
    >;
    IS_INCLUDED_IN_ACCRUAL: EnumField<
      AccrualPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CALCULATION_FREQUENCY: OrderableEdmTypeField<
      AccrualPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerEnrolledAccruals} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_ACCRUALS: OneToManyLink<
      AccrualPlans<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledAccrualsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link accrualBasisEarningCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCRUAL_BASIS_EARNING_CODES: OneToManyLink<
      AccrualPlans<DeSerializersT>,
      DeSerializersT,
      AccrualBasisEarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link accrualPlanRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCRUAL_PLAN_RULES: OneToManyLink<
      AccrualPlans<DeSerializersT>,
      DeSerializersT,
      AccrualPlanRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link accrualEarningCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCRUAL_EARNING_CODES: OneToManyLink<
      AccrualPlans<DeSerializersT>,
      DeSerializersT,
      AccrualEarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerEnrolledAccrualInquiry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_ACCRUAL_INQUIRY: OneToManyLink<
      AccrualPlans<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledAccrualInquiriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AccrualPlans<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link accrualId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_ID: fieldBuilder.buildEdmTypeField(
          'AccrualId',
          'Edm.String',
          false
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
         * Static representation of the {@link startingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTING_DATE: fieldBuilder.buildEdmTypeField(
          'StartingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link canCarryForward} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_CARRY_FORWARD: fieldBuilder.buildEnumField(
          'CanCarryForward',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customAccrualDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_ACCRUAL_DATE: fieldBuilder.buildEdmTypeField(
          'CustomAccrualDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link workerAccrualDateMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_ACCRUAL_DATE_METHOD: fieldBuilder.buildEnumField(
          'WorkerAccrualDateMethod',
          PayrollWorkerAccrualDateMethod,
          true
        ),
        /**
         * Static representation of the {@link accrualMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_METHOD: fieldBuilder.buildEnumField(
          'AccrualMethod',
          PayrollAccrualMethod,
          true
        ),
        /**
         * Static representation of the {@link isIncludedInAccrual} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INCLUDED_IN_ACCRUAL: fieldBuilder.buildEnumField(
          'IsIncludedInAccrual',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link calculationFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_FREQUENCY: fieldBuilder.buildEdmTypeField(
          'CalculationFrequency',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AccrualPlans)
      };
    }

    return this._schema;
  }
}
