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
import { RetailAttributesGlobalLookups } from './RetailAttributesGlobalLookups';

/**
 * Request builder class for operations supported on the {@link RetailAttributesGlobalLookups} entity.
 */
export class RetailAttributesGlobalLookupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailAttributesGlobalLookups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailAttributesGlobalLookups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailAttributesGlobalLookups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailAttributesGlobalLookups<T>, T> {
    return new GetAllRequestBuilder<RetailAttributesGlobalLookups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailAttributesGlobalLookups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailAttributesGlobalLookups`.
   */
  create(
    entity: RetailAttributesGlobalLookups<T>
  ): CreateRequestBuilder<RetailAttributesGlobalLookups<T>, T> {
    return new CreateRequestBuilder<RetailAttributesGlobalLookups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailAttributesGlobalLookups` entity based on its keys.
   * @param productCategoryHierarchyName Key property. See {@link RetailAttributesGlobalLookups.productCategoryHierarchyName}.
   * @param productCategoryName Key property. See {@link RetailAttributesGlobalLookups.productCategoryName}.
   * @returns A request builder for creating requests to retrieve one `RetailAttributesGlobalLookups` entity based on its keys.
   */
  getByKey(
    productCategoryHierarchyName: DeserializedType<T, 'Edm.String'>,
    productCategoryName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailAttributesGlobalLookups<T>, T> {
    return new GetByKeyRequestBuilder<RetailAttributesGlobalLookups<T>, T>(
      this.entityApi,
      {
        ProductCategoryHierarchyName: productCategoryHierarchyName,
        ProductCategoryName: productCategoryName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailAttributesGlobalLookups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailAttributesGlobalLookups`.
   */
  update(
    entity: RetailAttributesGlobalLookups<T>
  ): UpdateRequestBuilder<RetailAttributesGlobalLookups<T>, T> {
    return new UpdateRequestBuilder<RetailAttributesGlobalLookups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailAttributesGlobalLookups`.
   * @param productCategoryHierarchyName Key property. See {@link RetailAttributesGlobalLookups.productCategoryHierarchyName}.
   * @param productCategoryName Key property. See {@link RetailAttributesGlobalLookups.productCategoryName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailAttributesGlobalLookups`.
   */
  delete(
    productCategoryHierarchyName: string,
    productCategoryName: string
  ): DeleteRequestBuilder<RetailAttributesGlobalLookups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailAttributesGlobalLookups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailAttributesGlobalLookups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailAttributesGlobalLookups<T>
  ): DeleteRequestBuilder<RetailAttributesGlobalLookups<T>, T>;
  delete(
    productCategoryHierarchyNameOrEntity: any,
    productCategoryName?: string
  ): DeleteRequestBuilder<RetailAttributesGlobalLookups<T>, T> {
    return new DeleteRequestBuilder<RetailAttributesGlobalLookups<T>, T>(
      this.entityApi,
      productCategoryHierarchyNameOrEntity instanceof
      RetailAttributesGlobalLookups
        ? productCategoryHierarchyNameOrEntity
        : {
            ProductCategoryHierarchyName: productCategoryHierarchyNameOrEntity!,
            ProductCategoryName: productCategoryName!
          }
    );
  }
}
