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
import { CourseTypeSkillProfiles } from './CourseTypeSkillProfiles';

/**
 * Request builder class for operations supported on the {@link CourseTypeSkillProfiles} entity.
 */
export class CourseTypeSkillProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CourseTypeSkillProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `CourseTypeSkillProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `CourseTypeSkillProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<CourseTypeSkillProfiles<T>, T> {
    return new GetAllRequestBuilder<CourseTypeSkillProfiles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CourseTypeSkillProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CourseTypeSkillProfiles`.
   */
  create(
    entity: CourseTypeSkillProfiles<T>
  ): CreateRequestBuilder<CourseTypeSkillProfiles<T>, T> {
    return new CreateRequestBuilder<CourseTypeSkillProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CourseTypeSkillProfiles` entity based on its keys.
   * @param courseTypeId Key property. See {@link CourseTypeSkillProfiles.courseTypeId}.
   * @param skillId Key property. See {@link CourseTypeSkillProfiles.skillId}.
   * @returns A request builder for creating requests to retrieve one `CourseTypeSkillProfiles` entity based on its keys.
   */
  getByKey(
    courseTypeId: DeserializedType<T, 'Edm.String'>,
    skillId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CourseTypeSkillProfiles<T>, T> {
    return new GetByKeyRequestBuilder<CourseTypeSkillProfiles<T>, T>(
      this.entityApi,
      {
        CourseTypeId: courseTypeId,
        SkillId: skillId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CourseTypeSkillProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CourseTypeSkillProfiles`.
   */
  update(
    entity: CourseTypeSkillProfiles<T>
  ): UpdateRequestBuilder<CourseTypeSkillProfiles<T>, T> {
    return new UpdateRequestBuilder<CourseTypeSkillProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CourseTypeSkillProfiles`.
   * @param courseTypeId Key property. See {@link CourseTypeSkillProfiles.courseTypeId}.
   * @param skillId Key property. See {@link CourseTypeSkillProfiles.skillId}.
   * @returns A request builder for creating requests that delete an entity of type `CourseTypeSkillProfiles`.
   */
  delete(
    courseTypeId: string,
    skillId: string
  ): DeleteRequestBuilder<CourseTypeSkillProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CourseTypeSkillProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CourseTypeSkillProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: CourseTypeSkillProfiles<T>
  ): DeleteRequestBuilder<CourseTypeSkillProfiles<T>, T>;
  delete(
    courseTypeIdOrEntity: any,
    skillId?: string
  ): DeleteRequestBuilder<CourseTypeSkillProfiles<T>, T> {
    return new DeleteRequestBuilder<CourseTypeSkillProfiles<T>, T>(
      this.entityApi,
      courseTypeIdOrEntity instanceof CourseTypeSkillProfiles
        ? courseTypeIdOrEntity
        : {
            CourseTypeId: courseTypeIdOrEntity!,
            SkillId: skillId!
          }
    );
  }
}
