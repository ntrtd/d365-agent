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
import { RetailCatalogs } from './RetailCatalogs';

/**
 * Request builder class for operations supported on the {@link RetailCatalogs} entity.
 */
export class RetailCatalogsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailCatalogs<T>, T> {
  /**
   * Returns a request builder for querying all `RetailCatalogs` entities.
   * @returns A request builder for creating requests to retrieve all `RetailCatalogs` entities.
   */
  getAll(): GetAllRequestBuilder<RetailCatalogs<T>, T> {
    return new GetAllRequestBuilder<RetailCatalogs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailCatalogs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailCatalogs`.
   */
  create(
    entity: RetailCatalogs<T>
  ): CreateRequestBuilder<RetailCatalogs<T>, T> {
    return new CreateRequestBuilder<RetailCatalogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailCatalogs` entity based on its keys.
   * @param catalogNumber Key property. See {@link RetailCatalogs.catalogNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailCatalogs` entity based on its keys.
   */
  getByKey(
    catalogNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailCatalogs<T>, T> {
    return new GetByKeyRequestBuilder<RetailCatalogs<T>, T>(this.entityApi, {
      CatalogNumber: catalogNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailCatalogs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailCatalogs`.
   */
  update(
    entity: RetailCatalogs<T>
  ): UpdateRequestBuilder<RetailCatalogs<T>, T> {
    return new UpdateRequestBuilder<RetailCatalogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailCatalogs`.
   * @param catalogNumber Key property. See {@link RetailCatalogs.catalogNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailCatalogs`.
   */
  delete(catalogNumber: string): DeleteRequestBuilder<RetailCatalogs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailCatalogs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailCatalogs` by taking the entity as a parameter.
   */
  delete(entity: RetailCatalogs<T>): DeleteRequestBuilder<RetailCatalogs<T>, T>;
  delete(
    catalogNumberOrEntity: any
  ): DeleteRequestBuilder<RetailCatalogs<T>, T> {
    return new DeleteRequestBuilder<RetailCatalogs<T>, T>(
      this.entityApi,
      catalogNumberOrEntity instanceof RetailCatalogs
        ? catalogNumberOrEntity
        : { CatalogNumber: catalogNumberOrEntity! }
    );
  }
}
