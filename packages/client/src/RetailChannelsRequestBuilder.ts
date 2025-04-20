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
import { RetailChannels } from './RetailChannels';

/**
 * Request builder class for operations supported on the {@link RetailChannels} entity.
 */
export class RetailChannelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailChannels<T>, T> {
  /**
   * Returns a request builder for querying all `RetailChannels` entities.
   * @returns A request builder for creating requests to retrieve all `RetailChannels` entities.
   */
  getAll(): GetAllRequestBuilder<RetailChannels<T>, T> {
    return new GetAllRequestBuilder<RetailChannels<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailChannels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailChannels`.
   */
  create(
    entity: RetailChannels<T>
  ): CreateRequestBuilder<RetailChannels<T>, T> {
    return new CreateRequestBuilder<RetailChannels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailChannels` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailChannels.dataAreaId}.
   * @param retailChannelId Key property. See {@link RetailChannels.retailChannelId}.
   * @returns A request builder for creating requests to retrieve one `RetailChannels` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    retailChannelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailChannels<T>, T> {
    return new GetByKeyRequestBuilder<RetailChannels<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      RetailChannelId: retailChannelId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailChannels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailChannels`.
   */
  update(
    entity: RetailChannels<T>
  ): UpdateRequestBuilder<RetailChannels<T>, T> {
    return new UpdateRequestBuilder<RetailChannels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailChannels`.
   * @param dataAreaId Key property. See {@link RetailChannels.dataAreaId}.
   * @param retailChannelId Key property. See {@link RetailChannels.retailChannelId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailChannels`.
   */
  delete(
    dataAreaId: string,
    retailChannelId: string
  ): DeleteRequestBuilder<RetailChannels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailChannels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailChannels` by taking the entity as a parameter.
   */
  delete(entity: RetailChannels<T>): DeleteRequestBuilder<RetailChannels<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    retailChannelId?: string
  ): DeleteRequestBuilder<RetailChannels<T>, T> {
    return new DeleteRequestBuilder<RetailChannels<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailChannels
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RetailChannelId: retailChannelId!
          }
    );
  }
}
