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
import { CourseParticipants } from './CourseParticipants';

/**
 * Request builder class for operations supported on the {@link CourseParticipants} entity.
 */
export class CourseParticipantsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CourseParticipants<T>, T> {
  /**
   * Returns a request builder for querying all `CourseParticipants` entities.
   * @returns A request builder for creating requests to retrieve all `CourseParticipants` entities.
   */
  getAll(): GetAllRequestBuilder<CourseParticipants<T>, T> {
    return new GetAllRequestBuilder<CourseParticipants<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CourseParticipants` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CourseParticipants`.
   */
  create(
    entity: CourseParticipants<T>
  ): CreateRequestBuilder<CourseParticipants<T>, T> {
    return new CreateRequestBuilder<CourseParticipants<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CourseParticipants` entity based on its keys.
   * @param dataAreaId Key property. See {@link CourseParticipants.dataAreaId}.
   * @param courseId Key property. See {@link CourseParticipants.courseId}.
   * @param personId Key property. See {@link CourseParticipants.personId}.
   * @returns A request builder for creating requests to retrieve one `CourseParticipants` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    courseId: DeserializedType<T, 'Edm.String'>,
    personId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CourseParticipants<T>, T> {
    return new GetByKeyRequestBuilder<CourseParticipants<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CourseId: courseId,
        PersonId: personId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CourseParticipants`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CourseParticipants`.
   */
  update(
    entity: CourseParticipants<T>
  ): UpdateRequestBuilder<CourseParticipants<T>, T> {
    return new UpdateRequestBuilder<CourseParticipants<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CourseParticipants`.
   * @param dataAreaId Key property. See {@link CourseParticipants.dataAreaId}.
   * @param courseId Key property. See {@link CourseParticipants.courseId}.
   * @param personId Key property. See {@link CourseParticipants.personId}.
   * @returns A request builder for creating requests that delete an entity of type `CourseParticipants`.
   */
  delete(
    dataAreaId: string,
    courseId: string,
    personId: string
  ): DeleteRequestBuilder<CourseParticipants<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CourseParticipants`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CourseParticipants` by taking the entity as a parameter.
   */
  delete(
    entity: CourseParticipants<T>
  ): DeleteRequestBuilder<CourseParticipants<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    courseId?: string,
    personId?: string
  ): DeleteRequestBuilder<CourseParticipants<T>, T> {
    return new DeleteRequestBuilder<CourseParticipants<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CourseParticipants
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CourseId: courseId!,
            PersonId: personId!
          }
    );
  }
}
