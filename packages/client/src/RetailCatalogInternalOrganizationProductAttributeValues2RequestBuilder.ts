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
import { RetailCatalogInternalOrganizationProductAttributeValues2 } from './RetailCatalogInternalOrganizationProductAttributeValues2';

/**
 * Request builder class for operations supported on the {@link RetailCatalogInternalOrganizationProductAttributeValues2} entity.
 */
export class RetailCatalogInternalOrganizationProductAttributeValues2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  RetailCatalogInternalOrganizationProductAttributeValues2<T>,
  T
> {
  /**
   * Returns a request builder for querying all `RetailCatalogInternalOrganizationProductAttributeValues2` entities.
   * @returns A request builder for creating requests to retrieve all `RetailCatalogInternalOrganizationProductAttributeValues2` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailCatalogInternalOrganizationProductAttributeValues2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailCatalogInternalOrganizationProductAttributeValues2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailCatalogInternalOrganizationProductAttributeValues2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailCatalogInternalOrganizationProductAttributeValues2`.
   */
  create(
    entity: RetailCatalogInternalOrganizationProductAttributeValues2<T>
  ): CreateRequestBuilder<
    RetailCatalogInternalOrganizationProductAttributeValues2<T>,
    T
  > {
    return new CreateRequestBuilder<
      RetailCatalogInternalOrganizationProductAttributeValues2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailCatalogInternalOrganizationProductAttributeValues2` entity based on its keys.
   * @param catalogNumber Key property. See {@link RetailCatalogInternalOrganizationProductAttributeValues2.catalogNumber}.
   * @param internalOrganizationPartyNumber Key property. See {@link RetailCatalogInternalOrganizationProductAttributeValues2.internalOrganizationPartyNumber}.
   * @param displayProductNumber Key property. See {@link RetailCatalogInternalOrganizationProductAttributeValues2.displayProductNumber}.
   * @param attributeTypeName Key property. See {@link RetailCatalogInternalOrganizationProductAttributeValues2.attributeTypeName}.
   * @param attributeName Key property. See {@link RetailCatalogInternalOrganizationProductAttributeValues2.attributeName}.
   * @returns A request builder for creating requests to retrieve one `RetailCatalogInternalOrganizationProductAttributeValues2` entity based on its keys.
   */
  getByKey(
    catalogNumber: DeserializedType<T, 'Edm.String'>,
    internalOrganizationPartyNumber: DeserializedType<T, 'Edm.String'>,
    displayProductNumber: DeserializedType<T, 'Edm.String'>,
    attributeTypeName: DeserializedType<T, 'Edm.String'>,
    attributeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    RetailCatalogInternalOrganizationProductAttributeValues2<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailCatalogInternalOrganizationProductAttributeValues2<T>,
      T
    >(this.entityApi, {
      CatalogNumber: catalogNumber,
      InternalOrganizationPartyNumber: internalOrganizationPartyNumber,
      DisplayProductNumber: displayProductNumber,
      AttributeTypeName: attributeTypeName,
      AttributeName: attributeName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailCatalogInternalOrganizationProductAttributeValues2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailCatalogInternalOrganizationProductAttributeValues2`.
   */
  update(
    entity: RetailCatalogInternalOrganizationProductAttributeValues2<T>
  ): UpdateRequestBuilder<
    RetailCatalogInternalOrganizationProductAttributeValues2<T>,
    T
  > {
    return new UpdateRequestBuilder<
      RetailCatalogInternalOrganizationProductAttributeValues2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailCatalogInternalOrganizationProductAttributeValues2`.
   * @param catalogNumber Key property. See {@link RetailCatalogInternalOrganizationProductAttributeValues2.catalogNumber}.
   * @param internalOrganizationPartyNumber Key property. See {@link RetailCatalogInternalOrganizationProductAttributeValues2.internalOrganizationPartyNumber}.
   * @param displayProductNumber Key property. See {@link RetailCatalogInternalOrganizationProductAttributeValues2.displayProductNumber}.
   * @param attributeTypeName Key property. See {@link RetailCatalogInternalOrganizationProductAttributeValues2.attributeTypeName}.
   * @param attributeName Key property. See {@link RetailCatalogInternalOrganizationProductAttributeValues2.attributeName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailCatalogInternalOrganizationProductAttributeValues2`.
   */
  delete(
    catalogNumber: string,
    internalOrganizationPartyNumber: string,
    displayProductNumber: string,
    attributeTypeName: string,
    attributeName: string
  ): DeleteRequestBuilder<
    RetailCatalogInternalOrganizationProductAttributeValues2<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `RetailCatalogInternalOrganizationProductAttributeValues2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailCatalogInternalOrganizationProductAttributeValues2` by taking the entity as a parameter.
   */
  delete(
    entity: RetailCatalogInternalOrganizationProductAttributeValues2<T>
  ): DeleteRequestBuilder<
    RetailCatalogInternalOrganizationProductAttributeValues2<T>,
    T
  >;
  delete(
    catalogNumberOrEntity: any,
    internalOrganizationPartyNumber?: string,
    displayProductNumber?: string,
    attributeTypeName?: string,
    attributeName?: string
  ): DeleteRequestBuilder<
    RetailCatalogInternalOrganizationProductAttributeValues2<T>,
    T
  > {
    return new DeleteRequestBuilder<
      RetailCatalogInternalOrganizationProductAttributeValues2<T>,
      T
    >(
      this.entityApi,
      catalogNumberOrEntity instanceof
      RetailCatalogInternalOrganizationProductAttributeValues2
        ? catalogNumberOrEntity
        : {
            CatalogNumber: catalogNumberOrEntity!,
            InternalOrganizationPartyNumber: internalOrganizationPartyNumber!,
            DisplayProductNumber: displayProductNumber!,
            AttributeTypeName: attributeTypeName!,
            AttributeName: attributeName!
          }
    );
  }
}
