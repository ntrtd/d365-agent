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
import { VirtualCourses } from './VirtualCourses';

/**
 * Request builder class for operations supported on the {@link VirtualCourses} entity.
 */
export class VirtualCoursesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VirtualCourses<T>, T> {
  /**
   * Returns a request builder for querying all `VirtualCourses` entities.
   * @returns A request builder for creating requests to retrieve all `VirtualCourses` entities.
   */
  getAll(): GetAllRequestBuilder<VirtualCourses<T>, T> {
    return new GetAllRequestBuilder<VirtualCourses<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VirtualCourses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VirtualCourses`.
   */
  create(
    entity: VirtualCourses<T>
  ): CreateRequestBuilder<VirtualCourses<T>, T> {
    return new CreateRequestBuilder<VirtualCourses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VirtualCourses` entity based on its keys.
   * @param dataAreaId Key property. See {@link VirtualCourses.dataAreaId}.
   * @param courseId Key property. See {@link VirtualCourses.courseId}.
   * @returns A request builder for creating requests to retrieve one `VirtualCourses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    courseId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VirtualCourses<T>, T> {
    return new GetByKeyRequestBuilder<VirtualCourses<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CourseId: courseId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VirtualCourses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VirtualCourses`.
   */
  update(
    entity: VirtualCourses<T>
  ): UpdateRequestBuilder<VirtualCourses<T>, T> {
    return new UpdateRequestBuilder<VirtualCourses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VirtualCourses`.
   * @param dataAreaId Key property. See {@link VirtualCourses.dataAreaId}.
   * @param courseId Key property. See {@link VirtualCourses.courseId}.
   * @returns A request builder for creating requests that delete an entity of type `VirtualCourses`.
   */
  delete(
    dataAreaId: string,
    courseId: string
  ): DeleteRequestBuilder<VirtualCourses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VirtualCourses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VirtualCourses` by taking the entity as a parameter.
   */
  delete(entity: VirtualCourses<T>): DeleteRequestBuilder<VirtualCourses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    courseId?: string
  ): DeleteRequestBuilder<VirtualCourses<T>, T> {
    return new DeleteRequestBuilder<VirtualCourses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VirtualCourses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CourseId: courseId!
          }
    );
  }
}
