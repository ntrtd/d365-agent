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
import { RetailSalesLineBiEntities } from './RetailSalesLineBiEntities';
import { RetailFulfillmentLineStatus } from './RetailFulfillmentLineStatus';
import { RetailSalesLineQuantityColumnsVersion } from './RetailSalesLineQuantityColumnsVersion';

/**
 * Request builder class for operations supported on the {@link RetailSalesLineBiEntities} entity.
 */
export class RetailSalesLineBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailSalesLineBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailSalesLineBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailSalesLineBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<RetailSalesLineBiEntities<T>, T> {
    return new GetAllRequestBuilder<RetailSalesLineBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailSalesLineBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailSalesLineBiEntities`.
   */
  create(
    entity: RetailSalesLineBiEntities<T>
  ): CreateRequestBuilder<RetailSalesLineBiEntities<T>, T> {
    return new CreateRequestBuilder<RetailSalesLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailSalesLineBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailSalesLineBiEntities.dataAreaId}.
   * @param salesLine Key property. See {@link RetailSalesLineBiEntities.salesLine}.
   * @param fulfillmentStatus Key property. See {@link RetailSalesLineBiEntities.fulfillmentStatus}.
   * @param fulfillmentStoreId Key property. See {@link RetailSalesLineBiEntities.fulfillmentStoreId}.
   * @param pickupEndTime Key property. See {@link RetailSalesLineBiEntities.pickupEndTime}.
   * @param pickupStartTime Key property. See {@link RetailSalesLineBiEntities.pickupStartTime}.
   * @param quantityPicked Key property. See {@link RetailSalesLineBiEntities.quantityPicked}.
   * @param quantityPacked Key property. See {@link RetailSalesLineBiEntities.quantityPacked}.
   * @param quantityInvoiced Key property. See {@link RetailSalesLineBiEntities.quantityInvoiced}.
   * @param quantityNotProcessed Key property. See {@link RetailSalesLineBiEntities.quantityNotProcessed}.
   * @param quantityColumnsVersion Key property. See {@link RetailSalesLineBiEntities.quantityColumnsVersion}.
   * @param quantityPhysicallyReserved Key property. See {@link RetailSalesLineBiEntities.quantityPhysicallyReserved}.
   * @returns A request builder for creating requests to retrieve one `RetailSalesLineBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesLine: DeserializedType<T, 'Edm.Int64'>,
    fulfillmentStatus: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailFulfillmentLineStatus'
    >,
    fulfillmentStoreId: DeserializedType<T, 'Edm.String'>,
    pickupEndTime: DeserializedType<T, 'Edm.Int32'>,
    pickupStartTime: DeserializedType<T, 'Edm.Int32'>,
    quantityPicked: DeserializedType<T, 'Edm.Decimal'>,
    quantityPacked: DeserializedType<T, 'Edm.Decimal'>,
    quantityInvoiced: DeserializedType<T, 'Edm.Decimal'>,
    quantityNotProcessed: DeserializedType<T, 'Edm.Decimal'>,
    quantityColumnsVersion: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailSalesLineQuantityColumnsVersion'
    >,
    quantityPhysicallyReserved: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailSalesLineBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<RetailSalesLineBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesLine: salesLine,
        FulfillmentStatus: fulfillmentStatus,
        FulfillmentStoreId: fulfillmentStoreId,
        PickupEndTime: pickupEndTime,
        PickupStartTime: pickupStartTime,
        QuantityPicked: quantityPicked,
        QuantityPacked: quantityPacked,
        QuantityInvoiced: quantityInvoiced,
        QuantityNotProcessed: quantityNotProcessed,
        QuantityColumnsVersion: quantityColumnsVersion,
        QuantityPhysicallyReserved: quantityPhysicallyReserved
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailSalesLineBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailSalesLineBiEntities`.
   */
  update(
    entity: RetailSalesLineBiEntities<T>
  ): UpdateRequestBuilder<RetailSalesLineBiEntities<T>, T> {
    return new UpdateRequestBuilder<RetailSalesLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailSalesLineBiEntities`.
   * @param dataAreaId Key property. See {@link RetailSalesLineBiEntities.dataAreaId}.
   * @param salesLine Key property. See {@link RetailSalesLineBiEntities.salesLine}.
   * @param fulfillmentStatus Key property. See {@link RetailSalesLineBiEntities.fulfillmentStatus}.
   * @param fulfillmentStoreId Key property. See {@link RetailSalesLineBiEntities.fulfillmentStoreId}.
   * @param pickupEndTime Key property. See {@link RetailSalesLineBiEntities.pickupEndTime}.
   * @param pickupStartTime Key property. See {@link RetailSalesLineBiEntities.pickupStartTime}.
   * @param quantityPicked Key property. See {@link RetailSalesLineBiEntities.quantityPicked}.
   * @param quantityPacked Key property. See {@link RetailSalesLineBiEntities.quantityPacked}.
   * @param quantityInvoiced Key property. See {@link RetailSalesLineBiEntities.quantityInvoiced}.
   * @param quantityNotProcessed Key property. See {@link RetailSalesLineBiEntities.quantityNotProcessed}.
   * @param quantityColumnsVersion Key property. See {@link RetailSalesLineBiEntities.quantityColumnsVersion}.
   * @param quantityPhysicallyReserved Key property. See {@link RetailSalesLineBiEntities.quantityPhysicallyReserved}.
   * @returns A request builder for creating requests that delete an entity of type `RetailSalesLineBiEntities`.
   */
  delete(
    dataAreaId: string,
    salesLine: BigNumber,
    fulfillmentStatus: RetailFulfillmentLineStatus,
    fulfillmentStoreId: string,
    pickupEndTime: number,
    pickupStartTime: number,
    quantityPicked: BigNumber,
    quantityPacked: BigNumber,
    quantityInvoiced: BigNumber,
    quantityNotProcessed: BigNumber,
    quantityColumnsVersion: RetailSalesLineQuantityColumnsVersion,
    quantityPhysicallyReserved: BigNumber
  ): DeleteRequestBuilder<RetailSalesLineBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailSalesLineBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailSalesLineBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailSalesLineBiEntities<T>
  ): DeleteRequestBuilder<RetailSalesLineBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesLine?: BigNumber,
    fulfillmentStatus?: RetailFulfillmentLineStatus,
    fulfillmentStoreId?: string,
    pickupEndTime?: number,
    pickupStartTime?: number,
    quantityPicked?: BigNumber,
    quantityPacked?: BigNumber,
    quantityInvoiced?: BigNumber,
    quantityNotProcessed?: BigNumber,
    quantityColumnsVersion?: RetailSalesLineQuantityColumnsVersion,
    quantityPhysicallyReserved?: BigNumber
  ): DeleteRequestBuilder<RetailSalesLineBiEntities<T>, T> {
    return new DeleteRequestBuilder<RetailSalesLineBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailSalesLineBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesLine: salesLine!,
            FulfillmentStatus: fulfillmentStatus!,
            FulfillmentStoreId: fulfillmentStoreId!,
            PickupEndTime: pickupEndTime!,
            PickupStartTime: pickupStartTime!,
            QuantityPicked: quantityPicked!,
            QuantityPacked: quantityPacked!,
            QuantityInvoiced: quantityInvoiced!,
            QuantityNotProcessed: quantityNotProcessed!,
            QuantityColumnsVersion: quantityColumnsVersion!,
            QuantityPhysicallyReserved: quantityPhysicallyReserved!
          }
    );
  }
}
