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
import { RetailInfocodeCategorySpecifics } from './RetailInfocodeCategorySpecifics';

/**
 * Request builder class for operations supported on the {@link RetailInfocodeCategorySpecifics} entity.
 */
export class RetailInfocodeCategorySpecificsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailInfocodeCategorySpecifics<T>, T> {
  /**
   * Returns a request builder for querying all `RetailInfocodeCategorySpecifics` entities.
   * @returns A request builder for creating requests to retrieve all `RetailInfocodeCategorySpecifics` entities.
   */
  getAll(): GetAllRequestBuilder<RetailInfocodeCategorySpecifics<T>, T> {
    return new GetAllRequestBuilder<RetailInfocodeCategorySpecifics<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailInfocodeCategorySpecifics` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailInfocodeCategorySpecifics`.
   */
  create(
    entity: RetailInfocodeCategorySpecifics<T>
  ): CreateRequestBuilder<RetailInfocodeCategorySpecifics<T>, T> {
    return new CreateRequestBuilder<RetailInfocodeCategorySpecifics<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailInfocodeCategorySpecifics` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailInfocodeCategorySpecifics.dataAreaId}.
   * @param productCategoryHierarchyName Key property. See {@link RetailInfocodeCategorySpecifics.productCategoryHierarchyName}.
   * @param categoryName Key property. See {@link RetailInfocodeCategorySpecifics.categoryName}.
   * @param infoCodeNumber Key property. See {@link RetailInfocodeCategorySpecifics.infoCodeNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailInfocodeCategorySpecifics` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productCategoryHierarchyName: DeserializedType<T, 'Edm.String'>,
    categoryName: DeserializedType<T, 'Edm.String'>,
    infoCodeNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailInfocodeCategorySpecifics<T>, T> {
    return new GetByKeyRequestBuilder<RetailInfocodeCategorySpecifics<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProductCategoryHierarchyName: productCategoryHierarchyName,
        CategoryName: categoryName,
        InfoCodeNumber: infoCodeNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailInfocodeCategorySpecifics`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailInfocodeCategorySpecifics`.
   */
  update(
    entity: RetailInfocodeCategorySpecifics<T>
  ): UpdateRequestBuilder<RetailInfocodeCategorySpecifics<T>, T> {
    return new UpdateRequestBuilder<RetailInfocodeCategorySpecifics<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailInfocodeCategorySpecifics`.
   * @param dataAreaId Key property. See {@link RetailInfocodeCategorySpecifics.dataAreaId}.
   * @param productCategoryHierarchyName Key property. See {@link RetailInfocodeCategorySpecifics.productCategoryHierarchyName}.
   * @param categoryName Key property. See {@link RetailInfocodeCategorySpecifics.categoryName}.
   * @param infoCodeNumber Key property. See {@link RetailInfocodeCategorySpecifics.infoCodeNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailInfocodeCategorySpecifics`.
   */
  delete(
    dataAreaId: string,
    productCategoryHierarchyName: string,
    categoryName: string,
    infoCodeNumber: string
  ): DeleteRequestBuilder<RetailInfocodeCategorySpecifics<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailInfocodeCategorySpecifics`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailInfocodeCategorySpecifics` by taking the entity as a parameter.
   */
  delete(
    entity: RetailInfocodeCategorySpecifics<T>
  ): DeleteRequestBuilder<RetailInfocodeCategorySpecifics<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productCategoryHierarchyName?: string,
    categoryName?: string,
    infoCodeNumber?: string
  ): DeleteRequestBuilder<RetailInfocodeCategorySpecifics<T>, T> {
    return new DeleteRequestBuilder<RetailInfocodeCategorySpecifics<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailInfocodeCategorySpecifics
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductCategoryHierarchyName: productCategoryHierarchyName!,
            CategoryName: categoryName!,
            InfoCodeNumber: infoCodeNumber!
          }
    );
  }
}
