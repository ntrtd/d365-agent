/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { ServerConfigurations } from './ServerConfigurations';
import { NoYes } from './NoYes';

/**
 * Request builder class for operations supported on the {@link ServerConfigurations} entity.
 */
export class ServerConfigurationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServerConfigurations<T>, T> {
  /**
   * Returns a request builder for querying all `ServerConfigurations` entities.
   * @returns A request builder for creating requests to retrieve all `ServerConfigurations` entities.
   */
  getAll(): GetAllRequestBuilder<ServerConfigurations<T>, T> {
    return new GetAllRequestBuilder<ServerConfigurations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ServerConfigurations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServerConfigurations`.
   */
  create(
    entity: ServerConfigurations<T>
  ): CreateRequestBuilder<ServerConfigurations<T>, T> {
    return new CreateRequestBuilder<ServerConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ServerConfigurations` entity based on its keys.
   * @param aosInstanceName Key property. See {@link ServerConfigurations.aosInstanceName}.
   * @param loadBalancer Key property. See {@link ServerConfigurations.loadBalancer}.
   * @param clusterName Key property. See {@link ServerConfigurations.clusterName}.
   * @returns A request builder for creating requests to retrieve one `ServerConfigurations` entity based on its keys.
   */
  getByKey(
    aosInstanceName: DeserializedType<T, 'Edm.String'>,
    loadBalancer: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.NoYes'>,
    clusterName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServerConfigurations<T>, T> {
    return new GetByKeyRequestBuilder<ServerConfigurations<T>, T>(
      this.entityApi,
      {
        AOSInstanceName: aosInstanceName,
        LoadBalancer: loadBalancer,
        ClusterName: clusterName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ServerConfigurations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServerConfigurations`.
   */
  update(
    entity: ServerConfigurations<T>
  ): UpdateRequestBuilder<ServerConfigurations<T>, T> {
    return new UpdateRequestBuilder<ServerConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServerConfigurations`.
   * @param aosInstanceName Key property. See {@link ServerConfigurations.aosInstanceName}.
   * @param loadBalancer Key property. See {@link ServerConfigurations.loadBalancer}.
   * @param clusterName Key property. See {@link ServerConfigurations.clusterName}.
   * @returns A request builder for creating requests that delete an entity of type `ServerConfigurations`.
   */
  delete(
    aosInstanceName: string,
    loadBalancer: NoYes,
    clusterName: string
  ): DeleteRequestBuilder<ServerConfigurations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServerConfigurations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServerConfigurations` by taking the entity as a parameter.
   */
  delete(
    entity: ServerConfigurations<T>
  ): DeleteRequestBuilder<ServerConfigurations<T>, T>;
  delete(
    aosInstanceNameOrEntity: any,
    loadBalancer?: NoYes,
    clusterName?: string
  ): DeleteRequestBuilder<ServerConfigurations<T>, T> {
    return new DeleteRequestBuilder<ServerConfigurations<T>, T>(
      this.entityApi,
      aosInstanceNameOrEntity instanceof ServerConfigurations
        ? aosInstanceNameOrEntity
        : {
            AOSInstanceName: aosInstanceNameOrEntity!,
            LoadBalancer: loadBalancer!,
            ClusterName: clusterName!
          }
    );
  }
}
