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
import { SadDocumentPurchaseOrders } from './SadDocumentPurchaseOrders';

/**
 * Request builder class for operations supported on the {@link SadDocumentPurchaseOrders} entity.
 */
export class SadDocumentPurchaseOrdersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SadDocumentPurchaseOrders<T>, T> {
  /**
   * Returns a request builder for querying all `SadDocumentPurchaseOrders` entities.
   * @returns A request builder for creating requests to retrieve all `SadDocumentPurchaseOrders` entities.
   */
  getAll(): GetAllRequestBuilder<SadDocumentPurchaseOrders<T>, T> {
    return new GetAllRequestBuilder<SadDocumentPurchaseOrders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SadDocumentPurchaseOrders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SadDocumentPurchaseOrders`.
   */
  create(
    entity: SadDocumentPurchaseOrders<T>
  ): CreateRequestBuilder<SadDocumentPurchaseOrders<T>, T> {
    return new CreateRequestBuilder<SadDocumentPurchaseOrders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SadDocumentPurchaseOrders` entity based on its keys.
   * @param dataAreaId Key property. See {@link SadDocumentPurchaseOrders.dataAreaId}.
   * @param documentCode Key property. See {@link SadDocumentPurchaseOrders.documentCode}.
   * @returns A request builder for creating requests to retrieve one `SadDocumentPurchaseOrders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SadDocumentPurchaseOrders<T>, T> {
    return new GetByKeyRequestBuilder<SadDocumentPurchaseOrders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DocumentCode: documentCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SadDocumentPurchaseOrders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SadDocumentPurchaseOrders`.
   */
  update(
    entity: SadDocumentPurchaseOrders<T>
  ): UpdateRequestBuilder<SadDocumentPurchaseOrders<T>, T> {
    return new UpdateRequestBuilder<SadDocumentPurchaseOrders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SadDocumentPurchaseOrders`.
   * @param dataAreaId Key property. See {@link SadDocumentPurchaseOrders.dataAreaId}.
   * @param documentCode Key property. See {@link SadDocumentPurchaseOrders.documentCode}.
   * @returns A request builder for creating requests that delete an entity of type `SadDocumentPurchaseOrders`.
   */
  delete(
    dataAreaId: string,
    documentCode: string
  ): DeleteRequestBuilder<SadDocumentPurchaseOrders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SadDocumentPurchaseOrders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SadDocumentPurchaseOrders` by taking the entity as a parameter.
   */
  delete(
    entity: SadDocumentPurchaseOrders<T>
  ): DeleteRequestBuilder<SadDocumentPurchaseOrders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentCode?: string
  ): DeleteRequestBuilder<SadDocumentPurchaseOrders<T>, T> {
    return new DeleteRequestBuilder<SadDocumentPurchaseOrders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SadDocumentPurchaseOrders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentCode: documentCode!
          }
    );
  }
}
