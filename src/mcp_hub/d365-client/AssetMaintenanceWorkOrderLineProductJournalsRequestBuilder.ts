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
import { AssetMaintenanceWorkOrderLineProductJournals } from './AssetMaintenanceWorkOrderLineProductJournals';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderLineProductJournals} entity.
 */
export class AssetMaintenanceWorkOrderLineProductJournalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderLineProductJournals<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderLineProductJournals` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderLineProductJournals` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceWorkOrderLineProductJournals<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceWorkOrderLineProductJournals<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderLineProductJournals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderLineProductJournals`.
   */
  create(
    entity: AssetMaintenanceWorkOrderLineProductJournals<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderLineProductJournals<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceWorkOrderLineProductJournals<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderLineProductJournals` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLineProductJournals.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderLineProductJournals.workOrderId}.
   * @param workOrderJobNumber Key property. See {@link AssetMaintenanceWorkOrderLineProductJournals.workOrderJobNumber}.
   * @param productConsumptionNumber Key property. See {@link AssetMaintenanceWorkOrderLineProductJournals.productConsumptionNumber}.
   * @param productConsumptionLineNumber Key property. See {@link AssetMaintenanceWorkOrderLineProductJournals.productConsumptionLineNumber}.
   * @param voucher Key property. See {@link AssetMaintenanceWorkOrderLineProductJournals.voucher}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderLineProductJournals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workOrderId: DeserializedType<T, 'Edm.String'>,
    workOrderJobNumber: DeserializedType<T, 'Edm.Int64'>,
    productConsumptionNumber: DeserializedType<T, 'Edm.String'>,
    productConsumptionLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    voucher: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceWorkOrderLineProductJournals<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceWorkOrderLineProductJournals<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      WorkOrderId: workOrderId,
      WorkOrderJobNumber: workOrderJobNumber,
      ProductConsumptionNumber: productConsumptionNumber,
      ProductConsumptionLineNumber: productConsumptionLineNumber,
      Voucher: voucher
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderLineProductJournals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderLineProductJournals`.
   */
  update(
    entity: AssetMaintenanceWorkOrderLineProductJournals<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderLineProductJournals<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceWorkOrderLineProductJournals<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLineProductJournals`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderLineProductJournals.dataAreaId}.
   * @param workOrderId Key property. See {@link AssetMaintenanceWorkOrderLineProductJournals.workOrderId}.
   * @param workOrderJobNumber Key property. See {@link AssetMaintenanceWorkOrderLineProductJournals.workOrderJobNumber}.
   * @param productConsumptionNumber Key property. See {@link AssetMaintenanceWorkOrderLineProductJournals.productConsumptionNumber}.
   * @param productConsumptionLineNumber Key property. See {@link AssetMaintenanceWorkOrderLineProductJournals.productConsumptionLineNumber}.
   * @param voucher Key property. See {@link AssetMaintenanceWorkOrderLineProductJournals.voucher}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLineProductJournals`.
   */
  delete(
    dataAreaId: string,
    workOrderId: string,
    workOrderJobNumber: BigNumber,
    productConsumptionNumber: string,
    productConsumptionLineNumber: BigNumber,
    voucher: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLineProductJournals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderLineProductJournals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderLineProductJournals` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderLineProductJournals<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLineProductJournals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workOrderId?: string,
    workOrderJobNumber?: BigNumber,
    productConsumptionNumber?: string,
    productConsumptionLineNumber?: BigNumber,
    voucher?: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderLineProductJournals<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceWorkOrderLineProductJournals<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkOrderLineProductJournals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkOrderId: workOrderId!,
            WorkOrderJobNumber: workOrderJobNumber!,
            ProductConsumptionNumber: productConsumptionNumber!,
            ProductConsumptionLineNumber: productConsumptionLineNumber!,
            Voucher: voucher!
          }
    );
  }
}
