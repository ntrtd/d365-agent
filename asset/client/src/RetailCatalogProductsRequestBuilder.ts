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
import { RetailCatalogProducts } from './RetailCatalogProducts';

/**
 * Request builder class for operations supported on the {@link RetailCatalogProducts} entity.
 */
export class RetailCatalogProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailCatalogProducts<T>, T> {
  /**
   * Returns a request builder for querying all `RetailCatalogProducts` entities.
   * @returns A request builder for creating requests to retrieve all `RetailCatalogProducts` entities.
   */
  getAll(): GetAllRequestBuilder<RetailCatalogProducts<T>, T> {
    return new GetAllRequestBuilder<RetailCatalogProducts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailCatalogProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailCatalogProducts`.
   */
  create(
    entity: RetailCatalogProducts<T>
  ): CreateRequestBuilder<RetailCatalogProducts<T>, T> {
    return new CreateRequestBuilder<RetailCatalogProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailCatalogProducts` entity based on its keys.
   * @param catalogNumber Key property. See {@link RetailCatalogProducts.catalogNumber}.
   * @param displayProductNumber Key property. See {@link RetailCatalogProducts.displayProductNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailCatalogProducts` entity based on its keys.
   */
  getByKey(
    catalogNumber: DeserializedType<T, 'Edm.String'>,
    displayProductNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailCatalogProducts<T>, T> {
    return new GetByKeyRequestBuilder<RetailCatalogProducts<T>, T>(
      this.entityApi,
      {
        CatalogNumber: catalogNumber,
        DisplayProductNumber: displayProductNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailCatalogProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailCatalogProducts`.
   */
  update(
    entity: RetailCatalogProducts<T>
  ): UpdateRequestBuilder<RetailCatalogProducts<T>, T> {
    return new UpdateRequestBuilder<RetailCatalogProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailCatalogProducts`.
   * @param catalogNumber Key property. See {@link RetailCatalogProducts.catalogNumber}.
   * @param displayProductNumber Key property. See {@link RetailCatalogProducts.displayProductNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailCatalogProducts`.
   */
  delete(
    catalogNumber: string,
    displayProductNumber: string
  ): DeleteRequestBuilder<RetailCatalogProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailCatalogProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailCatalogProducts` by taking the entity as a parameter.
   */
  delete(
    entity: RetailCatalogProducts<T>
  ): DeleteRequestBuilder<RetailCatalogProducts<T>, T>;
  delete(
    catalogNumberOrEntity: any,
    displayProductNumber?: string
  ): DeleteRequestBuilder<RetailCatalogProducts<T>, T> {
    return new DeleteRequestBuilder<RetailCatalogProducts<T>, T>(
      this.entityApi,
      catalogNumberOrEntity instanceof RetailCatalogProducts
        ? catalogNumberOrEntity
        : {
            CatalogNumber: catalogNumberOrEntity!,
            DisplayProductNumber: displayProductNumber!
          }
    );
  }
}
