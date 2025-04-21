/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { ApplicantCourses } from './ApplicantCourses';

/**
 * Request builder class for operations supported on the {@link ApplicantCourses} entity.
 */
export class ApplicantCoursesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApplicantCourses<T>, T> {
  /**
   * Returns a request builder for querying all `ApplicantCourses` entities.
   * @returns A request builder for creating requests to retrieve all `ApplicantCourses` entities.
   */
  getAll(): GetAllRequestBuilder<ApplicantCourses<T>, T> {
    return new GetAllRequestBuilder<ApplicantCourses<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ApplicantCourses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApplicantCourses`.
   */
  create(
    entity: ApplicantCourses<T>
  ): CreateRequestBuilder<ApplicantCourses<T>, T> {
    return new CreateRequestBuilder<ApplicantCourses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ApplicantCourses` entity based on its keys.
   * @param applicantId Key property. See {@link ApplicantCourses.applicantId}.
   * @param courses Key property. See {@link ApplicantCourses.courses}.
   * @param startDate Key property. See {@link ApplicantCourses.startDate}.
   * @returns A request builder for creating requests to retrieve one `ApplicantCourses` entity based on its keys.
   */
  getByKey(
    applicantId: DeserializedType<T, 'Edm.String'>,
    courses: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ApplicantCourses<T>, T> {
    return new GetByKeyRequestBuilder<ApplicantCourses<T>, T>(this.entityApi, {
      ApplicantId: applicantId,
      Courses: courses,
      StartDate: startDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ApplicantCourses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApplicantCourses`.
   */
  update(
    entity: ApplicantCourses<T>
  ): UpdateRequestBuilder<ApplicantCourses<T>, T> {
    return new UpdateRequestBuilder<ApplicantCourses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApplicantCourses`.
   * @param applicantId Key property. See {@link ApplicantCourses.applicantId}.
   * @param courses Key property. See {@link ApplicantCourses.courses}.
   * @param startDate Key property. See {@link ApplicantCourses.startDate}.
   * @returns A request builder for creating requests that delete an entity of type `ApplicantCourses`.
   */
  delete(
    applicantId: string,
    courses: string,
    startDate: Moment
  ): DeleteRequestBuilder<ApplicantCourses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApplicantCourses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApplicantCourses` by taking the entity as a parameter.
   */
  delete(
    entity: ApplicantCourses<T>
  ): DeleteRequestBuilder<ApplicantCourses<T>, T>;
  delete(
    applicantIdOrEntity: any,
    courses?: string,
    startDate?: Moment
  ): DeleteRequestBuilder<ApplicantCourses<T>, T> {
    return new DeleteRequestBuilder<ApplicantCourses<T>, T>(
      this.entityApi,
      applicantIdOrEntity instanceof ApplicantCourses
        ? applicantIdOrEntity
        : {
            ApplicantId: applicantIdOrEntity!,
            Courses: courses!,
            StartDate: startDate!
          }
    );
  }
}
