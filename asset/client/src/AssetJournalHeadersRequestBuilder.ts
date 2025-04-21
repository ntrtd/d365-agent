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
import { AssetJournalHeaders } from './AssetJournalHeaders';

/**
 * Request builder class for operations supported on the {@link AssetJournalHeaders} entity.
 */
export class AssetJournalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetJournalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `AssetJournalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `AssetJournalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<AssetJournalHeaders<T>, T> {
    return new GetAllRequestBuilder<AssetJournalHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetJournalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetJournalHeaders`.
   */
  create(
    entity: AssetJournalHeaders<T>
  ): CreateRequestBuilder<AssetJournalHeaders<T>, T> {
    return new CreateRequestBuilder<AssetJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetJournalHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetJournalHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link AssetJournalHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetJournalHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetJournalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<AssetJournalHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalBatchNumber: journalBatchNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetJournalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetJournalHeaders`.
   */
  update(
    entity: AssetJournalHeaders<T>
  ): UpdateRequestBuilder<AssetJournalHeaders<T>, T> {
    return new UpdateRequestBuilder<AssetJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetJournalHeaders`.
   * @param dataAreaId Key property. See {@link AssetJournalHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link AssetJournalHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetJournalHeaders`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string
  ): DeleteRequestBuilder<AssetJournalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetJournalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetJournalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: AssetJournalHeaders<T>
  ): DeleteRequestBuilder<AssetJournalHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string
  ): DeleteRequestBuilder<AssetJournalHeaders<T>, T> {
    return new DeleteRequestBuilder<AssetJournalHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetJournalHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!
          }
    );
  }
}
