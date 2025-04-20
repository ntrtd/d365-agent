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
import { RetailStores } from './RetailStores';

/**
 * Request builder class for operations supported on the {@link RetailStores} entity.
 */
export class RetailStoresRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailStores<T>, T> {
  /**
   * Returns a request builder for querying all `RetailStores` entities.
   * @returns A request builder for creating requests to retrieve all `RetailStores` entities.
   */
  getAll(): GetAllRequestBuilder<RetailStores<T>, T> {
    return new GetAllRequestBuilder<RetailStores<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailStores` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailStores`.
   */
  create(entity: RetailStores<T>): CreateRequestBuilder<RetailStores<T>, T> {
    return new CreateRequestBuilder<RetailStores<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailStores` entity based on its keys.
   * @param retailChannelId Key property. See {@link RetailStores.retailChannelId}.
   * @returns A request builder for creating requests to retrieve one `RetailStores` entity based on its keys.
   */
  getByKey(
    retailChannelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailStores<T>, T> {
    return new GetByKeyRequestBuilder<RetailStores<T>, T>(this.entityApi, {
      RetailChannelId: retailChannelId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailStores`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailStores`.
   */
  update(entity: RetailStores<T>): UpdateRequestBuilder<RetailStores<T>, T> {
    return new UpdateRequestBuilder<RetailStores<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailStores`.
   * @param retailChannelId Key property. See {@link RetailStores.retailChannelId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailStores`.
   */
  delete(retailChannelId: string): DeleteRequestBuilder<RetailStores<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailStores`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailStores` by taking the entity as a parameter.
   */
  delete(entity: RetailStores<T>): DeleteRequestBuilder<RetailStores<T>, T>;
  delete(
    retailChannelIdOrEntity: any
  ): DeleteRequestBuilder<RetailStores<T>, T> {
    return new DeleteRequestBuilder<RetailStores<T>, T>(
      this.entityApi,
      retailChannelIdOrEntity instanceof RetailStores
        ? retailChannelIdOrEntity
        : { RetailChannelId: retailChannelIdOrEntity! }
    );
  }
}
