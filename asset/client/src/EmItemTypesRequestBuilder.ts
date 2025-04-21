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
import { EmItemTypes } from './EmItemTypes';

/**
 * Request builder class for operations supported on the {@link EmItemTypes} entity.
 */
export class EmItemTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmItemTypes<T>, T> {
  /**
   * Returns a request builder for querying all `EmItemTypes` entities.
   * @returns A request builder for creating requests to retrieve all `EmItemTypes` entities.
   */
  getAll(): GetAllRequestBuilder<EmItemTypes<T>, T> {
    return new GetAllRequestBuilder<EmItemTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmItemTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmItemTypes`.
   */
  create(entity: EmItemTypes<T>): CreateRequestBuilder<EmItemTypes<T>, T> {
    return new CreateRequestBuilder<EmItemTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EmItemTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link EmItemTypes.dataAreaId}.
   * @param messageItemType Key property. See {@link EmItemTypes.messageItemType}.
   * @returns A request builder for creating requests to retrieve one `EmItemTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    messageItemType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EmItemTypes<T>, T> {
    return new GetByKeyRequestBuilder<EmItemTypes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      MessageItemType: messageItemType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EmItemTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmItemTypes`.
   */
  update(entity: EmItemTypes<T>): UpdateRequestBuilder<EmItemTypes<T>, T> {
    return new UpdateRequestBuilder<EmItemTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EmItemTypes`.
   * @param dataAreaId Key property. See {@link EmItemTypes.dataAreaId}.
   * @param messageItemType Key property. See {@link EmItemTypes.messageItemType}.
   * @returns A request builder for creating requests that delete an entity of type `EmItemTypes`.
   */
  delete(
    dataAreaId: string,
    messageItemType: string
  ): DeleteRequestBuilder<EmItemTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmItemTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmItemTypes` by taking the entity as a parameter.
   */
  delete(entity: EmItemTypes<T>): DeleteRequestBuilder<EmItemTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    messageItemType?: string
  ): DeleteRequestBuilder<EmItemTypes<T>, T> {
    return new DeleteRequestBuilder<EmItemTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EmItemTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MessageItemType: messageItemType!
          }
    );
  }
}
