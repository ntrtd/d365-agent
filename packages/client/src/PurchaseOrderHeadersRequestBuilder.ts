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
import { PurchaseOrderHeaders } from './PurchaseOrderHeaders';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderHeaders} entity.
 */
export class PurchaseOrderHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderHeaders<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderHeaders`.
   */
  create(
    entity: PurchaseOrderHeaders<T>
  ): CreateRequestBuilder<PurchaseOrderHeaders<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseOrderHeaders.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderHeaders.purchaseOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchaseOrderHeaders<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrderHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseOrderNumber: purchaseOrderNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderHeaders`.
   */
  update(
    entity: PurchaseOrderHeaders<T>
  ): UpdateRequestBuilder<PurchaseOrderHeaders<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderHeaders`.
   * @param dataAreaId Key property. See {@link PurchaseOrderHeaders.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderHeaders.purchaseOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderHeaders`.
   */
  delete(
    dataAreaId: string,
    purchaseOrderNumber: string
  ): DeleteRequestBuilder<PurchaseOrderHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderHeaders<T>
  ): DeleteRequestBuilder<PurchaseOrderHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseOrderNumber?: string
  ): DeleteRequestBuilder<PurchaseOrderHeaders<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseOrderHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseOrderNumber: purchaseOrderNumber!
          }
    );
  }
}
