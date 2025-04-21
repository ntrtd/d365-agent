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
import { RetailStoreWorkShifts } from './RetailStoreWorkShifts';

/**
 * Request builder class for operations supported on the {@link RetailStoreWorkShifts} entity.
 */
export class RetailStoreWorkShiftsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailStoreWorkShifts<T>, T> {
  /**
   * Returns a request builder for querying all `RetailStoreWorkShifts` entities.
   * @returns A request builder for creating requests to retrieve all `RetailStoreWorkShifts` entities.
   */
  getAll(): GetAllRequestBuilder<RetailStoreWorkShifts<T>, T> {
    return new GetAllRequestBuilder<RetailStoreWorkShifts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailStoreWorkShifts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailStoreWorkShifts`.
   */
  create(
    entity: RetailStoreWorkShifts<T>
  ): CreateRequestBuilder<RetailStoreWorkShifts<T>, T> {
    return new CreateRequestBuilder<RetailStoreWorkShifts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailStoreWorkShifts` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailStoreWorkShifts.dataAreaId}.
   * @param shiftDate Key property. See {@link RetailStoreWorkShifts.shiftDate}.
   * @param shiftId Key property. See {@link RetailStoreWorkShifts.shiftId}.
   * @param storeNumber Key property. See {@link RetailStoreWorkShifts.storeNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailStoreWorkShifts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    shiftId: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailStoreWorkShifts<T>, T> {
    return new GetByKeyRequestBuilder<RetailStoreWorkShifts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShiftDate: shiftDate,
        ShiftId: shiftId,
        StoreNumber: storeNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailStoreWorkShifts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailStoreWorkShifts`.
   */
  update(
    entity: RetailStoreWorkShifts<T>
  ): UpdateRequestBuilder<RetailStoreWorkShifts<T>, T> {
    return new UpdateRequestBuilder<RetailStoreWorkShifts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailStoreWorkShifts`.
   * @param dataAreaId Key property. See {@link RetailStoreWorkShifts.dataAreaId}.
   * @param shiftDate Key property. See {@link RetailStoreWorkShifts.shiftDate}.
   * @param shiftId Key property. See {@link RetailStoreWorkShifts.shiftId}.
   * @param storeNumber Key property. See {@link RetailStoreWorkShifts.storeNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreWorkShifts`.
   */
  delete(
    dataAreaId: string,
    shiftDate: Moment,
    shiftId: string,
    storeNumber: string
  ): DeleteRequestBuilder<RetailStoreWorkShifts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailStoreWorkShifts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreWorkShifts` by taking the entity as a parameter.
   */
  delete(
    entity: RetailStoreWorkShifts<T>
  ): DeleteRequestBuilder<RetailStoreWorkShifts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shiftDate?: Moment,
    shiftId?: string,
    storeNumber?: string
  ): DeleteRequestBuilder<RetailStoreWorkShifts<T>, T> {
    return new DeleteRequestBuilder<RetailStoreWorkShifts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailStoreWorkShifts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShiftDate: shiftDate!,
            ShiftId: shiftId!,
            StoreNumber: storeNumber!
          }
    );
  }
}
