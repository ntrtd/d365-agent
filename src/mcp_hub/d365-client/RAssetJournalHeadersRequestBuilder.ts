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
import { RAssetJournalHeaders } from './RAssetJournalHeaders';

/**
 * Request builder class for operations supported on the {@link RAssetJournalHeaders} entity.
 */
export class RAssetJournalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RAssetJournalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `RAssetJournalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `RAssetJournalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<RAssetJournalHeaders<T>, T> {
    return new GetAllRequestBuilder<RAssetJournalHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RAssetJournalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RAssetJournalHeaders`.
   */
  create(
    entity: RAssetJournalHeaders<T>
  ): CreateRequestBuilder<RAssetJournalHeaders<T>, T> {
    return new CreateRequestBuilder<RAssetJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RAssetJournalHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link RAssetJournalHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link RAssetJournalHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests to retrieve one `RAssetJournalHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RAssetJournalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<RAssetJournalHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalBatchNumber: journalBatchNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RAssetJournalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RAssetJournalHeaders`.
   */
  update(
    entity: RAssetJournalHeaders<T>
  ): UpdateRequestBuilder<RAssetJournalHeaders<T>, T> {
    return new UpdateRequestBuilder<RAssetJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RAssetJournalHeaders`.
   * @param dataAreaId Key property. See {@link RAssetJournalHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link RAssetJournalHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RAssetJournalHeaders`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string
  ): DeleteRequestBuilder<RAssetJournalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RAssetJournalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RAssetJournalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: RAssetJournalHeaders<T>
  ): DeleteRequestBuilder<RAssetJournalHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string
  ): DeleteRequestBuilder<RAssetJournalHeaders<T>, T> {
    return new DeleteRequestBuilder<RAssetJournalHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RAssetJournalHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!
          }
    );
  }
}
