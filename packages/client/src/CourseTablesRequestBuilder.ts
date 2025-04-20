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
import { CourseTables } from './CourseTables';

/**
 * Request builder class for operations supported on the {@link CourseTables} entity.
 */
export class CourseTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CourseTables<T>, T> {
  /**
   * Returns a request builder for querying all `CourseTables` entities.
   * @returns A request builder for creating requests to retrieve all `CourseTables` entities.
   */
  getAll(): GetAllRequestBuilder<CourseTables<T>, T> {
    return new GetAllRequestBuilder<CourseTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CourseTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CourseTables`.
   */
  create(entity: CourseTables<T>): CreateRequestBuilder<CourseTables<T>, T> {
    return new CreateRequestBuilder<CourseTables<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CourseTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link CourseTables.dataAreaId}.
   * @param courseId Key property. See {@link CourseTables.courseId}.
   * @returns A request builder for creating requests to retrieve one `CourseTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    courseId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CourseTables<T>, T> {
    return new GetByKeyRequestBuilder<CourseTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CourseId: courseId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CourseTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CourseTables`.
   */
  update(entity: CourseTables<T>): UpdateRequestBuilder<CourseTables<T>, T> {
    return new UpdateRequestBuilder<CourseTables<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CourseTables`.
   * @param dataAreaId Key property. See {@link CourseTables.dataAreaId}.
   * @param courseId Key property. See {@link CourseTables.courseId}.
   * @returns A request builder for creating requests that delete an entity of type `CourseTables`.
   */
  delete(
    dataAreaId: string,
    courseId: string
  ): DeleteRequestBuilder<CourseTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CourseTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CourseTables` by taking the entity as a parameter.
   */
  delete(entity: CourseTables<T>): DeleteRequestBuilder<CourseTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    courseId?: string
  ): DeleteRequestBuilder<CourseTables<T>, T> {
    return new DeleteRequestBuilder<CourseTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CourseTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CourseId: courseId!
          }
    );
  }
}
