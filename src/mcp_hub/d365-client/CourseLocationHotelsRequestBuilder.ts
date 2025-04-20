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
import { CourseLocationHotels } from './CourseLocationHotels';

/**
 * Request builder class for operations supported on the {@link CourseLocationHotels} entity.
 */
export class CourseLocationHotelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CourseLocationHotels<T>, T> {
  /**
   * Returns a request builder for querying all `CourseLocationHotels` entities.
   * @returns A request builder for creating requests to retrieve all `CourseLocationHotels` entities.
   */
  getAll(): GetAllRequestBuilder<CourseLocationHotels<T>, T> {
    return new GetAllRequestBuilder<CourseLocationHotels<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CourseLocationHotels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CourseLocationHotels`.
   */
  create(
    entity: CourseLocationHotels<T>
  ): CreateRequestBuilder<CourseLocationHotels<T>, T> {
    return new CreateRequestBuilder<CourseLocationHotels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CourseLocationHotels` entity based on its keys.
   * @param dataAreaId Key property. See {@link CourseLocationHotels.dataAreaId}.
   * @param courseId Key property. See {@link CourseLocationHotels.courseId}.
   * @param courseLocation Key property. See {@link CourseLocationHotels.courseLocation}.
   * @param hotel Key property. See {@link CourseLocationHotels.hotel}.
   * @returns A request builder for creating requests to retrieve one `CourseLocationHotels` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    courseId: DeserializedType<T, 'Edm.String'>,
    courseLocation: DeserializedType<T, 'Edm.String'>,
    hotel: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CourseLocationHotels<T>, T> {
    return new GetByKeyRequestBuilder<CourseLocationHotels<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CourseId: courseId,
        CourseLocation: courseLocation,
        Hotel: hotel
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CourseLocationHotels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CourseLocationHotels`.
   */
  update(
    entity: CourseLocationHotels<T>
  ): UpdateRequestBuilder<CourseLocationHotels<T>, T> {
    return new UpdateRequestBuilder<CourseLocationHotels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CourseLocationHotels`.
   * @param dataAreaId Key property. See {@link CourseLocationHotels.dataAreaId}.
   * @param courseId Key property. See {@link CourseLocationHotels.courseId}.
   * @param courseLocation Key property. See {@link CourseLocationHotels.courseLocation}.
   * @param hotel Key property. See {@link CourseLocationHotels.hotel}.
   * @returns A request builder for creating requests that delete an entity of type `CourseLocationHotels`.
   */
  delete(
    dataAreaId: string,
    courseId: string,
    courseLocation: string,
    hotel: string
  ): DeleteRequestBuilder<CourseLocationHotels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CourseLocationHotels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CourseLocationHotels` by taking the entity as a parameter.
   */
  delete(
    entity: CourseLocationHotels<T>
  ): DeleteRequestBuilder<CourseLocationHotels<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    courseId?: string,
    courseLocation?: string,
    hotel?: string
  ): DeleteRequestBuilder<CourseLocationHotels<T>, T> {
    return new DeleteRequestBuilder<CourseLocationHotels<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CourseLocationHotels
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CourseId: courseId!,
            CourseLocation: courseLocation!,
            Hotel: hotel!
          }
    );
  }
}
