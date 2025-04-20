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
import { RetailInternalOrganizationProductAttributeValues2 } from './RetailInternalOrganizationProductAttributeValues2';

/**
 * Request builder class for operations supported on the {@link RetailInternalOrganizationProductAttributeValues2} entity.
 */
export class RetailInternalOrganizationProductAttributeValues2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  RetailInternalOrganizationProductAttributeValues2<T>,
  T
> {
  /**
   * Returns a request builder for querying all `RetailInternalOrganizationProductAttributeValues2` entities.
   * @returns A request builder for creating requests to retrieve all `RetailInternalOrganizationProductAttributeValues2` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailInternalOrganizationProductAttributeValues2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailInternalOrganizationProductAttributeValues2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailInternalOrganizationProductAttributeValues2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailInternalOrganizationProductAttributeValues2`.
   */
  create(
    entity: RetailInternalOrganizationProductAttributeValues2<T>
  ): CreateRequestBuilder<
    RetailInternalOrganizationProductAttributeValues2<T>,
    T
  > {
    return new CreateRequestBuilder<
      RetailInternalOrganizationProductAttributeValues2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailInternalOrganizationProductAttributeValues2` entity based on its keys.
   * @param internalOrganizationPartyNumber Key property. See {@link RetailInternalOrganizationProductAttributeValues2.internalOrganizationPartyNumber}.
   * @param displayProductNumber Key property. See {@link RetailInternalOrganizationProductAttributeValues2.displayProductNumber}.
   * @param attributeTypeName Key property. See {@link RetailInternalOrganizationProductAttributeValues2.attributeTypeName}.
   * @param attributeName Key property. See {@link RetailInternalOrganizationProductAttributeValues2.attributeName}.
   * @returns A request builder for creating requests to retrieve one `RetailInternalOrganizationProductAttributeValues2` entity based on its keys.
   */
  getByKey(
    internalOrganizationPartyNumber: DeserializedType<T, 'Edm.String'>,
    displayProductNumber: DeserializedType<T, 'Edm.String'>,
    attributeTypeName: DeserializedType<T, 'Edm.String'>,
    attributeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    RetailInternalOrganizationProductAttributeValues2<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailInternalOrganizationProductAttributeValues2<T>,
      T
    >(this.entityApi, {
      InternalOrganizationPartyNumber: internalOrganizationPartyNumber,
      DisplayProductNumber: displayProductNumber,
      AttributeTypeName: attributeTypeName,
      AttributeName: attributeName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailInternalOrganizationProductAttributeValues2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailInternalOrganizationProductAttributeValues2`.
   */
  update(
    entity: RetailInternalOrganizationProductAttributeValues2<T>
  ): UpdateRequestBuilder<
    RetailInternalOrganizationProductAttributeValues2<T>,
    T
  > {
    return new UpdateRequestBuilder<
      RetailInternalOrganizationProductAttributeValues2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailInternalOrganizationProductAttributeValues2`.
   * @param internalOrganizationPartyNumber Key property. See {@link RetailInternalOrganizationProductAttributeValues2.internalOrganizationPartyNumber}.
   * @param displayProductNumber Key property. See {@link RetailInternalOrganizationProductAttributeValues2.displayProductNumber}.
   * @param attributeTypeName Key property. See {@link RetailInternalOrganizationProductAttributeValues2.attributeTypeName}.
   * @param attributeName Key property. See {@link RetailInternalOrganizationProductAttributeValues2.attributeName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailInternalOrganizationProductAttributeValues2`.
   */
  delete(
    internalOrganizationPartyNumber: string,
    displayProductNumber: string,
    attributeTypeName: string,
    attributeName: string
  ): DeleteRequestBuilder<
    RetailInternalOrganizationProductAttributeValues2<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `RetailInternalOrganizationProductAttributeValues2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailInternalOrganizationProductAttributeValues2` by taking the entity as a parameter.
   */
  delete(
    entity: RetailInternalOrganizationProductAttributeValues2<T>
  ): DeleteRequestBuilder<
    RetailInternalOrganizationProductAttributeValues2<T>,
    T
  >;
  delete(
    internalOrganizationPartyNumberOrEntity: any,
    displayProductNumber?: string,
    attributeTypeName?: string,
    attributeName?: string
  ): DeleteRequestBuilder<
    RetailInternalOrganizationProductAttributeValues2<T>,
    T
  > {
    return new DeleteRequestBuilder<
      RetailInternalOrganizationProductAttributeValues2<T>,
      T
    >(
      this.entityApi,
      internalOrganizationPartyNumberOrEntity instanceof
      RetailInternalOrganizationProductAttributeValues2
        ? internalOrganizationPartyNumberOrEntity
        : {
            InternalOrganizationPartyNumber:
              internalOrganizationPartyNumberOrEntity!,
            DisplayProductNumber: displayProductNumber!,
            AttributeTypeName: attributeTypeName!,
            AttributeName: attributeName!
          }
    );
  }
}
