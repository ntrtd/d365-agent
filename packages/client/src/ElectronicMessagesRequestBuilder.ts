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
import { ElectronicMessages } from './ElectronicMessages';

/**
 * Request builder class for operations supported on the {@link ElectronicMessages} entity.
 */
export class ElectronicMessagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ElectronicMessages<T>, T> {
  /**
   * Returns a request builder for querying all `ElectronicMessages` entities.
   * @returns A request builder for creating requests to retrieve all `ElectronicMessages` entities.
   */
  getAll(): GetAllRequestBuilder<ElectronicMessages<T>, T> {
    return new GetAllRequestBuilder<ElectronicMessages<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ElectronicMessages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ElectronicMessages`.
   */
  create(
    entity: ElectronicMessages<T>
  ): CreateRequestBuilder<ElectronicMessages<T>, T> {
    return new CreateRequestBuilder<ElectronicMessages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ElectronicMessages` entity based on its keys.
   * @param dataAreaId Key property. See {@link ElectronicMessages.dataAreaId}.
   * @param messageId Key property. See {@link ElectronicMessages.messageId}.
   * @returns A request builder for creating requests to retrieve one `ElectronicMessages` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    messageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ElectronicMessages<T>, T> {
    return new GetByKeyRequestBuilder<ElectronicMessages<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MessageId: messageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ElectronicMessages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ElectronicMessages`.
   */
  update(
    entity: ElectronicMessages<T>
  ): UpdateRequestBuilder<ElectronicMessages<T>, T> {
    return new UpdateRequestBuilder<ElectronicMessages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ElectronicMessages`.
   * @param dataAreaId Key property. See {@link ElectronicMessages.dataAreaId}.
   * @param messageId Key property. See {@link ElectronicMessages.messageId}.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicMessages`.
   */
  delete(
    dataAreaId: string,
    messageId: string
  ): DeleteRequestBuilder<ElectronicMessages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ElectronicMessages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicMessages` by taking the entity as a parameter.
   */
  delete(
    entity: ElectronicMessages<T>
  ): DeleteRequestBuilder<ElectronicMessages<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    messageId?: string
  ): DeleteRequestBuilder<ElectronicMessages<T>, T> {
    return new DeleteRequestBuilder<ElectronicMessages<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ElectronicMessages
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MessageId: messageId!
          }
    );
  }
}
