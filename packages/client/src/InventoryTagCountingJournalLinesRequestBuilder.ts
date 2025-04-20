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
import { InventoryTagCountingJournalLines } from './InventoryTagCountingJournalLines';

/**
 * Request builder class for operations supported on the {@link InventoryTagCountingJournalLines} entity.
 */
export class InventoryTagCountingJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryTagCountingJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryTagCountingJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryTagCountingJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryTagCountingJournalLines<T>, T> {
    return new GetAllRequestBuilder<InventoryTagCountingJournalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryTagCountingJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryTagCountingJournalLines`.
   */
  create(
    entity: InventoryTagCountingJournalLines<T>
  ): CreateRequestBuilder<InventoryTagCountingJournalLines<T>, T> {
    return new CreateRequestBuilder<InventoryTagCountingJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryTagCountingJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryTagCountingJournalLines.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryTagCountingJournalLines.journalNumber}.
   * @param tagId Key property. See {@link InventoryTagCountingJournalLines.tagId}.
   * @returns A request builder for creating requests to retrieve one `InventoryTagCountingJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNumber: DeserializedType<T, 'Edm.String'>,
    tagId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryTagCountingJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<InventoryTagCountingJournalLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalNumber: journalNumber,
        TagId: tagId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryTagCountingJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryTagCountingJournalLines`.
   */
  update(
    entity: InventoryTagCountingJournalLines<T>
  ): UpdateRequestBuilder<InventoryTagCountingJournalLines<T>, T> {
    return new UpdateRequestBuilder<InventoryTagCountingJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryTagCountingJournalLines`.
   * @param dataAreaId Key property. See {@link InventoryTagCountingJournalLines.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryTagCountingJournalLines.journalNumber}.
   * @param tagId Key property. See {@link InventoryTagCountingJournalLines.tagId}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryTagCountingJournalLines`.
   */
  delete(
    dataAreaId: string,
    journalNumber: string,
    tagId: string
  ): DeleteRequestBuilder<InventoryTagCountingJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryTagCountingJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryTagCountingJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryTagCountingJournalLines<T>
  ): DeleteRequestBuilder<InventoryTagCountingJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNumber?: string,
    tagId?: string
  ): DeleteRequestBuilder<InventoryTagCountingJournalLines<T>, T> {
    return new DeleteRequestBuilder<InventoryTagCountingJournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryTagCountingJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNumber: journalNumber!,
            TagId: tagId!
          }
    );
  }
}
