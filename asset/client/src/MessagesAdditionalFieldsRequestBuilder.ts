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
import { MessagesAdditionalFields } from './MessagesAdditionalFields';

/**
 * Request builder class for operations supported on the {@link MessagesAdditionalFields} entity.
 */
export class MessagesAdditionalFieldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MessagesAdditionalFields<T>, T> {
  /**
   * Returns a request builder for querying all `MessagesAdditionalFields` entities.
   * @returns A request builder for creating requests to retrieve all `MessagesAdditionalFields` entities.
   */
  getAll(): GetAllRequestBuilder<MessagesAdditionalFields<T>, T> {
    return new GetAllRequestBuilder<MessagesAdditionalFields<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MessagesAdditionalFields` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MessagesAdditionalFields`.
   */
  create(
    entity: MessagesAdditionalFields<T>
  ): CreateRequestBuilder<MessagesAdditionalFields<T>, T> {
    return new CreateRequestBuilder<MessagesAdditionalFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MessagesAdditionalFields` entity based on its keys.
   * @param dataAreaId Key property. See {@link MessagesAdditionalFields.dataAreaId}.
   * @param messageId Key property. See {@link MessagesAdditionalFields.messageId}.
   * @param additionalFieldId Key property. See {@link MessagesAdditionalFields.additionalFieldId}.
   * @returns A request builder for creating requests to retrieve one `MessagesAdditionalFields` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    messageId: DeserializedType<T, 'Edm.String'>,
    additionalFieldId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MessagesAdditionalFields<T>, T> {
    return new GetByKeyRequestBuilder<MessagesAdditionalFields<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MessageId: messageId,
        AdditionalFieldId: additionalFieldId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MessagesAdditionalFields`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MessagesAdditionalFields`.
   */
  update(
    entity: MessagesAdditionalFields<T>
  ): UpdateRequestBuilder<MessagesAdditionalFields<T>, T> {
    return new UpdateRequestBuilder<MessagesAdditionalFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MessagesAdditionalFields`.
   * @param dataAreaId Key property. See {@link MessagesAdditionalFields.dataAreaId}.
   * @param messageId Key property. See {@link MessagesAdditionalFields.messageId}.
   * @param additionalFieldId Key property. See {@link MessagesAdditionalFields.additionalFieldId}.
   * @returns A request builder for creating requests that delete an entity of type `MessagesAdditionalFields`.
   */
  delete(
    dataAreaId: string,
    messageId: string,
    additionalFieldId: string
  ): DeleteRequestBuilder<MessagesAdditionalFields<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MessagesAdditionalFields`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MessagesAdditionalFields` by taking the entity as a parameter.
   */
  delete(
    entity: MessagesAdditionalFields<T>
  ): DeleteRequestBuilder<MessagesAdditionalFields<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    messageId?: string,
    additionalFieldId?: string
  ): DeleteRequestBuilder<MessagesAdditionalFields<T>, T> {
    return new DeleteRequestBuilder<MessagesAdditionalFields<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MessagesAdditionalFields
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MessageId: messageId!,
            AdditionalFieldId: additionalFieldId!
          }
    );
  }
}
