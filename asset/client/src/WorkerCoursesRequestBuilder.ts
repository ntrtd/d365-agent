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
import { WorkerCourses } from './WorkerCourses';

/**
 * Request builder class for operations supported on the {@link WorkerCourses} entity.
 */
export class WorkerCoursesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerCourses<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerCourses` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerCourses` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerCourses<T>, T> {
    return new GetAllRequestBuilder<WorkerCourses<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkerCourses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerCourses`.
   */
  create(entity: WorkerCourses<T>): CreateRequestBuilder<WorkerCourses<T>, T> {
    return new CreateRequestBuilder<WorkerCourses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerCourses` entity based on its keys.
   * @param personnelNumber Key property. See {@link WorkerCourses.personnelNumber}.
   * @param startDate Key property. See {@link WorkerCourses.startDate}.
   * @param courses Key property. See {@link WorkerCourses.courses}.
   * @returns A request builder for creating requests to retrieve one `WorkerCourses` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    courses: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkerCourses<T>, T> {
    return new GetByKeyRequestBuilder<WorkerCourses<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber,
      StartDate: startDate,
      Courses: courses
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerCourses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerCourses`.
   */
  update(entity: WorkerCourses<T>): UpdateRequestBuilder<WorkerCourses<T>, T> {
    return new UpdateRequestBuilder<WorkerCourses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerCourses`.
   * @param personnelNumber Key property. See {@link WorkerCourses.personnelNumber}.
   * @param startDate Key property. See {@link WorkerCourses.startDate}.
   * @param courses Key property. See {@link WorkerCourses.courses}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerCourses`.
   */
  delete(
    personnelNumber: string,
    startDate: Moment,
    courses: string
  ): DeleteRequestBuilder<WorkerCourses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerCourses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerCourses` by taking the entity as a parameter.
   */
  delete(entity: WorkerCourses<T>): DeleteRequestBuilder<WorkerCourses<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    startDate?: Moment,
    courses?: string
  ): DeleteRequestBuilder<WorkerCourses<T>, T> {
    return new DeleteRequestBuilder<WorkerCourses<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof WorkerCourses
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            StartDate: startDate!,
            Courses: courses!
          }
    );
  }
}
