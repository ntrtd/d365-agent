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
import { DiscussionPerformanceJournalEntries } from './DiscussionPerformanceJournalEntries';

/**
 * Request builder class for operations supported on the {@link DiscussionPerformanceJournalEntries} entity.
 */
export class DiscussionPerformanceJournalEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscussionPerformanceJournalEntries<T>, T> {
  /**
   * Returns a request builder for querying all `DiscussionPerformanceJournalEntries` entities.
   * @returns A request builder for creating requests to retrieve all `DiscussionPerformanceJournalEntries` entities.
   */
  getAll(): GetAllRequestBuilder<DiscussionPerformanceJournalEntries<T>, T> {
    return new GetAllRequestBuilder<DiscussionPerformanceJournalEntries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DiscussionPerformanceJournalEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscussionPerformanceJournalEntries`.
   */
  create(
    entity: DiscussionPerformanceJournalEntries<T>
  ): CreateRequestBuilder<DiscussionPerformanceJournalEntries<T>, T> {
    return new CreateRequestBuilder<DiscussionPerformanceJournalEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DiscussionPerformanceJournalEntries` entity based on its keys.
   * @param performanceJournalEntryId Key property. See {@link DiscussionPerformanceJournalEntries.performanceJournalEntryId}.
   * @param discussionId Key property. See {@link DiscussionPerformanceJournalEntries.discussionId}.
   * @param discussionWorkerPersonnelNumber Key property. See {@link DiscussionPerformanceJournalEntries.discussionWorkerPersonnelNumber}.
   * @returns A request builder for creating requests to retrieve one `DiscussionPerformanceJournalEntries` entity based on its keys.
   */
  getByKey(
    performanceJournalEntryId: DeserializedType<T, 'Edm.Guid'>,
    discussionId: DeserializedType<T, 'Edm.String'>,
    discussionWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DiscussionPerformanceJournalEntries<T>, T> {
    return new GetByKeyRequestBuilder<
      DiscussionPerformanceJournalEntries<T>,
      T
    >(this.entityApi, {
      PerformanceJournalEntryId: performanceJournalEntryId,
      DiscussionId: discussionId,
      DiscussionWorkerPersonnelNumber: discussionWorkerPersonnelNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DiscussionPerformanceJournalEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscussionPerformanceJournalEntries`.
   */
  update(
    entity: DiscussionPerformanceJournalEntries<T>
  ): UpdateRequestBuilder<DiscussionPerformanceJournalEntries<T>, T> {
    return new UpdateRequestBuilder<DiscussionPerformanceJournalEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscussionPerformanceJournalEntries`.
   * @param performanceJournalEntryId Key property. See {@link DiscussionPerformanceJournalEntries.performanceJournalEntryId}.
   * @param discussionId Key property. See {@link DiscussionPerformanceJournalEntries.discussionId}.
   * @param discussionWorkerPersonnelNumber Key property. See {@link DiscussionPerformanceJournalEntries.discussionWorkerPersonnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionPerformanceJournalEntries`.
   */
  delete(
    performanceJournalEntryId: string,
    discussionId: string,
    discussionWorkerPersonnelNumber: string
  ): DeleteRequestBuilder<DiscussionPerformanceJournalEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscussionPerformanceJournalEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionPerformanceJournalEntries` by taking the entity as a parameter.
   */
  delete(
    entity: DiscussionPerformanceJournalEntries<T>
  ): DeleteRequestBuilder<DiscussionPerformanceJournalEntries<T>, T>;
  delete(
    performanceJournalEntryIdOrEntity: any,
    discussionId?: string,
    discussionWorkerPersonnelNumber?: string
  ): DeleteRequestBuilder<DiscussionPerformanceJournalEntries<T>, T> {
    return new DeleteRequestBuilder<DiscussionPerformanceJournalEntries<T>, T>(
      this.entityApi,
      performanceJournalEntryIdOrEntity instanceof
      DiscussionPerformanceJournalEntries
        ? performanceJournalEntryIdOrEntity
        : {
            PerformanceJournalEntryId: performanceJournalEntryIdOrEntity!,
            DiscussionId: discussionId!,
            DiscussionWorkerPersonnelNumber: discussionWorkerPersonnelNumber!
          }
    );
  }
}
