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
import { CourseTypeDefaultDimensions } from './CourseTypeDefaultDimensions';

/**
 * Request builder class for operations supported on the {@link CourseTypeDefaultDimensions} entity.
 */
export class CourseTypeDefaultDimensionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CourseTypeDefaultDimensions<T>, T> {
  /**
   * Returns a request builder for querying all `CourseTypeDefaultDimensions` entities.
   * @returns A request builder for creating requests to retrieve all `CourseTypeDefaultDimensions` entities.
   */
  getAll(): GetAllRequestBuilder<CourseTypeDefaultDimensions<T>, T> {
    return new GetAllRequestBuilder<CourseTypeDefaultDimensions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CourseTypeDefaultDimensions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CourseTypeDefaultDimensions`.
   */
  create(
    entity: CourseTypeDefaultDimensions<T>
  ): CreateRequestBuilder<CourseTypeDefaultDimensions<T>, T> {
    return new CreateRequestBuilder<CourseTypeDefaultDimensions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CourseTypeDefaultDimensions` entity based on its keys.
   * @param courseTypeId Key property. See {@link CourseTypeDefaultDimensions.courseTypeId}.
   * @param company Key property. See {@link CourseTypeDefaultDimensions.company}.
   * @returns A request builder for creating requests to retrieve one `CourseTypeDefaultDimensions` entity based on its keys.
   */
  getByKey(
    courseTypeId: DeserializedType<T, 'Edm.String'>,
    company: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CourseTypeDefaultDimensions<T>, T> {
    return new GetByKeyRequestBuilder<CourseTypeDefaultDimensions<T>, T>(
      this.entityApi,
      {
        CourseTypeId: courseTypeId,
        Company: company
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CourseTypeDefaultDimensions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CourseTypeDefaultDimensions`.
   */
  update(
    entity: CourseTypeDefaultDimensions<T>
  ): UpdateRequestBuilder<CourseTypeDefaultDimensions<T>, T> {
    return new UpdateRequestBuilder<CourseTypeDefaultDimensions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CourseTypeDefaultDimensions`.
   * @param courseTypeId Key property. See {@link CourseTypeDefaultDimensions.courseTypeId}.
   * @param company Key property. See {@link CourseTypeDefaultDimensions.company}.
   * @returns A request builder for creating requests that delete an entity of type `CourseTypeDefaultDimensions`.
   */
  delete(
    courseTypeId: string,
    company: string
  ): DeleteRequestBuilder<CourseTypeDefaultDimensions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CourseTypeDefaultDimensions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CourseTypeDefaultDimensions` by taking the entity as a parameter.
   */
  delete(
    entity: CourseTypeDefaultDimensions<T>
  ): DeleteRequestBuilder<CourseTypeDefaultDimensions<T>, T>;
  delete(
    courseTypeIdOrEntity: any,
    company?: string
  ): DeleteRequestBuilder<CourseTypeDefaultDimensions<T>, T> {
    return new DeleteRequestBuilder<CourseTypeDefaultDimensions<T>, T>(
      this.entityApi,
      courseTypeIdOrEntity instanceof CourseTypeDefaultDimensions
        ? courseTypeIdOrEntity
        : {
            CourseTypeId: courseTypeIdOrEntity!,
            Company: company!
          }
    );
  }
}
