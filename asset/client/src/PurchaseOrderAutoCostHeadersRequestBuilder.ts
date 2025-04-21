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
import { PurchaseOrderAutoCostHeaders } from './PurchaseOrderAutoCostHeaders';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderAutoCostHeaders} entity.
 */
export class PurchaseOrderAutoCostHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderAutoCostHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderAutoCostHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderAutoCostHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderAutoCostHeaders<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderAutoCostHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderAutoCostHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderAutoCostHeaders`.
   */
  create(
    entity: PurchaseOrderAutoCostHeaders<T>
  ): CreateRequestBuilder<PurchaseOrderAutoCostHeaders<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderAutoCostHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderAutoCostHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseOrderAutoCostHeaders.dataAreaId}.
   * @param purchaseOrderCostAutoNumber Key property. See {@link PurchaseOrderAutoCostHeaders.purchaseOrderCostAutoNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderAutoCostHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseOrderCostAutoNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchaseOrderAutoCostHeaders<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrderAutoCostHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseOrderCostAutoNumber: purchaseOrderCostAutoNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderAutoCostHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderAutoCostHeaders`.
   */
  update(
    entity: PurchaseOrderAutoCostHeaders<T>
  ): UpdateRequestBuilder<PurchaseOrderAutoCostHeaders<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderAutoCostHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderAutoCostHeaders`.
   * @param dataAreaId Key property. See {@link PurchaseOrderAutoCostHeaders.dataAreaId}.
   * @param purchaseOrderCostAutoNumber Key property. See {@link PurchaseOrderAutoCostHeaders.purchaseOrderCostAutoNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderAutoCostHeaders`.
   */
  delete(
    dataAreaId: string,
    purchaseOrderCostAutoNumber: string
  ): DeleteRequestBuilder<PurchaseOrderAutoCostHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderAutoCostHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderAutoCostHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderAutoCostHeaders<T>
  ): DeleteRequestBuilder<PurchaseOrderAutoCostHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseOrderCostAutoNumber?: string
  ): DeleteRequestBuilder<PurchaseOrderAutoCostHeaders<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderAutoCostHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseOrderAutoCostHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseOrderCostAutoNumber: purchaseOrderCostAutoNumber!
          }
    );
  }
}
