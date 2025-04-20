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
import { AssetMaintenanceWorkOrderLineHourJournals } from './AssetMaintenanceWorkOrderLineHourJournals';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderLineHourJournals} entity.
 */
export class AssetMaintenanceWorkOrderLineHourJournalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderLineHourJournals<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderLineHourJournals` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderLineHourJournals` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceWorkOrderLineHourJournals<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceWorkOrderLineHourJournals<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderLineHourJournals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderLineHourJournals`.
   */
  create(
    entity: AssetMaintenanceWorkOrderLineHourJournals<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderLineHourJournals<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceWorkOrderLineHourJournals<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderLineHourJournals` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLineHourJournals.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderLineHourJournals.workOrderId}.
   * @param workOrderJobNumber Key property. See {@link AssetMaintenanceWorkOrderLineHourJournals.workOrderJobNumber}.
   * @param hourConsumptionNumber Key property. See {@link AssetMaintenanceWorkOrderLineHourJournals.hourConsumptionNumber}.
   * @param hourConsumptionLineNumber Key property. See {@link AssetMaintenanceWorkOrderLineHourJournals.hourConsumptionLineNumber}.
   * @param voucher Key property. See {@link AssetMaintenanceWorkOrderLineHourJournals.voucher}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderLineHourJournals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workOrderId: DeserializedType<T, 'Edm.String'>,
    workOrderJobNumber: DeserializedType<T, 'Edm.Int64'>,
    hourConsumptionNumber: DeserializedType<T, 'Edm.String'>,
    hourConsumptionLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    voucher: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkOrderLineHourJournals<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceWorkOrderLineHourJournals<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      WorkOrderId: workOrderId,
      WorkOrderJobNumber: workOrderJobNumber,
      HourConsumptionNumber: hourConsumptionNumber,
      HourConsumptionLineNumber: hourConsumptionLineNumber,
      Voucher: voucher
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderLineHourJournals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderLineHourJournals`.
   */
  update(
    entity: AssetMaintenanceWorkOrderLineHourJournals<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderLineHourJournals<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceWorkOrderLineHourJournals<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLineHourJournals`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLineHourJournals.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderLineHourJournals.workOrderId}.
   * @param workOrderJobNumber Key property. See {@link AssetMaintenanceWorkOrderLineHourJournals.workOrderJobNumber}.
   * @param hourConsumptionNumber Key property. See {@link AssetMaintenanceWorkOrderLineHourJournals.hourConsumptionNumber}.
   * @param hourConsumptionLineNumber Key property. See {@link AssetMaintenanceWorkOrderLineHourJournals.hourConsumptionLineNumber}.
   * @param voucher Key property. See {@link AssetMaintenanceWorkOrderLineHourJournals.voucher}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLineHourJournals`.
   */
  delete(
    dataAreaId: string,
    workOrderId: string,
    workOrderJobNumber: BigNumber,
    hourConsumptionNumber: string,
    hourConsumptionLineNumber: BigNumber,
    voucher: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLineHourJournals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLineHourJournals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLineHourJournals` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderLineHourJournals<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLineHourJournals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workOrderId?: string,
    workOrderJobNumber?: BigNumber,
    hourConsumptionNumber?: string,
    hourConsumptionLineNumber?: BigNumber,
    voucher?: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLineHourJournals<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceWorkOrderLineHourJournals<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkOrderLineHourJournals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkOrderId: workOrderId!,
            WorkOrderJobNumber: workOrderJobNumber!,
            HourConsumptionNumber: hourConsumptionNumber!,
            HourConsumptionLineNumber: hourConsumptionLineNumber!,
            Voucher: voucher!
          }
    );
  }
}
