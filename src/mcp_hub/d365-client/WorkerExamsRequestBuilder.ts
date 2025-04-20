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
import { WorkerExams } from './WorkerExams';

/**
 * Request builder class for operations supported on the {@link WorkerExams} entity.
 */
export class WorkerExamsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerExams<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerExams` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerExams` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerExams<T>, T> {
    return new GetAllRequestBuilder<WorkerExams<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkerExams` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerExams`.
   */
  create(entity: WorkerExams<T>): CreateRequestBuilder<WorkerExams<T>, T> {
    return new CreateRequestBuilder<WorkerExams<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `WorkerExams` entity based on its keys.
   * @param requiredBy Key property. See {@link WorkerExams.requiredBy}.
   * @param personnelNumber Key property. See {@link WorkerExams.personnelNumber}.
   * @param testId Key property. See {@link WorkerExams.testId}.
   * @returns A request builder for creating requests to retrieve one `WorkerExams` entity based on its keys.
   */
  getByKey(
    requiredBy: DeserializedType<T, 'Edm.DateTimeOffset'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    testId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkerExams<T>, T> {
    return new GetByKeyRequestBuilder<WorkerExams<T>, T>(this.entityApi, {
      RequiredBy: requiredBy,
      PersonnelNumber: personnelNumber,
      TestId: testId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerExams`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerExams`.
   */
  update(entity: WorkerExams<T>): UpdateRequestBuilder<WorkerExams<T>, T> {
    return new UpdateRequestBuilder<WorkerExams<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerExams`.
   * @param requiredBy Key property. See {@link WorkerExams.requiredBy}.
   * @param personnelNumber Key property. See {@link WorkerExams.personnelNumber}.
   * @param testId Key property. See {@link WorkerExams.testId}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerExams`.
   */
  delete(
    requiredBy: Moment,
    personnelNumber: string,
    testId: string
  ): DeleteRequestBuilder<WorkerExams<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerExams`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerExams` by taking the entity as a parameter.
   */
  delete(entity: WorkerExams<T>): DeleteRequestBuilder<WorkerExams<T>, T>;
  delete(
    requiredByOrEntity: any,
    personnelNumber?: string,
    testId?: string
  ): DeleteRequestBuilder<WorkerExams<T>, T> {
    return new DeleteRequestBuilder<WorkerExams<T>, T>(
      this.entityApi,
      requiredByOrEntity instanceof WorkerExams
        ? requiredByOrEntity
        : {
            RequiredBy: requiredByOrEntity!,
            PersonnelNumber: personnelNumber!,
            TestId: testId!
          }
    );
  }
}
