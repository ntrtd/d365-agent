/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { SadDocumentLedgerJournals } from './SadDocumentLedgerJournals';

/**
 * Request builder class for operations supported on the {@link SadDocumentLedgerJournals} entity.
 */
export class SadDocumentLedgerJournalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SadDocumentLedgerJournals<T>, T> {
  /**
   * Returns a request builder for querying all `SadDocumentLedgerJournals` entities.
   * @returns A request builder for creating requests to retrieve all `SadDocumentLedgerJournals` entities.
   */
  getAll(): GetAllRequestBuilder<SadDocumentLedgerJournals<T>, T> {
    return new GetAllRequestBuilder<SadDocumentLedgerJournals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SadDocumentLedgerJournals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SadDocumentLedgerJournals`.
   */
  create(
    entity: SadDocumentLedgerJournals<T>
  ): CreateRequestBuilder<SadDocumentLedgerJournals<T>, T> {
    return new CreateRequestBuilder<SadDocumentLedgerJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SadDocumentLedgerJournals` entity based on its keys.
   * @param dataAreaId Key property. See {@link SadDocumentLedgerJournals.dataAreaId}.
   * @param sadNumber Key property. See {@link SadDocumentLedgerJournals.sadNumber}.
   * @param sadDate Key property. See {@link SadDocumentLedgerJournals.sadDate}.
   * @returns A request builder for creating requests to retrieve one `SadDocumentLedgerJournals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sadNumber: DeserializedType<T, 'Edm.String'>,
    sadDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<SadDocumentLedgerJournals<T>, T> {
    return new GetByKeyRequestBuilder<SadDocumentLedgerJournals<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SADNumber: sadNumber,
        SADDate: sadDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SadDocumentLedgerJournals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SadDocumentLedgerJournals`.
   */
  update(
    entity: SadDocumentLedgerJournals<T>
  ): UpdateRequestBuilder<SadDocumentLedgerJournals<T>, T> {
    return new UpdateRequestBuilder<SadDocumentLedgerJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SadDocumentLedgerJournals`.
   * @param dataAreaId Key property. See {@link SadDocumentLedgerJournals.dataAreaId}.
   * @param sadNumber Key property. See {@link SadDocumentLedgerJournals.sadNumber}.
   * @param sadDate Key property. See {@link SadDocumentLedgerJournals.sadDate}.
   * @returns A request builder for creating requests that delete an entity of type `SadDocumentLedgerJournals`.
   */
  delete(
    dataAreaId: string,
    sadNumber: string,
    sadDate: Moment
  ): DeleteRequestBuilder<SadDocumentLedgerJournals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SadDocumentLedgerJournals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SadDocumentLedgerJournals` by taking the entity as a parameter.
   */
  delete(
    entity: SadDocumentLedgerJournals<T>
  ): DeleteRequestBuilder<SadDocumentLedgerJournals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sadNumber?: string,
    sadDate?: Moment
  ): DeleteRequestBuilder<SadDocumentLedgerJournals<T>, T> {
    return new DeleteRequestBuilder<SadDocumentLedgerJournals<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SadDocumentLedgerJournals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SADNumber: sadNumber!,
            SADDate: sadDate!
          }
    );
  }
}
