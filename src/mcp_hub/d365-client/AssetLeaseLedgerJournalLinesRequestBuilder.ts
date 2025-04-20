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
import { AssetLeaseLedgerJournalLines } from './AssetLeaseLedgerJournalLines';

/**
 * Request builder class for operations supported on the {@link AssetLeaseLedgerJournalLines} entity.
 */
export class AssetLeaseLedgerJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLeaseLedgerJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLeaseLedgerJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLeaseLedgerJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<AssetLeaseLedgerJournalLines<T>, T> {
    return new GetAllRequestBuilder<AssetLeaseLedgerJournalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetLeaseLedgerJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLeaseLedgerJournalLines`.
   */
  create(
    entity: AssetLeaseLedgerJournalLines<T>
  ): CreateRequestBuilder<AssetLeaseLedgerJournalLines<T>, T> {
    return new CreateRequestBuilder<AssetLeaseLedgerJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetLeaseLedgerJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLeaseLedgerJournalLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link AssetLeaseLedgerJournalLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link AssetLeaseLedgerJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetLeaseLedgerJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<AssetLeaseLedgerJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<AssetLeaseLedgerJournalLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalBatchNumber: journalBatchNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLeaseLedgerJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLeaseLedgerJournalLines`.
   */
  update(
    entity: AssetLeaseLedgerJournalLines<T>
  ): UpdateRequestBuilder<AssetLeaseLedgerJournalLines<T>, T> {
    return new UpdateRequestBuilder<AssetLeaseLedgerJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseLedgerJournalLines`.
   * @param dataAreaId Key property. See {@link AssetLeaseLedgerJournalLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link AssetLeaseLedgerJournalLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link AssetLeaseLedgerJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseLedgerJournalLines`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<AssetLeaseLedgerJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseLedgerJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseLedgerJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLeaseLedgerJournalLines<T>
  ): DeleteRequestBuilder<AssetLeaseLedgerJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<AssetLeaseLedgerJournalLines<T>, T> {
    return new DeleteRequestBuilder<AssetLeaseLedgerJournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetLeaseLedgerJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
