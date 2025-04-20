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
import { RetailRecoListElements } from './RetailRecoListElements';
import { RetailRecoListElementTypeBase } from './RetailRecoListElementTypeBase';

/**
 * Request builder class for operations supported on the {@link RetailRecoListElements} entity.
 */
export class RetailRecoListElementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailRecoListElements<T>, T> {
  /**
   * Returns a request builder for querying all `RetailRecoListElements` entities.
   * @returns A request builder for creating requests to retrieve all `RetailRecoListElements` entities.
   */
  getAll(): GetAllRequestBuilder<RetailRecoListElements<T>, T> {
    return new GetAllRequestBuilder<RetailRecoListElements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailRecoListElements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailRecoListElements`.
   */
  create(
    entity: RetailRecoListElements<T>
  ): CreateRequestBuilder<RetailRecoListElements<T>, T> {
    return new CreateRequestBuilder<RetailRecoListElements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailRecoListElements` entity based on its keys.
   * @param listId Key property. See {@link RetailRecoListElements.listId}.
   * @param elementType Key property. See {@link RetailRecoListElements.elementType}.
   * @param productNumber Key property. See {@link RetailRecoListElements.productNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailRecoListElements` entity based on its keys.
   */
  getByKey(
    listId: DeserializedType<T, 'Edm.String'>,
    elementType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailRecoListElementTypeBase'
    >,
    productNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailRecoListElements<T>, T> {
    return new GetByKeyRequestBuilder<RetailRecoListElements<T>, T>(
      this.entityApi,
      {
        ListId: listId,
        ElementType: elementType,
        ProductNumber: productNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailRecoListElements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailRecoListElements`.
   */
  update(
    entity: RetailRecoListElements<T>
  ): UpdateRequestBuilder<RetailRecoListElements<T>, T> {
    return new UpdateRequestBuilder<RetailRecoListElements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailRecoListElements`.
   * @param listId Key property. See {@link RetailRecoListElements.listId}.
   * @param elementType Key property. See {@link RetailRecoListElements.elementType}.
   * @param productNumber Key property. See {@link RetailRecoListElements.productNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailRecoListElements`.
   */
  delete(
    listId: string,
    elementType: RetailRecoListElementTypeBase,
    productNumber: string
  ): DeleteRequestBuilder<RetailRecoListElements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailRecoListElements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailRecoListElements` by taking the entity as a parameter.
   */
  delete(
    entity: RetailRecoListElements<T>
  ): DeleteRequestBuilder<RetailRecoListElements<T>, T>;
  delete(
    listIdOrEntity: any,
    elementType?: RetailRecoListElementTypeBase,
    productNumber?: string
  ): DeleteRequestBuilder<RetailRecoListElements<T>, T> {
    return new DeleteRequestBuilder<RetailRecoListElements<T>, T>(
      this.entityApi,
      listIdOrEntity instanceof RetailRecoListElements
        ? listIdOrEntity
        : {
            ListId: listIdOrEntity!,
            ElementType: elementType!,
            ProductNumber: productNumber!
          }
    );
  }
}
