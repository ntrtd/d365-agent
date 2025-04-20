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
import { CourseInstructors } from './CourseInstructors';

/**
 * Request builder class for operations supported on the {@link CourseInstructors} entity.
 */
export class CourseInstructorsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CourseInstructors<T>, T> {
  /**
   * Returns a request builder for querying all `CourseInstructors` entities.
   * @returns A request builder for creating requests to retrieve all `CourseInstructors` entities.
   */
  getAll(): GetAllRequestBuilder<CourseInstructors<T>, T> {
    return new GetAllRequestBuilder<CourseInstructors<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CourseInstructors` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CourseInstructors`.
   */
  create(
    entity: CourseInstructors<T>
  ): CreateRequestBuilder<CourseInstructors<T>, T> {
    return new CreateRequestBuilder<CourseInstructors<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CourseInstructors` entity based on its keys.
   * @param dataAreaId Key property. See {@link CourseInstructors.dataAreaId}.
   * @param personId Key property. See {@link CourseInstructors.personId}.
   * @returns A request builder for creating requests to retrieve one `CourseInstructors` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CourseInstructors<T>, T> {
    return new GetByKeyRequestBuilder<CourseInstructors<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PersonId: personId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CourseInstructors`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CourseInstructors`.
   */
  update(
    entity: CourseInstructors<T>
  ): UpdateRequestBuilder<CourseInstructors<T>, T> {
    return new UpdateRequestBuilder<CourseInstructors<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CourseInstructors`.
   * @param dataAreaId Key property. See {@link CourseInstructors.dataAreaId}.
   * @param personId Key property. See {@link CourseInstructors.personId}.
   * @returns A request builder for creating requests that delete an entity of type `CourseInstructors`.
   */
  delete(
    dataAreaId: string,
    personId: string
  ): DeleteRequestBuilder<CourseInstructors<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CourseInstructors`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CourseInstructors` by taking the entity as a parameter.
   */
  delete(
    entity: CourseInstructors<T>
  ): DeleteRequestBuilder<CourseInstructors<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personId?: string
  ): DeleteRequestBuilder<CourseInstructors<T>, T> {
    return new DeleteRequestBuilder<CourseInstructors<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CourseInstructors
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PersonId: personId!
          }
    );
  }
}
