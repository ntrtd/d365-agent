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
import { RetailEcoResProduct } from './RetailEcoResProduct';

/**
 * Request builder class for operations supported on the {@link RetailEcoResProduct} entity.
 */
export class RetailEcoResProductRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailEcoResProduct<T>, T> {
  /**
   * Returns a request builder for querying all `RetailEcoResProduct` entities.
   * @returns A request builder for creating requests to retrieve all `RetailEcoResProduct` entities.
   */
  getAll(): GetAllRequestBuilder<RetailEcoResProduct<T>, T> {
    return new GetAllRequestBuilder<RetailEcoResProduct<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailEcoResProduct` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailEcoResProduct`.
   */
  create(
    entity: RetailEcoResProduct<T>
  ): CreateRequestBuilder<RetailEcoResProduct<T>, T> {
    return new CreateRequestBuilder<RetailEcoResProduct<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailEcoResProduct` entity based on its keys.
   * @param displayProductNumber Key property. See {@link RetailEcoResProduct.displayProductNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailEcoResProduct` entity based on its keys.
   */
  getByKey(
    displayProductNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailEcoResProduct<T>, T> {
    return new GetByKeyRequestBuilder<RetailEcoResProduct<T>, T>(
      this.entityApi,
      { DisplayProductNumber: displayProductNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailEcoResProduct`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailEcoResProduct`.
   */
  update(
    entity: RetailEcoResProduct<T>
  ): UpdateRequestBuilder<RetailEcoResProduct<T>, T> {
    return new UpdateRequestBuilder<RetailEcoResProduct<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailEcoResProduct`.
   * @param displayProductNumber Key property. See {@link RetailEcoResProduct.displayProductNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailEcoResProduct`.
   */
  delete(
    displayProductNumber: string
  ): DeleteRequestBuilder<RetailEcoResProduct<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailEcoResProduct`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailEcoResProduct` by taking the entity as a parameter.
   */
  delete(
    entity: RetailEcoResProduct<T>
  ): DeleteRequestBuilder<RetailEcoResProduct<T>, T>;
  delete(
    displayProductNumberOrEntity: any
  ): DeleteRequestBuilder<RetailEcoResProduct<T>, T> {
    return new DeleteRequestBuilder<RetailEcoResProduct<T>, T>(
      this.entityApi,
      displayProductNumberOrEntity instanceof RetailEcoResProduct
        ? displayProductNumberOrEntity
        : { DisplayProductNumber: displayProductNumberOrEntity! }
    );
  }
}
