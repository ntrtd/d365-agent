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
import { JournalHeaders } from './JournalHeaders';

/**
 * Request builder class for operations supported on the {@link JournalHeaders} entity.
 */
export class JournalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JournalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `JournalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `JournalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<JournalHeaders<T>, T> {
    return new GetAllRequestBuilder<JournalHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JournalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JournalHeaders`.
   */
  create(
    entity: JournalHeaders<T>
  ): CreateRequestBuilder<JournalHeaders<T>, T> {
    return new CreateRequestBuilder<JournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JournalHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link JournalHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link JournalHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests to retrieve one `JournalHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JournalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<JournalHeaders<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalBatchNumber: journalBatchNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `JournalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JournalHeaders`.
   */
  update(
    entity: JournalHeaders<T>
  ): UpdateRequestBuilder<JournalHeaders<T>, T> {
    return new UpdateRequestBuilder<JournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JournalHeaders`.
   * @param dataAreaId Key property. See {@link JournalHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link JournalHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests that delete an entity of type `JournalHeaders`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string
  ): DeleteRequestBuilder<JournalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JournalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JournalHeaders` by taking the entity as a parameter.
   */
  delete(entity: JournalHeaders<T>): DeleteRequestBuilder<JournalHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string
  ): DeleteRequestBuilder<JournalHeaders<T>, T> {
    return new DeleteRequestBuilder<JournalHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof JournalHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!
          }
    );
  }
}
