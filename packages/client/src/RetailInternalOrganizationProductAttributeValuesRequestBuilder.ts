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
import { RetailInternalOrganizationProductAttributeValues } from './RetailInternalOrganizationProductAttributeValues';

/**
 * Request builder class for operations supported on the {@link RetailInternalOrganizationProductAttributeValues} entity.
 */
export class RetailInternalOrganizationProductAttributeValuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  RetailInternalOrganizationProductAttributeValues<T>,
  T
> {
  /**
   * Returns a request builder for querying all `RetailInternalOrganizationProductAttributeValues` entities.
   * @returns A request builder for creating requests to retrieve all `RetailInternalOrganizationProductAttributeValues` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailInternalOrganizationProductAttributeValues<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailInternalOrganizationProductAttributeValues<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailInternalOrganizationProductAttributeValues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailInternalOrganizationProductAttributeValues`.
   */
  create(
    entity: RetailInternalOrganizationProductAttributeValues<T>
  ): CreateRequestBuilder<
    RetailInternalOrganizationProductAttributeValues<T>,
    T
  > {
    return new CreateRequestBuilder<
      RetailInternalOrganizationProductAttributeValues<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailInternalOrganizationProductAttributeValues` entity based on its keys.
   * @param partyNumber Key property. See {@link RetailInternalOrganizationProductAttributeValues.partyNumber}.
   * @param displayProductNumber Key property. See {@link RetailInternalOrganizationProductAttributeValues.displayProductNumber}.
   * @param attributeGroupName Key property. See {@link RetailInternalOrganizationProductAttributeValues.attributeGroupName}.
   * @param attributeName Key property. See {@link RetailInternalOrganizationProductAttributeValues.attributeName}.
   * @param attributeTypeName Key property. See {@link RetailInternalOrganizationProductAttributeValues.attributeTypeName}.
   * @returns A request builder for creating requests to retrieve one `RetailInternalOrganizationProductAttributeValues` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    displayProductNumber: DeserializedType<T, 'Edm.String'>,
    attributeGroupName: DeserializedType<T, 'Edm.String'>,
    attributeName: DeserializedType<T, 'Edm.String'>,
    attributeTypeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    RetailInternalOrganizationProductAttributeValues<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailInternalOrganizationProductAttributeValues<T>,
      T
    >(this.entityApi, {
      PartyNumber: partyNumber,
      DisplayProductNumber: displayProductNumber,
      AttributeGroupName: attributeGroupName,
      AttributeName: attributeName,
      AttributeTypeName: attributeTypeName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailInternalOrganizationProductAttributeValues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailInternalOrganizationProductAttributeValues`.
   */
  update(
    entity: RetailInternalOrganizationProductAttributeValues<T>
  ): UpdateRequestBuilder<
    RetailInternalOrganizationProductAttributeValues<T>,
    T
  > {
    return new UpdateRequestBuilder<
      RetailInternalOrganizationProductAttributeValues<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailInternalOrganizationProductAttributeValues`.
   * @param partyNumber Key property. See {@link RetailInternalOrganizationProductAttributeValues.partyNumber}.
   * @param displayProductNumber Key property. See {@link RetailInternalOrganizationProductAttributeValues.displayProductNumber}.
   * @param attributeGroupName Key property. See {@link RetailInternalOrganizationProductAttributeValues.attributeGroupName}.
   * @param attributeName Key property. See {@link RetailInternalOrganizationProductAttributeValues.attributeName}.
   * @param attributeTypeName Key property. See {@link RetailInternalOrganizationProductAttributeValues.attributeTypeName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailInternalOrganizationProductAttributeValues`.
   */
  delete(
    partyNumber: string,
    displayProductNumber: string,
    attributeGroupName: string,
    attributeName: string,
    attributeTypeName: string
  ): DeleteRequestBuilder<
    RetailInternalOrganizationProductAttributeValues<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `RetailInternalOrganizationProductAttributeValues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailInternalOrganizationProductAttributeValues` by taking the entity as a parameter.
   */
  delete(
    entity: RetailInternalOrganizationProductAttributeValues<T>
  ): DeleteRequestBuilder<
    RetailInternalOrganizationProductAttributeValues<T>,
    T
  >;
  delete(
    partyNumberOrEntity: any,
    displayProductNumber?: string,
    attributeGroupName?: string,
    attributeName?: string,
    attributeTypeName?: string
  ): DeleteRequestBuilder<
    RetailInternalOrganizationProductAttributeValues<T>,
    T
  > {
    return new DeleteRequestBuilder<
      RetailInternalOrganizationProductAttributeValues<T>,
      T
    >(
      this.entityApi,
      partyNumberOrEntity instanceof
      RetailInternalOrganizationProductAttributeValues
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            DisplayProductNumber: displayProductNumber!,
            AttributeGroupName: attributeGroupName!,
            AttributeName: attributeName!,
            AttributeTypeName: attributeTypeName!
          }
    );
  }
}
