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
import { Courses } from './Courses';

/**
 * Request builder class for operations supported on the {@link Courses} entity.
 */
export class CoursesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Courses<T>, T> {
  /**
   * Returns a request builder for querying all `Courses` entities.
   * @returns A request builder for creating requests to retrieve all `Courses` entities.
   */
  getAll(): GetAllRequestBuilder<Courses<T>, T> {
    return new GetAllRequestBuilder<Courses<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Courses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Courses`.
   */
  create(entity: Courses<T>): CreateRequestBuilder<Courses<T>, T> {
    return new CreateRequestBuilder<Courses<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Courses` entity based on its keys.
   * @param dataAreaId Key property. See {@link Courses.dataAreaId}.
   * @param courseId Key property. See {@link Courses.courseId}.
   * @returns A request builder for creating requests to retrieve one `Courses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    courseId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Courses<T>, T> {
    return new GetByKeyRequestBuilder<Courses<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CourseId: courseId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Courses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Courses`.
   */
  update(entity: Courses<T>): UpdateRequestBuilder<Courses<T>, T> {
    return new UpdateRequestBuilder<Courses<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Courses`.
   * @param dataAreaId Key property. See {@link Courses.dataAreaId}.
   * @param courseId Key property. See {@link Courses.courseId}.
   * @returns A request builder for creating requests that delete an entity of type `Courses`.
   */
  delete(
    dataAreaId: string,
    courseId: string
  ): DeleteRequestBuilder<Courses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Courses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Courses` by taking the entity as a parameter.
   */
  delete(entity: Courses<T>): DeleteRequestBuilder<Courses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    courseId?: string
  ): DeleteRequestBuilder<Courses<T>, T> {
    return new DeleteRequestBuilder<Courses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Courses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CourseId: courseId!
          }
    );
  }
}
