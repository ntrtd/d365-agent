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
import { CourseRooms } from './CourseRooms';

/**
 * Request builder class for operations supported on the {@link CourseRooms} entity.
 */
export class CourseRoomsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CourseRooms<T>, T> {
  /**
   * Returns a request builder for querying all `CourseRooms` entities.
   * @returns A request builder for creating requests to retrieve all `CourseRooms` entities.
   */
  getAll(): GetAllRequestBuilder<CourseRooms<T>, T> {
    return new GetAllRequestBuilder<CourseRooms<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CourseRooms` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CourseRooms`.
   */
  create(entity: CourseRooms<T>): CreateRequestBuilder<CourseRooms<T>, T> {
    return new CreateRequestBuilder<CourseRooms<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CourseRooms` entity based on its keys.
   * @param dataAreaId Key property. See {@link CourseRooms.dataAreaId}.
   * @param classroom Key property. See {@link CourseRooms.classroom}.
   * @returns A request builder for creating requests to retrieve one `CourseRooms` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    classroom: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CourseRooms<T>, T> {
    return new GetByKeyRequestBuilder<CourseRooms<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Classroom: classroom
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CourseRooms`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CourseRooms`.
   */
  update(entity: CourseRooms<T>): UpdateRequestBuilder<CourseRooms<T>, T> {
    return new UpdateRequestBuilder<CourseRooms<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CourseRooms`.
   * @param dataAreaId Key property. See {@link CourseRooms.dataAreaId}.
   * @param classroom Key property. See {@link CourseRooms.classroom}.
   * @returns A request builder for creating requests that delete an entity of type `CourseRooms`.
   */
  delete(
    dataAreaId: string,
    classroom: string
  ): DeleteRequestBuilder<CourseRooms<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CourseRooms`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CourseRooms` by taking the entity as a parameter.
   */
  delete(entity: CourseRooms<T>): DeleteRequestBuilder<CourseRooms<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    classroom?: string
  ): DeleteRequestBuilder<CourseRooms<T>, T> {
    return new DeleteRequestBuilder<CourseRooms<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CourseRooms
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Classroom: classroom!
          }
    );
  }
}
