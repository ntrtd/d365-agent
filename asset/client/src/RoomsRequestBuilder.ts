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
import { Rooms } from './Rooms';

/**
 * Request builder class for operations supported on the {@link Rooms} entity.
 */
export class RoomsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Rooms<T>, T> {
  /**
   * Returns a request builder for querying all `Rooms` entities.
   * @returns A request builder for creating requests to retrieve all `Rooms` entities.
   */
  getAll(): GetAllRequestBuilder<Rooms<T>, T> {
    return new GetAllRequestBuilder<Rooms<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Rooms` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Rooms`.
   */
  create(entity: Rooms<T>): CreateRequestBuilder<Rooms<T>, T> {
    return new CreateRequestBuilder<Rooms<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Rooms` entity based on its keys.
   * @param dataAreaId Key property. See {@link Rooms.dataAreaId}.
   * @param roomId Key property. See {@link Rooms.roomId}.
   * @returns A request builder for creating requests to retrieve one `Rooms` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    roomId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Rooms<T>, T> {
    return new GetByKeyRequestBuilder<Rooms<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      RoomId: roomId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Rooms`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Rooms`.
   */
  update(entity: Rooms<T>): UpdateRequestBuilder<Rooms<T>, T> {
    return new UpdateRequestBuilder<Rooms<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Rooms`.
   * @param dataAreaId Key property. See {@link Rooms.dataAreaId}.
   * @param roomId Key property. See {@link Rooms.roomId}.
   * @returns A request builder for creating requests that delete an entity of type `Rooms`.
   */
  delete(dataAreaId: string, roomId: string): DeleteRequestBuilder<Rooms<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Rooms`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Rooms` by taking the entity as a parameter.
   */
  delete(entity: Rooms<T>): DeleteRequestBuilder<Rooms<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    roomId?: string
  ): DeleteRequestBuilder<Rooms<T>, T> {
    return new DeleteRequestBuilder<Rooms<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Rooms
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RoomId: roomId!
          }
    );
  }
}
