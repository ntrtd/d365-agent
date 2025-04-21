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
import { PerformanceJournals } from './PerformanceJournals';
import { HcmPerfJournalSourceType } from './HcmPerfJournalSourceType';

/**
 * Request builder class for operations supported on the {@link PerformanceJournals} entity.
 */
export class PerformanceJournalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PerformanceJournals<T>, T> {
  /**
   * Returns a request builder for querying all `PerformanceJournals` entities.
   * @returns A request builder for creating requests to retrieve all `PerformanceJournals` entities.
   */
  getAll(): GetAllRequestBuilder<PerformanceJournals<T>, T> {
    return new GetAllRequestBuilder<PerformanceJournals<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PerformanceJournals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PerformanceJournals`.
   */
  create(
    entity: PerformanceJournals<T>
  ): CreateRequestBuilder<PerformanceJournals<T>, T> {
    return new CreateRequestBuilder<PerformanceJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PerformanceJournals` entity based on its keys.
   * @param personId Key property. See {@link PerformanceJournals.personId}.
   * @param journalDate Key property. See {@link PerformanceJournals.journalDate}.
   * @param sourceType Key property. See {@link PerformanceJournals.sourceType}.
   * @param title Key property. See {@link PerformanceJournals.title}.
   * @returns A request builder for creating requests to retrieve one `PerformanceJournals` entity based on its keys.
   */
  getByKey(
    personId: DeserializedType<T, 'Edm.String'>,
    journalDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    sourceType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.HcmPerfJournalSourceType'
    >,
    title: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PerformanceJournals<T>, T> {
    return new GetByKeyRequestBuilder<PerformanceJournals<T>, T>(
      this.entityApi,
      {
        PersonId: personId,
        JournalDate: journalDate,
        SourceType: sourceType,
        Title: title
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PerformanceJournals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PerformanceJournals`.
   */
  update(
    entity: PerformanceJournals<T>
  ): UpdateRequestBuilder<PerformanceJournals<T>, T> {
    return new UpdateRequestBuilder<PerformanceJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PerformanceJournals`.
   * @param personId Key property. See {@link PerformanceJournals.personId}.
   * @param journalDate Key property. See {@link PerformanceJournals.journalDate}.
   * @param sourceType Key property. See {@link PerformanceJournals.sourceType}.
   * @param title Key property. See {@link PerformanceJournals.title}.
   * @returns A request builder for creating requests that delete an entity of type `PerformanceJournals`.
   */
  delete(
    personId: string,
    journalDate: Moment,
    sourceType: HcmPerfJournalSourceType,
    title: string
  ): DeleteRequestBuilder<PerformanceJournals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PerformanceJournals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PerformanceJournals` by taking the entity as a parameter.
   */
  delete(
    entity: PerformanceJournals<T>
  ): DeleteRequestBuilder<PerformanceJournals<T>, T>;
  delete(
    personIdOrEntity: any,
    journalDate?: Moment,
    sourceType?: HcmPerfJournalSourceType,
    title?: string
  ): DeleteRequestBuilder<PerformanceJournals<T>, T> {
    return new DeleteRequestBuilder<PerformanceJournals<T>, T>(
      this.entityApi,
      personIdOrEntity instanceof PerformanceJournals
        ? personIdOrEntity
        : {
            PersonId: personIdOrEntity!,
            JournalDate: journalDate!,
            SourceType: sourceType!,
            Title: title!
          }
    );
  }
}
