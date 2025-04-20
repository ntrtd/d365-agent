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
import { SadDocumentLinePurchaseOrders } from './SadDocumentLinePurchaseOrders';

/**
 * Request builder class for operations supported on the {@link SadDocumentLinePurchaseOrders} entity.
 */
export class SadDocumentLinePurchaseOrdersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SadDocumentLinePurchaseOrders<T>, T> {
  /**
   * Returns a request builder for querying all `SadDocumentLinePurchaseOrders` entities.
   * @returns A request builder for creating requests to retrieve all `SadDocumentLinePurchaseOrders` entities.
   */
  getAll(): GetAllRequestBuilder<SadDocumentLinePurchaseOrders<T>, T> {
    return new GetAllRequestBuilder<SadDocumentLinePurchaseOrders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SadDocumentLinePurchaseOrders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SadDocumentLinePurchaseOrders`.
   */
  create(
    entity: SadDocumentLinePurchaseOrders<T>
  ): CreateRequestBuilder<SadDocumentLinePurchaseOrders<T>, T> {
    return new CreateRequestBuilder<SadDocumentLinePurchaseOrders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SadDocumentLinePurchaseOrders` entity based on its keys.
   * @param dataAreaId Key property. See {@link SadDocumentLinePurchaseOrders.dataAreaId}.
   * @param documentCode Key property. See {@link SadDocumentLinePurchaseOrders.documentCode}.
   * @param position Key property. See {@link SadDocumentLinePurchaseOrders.position}.
   * @returns A request builder for creating requests to retrieve one `SadDocumentLinePurchaseOrders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentCode: DeserializedType<T, 'Edm.String'>,
    position: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<SadDocumentLinePurchaseOrders<T>, T> {
    return new GetByKeyRequestBuilder<SadDocumentLinePurchaseOrders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DocumentCode: documentCode,
        Position: position
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SadDocumentLinePurchaseOrders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SadDocumentLinePurchaseOrders`.
   */
  update(
    entity: SadDocumentLinePurchaseOrders<T>
  ): UpdateRequestBuilder<SadDocumentLinePurchaseOrders<T>, T> {
    return new UpdateRequestBuilder<SadDocumentLinePurchaseOrders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SadDocumentLinePurchaseOrders`.
   * @param dataAreaId Key property. See {@link SadDocumentLinePurchaseOrders.dataAreaId}.
   * @param documentCode Key property. See {@link SadDocumentLinePurchaseOrders.documentCode}.
   * @param position Key property. See {@link SadDocumentLinePurchaseOrders.position}.
   * @returns A request builder for creating requests that delete an entity of type `SadDocumentLinePurchaseOrders`.
   */
  delete(
    dataAreaId: string,
    documentCode: string,
    position: number
  ): DeleteRequestBuilder<SadDocumentLinePurchaseOrders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SadDocumentLinePurchaseOrders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SadDocumentLinePurchaseOrders` by taking the entity as a parameter.
   */
  delete(
    entity: SadDocumentLinePurchaseOrders<T>
  ): DeleteRequestBuilder<SadDocumentLinePurchaseOrders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentCode?: string,
    position?: number
  ): DeleteRequestBuilder<SadDocumentLinePurchaseOrders<T>, T> {
    return new DeleteRequestBuilder<SadDocumentLinePurchaseOrders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SadDocumentLinePurchaseOrders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentCode: documentCode!,
            Position: position!
          }
    );
  }
}
