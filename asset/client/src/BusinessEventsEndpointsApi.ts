/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessEventsEndpoints } from './BusinessEventsEndpoints';
import { BusinessEventsEndpointsRequestBuilder } from './BusinessEventsEndpointsRequestBuilder';
import { BusinessEventsServiceBusSku } from './BusinessEventsServiceBusSku';
import { BusinessEventsEventHubSku } from './BusinessEventsEventHubSku';
import { BusinessEventsProducerConsumerType } from './BusinessEventsProducerConsumerType';
import { BusinessEventsEndpointType } from './BusinessEventsEndpointType';
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
export class BusinessEventsEndpointsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BusinessEventsEndpoints<DeSerializersT>, DeSerializersT>
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
  ): BusinessEventsEndpointsApi<DeSerializersT> {
    return new BusinessEventsEndpointsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BusinessEventsEndpoints;

  requestBuilder(): BusinessEventsEndpointsRequestBuilder<DeSerializersT> {
    return new BusinessEventsEndpointsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BusinessEventsEndpoints<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BusinessEventsEndpoints<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BusinessEventsEndpoints<DeSerializersT>,
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
    typeof BusinessEventsEndpoints,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessEventsEndpoints,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      BusinessEventsEndpoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_BUS_TOPIC_SKU: EnumField<
      BusinessEventsEndpoints<DeSerializers>,
      DeSerializersT,
      BusinessEventsServiceBusSku,
      true,
      true
    >;
    EVENT_HUB_NAME: OrderableEdmTypeField<
      BusinessEventsEndpoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BusinessEventsEndpoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AZURE_APP_ID: OrderableEdmTypeField<
      BusinessEventsEndpoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_BUS_QUEUE_SKU: EnumField<
      BusinessEventsEndpoints<DeSerializers>,
      DeSerializersT,
      BusinessEventsServiceBusSku,
      true,
      true
    >;
    EVENT_HUB_SKU: EnumField<
      BusinessEventsEndpoints<DeSerializers>,
      DeSerializersT,
      BusinessEventsEventHubSku,
      true,
      true
    >;
    KEY_VAULT_SECRET_NAME: OrderableEdmTypeField<
      BusinessEventsEndpoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DECRYPTED_AZURE_APP_SECRET: OrderableEdmTypeField<
      BusinessEventsEndpoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KEY_VAULT_DNS_NAME: OrderableEdmTypeField<
      BusinessEventsEndpoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EVENT_GRID_ENDPOINT_URL: OrderableEdmTypeField<
      BusinessEventsEndpoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_BUS_TOPIC_NAME: OrderableEdmTypeField<
      BusinessEventsEndpoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSTANCE_RELATION_TYPE: OrderableEdmTypeField<
      BusinessEventsEndpoints<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRODUCER_CONSUMER_TYPE: EnumField<
      BusinessEventsEndpoints<DeSerializers>,
      DeSerializersT,
      BusinessEventsProducerConsumerType,
      true,
      true
    >;
    TYPE: EnumField<
      BusinessEventsEndpoints<DeSerializers>,
      DeSerializersT,
      BusinessEventsEndpointType,
      true,
      true
    >;
    AZURE_BLOB_CONTAINER_NAME: OrderableEdmTypeField<
      BusinessEventsEndpoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_BUS_QUEUE_NAME: OrderableEdmTypeField<
      BusinessEventsEndpoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BusinessEventsEndpoints<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link serviceBusTopicSku} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_BUS_TOPIC_SKU: fieldBuilder.buildEnumField(
          'ServiceBusTopicSKU',
          BusinessEventsServiceBusSku,
          true
        ),
        /**
         * Static representation of the {@link eventHubName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_HUB_NAME: fieldBuilder.buildEdmTypeField(
          'EventHubName',
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
         * Static representation of the {@link azureAppId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AZURE_APP_ID: fieldBuilder.buildEdmTypeField(
          'AzureAppId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceBusQueueSku} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_BUS_QUEUE_SKU: fieldBuilder.buildEnumField(
          'ServiceBusQueueSKU',
          BusinessEventsServiceBusSku,
          true
        ),
        /**
         * Static representation of the {@link eventHubSku} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_HUB_SKU: fieldBuilder.buildEnumField(
          'EventHubSKU',
          BusinessEventsEventHubSku,
          true
        ),
        /**
         * Static representation of the {@link keyVaultSecretName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY_VAULT_SECRET_NAME: fieldBuilder.buildEdmTypeField(
          'KeyVaultSecretName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link decryptedAzureAppSecret} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECRYPTED_AZURE_APP_SECRET: fieldBuilder.buildEdmTypeField(
          'DecryptedAzureAppSecret',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link keyVaultDnsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY_VAULT_DNS_NAME: fieldBuilder.buildEdmTypeField(
          'KeyVaultDnsName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eventGridEndpointUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_GRID_ENDPOINT_URL: fieldBuilder.buildEdmTypeField(
          'EventGridEndpointURL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceBusTopicName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_BUS_TOPIC_NAME: fieldBuilder.buildEdmTypeField(
          'ServiceBusTopicName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link instanceRelationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTANCE_RELATION_TYPE: fieldBuilder.buildEdmTypeField(
          'InstanceRelationType',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link producerConsumerType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCER_CONSUMER_TYPE: fieldBuilder.buildEnumField(
          'ProducerConsumerType',
          BusinessEventsProducerConsumerType,
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          BusinessEventsEndpointType,
          true
        ),
        /**
         * Static representation of the {@link azureBlobContainerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AZURE_BLOB_CONTAINER_NAME: fieldBuilder.buildEdmTypeField(
          'AzureBlobContainerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceBusQueueName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_BUS_QUEUE_NAME: fieldBuilder.buildEdmTypeField(
          'ServiceBusQueueName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessEventsEndpoints)
      };
    }

    return this._schema;
  }
}
