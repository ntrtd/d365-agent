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
import { TransportationTenderHistories } from './TransportationTenderHistories';

/**
 * Request builder class for operations supported on the {@link TransportationTenderHistories} entity.
 */
export class TransportationTenderHistoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransportationTenderHistories<T>, T> {
  /**
   * Returns a request builder for querying all `TransportationTenderHistories` entities.
   * @returns A request builder for creating requests to retrieve all `TransportationTenderHistories` entities.
   */
  getAll(): GetAllRequestBuilder<TransportationTenderHistories<T>, T> {
    return new GetAllRequestBuilder<TransportationTenderHistories<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransportationTenderHistories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransportationTenderHistories`.
   */
  create(
    entity: TransportationTenderHistories<T>
  ): CreateRequestBuilder<TransportationTenderHistories<T>, T> {
    return new CreateRequestBuilder<TransportationTenderHistories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransportationTenderHistories` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransportationTenderHistories.dataAreaId}.
   * @param transportationTenderId Key property. See {@link TransportationTenderHistories.transportationTenderId}.
   * @param transportationTenderHistoryEntryNumber Key property. See {@link TransportationTenderHistories.transportationTenderHistoryEntryNumber}.
   * @returns A request builder for creating requests to retrieve one `TransportationTenderHistories` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transportationTenderId: DeserializedType<T, 'Edm.String'>,
    transportationTenderHistoryEntryNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<TransportationTenderHistories<T>, T> {
    return new GetByKeyRequestBuilder<TransportationTenderHistories<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransportationTenderId: transportationTenderId,
        TransportationTenderHistoryEntryNumber:
          transportationTenderHistoryEntryNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransportationTenderHistories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransportationTenderHistories`.
   */
  update(
    entity: TransportationTenderHistories<T>
  ): UpdateRequestBuilder<TransportationTenderHistories<T>, T> {
    return new UpdateRequestBuilder<TransportationTenderHistories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransportationTenderHistories`.
   * @param dataAreaId Key property. See {@link TransportationTenderHistories.dataAreaId}.
   * @param transportationTenderId Key property. See {@link TransportationTenderHistories.transportationTenderId}.
   * @param transportationTenderHistoryEntryNumber Key property. See {@link TransportationTenderHistories.transportationTenderHistoryEntryNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TransportationTenderHistories`.
   */
  delete(
    dataAreaId: string,
    transportationTenderId: string,
    transportationTenderHistoryEntryNumber: BigNumber
  ): DeleteRequestBuilder<TransportationTenderHistories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransportationTenderHistories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransportationTenderHistories` by taking the entity as a parameter.
   */
  delete(
    entity: TransportationTenderHistories<T>
  ): DeleteRequestBuilder<TransportationTenderHistories<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transportationTenderId?: string,
    transportationTenderHistoryEntryNumber?: BigNumber
  ): DeleteRequestBuilder<TransportationTenderHistories<T>, T> {
    return new DeleteRequestBuilder<TransportationTenderHistories<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransportationTenderHistories
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransportationTenderId: transportationTenderId!,
            TransportationTenderHistoryEntryNumber:
              transportationTenderHistoryEntryNumber!
          }
    );
  }
}
