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
import { CourseTypeEducationProfiles } from './CourseTypeEducationProfiles';

/**
 * Request builder class for operations supported on the {@link CourseTypeEducationProfiles} entity.
 */
export class CourseTypeEducationProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CourseTypeEducationProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `CourseTypeEducationProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `CourseTypeEducationProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<CourseTypeEducationProfiles<T>, T> {
    return new GetAllRequestBuilder<CourseTypeEducationProfiles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CourseTypeEducationProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CourseTypeEducationProfiles`.
   */
  create(
    entity: CourseTypeEducationProfiles<T>
  ): CreateRequestBuilder<CourseTypeEducationProfiles<T>, T> {
    return new CreateRequestBuilder<CourseTypeEducationProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CourseTypeEducationProfiles` entity based on its keys.
   * @param courseTypeId Key property. See {@link CourseTypeEducationProfiles.courseTypeId}.
   * @param educationId Key property. See {@link CourseTypeEducationProfiles.educationId}.
   * @returns A request builder for creating requests to retrieve one `CourseTypeEducationProfiles` entity based on its keys.
   */
  getByKey(
    courseTypeId: DeserializedType<T, 'Edm.String'>,
    educationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CourseTypeEducationProfiles<T>, T> {
    return new GetByKeyRequestBuilder<CourseTypeEducationProfiles<T>, T>(
      this.entityApi,
      {
        CourseTypeId: courseTypeId,
        EducationId: educationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CourseTypeEducationProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CourseTypeEducationProfiles`.
   */
  update(
    entity: CourseTypeEducationProfiles<T>
  ): UpdateRequestBuilder<CourseTypeEducationProfiles<T>, T> {
    return new UpdateRequestBuilder<CourseTypeEducationProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CourseTypeEducationProfiles`.
   * @param courseTypeId Key property. See {@link CourseTypeEducationProfiles.courseTypeId}.
   * @param educationId Key property. See {@link CourseTypeEducationProfiles.educationId}.
   * @returns A request builder for creating requests that delete an entity of type `CourseTypeEducationProfiles`.
   */
  delete(
    courseTypeId: string,
    educationId: string
  ): DeleteRequestBuilder<CourseTypeEducationProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CourseTypeEducationProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CourseTypeEducationProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: CourseTypeEducationProfiles<T>
  ): DeleteRequestBuilder<CourseTypeEducationProfiles<T>, T>;
  delete(
    courseTypeIdOrEntity: any,
    educationId?: string
  ): DeleteRequestBuilder<CourseTypeEducationProfiles<T>, T> {
    return new DeleteRequestBuilder<CourseTypeEducationProfiles<T>, T>(
      this.entityApi,
      courseTypeIdOrEntity instanceof CourseTypeEducationProfiles
        ? courseTypeIdOrEntity
        : {
            CourseTypeId: courseTypeIdOrEntity!,
            EducationId: educationId!
          }
    );
  }
}
