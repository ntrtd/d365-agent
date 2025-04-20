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
import { LtmLedgerJournalNames } from './LtmLedgerJournalNames';

/**
 * Request builder class for operations supported on the {@link LtmLedgerJournalNames} entity.
 */
export class LtmLedgerJournalNamesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmLedgerJournalNames<T>, T> {
  /**
   * Returns a request builder for querying all `LtmLedgerJournalNames` entities.
   * @returns A request builder for creating requests to retrieve all `LtmLedgerJournalNames` entities.
   */
  getAll(): GetAllRequestBuilder<LtmLedgerJournalNames<T>, T> {
    return new GetAllRequestBuilder<LtmLedgerJournalNames<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LtmLedgerJournalNames` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmLedgerJournalNames`.
   */
  create(
    entity: LtmLedgerJournalNames<T>
  ): CreateRequestBuilder<LtmLedgerJournalNames<T>, T> {
    return new CreateRequestBuilder<LtmLedgerJournalNames<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmLedgerJournalNames` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmLedgerJournalNames.dataAreaId}.
   * @param journalNameId Key property. See {@link LtmLedgerJournalNames.journalNameId}.
   * @returns A request builder for creating requests to retrieve one `LtmLedgerJournalNames` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNameId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmLedgerJournalNames<T>, T> {
    return new GetByKeyRequestBuilder<LtmLedgerJournalNames<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalNameId: journalNameId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmLedgerJournalNames`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmLedgerJournalNames`.
   */
  update(
    entity: LtmLedgerJournalNames<T>
  ): UpdateRequestBuilder<LtmLedgerJournalNames<T>, T> {
    return new UpdateRequestBuilder<LtmLedgerJournalNames<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmLedgerJournalNames`.
   * @param dataAreaId Key property. See {@link LtmLedgerJournalNames.dataAreaId}.
   * @param journalNameId Key property. See {@link LtmLedgerJournalNames.journalNameId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmLedgerJournalNames`.
   */
  delete(
    dataAreaId: string,
    journalNameId: string
  ): DeleteRequestBuilder<LtmLedgerJournalNames<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmLedgerJournalNames`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmLedgerJournalNames` by taking the entity as a parameter.
   */
  delete(
    entity: LtmLedgerJournalNames<T>
  ): DeleteRequestBuilder<LtmLedgerJournalNames<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNameId?: string
  ): DeleteRequestBuilder<LtmLedgerJournalNames<T>, T> {
    return new DeleteRequestBuilder<LtmLedgerJournalNames<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmLedgerJournalNames
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNameId: journalNameId!
          }
    );
  }
}
