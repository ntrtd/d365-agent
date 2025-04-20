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
import { RetailCallCenters } from './RetailCallCenters';

/**
 * Request builder class for operations supported on the {@link RetailCallCenters} entity.
 */
export class RetailCallCentersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailCallCenters<T>, T> {
  /**
   * Returns a request builder for querying all `RetailCallCenters` entities.
   * @returns A request builder for creating requests to retrieve all `RetailCallCenters` entities.
   */
  getAll(): GetAllRequestBuilder<RetailCallCenters<T>, T> {
    return new GetAllRequestBuilder<RetailCallCenters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailCallCenters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailCallCenters`.
   */
  create(
    entity: RetailCallCenters<T>
  ): CreateRequestBuilder<RetailCallCenters<T>, T> {
    return new CreateRequestBuilder<RetailCallCenters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailCallCenters` entity based on its keys.
   * @param retailChannelId Key property. See {@link RetailCallCenters.retailChannelId}.
   * @returns A request builder for creating requests to retrieve one `RetailCallCenters` entity based on its keys.
   */
  getByKey(
    retailChannelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailCallCenters<T>, T> {
    return new GetByKeyRequestBuilder<RetailCallCenters<T>, T>(this.entityApi, {
      RetailChannelId: retailChannelId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailCallCenters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailCallCenters`.
   */
  update(
    entity: RetailCallCenters<T>
  ): UpdateRequestBuilder<RetailCallCenters<T>, T> {
    return new UpdateRequestBuilder<RetailCallCenters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailCallCenters`.
   * @param retailChannelId Key property. See {@link RetailCallCenters.retailChannelId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailCallCenters`.
   */
  delete(
    retailChannelId: string
  ): DeleteRequestBuilder<RetailCallCenters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailCallCenters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailCallCenters` by taking the entity as a parameter.
   */
  delete(
    entity: RetailCallCenters<T>
  ): DeleteRequestBuilder<RetailCallCenters<T>, T>;
  delete(
    retailChannelIdOrEntity: any
  ): DeleteRequestBuilder<RetailCallCenters<T>, T> {
    return new DeleteRequestBuilder<RetailCallCenters<T>, T>(
      this.entityApi,
      retailChannelIdOrEntity instanceof RetailCallCenters
        ? retailChannelIdOrEntity
        : { RetailChannelId: retailChannelIdOrEntity! }
    );
  }
}
