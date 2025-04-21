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
import { SadDocumentLineLedgerJournals } from './SadDocumentLineLedgerJournals';

/**
 * Request builder class for operations supported on the {@link SadDocumentLineLedgerJournals} entity.
 */
export class SadDocumentLineLedgerJournalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SadDocumentLineLedgerJournals<T>, T> {
  /**
   * Returns a request builder for querying all `SadDocumentLineLedgerJournals` entities.
   * @returns A request builder for creating requests to retrieve all `SadDocumentLineLedgerJournals` entities.
   */
  getAll(): GetAllRequestBuilder<SadDocumentLineLedgerJournals<T>, T> {
    return new GetAllRequestBuilder<SadDocumentLineLedgerJournals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SadDocumentLineLedgerJournals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SadDocumentLineLedgerJournals`.
   */
  create(
    entity: SadDocumentLineLedgerJournals<T>
  ): CreateRequestBuilder<SadDocumentLineLedgerJournals<T>, T> {
    return new CreateRequestBuilder<SadDocumentLineLedgerJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SadDocumentLineLedgerJournals` entity based on its keys.
   * @param dataAreaId Key property. See {@link SadDocumentLineLedgerJournals.dataAreaId}.
   * @param sadDate Key property. See {@link SadDocumentLineLedgerJournals.sadDate}.
   * @param sadNumber Key property. See {@link SadDocumentLineLedgerJournals.sadNumber}.
   * @param position Key property. See {@link SadDocumentLineLedgerJournals.position}.
   * @returns A request builder for creating requests to retrieve one `SadDocumentLineLedgerJournals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sadDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    sadNumber: DeserializedType<T, 'Edm.String'>,
    position: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<SadDocumentLineLedgerJournals<T>, T> {
    return new GetByKeyRequestBuilder<SadDocumentLineLedgerJournals<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SADDate: sadDate,
        SADNumber: sadNumber,
        Position: position
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SadDocumentLineLedgerJournals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SadDocumentLineLedgerJournals`.
   */
  update(
    entity: SadDocumentLineLedgerJournals<T>
  ): UpdateRequestBuilder<SadDocumentLineLedgerJournals<T>, T> {
    return new UpdateRequestBuilder<SadDocumentLineLedgerJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SadDocumentLineLedgerJournals`.
   * @param dataAreaId Key property. See {@link SadDocumentLineLedgerJournals.dataAreaId}.
   * @param sadDate Key property. See {@link SadDocumentLineLedgerJournals.sadDate}.
   * @param sadNumber Key property. See {@link SadDocumentLineLedgerJournals.sadNumber}.
   * @param position Key property. See {@link SadDocumentLineLedgerJournals.position}.
   * @returns A request builder for creating requests that delete an entity of type `SadDocumentLineLedgerJournals`.
   */
  delete(
    dataAreaId: string,
    sadDate: Moment,
    sadNumber: string,
    position: number
  ): DeleteRequestBuilder<SadDocumentLineLedgerJournals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SadDocumentLineLedgerJournals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SadDocumentLineLedgerJournals` by taking the entity as a parameter.
   */
  delete(
    entity: SadDocumentLineLedgerJournals<T>
  ): DeleteRequestBuilder<SadDocumentLineLedgerJournals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sadDate?: Moment,
    sadNumber?: string,
    position?: number
  ): DeleteRequestBuilder<SadDocumentLineLedgerJournals<T>, T> {
    return new DeleteRequestBuilder<SadDocumentLineLedgerJournals<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SadDocumentLineLedgerJournals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SADDate: sadDate!,
            SADNumber: sadNumber!,
            Position: position!
          }
    );
  }
}
