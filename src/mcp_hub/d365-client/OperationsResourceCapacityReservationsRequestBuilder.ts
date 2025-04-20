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
import { OperationsResourceCapacityReservations } from './OperationsResourceCapacityReservations';

/**
 * Request builder class for operations supported on the {@link OperationsResourceCapacityReservations} entity.
 */
export class OperationsResourceCapacityReservationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OperationsResourceCapacityReservations<T>, T> {
  /**
   * Returns a request builder for querying all `OperationsResourceCapacityReservations` entities.
   * @returns A request builder for creating requests to retrieve all `OperationsResourceCapacityReservations` entities.
   */
  getAll(): GetAllRequestBuilder<OperationsResourceCapacityReservations<T>, T> {
    return new GetAllRequestBuilder<
      OperationsResourceCapacityReservations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OperationsResourceCapacityReservations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OperationsResourceCapacityReservations`.
   */
  create(
    entity: OperationsResourceCapacityReservations<T>
  ): CreateRequestBuilder<OperationsResourceCapacityReservations<T>, T> {
    return new CreateRequestBuilder<
      OperationsResourceCapacityReservations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `OperationsResourceCapacityReservations` entity based on its keys.
   * @param dataAreaId Key property. See {@link OperationsResourceCapacityReservations.dataAreaId}.
   * @param recordId Key property. See {@link OperationsResourceCapacityReservations.recordId}.
   * @returns A request builder for creating requests to retrieve one `OperationsResourceCapacityReservations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<OperationsResourceCapacityReservations<T>, T> {
    return new GetByKeyRequestBuilder<
      OperationsResourceCapacityReservations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      RecordId: recordId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `OperationsResourceCapacityReservations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OperationsResourceCapacityReservations`.
   */
  update(
    entity: OperationsResourceCapacityReservations<T>
  ): UpdateRequestBuilder<OperationsResourceCapacityReservations<T>, T> {
    return new UpdateRequestBuilder<
      OperationsResourceCapacityReservations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `OperationsResourceCapacityReservations`.
   * @param dataAreaId Key property. See {@link OperationsResourceCapacityReservations.dataAreaId}.
   * @param recordId Key property. See {@link OperationsResourceCapacityReservations.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `OperationsResourceCapacityReservations`.
   */
  delete(
    dataAreaId: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<OperationsResourceCapacityReservations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OperationsResourceCapacityReservations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OperationsResourceCapacityReservations` by taking the entity as a parameter.
   */
  delete(
    entity: OperationsResourceCapacityReservations<T>
  ): DeleteRequestBuilder<OperationsResourceCapacityReservations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recordId?: BigNumber
  ): DeleteRequestBuilder<OperationsResourceCapacityReservations<T>, T> {
    return new DeleteRequestBuilder<
      OperationsResourceCapacityReservations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof OperationsResourceCapacityReservations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecordId: recordId!
          }
    );
  }
}
