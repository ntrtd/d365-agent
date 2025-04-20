/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { RetailTmpCatalogMedias } from './RetailTmpCatalogMedias';

/**
 * Request builder class for operations supported on the {@link RetailTmpCatalogMedias} entity.
 */
export class RetailTmpCatalogMediasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTmpCatalogMedias<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTmpCatalogMedias` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTmpCatalogMedias` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTmpCatalogMedias<T>, T> {
    return new GetAllRequestBuilder<RetailTmpCatalogMedias<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTmpCatalogMedias` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTmpCatalogMedias`.
   */
  create(
    entity: RetailTmpCatalogMedias<T>
  ): CreateRequestBuilder<RetailTmpCatalogMedias<T>, T> {
    return new CreateRequestBuilder<RetailTmpCatalogMedias<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTmpCatalogMedias` entity based on its keys.
   * @param catalog Key property. See {@link RetailTmpCatalogMedias.catalog}.
   * @param fileName Key property. See {@link RetailTmpCatalogMedias.fileName}.
   * @returns A request builder for creating requests to retrieve one `RetailTmpCatalogMedias` entity based on its keys.
   */
  getByKey(
    catalog: DeserializedType<T, 'Edm.Int64'>,
    fileName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTmpCatalogMedias<T>, T> {
    return new GetByKeyRequestBuilder<RetailTmpCatalogMedias<T>, T>(
      this.entityApi,
      {
        Catalog: catalog,
        FileName: fileName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTmpCatalogMedias`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTmpCatalogMedias`.
   */
  update(
    entity: RetailTmpCatalogMedias<T>
  ): UpdateRequestBuilder<RetailTmpCatalogMedias<T>, T> {
    return new UpdateRequestBuilder<RetailTmpCatalogMedias<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTmpCatalogMedias`.
   * @param catalog Key property. See {@link RetailTmpCatalogMedias.catalog}.
   * @param fileName Key property. See {@link RetailTmpCatalogMedias.fileName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTmpCatalogMedias`.
   */
  delete(
    catalog: BigNumber,
    fileName: string
  ): DeleteRequestBuilder<RetailTmpCatalogMedias<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTmpCatalogMedias`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTmpCatalogMedias` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTmpCatalogMedias<T>
  ): DeleteRequestBuilder<RetailTmpCatalogMedias<T>, T>;
  delete(
    catalogOrEntity: any,
    fileName?: string
  ): DeleteRequestBuilder<RetailTmpCatalogMedias<T>, T> {
    return new DeleteRequestBuilder<RetailTmpCatalogMedias<T>, T>(
      this.entityApi,
      catalogOrEntity instanceof RetailTmpCatalogMedias
        ? catalogOrEntity
        : {
            Catalog: catalogOrEntity!,
            FileName: fileName!
          }
    );
  }
}
