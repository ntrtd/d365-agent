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
import { RetailAttributesLegalEntityLookups } from './RetailAttributesLegalEntityLookups';

/**
 * Request builder class for operations supported on the {@link RetailAttributesLegalEntityLookups} entity.
 */
export class RetailAttributesLegalEntityLookupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailAttributesLegalEntityLookups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailAttributesLegalEntityLookups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailAttributesLegalEntityLookups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailAttributesLegalEntityLookups<T>, T> {
    return new GetAllRequestBuilder<RetailAttributesLegalEntityLookups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailAttributesLegalEntityLookups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailAttributesLegalEntityLookups`.
   */
  create(
    entity: RetailAttributesLegalEntityLookups<T>
  ): CreateRequestBuilder<RetailAttributesLegalEntityLookups<T>, T> {
    return new CreateRequestBuilder<RetailAttributesLegalEntityLookups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailAttributesLegalEntityLookups` entity based on its keys.
   * @param categoryHierarchyName Key property. See {@link RetailAttributesLegalEntityLookups.categoryHierarchyName}.
   * @param categoryName Key property. See {@link RetailAttributesLegalEntityLookups.categoryName}.
   * @param legalEntity Key property. See {@link RetailAttributesLegalEntityLookups.legalEntity}.
   * @returns A request builder for creating requests to retrieve one `RetailAttributesLegalEntityLookups` entity based on its keys.
   */
  getByKey(
    categoryHierarchyName: DeserializedType<T, 'Edm.String'>,
    categoryName: DeserializedType<T, 'Edm.String'>,
    legalEntity: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailAttributesLegalEntityLookups<T>, T> {
    return new GetByKeyRequestBuilder<RetailAttributesLegalEntityLookups<T>, T>(
      this.entityApi,
      {
        CategoryHierarchyName: categoryHierarchyName,
        CategoryName: categoryName,
        LegalEntity: legalEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailAttributesLegalEntityLookups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailAttributesLegalEntityLookups`.
   */
  update(
    entity: RetailAttributesLegalEntityLookups<T>
  ): UpdateRequestBuilder<RetailAttributesLegalEntityLookups<T>, T> {
    return new UpdateRequestBuilder<RetailAttributesLegalEntityLookups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailAttributesLegalEntityLookups`.
   * @param categoryHierarchyName Key property. See {@link RetailAttributesLegalEntityLookups.categoryHierarchyName}.
   * @param categoryName Key property. See {@link RetailAttributesLegalEntityLookups.categoryName}.
   * @param legalEntity Key property. See {@link RetailAttributesLegalEntityLookups.legalEntity}.
   * @returns A request builder for creating requests that delete an entity of type `RetailAttributesLegalEntityLookups`.
   */
  delete(
    categoryHierarchyName: string,
    categoryName: string,
    legalEntity: string
  ): DeleteRequestBuilder<RetailAttributesLegalEntityLookups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailAttributesLegalEntityLookups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailAttributesLegalEntityLookups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailAttributesLegalEntityLookups<T>
  ): DeleteRequestBuilder<RetailAttributesLegalEntityLookups<T>, T>;
  delete(
    categoryHierarchyNameOrEntity: any,
    categoryName?: string,
    legalEntity?: string
  ): DeleteRequestBuilder<RetailAttributesLegalEntityLookups<T>, T> {
    return new DeleteRequestBuilder<RetailAttributesLegalEntityLookups<T>, T>(
      this.entityApi,
      categoryHierarchyNameOrEntity instanceof
      RetailAttributesLegalEntityLookups
        ? categoryHierarchyNameOrEntity
        : {
            CategoryHierarchyName: categoryHierarchyNameOrEntity!,
            CategoryName: categoryName!,
            LegalEntity: legalEntity!
          }
    );
  }
}
