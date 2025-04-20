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
import { BudgetReservationTypes } from './BudgetReservationTypes';

/**
 * Request builder class for operations supported on the {@link BudgetReservationTypes} entity.
 */
export class BudgetReservationTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetReservationTypes<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetReservationTypes` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetReservationTypes` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetReservationTypes<T>, T> {
    return new GetAllRequestBuilder<BudgetReservationTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetReservationTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetReservationTypes`.
   */
  create(
    entity: BudgetReservationTypes<T>
  ): CreateRequestBuilder<BudgetReservationTypes<T>, T> {
    return new CreateRequestBuilder<BudgetReservationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetReservationTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetReservationTypes.dataAreaId}.
   * @param reservationType Key property. See {@link BudgetReservationTypes.reservationType}.
   * @returns A request builder for creating requests to retrieve one `BudgetReservationTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reservationType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetReservationTypes<T>, T> {
    return new GetByKeyRequestBuilder<BudgetReservationTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReservationType: reservationType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetReservationTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetReservationTypes`.
   */
  update(
    entity: BudgetReservationTypes<T>
  ): UpdateRequestBuilder<BudgetReservationTypes<T>, T> {
    return new UpdateRequestBuilder<BudgetReservationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetReservationTypes`.
   * @param dataAreaId Key property. See {@link BudgetReservationTypes.dataAreaId}.
   * @param reservationType Key property. See {@link BudgetReservationTypes.reservationType}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetReservationTypes`.
   */
  delete(
    dataAreaId: string,
    reservationType: string
  ): DeleteRequestBuilder<BudgetReservationTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetReservationTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetReservationTypes` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetReservationTypes<T>
  ): DeleteRequestBuilder<BudgetReservationTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reservationType?: string
  ): DeleteRequestBuilder<BudgetReservationTypes<T>, T> {
    return new DeleteRequestBuilder<BudgetReservationTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetReservationTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReservationType: reservationType!
          }
    );
  }
}
