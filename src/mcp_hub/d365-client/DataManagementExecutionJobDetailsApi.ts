/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DataManagementExecutionJobDetails } from './DataManagementExecutionJobDetails';
import { DataManagementExecutionJobDetailsRequestBuilder } from './DataManagementExecutionJobDetailsRequestBuilder';
import { DataManagementExecutionJobsApi } from './DataManagementExecutionJobsApi';
import { DmfBatchJobStatus } from './DmfBatchJobStatus';
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
export class DataManagementExecutionJobDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DataManagementExecutionJobDetails<DeSerializersT>, DeSerializersT>
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
  ): DataManagementExecutionJobDetailsApi<DeSerializersT> {
    return new DataManagementExecutionJobDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link executionJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXECUTION_JOB: OneToOneLink<
      DataManagementExecutionJobDetails<DeSerializersT>,
      DeSerializersT,
      DataManagementExecutionJobsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DataManagementExecutionJobsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      EXECUTION_JOB: new OneToOneLink('ExecutionJob', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = DataManagementExecutionJobDetails;

  requestBuilder(): DataManagementExecutionJobDetailsRequestBuilder<DeSerializersT> {
    return new DataManagementExecutionJobDetailsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    DataManagementExecutionJobDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DataManagementExecutionJobDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DataManagementExecutionJobDetails<DeSerializersT>,
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
    typeof DataManagementExecutionJobDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DataManagementExecutionJobDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DEFINITION_GROUP_ID: OrderableEdmTypeField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_ID: OrderableEdmTypeField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENTITY_NAME: OrderableEdmTypeField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEVEL_IN_EXECUTION_UNIT: OrderableEdmTypeField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STAGING_STATUS: EnumField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      DmfBatchJobStatus,
      true,
      true
    >;
    RUN_BUSINESS_VALIDATION: EnumField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FAIL_EXECUTION_UNIT_ON_ERROR: EnumField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FILE_PATH: OrderableEdmTypeField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RUN_BUSINESS_LOGIC: EnumField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TARGET_START_DATE_TIME: OrderableEdmTypeField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STAGING_RECORDS_TO_BE_PROCESSED_COUNT: OrderableEdmTypeField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STAGING_START_DATE_TIME: OrderableEdmTypeField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TARGET_RECORDS_UPDATED_COUNT: OrderableEdmTypeField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NUMBER_OF_ROWS_TO_SKIP: OrderableEdmTypeField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TARGET_STATUS: EnumField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      DmfBatchJobStatus,
      true,
      true
    >;
    SEQUENCE_IN_LEVEL: OrderableEdmTypeField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TARGET_RECORDS_CREATED_COUNT: OrderableEdmTypeField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STAGING_END_DATE_TIME: OrderableEdmTypeField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PARALLEL_TASK_COUNT: OrderableEdmTypeField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXECUTE_TARGET_STEP: EnumField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCEL_SHEET_NAME: OrderableEdmTypeField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STAGING_RECORDS_CREATED_COUNT: OrderableEdmTypeField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TARGET_END_DATE_TIME: OrderableEdmTypeField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IGNORE_ERROR: EnumField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREATE_ERROR_FILE: EnumField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXECUTION_UNIT: OrderableEdmTypeField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FIRST_ROW_IS_HEADER: EnumField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCE_FORMAT: OrderableEdmTypeField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FAIL_LEVEL_ON_ERROR: EnumField<
      DataManagementExecutionJobDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link executionJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXECUTION_JOB: OneToOneLink<
      DataManagementExecutionJobDetails<DeSerializersT>,
      DeSerializersT,
      DataManagementExecutionJobsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DataManagementExecutionJobDetails<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link definitionGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFINITION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'DefinitionGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', false),
        /**
         * Static representation of the {@link entityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_NAME: fieldBuilder.buildEdmTypeField(
          'EntityName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link levelInExecutionUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL_IN_EXECUTION_UNIT: fieldBuilder.buildEdmTypeField(
          'LevelInExecutionUnit',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link stagingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAGING_STATUS: fieldBuilder.buildEnumField(
          'StagingStatus',
          DmfBatchJobStatus,
          true
        ),
        /**
         * Static representation of the {@link runBusinessValidation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RUN_BUSINESS_VALIDATION: fieldBuilder.buildEnumField(
          'RunBusinessValidation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link failExecutionUnitOnError} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAIL_EXECUTION_UNIT_ON_ERROR: fieldBuilder.buildEnumField(
          'FailExecutionUnitOnError',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link filePath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_PATH: fieldBuilder.buildEdmTypeField(
          'FilePath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link runBusinessLogic} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RUN_BUSINESS_LOGIC: fieldBuilder.buildEnumField(
          'RunBusinessLogic',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link targetStartDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'TargetStartDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link stagingRecordsToBeProcessedCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAGING_RECORDS_TO_BE_PROCESSED_COUNT: fieldBuilder.buildEdmTypeField(
          'StagingRecordsToBeProcessedCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link stagingStartDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAGING_START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'StagingStartDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link targetRecordsUpdatedCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_RECORDS_UPDATED_COUNT: fieldBuilder.buildEdmTypeField(
          'TargetRecordsUpdatedCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link numberOfRowsToSkip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_ROWS_TO_SKIP: fieldBuilder.buildEdmTypeField(
          'NumberOfRowsToSkip',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link targetStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_STATUS: fieldBuilder.buildEnumField(
          'TargetStatus',
          DmfBatchJobStatus,
          true
        ),
        /**
         * Static representation of the {@link sequenceInLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_IN_LEVEL: fieldBuilder.buildEdmTypeField(
          'SequenceInLevel',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link targetRecordsCreatedCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_RECORDS_CREATED_COUNT: fieldBuilder.buildEdmTypeField(
          'TargetRecordsCreatedCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link stagingEndDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAGING_END_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'StagingEndDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link parallelTaskCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARALLEL_TASK_COUNT: fieldBuilder.buildEdmTypeField(
          'ParallelTaskCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link executeTargetStep} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXECUTE_TARGET_STEP: fieldBuilder.buildEnumField(
          'ExecuteTargetStep',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link excelSheetName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCEL_SHEET_NAME: fieldBuilder.buildEdmTypeField(
          'ExcelSheetName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stagingRecordsCreatedCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAGING_RECORDS_CREATED_COUNT: fieldBuilder.buildEdmTypeField(
          'StagingRecordsCreatedCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link targetEndDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_END_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'TargetEndDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link ignoreError} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IGNORE_ERROR: fieldBuilder.buildEnumField('IgnoreError', NoYes, true),
        /**
         * Static representation of the {@link createErrorFile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_ERROR_FILE: fieldBuilder.buildEnumField(
          'CreateErrorFile',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link executionUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXECUTION_UNIT: fieldBuilder.buildEdmTypeField(
          'ExecutionUnit',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link firstRowIsHeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_ROW_IS_HEADER: fieldBuilder.buildEnumField(
          'FirstRowIsHeader',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sourceFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_FORMAT: fieldBuilder.buildEdmTypeField(
          'SourceFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SequenceNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link failLevelOnError} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAIL_LEVEL_ON_ERROR: fieldBuilder.buildEnumField(
          'FailLevelOnError',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DataManagementExecutionJobDetails)
      };
    }

    return this._schema;
  }
}
