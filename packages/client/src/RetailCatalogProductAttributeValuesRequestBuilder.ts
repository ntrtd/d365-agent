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
import { RetailCatalogProductAttributeValues } from './RetailCatalogProductAttributeValues';

/**
 * Request builder class for operations supported on the {@link RetailCatalogProductAttributeValues} entity.
 */
export class RetailCatalogProductAttributeValuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailCatalogProductAttributeValues<T>, T> {
  /**
   * Returns a request builder for querying all `RetailCatalogProductAttributeValues` entities.
   * @returns A request builder for creating requests to retrieve all `RetailCatalogProductAttributeValues` entities.
   */
  getAll(): GetAllRequestBuilder<RetailCatalogProductAttributeValues<T>, T> {
    return new GetAllRequestBuilder<RetailCatalogProductAttributeValues<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailCatalogProductAttributeValues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailCatalogProductAttributeValues`.
   */
  create(
    entity: RetailCatalogProductAttributeValues<T>
  ): CreateRequestBuilder<RetailCatalogProductAttributeValues<T>, T> {
    return new CreateRequestBuilder<RetailCatalogProductAttributeValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailCatalogProductAttributeValues` entity based on its keys.
   * @param catalogNumber Key property. See {@link RetailCatalogProductAttributeValues.catalogNumber}.
   * @param categoryHierarchyName Key property. See {@link RetailCatalogProductAttributeValues.categoryHierarchyName}.
   * @param categoryName Key property. See {@link RetailCatalogProductAttributeValues.categoryName}.
   * @param displayProductNumber Key property. See {@link RetailCatalogProductAttributeValues.displayProductNumber}.
   * @param attributeGroupName Key property. See {@link RetailCatalogProductAttributeValues.attributeGroupName}.
   * @param attributeName Key property. See {@link RetailCatalogProductAttributeValues.attributeName}.
   * @param attributeTypeName Key property. See {@link RetailCatalogProductAttributeValues.attributeTypeName}.
   * @returns A request builder for creating requests to retrieve one `RetailCatalogProductAttributeValues` entity based on its keys.
   */
  getByKey(
    catalogNumber: DeserializedType<T, 'Edm.String'>,
    categoryHierarchyName: DeserializedType<T, 'Edm.String'>,
    categoryName: DeserializedType<T, 'Edm.String'>,
    displayProductNumber: DeserializedType<T, 'Edm.String'>,
    attributeGroupName: DeserializedType<T, 'Edm.String'>,
    attributeName: DeserializedType<T, 'Edm.String'>,
    attributeTypeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailCatalogProductAttributeValues<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailCatalogProductAttributeValues<T>,
      T
    >(this.entityApi, {
      CatalogNumber: catalogNumber,
      CategoryHierarchyName: categoryHierarchyName,
      CategoryName: categoryName,
      DisplayProductNumber: displayProductNumber,
      AttributeGroupName: attributeGroupName,
      AttributeName: attributeName,
      AttributeTypeName: attributeTypeName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailCatalogProductAttributeValues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailCatalogProductAttributeValues`.
   */
  update(
    entity: RetailCatalogProductAttributeValues<T>
  ): UpdateRequestBuilder<RetailCatalogProductAttributeValues<T>, T> {
    return new UpdateRequestBuilder<RetailCatalogProductAttributeValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailCatalogProductAttributeValues`.
   * @param catalogNumber Key property. See {@link RetailCatalogProductAttributeValues.catalogNumber}.
   * @param categoryHierarchyName Key property. See {@link RetailCatalogProductAttributeValues.categoryHierarchyName}.
   * @param categoryName Key property. See {@link RetailCatalogProductAttributeValues.categoryName}.
   * @param displayProductNumber Key property. See {@link RetailCatalogProductAttributeValues.displayProductNumber}.
   * @param attributeGroupName Key property. See {@link RetailCatalogProductAttributeValues.attributeGroupName}.
   * @param attributeName Key property. See {@link RetailCatalogProductAttributeValues.attributeName}.
   * @param attributeTypeName Key property. See {@link RetailCatalogProductAttributeValues.attributeTypeName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailCatalogProductAttributeValues`.
   */
  delete(
    catalogNumber: string,
    categoryHierarchyName: string,
    categoryName: string,
    displayProductNumber: string,
    attributeGroupName: string,
    attributeName: string,
    attributeTypeName: string
  ): DeleteRequestBuilder<RetailCatalogProductAttributeValues<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailCatalogProductAttributeValues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailCatalogProductAttributeValues` by taking the entity as a parameter.
   */
  delete(
    entity: RetailCatalogProductAttributeValues<T>
  ): DeleteRequestBuilder<RetailCatalogProductAttributeValues<T>, T>;
  delete(
    catalogNumberOrEntity: any,
    categoryHierarchyName?: string,
    categoryName?: string,
    displayProductNumber?: string,
    attributeGroupName?: string,
    attributeName?: string,
    attributeTypeName?: string
  ): DeleteRequestBuilder<RetailCatalogProductAttributeValues<T>, T> {
    return new DeleteRequestBuilder<RetailCatalogProductAttributeValues<T>, T>(
      this.entityApi,
      catalogNumberOrEntity instanceof RetailCatalogProductAttributeValues
        ? catalogNumberOrEntity
        : {
            CatalogNumber: catalogNumberOrEntity!,
            CategoryHierarchyName: categoryHierarchyName!,
            CategoryName: categoryName!,
            DisplayProductNumber: displayProductNumber!,
            AttributeGroupName: attributeGroupName!,
            AttributeName: attributeName!,
            AttributeTypeName: attributeTypeName!
          }
    );
  }
}
