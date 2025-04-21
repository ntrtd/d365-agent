/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PositionJobs } from './PositionJobs';
import { PositionJobsRequestBuilder } from './PositionJobsRequestBuilder';
import { PayrollFixedCompensationPlansApi } from './PayrollFixedCompensationPlansApi';
import { IntV1PayrollFixedCompensationPlansApi } from './IntV1PayrollFixedCompensationPlansApi';
import { JobDetailsApi } from './JobDetailsApi';
import { PayrollPositionsApi } from './PayrollPositionsApi';
import { PayIntV1PayrollPositionsApi } from './PayIntV1PayrollPositionsApi';
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
export class PositionJobsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PositionJobs<DeSerializersT>, DeSerializersT>
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
  ): PositionJobsApi<DeSerializersT> {
    return new PositionJobsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link payrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_FIXED_COMPENSATION_PLAN: OneToManyLink<
      PositionJobs<DeSerializersT>,
      DeSerializersT,
      PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link intV1PayrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INT_V_1_PAYROLL_FIXED_COMPENSATION_PLAN: OneToManyLink<
      PositionJobs<DeSerializersT>,
      DeSerializersT,
      IntV1PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_DETAIL: OneToOneLink<
      PositionJobs<DeSerializersT>,
      DeSerializersT,
      JobDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_POSITION: OneToOneLink<
      PositionJobs<DeSerializersT>,
      DeSerializersT,
      PayrollPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntV1PayrollPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_V_1_PAYROLL_POSITION: OneToManyLink<
      PositionJobs<DeSerializersT>,
      DeSerializersT,
      PayIntV1PayrollPositionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayrollFixedCompensationPlansApi<DeSerializersT>,
      IntV1PayrollFixedCompensationPlansApi<DeSerializersT>,
      JobDetailsApi<DeSerializersT>,
      PayrollPositionsApi<DeSerializersT>,
      PayIntV1PayrollPositionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAYROLL_FIXED_COMPENSATION_PLAN: new OneToManyLink(
        'PayrollFixedCompensationPlan',
        this,
        linkedApis[0]
      ),
      INT_V_1_PAYROLL_FIXED_COMPENSATION_PLAN: new OneToManyLink(
        'IntV1PayrollFixedCompensationPlan',
        this,
        linkedApis[1]
      ),
      JOB_DETAIL: new OneToOneLink('JobDetail', this, linkedApis[2]),
      PAYROLL_POSITION: new OneToOneLink(
        'PayrollPosition',
        this,
        linkedApis[3]
      ),
      PAY_INT_V_1_PAYROLL_POSITION: new OneToManyLink(
        'PayIntV1PayrollPosition',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = PositionJobs;

  requestBuilder(): PositionJobsRequestBuilder<DeSerializersT> {
    return new PositionJobsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PositionJobs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PositionJobs<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PositionJobs<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PositionJobs, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PositionJobs, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POSITION_ID: OrderableEdmTypeField<
      PositionJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_ID: OrderableEdmTypeField<
      PositionJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PositionJobs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PositionJobs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_FIXED_COMPENSATION_PLAN: OneToManyLink<
      PositionJobs<DeSerializersT>,
      DeSerializersT,
      PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link intV1PayrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INT_V_1_PAYROLL_FIXED_COMPENSATION_PLAN: OneToManyLink<
      PositionJobs<DeSerializersT>,
      DeSerializersT,
      IntV1PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_DETAIL: OneToOneLink<
      PositionJobs<DeSerializersT>,
      DeSerializersT,
      JobDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_POSITION: OneToOneLink<
      PositionJobs<DeSerializersT>,
      DeSerializersT,
      PayrollPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntV1PayrollPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_V_1_PAYROLL_POSITION: OneToManyLink<
      PositionJobs<DeSerializersT>,
      DeSerializersT,
      PayIntV1PayrollPositionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PositionJobs<DeSerializers>>;
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
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', false),
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PositionJobs)
      };
    }

    return this._schema;
  }
}
