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
import { ItemArrivalJournalHeadersV2 } from './ItemArrivalJournalHeadersV2';

/**
 * Request builder class for operations supported on the {@link ItemArrivalJournalHeadersV2} entity.
 */
export class ItemArrivalJournalHeadersV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemArrivalJournalHeadersV2<T>, T> {
  /**
   * Returns a request builder for querying all `ItemArrivalJournalHeadersV2` entities.
   * @returns A request builder for creating requests to retrieve all `ItemArrivalJournalHeadersV2` entities.
   */
  getAll(): GetAllRequestBuilder<ItemArrivalJournalHeadersV2<T>, T> {
    return new GetAllRequestBuilder<ItemArrivalJournalHeadersV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ItemArrivalJournalHeadersV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemArrivalJournalHeadersV2`.
   */
  create(
    entity: ItemArrivalJournalHeadersV2<T>
  ): CreateRequestBuilder<ItemArrivalJournalHeadersV2<T>, T> {
    return new CreateRequestBuilder<ItemArrivalJournalHeadersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemArrivalJournalHeadersV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemArrivalJournalHeadersV2.dataAreaId}.
   * @param journalNumber Key property. See {@link ItemArrivalJournalHeadersV2.journalNumber}.
   * @returns A request builder for creating requests to retrieve one `ItemArrivalJournalHeadersV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ItemArrivalJournalHeadersV2<T>, T> {
    return new GetByKeyRequestBuilder<ItemArrivalJournalHeadersV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalNumber: journalNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ItemArrivalJournalHeadersV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemArrivalJournalHeadersV2`.
   */
  update(
    entity: ItemArrivalJournalHeadersV2<T>
  ): UpdateRequestBuilder<ItemArrivalJournalHeadersV2<T>, T> {
    return new UpdateRequestBuilder<ItemArrivalJournalHeadersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemArrivalJournalHeadersV2`.
   * @param dataAreaId Key property. See {@link ItemArrivalJournalHeadersV2.dataAreaId}.
   * @param journalNumber Key property. See {@link ItemArrivalJournalHeadersV2.journalNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ItemArrivalJournalHeadersV2`.
   */
  delete(
    dataAreaId: string,
    journalNumber: string
  ): DeleteRequestBuilder<ItemArrivalJournalHeadersV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemArrivalJournalHeadersV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemArrivalJournalHeadersV2` by taking the entity as a parameter.
   */
  delete(
    entity: ItemArrivalJournalHeadersV2<T>
  ): DeleteRequestBuilder<ItemArrivalJournalHeadersV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNumber?: string
  ): DeleteRequestBuilder<ItemArrivalJournalHeadersV2<T>, T> {
    return new DeleteRequestBuilder<ItemArrivalJournalHeadersV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemArrivalJournalHeadersV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNumber: journalNumber!
          }
    );
  }
}
