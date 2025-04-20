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
import { GoalPerformanceJournalEntries } from './GoalPerformanceJournalEntries';

/**
 * Request builder class for operations supported on the {@link GoalPerformanceJournalEntries} entity.
 */
export class GoalPerformanceJournalEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GoalPerformanceJournalEntries<T>, T> {
  /**
   * Returns a request builder for querying all `GoalPerformanceJournalEntries` entities.
   * @returns A request builder for creating requests to retrieve all `GoalPerformanceJournalEntries` entities.
   */
  getAll(): GetAllRequestBuilder<GoalPerformanceJournalEntries<T>, T> {
    return new GetAllRequestBuilder<GoalPerformanceJournalEntries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `GoalPerformanceJournalEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GoalPerformanceJournalEntries`.
   */
  create(
    entity: GoalPerformanceJournalEntries<T>
  ): CreateRequestBuilder<GoalPerformanceJournalEntries<T>, T> {
    return new CreateRequestBuilder<GoalPerformanceJournalEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `GoalPerformanceJournalEntries` entity based on its keys.
   * @param performanceJournalEntryId Key property. See {@link GoalPerformanceJournalEntries.performanceJournalEntryId}.
   * @param goalId Key property. See {@link GoalPerformanceJournalEntries.goalId}.
   * @param goalHeadingId Key property. See {@link GoalPerformanceJournalEntries.goalHeadingId}.
   * @param goalWorkerPersonnelNumber Key property. See {@link GoalPerformanceJournalEntries.goalWorkerPersonnelNumber}.
   * @returns A request builder for creating requests to retrieve one `GoalPerformanceJournalEntries` entity based on its keys.
   */
  getByKey(
    performanceJournalEntryId: DeserializedType<T, 'Edm.Guid'>,
    goalId: DeserializedType<T, 'Edm.String'>,
    goalHeadingId: DeserializedType<T, 'Edm.String'>,
    goalWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<GoalPerformanceJournalEntries<T>, T> {
    return new GetByKeyRequestBuilder<GoalPerformanceJournalEntries<T>, T>(
      this.entityApi,
      {
        PerformanceJournalEntryId: performanceJournalEntryId,
        GoalId: goalId,
        GoalHeadingId: goalHeadingId,
        GoalWorkerPersonnelNumber: goalWorkerPersonnelNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `GoalPerformanceJournalEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GoalPerformanceJournalEntries`.
   */
  update(
    entity: GoalPerformanceJournalEntries<T>
  ): UpdateRequestBuilder<GoalPerformanceJournalEntries<T>, T> {
    return new UpdateRequestBuilder<GoalPerformanceJournalEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GoalPerformanceJournalEntries`.
   * @param performanceJournalEntryId Key property. See {@link GoalPerformanceJournalEntries.performanceJournalEntryId}.
   * @param goalId Key property. See {@link GoalPerformanceJournalEntries.goalId}.
   * @param goalHeadingId Key property. See {@link GoalPerformanceJournalEntries.goalHeadingId}.
   * @param goalWorkerPersonnelNumber Key property. See {@link GoalPerformanceJournalEntries.goalWorkerPersonnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `GoalPerformanceJournalEntries`.
   */
  delete(
    performanceJournalEntryId: string,
    goalId: string,
    goalHeadingId: string,
    goalWorkerPersonnelNumber: string
  ): DeleteRequestBuilder<GoalPerformanceJournalEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GoalPerformanceJournalEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GoalPerformanceJournalEntries` by taking the entity as a parameter.
   */
  delete(
    entity: GoalPerformanceJournalEntries<T>
  ): DeleteRequestBuilder<GoalPerformanceJournalEntries<T>, T>;
  delete(
    performanceJournalEntryIdOrEntity: any,
    goalId?: string,
    goalHeadingId?: string,
    goalWorkerPersonnelNumber?: string
  ): DeleteRequestBuilder<GoalPerformanceJournalEntries<T>, T> {
    return new DeleteRequestBuilder<GoalPerformanceJournalEntries<T>, T>(
      this.entityApi,
      performanceJournalEntryIdOrEntity instanceof GoalPerformanceJournalEntries
        ? performanceJournalEntryIdOrEntity
        : {
            PerformanceJournalEntryId: performanceJournalEntryIdOrEntity!,
            GoalId: goalId!,
            GoalHeadingId: goalHeadingId!,
            GoalWorkerPersonnelNumber: goalWorkerPersonnelNumber!
          }
    );
  }
}
