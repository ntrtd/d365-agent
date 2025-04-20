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
import { SlipJournalTables } from './SlipJournalTables';

/**
 * Request builder class for operations supported on the {@link SlipJournalTables} entity.
 */
export class SlipJournalTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SlipJournalTables<T>, T> {
  /**
   * Returns a request builder for querying all `SlipJournalTables` entities.
   * @returns A request builder for creating requests to retrieve all `SlipJournalTables` entities.
   */
  getAll(): GetAllRequestBuilder<SlipJournalTables<T>, T> {
    return new GetAllRequestBuilder<SlipJournalTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SlipJournalTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SlipJournalTables`.
   */
  create(
    entity: SlipJournalTables<T>
  ): CreateRequestBuilder<SlipJournalTables<T>, T> {
    return new CreateRequestBuilder<SlipJournalTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SlipJournalTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link SlipJournalTables.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link SlipJournalTables.journalBatchNumber}.
   * @param lineNumber Key property. See {@link SlipJournalTables.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `SlipJournalTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SlipJournalTables<T>, T> {
    return new GetByKeyRequestBuilder<SlipJournalTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalBatchNumber: journalBatchNumber,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SlipJournalTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SlipJournalTables`.
   */
  update(
    entity: SlipJournalTables<T>
  ): UpdateRequestBuilder<SlipJournalTables<T>, T> {
    return new UpdateRequestBuilder<SlipJournalTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SlipJournalTables`.
   * @param dataAreaId Key property. See {@link SlipJournalTables.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link SlipJournalTables.journalBatchNumber}.
   * @param lineNumber Key property. See {@link SlipJournalTables.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SlipJournalTables`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<SlipJournalTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SlipJournalTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SlipJournalTables` by taking the entity as a parameter.
   */
  delete(
    entity: SlipJournalTables<T>
  ): DeleteRequestBuilder<SlipJournalTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<SlipJournalTables<T>, T> {
    return new DeleteRequestBuilder<SlipJournalTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SlipJournalTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
