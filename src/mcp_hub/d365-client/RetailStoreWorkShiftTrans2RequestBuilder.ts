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
import { RetailStoreWorkShiftTrans2 } from './RetailStoreWorkShiftTrans2';

/**
 * Request builder class for operations supported on the {@link RetailStoreWorkShiftTrans2} entity.
 */
export class RetailStoreWorkShiftTrans2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailStoreWorkShiftTrans2<T>, T> {
  /**
   * Returns a request builder for querying all `RetailStoreWorkShiftTrans2` entities.
   * @returns A request builder for creating requests to retrieve all `RetailStoreWorkShiftTrans2` entities.
   */
  getAll(): GetAllRequestBuilder<RetailStoreWorkShiftTrans2<T>, T> {
    return new GetAllRequestBuilder<RetailStoreWorkShiftTrans2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailStoreWorkShiftTrans2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailStoreWorkShiftTrans2`.
   */
  create(
    entity: RetailStoreWorkShiftTrans2<T>
  ): CreateRequestBuilder<RetailStoreWorkShiftTrans2<T>, T> {
    return new CreateRequestBuilder<RetailStoreWorkShiftTrans2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailStoreWorkShiftTrans2` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailStoreWorkShiftTrans2.dataAreaId}.
   * @param shiftId Key property. See {@link RetailStoreWorkShiftTrans2.shiftId}.
   * @param shiftDate Key property. See {@link RetailStoreWorkShiftTrans2.shiftDate}.
   * @param statementCode Key property. See {@link RetailStoreWorkShiftTrans2.statementCode}.
   * @param storeNumber Key property. See {@link RetailStoreWorkShiftTrans2.storeNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailStoreWorkShiftTrans2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shiftId: DeserializedType<T, 'Edm.String'>,
    shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    statementCode: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailStoreWorkShiftTrans2<T>, T> {
    return new GetByKeyRequestBuilder<RetailStoreWorkShiftTrans2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShiftId: shiftId,
        ShiftDate: shiftDate,
        StatementCode: statementCode,
        StoreNumber: storeNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailStoreWorkShiftTrans2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailStoreWorkShiftTrans2`.
   */
  update(
    entity: RetailStoreWorkShiftTrans2<T>
  ): UpdateRequestBuilder<RetailStoreWorkShiftTrans2<T>, T> {
    return new UpdateRequestBuilder<RetailStoreWorkShiftTrans2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailStoreWorkShiftTrans2`.
   * @param dataAreaId Key property. See {@link RetailStoreWorkShiftTrans2.dataAreaId}.
   * @param shiftId Key property. See {@link RetailStoreWorkShiftTrans2.shiftId}.
   * @param shiftDate Key property. See {@link RetailStoreWorkShiftTrans2.shiftDate}.
   * @param statementCode Key property. See {@link RetailStoreWorkShiftTrans2.statementCode}.
   * @param storeNumber Key property. See {@link RetailStoreWorkShiftTrans2.storeNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreWorkShiftTrans2`.
   */
  delete(
    dataAreaId: string,
    shiftId: string,
    shiftDate: Moment,
    statementCode: string,
    storeNumber: string
  ): DeleteRequestBuilder<RetailStoreWorkShiftTrans2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailStoreWorkShiftTrans2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreWorkShiftTrans2` by taking the entity as a parameter.
   */
  delete(
    entity: RetailStoreWorkShiftTrans2<T>
  ): DeleteRequestBuilder<RetailStoreWorkShiftTrans2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shiftId?: string,
    shiftDate?: Moment,
    statementCode?: string,
    storeNumber?: string
  ): DeleteRequestBuilder<RetailStoreWorkShiftTrans2<T>, T> {
    return new DeleteRequestBuilder<RetailStoreWorkShiftTrans2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailStoreWorkShiftTrans2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShiftId: shiftId!,
            ShiftDate: shiftDate!,
            StatementCode: statementCode!,
            StoreNumber: storeNumber!
          }
    );
  }
}
