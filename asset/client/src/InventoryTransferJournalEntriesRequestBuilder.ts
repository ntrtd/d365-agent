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
import { InventoryTransferJournalEntries } from './InventoryTransferJournalEntries';

/**
 * Request builder class for operations supported on the {@link InventoryTransferJournalEntries} entity.
 */
export class InventoryTransferJournalEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryTransferJournalEntries<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryTransferJournalEntries` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryTransferJournalEntries` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryTransferJournalEntries<T>, T> {
    return new GetAllRequestBuilder<InventoryTransferJournalEntries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryTransferJournalEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryTransferJournalEntries`.
   */
  create(
    entity: InventoryTransferJournalEntries<T>
  ): CreateRequestBuilder<InventoryTransferJournalEntries<T>, T> {
    return new CreateRequestBuilder<InventoryTransferJournalEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryTransferJournalEntries` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryTransferJournalEntries.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryTransferJournalEntries.journalNumber}.
   * @param lineNumber Key property. See {@link InventoryTransferJournalEntries.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `InventoryTransferJournalEntries` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<InventoryTransferJournalEntries<T>, T> {
    return new GetByKeyRequestBuilder<InventoryTransferJournalEntries<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalNumber: journalNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryTransferJournalEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryTransferJournalEntries`.
   */
  update(
    entity: InventoryTransferJournalEntries<T>
  ): UpdateRequestBuilder<InventoryTransferJournalEntries<T>, T> {
    return new UpdateRequestBuilder<InventoryTransferJournalEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryTransferJournalEntries`.
   * @param dataAreaId Key property. See {@link InventoryTransferJournalEntries.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryTransferJournalEntries.journalNumber}.
   * @param lineNumber Key property. See {@link InventoryTransferJournalEntries.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryTransferJournalEntries`.
   */
  delete(
    dataAreaId: string,
    journalNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<InventoryTransferJournalEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryTransferJournalEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryTransferJournalEntries` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryTransferJournalEntries<T>
  ): DeleteRequestBuilder<InventoryTransferJournalEntries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<InventoryTransferJournalEntries<T>, T> {
    return new DeleteRequestBuilder<InventoryTransferJournalEntries<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryTransferJournalEntries
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNumber: journalNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
