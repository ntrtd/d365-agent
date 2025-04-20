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
import { CourseParticipantsStatusByEmail } from './CourseParticipantsStatusByEmail';

/**
 * Request builder class for operations supported on the {@link CourseParticipantsStatusByEmail} entity.
 */
export class CourseParticipantsStatusByEmailRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CourseParticipantsStatusByEmail<T>, T> {
  /**
   * Returns a request builder for querying all `CourseParticipantsStatusByEmail` entities.
   * @returns A request builder for creating requests to retrieve all `CourseParticipantsStatusByEmail` entities.
   */
  getAll(): GetAllRequestBuilder<CourseParticipantsStatusByEmail<T>, T> {
    return new GetAllRequestBuilder<CourseParticipantsStatusByEmail<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CourseParticipantsStatusByEmail` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CourseParticipantsStatusByEmail`.
   */
  create(
    entity: CourseParticipantsStatusByEmail<T>
  ): CreateRequestBuilder<CourseParticipantsStatusByEmail<T>, T> {
    return new CreateRequestBuilder<CourseParticipantsStatusByEmail<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CourseParticipantsStatusByEmail` entity based on its keys.
   * @param dataAreaId Key property. See {@link CourseParticipantsStatusByEmail.dataAreaId}.
   * @param courseId Key property. See {@link CourseParticipantsStatusByEmail.courseId}.
   * @param userEmail Key property. See {@link CourseParticipantsStatusByEmail.userEmail}.
   * @returns A request builder for creating requests to retrieve one `CourseParticipantsStatusByEmail` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    courseId: DeserializedType<T, 'Edm.String'>,
    userEmail: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CourseParticipantsStatusByEmail<T>, T> {
    return new GetByKeyRequestBuilder<CourseParticipantsStatusByEmail<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CourseId: courseId,
        UserEmail: userEmail
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CourseParticipantsStatusByEmail`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CourseParticipantsStatusByEmail`.
   */
  update(
    entity: CourseParticipantsStatusByEmail<T>
  ): UpdateRequestBuilder<CourseParticipantsStatusByEmail<T>, T> {
    return new UpdateRequestBuilder<CourseParticipantsStatusByEmail<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CourseParticipantsStatusByEmail`.
   * @param dataAreaId Key property. See {@link CourseParticipantsStatusByEmail.dataAreaId}.
   * @param courseId Key property. See {@link CourseParticipantsStatusByEmail.courseId}.
   * @param userEmail Key property. See {@link CourseParticipantsStatusByEmail.userEmail}.
   * @returns A request builder for creating requests that delete an entity of type `CourseParticipantsStatusByEmail`.
   */
  delete(
    dataAreaId: string,
    courseId: string,
    userEmail: string
  ): DeleteRequestBuilder<CourseParticipantsStatusByEmail<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CourseParticipantsStatusByEmail`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CourseParticipantsStatusByEmail` by taking the entity as a parameter.
   */
  delete(
    entity: CourseParticipantsStatusByEmail<T>
  ): DeleteRequestBuilder<CourseParticipantsStatusByEmail<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    courseId?: string,
    userEmail?: string
  ): DeleteRequestBuilder<CourseParticipantsStatusByEmail<T>, T> {
    return new DeleteRequestBuilder<CourseParticipantsStatusByEmail<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CourseParticipantsStatusByEmail
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CourseId: courseId!,
            UserEmail: userEmail!
          }
    );
  }
}
