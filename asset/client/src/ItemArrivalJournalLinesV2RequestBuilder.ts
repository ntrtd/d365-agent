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
import { ItemArrivalJournalLinesV2 } from './ItemArrivalJournalLinesV2';

/**
 * Request builder class for operations supported on the {@link ItemArrivalJournalLinesV2} entity.
 */
export class ItemArrivalJournalLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemArrivalJournalLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `ItemArrivalJournalLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `ItemArrivalJournalLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<ItemArrivalJournalLinesV2<T>, T> {
    return new GetAllRequestBuilder<ItemArrivalJournalLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ItemArrivalJournalLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemArrivalJournalLinesV2`.
   */
  create(
    entity: ItemArrivalJournalLinesV2<T>
  ): CreateRequestBuilder<ItemArrivalJournalLinesV2<T>, T> {
    return new CreateRequestBuilder<ItemArrivalJournalLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemArrivalJournalLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemArrivalJournalLinesV2.dataAreaId}.
   * @param journalNumber Key property. See {@link ItemArrivalJournalLinesV2.journalNumber}.
   * @param lineNumber Key property. See {@link ItemArrivalJournalLinesV2.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `ItemArrivalJournalLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ItemArrivalJournalLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<ItemArrivalJournalLinesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalNumber: journalNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ItemArrivalJournalLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemArrivalJournalLinesV2`.
   */
  update(
    entity: ItemArrivalJournalLinesV2<T>
  ): UpdateRequestBuilder<ItemArrivalJournalLinesV2<T>, T> {
    return new UpdateRequestBuilder<ItemArrivalJournalLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemArrivalJournalLinesV2`.
   * @param dataAreaId Key property. See {@link ItemArrivalJournalLinesV2.dataAreaId}.
   * @param journalNumber Key property. See {@link ItemArrivalJournalLinesV2.journalNumber}.
   * @param lineNumber Key property. See {@link ItemArrivalJournalLinesV2.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ItemArrivalJournalLinesV2`.
   */
  delete(
    dataAreaId: string,
    journalNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<ItemArrivalJournalLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemArrivalJournalLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemArrivalJournalLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: ItemArrivalJournalLinesV2<T>
  ): DeleteRequestBuilder<ItemArrivalJournalLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<ItemArrivalJournalLinesV2<T>, T> {
    return new DeleteRequestBuilder<ItemArrivalJournalLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemArrivalJournalLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNumber: journalNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
