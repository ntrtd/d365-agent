/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { ReportAsFinishedProductionJournalEntries } from './ReportAsFinishedProductionJournalEntries';

/**
 * Request builder class for operations supported on the {@link ReportAsFinishedProductionJournalEntries} entity.
 */
export class ReportAsFinishedProductionJournalEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReportAsFinishedProductionJournalEntries<T>, T> {
  /**
   * Returns a request builder for querying all `ReportAsFinishedProductionJournalEntries` entities.
   * @returns A request builder for creating requests to retrieve all `ReportAsFinishedProductionJournalEntries` entities.
   */
  getAll(): GetAllRequestBuilder<
    ReportAsFinishedProductionJournalEntries<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ReportAsFinishedProductionJournalEntries<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReportAsFinishedProductionJournalEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReportAsFinishedProductionJournalEntries`.
   */
  create(
    entity: ReportAsFinishedProductionJournalEntries<T>
  ): CreateRequestBuilder<ReportAsFinishedProductionJournalEntries<T>, T> {
    return new CreateRequestBuilder<
      ReportAsFinishedProductionJournalEntries<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ReportAsFinishedProductionJournalEntries` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReportAsFinishedProductionJournalEntries.dataAreaId}.
   * @param journalNumber Key property. See {@link ReportAsFinishedProductionJournalEntries.journalNumber}.
   * @param journalLineNumber Key property. See {@link ReportAsFinishedProductionJournalEntries.journalLineNumber}.
   * @returns A request builder for creating requests to retrieve one `ReportAsFinishedProductionJournalEntries` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNumber: DeserializedType<T, 'Edm.String'>,
    journalLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ReportAsFinishedProductionJournalEntries<T>, T> {
    return new GetByKeyRequestBuilder<
      ReportAsFinishedProductionJournalEntries<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalNumber: journalNumber,
      JournalLineNumber: journalLineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ReportAsFinishedProductionJournalEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReportAsFinishedProductionJournalEntries`.
   */
  update(
    entity: ReportAsFinishedProductionJournalEntries<T>
  ): UpdateRequestBuilder<ReportAsFinishedProductionJournalEntries<T>, T> {
    return new UpdateRequestBuilder<
      ReportAsFinishedProductionJournalEntries<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ReportAsFinishedProductionJournalEntries`.
   * @param dataAreaId Key property. See {@link ReportAsFinishedProductionJournalEntries.dataAreaId}.
   * @param journalNumber Key property. See {@link ReportAsFinishedProductionJournalEntries.journalNumber}.
   * @param journalLineNumber Key property. See {@link ReportAsFinishedProductionJournalEntries.journalLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ReportAsFinishedProductionJournalEntries`.
   */
  delete(
    dataAreaId: string,
    journalNumber: string,
    journalLineNumber: BigNumber
  ): DeleteRequestBuilder<ReportAsFinishedProductionJournalEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReportAsFinishedProductionJournalEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReportAsFinishedProductionJournalEntries` by taking the entity as a parameter.
   */
  delete(
    entity: ReportAsFinishedProductionJournalEntries<T>
  ): DeleteRequestBuilder<ReportAsFinishedProductionJournalEntries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNumber?: string,
    journalLineNumber?: BigNumber
  ): DeleteRequestBuilder<ReportAsFinishedProductionJournalEntries<T>, T> {
    return new DeleteRequestBuilder<
      ReportAsFinishedProductionJournalEntries<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReportAsFinishedProductionJournalEntries
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNumber: journalNumber!,
            JournalLineNumber: journalLineNumber!
          }
    );
  }
}
