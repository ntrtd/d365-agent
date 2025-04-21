/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTaskManagementReports } from './RetailTaskManagementReports';
import { RetailTaskManagementReportsRequestBuilder } from './RetailTaskManagementReportsRequestBuilder';
import { BusinessProcessHeaderStatus } from './BusinessProcessHeaderStatus';
import { BusinessProcessTaskStatus } from './BusinessProcessTaskStatus';
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
export class RetailTaskManagementReportsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailTaskManagementReports<DeSerializersT>, DeSerializersT>
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
  ): RetailTaskManagementReportsApi<DeSerializersT> {
    return new RetailTaskManagementReportsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTaskManagementReports;

  requestBuilder(): RetailTaskManagementReportsRequestBuilder<DeSerializersT> {
    return new RetailTaskManagementReportsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailTaskManagementReports<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTaskManagementReports<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTaskManagementReports<DeSerializersT>,
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
    typeof RetailTaskManagementReports,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTaskManagementReports,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROCESS_PROCESS_ID: OrderableEdmTypeField<
      RetailTaskManagementReports<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    TASK_ID: OrderableEdmTypeField<
      RetailTaskManagementReports<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    STORE_NUMBER: OrderableEdmTypeField<
      RetailTaskManagementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESS_NAME: OrderableEdmTypeField<
      RetailTaskManagementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESS_TARGET_DATE: OrderableEdmTypeField<
      RetailTaskManagementReports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROCESS_STATUS: EnumField<
      RetailTaskManagementReports<DeSerializers>,
      DeSerializersT,
      BusinessProcessHeaderStatus,
      true,
      true
    >;
    ASSIGNED_WORKER: OrderableEdmTypeField<
      RetailTaskManagementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPLETION_DATE_TIME: OrderableEdmTypeField<
      RetailTaskManagementReports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RESOLVED_BY: OrderableEdmTypeField<
      RetailTaskManagementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      RetailTaskManagementReports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROCESS_WORKER: OrderableEdmTypeField<
      RetailTaskManagementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailTaskManagementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      RetailTaskManagementReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      RetailTaskManagementReports<DeSerializers>,
      DeSerializersT,
      BusinessProcessTaskStatus,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailTaskManagementReports<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link processProcessId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_PROCESS_ID: fieldBuilder.buildEdmTypeField(
          'Process_ProcessId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link taskId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_ID: fieldBuilder.buildEdmTypeField('TaskId', 'Edm.Guid', false),
        /**
         * Static representation of the {@link storeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_NUMBER: fieldBuilder.buildEdmTypeField(
          'StoreNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link processName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_NAME: fieldBuilder.buildEdmTypeField(
          'Process_Name',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link processTargetDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_TARGET_DATE: fieldBuilder.buildEdmTypeField(
          'Process_TargetDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link processStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_STATUS: fieldBuilder.buildEnumField(
          'Process_Status',
          BusinessProcessHeaderStatus,
          true
        ),
        /**
         * Static representation of the {@link assignedWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNED_WORKER: fieldBuilder.buildEdmTypeField(
          'AssignedWorker',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link completionDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETION_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'CompletionDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link resolvedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOLVED_BY: fieldBuilder.buildEdmTypeField(
          'ResolvedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link processWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_WORKER: fieldBuilder.buildEdmTypeField(
          'Process_Worker',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          BusinessProcessTaskStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTaskManagementReports)
      };
    }

    return this._schema;
  }
}
