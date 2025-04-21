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
import { PerformanceJournalEntryUrlLink } from './PerformanceJournalEntryUrlLink';

/**
 * Request builder class for operations supported on the {@link PerformanceJournalEntryUrlLink} entity.
 */
export class PerformanceJournalEntryUrlLinkRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PerformanceJournalEntryUrlLink<T>, T> {
  /**
   * Returns a request builder for querying all `PerformanceJournalEntryUrlLink` entities.
   * @returns A request builder for creating requests to retrieve all `PerformanceJournalEntryUrlLink` entities.
   */
  getAll(): GetAllRequestBuilder<PerformanceJournalEntryUrlLink<T>, T> {
    return new GetAllRequestBuilder<PerformanceJournalEntryUrlLink<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PerformanceJournalEntryUrlLink` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PerformanceJournalEntryUrlLink`.
   */
  create(
    entity: PerformanceJournalEntryUrlLink<T>
  ): CreateRequestBuilder<PerformanceJournalEntryUrlLink<T>, T> {
    return new CreateRequestBuilder<PerformanceJournalEntryUrlLink<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PerformanceJournalEntryUrlLink` entity based on its keys.
   * @param linkId Key property. See {@link PerformanceJournalEntryUrlLink.linkId}.
   * @returns A request builder for creating requests to retrieve one `PerformanceJournalEntryUrlLink` entity based on its keys.
   */
  getByKey(
    linkId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<PerformanceJournalEntryUrlLink<T>, T> {
    return new GetByKeyRequestBuilder<PerformanceJournalEntryUrlLink<T>, T>(
      this.entityApi,
      { LinkId: linkId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PerformanceJournalEntryUrlLink`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PerformanceJournalEntryUrlLink`.
   */
  update(
    entity: PerformanceJournalEntryUrlLink<T>
  ): UpdateRequestBuilder<PerformanceJournalEntryUrlLink<T>, T> {
    return new UpdateRequestBuilder<PerformanceJournalEntryUrlLink<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PerformanceJournalEntryUrlLink`.
   * @param linkId Key property. See {@link PerformanceJournalEntryUrlLink.linkId}.
   * @returns A request builder for creating requests that delete an entity of type `PerformanceJournalEntryUrlLink`.
   */
  delete(
    linkId: string
  ): DeleteRequestBuilder<PerformanceJournalEntryUrlLink<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PerformanceJournalEntryUrlLink`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PerformanceJournalEntryUrlLink` by taking the entity as a parameter.
   */
  delete(
    entity: PerformanceJournalEntryUrlLink<T>
  ): DeleteRequestBuilder<PerformanceJournalEntryUrlLink<T>, T>;
  delete(
    linkIdOrEntity: any
  ): DeleteRequestBuilder<PerformanceJournalEntryUrlLink<T>, T> {
    return new DeleteRequestBuilder<PerformanceJournalEntryUrlLink<T>, T>(
      this.entityApi,
      linkIdOrEntity instanceof PerformanceJournalEntryUrlLink
        ? linkIdOrEntity
        : { LinkId: linkIdOrEntity! }
    );
  }
}
