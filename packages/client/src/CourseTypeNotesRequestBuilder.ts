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
import { CourseTypeNotes } from './CourseTypeNotes';
import { HrmCourseNotesType } from './HrmCourseNotesType';

/**
 * Request builder class for operations supported on the {@link CourseTypeNotes} entity.
 */
export class CourseTypeNotesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CourseTypeNotes<T>, T> {
  /**
   * Returns a request builder for querying all `CourseTypeNotes` entities.
   * @returns A request builder for creating requests to retrieve all `CourseTypeNotes` entities.
   */
  getAll(): GetAllRequestBuilder<CourseTypeNotes<T>, T> {
    return new GetAllRequestBuilder<CourseTypeNotes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CourseTypeNotes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CourseTypeNotes`.
   */
  create(
    entity: CourseTypeNotes<T>
  ): CreateRequestBuilder<CourseTypeNotes<T>, T> {
    return new CreateRequestBuilder<CourseTypeNotes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CourseTypeNotes` entity based on its keys.
   * @param courseTypeId Key property. See {@link CourseTypeNotes.courseTypeId}.
   * @param notesType Key property. See {@link CourseTypeNotes.notesType}.
   * @returns A request builder for creating requests to retrieve one `CourseTypeNotes` entity based on its keys.
   */
  getByKey(
    courseTypeId: DeserializedType<T, 'Edm.String'>,
    notesType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.HrmCourseNotesType'
    >
  ): GetByKeyRequestBuilder<CourseTypeNotes<T>, T> {
    return new GetByKeyRequestBuilder<CourseTypeNotes<T>, T>(this.entityApi, {
      CourseTypeId: courseTypeId,
      NotesType: notesType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CourseTypeNotes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CourseTypeNotes`.
   */
  update(
    entity: CourseTypeNotes<T>
  ): UpdateRequestBuilder<CourseTypeNotes<T>, T> {
    return new UpdateRequestBuilder<CourseTypeNotes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CourseTypeNotes`.
   * @param courseTypeId Key property. See {@link CourseTypeNotes.courseTypeId}.
   * @param notesType Key property. See {@link CourseTypeNotes.notesType}.
   * @returns A request builder for creating requests that delete an entity of type `CourseTypeNotes`.
   */
  delete(
    courseTypeId: string,
    notesType: HrmCourseNotesType
  ): DeleteRequestBuilder<CourseTypeNotes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CourseTypeNotes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CourseTypeNotes` by taking the entity as a parameter.
   */
  delete(
    entity: CourseTypeNotes<T>
  ): DeleteRequestBuilder<CourseTypeNotes<T>, T>;
  delete(
    courseTypeIdOrEntity: any,
    notesType?: HrmCourseNotesType
  ): DeleteRequestBuilder<CourseTypeNotes<T>, T> {
    return new DeleteRequestBuilder<CourseTypeNotes<T>, T>(
      this.entityApi,
      courseTypeIdOrEntity instanceof CourseTypeNotes
        ? courseTypeIdOrEntity
        : {
            CourseTypeId: courseTypeIdOrEntity!,
            NotesType: notesType!
          }
    );
  }
}
