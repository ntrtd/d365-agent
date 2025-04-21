/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkerEnrolledBenefits } from './WorkerEnrolledBenefits';
import { WorkerEnrolledBenefitsRequestBuilder } from './WorkerEnrolledBenefitsRequestBuilder';
import { WorkerEnrolledBenefitLimitsApi } from './WorkerEnrolledBenefitLimitsApi';
import { WorkersApi } from './WorkersApi';
import { BenefitsApi } from './BenefitsApi';
import { WorkerGarnishmentDetailsApi } from './WorkerGarnishmentDetailsApi';
import { CoveredBeneficiaryRelationshipsApi } from './CoveredBeneficiaryRelationshipsApi';
import { CoveredDependentRelationshipsApi } from './CoveredDependentRelationshipsApi';
import { WorkerEnrolledBenefitDetailsApi } from './WorkerEnrolledBenefitDetailsApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class WorkerEnrolledBenefitsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WorkerEnrolledBenefits<DeSerializersT>, DeSerializersT>
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
  ): WorkerEnrolledBenefitsApi<DeSerializersT> {
    return new WorkerEnrolledBenefitsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link workerEnrolledBenefitLimit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_BENEFIT_LIMIT: OneToOneLink<
      WorkerEnrolledBenefits<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledBenefitLimitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      WorkerEnrolledBenefits<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT: OneToOneLink<
      WorkerEnrolledBenefits<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workerGarnishmentDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_GARNISHMENT_DETAIL: OneToOneLink<
      WorkerEnrolledBenefits<DeSerializersT>,
      DeSerializersT,
      WorkerGarnishmentDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link coveredBeneficiaryRelationship} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COVERED_BENEFICIARY_RELATIONSHIP: OneToOneLink<
      WorkerEnrolledBenefits<DeSerializersT>,
      DeSerializersT,
      CoveredBeneficiaryRelationshipsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link coveredDependentRelationship} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COVERED_DEPENDENT_RELATIONSHIP: OneToOneLink<
      WorkerEnrolledBenefits<DeSerializersT>,
      DeSerializersT,
      CoveredDependentRelationshipsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerEnrolledBenefitDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_BENEFIT_DETAILS: OneToManyLink<
      WorkerEnrolledBenefits<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledBenefitDetailsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkerEnrolledBenefitLimitsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      BenefitsApi<DeSerializersT>,
      WorkerGarnishmentDetailsApi<DeSerializersT>,
      CoveredBeneficiaryRelationshipsApi<DeSerializersT>,
      CoveredDependentRelationshipsApi<DeSerializersT>,
      WorkerEnrolledBenefitDetailsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WORKER_ENROLLED_BENEFIT_LIMIT: new OneToOneLink(
        'WorkerEnrolledBenefitLimit',
        this,
        linkedApis[0]
      ),
      WORKER: new OneToOneLink('Worker', this, linkedApis[1]),
      BENEFIT: new OneToOneLink('Benefit', this, linkedApis[2]),
      WORKER_GARNISHMENT_DETAIL: new OneToOneLink(
        'WorkerGarnishmentDetail',
        this,
        linkedApis[3]
      ),
      COVERED_BENEFICIARY_RELATIONSHIP: new OneToOneLink(
        'CoveredBeneficiaryRelationship',
        this,
        linkedApis[4]
      ),
      COVERED_DEPENDENT_RELATIONSHIP: new OneToOneLink(
        'CoveredDependentRelationship',
        this,
        linkedApis[5]
      ),
      WORKER_ENROLLED_BENEFIT_DETAILS: new OneToManyLink(
        'WorkerEnrolledBenefitDetails',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = WorkerEnrolledBenefits;

  requestBuilder(): WorkerEnrolledBenefitsRequestBuilder<DeSerializersT> {
    return new WorkerEnrolledBenefitsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkerEnrolledBenefits<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WorkerEnrolledBenefits<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WorkerEnrolledBenefits<DeSerializersT>,
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
    typeof WorkerEnrolledBenefits,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkerEnrolledBenefits,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BENEFIT_PLAN_ID: OrderableEdmTypeField<
      WorkerEnrolledBenefits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BENEFIT_OPTION_ID: OrderableEdmTypeField<
      WorkerEnrolledBenefits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORKER_ID: OrderableEdmTypeField<
      WorkerEnrolledBenefits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENROLLMENT_START: OrderableEdmTypeField<
      WorkerEnrolledBenefits<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ENROLLMENT_END: OrderableEdmTypeField<
      WorkerEnrolledBenefits<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BENEFIT_ID: OrderableEdmTypeField<
      WorkerEnrolledBenefits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workerEnrolledBenefitLimit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_BENEFIT_LIMIT: OneToOneLink<
      WorkerEnrolledBenefits<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledBenefitLimitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      WorkerEnrolledBenefits<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT: OneToOneLink<
      WorkerEnrolledBenefits<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workerGarnishmentDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_GARNISHMENT_DETAIL: OneToOneLink<
      WorkerEnrolledBenefits<DeSerializersT>,
      DeSerializersT,
      WorkerGarnishmentDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link coveredBeneficiaryRelationship} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COVERED_BENEFICIARY_RELATIONSHIP: OneToOneLink<
      WorkerEnrolledBenefits<DeSerializersT>,
      DeSerializersT,
      CoveredBeneficiaryRelationshipsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link coveredDependentRelationship} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COVERED_DEPENDENT_RELATIONSHIP: OneToOneLink<
      WorkerEnrolledBenefits<DeSerializersT>,
      DeSerializersT,
      CoveredDependentRelationshipsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerEnrolledBenefitDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_BENEFIT_DETAILS: OneToManyLink<
      WorkerEnrolledBenefits<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledBenefitDetailsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkerEnrolledBenefits<DeSerializers>>;
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
         * Static representation of the {@link workerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_ID: fieldBuilder.buildEdmTypeField(
          'WorkerId',
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
        ALL_FIELDS: new AllFields('*', WorkerEnrolledBenefits)
      };
    }

    return this._schema;
  }
}
