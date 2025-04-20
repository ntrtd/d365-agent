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
import { TradeD365SalesFeatureManagementStates } from './TradeD365SalesFeatureManagementStates';

/**
 * Request builder class for operations supported on the {@link TradeD365SalesFeatureManagementStates} entity.
 */
export class TradeD365SalesFeatureManagementStatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TradeD365SalesFeatureManagementStates<T>, T> {
  /**
   * Returns a request builder for querying all `TradeD365SalesFeatureManagementStates` entities.
   * @returns A request builder for creating requests to retrieve all `TradeD365SalesFeatureManagementStates` entities.
   */
  getAll(): GetAllRequestBuilder<TradeD365SalesFeatureManagementStates<T>, T> {
    return new GetAllRequestBuilder<
      TradeD365SalesFeatureManagementStates<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TradeD365SalesFeatureManagementStates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TradeD365SalesFeatureManagementStates`.
   */
  create(
    entity: TradeD365SalesFeatureManagementStates<T>
  ): CreateRequestBuilder<TradeD365SalesFeatureManagementStates<T>, T> {
    return new CreateRequestBuilder<
      TradeD365SalesFeatureManagementStates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TradeD365SalesFeatureManagementStates` entity based on its keys.
   * @param name Key property. See {@link TradeD365SalesFeatureManagementStates.name}.
   * @returns A request builder for creating requests to retrieve one `TradeD365SalesFeatureManagementStates` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TradeD365SalesFeatureManagementStates<T>, T> {
    return new GetByKeyRequestBuilder<
      TradeD365SalesFeatureManagementStates<T>,
      T
    >(this.entityApi, { Name: name });
  }

  /**
   * Returns a request builder for updating an entity of type `TradeD365SalesFeatureManagementStates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TradeD365SalesFeatureManagementStates`.
   */
  update(
    entity: TradeD365SalesFeatureManagementStates<T>
  ): UpdateRequestBuilder<TradeD365SalesFeatureManagementStates<T>, T> {
    return new UpdateRequestBuilder<
      TradeD365SalesFeatureManagementStates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TradeD365SalesFeatureManagementStates`.
   * @param name Key property. See {@link TradeD365SalesFeatureManagementStates.name}.
   * @returns A request builder for creating requests that delete an entity of type `TradeD365SalesFeatureManagementStates`.
   */
  delete(
    name: string
  ): DeleteRequestBuilder<TradeD365SalesFeatureManagementStates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TradeD365SalesFeatureManagementStates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TradeD365SalesFeatureManagementStates` by taking the entity as a parameter.
   */
  delete(
    entity: TradeD365SalesFeatureManagementStates<T>
  ): DeleteRequestBuilder<TradeD365SalesFeatureManagementStates<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<TradeD365SalesFeatureManagementStates<T>, T> {
    return new DeleteRequestBuilder<
      TradeD365SalesFeatureManagementStates<T>,
      T
    >(
      this.entityApi,
      nameOrEntity instanceof TradeD365SalesFeatureManagementStates
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
