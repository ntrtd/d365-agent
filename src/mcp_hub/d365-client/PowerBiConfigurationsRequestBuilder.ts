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
import { PowerBiConfigurations } from './PowerBiConfigurations';

/**
 * Request builder class for operations supported on the {@link PowerBiConfigurations} entity.
 */
export class PowerBiConfigurationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PowerBiConfigurations<T>, T> {
  /**
   * Returns a request builder for querying all `PowerBiConfigurations` entities.
   * @returns A request builder for creating requests to retrieve all `PowerBiConfigurations` entities.
   */
  getAll(): GetAllRequestBuilder<PowerBiConfigurations<T>, T> {
    return new GetAllRequestBuilder<PowerBiConfigurations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PowerBiConfigurations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PowerBiConfigurations`.
   */
  create(
    entity: PowerBiConfigurations<T>
  ): CreateRequestBuilder<PowerBiConfigurations<T>, T> {
    return new CreateRequestBuilder<PowerBiConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PowerBiConfigurations` entity based on its keys.
   * @param clientId Key property. See {@link PowerBiConfigurations.clientId}.
   * @returns A request builder for creating requests to retrieve one `PowerBiConfigurations` entity based on its keys.
   */
  getByKey(
    clientId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PowerBiConfigurations<T>, T> {
    return new GetByKeyRequestBuilder<PowerBiConfigurations<T>, T>(
      this.entityApi,
      { ClientID: clientId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PowerBiConfigurations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PowerBiConfigurations`.
   */
  update(
    entity: PowerBiConfigurations<T>
  ): UpdateRequestBuilder<PowerBiConfigurations<T>, T> {
    return new UpdateRequestBuilder<PowerBiConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PowerBiConfigurations`.
   * @param clientId Key property. See {@link PowerBiConfigurations.clientId}.
   * @returns A request builder for creating requests that delete an entity of type `PowerBiConfigurations`.
   */
  delete(clientId: string): DeleteRequestBuilder<PowerBiConfigurations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PowerBiConfigurations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PowerBiConfigurations` by taking the entity as a parameter.
   */
  delete(
    entity: PowerBiConfigurations<T>
  ): DeleteRequestBuilder<PowerBiConfigurations<T>, T>;
  delete(
    clientIdOrEntity: any
  ): DeleteRequestBuilder<PowerBiConfigurations<T>, T> {
    return new DeleteRequestBuilder<PowerBiConfigurations<T>, T>(
      this.entityApi,
      clientIdOrEntity instanceof PowerBiConfigurations
        ? clientIdOrEntity
        : { ClientID: clientIdOrEntity! }
    );
  }
}
