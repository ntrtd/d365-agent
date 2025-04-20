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
import { LedgerJournalHeadersCds } from './LedgerJournalHeadersCds';

/**
 * Request builder class for operations supported on the {@link LedgerJournalHeadersCds} entity.
 */
export class LedgerJournalHeadersCdsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerJournalHeadersCds<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerJournalHeadersCds` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerJournalHeadersCds` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerJournalHeadersCds<T>, T> {
    return new GetAllRequestBuilder<LedgerJournalHeadersCds<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerJournalHeadersCds` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerJournalHeadersCds`.
   */
  create(
    entity: LedgerJournalHeadersCds<T>
  ): CreateRequestBuilder<LedgerJournalHeadersCds<T>, T> {
    return new CreateRequestBuilder<LedgerJournalHeadersCds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerJournalHeadersCds` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerJournalHeadersCds.dataAreaId}.
   * @param integrationComputedKey Key property. See {@link LedgerJournalHeadersCds.integrationComputedKey}.
   * @returns A request builder for creating requests to retrieve one `LedgerJournalHeadersCds` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    integrationComputedKey: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LedgerJournalHeadersCds<T>, T> {
    return new GetByKeyRequestBuilder<LedgerJournalHeadersCds<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        IntegrationComputedKey: integrationComputedKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerJournalHeadersCds`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerJournalHeadersCds`.
   */
  update(
    entity: LedgerJournalHeadersCds<T>
  ): UpdateRequestBuilder<LedgerJournalHeadersCds<T>, T> {
    return new UpdateRequestBuilder<LedgerJournalHeadersCds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalHeadersCds`.
   * @param dataAreaId Key property. See {@link LedgerJournalHeadersCds.dataAreaId}.
   * @param integrationComputedKey Key property. See {@link LedgerJournalHeadersCds.integrationComputedKey}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalHeadersCds`.
   */
  delete(
    dataAreaId: string,
    integrationComputedKey: string
  ): DeleteRequestBuilder<LedgerJournalHeadersCds<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalHeadersCds`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalHeadersCds` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerJournalHeadersCds<T>
  ): DeleteRequestBuilder<LedgerJournalHeadersCds<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    integrationComputedKey?: string
  ): DeleteRequestBuilder<LedgerJournalHeadersCds<T>, T> {
    return new DeleteRequestBuilder<LedgerJournalHeadersCds<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerJournalHeadersCds
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            IntegrationComputedKey: integrationComputedKey!
          }
    );
  }
}
