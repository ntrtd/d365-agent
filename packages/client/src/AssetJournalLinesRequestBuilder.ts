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
import { AssetJournalLines } from './AssetJournalLines';

/**
 * Request builder class for operations supported on the {@link AssetJournalLines} entity.
 */
export class AssetJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `AssetJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `AssetJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<AssetJournalLines<T>, T> {
    return new GetAllRequestBuilder<AssetJournalLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetJournalLines`.
   */
  create(
    entity: AssetJournalLines<T>
  ): CreateRequestBuilder<AssetJournalLines<T>, T> {
    return new CreateRequestBuilder<AssetJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetJournalLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link AssetJournalLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link AssetJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<AssetJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<AssetJournalLines<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalBatchNumber: journalBatchNumber,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetJournalLines`.
   */
  update(
    entity: AssetJournalLines<T>
  ): UpdateRequestBuilder<AssetJournalLines<T>, T> {
    return new UpdateRequestBuilder<AssetJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetJournalLines`.
   * @param dataAreaId Key property. See {@link AssetJournalLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link AssetJournalLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link AssetJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetJournalLines`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<AssetJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: AssetJournalLines<T>
  ): DeleteRequestBuilder<AssetJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<AssetJournalLines<T>, T> {
    return new DeleteRequestBuilder<AssetJournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
