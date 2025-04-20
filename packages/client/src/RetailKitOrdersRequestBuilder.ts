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
import { RetailKitOrders } from './RetailKitOrders';

/**
 * Request builder class for operations supported on the {@link RetailKitOrders} entity.
 */
export class RetailKitOrdersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailKitOrders<T>, T> {
  /**
   * Returns a request builder for querying all `RetailKitOrders` entities.
   * @returns A request builder for creating requests to retrieve all `RetailKitOrders` entities.
   */
  getAll(): GetAllRequestBuilder<RetailKitOrders<T>, T> {
    return new GetAllRequestBuilder<RetailKitOrders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailKitOrders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailKitOrders`.
   */
  create(
    entity: RetailKitOrders<T>
  ): CreateRequestBuilder<RetailKitOrders<T>, T> {
    return new CreateRequestBuilder<RetailKitOrders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailKitOrders` entity based on its keys.
   * @param name Key property. See {@link RetailKitOrders.name}.
   * @returns A request builder for creating requests to retrieve one `RetailKitOrders` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailKitOrders<T>, T> {
    return new GetByKeyRequestBuilder<RetailKitOrders<T>, T>(this.entityApi, {
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailKitOrders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailKitOrders`.
   */
  update(
    entity: RetailKitOrders<T>
  ): UpdateRequestBuilder<RetailKitOrders<T>, T> {
    return new UpdateRequestBuilder<RetailKitOrders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailKitOrders`.
   * @param name Key property. See {@link RetailKitOrders.name}.
   * @returns A request builder for creating requests that delete an entity of type `RetailKitOrders`.
   */
  delete(name: string): DeleteRequestBuilder<RetailKitOrders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailKitOrders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailKitOrders` by taking the entity as a parameter.
   */
  delete(
    entity: RetailKitOrders<T>
  ): DeleteRequestBuilder<RetailKitOrders<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<RetailKitOrders<T>, T> {
    return new DeleteRequestBuilder<RetailKitOrders<T>, T>(
      this.entityApi,
      nameOrEntity instanceof RetailKitOrders
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
