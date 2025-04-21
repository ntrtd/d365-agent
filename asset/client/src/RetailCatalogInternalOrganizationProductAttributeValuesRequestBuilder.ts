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
import { RetailCatalogInternalOrganizationProductAttributeValues } from './RetailCatalogInternalOrganizationProductAttributeValues';

/**
 * Request builder class for operations supported on the {@link RetailCatalogInternalOrganizationProductAttributeValues} entity.
 */
export class RetailCatalogInternalOrganizationProductAttributeValuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  RetailCatalogInternalOrganizationProductAttributeValues<T>,
  T
> {
  /**
   * Returns a request builder for querying all `RetailCatalogInternalOrganizationProductAttributeValues` entities.
   * @returns A request builder for creating requests to retrieve all `RetailCatalogInternalOrganizationProductAttributeValues` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailCatalogInternalOrganizationProductAttributeValues<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailCatalogInternalOrganizationProductAttributeValues<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailCatalogInternalOrganizationProductAttributeValues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailCatalogInternalOrganizationProductAttributeValues`.
   */
  create(
    entity: RetailCatalogInternalOrganizationProductAttributeValues<T>
  ): CreateRequestBuilder<
    RetailCatalogInternalOrganizationProductAttributeValues<T>,
    T
  > {
    return new CreateRequestBuilder<
      RetailCatalogInternalOrganizationProductAttributeValues<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailCatalogInternalOrganizationProductAttributeValues` entity based on its keys.
   * @param catalogNumber Key property. See {@link RetailCatalogInternalOrganizationProductAttributeValues.catalogNumber}.
   * @param partyNumber Key property. See {@link RetailCatalogInternalOrganizationProductAttributeValues.partyNumber}.
   * @param displayProductNumber Key property. See {@link RetailCatalogInternalOrganizationProductAttributeValues.displayProductNumber}.
   * @param attributeGroupName Key property. See {@link RetailCatalogInternalOrganizationProductAttributeValues.attributeGroupName}.
   * @param attributeName Key property. See {@link RetailCatalogInternalOrganizationProductAttributeValues.attributeName}.
   * @param attributeTypeName Key property. See {@link RetailCatalogInternalOrganizationProductAttributeValues.attributeTypeName}.
   * @returns A request builder for creating requests to retrieve one `RetailCatalogInternalOrganizationProductAttributeValues` entity based on its keys.
   */
  getByKey(
    catalogNumber: DeserializedType<T, 'Edm.String'>,
    partyNumber: DeserializedType<T, 'Edm.String'>,
    displayProductNumber: DeserializedType<T, 'Edm.String'>,
    attributeGroupName: DeserializedType<T, 'Edm.String'>,
    attributeName: DeserializedType<T, 'Edm.String'>,
    attributeTypeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    RetailCatalogInternalOrganizationProductAttributeValues<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailCatalogInternalOrganizationProductAttributeValues<T>,
      T
    >(this.entityApi, {
      CatalogNumber: catalogNumber,
      PartyNumber: partyNumber,
      DisplayProductNumber: displayProductNumber,
      AttributeGroupName: attributeGroupName,
      AttributeName: attributeName,
      AttributeTypeName: attributeTypeName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailCatalogInternalOrganizationProductAttributeValues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailCatalogInternalOrganizationProductAttributeValues`.
   */
  update(
    entity: RetailCatalogInternalOrganizationProductAttributeValues<T>
  ): UpdateRequestBuilder<
    RetailCatalogInternalOrganizationProductAttributeValues<T>,
    T
  > {
    return new UpdateRequestBuilder<
      RetailCatalogInternalOrganizationProductAttributeValues<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailCatalogInternalOrganizationProductAttributeValues`.
   * @param catalogNumber Key property. See {@link RetailCatalogInternalOrganizationProductAttributeValues.catalogNumber}.
   * @param partyNumber Key property. See {@link RetailCatalogInternalOrganizationProductAttributeValues.partyNumber}.
   * @param displayProductNumber Key property. See {@link RetailCatalogInternalOrganizationProductAttributeValues.displayProductNumber}.
   * @param attributeGroupName Key property. See {@link RetailCatalogInternalOrganizationProductAttributeValues.attributeGroupName}.
   * @param attributeName Key property. See {@link RetailCatalogInternalOrganizationProductAttributeValues.attributeName}.
   * @param attributeTypeName Key property. See {@link RetailCatalogInternalOrganizationProductAttributeValues.attributeTypeName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailCatalogInternalOrganizationProductAttributeValues`.
   */
  delete(
    catalogNumber: string,
    partyNumber: string,
    displayProductNumber: string,
    attributeGroupName: string,
    attributeName: string,
    attributeTypeName: string
  ): DeleteRequestBuilder<
    RetailCatalogInternalOrganizationProductAttributeValues<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `RetailCatalogInternalOrganizationProductAttributeValues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailCatalogInternalOrganizationProductAttributeValues` by taking the entity as a parameter.
   */
  delete(
    entity: RetailCatalogInternalOrganizationProductAttributeValues<T>
  ): DeleteRequestBuilder<
    RetailCatalogInternalOrganizationProductAttributeValues<T>,
    T
  >;
  delete(
    catalogNumberOrEntity: any,
    partyNumber?: string,
    displayProductNumber?: string,
    attributeGroupName?: string,
    attributeName?: string,
    attributeTypeName?: string
  ): DeleteRequestBuilder<
    RetailCatalogInternalOrganizationProductAttributeValues<T>,
    T
  > {
    return new DeleteRequestBuilder<
      RetailCatalogInternalOrganizationProductAttributeValues<T>,
      T
    >(
      this.entityApi,
      catalogNumberOrEntity instanceof
      RetailCatalogInternalOrganizationProductAttributeValues
        ? catalogNumberOrEntity
        : {
            CatalogNumber: catalogNumberOrEntity!,
            PartyNumber: partyNumber!,
            DisplayProductNumber: displayProductNumber!,
            AttributeGroupName: attributeGroupName!,
            AttributeName: attributeName!,
            AttributeTypeName: attributeTypeName!
          }
    );
  }
}
