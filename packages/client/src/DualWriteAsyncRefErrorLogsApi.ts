/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DualWriteAsyncRefErrorLogs } from './DualWriteAsyncRefErrorLogs';
import { DualWriteAsyncRefErrorLogsRequestBuilder } from './DualWriteAsyncRefErrorLogsRequestBuilder';
import { NoYes } from './NoYes';
import { DualWriteSynchErrorType } from './DualWriteSynchErrorType';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class DualWriteAsyncRefErrorLogsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DualWriteAsyncRefErrorLogs<DeSerializersT>, DeSerializersT>
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
  ): DualWriteAsyncRefErrorLogsApi<DeSerializersT> {
    return new DualWriteAsyncRefErrorLogsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DualWriteAsyncRefErrorLogs;

  requestBuilder(): DualWriteAsyncRefErrorLogsRequestBuilder<DeSerializersT> {
    return new DualWriteAsyncRefErrorLogsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DualWriteAsyncRefErrorLogs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DualWriteAsyncRefErrorLogs<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DualWriteAsyncRefErrorLogs<DeSerializersT>,
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
    typeof DualWriteAsyncRefErrorLogs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DualWriteAsyncRefErrorLogs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DualWriteAsyncRefErrorLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      DualWriteAsyncRefErrorLogs<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MARK_FOR_RETRY: EnumField<
      DualWriteAsyncRefErrorLogs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYNC_EXECUTION_ID: OrderableEdmTypeField<
      DualWriteAsyncRefErrorLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYNCH_ERROR_TYPE: EnumField<
      DualWriteAsyncRefErrorLogs<DeSerializers>,
      DeSerializersT,
      DualWriteSynchErrorType,
      true,
      true
    >;
    ENTITY_REF_REC_ID: OrderableEdmTypeField<
      DualWriteAsyncRefErrorLogs<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CONCURRENCY_TOKEN: OrderableEdmTypeField<
      DualWriteAsyncRefErrorLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DV_ERROR_LOG_REFERENCE: OrderableEdmTypeField<
      DualWriteAsyncRefErrorLogs<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    SETUP_SYNC_EXECUTION_ID: OrderableEdmTypeField<
      DualWriteAsyncRefErrorLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOG_CREATION_TIMESTAMP: OrderableEdmTypeField<
      DualWriteAsyncRefErrorLogs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_INSERT: EnumField<
      DualWriteAsyncRefErrorLogs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    UNIQUE_ENTITY_NAME: OrderableEdmTypeField<
      DualWriteAsyncRefErrorLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<DualWriteAsyncRefErrorLogs<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link markForRetry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARK_FOR_RETRY: fieldBuilder.buildEnumField(
          'MarkForRetry',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link syncExecutionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYNC_EXECUTION_ID: fieldBuilder.buildEdmTypeField(
          'SyncExecutionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link synchErrorType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYNCH_ERROR_TYPE: fieldBuilder.buildEnumField(
          'SynchErrorType',
          DualWriteSynchErrorType,
          true
        ),
        /**
         * Static representation of the {@link entityRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'EntityRefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link concurrencyToken} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCURRENCY_TOKEN: fieldBuilder.buildEdmTypeField(
          'ConcurrencyToken',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dvErrorLogReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DV_ERROR_LOG_REFERENCE: fieldBuilder.buildEdmTypeField(
          'DVErrorLogReference',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link setupSyncExecutionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETUP_SYNC_EXECUTION_ID: fieldBuilder.buildEdmTypeField(
          'SetupSyncExecutionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link logCreationTimestamp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG_CREATION_TIMESTAMP: fieldBuilder.buildEdmTypeField(
          'LogCreationTimestamp',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isInsert} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INSERT: fieldBuilder.buildEnumField('IsInsert', NoYes, true),
        /**
         * Static representation of the {@link uniqueEntityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIQUE_ENTITY_NAME: fieldBuilder.buildEdmTypeField(
          'UniqueEntityName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DualWriteAsyncRefErrorLogs)
      };
    }

    return this._schema;
  }
}
