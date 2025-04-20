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
import { RetailTmpCatalogProductMedias } from './RetailTmpCatalogProductMedias';

/**
 * Request builder class for operations supported on the {@link RetailTmpCatalogProductMedias} entity.
 */
export class RetailTmpCatalogProductMediasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTmpCatalogProductMedias<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTmpCatalogProductMedias` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTmpCatalogProductMedias` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTmpCatalogProductMedias<T>, T> {
    return new GetAllRequestBuilder<RetailTmpCatalogProductMedias<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTmpCatalogProductMedias` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTmpCatalogProductMedias`.
   */
  create(
    entity: RetailTmpCatalogProductMedias<T>
  ): CreateRequestBuilder<RetailTmpCatalogProductMedias<T>, T> {
    return new CreateRequestBuilder<RetailTmpCatalogProductMedias<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTmpCatalogProductMedias` entity based on its keys.
   * @param catalog Key property. See {@link RetailTmpCatalogProductMedias.catalog}.
   * @param fileName Key property. See {@link RetailTmpCatalogProductMedias.fileName}.
   * @returns A request builder for creating requests to retrieve one `RetailTmpCatalogProductMedias` entity based on its keys.
   */
  getByKey(
    catalog: DeserializedType<T, 'Edm.Int64'>,
    fileName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTmpCatalogProductMedias<T>, T> {
    return new GetByKeyRequestBuilder<RetailTmpCatalogProductMedias<T>, T>(
      this.entityApi,
      {
        Catalog: catalog,
        FileName: fileName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTmpCatalogProductMedias`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTmpCatalogProductMedias`.
   */
  update(
    entity: RetailTmpCatalogProductMedias<T>
  ): UpdateRequestBuilder<RetailTmpCatalogProductMedias<T>, T> {
    return new UpdateRequestBuilder<RetailTmpCatalogProductMedias<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTmpCatalogProductMedias`.
   * @param catalog Key property. See {@link RetailTmpCatalogProductMedias.catalog}.
   * @param fileName Key property. See {@link RetailTmpCatalogProductMedias.fileName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTmpCatalogProductMedias`.
   */
  delete(
    catalog: BigNumber,
    fileName: string
  ): DeleteRequestBuilder<RetailTmpCatalogProductMedias<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTmpCatalogProductMedias`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTmpCatalogProductMedias` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTmpCatalogProductMedias<T>
  ): DeleteRequestBuilder<RetailTmpCatalogProductMedias<T>, T>;
  delete(
    catalogOrEntity: any,
    fileName?: string
  ): DeleteRequestBuilder<RetailTmpCatalogProductMedias<T>, T> {
    return new DeleteRequestBuilder<RetailTmpCatalogProductMedias<T>, T>(
      this.entityApi,
      catalogOrEntity instanceof RetailTmpCatalogProductMedias
        ? catalogOrEntity
        : {
            Catalog: catalogOrEntity!,
            FileName: fileName!
          }
    );
  }
}
