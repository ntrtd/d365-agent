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
import { OnlineChannels } from './OnlineChannels';

/**
 * Request builder class for operations supported on the {@link OnlineChannels} entity.
 */
export class OnlineChannelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OnlineChannels<T>, T> {
  /**
   * Returns a request builder for querying all `OnlineChannels` entities.
   * @returns A request builder for creating requests to retrieve all `OnlineChannels` entities.
   */
  getAll(): GetAllRequestBuilder<OnlineChannels<T>, T> {
    return new GetAllRequestBuilder<OnlineChannels<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OnlineChannels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OnlineChannels`.
   */
  create(
    entity: OnlineChannels<T>
  ): CreateRequestBuilder<OnlineChannels<T>, T> {
    return new CreateRequestBuilder<OnlineChannels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OnlineChannels` entity based on its keys.
   * @param retailChannelId Key property. See {@link OnlineChannels.retailChannelId}.
   * @returns A request builder for creating requests to retrieve one `OnlineChannels` entity based on its keys.
   */
  getByKey(
    retailChannelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OnlineChannels<T>, T> {
    return new GetByKeyRequestBuilder<OnlineChannels<T>, T>(this.entityApi, {
      RetailChannelId: retailChannelId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `OnlineChannels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OnlineChannels`.
   */
  update(
    entity: OnlineChannels<T>
  ): UpdateRequestBuilder<OnlineChannels<T>, T> {
    return new UpdateRequestBuilder<OnlineChannels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OnlineChannels`.
   * @param retailChannelId Key property. See {@link OnlineChannels.retailChannelId}.
   * @returns A request builder for creating requests that delete an entity of type `OnlineChannels`.
   */
  delete(retailChannelId: string): DeleteRequestBuilder<OnlineChannels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OnlineChannels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OnlineChannels` by taking the entity as a parameter.
   */
  delete(entity: OnlineChannels<T>): DeleteRequestBuilder<OnlineChannels<T>, T>;
  delete(
    retailChannelIdOrEntity: any
  ): DeleteRequestBuilder<OnlineChannels<T>, T> {
    return new DeleteRequestBuilder<OnlineChannels<T>, T>(
      this.entityApi,
      retailChannelIdOrEntity instanceof OnlineChannels
        ? retailChannelIdOrEntity
        : { RetailChannelId: retailChannelIdOrEntity! }
    );
  }
}
