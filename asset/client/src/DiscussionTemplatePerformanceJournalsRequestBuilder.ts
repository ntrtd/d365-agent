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
import { DiscussionTemplatePerformanceJournals } from './DiscussionTemplatePerformanceJournals';

/**
 * Request builder class for operations supported on the {@link DiscussionTemplatePerformanceJournals} entity.
 */
export class DiscussionTemplatePerformanceJournalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscussionTemplatePerformanceJournals<T>, T> {
  /**
   * Returns a request builder for querying all `DiscussionTemplatePerformanceJournals` entities.
   * @returns A request builder for creating requests to retrieve all `DiscussionTemplatePerformanceJournals` entities.
   */
  getAll(): GetAllRequestBuilder<DiscussionTemplatePerformanceJournals<T>, T> {
    return new GetAllRequestBuilder<
      DiscussionTemplatePerformanceJournals<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DiscussionTemplatePerformanceJournals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscussionTemplatePerformanceJournals`.
   */
  create(
    entity: DiscussionTemplatePerformanceJournals<T>
  ): CreateRequestBuilder<DiscussionTemplatePerformanceJournals<T>, T> {
    return new CreateRequestBuilder<
      DiscussionTemplatePerformanceJournals<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `DiscussionTemplatePerformanceJournals` entity based on its keys.
   * @param discussionTemplateId Key property. See {@link DiscussionTemplatePerformanceJournals.discussionTemplateId}.
   * @param perfJournalTemplateId Key property. See {@link DiscussionTemplatePerformanceJournals.perfJournalTemplateId}.
   * @returns A request builder for creating requests to retrieve one `DiscussionTemplatePerformanceJournals` entity based on its keys.
   */
  getByKey(
    discussionTemplateId: DeserializedType<T, 'Edm.Int32'>,
    perfJournalTemplateId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<DiscussionTemplatePerformanceJournals<T>, T> {
    return new GetByKeyRequestBuilder<
      DiscussionTemplatePerformanceJournals<T>,
      T
    >(this.entityApi, {
      DiscussionTemplateId: discussionTemplateId,
      PerfJournalTemplateId: perfJournalTemplateId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DiscussionTemplatePerformanceJournals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscussionTemplatePerformanceJournals`.
   */
  update(
    entity: DiscussionTemplatePerformanceJournals<T>
  ): UpdateRequestBuilder<DiscussionTemplatePerformanceJournals<T>, T> {
    return new UpdateRequestBuilder<
      DiscussionTemplatePerformanceJournals<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscussionTemplatePerformanceJournals`.
   * @param discussionTemplateId Key property. See {@link DiscussionTemplatePerformanceJournals.discussionTemplateId}.
   * @param perfJournalTemplateId Key property. See {@link DiscussionTemplatePerformanceJournals.perfJournalTemplateId}.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionTemplatePerformanceJournals`.
   */
  delete(
    discussionTemplateId: number,
    perfJournalTemplateId: number
  ): DeleteRequestBuilder<DiscussionTemplatePerformanceJournals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscussionTemplatePerformanceJournals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionTemplatePerformanceJournals` by taking the entity as a parameter.
   */
  delete(
    entity: DiscussionTemplatePerformanceJournals<T>
  ): DeleteRequestBuilder<DiscussionTemplatePerformanceJournals<T>, T>;
  delete(
    discussionTemplateIdOrEntity: any,
    perfJournalTemplateId?: number
  ): DeleteRequestBuilder<DiscussionTemplatePerformanceJournals<T>, T> {
    return new DeleteRequestBuilder<
      DiscussionTemplatePerformanceJournals<T>,
      T
    >(
      this.entityApi,
      discussionTemplateIdOrEntity instanceof
      DiscussionTemplatePerformanceJournals
        ? discussionTemplateIdOrEntity
        : {
            DiscussionTemplateId: discussionTemplateIdOrEntity!,
            PerfJournalTemplateId: perfJournalTemplateId!
          }
    );
  }
}
