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
import { PurchaseOrderResponseHeaders } from './PurchaseOrderResponseHeaders';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderResponseHeaders} entity.
 */
export class PurchaseOrderResponseHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderResponseHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderResponseHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderResponseHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderResponseHeaders<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderResponseHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderResponseHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderResponseHeaders`.
   */
  create(
    entity: PurchaseOrderResponseHeaders<T>
  ): CreateRequestBuilder<PurchaseOrderResponseHeaders<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderResponseHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderResponseHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseOrderResponseHeaders.dataAreaId}.
   * @param purchaseOrderResponseLastModificationDateTime Key property. See {@link PurchaseOrderResponseHeaders.purchaseOrderResponseLastModificationDateTime}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderResponseHeaders.purchaseOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderResponseHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseOrderResponseLastModificationDateTime: DeserializedType<
      T,
      'Edm.DateTimeOffset'
    >,
    purchaseOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchaseOrderResponseHeaders<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrderResponseHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseOrderResponseLastModificationDateTime:
          purchaseOrderResponseLastModificationDateTime,
        PurchaseOrderNumber: purchaseOrderNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderResponseHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderResponseHeaders`.
   */
  update(
    entity: PurchaseOrderResponseHeaders<T>
  ): UpdateRequestBuilder<PurchaseOrderResponseHeaders<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderResponseHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderResponseHeaders`.
   * @param dataAreaId Key property. See {@link PurchaseOrderResponseHeaders.dataAreaId}.
   * @param purchaseOrderResponseLastModificationDateTime Key property. See {@link PurchaseOrderResponseHeaders.purchaseOrderResponseLastModificationDateTime}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderResponseHeaders.purchaseOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderResponseHeaders`.
   */
  delete(
    dataAreaId: string,
    purchaseOrderResponseLastModificationDateTime: Moment,
    purchaseOrderNumber: string
  ): DeleteRequestBuilder<PurchaseOrderResponseHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderResponseHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderResponseHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderResponseHeaders<T>
  ): DeleteRequestBuilder<PurchaseOrderResponseHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseOrderResponseLastModificationDateTime?: Moment,
    purchaseOrderNumber?: string
  ): DeleteRequestBuilder<PurchaseOrderResponseHeaders<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderResponseHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseOrderResponseHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseOrderResponseLastModificationDateTime:
              purchaseOrderResponseLastModificationDateTime!,
            PurchaseOrderNumber: purchaseOrderNumber!
          }
    );
  }
}
