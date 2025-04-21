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
import { TradeD365SalesFeatureParameters } from './TradeD365SalesFeatureParameters';

/**
 * Request builder class for operations supported on the {@link TradeD365SalesFeatureParameters} entity.
 */
export class TradeD365SalesFeatureParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TradeD365SalesFeatureParameters<T>, T> {
  /**
   * Returns a request builder for querying all `TradeD365SalesFeatureParameters` entities.
   * @returns A request builder for creating requests to retrieve all `TradeD365SalesFeatureParameters` entities.
   */
  getAll(): GetAllRequestBuilder<TradeD365SalesFeatureParameters<T>, T> {
    return new GetAllRequestBuilder<TradeD365SalesFeatureParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TradeD365SalesFeatureParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TradeD365SalesFeatureParameters`.
   */
  create(
    entity: TradeD365SalesFeatureParameters<T>
  ): CreateRequestBuilder<TradeD365SalesFeatureParameters<T>, T> {
    return new CreateRequestBuilder<TradeD365SalesFeatureParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TradeD365SalesFeatureParameters` entity based on its keys.
   * @param name Key property. See {@link TradeD365SalesFeatureParameters.name}.
   * @returns A request builder for creating requests to retrieve one `TradeD365SalesFeatureParameters` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TradeD365SalesFeatureParameters<T>, T> {
    return new GetByKeyRequestBuilder<TradeD365SalesFeatureParameters<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TradeD365SalesFeatureParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TradeD365SalesFeatureParameters`.
   */
  update(
    entity: TradeD365SalesFeatureParameters<T>
  ): UpdateRequestBuilder<TradeD365SalesFeatureParameters<T>, T> {
    return new UpdateRequestBuilder<TradeD365SalesFeatureParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TradeD365SalesFeatureParameters`.
   * @param name Key property. See {@link TradeD365SalesFeatureParameters.name}.
   * @returns A request builder for creating requests that delete an entity of type `TradeD365SalesFeatureParameters`.
   */
  delete(
    name: string
  ): DeleteRequestBuilder<TradeD365SalesFeatureParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TradeD365SalesFeatureParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TradeD365SalesFeatureParameters` by taking the entity as a parameter.
   */
  delete(
    entity: TradeD365SalesFeatureParameters<T>
  ): DeleteRequestBuilder<TradeD365SalesFeatureParameters<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<TradeD365SalesFeatureParameters<T>, T> {
    return new DeleteRequestBuilder<TradeD365SalesFeatureParameters<T>, T>(
      this.entityApi,
      nameOrEntity instanceof TradeD365SalesFeatureParameters
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
