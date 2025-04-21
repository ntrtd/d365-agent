/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BatchJobs } from './BatchJobs';
import { BatchJobsRequestBuilder } from './BatchJobsRequestBuilder';
import { BatchLogLevel } from './BatchLogLevel';
import { BatchStatus } from './BatchStatus';
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
  EdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class BatchJobsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BatchJobs<DeSerializersT>, DeSerializersT>
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
  ): BatchJobsApi<DeSerializersT> {
    return new BatchJobsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BatchJobs;

  requestBuilder(): BatchJobsRequestBuilder<DeSerializersT> {
    return new BatchJobsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BatchJobs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BatchJobs<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BatchJobs<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BatchJobs, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BatchJobs, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BATCH_JOB_REC_ID: OrderableEdmTypeField<
      BatchJobs<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RUNTIME_JOB: OrderableEdmTypeField<
      BatchJobs<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    JOB_DESCRIPTION: OrderableEdmTypeField<
      BatchJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE_TIME: OrderableEdmTypeField<
      BatchJobs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXECUTING_BY: OrderableEdmTypeField<
      BatchJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_ACCOUNTS: OrderableEdmTypeField<
      BatchJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAVE_JOB_TO_HISTORY: EnumField<
      BatchJobs<DeSerializers>,
      DeSerializersT,
      BatchLogLevel,
      true,
      true
    >;
    END_DATE_TIME: OrderableEdmTypeField<
      BatchJobs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PARTITION_KEY: OrderableEdmTypeField<
      BatchJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_TIME: OrderableEdmTypeField<
      BatchJobs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FINISHING: OrderableEdmTypeField<
      BatchJobs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ORIG_START_DATE_TIME: OrderableEdmTypeField<
      BatchJobs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      BatchJobs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CANCELED_BY: OrderableEdmTypeField<
      BatchJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      BatchJobs<DeSerializers>,
      DeSerializersT,
      BatchStatus,
      true,
      true
    >;
    RECURRENCE: EdmTypeField<
      BatchJobs<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BatchJobs<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link batchJobRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_JOB_REC_ID: fieldBuilder.buildEdmTypeField(
          'BatchJobRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link runtimeJob} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RUNTIME_JOB: fieldBuilder.buildEdmTypeField(
          'RuntimeJob',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link jobDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'JobDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'StartDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link executingBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXECUTING_BY: fieldBuilder.buildEdmTypeField(
          'ExecutingBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_ACCOUNTS: fieldBuilder.buildEdmTypeField(
          'CompanyAccounts',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link saveJobToHistory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAVE_JOB_TO_HISTORY: fieldBuilder.buildEnumField(
          'SaveJobToHistory',
          BatchLogLevel,
          true
        ),
        /**
         * Static representation of the {@link endDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'EndDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link partitionKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTITION_KEY: fieldBuilder.buildEdmTypeField(
          'PartitionKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_TIME: fieldBuilder.buildEdmTypeField(
          'StartTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link finishing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINISHING: fieldBuilder.buildEdmTypeField(
          'Finishing',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link origStartDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'OrigStartDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link canceledBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELED_BY: fieldBuilder.buildEdmTypeField(
          'CanceledBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', BatchStatus, true),
        /**
         * Static representation of the {@link recurrence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECURRENCE: fieldBuilder.buildEdmTypeField(
          'Recurrence',
          'Edm.Binary',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BatchJobs)
      };
    }

    return this._schema;
  }
}
