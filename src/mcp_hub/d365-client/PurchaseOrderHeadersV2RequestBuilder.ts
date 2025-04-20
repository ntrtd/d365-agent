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
import { PurchaseOrderHeadersV2 } from './PurchaseOrderHeadersV2';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderHeadersV2} entity.
 */
export class PurchaseOrderHeadersV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderHeadersV2<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderHeadersV2` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderHeadersV2` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderHeadersV2<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderHeadersV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderHeadersV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderHeadersV2`.
   */
  create(
    entity: PurchaseOrderHeadersV2<T>
  ): CreateRequestBuilder<PurchaseOrderHeadersV2<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderHeadersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderHeadersV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseOrderHeadersV2.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderHeadersV2.purchaseOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderHeadersV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchaseOrderHeadersV2<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrderHeadersV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseOrderNumber: purchaseOrderNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderHeadersV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderHeadersV2`.
   */
  update(
    entity: PurchaseOrderHeadersV2<T>
  ): UpdateRequestBuilder<PurchaseOrderHeadersV2<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderHeadersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderHeadersV2`.
   * @param dataAreaId Key property. See {@link PurchaseOrderHeadersV2.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderHeadersV2.purchaseOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderHeadersV2`.
   */
  delete(
    dataAreaId: string,
    purchaseOrderNumber: string
  ): DeleteRequestBuilder<PurchaseOrderHeadersV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderHeadersV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderHeadersV2` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderHeadersV2<T>
  ): DeleteRequestBuilder<PurchaseOrderHeadersV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseOrderNumber?: string
  ): DeleteRequestBuilder<PurchaseOrderHeadersV2<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderHeadersV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseOrderHeadersV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseOrderNumber: purchaseOrderNumber!
          }
    );
  }
}
