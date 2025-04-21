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
import { GoalTemplatePerformanceJournals } from './GoalTemplatePerformanceJournals';

/**
 * Request builder class for operations supported on the {@link GoalTemplatePerformanceJournals} entity.
 */
export class GoalTemplatePerformanceJournalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GoalTemplatePerformanceJournals<T>, T> {
  /**
   * Returns a request builder for querying all `GoalTemplatePerformanceJournals` entities.
   * @returns A request builder for creating requests to retrieve all `GoalTemplatePerformanceJournals` entities.
   */
  getAll(): GetAllRequestBuilder<GoalTemplatePerformanceJournals<T>, T> {
    return new GetAllRequestBuilder<GoalTemplatePerformanceJournals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `GoalTemplatePerformanceJournals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GoalTemplatePerformanceJournals`.
   */
  create(
    entity: GoalTemplatePerformanceJournals<T>
  ): CreateRequestBuilder<GoalTemplatePerformanceJournals<T>, T> {
    return new CreateRequestBuilder<GoalTemplatePerformanceJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `GoalTemplatePerformanceJournals` entity based on its keys.
   * @param goalTemplateId Key property. See {@link GoalTemplatePerformanceJournals.goalTemplateId}.
   * @param perfJournalTemplateId Key property. See {@link GoalTemplatePerformanceJournals.perfJournalTemplateId}.
   * @returns A request builder for creating requests to retrieve one `GoalTemplatePerformanceJournals` entity based on its keys.
   */
  getByKey(
    goalTemplateId: DeserializedType<T, 'Edm.Int32'>,
    perfJournalTemplateId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<GoalTemplatePerformanceJournals<T>, T> {
    return new GetByKeyRequestBuilder<GoalTemplatePerformanceJournals<T>, T>(
      this.entityApi,
      {
        GoalTemplateId: goalTemplateId,
        PerfJournalTemplateId: perfJournalTemplateId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `GoalTemplatePerformanceJournals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GoalTemplatePerformanceJournals`.
   */
  update(
    entity: GoalTemplatePerformanceJournals<T>
  ): UpdateRequestBuilder<GoalTemplatePerformanceJournals<T>, T> {
    return new UpdateRequestBuilder<GoalTemplatePerformanceJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GoalTemplatePerformanceJournals`.
   * @param goalTemplateId Key property. See {@link GoalTemplatePerformanceJournals.goalTemplateId}.
   * @param perfJournalTemplateId Key property. See {@link GoalTemplatePerformanceJournals.perfJournalTemplateId}.
   * @returns A request builder for creating requests that delete an entity of type `GoalTemplatePerformanceJournals`.
   */
  delete(
    goalTemplateId: number,
    perfJournalTemplateId: number
  ): DeleteRequestBuilder<GoalTemplatePerformanceJournals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GoalTemplatePerformanceJournals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GoalTemplatePerformanceJournals` by taking the entity as a parameter.
   */
  delete(
    entity: GoalTemplatePerformanceJournals<T>
  ): DeleteRequestBuilder<GoalTemplatePerformanceJournals<T>, T>;
  delete(
    goalTemplateIdOrEntity: any,
    perfJournalTemplateId?: number
  ): DeleteRequestBuilder<GoalTemplatePerformanceJournals<T>, T> {
    return new DeleteRequestBuilder<GoalTemplatePerformanceJournals<T>, T>(
      this.entityApi,
      goalTemplateIdOrEntity instanceof GoalTemplatePerformanceJournals
        ? goalTemplateIdOrEntity
        : {
            GoalTemplateId: goalTemplateIdOrEntity!,
            PerfJournalTemplateId: perfJournalTemplateId!
          }
    );
  }
}
