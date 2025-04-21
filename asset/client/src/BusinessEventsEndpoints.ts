/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { BusinessEventsEndpointsApi } from './BusinessEventsEndpointsApi';
import { BusinessEventsServiceBusSku } from './BusinessEventsServiceBusSku';
import { BusinessEventsEventHubSku } from './BusinessEventsEventHubSku';
import { BusinessEventsProducerConsumerType } from './BusinessEventsProducerConsumerType';
import { BusinessEventsEndpointType } from './BusinessEventsEndpointType';

/**
 * This class represents the entity "BusinessEventsEndpoints" of service "d365_metadata".
 */
export class BusinessEventsEndpoints<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessEventsEndpointsType<T>
{
  /**
   * Technical entity name for BusinessEventsEndpoints.
   */
  static override _entityName = 'BusinessEventsEndpoints';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessEventsEndpoints entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Bus Topic Sku.
   * @nullable
   */
  declare serviceBusTopicSku?: BusinessEventsServiceBusSku | null;
  /**
   * Event Hub Name.
   * @nullable
   */
  declare eventHubName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Azure App Id.
   * @nullable
   */
  declare azureAppId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Bus Queue Sku.
   * @nullable
   */
  declare serviceBusQueueSku?: BusinessEventsServiceBusSku | null;
  /**
   * Event Hub Sku.
   * @nullable
   */
  declare eventHubSku?: BusinessEventsEventHubSku | null;
  /**
   * Key Vault Secret Name.
   * @nullable
   */
  declare keyVaultSecretName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Decrypted Azure App Secret.
   * @nullable
   */
  declare decryptedAzureAppSecret?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Key Vault Dns Name.
   * @nullable
   */
  declare keyVaultDnsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Event Grid Endpoint Url.
   * @nullable
   */
  declare eventGridEndpointUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Bus Topic Name.
   * @nullable
   */
  declare serviceBusTopicName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instance Relation Type.
   */
  declare instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Producer Consumer Type.
   * @nullable
   */
  declare producerConsumerType?: BusinessEventsProducerConsumerType | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: BusinessEventsEndpointType | null;
  /**
   * Azure Blob Container Name.
   * @nullable
   */
  declare azureBlobContainerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Bus Queue Name.
   * @nullable
   */
  declare serviceBusQueueName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BusinessEventsEndpointsApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessEventsEndpointsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  serviceBusTopicSku?: BusinessEventsServiceBusSku | null;
  eventHubName?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  azureAppId?: DeserializedType<T, 'Edm.String'> | null;
  serviceBusQueueSku?: BusinessEventsServiceBusSku | null;
  eventHubSku?: BusinessEventsEventHubSku | null;
  keyVaultSecretName?: DeserializedType<T, 'Edm.String'> | null;
  decryptedAzureAppSecret?: DeserializedType<T, 'Edm.String'> | null;
  keyVaultDnsName?: DeserializedType<T, 'Edm.String'> | null;
  eventGridEndpointUrl?: DeserializedType<T, 'Edm.String'> | null;
  serviceBusTopicName?: DeserializedType<T, 'Edm.String'> | null;
  instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  producerConsumerType?: BusinessEventsProducerConsumerType | null;
  type?: BusinessEventsEndpointType | null;
  azureBlobContainerName?: DeserializedType<T, 'Edm.String'> | null;
  serviceBusQueueName?: DeserializedType<T, 'Edm.String'> | null;
}
