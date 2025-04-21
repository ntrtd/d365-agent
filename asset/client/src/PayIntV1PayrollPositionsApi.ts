/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayIntV1PayrollPositions } from './PayIntV1PayrollPositions';
import { PayIntV1PayrollPositionsRequestBuilder } from './PayIntV1PayrollPositionsRequestBuilder';
import { PayrollFixedCompensationPlansApi } from './PayrollFixedCompensationPlansApi';
import { PositionsV2Api } from './PositionsV2Api';
import { PositionWorkerAssignmentsV2Api } from './PositionWorkerAssignmentsV2Api';
import { PositionHierarchiesApi } from './PositionHierarchiesApi';
import { PositionJobsApi } from './PositionJobsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PayIntV1PayrollPositionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayIntV1PayrollPositions<DeSerializersT>, DeSerializersT>
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
  ): PayIntV1PayrollPositionsApi<DeSerializersT> {
    return new PayIntV1PayrollPositionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link payrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_FIXED_COMPENSATION_PLAN: OneToOneLink<
      PayIntV1PayrollPositions<DeSerializersT>,
      DeSerializersT,
      PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_V_2: OneToOneLink<
      PayIntV1PayrollPositions<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionWorkerAssignmentV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_WORKER_ASSIGNMENT_V_2: OneToOneLink<
      PayIntV1PayrollPositions<DeSerializersT>,
      DeSerializersT,
      PositionWorkerAssignmentsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionHierarchy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_HIERARCHY: OneToOneLink<
      PayIntV1PayrollPositions<DeSerializersT>,
      DeSerializersT,
      PositionHierarchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_JOB: OneToOneLink<
      PayIntV1PayrollPositions<DeSerializersT>,
      DeSerializersT,
      PositionJobsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayrollFixedCompensationPlansApi<DeSerializersT>,
      PositionsV2Api<DeSerializersT>,
      PositionWorkerAssignmentsV2Api<DeSerializersT>,
      PositionHierarchiesApi<DeSerializersT>,
      PositionJobsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAYROLL_FIXED_COMPENSATION_PLAN: new OneToOneLink(
        'PayrollFixedCompensationPlan',
        this,
        linkedApis[0]
      ),
      POSITION_V_2: new OneToOneLink('PositionV2', this, linkedApis[1]),
      POSITION_WORKER_ASSIGNMENT_V_2: new OneToOneLink(
        'PositionWorkerAssignmentV2',
        this,
        linkedApis[2]
      ),
      POSITION_HIERARCHY: new OneToOneLink(
        'PositionHierarchy',
        this,
        linkedApis[3]
      ),
      POSITION_JOB: new OneToOneLink('PositionJob', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = PayIntV1PayrollPositions;

  requestBuilder(): PayIntV1PayrollPositionsRequestBuilder<DeSerializersT> {
    return new PayIntV1PayrollPositionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayIntV1PayrollPositions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayIntV1PayrollPositions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayIntV1PayrollPositions<DeSerializersT>,
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
    typeof PayIntV1PayrollPositions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayIntV1PayrollPositions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POSITION_ID: OrderableEdmTypeField<
      PayIntV1PayrollPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PayIntV1PayrollPositions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ANNUAL_REGULAR_HOURS: OrderableEdmTypeField<
      PayIntV1PayrollPositions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAY_CYCLE_ID: OrderableEdmTypeField<
      PayIntV1PayrollPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAID_BY_LEGAL_ENTITY: OrderableEdmTypeField<
      PayIntV1PayrollPositions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PayIntV1PayrollPositions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_FIXED_COMPENSATION_PLAN: OneToOneLink<
      PayIntV1PayrollPositions<DeSerializersT>,
      DeSerializersT,
      PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_V_2: OneToOneLink<
      PayIntV1PayrollPositions<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionWorkerAssignmentV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_WORKER_ASSIGNMENT_V_2: OneToOneLink<
      PayIntV1PayrollPositions<DeSerializersT>,
      DeSerializersT,
      PositionWorkerAssignmentsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionHierarchy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_HIERARCHY: OneToOneLink<
      PayIntV1PayrollPositions<DeSerializersT>,
      DeSerializersT,
      PositionHierarchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_JOB: OneToOneLink<
      PayIntV1PayrollPositions<DeSerializersT>,
      DeSerializersT,
      PositionJobsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayIntV1PayrollPositions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link positionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_ID: fieldBuilder.buildEdmTypeField(
          'PositionId',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link annualRegularHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNUAL_REGULAR_HOURS: fieldBuilder.buildEdmTypeField(
          'AnnualRegularHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link payCycleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_CYCLE_ID: fieldBuilder.buildEdmTypeField(
          'PayCycleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paidByLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAID_BY_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'PaidByLegalEntity',
          'Edm.String',
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayIntV1PayrollPositions)
      };
    }

    return this._schema;
  }
}
