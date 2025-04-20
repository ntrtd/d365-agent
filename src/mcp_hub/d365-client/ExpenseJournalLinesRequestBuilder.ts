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
import { ExpenseJournalLines } from './ExpenseJournalLines';

/**
 * Request builder class for operations supported on the {@link ExpenseJournalLines} entity.
 */
export class ExpenseJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpenseJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `ExpenseJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `ExpenseJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<ExpenseJournalLines<T>, T> {
    return new GetAllRequestBuilder<ExpenseJournalLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExpenseJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpenseJournalLines`.
   */
  create(
    entity: ExpenseJournalLines<T>
  ): CreateRequestBuilder<ExpenseJournalLines<T>, T> {
    return new CreateRequestBuilder<ExpenseJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpenseJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExpenseJournalLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link ExpenseJournalLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link ExpenseJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `ExpenseJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ExpenseJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<ExpenseJournalLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalBatchNumber: journalBatchNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpenseJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpenseJournalLines`.
   */
  update(
    entity: ExpenseJournalLines<T>
  ): UpdateRequestBuilder<ExpenseJournalLines<T>, T> {
    return new UpdateRequestBuilder<ExpenseJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpenseJournalLines`.
   * @param dataAreaId Key property. See {@link ExpenseJournalLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link ExpenseJournalLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link ExpenseJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseJournalLines`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<ExpenseJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpenseJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: ExpenseJournalLines<T>
  ): DeleteRequestBuilder<ExpenseJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<ExpenseJournalLines<T>, T> {
    return new DeleteRequestBuilder<ExpenseJournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExpenseJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
