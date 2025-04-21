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
import { CourseLocations } from './CourseLocations';

/**
 * Request builder class for operations supported on the {@link CourseLocations} entity.
 */
export class CourseLocationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CourseLocations<T>, T> {
  /**
   * Returns a request builder for querying all `CourseLocations` entities.
   * @returns A request builder for creating requests to retrieve all `CourseLocations` entities.
   */
  getAll(): GetAllRequestBuilder<CourseLocations<T>, T> {
    return new GetAllRequestBuilder<CourseLocations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CourseLocations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CourseLocations`.
   */
  create(
    entity: CourseLocations<T>
  ): CreateRequestBuilder<CourseLocations<T>, T> {
    return new CreateRequestBuilder<CourseLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CourseLocations` entity based on its keys.
   * @param dataAreaId Key property. See {@link CourseLocations.dataAreaId}.
   * @param courseLocation Key property. See {@link CourseLocations.courseLocation}.
   * @returns A request builder for creating requests to retrieve one `CourseLocations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    courseLocation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CourseLocations<T>, T> {
    return new GetByKeyRequestBuilder<CourseLocations<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CourseLocation: courseLocation
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CourseLocations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CourseLocations`.
   */
  update(
    entity: CourseLocations<T>
  ): UpdateRequestBuilder<CourseLocations<T>, T> {
    return new UpdateRequestBuilder<CourseLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CourseLocations`.
   * @param dataAreaId Key property. See {@link CourseLocations.dataAreaId}.
   * @param courseLocation Key property. See {@link CourseLocations.courseLocation}.
   * @returns A request builder for creating requests that delete an entity of type `CourseLocations`.
   */
  delete(
    dataAreaId: string,
    courseLocation: string
  ): DeleteRequestBuilder<CourseLocations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CourseLocations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CourseLocations` by taking the entity as a parameter.
   */
  delete(
    entity: CourseLocations<T>
  ): DeleteRequestBuilder<CourseLocations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    courseLocation?: string
  ): DeleteRequestBuilder<CourseLocations<T>, T> {
    return new DeleteRequestBuilder<CourseLocations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CourseLocations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CourseLocation: courseLocation!
          }
    );
  }
}
