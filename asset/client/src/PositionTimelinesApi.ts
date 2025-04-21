/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PositionTimelines } from './PositionTimelines';
import { PositionTimelinesRequestBuilder } from './PositionTimelinesRequestBuilder';
import { JobFunctionsApi } from './JobFunctionsApi';
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
export class PositionTimelinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PositionTimelines<DeSerializersT>, DeSerializersT>
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
  ): PositionTimelinesApi<DeSerializersT> {
    return new PositionTimelinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link jobFunction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_FUNCTION: OneToOneLink<
      PositionTimelines<DeSerializersT>,
      DeSerializersT,
      JobFunctionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [JobFunctionsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      JOB_FUNCTION: new OneToOneLink('JobFunction', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = PositionTimelines;

  requestBuilder(): PositionTimelinesRequestBuilder<DeSerializersT> {
    return new PositionTimelinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PositionTimelines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PositionTimelines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PositionTimelines<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof PositionTimelines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PositionTimelines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POSITION_ID: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAID_BY_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSITION_DETAIL_VALID_FROM: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSITION_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSITION_CREATED_BY: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSITION_DETAIL_CREATED_BY: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKET_CONTROL_PAY: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSITION_CREATED_DATE_TIME: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REASON_CODE_ID: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSITION_WORKER_ASSIGNMENT_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPARTMENT_NUMBER: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_DETAIL_CREATED_BY: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_TYPE_ID: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSITION_WORKER_ASSIGNMENT_CREATED_BY: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TITLE_ID: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_FUNCTION_ID: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FULL_TIME_EQUIVALENCY: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSITION_WORKER_ASSIGNMENT_CREATED_DATE_TIME: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSITION_WORKER_ASSIGNMENT_VALID_FROM: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAYROLL_POSITION_DETAILS_VALID_FROM: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAY_CYCLE_ID: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSITION_DETAIL_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MARKET_MINIMUM_PAY: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SURVEY_COMPANY_ID: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_SURVEY_CODE: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_DETAIL_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MARKET_MAXIMUM_PAY: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYROLL_POSITION_DETAILS_VALID_TO: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSITION_DETAIL_MODIFIED_BY: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKET_SOURCE: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSITION_MODIFIED_BY: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_DETAIL_VALID_FROM: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSITION_DETAIL_VALID_TO: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JOB_ID: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_DETAIL_CREATED_DATE_TIME: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AVAILABLE_FOR_ASSIGNMENT: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSITION_WORKER_ASSIGNMENT_MODIFIED_BY: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSITION_DETAIL_CREATED_DATE_TIME: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NOTE: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_FULL_TIME_EQUIVALENCY: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMPENSATION_LEVEL_ID: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMP_LOCATION_ID: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSITION_TYPE_ID: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSITION_WORKER_ASSIGNMENT_VALID_TO: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JOB_DETAIL_VALID_TO: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JOB_DETAIL_DESCRIPTION: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_DETAIL_MODIFIED_BY: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYROLL_NORMAL_HOURS: OrderableEdmTypeField<
      PositionTimelines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobFunction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_FUNCTION: OneToOneLink<
      PositionTimelines<DeSerializersT>,
      DeSerializersT,
      JobFunctionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PositionTimelines<DeSerializers>>;
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
         * Static representation of the {@link paidByLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAID_BY_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'PaidByLegalEntityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link positionDetailValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_DETAIL_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'PositionDetailValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link positionModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PositionModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link positionCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'PositionCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link positionDetailCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_DETAIL_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'PositionDetailCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link marketControlPay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKET_CONTROL_PAY: fieldBuilder.buildEdmTypeField(
          'MarketControlPay',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link positionCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PositionCreatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link reasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'ReasonCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link positionWorkerAssignmentModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_WORKER_ASSIGNMENT_MODIFIED_DATE_TIME:
          fieldBuilder.buildEdmTypeField(
            'PositionWorkerAssignmentModifiedDateTime',
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
         * Static representation of the {@link departmentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DepartmentNumber',
          'Edm.String',
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
         * Static representation of the {@link jobDetailCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_DETAIL_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'JobDetailCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'JobTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link positionWorkerAssignmentCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_WORKER_ASSIGNMENT_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'PositionWorkerAssignmentCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link titleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE_ID: fieldBuilder.buildEdmTypeField('TitleId', 'Edm.String', true),
        /**
         * Static representation of the {@link jobFunctionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_FUNCTION_ID: fieldBuilder.buildEdmTypeField(
          'JobFunctionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fullTimeEquivalency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_TIME_EQUIVALENCY: fieldBuilder.buildEdmTypeField(
          'FullTimeEquivalency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link positionWorkerAssignmentCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_WORKER_ASSIGNMENT_CREATED_DATE_TIME:
          fieldBuilder.buildEdmTypeField(
            'PositionWorkerAssignmentCreatedDateTime',
            'Edm.DateTimeOffset',
            false
          ),
        /**
         * Static representation of the {@link positionWorkerAssignmentValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_WORKER_ASSIGNMENT_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'PositionWorkerAssignmentValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link payrollPositionDetailsValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYROLL_POSITION_DETAILS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'PayrollPositionDetailsValidFrom',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link positionDetailModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_DETAIL_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PositionDetailModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link marketMinimumPay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKET_MINIMUM_PAY: fieldBuilder.buildEdmTypeField(
          'MarketMinimumPay',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link surveyCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SURVEY_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'SurveyCompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalSurveyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_SURVEY_CODE: fieldBuilder.buildEdmTypeField(
          'ExternalSurveyCode',
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
         * Static representation of the {@link jobDetailModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_DETAIL_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'JobDetailModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link marketMaximumPay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKET_MAXIMUM_PAY: fieldBuilder.buildEdmTypeField(
          'MarketMaximumPay',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link payrollPositionDetailsValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYROLL_POSITION_DETAILS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'PayrollPositionDetailsValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link positionDetailModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_DETAIL_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'PositionDetailModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link marketSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKET_SOURCE: fieldBuilder.buildEdmTypeField(
          'MarketSource',
          'Edm.String',
          true
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
         * Static representation of the {@link positionModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'PositionModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobDetailValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_DETAIL_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'JobDetailValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link positionDetailValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_DETAIL_VALID_TO: fieldBuilder.buildEdmTypeField(
          'PositionDetailValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', true),
        /**
         * Static representation of the {@link jobDetailCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_DETAIL_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'JobDetailCreatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
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
         * Static representation of the {@link positionWorkerAssignmentModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_WORKER_ASSIGNMENT_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'PositionWorkerAssignmentModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link positionDetailCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_DETAIL_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PositionDetailCreatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        /**
         * Static representation of the {@link defaultFullTimeEquivalency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FULL_TIME_EQUIVALENCY: fieldBuilder.buildEdmTypeField(
          'DefaultFullTimeEquivalency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link compensationLevelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_LEVEL_ID: fieldBuilder.buildEdmTypeField(
          'CompensationLevelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link compLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMP_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'CompLocationId',
          'Edm.String',
          true
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
         * Static representation of the {@link positionWorkerAssignmentValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_WORKER_ASSIGNMENT_VALID_TO: fieldBuilder.buildEdmTypeField(
          'PositionWorkerAssignmentValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link jobDetailValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_DETAIL_VALID_TO: fieldBuilder.buildEdmTypeField(
          'JobDetailValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link jobDetailDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_DETAIL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'JobDetailDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobDetailModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_DETAIL_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'JobDetailModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payrollNormalHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYROLL_NORMAL_HOURS: fieldBuilder.buildEdmTypeField(
          'PayrollNormalHours',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PositionTimelines)
      };
    }

    return this._schema;
  }
}
