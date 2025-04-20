/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServerConfigurations } from './ServerConfigurations';
import { ServerConfigurationsRequestBuilder } from './ServerConfigurationsRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class ServerConfigurationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ServerConfigurations<DeSerializersT>, DeSerializersT>
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
  ): ServerConfigurationsApi<DeSerializersT> {
    return new ServerConfigurationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ServerConfigurations;

  requestBuilder(): ServerConfigurationsRequestBuilder<DeSerializersT> {
    return new ServerConfigurationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ServerConfigurations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ServerConfigurations<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ServerConfigurations<DeSerializersT>,
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
    typeof ServerConfigurations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ServerConfigurations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    AOS_INSTANCE_NAME: OrderableEdmTypeField<
      ServerConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOAD_BALANCER: EnumField<
      ServerConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLUSTER_NAME: OrderableEdmTypeField<
      ServerConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AZURE_DEPLOYMENT_ID: OrderableEdmTypeField<
      ServerConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_ALIVE: OrderableEdmTypeField<
      ServerConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_ROLE_IDLE: EnumField<
      ServerConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_CONCURRENT_SESSIONS: OrderableEdmTypeField<
      ServerConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_BATCH_SERVER: EnumField<
      ServerConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SERVER_GUID: OrderableEdmTypeField<
      ServerConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ServerConfigurations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link aosInstanceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AOS_INSTANCE_NAME: fieldBuilder.buildEdmTypeField(
          'AOSInstanceName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link loadBalancer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_BALANCER: fieldBuilder.buildEnumField('LoadBalancer', NoYes, true),
        /**
         * Static representation of the {@link clusterName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLUSTER_NAME: fieldBuilder.buildEdmTypeField(
          'ClusterName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link azureDeploymentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AZURE_DEPLOYMENT_ID: fieldBuilder.buildEdmTypeField(
          'AzureDeploymentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeAlive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_ALIVE: fieldBuilder.buildEdmTypeField(
          'TimeAlive',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isRoleIdle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ROLE_IDLE: fieldBuilder.buildEnumField('isRoleIdle', NoYes, true),
        /**
         * Static representation of the {@link maxConcurrentSessions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_CONCURRENT_SESSIONS: fieldBuilder.buildEdmTypeField(
          'MaxConcurrentSessions',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isBatchServer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BATCH_SERVER: fieldBuilder.buildEnumField(
          'IsBatchServer',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link serverGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVER_GUID: fieldBuilder.buildEdmTypeField(
          'ServerGUID',
          'Edm.Guid',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ServerConfigurations)
      };
    }

    return this._schema;
  }
}
