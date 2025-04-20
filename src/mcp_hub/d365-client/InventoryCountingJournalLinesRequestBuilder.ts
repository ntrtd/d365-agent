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
import { InventoryCountingJournalLines } from './InventoryCountingJournalLines';

/**
 * Request builder class for operations supported on the {@link InventoryCountingJournalLines} entity.
 */
export class InventoryCountingJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryCountingJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryCountingJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryCountingJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryCountingJournalLines<T>, T> {
    return new GetAllRequestBuilder<InventoryCountingJournalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryCountingJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryCountingJournalLines`.
   */
  create(
    entity: InventoryCountingJournalLines<T>
  ): CreateRequestBuilder<InventoryCountingJournalLines<T>, T> {
    return new CreateRequestBuilder<InventoryCountingJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryCountingJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryCountingJournalLines.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryCountingJournalLines.journalNumber}.
   * @param lineNumber Key property. See {@link InventoryCountingJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `InventoryCountingJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<InventoryCountingJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<InventoryCountingJournalLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalNumber: journalNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryCountingJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryCountingJournalLines`.
   */
  update(
    entity: InventoryCountingJournalLines<T>
  ): UpdateRequestBuilder<InventoryCountingJournalLines<T>, T> {
    return new UpdateRequestBuilder<InventoryCountingJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryCountingJournalLines`.
   * @param dataAreaId Key property. See {@link InventoryCountingJournalLines.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryCountingJournalLines.journalNumber}.
   * @param lineNumber Key property. See {@link InventoryCountingJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryCountingJournalLines`.
   */
  delete(
    dataAreaId: string,
    journalNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<InventoryCountingJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryCountingJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryCountingJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryCountingJournalLines<T>
  ): DeleteRequestBuilder<InventoryCountingJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<InventoryCountingJournalLines<T>, T> {
    return new DeleteRequestBuilder<InventoryCountingJournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryCountingJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNumber: journalNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
