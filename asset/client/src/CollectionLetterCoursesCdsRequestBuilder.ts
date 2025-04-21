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
import { CollectionLetterCoursesCds } from './CollectionLetterCoursesCds';

/**
 * Request builder class for operations supported on the {@link CollectionLetterCoursesCds} entity.
 */
export class CollectionLetterCoursesCdsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CollectionLetterCoursesCds<T>, T> {
  /**
   * Returns a request builder for querying all `CollectionLetterCoursesCds` entities.
   * @returns A request builder for creating requests to retrieve all `CollectionLetterCoursesCds` entities.
   */
  getAll(): GetAllRequestBuilder<CollectionLetterCoursesCds<T>, T> {
    return new GetAllRequestBuilder<CollectionLetterCoursesCds<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CollectionLetterCoursesCds` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CollectionLetterCoursesCds`.
   */
  create(
    entity: CollectionLetterCoursesCds<T>
  ): CreateRequestBuilder<CollectionLetterCoursesCds<T>, T> {
    return new CreateRequestBuilder<CollectionLetterCoursesCds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CollectionLetterCoursesCds` entity based on its keys.
   * @param dataAreaId Key property. See {@link CollectionLetterCoursesCds.dataAreaId}.
   * @param collectionLetterCourse Key property. See {@link CollectionLetterCoursesCds.collectionLetterCourse}.
   * @returns A request builder for creating requests to retrieve one `CollectionLetterCoursesCds` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    collectionLetterCourse: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CollectionLetterCoursesCds<T>, T> {
    return new GetByKeyRequestBuilder<CollectionLetterCoursesCds<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CollectionLetterCourse: collectionLetterCourse
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CollectionLetterCoursesCds`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CollectionLetterCoursesCds`.
   */
  update(
    entity: CollectionLetterCoursesCds<T>
  ): UpdateRequestBuilder<CollectionLetterCoursesCds<T>, T> {
    return new UpdateRequestBuilder<CollectionLetterCoursesCds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CollectionLetterCoursesCds`.
   * @param dataAreaId Key property. See {@link CollectionLetterCoursesCds.dataAreaId}.
   * @param collectionLetterCourse Key property. See {@link CollectionLetterCoursesCds.collectionLetterCourse}.
   * @returns A request builder for creating requests that delete an entity of type `CollectionLetterCoursesCds`.
   */
  delete(
    dataAreaId: string,
    collectionLetterCourse: string
  ): DeleteRequestBuilder<CollectionLetterCoursesCds<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CollectionLetterCoursesCds`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CollectionLetterCoursesCds` by taking the entity as a parameter.
   */
  delete(
    entity: CollectionLetterCoursesCds<T>
  ): DeleteRequestBuilder<CollectionLetterCoursesCds<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    collectionLetterCourse?: string
  ): DeleteRequestBuilder<CollectionLetterCoursesCds<T>, T> {
    return new DeleteRequestBuilder<CollectionLetterCoursesCds<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CollectionLetterCoursesCds
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CollectionLetterCourse: collectionLetterCourse!
          }
    );
  }
}
