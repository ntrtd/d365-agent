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
import { CourseParticipantsV2 } from './CourseParticipantsV2';

/**
 * Request builder class for operations supported on the {@link CourseParticipantsV2} entity.
 */
export class CourseParticipantsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CourseParticipantsV2<T>, T> {
  /**
   * Returns a request builder for querying all `CourseParticipantsV2` entities.
   * @returns A request builder for creating requests to retrieve all `CourseParticipantsV2` entities.
   */
  getAll(): GetAllRequestBuilder<CourseParticipantsV2<T>, T> {
    return new GetAllRequestBuilder<CourseParticipantsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CourseParticipantsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CourseParticipantsV2`.
   */
  create(
    entity: CourseParticipantsV2<T>
  ): CreateRequestBuilder<CourseParticipantsV2<T>, T> {
    return new CreateRequestBuilder<CourseParticipantsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CourseParticipantsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link CourseParticipantsV2.dataAreaId}.
   * @param courseId Key property. See {@link CourseParticipantsV2.courseId}.
   * @param personId Key property. See {@link CourseParticipantsV2.personId}.
   * @returns A request builder for creating requests to retrieve one `CourseParticipantsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    courseId: DeserializedType<T, 'Edm.String'>,
    personId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CourseParticipantsV2<T>, T> {
    return new GetByKeyRequestBuilder<CourseParticipantsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CourseId: courseId,
        PersonId: personId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CourseParticipantsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CourseParticipantsV2`.
   */
  update(
    entity: CourseParticipantsV2<T>
  ): UpdateRequestBuilder<CourseParticipantsV2<T>, T> {
    return new UpdateRequestBuilder<CourseParticipantsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CourseParticipantsV2`.
   * @param dataAreaId Key property. See {@link CourseParticipantsV2.dataAreaId}.
   * @param courseId Key property. See {@link CourseParticipantsV2.courseId}.
   * @param personId Key property. See {@link CourseParticipantsV2.personId}.
   * @returns A request builder for creating requests that delete an entity of type `CourseParticipantsV2`.
   */
  delete(
    dataAreaId: string,
    courseId: string,
    personId: string
  ): DeleteRequestBuilder<CourseParticipantsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CourseParticipantsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CourseParticipantsV2` by taking the entity as a parameter.
   */
  delete(
    entity: CourseParticipantsV2<T>
  ): DeleteRequestBuilder<CourseParticipantsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    courseId?: string,
    personId?: string
  ): DeleteRequestBuilder<CourseParticipantsV2<T>, T> {
    return new DeleteRequestBuilder<CourseParticipantsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CourseParticipantsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CourseId: courseId!,
            PersonId: personId!
          }
    );
  }
}
