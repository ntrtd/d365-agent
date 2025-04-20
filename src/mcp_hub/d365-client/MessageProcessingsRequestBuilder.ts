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
import { MessageProcessings } from './MessageProcessings';

/**
 * Request builder class for operations supported on the {@link MessageProcessings} entity.
 */
export class MessageProcessingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MessageProcessings<T>, T> {
  /**
   * Returns a request builder for querying all `MessageProcessings` entities.
   * @returns A request builder for creating requests to retrieve all `MessageProcessings` entities.
   */
  getAll(): GetAllRequestBuilder<MessageProcessings<T>, T> {
    return new GetAllRequestBuilder<MessageProcessings<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MessageProcessings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MessageProcessings`.
   */
  create(
    entity: MessageProcessings<T>
  ): CreateRequestBuilder<MessageProcessings<T>, T> {
    return new CreateRequestBuilder<MessageProcessings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MessageProcessings` entity based on its keys.
   * @param dataAreaId Key property. See {@link MessageProcessings.dataAreaId}.
   * @param processing Key property. See {@link MessageProcessings.processing}.
   * @returns A request builder for creating requests to retrieve one `MessageProcessings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    processing: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MessageProcessings<T>, T> {
    return new GetByKeyRequestBuilder<MessageProcessings<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Processing: processing
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MessageProcessings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MessageProcessings`.
   */
  update(
    entity: MessageProcessings<T>
  ): UpdateRequestBuilder<MessageProcessings<T>, T> {
    return new UpdateRequestBuilder<MessageProcessings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MessageProcessings`.
   * @param dataAreaId Key property. See {@link MessageProcessings.dataAreaId}.
   * @param processing Key property. See {@link MessageProcessings.processing}.
   * @returns A request builder for creating requests that delete an entity of type `MessageProcessings`.
   */
  delete(
    dataAreaId: string,
    processing: string
  ): DeleteRequestBuilder<MessageProcessings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MessageProcessings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MessageProcessings` by taking the entity as a parameter.
   */
  delete(
    entity: MessageProcessings<T>
  ): DeleteRequestBuilder<MessageProcessings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    processing?: string
  ): DeleteRequestBuilder<MessageProcessings<T>, T> {
    return new DeleteRequestBuilder<MessageProcessings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MessageProcessings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Processing: processing!
          }
    );
  }
}
