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
import { LedgerJournalDescriptions } from './LedgerJournalDescriptions';

/**
 * Request builder class for operations supported on the {@link LedgerJournalDescriptions} entity.
 */
export class LedgerJournalDescriptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerJournalDescriptions<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerJournalDescriptions` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerJournalDescriptions` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerJournalDescriptions<T>, T> {
    return new GetAllRequestBuilder<LedgerJournalDescriptions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerJournalDescriptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerJournalDescriptions`.
   */
  create(
    entity: LedgerJournalDescriptions<T>
  ): CreateRequestBuilder<LedgerJournalDescriptions<T>, T> {
    return new CreateRequestBuilder<LedgerJournalDescriptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerJournalDescriptions` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerJournalDescriptions.dataAreaId}.
   * @param identification Key property. See {@link LedgerJournalDescriptions.identification}.
   * @returns A request builder for creating requests to retrieve one `LedgerJournalDescriptions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    identification: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LedgerJournalDescriptions<T>, T> {
    return new GetByKeyRequestBuilder<LedgerJournalDescriptions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Identification: identification
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerJournalDescriptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerJournalDescriptions`.
   */
  update(
    entity: LedgerJournalDescriptions<T>
  ): UpdateRequestBuilder<LedgerJournalDescriptions<T>, T> {
    return new UpdateRequestBuilder<LedgerJournalDescriptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalDescriptions`.
   * @param dataAreaId Key property. See {@link LedgerJournalDescriptions.dataAreaId}.
   * @param identification Key property. See {@link LedgerJournalDescriptions.identification}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalDescriptions`.
   */
  delete(
    dataAreaId: string,
    identification: string
  ): DeleteRequestBuilder<LedgerJournalDescriptions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalDescriptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalDescriptions` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerJournalDescriptions<T>
  ): DeleteRequestBuilder<LedgerJournalDescriptions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    identification?: string
  ): DeleteRequestBuilder<LedgerJournalDescriptions<T>, T> {
    return new DeleteRequestBuilder<LedgerJournalDescriptions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerJournalDescriptions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Identification: identification!
          }
    );
  }
}
