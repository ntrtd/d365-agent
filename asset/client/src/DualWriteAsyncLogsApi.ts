/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DualWriteAsyncLogs } from './DualWriteAsyncLogs';
import { DualWriteAsyncLogsRequestBuilder } from './DualWriteAsyncLogsRequestBuilder';
import { NoYes } from './NoYes';
import { DualWriteEnqueueReasonCode } from './DualWriteEnqueueReasonCode';
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
export class DualWriteAsyncLogsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DualWriteAsyncLogs<DeSerializersT>, DeSerializersT>
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
  ): DualWriteAsyncLogsApi<DeSerializersT> {
    return new DualWriteAsyncLogsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DualWriteAsyncLogs;

  requestBuilder(): DualWriteAsyncLogsRequestBuilder<DeSerializersT> {
    return new DualWriteAsyncLogsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DualWriteAsyncLogs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DualWriteAsyncLogs<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DualWriteAsyncLogs<DeSerializersT>,
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
    typeof DualWriteAsyncLogs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DualWriteAsyncLogs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DualWriteAsyncLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROW_ID: OrderableEdmTypeField<
      DualWriteAsyncLogs<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYNC_EXECUTION_ID: OrderableEdmTypeField<
      DualWriteAsyncLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONCURRENCY_TOKEN: OrderableEdmTypeField<
      DualWriteAsyncLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INSERT: EnumField<
      DualWriteAsyncLogs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENQUEUE_REASON_CODE: EnumField<
      DualWriteAsyncLogs<DeSerializers>,
      DeSerializersT,
      DualWriteEnqueueReasonCode,
      true,
      true
    >;
    UNIQUE_ENTITY_NAME: OrderableEdmTypeField<
      DualWriteAsyncLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<DualWriteAsyncLogs<DeSerializers>>;
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
         * Static representation of the {@link rowId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROW_ID: fieldBuilder.buildEdmTypeField('RowId', 'Edm.Int64', false),
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
         * Static representation of the {@link concurrencyToken} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCURRENCY_TOKEN: fieldBuilder.buildEdmTypeField(
          'ConcurrencyToken',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isInsert} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INSERT: fieldBuilder.buildEnumField('IsInsert', NoYes, true),
        /**
         * Static representation of the {@link enqueueReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENQUEUE_REASON_CODE: fieldBuilder.buildEnumField(
          'EnqueueReasonCode',
          DualWriteEnqueueReasonCode,
          true
        ),
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
        ALL_FIELDS: new AllFields('*', DualWriteAsyncLogs)
      };
    }

    return this._schema;
  }
}
