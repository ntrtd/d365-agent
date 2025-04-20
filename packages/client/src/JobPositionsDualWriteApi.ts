/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobPositionsDualWrite } from './JobPositionsDualWrite';
import { JobPositionsDualWriteRequestBuilder } from './JobPositionsDualWriteRequestBuilder';
import { PayrollPositionDetailsApi } from './PayrollPositionDetailsApi';
import { PositionDefaultDimensionsDualWriteApi } from './PositionDefaultDimensionsDualWriteApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class JobPositionsDualWriteApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JobPositionsDualWrite<DeSerializersT>, DeSerializersT>
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
  ): JobPositionsDualWriteApi<DeSerializersT> {
    return new JobPositionsDualWriteApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link payrollPositionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_POSITION_DETAILS: OneToManyLink<
      JobPositionsDualWrite<DeSerializersT>,
      DeSerializersT,
      PayrollPositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionDefaultDimensionDualWrite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_DEFAULT_DIMENSION_DUAL_WRITE: OneToManyLink<
      JobPositionsDualWrite<DeSerializersT>,
      DeSerializersT,
      PositionDefaultDimensionsDualWriteApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayrollPositionDetailsApi<DeSerializersT>,
      PositionDefaultDimensionsDualWriteApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAYROLL_POSITION_DETAILS: new OneToManyLink(
        'PayrollPositionDetails',
        this,
        linkedApis[0]
      ),
      POSITION_DEFAULT_DIMENSION_DUAL_WRITE: new OneToManyLink(
        'PositionDefaultDimensionDualWrite',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = JobPositionsDualWrite;

  requestBuilder(): JobPositionsDualWriteRequestBuilder<DeSerializersT> {
    return new JobPositionsDualWriteRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JobPositionsDualWrite<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<JobPositionsDualWrite<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    JobPositionsDualWrite<DeSerializersT>,
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
    typeof JobPositionsDualWrite,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        JobPositionsDualWrite,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POSITION_ID: OrderableEdmTypeField<
      JobPositionsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSITION_TYPE_ID: OrderableEdmTypeField<
      JobPositionsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      JobPositionsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTS_TO_VALID_TO: OrderableEdmTypeField<
      JobPositionsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RETIREMENT: OrderableEdmTypeField<
      JobPositionsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JOB_ID: OrderableEdmTypeField<
      JobPositionsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      JobPositionsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FULL_TIME_EQUIVALENT: OrderableEdmTypeField<
      JobPositionsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PARENT_POSITION_ID: OrderableEdmTypeField<
      JobPositionsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPARTMENT_ID: OrderableEdmTypeField<
      JobPositionsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVATION: OrderableEdmTypeField<
      JobPositionsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TITLE_ID: OrderableEdmTypeField<
      JobPositionsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AVAILABLE_FOR_ASSIGNMENT: OrderableEdmTypeField<
      JobPositionsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      JobPositionsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REPORTS_TO_VALID_FROM: OrderableEdmTypeField<
      JobPositionsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMPENSATION_REGION_ID: OrderableEdmTypeField<
      JobPositionsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollPositionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_POSITION_DETAILS: OneToManyLink<
      JobPositionsDualWrite<DeSerializersT>,
      DeSerializersT,
      PayrollPositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionDefaultDimensionDualWrite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_DEFAULT_DIMENSION_DUAL_WRITE: OneToManyLink<
      JobPositionsDualWrite<DeSerializersT>,
      DeSerializersT,
      PositionDefaultDimensionsDualWriteApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JobPositionsDualWrite<DeSerializers>>;
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
         * Static representation of the {@link positionTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'PositionTypeId',
          'Edm.String',
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
        /**
         * Static representation of the {@link reportsToValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTS_TO_VALID_TO: fieldBuilder.buildEdmTypeField(
          'ReportsToValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link retirement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETIREMENT: fieldBuilder.buildEdmTypeField(
          'Retirement',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', true),
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
         * Static representation of the {@link fullTimeEquivalent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_TIME_EQUIVALENT: fieldBuilder.buildEdmTypeField(
          'FullTimeEquivalent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link parentPositionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_POSITION_ID: fieldBuilder.buildEdmTypeField(
          'ParentPositionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link departmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT_ID: fieldBuilder.buildEdmTypeField(
          'DepartmentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVATION: fieldBuilder.buildEdmTypeField(
          'Activation',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link titleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE_ID: fieldBuilder.buildEdmTypeField('TitleId', 'Edm.String', true),
        /**
         * Static representation of the {@link availableForAssignment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVAILABLE_FOR_ASSIGNMENT: fieldBuilder.buildEdmTypeField(
          'AvailableForAssignment',
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
         * Static representation of the {@link reportsToValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTS_TO_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ReportsToValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link compensationRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CompensationRegionId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JobPositionsDualWrite)
      };
    }

    return this._schema;
  }
}
