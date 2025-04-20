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
import { TradeD365SalesFeatureManagementStatesV2 } from './TradeD365SalesFeatureManagementStatesV2';

/**
 * Request builder class for operations supported on the {@link TradeD365SalesFeatureManagementStatesV2} entity.
 */
export class TradeD365SalesFeatureManagementStatesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TradeD365SalesFeatureManagementStatesV2<T>, T> {
  /**
   * Returns a request builder for querying all `TradeD365SalesFeatureManagementStatesV2` entities.
   * @returns A request builder for creating requests to retrieve all `TradeD365SalesFeatureManagementStatesV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    TradeD365SalesFeatureManagementStatesV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TradeD365SalesFeatureManagementStatesV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TradeD365SalesFeatureManagementStatesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TradeD365SalesFeatureManagementStatesV2`.
   */
  create(
    entity: TradeD365SalesFeatureManagementStatesV2<T>
  ): CreateRequestBuilder<TradeD365SalesFeatureManagementStatesV2<T>, T> {
    return new CreateRequestBuilder<
      TradeD365SalesFeatureManagementStatesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TradeD365SalesFeatureManagementStatesV2` entity based on its keys.
   * @param name Key property. See {@link TradeD365SalesFeatureManagementStatesV2.name}.
   * @returns A request builder for creating requests to retrieve one `TradeD365SalesFeatureManagementStatesV2` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TradeD365SalesFeatureManagementStatesV2<T>, T> {
    return new GetByKeyRequestBuilder<
      TradeD365SalesFeatureManagementStatesV2<T>,
      T
    >(this.entityApi, { Name: name });
  }

  /**
   * Returns a request builder for updating an entity of type `TradeD365SalesFeatureManagementStatesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TradeD365SalesFeatureManagementStatesV2`.
   */
  update(
    entity: TradeD365SalesFeatureManagementStatesV2<T>
  ): UpdateRequestBuilder<TradeD365SalesFeatureManagementStatesV2<T>, T> {
    return new UpdateRequestBuilder<
      TradeD365SalesFeatureManagementStatesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TradeD365SalesFeatureManagementStatesV2`.
   * @param name Key property. See {@link TradeD365SalesFeatureManagementStatesV2.name}.
   * @returns A request builder for creating requests that delete an entity of type `TradeD365SalesFeatureManagementStatesV2`.
   */
  delete(
    name: string
  ): DeleteRequestBuilder<TradeD365SalesFeatureManagementStatesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TradeD365SalesFeatureManagementStatesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TradeD365SalesFeatureManagementStatesV2` by taking the entity as a parameter.
   */
  delete(
    entity: TradeD365SalesFeatureManagementStatesV2<T>
  ): DeleteRequestBuilder<TradeD365SalesFeatureManagementStatesV2<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<TradeD365SalesFeatureManagementStatesV2<T>, T> {
    return new DeleteRequestBuilder<
      TradeD365SalesFeatureManagementStatesV2<T>,
      T
    >(
      this.entityApi,
      nameOrEntity instanceof TradeD365SalesFeatureManagementStatesV2
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
