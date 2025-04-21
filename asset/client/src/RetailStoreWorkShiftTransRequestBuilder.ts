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
import { RetailStoreWorkShiftTrans } from './RetailStoreWorkShiftTrans';

/**
 * Request builder class for operations supported on the {@link RetailStoreWorkShiftTrans} entity.
 */
export class RetailStoreWorkShiftTransRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailStoreWorkShiftTrans<T>, T> {
  /**
   * Returns a request builder for querying all `RetailStoreWorkShiftTrans` entities.
   * @returns A request builder for creating requests to retrieve all `RetailStoreWorkShiftTrans` entities.
   */
  getAll(): GetAllRequestBuilder<RetailStoreWorkShiftTrans<T>, T> {
    return new GetAllRequestBuilder<RetailStoreWorkShiftTrans<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailStoreWorkShiftTrans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailStoreWorkShiftTrans`.
   */
  create(
    entity: RetailStoreWorkShiftTrans<T>
  ): CreateRequestBuilder<RetailStoreWorkShiftTrans<T>, T> {
    return new CreateRequestBuilder<RetailStoreWorkShiftTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailStoreWorkShiftTrans` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailStoreWorkShiftTrans.dataAreaId}.
   * @param shiftId Key property. See {@link RetailStoreWorkShiftTrans.shiftId}.
   * @param shiftDate Key property. See {@link RetailStoreWorkShiftTrans.shiftDate}.
   * @param statementCode Key property. See {@link RetailStoreWorkShiftTrans.statementCode}.
   * @param omOperatingUnitNumber Key property. See {@link RetailStoreWorkShiftTrans.omOperatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailStoreWorkShiftTrans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shiftId: DeserializedType<T, 'Edm.String'>,
    shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    statementCode: DeserializedType<T, 'Edm.String'>,
    omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailStoreWorkShiftTrans<T>, T> {
    return new GetByKeyRequestBuilder<RetailStoreWorkShiftTrans<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShiftId: shiftId,
        ShiftDate: shiftDate,
        StatementCode: statementCode,
        OMOperatingUnitNumber: omOperatingUnitNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailStoreWorkShiftTrans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailStoreWorkShiftTrans`.
   */
  update(
    entity: RetailStoreWorkShiftTrans<T>
  ): UpdateRequestBuilder<RetailStoreWorkShiftTrans<T>, T> {
    return new UpdateRequestBuilder<RetailStoreWorkShiftTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailStoreWorkShiftTrans`.
   * @param dataAreaId Key property. See {@link RetailStoreWorkShiftTrans.dataAreaId}.
   * @param shiftId Key property. See {@link RetailStoreWorkShiftTrans.shiftId}.
   * @param shiftDate Key property. See {@link RetailStoreWorkShiftTrans.shiftDate}.
   * @param statementCode Key property. See {@link RetailStoreWorkShiftTrans.statementCode}.
   * @param omOperatingUnitNumber Key property. See {@link RetailStoreWorkShiftTrans.omOperatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreWorkShiftTrans`.
   */
  delete(
    dataAreaId: string,
    shiftId: string,
    shiftDate: Moment,
    statementCode: string,
    omOperatingUnitNumber: string
  ): DeleteRequestBuilder<RetailStoreWorkShiftTrans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailStoreWorkShiftTrans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreWorkShiftTrans` by taking the entity as a parameter.
   */
  delete(
    entity: RetailStoreWorkShiftTrans<T>
  ): DeleteRequestBuilder<RetailStoreWorkShiftTrans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shiftId?: string,
    shiftDate?: Moment,
    statementCode?: string,
    omOperatingUnitNumber?: string
  ): DeleteRequestBuilder<RetailStoreWorkShiftTrans<T>, T> {
    return new DeleteRequestBuilder<RetailStoreWorkShiftTrans<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailStoreWorkShiftTrans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShiftId: shiftId!,
            ShiftDate: shiftDate!,
            StatementCode: statementCode!,
            OMOperatingUnitNumber: omOperatingUnitNumber!
          }
    );
  }
}
