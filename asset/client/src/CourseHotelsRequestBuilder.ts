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
import { CourseHotels } from './CourseHotels';

/**
 * Request builder class for operations supported on the {@link CourseHotels} entity.
 */
export class CourseHotelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CourseHotels<T>, T> {
  /**
   * Returns a request builder for querying all `CourseHotels` entities.
   * @returns A request builder for creating requests to retrieve all `CourseHotels` entities.
   */
  getAll(): GetAllRequestBuilder<CourseHotels<T>, T> {
    return new GetAllRequestBuilder<CourseHotels<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CourseHotels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CourseHotels`.
   */
  create(entity: CourseHotels<T>): CreateRequestBuilder<CourseHotels<T>, T> {
    return new CreateRequestBuilder<CourseHotels<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CourseHotels` entity based on its keys.
   * @param dataAreaId Key property. See {@link CourseHotels.dataAreaId}.
   * @param courseLocationId Key property. See {@link CourseHotels.courseLocationId}.
   * @param hotelId Key property. See {@link CourseHotels.hotelId}.
   * @returns A request builder for creating requests to retrieve one `CourseHotels` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    courseLocationId: DeserializedType<T, 'Edm.String'>,
    hotelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CourseHotels<T>, T> {
    return new GetByKeyRequestBuilder<CourseHotels<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CourseLocationId: courseLocationId,
      HotelId: hotelId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CourseHotels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CourseHotels`.
   */
  update(entity: CourseHotels<T>): UpdateRequestBuilder<CourseHotels<T>, T> {
    return new UpdateRequestBuilder<CourseHotels<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CourseHotels`.
   * @param dataAreaId Key property. See {@link CourseHotels.dataAreaId}.
   * @param courseLocationId Key property. See {@link CourseHotels.courseLocationId}.
   * @param hotelId Key property. See {@link CourseHotels.hotelId}.
   * @returns A request builder for creating requests that delete an entity of type `CourseHotels`.
   */
  delete(
    dataAreaId: string,
    courseLocationId: string,
    hotelId: string
  ): DeleteRequestBuilder<CourseHotels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CourseHotels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CourseHotels` by taking the entity as a parameter.
   */
  delete(entity: CourseHotels<T>): DeleteRequestBuilder<CourseHotels<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    courseLocationId?: string,
    hotelId?: string
  ): DeleteRequestBuilder<CourseHotels<T>, T> {
    return new DeleteRequestBuilder<CourseHotels<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CourseHotels
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CourseLocationId: courseLocationId!,
            HotelId: hotelId!
          }
    );
  }
}
