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
import { CourseTypes } from './CourseTypes';

/**
 * Request builder class for operations supported on the {@link CourseTypes} entity.
 */
export class CourseTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CourseTypes<T>, T> {
  /**
   * Returns a request builder for querying all `CourseTypes` entities.
   * @returns A request builder for creating requests to retrieve all `CourseTypes` entities.
   */
  getAll(): GetAllRequestBuilder<CourseTypes<T>, T> {
    return new GetAllRequestBuilder<CourseTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CourseTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CourseTypes`.
   */
  create(entity: CourseTypes<T>): CreateRequestBuilder<CourseTypes<T>, T> {
    return new CreateRequestBuilder<CourseTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CourseTypes` entity based on its keys.
   * @param courseType Key property. See {@link CourseTypes.courseType}.
   * @returns A request builder for creating requests to retrieve one `CourseTypes` entity based on its keys.
   */
  getByKey(
    courseType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CourseTypes<T>, T> {
    return new GetByKeyRequestBuilder<CourseTypes<T>, T>(this.entityApi, {
      CourseType: courseType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CourseTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CourseTypes`.
   */
  update(entity: CourseTypes<T>): UpdateRequestBuilder<CourseTypes<T>, T> {
    return new UpdateRequestBuilder<CourseTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CourseTypes`.
   * @param courseType Key property. See {@link CourseTypes.courseType}.
   * @returns A request builder for creating requests that delete an entity of type `CourseTypes`.
   */
  delete(courseType: string): DeleteRequestBuilder<CourseTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CourseTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CourseTypes` by taking the entity as a parameter.
   */
  delete(entity: CourseTypes<T>): DeleteRequestBuilder<CourseTypes<T>, T>;
  delete(courseTypeOrEntity: any): DeleteRequestBuilder<CourseTypes<T>, T> {
    return new DeleteRequestBuilder<CourseTypes<T>, T>(
      this.entityApi,
      courseTypeOrEntity instanceof CourseTypes
        ? courseTypeOrEntity
        : { CourseType: courseTypeOrEntity! }
    );
  }
}
