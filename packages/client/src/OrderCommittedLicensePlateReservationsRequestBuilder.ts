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
import { OrderCommittedLicensePlateReservations } from './OrderCommittedLicensePlateReservations';

/**
 * Request builder class for operations supported on the {@link OrderCommittedLicensePlateReservations} entity.
 */
export class OrderCommittedLicensePlateReservationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OrderCommittedLicensePlateReservations<T>, T> {
  /**
   * Returns a request builder for querying all `OrderCommittedLicensePlateReservations` entities.
   * @returns A request builder for creating requests to retrieve all `OrderCommittedLicensePlateReservations` entities.
   */
  getAll(): GetAllRequestBuilder<OrderCommittedLicensePlateReservations<T>, T> {
    return new GetAllRequestBuilder<
      OrderCommittedLicensePlateReservations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OrderCommittedLicensePlateReservations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OrderCommittedLicensePlateReservations`.
   */
  create(
    entity: OrderCommittedLicensePlateReservations<T>
  ): CreateRequestBuilder<OrderCommittedLicensePlateReservations<T>, T> {
    return new CreateRequestBuilder<
      OrderCommittedLicensePlateReservations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `OrderCommittedLicensePlateReservations` entity based on its keys.
   * @param dataAreaId Key property. See {@link OrderCommittedLicensePlateReservations.dataAreaId}.
   * @param inventoryLotId Key property. See {@link OrderCommittedLicensePlateReservations.inventoryLotId}.
   * @param licensePlateNumber Key property. See {@link OrderCommittedLicensePlateReservations.licensePlateNumber}.
   * @returns A request builder for creating requests to retrieve one `OrderCommittedLicensePlateReservations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventoryLotId: DeserializedType<T, 'Edm.String'>,
    licensePlateNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OrderCommittedLicensePlateReservations<T>, T> {
    return new GetByKeyRequestBuilder<
      OrderCommittedLicensePlateReservations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      InventoryLotId: inventoryLotId,
      LicensePlateNumber: licensePlateNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `OrderCommittedLicensePlateReservations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OrderCommittedLicensePlateReservations`.
   */
  update(
    entity: OrderCommittedLicensePlateReservations<T>
  ): UpdateRequestBuilder<OrderCommittedLicensePlateReservations<T>, T> {
    return new UpdateRequestBuilder<
      OrderCommittedLicensePlateReservations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `OrderCommittedLicensePlateReservations`.
   * @param dataAreaId Key property. See {@link OrderCommittedLicensePlateReservations.dataAreaId}.
   * @param inventoryLotId Key property. See {@link OrderCommittedLicensePlateReservations.inventoryLotId}.
   * @param licensePlateNumber Key property. See {@link OrderCommittedLicensePlateReservations.licensePlateNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OrderCommittedLicensePlateReservations`.
   */
  delete(
    dataAreaId: string,
    inventoryLotId: string,
    licensePlateNumber: string
  ): DeleteRequestBuilder<OrderCommittedLicensePlateReservations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OrderCommittedLicensePlateReservations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OrderCommittedLicensePlateReservations` by taking the entity as a parameter.
   */
  delete(
    entity: OrderCommittedLicensePlateReservations<T>
  ): DeleteRequestBuilder<OrderCommittedLicensePlateReservations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventoryLotId?: string,
    licensePlateNumber?: string
  ): DeleteRequestBuilder<OrderCommittedLicensePlateReservations<T>, T> {
    return new DeleteRequestBuilder<
      OrderCommittedLicensePlateReservations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof OrderCommittedLicensePlateReservations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventoryLotId: inventoryLotId!,
            LicensePlateNumber: licensePlateNumber!
          }
    );
  }
}
