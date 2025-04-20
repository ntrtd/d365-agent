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
import { SadDocumentInvoicePurchaseOrders } from './SadDocumentInvoicePurchaseOrders';

/**
 * Request builder class for operations supported on the {@link SadDocumentInvoicePurchaseOrders} entity.
 */
export class SadDocumentInvoicePurchaseOrdersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SadDocumentInvoicePurchaseOrders<T>, T> {
  /**
   * Returns a request builder for querying all `SadDocumentInvoicePurchaseOrders` entities.
   * @returns A request builder for creating requests to retrieve all `SadDocumentInvoicePurchaseOrders` entities.
   */
  getAll(): GetAllRequestBuilder<SadDocumentInvoicePurchaseOrders<T>, T> {
    return new GetAllRequestBuilder<SadDocumentInvoicePurchaseOrders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SadDocumentInvoicePurchaseOrders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SadDocumentInvoicePurchaseOrders`.
   */
  create(
    entity: SadDocumentInvoicePurchaseOrders<T>
  ): CreateRequestBuilder<SadDocumentInvoicePurchaseOrders<T>, T> {
    return new CreateRequestBuilder<SadDocumentInvoicePurchaseOrders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SadDocumentInvoicePurchaseOrders` entity based on its keys.
   * @param dataAreaId Key property. See {@link SadDocumentInvoicePurchaseOrders.dataAreaId}.
   * @param documentCode Key property. See {@link SadDocumentInvoicePurchaseOrders.documentCode}.
   * @param position Key property. See {@link SadDocumentInvoicePurchaseOrders.position}.
   * @returns A request builder for creating requests to retrieve one `SadDocumentInvoicePurchaseOrders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentCode: DeserializedType<T, 'Edm.String'>,
    position: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<SadDocumentInvoicePurchaseOrders<T>, T> {
    return new GetByKeyRequestBuilder<SadDocumentInvoicePurchaseOrders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DocumentCode: documentCode,
        Position: position
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SadDocumentInvoicePurchaseOrders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SadDocumentInvoicePurchaseOrders`.
   */
  update(
    entity: SadDocumentInvoicePurchaseOrders<T>
  ): UpdateRequestBuilder<SadDocumentInvoicePurchaseOrders<T>, T> {
    return new UpdateRequestBuilder<SadDocumentInvoicePurchaseOrders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SadDocumentInvoicePurchaseOrders`.
   * @param dataAreaId Key property. See {@link SadDocumentInvoicePurchaseOrders.dataAreaId}.
   * @param documentCode Key property. See {@link SadDocumentInvoicePurchaseOrders.documentCode}.
   * @param position Key property. See {@link SadDocumentInvoicePurchaseOrders.position}.
   * @returns A request builder for creating requests that delete an entity of type `SadDocumentInvoicePurchaseOrders`.
   */
  delete(
    dataAreaId: string,
    documentCode: string,
    position: number
  ): DeleteRequestBuilder<SadDocumentInvoicePurchaseOrders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SadDocumentInvoicePurchaseOrders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SadDocumentInvoicePurchaseOrders` by taking the entity as a parameter.
   */
  delete(
    entity: SadDocumentInvoicePurchaseOrders<T>
  ): DeleteRequestBuilder<SadDocumentInvoicePurchaseOrders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentCode?: string,
    position?: number
  ): DeleteRequestBuilder<SadDocumentInvoicePurchaseOrders<T>, T> {
    return new DeleteRequestBuilder<SadDocumentInvoicePurchaseOrders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SadDocumentInvoicePurchaseOrders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentCode: documentCode!,
            Position: position!
          }
    );
  }
}
