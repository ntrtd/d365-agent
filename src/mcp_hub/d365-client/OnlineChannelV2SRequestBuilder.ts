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
import { OnlineChannelV2S } from './OnlineChannelV2S';

/**
 * Request builder class for operations supported on the {@link OnlineChannelV2S} entity.
 */
export class OnlineChannelV2SRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OnlineChannelV2S<T>, T> {
  /**
   * Returns a request builder for querying all `OnlineChannelV2S` entities.
   * @returns A request builder for creating requests to retrieve all `OnlineChannelV2S` entities.
   */
  getAll(): GetAllRequestBuilder<OnlineChannelV2S<T>, T> {
    return new GetAllRequestBuilder<OnlineChannelV2S<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OnlineChannelV2S` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OnlineChannelV2S`.
   */
  create(
    entity: OnlineChannelV2S<T>
  ): CreateRequestBuilder<OnlineChannelV2S<T>, T> {
    return new CreateRequestBuilder<OnlineChannelV2S<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OnlineChannelV2S` entity based on its keys.
   * @param retailChannelId Key property. See {@link OnlineChannelV2S.retailChannelId}.
   * @returns A request builder for creating requests to retrieve one `OnlineChannelV2S` entity based on its keys.
   */
  getByKey(
    retailChannelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OnlineChannelV2S<T>, T> {
    return new GetByKeyRequestBuilder<OnlineChannelV2S<T>, T>(this.entityApi, {
      RetailChannelId: retailChannelId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `OnlineChannelV2S`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OnlineChannelV2S`.
   */
  update(
    entity: OnlineChannelV2S<T>
  ): UpdateRequestBuilder<OnlineChannelV2S<T>, T> {
    return new UpdateRequestBuilder<OnlineChannelV2S<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OnlineChannelV2S`.
   * @param retailChannelId Key property. See {@link OnlineChannelV2S.retailChannelId}.
   * @returns A request builder for creating requests that delete an entity of type `OnlineChannelV2S`.
   */
  delete(retailChannelId: string): DeleteRequestBuilder<OnlineChannelV2S<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OnlineChannelV2S`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OnlineChannelV2S` by taking the entity as a parameter.
   */
  delete(
    entity: OnlineChannelV2S<T>
  ): DeleteRequestBuilder<OnlineChannelV2S<T>, T>;
  delete(
    retailChannelIdOrEntity: any
  ): DeleteRequestBuilder<OnlineChannelV2S<T>, T> {
    return new DeleteRequestBuilder<OnlineChannelV2S<T>, T>(
      this.entityApi,
      retailChannelIdOrEntity instanceof OnlineChannelV2S
        ? retailChannelIdOrEntity
        : { RetailChannelId: retailChannelIdOrEntity! }
    );
  }
}
