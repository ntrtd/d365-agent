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
import { SystemGlobalConfigurations } from './SystemGlobalConfigurations';

/**
 * Request builder class for operations supported on the {@link SystemGlobalConfigurations} entity.
 */
export class SystemGlobalConfigurationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SystemGlobalConfigurations<T>, T> {
  /**
   * Returns a request builder for querying all `SystemGlobalConfigurations` entities.
   * @returns A request builder for creating requests to retrieve all `SystemGlobalConfigurations` entities.
   */
  getAll(): GetAllRequestBuilder<SystemGlobalConfigurations<T>, T> {
    return new GetAllRequestBuilder<SystemGlobalConfigurations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SystemGlobalConfigurations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SystemGlobalConfigurations`.
   */
  create(
    entity: SystemGlobalConfigurations<T>
  ): CreateRequestBuilder<SystemGlobalConfigurations<T>, T> {
    return new CreateRequestBuilder<SystemGlobalConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SystemGlobalConfigurations` entity based on its keys.
   * @param aosInstanceName Key property. See {@link SystemGlobalConfigurations.aosInstanceName}.
   * @param name Key property. See {@link SystemGlobalConfigurations.name}.
   * @returns A request builder for creating requests to retrieve one `SystemGlobalConfigurations` entity based on its keys.
   */
  getByKey(
    aosInstanceName: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SystemGlobalConfigurations<T>, T> {
    return new GetByKeyRequestBuilder<SystemGlobalConfigurations<T>, T>(
      this.entityApi,
      {
        AOSInstanceName: aosInstanceName,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SystemGlobalConfigurations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SystemGlobalConfigurations`.
   */
  update(
    entity: SystemGlobalConfigurations<T>
  ): UpdateRequestBuilder<SystemGlobalConfigurations<T>, T> {
    return new UpdateRequestBuilder<SystemGlobalConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SystemGlobalConfigurations`.
   * @param aosInstanceName Key property. See {@link SystemGlobalConfigurations.aosInstanceName}.
   * @param name Key property. See {@link SystemGlobalConfigurations.name}.
   * @returns A request builder for creating requests that delete an entity of type `SystemGlobalConfigurations`.
   */
  delete(
    aosInstanceName: string,
    name: string
  ): DeleteRequestBuilder<SystemGlobalConfigurations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SystemGlobalConfigurations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SystemGlobalConfigurations` by taking the entity as a parameter.
   */
  delete(
    entity: SystemGlobalConfigurations<T>
  ): DeleteRequestBuilder<SystemGlobalConfigurations<T>, T>;
  delete(
    aosInstanceNameOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<SystemGlobalConfigurations<T>, T> {
    return new DeleteRequestBuilder<SystemGlobalConfigurations<T>, T>(
      this.entityApi,
      aosInstanceNameOrEntity instanceof SystemGlobalConfigurations
        ? aosInstanceNameOrEntity
        : {
            AOSInstanceName: aosInstanceNameOrEntity!,
            Name: name!
          }
    );
  }
}
