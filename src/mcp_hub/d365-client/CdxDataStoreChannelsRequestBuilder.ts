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
import { CdxDataStoreChannels } from './CdxDataStoreChannels';

/**
 * Request builder class for operations supported on the {@link CdxDataStoreChannels} entity.
 */
export class CdxDataStoreChannelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdxDataStoreChannels<T>, T> {
  /**
   * Returns a request builder for querying all `CdxDataStoreChannels` entities.
   * @returns A request builder for creating requests to retrieve all `CdxDataStoreChannels` entities.
   */
  getAll(): GetAllRequestBuilder<CdxDataStoreChannels<T>, T> {
    return new GetAllRequestBuilder<CdxDataStoreChannels<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CdxDataStoreChannels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdxDataStoreChannels`.
   */
  create(
    entity: CdxDataStoreChannels<T>
  ): CreateRequestBuilder<CdxDataStoreChannels<T>, T> {
    return new CreateRequestBuilder<CdxDataStoreChannels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdxDataStoreChannels` entity based on its keys.
   * @param channelId Key property. See {@link CdxDataStoreChannels.channelId}.
   * @param channelDatabaseId Key property. See {@link CdxDataStoreChannels.channelDatabaseId}.
   * @returns A request builder for creating requests to retrieve one `CdxDataStoreChannels` entity based on its keys.
   */
  getByKey(
    channelId: DeserializedType<T, 'Edm.String'>,
    channelDatabaseId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CdxDataStoreChannels<T>, T> {
    return new GetByKeyRequestBuilder<CdxDataStoreChannels<T>, T>(
      this.entityApi,
      {
        ChannelId: channelId,
        ChannelDatabaseId: channelDatabaseId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdxDataStoreChannels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdxDataStoreChannels`.
   */
  update(
    entity: CdxDataStoreChannels<T>
  ): UpdateRequestBuilder<CdxDataStoreChannels<T>, T> {
    return new UpdateRequestBuilder<CdxDataStoreChannels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdxDataStoreChannels`.
   * @param channelId Key property. See {@link CdxDataStoreChannels.channelId}.
   * @param channelDatabaseId Key property. See {@link CdxDataStoreChannels.channelDatabaseId}.
   * @returns A request builder for creating requests that delete an entity of type `CdxDataStoreChannels`.
   */
  delete(
    channelId: string,
    channelDatabaseId: string
  ): DeleteRequestBuilder<CdxDataStoreChannels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdxDataStoreChannels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdxDataStoreChannels` by taking the entity as a parameter.
   */
  delete(
    entity: CdxDataStoreChannels<T>
  ): DeleteRequestBuilder<CdxDataStoreChannels<T>, T>;
  delete(
    channelIdOrEntity: any,
    channelDatabaseId?: string
  ): DeleteRequestBuilder<CdxDataStoreChannels<T>, T> {
    return new DeleteRequestBuilder<CdxDataStoreChannels<T>, T>(
      this.entityApi,
      channelIdOrEntity instanceof CdxDataStoreChannels
        ? channelIdOrEntity
        : {
            ChannelId: channelIdOrEntity!,
            ChannelDatabaseId: channelDatabaseId!
          }
    );
  }
}
