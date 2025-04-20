/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DatabaseLogs } from './DatabaseLogs';
import { DatabaseLogsRequestBuilder } from './DatabaseLogsRequestBuilder';
import { DatabaseLogType } from './DatabaseLogType';
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
  EdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class DatabaseLogsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DatabaseLogs<DeSerializersT>, DeSerializersT>
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
  ): DatabaseLogsApi<DeSerializersT> {
    return new DatabaseLogsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DatabaseLogs;

  requestBuilder(): DatabaseLogsRequestBuilder<DeSerializersT> {
    return new DatabaseLogsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DatabaseLogs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DatabaseLogs<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DatabaseLogs<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof DatabaseLogs, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(DatabaseLogs, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DatabaseLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TABLE_REC_ID: OrderableEdmTypeField<
      DatabaseLogs<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LOG_REC_ID: OrderableEdmTypeField<
      DatabaseLogs<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TABLE_ID_NUMBER: OrderableEdmTypeField<
      DatabaseLogs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DatabaseLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOG_PARTITION: OrderableEdmTypeField<
      DatabaseLogs<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LOG_CREATED_BY: OrderableEdmTypeField<
      DatabaseLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOG_CREATED_TRANSACTION_ID: OrderableEdmTypeField<
      DatabaseLogs<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      DatabaseLogs<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LOG_DATA_AREA_ID: OrderableEdmTypeField<
      DatabaseLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_DATA: OrderableEdmTypeField<
      DatabaseLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOG_CREATED_DATE_TIME: OrderableEdmTypeField<
      DatabaseLogs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TABLE_NAME: OrderableEdmTypeField<
      DatabaseLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TABLE_REC_VERSION: OrderableEdmTypeField<
      DatabaseLogs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DATA: EdmTypeField<
      DatabaseLogs<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    LOG_TYPE: EnumField<
      DatabaseLogs<DeSerializers>,
      DeSerializersT,
      DatabaseLogType,
      true,
      true
    >;
    NEW_DATA: OrderableEdmTypeField<
      DatabaseLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USERNAME: OrderableEdmTypeField<
      DatabaseLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<DatabaseLogs<DeSerializers>>;
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
         * Static representation of the {@link tableRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_REC_ID: fieldBuilder.buildEdmTypeField(
          'TableRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link logRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG_REC_ID: fieldBuilder.buildEdmTypeField(
          'LogRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link tableIdNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_ID_NUMBER: fieldBuilder.buildEdmTypeField(
          'TableIdNumber',
          'Edm.Int32',
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
         * Static representation of the {@link logPartition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG_PARTITION: fieldBuilder.buildEdmTypeField(
          'LogPartition',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link logCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'LogCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link logCreatedTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG_CREATED_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'LogCreatedTransactionId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SequenceNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link logDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'LogDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formattedData} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_DATA: fieldBuilder.buildEdmTypeField(
          'FormattedData',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link logCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'LogCreatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link tableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'TableName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tableRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'TableRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link data} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA: fieldBuilder.buildEdmTypeField('Data', 'Edm.Binary', true),
        /**
         * Static representation of the {@link logType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG_TYPE: fieldBuilder.buildEnumField('LogType', DatabaseLogType, true),
        /**
         * Static representation of the {@link newData} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_DATA: fieldBuilder.buildEdmTypeField('NewData', 'Edm.String', true),
        /**
         * Static representation of the {@link username} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USERNAME: fieldBuilder.buildEdmTypeField(
          'Username',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DatabaseLogs)
      };
    }

    return this._schema;
  }
}
