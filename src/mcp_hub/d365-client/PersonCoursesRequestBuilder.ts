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
import { PersonCourses } from './PersonCourses';

/**
 * Request builder class for operations supported on the {@link PersonCourses} entity.
 */
export class PersonCoursesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonCourses<T>, T> {
  /**
   * Returns a request builder for querying all `PersonCourses` entities.
   * @returns A request builder for creating requests to retrieve all `PersonCourses` entities.
   */
  getAll(): GetAllRequestBuilder<PersonCourses<T>, T> {
    return new GetAllRequestBuilder<PersonCourses<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PersonCourses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonCourses`.
   */
  create(entity: PersonCourses<T>): CreateRequestBuilder<PersonCourses<T>, T> {
    return new CreateRequestBuilder<PersonCourses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PersonCourses` entity based on its keys.
   * @param partyNumber Key property. See {@link PersonCourses.partyNumber}.
   * @param courses Key property. See {@link PersonCourses.courses}.
   * @param startDate Key property. See {@link PersonCourses.startDate}.
   * @returns A request builder for creating requests to retrieve one `PersonCourses` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    courses: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PersonCourses<T>, T> {
    return new GetByKeyRequestBuilder<PersonCourses<T>, T>(this.entityApi, {
      PartyNumber: partyNumber,
      Courses: courses,
      StartDate: startDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PersonCourses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonCourses`.
   */
  update(entity: PersonCourses<T>): UpdateRequestBuilder<PersonCourses<T>, T> {
    return new UpdateRequestBuilder<PersonCourses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonCourses`.
   * @param partyNumber Key property. See {@link PersonCourses.partyNumber}.
   * @param courses Key property. See {@link PersonCourses.courses}.
   * @param startDate Key property. See {@link PersonCourses.startDate}.
   * @returns A request builder for creating requests that delete an entity of type `PersonCourses`.
   */
  delete(
    partyNumber: string,
    courses: string,
    startDate: Moment
  ): DeleteRequestBuilder<PersonCourses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonCourses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonCourses` by taking the entity as a parameter.
   */
  delete(entity: PersonCourses<T>): DeleteRequestBuilder<PersonCourses<T>, T>;
  delete(
    partyNumberOrEntity: any,
    courses?: string,
    startDate?: Moment
  ): DeleteRequestBuilder<PersonCourses<T>, T> {
    return new DeleteRequestBuilder<PersonCourses<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PersonCourses
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            Courses: courses!,
            StartDate: startDate!
          }
    );
  }
}
