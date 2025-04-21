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
import { RAssetJournalLines } from './RAssetJournalLines';

/**
 * Request builder class for operations supported on the {@link RAssetJournalLines} entity.
 */
export class RAssetJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RAssetJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `RAssetJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `RAssetJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<RAssetJournalLines<T>, T> {
    return new GetAllRequestBuilder<RAssetJournalLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RAssetJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RAssetJournalLines`.
   */
  create(
    entity: RAssetJournalLines<T>
  ): CreateRequestBuilder<RAssetJournalLines<T>, T> {
    return new CreateRequestBuilder<RAssetJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RAssetJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RAssetJournalLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link RAssetJournalLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link RAssetJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RAssetJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RAssetJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<RAssetJournalLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalBatchNumber: journalBatchNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RAssetJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RAssetJournalLines`.
   */
  update(
    entity: RAssetJournalLines<T>
  ): UpdateRequestBuilder<RAssetJournalLines<T>, T> {
    return new UpdateRequestBuilder<RAssetJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RAssetJournalLines`.
   * @param dataAreaId Key property. See {@link RAssetJournalLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link RAssetJournalLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link RAssetJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RAssetJournalLines`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RAssetJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RAssetJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RAssetJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: RAssetJournalLines<T>
  ): DeleteRequestBuilder<RAssetJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RAssetJournalLines<T>, T> {
    return new DeleteRequestBuilder<RAssetJournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RAssetJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
