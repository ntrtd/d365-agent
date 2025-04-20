/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DualWriteProjectConfigurations } from './DualWriteProjectConfigurations';
import { DualWriteProjectConfigurationsRequestBuilder } from './DualWriteProjectConfigurationsRequestBuilder';
import { DualWriteAsyncMode } from './DualWriteAsyncMode';
import { NoYes } from './NoYes';
import { DualWriteProjectStatus } from './DualWriteProjectStatus';
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
export class DualWriteProjectConfigurationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DualWriteProjectConfigurations<DeSerializersT>, DeSerializersT>
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
  ): DualWriteProjectConfigurationsApi<DeSerializersT> {
    return new DualWriteProjectConfigurationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DualWriteProjectConfigurations;

  requestBuilder(): DualWriteProjectConfigurationsRequestBuilder<DeSerializersT> {
    return new DualWriteProjectConfigurationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    DualWriteProjectConfigurations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DualWriteProjectConfigurations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DualWriteProjectConfigurations<DeSerializersT>,
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
    typeof DualWriteProjectConfigurations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DualWriteProjectConfigurations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROJECT_NAME: OrderableEdmTypeField<
      DualWriteProjectConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ASYNC_MODE: EnumField<
      DualWriteProjectConfigurations<DeSerializers>,
      DeSerializersT,
      DualWriteAsyncMode,
      true,
      true
    >;
    SYNC_EXECUTION_ID: OrderableEdmTypeField<
      DualWriteProjectConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_BATCH_LOOKUP: EnumField<
      DualWriteProjectConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SERVICE_BUS_CONNECTION_STRING: OrderableEdmTypeField<
      DualWriteProjectConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUAL_WRITE_ALERT_SETTINGS: OrderableEdmTypeField<
      DualWriteProjectConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_ENTITY_NAME: OrderableEdmTypeField<
      DualWriteProjectConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_CACHE: EnumField<
      DualWriteProjectConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTEGRATION_KEY: OrderableEdmTypeField<
      DualWriteProjectConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORAGE_ACCOUNT_SAS_CONNECTION_STRING: OrderableEdmTypeField<
      DualWriteProjectConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUERY_FILTER_EXPRESSION: OrderableEdmTypeField<
      DualWriteProjectConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEBUG_MODE: EnumField<
      DualWriteProjectConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISABLE_PERF_ENHANCEMENTS: EnumField<
      DualWriteProjectConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_FAILURE_RECONCILIATION: EnumField<
      DualWriteProjectConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FIELD_MAP: OrderableEdmTypeField<
      DualWriteProjectConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_LOOKUP_URLS: OrderableEdmTypeField<
      DualWriteProjectConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTITION_MAP: OrderableEdmTypeField<
      DualWriteProjectConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_ENVIRONMENT_URL: OrderableEdmTypeField<
      DualWriteProjectConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      DualWriteProjectConfigurations<DeSerializers>,
      DeSerializersT,
      DualWriteProjectStatus,
      true,
      true
    >;
    IS_DELETE: EnumField<
      DualWriteProjectConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTERNAL_ENTITY_NAME: OrderableEdmTypeField<
      DualWriteProjectConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUAL_WRITE_AUTO_PAUSE_THRESHOLD_SETTING: OrderableEdmTypeField<
      DualWriteProjectConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_LOGICAL_ENTITY_NAME: OrderableEdmTypeField<
      DualWriteProjectConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<DualWriteProjectConfigurations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link projectName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_NAME: fieldBuilder.buildEdmTypeField(
          'ProjectName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link asyncMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASYNC_MODE: fieldBuilder.buildEnumField(
          'AsyncMode',
          DualWriteAsyncMode,
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
         * Static representation of the {@link enableBatchLookup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_BATCH_LOOKUP: fieldBuilder.buildEnumField(
          'EnableBatchLookup',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link serviceBusConnectionString} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_BUS_CONNECTION_STRING: fieldBuilder.buildEdmTypeField(
          'ServiceBusConnectionString',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dualWriteAlertSettings} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUAL_WRITE_ALERT_SETTINGS: fieldBuilder.buildEdmTypeField(
          'DualWriteAlertSettings',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalEntityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_ENTITY_NAME: fieldBuilder.buildEdmTypeField(
          'ExternalEntityName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enableCache} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_CACHE: fieldBuilder.buildEnumField('EnableCache', NoYes, true),
        /**
         * Static representation of the {@link integrationKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEGRATION_KEY: fieldBuilder.buildEdmTypeField(
          'IntegrationKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link storageAccountSasConnectionString} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_ACCOUNT_SAS_CONNECTION_STRING: fieldBuilder.buildEdmTypeField(
          'StorageAccountSASConnectionString',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link queryFilterExpression} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUERY_FILTER_EXPRESSION: fieldBuilder.buildEdmTypeField(
          'QueryFilterExpression',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDebugMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEBUG_MODE: fieldBuilder.buildEnumField('IsDebugMode', NoYes, true),
        /**
         * Static representation of the {@link disablePerfEnhancements} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISABLE_PERF_ENHANCEMENTS: fieldBuilder.buildEnumField(
          'DisablePerfEnhancements',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enableFailureReconciliation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_FAILURE_RECONCILIATION: fieldBuilder.buildEnumField(
          'EnableFailureReconciliation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fieldMap} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_MAP: fieldBuilder.buildEdmTypeField(
          'FieldMap',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalLookupUrls} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_LOOKUP_URLS: fieldBuilder.buildEdmTypeField(
          'ExternalLookupUrls',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partitionMap} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTITION_MAP: fieldBuilder.buildEdmTypeField(
          'PartitionMap',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalEnvironmentUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_ENVIRONMENT_URL: fieldBuilder.buildEdmTypeField(
          'ExternalEnvironmentUrl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          DualWriteProjectStatus,
          true
        ),
        /**
         * Static representation of the {@link isDelete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELETE: fieldBuilder.buildEnumField('IsDelete', NoYes, true),
        /**
         * Static representation of the {@link internalEntityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_ENTITY_NAME: fieldBuilder.buildEdmTypeField(
          'InternalEntityName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dualWriteAutoPauseThresholdSetting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUAL_WRITE_AUTO_PAUSE_THRESHOLD_SETTING: fieldBuilder.buildEdmTypeField(
          'DualWriteAutoPauseThresholdSetting',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalLogicalEntityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_LOGICAL_ENTITY_NAME: fieldBuilder.buildEdmTypeField(
          'ExternalLogicalEntityName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DualWriteProjectConfigurations)
      };
    }

    return this._schema;
  }
}
