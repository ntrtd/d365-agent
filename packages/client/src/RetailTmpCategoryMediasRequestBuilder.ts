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
import { RetailTmpCategoryMedias } from './RetailTmpCategoryMedias';

/**
 * Request builder class for operations supported on the {@link RetailTmpCategoryMedias} entity.
 */
export class RetailTmpCategoryMediasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTmpCategoryMedias<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTmpCategoryMedias` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTmpCategoryMedias` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTmpCategoryMedias<T>, T> {
    return new GetAllRequestBuilder<RetailTmpCategoryMedias<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTmpCategoryMedias` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTmpCategoryMedias`.
   */
  create(
    entity: RetailTmpCategoryMedias<T>
  ): CreateRequestBuilder<RetailTmpCategoryMedias<T>, T> {
    return new CreateRequestBuilder<RetailTmpCategoryMedias<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTmpCategoryMedias` entity based on its keys.
   * @param categoryHierarchy Key property. See {@link RetailTmpCategoryMedias.categoryHierarchy}.
   * @param categoryName Key property. See {@link RetailTmpCategoryMedias.categoryName}.
   * @param fileName Key property. See {@link RetailTmpCategoryMedias.fileName}.
   * @returns A request builder for creating requests to retrieve one `RetailTmpCategoryMedias` entity based on its keys.
   */
  getByKey(
    categoryHierarchy: DeserializedType<T, 'Edm.Int64'>,
    categoryName: DeserializedType<T, 'Edm.String'>,
    fileName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTmpCategoryMedias<T>, T> {
    return new GetByKeyRequestBuilder<RetailTmpCategoryMedias<T>, T>(
      this.entityApi,
      {
        CategoryHierarchy: categoryHierarchy,
        CategoryName: categoryName,
        FileName: fileName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTmpCategoryMedias`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTmpCategoryMedias`.
   */
  update(
    entity: RetailTmpCategoryMedias<T>
  ): UpdateRequestBuilder<RetailTmpCategoryMedias<T>, T> {
    return new UpdateRequestBuilder<RetailTmpCategoryMedias<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTmpCategoryMedias`.
   * @param categoryHierarchy Key property. See {@link RetailTmpCategoryMedias.categoryHierarchy}.
   * @param categoryName Key property. See {@link RetailTmpCategoryMedias.categoryName}.
   * @param fileName Key property. See {@link RetailTmpCategoryMedias.fileName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTmpCategoryMedias`.
   */
  delete(
    categoryHierarchy: BigNumber,
    categoryName: string,
    fileName: string
  ): DeleteRequestBuilder<RetailTmpCategoryMedias<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTmpCategoryMedias`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTmpCategoryMedias` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTmpCategoryMedias<T>
  ): DeleteRequestBuilder<RetailTmpCategoryMedias<T>, T>;
  delete(
    categoryHierarchyOrEntity: any,
    categoryName?: string,
    fileName?: string
  ): DeleteRequestBuilder<RetailTmpCategoryMedias<T>, T> {
    return new DeleteRequestBuilder<RetailTmpCategoryMedias<T>, T>(
      this.entityApi,
      categoryHierarchyOrEntity instanceof RetailTmpCategoryMedias
        ? categoryHierarchyOrEntity
        : {
            CategoryHierarchy: categoryHierarchyOrEntity!,
            CategoryName: categoryName!,
            FileName: fileName!
          }
    );
  }
}
