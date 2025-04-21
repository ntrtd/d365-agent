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
import { JobCardProductionJournalEntries } from './JobCardProductionJournalEntries';

/**
 * Request builder class for operations supported on the {@link JobCardProductionJournalEntries} entity.
 */
export class JobCardProductionJournalEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JobCardProductionJournalEntries<T>, T> {
  /**
   * Returns a request builder for querying all `JobCardProductionJournalEntries` entities.
   * @returns A request builder for creating requests to retrieve all `JobCardProductionJournalEntries` entities.
   */
  getAll(): GetAllRequestBuilder<JobCardProductionJournalEntries<T>, T> {
    return new GetAllRequestBuilder<JobCardProductionJournalEntries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `JobCardProductionJournalEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobCardProductionJournalEntries`.
   */
  create(
    entity: JobCardProductionJournalEntries<T>
  ): CreateRequestBuilder<JobCardProductionJournalEntries<T>, T> {
    return new CreateRequestBuilder<JobCardProductionJournalEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JobCardProductionJournalEntries` entity based on its keys.
   * @param dataAreaId Key property. See {@link JobCardProductionJournalEntries.dataAreaId}.
   * @param journalNumber Key property. See {@link JobCardProductionJournalEntries.journalNumber}.
   * @param journalLineNumber Key property. See {@link JobCardProductionJournalEntries.journalLineNumber}.
   * @returns A request builder for creating requests to retrieve one `JobCardProductionJournalEntries` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNumber: DeserializedType<T, 'Edm.String'>,
    journalLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<JobCardProductionJournalEntries<T>, T> {
    return new GetByKeyRequestBuilder<JobCardProductionJournalEntries<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalNumber: journalNumber,
        JournalLineNumber: journalLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `JobCardProductionJournalEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobCardProductionJournalEntries`.
   */
  update(
    entity: JobCardProductionJournalEntries<T>
  ): UpdateRequestBuilder<JobCardProductionJournalEntries<T>, T> {
    return new UpdateRequestBuilder<JobCardProductionJournalEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JobCardProductionJournalEntries`.
   * @param dataAreaId Key property. See {@link JobCardProductionJournalEntries.dataAreaId}.
   * @param journalNumber Key property. See {@link JobCardProductionJournalEntries.journalNumber}.
   * @param journalLineNumber Key property. See {@link JobCardProductionJournalEntries.journalLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `JobCardProductionJournalEntries`.
   */
  delete(
    dataAreaId: string,
    journalNumber: string,
    journalLineNumber: BigNumber
  ): DeleteRequestBuilder<JobCardProductionJournalEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JobCardProductionJournalEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobCardProductionJournalEntries` by taking the entity as a parameter.
   */
  delete(
    entity: JobCardProductionJournalEntries<T>
  ): DeleteRequestBuilder<JobCardProductionJournalEntries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNumber?: string,
    journalLineNumber?: BigNumber
  ): DeleteRequestBuilder<JobCardProductionJournalEntries<T>, T> {
    return new DeleteRequestBuilder<JobCardProductionJournalEntries<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof JobCardProductionJournalEntries
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNumber: journalNumber!,
            JournalLineNumber: journalLineNumber!
          }
    );
  }
}
