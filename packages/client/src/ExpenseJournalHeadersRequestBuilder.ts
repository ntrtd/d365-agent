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
import { ExpenseJournalHeaders } from './ExpenseJournalHeaders';

/**
 * Request builder class for operations supported on the {@link ExpenseJournalHeaders} entity.
 */
export class ExpenseJournalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpenseJournalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `ExpenseJournalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `ExpenseJournalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<ExpenseJournalHeaders<T>, T> {
    return new GetAllRequestBuilder<ExpenseJournalHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExpenseJournalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpenseJournalHeaders`.
   */
  create(
    entity: ExpenseJournalHeaders<T>
  ): CreateRequestBuilder<ExpenseJournalHeaders<T>, T> {
    return new CreateRequestBuilder<ExpenseJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpenseJournalHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExpenseJournalHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link ExpenseJournalHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests to retrieve one `ExpenseJournalHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpenseJournalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<ExpenseJournalHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalBatchNumber: journalBatchNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpenseJournalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpenseJournalHeaders`.
   */
  update(
    entity: ExpenseJournalHeaders<T>
  ): UpdateRequestBuilder<ExpenseJournalHeaders<T>, T> {
    return new UpdateRequestBuilder<ExpenseJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpenseJournalHeaders`.
   * @param dataAreaId Key property. See {@link ExpenseJournalHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link ExpenseJournalHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseJournalHeaders`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string
  ): DeleteRequestBuilder<ExpenseJournalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpenseJournalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseJournalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: ExpenseJournalHeaders<T>
  ): DeleteRequestBuilder<ExpenseJournalHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string
  ): DeleteRequestBuilder<ExpenseJournalHeaders<T>, T> {
    return new DeleteRequestBuilder<ExpenseJournalHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExpenseJournalHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!
          }
    );
  }
}
