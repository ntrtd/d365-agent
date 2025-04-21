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
import { CustomerPricingAttributeLinks } from './CustomerPricingAttributeLinks';

/**
 * Request builder class for operations supported on the {@link CustomerPricingAttributeLinks} entity.
 */
export class CustomerPricingAttributeLinksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerPricingAttributeLinks<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerPricingAttributeLinks` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerPricingAttributeLinks` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerPricingAttributeLinks<T>, T> {
    return new GetAllRequestBuilder<CustomerPricingAttributeLinks<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerPricingAttributeLinks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerPricingAttributeLinks`.
   */
  create(
    entity: CustomerPricingAttributeLinks<T>
  ): CreateRequestBuilder<CustomerPricingAttributeLinks<T>, T> {
    return new CreateRequestBuilder<CustomerPricingAttributeLinks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerPricingAttributeLinks` entity based on its keys.
   * @param pricingAttributeGroup Key property. See {@link CustomerPricingAttributeLinks.pricingAttributeGroup}.
   * @param attributeName Key property. See {@link CustomerPricingAttributeLinks.attributeName}.
   * @param typeName Key property. See {@link CustomerPricingAttributeLinks.typeName}.
   * @param sourceName Key property. See {@link CustomerPricingAttributeLinks.sourceName}.
   * @param fieldName Key property. See {@link CustomerPricingAttributeLinks.fieldName}.
   * @returns A request builder for creating requests to retrieve one `CustomerPricingAttributeLinks` entity based on its keys.
   */
  getByKey(
    pricingAttributeGroup: DeserializedType<T, 'Edm.String'>,
    attributeName: DeserializedType<T, 'Edm.String'>,
    typeName: DeserializedType<T, 'Edm.String'>,
    sourceName: DeserializedType<T, 'Edm.String'>,
    fieldName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerPricingAttributeLinks<T>, T> {
    return new GetByKeyRequestBuilder<CustomerPricingAttributeLinks<T>, T>(
      this.entityApi,
      {
        PricingAttributeGroup: pricingAttributeGroup,
        AttributeName: attributeName,
        TypeName: typeName,
        SourceName: sourceName,
        FieldName: fieldName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerPricingAttributeLinks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerPricingAttributeLinks`.
   */
  update(
    entity: CustomerPricingAttributeLinks<T>
  ): UpdateRequestBuilder<CustomerPricingAttributeLinks<T>, T> {
    return new UpdateRequestBuilder<CustomerPricingAttributeLinks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerPricingAttributeLinks`.
   * @param pricingAttributeGroup Key property. See {@link CustomerPricingAttributeLinks.pricingAttributeGroup}.
   * @param attributeName Key property. See {@link CustomerPricingAttributeLinks.attributeName}.
   * @param typeName Key property. See {@link CustomerPricingAttributeLinks.typeName}.
   * @param sourceName Key property. See {@link CustomerPricingAttributeLinks.sourceName}.
   * @param fieldName Key property. See {@link CustomerPricingAttributeLinks.fieldName}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPricingAttributeLinks`.
   */
  delete(
    pricingAttributeGroup: string,
    attributeName: string,
    typeName: string,
    sourceName: string,
    fieldName: string
  ): DeleteRequestBuilder<CustomerPricingAttributeLinks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerPricingAttributeLinks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPricingAttributeLinks` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerPricingAttributeLinks<T>
  ): DeleteRequestBuilder<CustomerPricingAttributeLinks<T>, T>;
  delete(
    pricingAttributeGroupOrEntity: any,
    attributeName?: string,
    typeName?: string,
    sourceName?: string,
    fieldName?: string
  ): DeleteRequestBuilder<CustomerPricingAttributeLinks<T>, T> {
    return new DeleteRequestBuilder<CustomerPricingAttributeLinks<T>, T>(
      this.entityApi,
      pricingAttributeGroupOrEntity instanceof CustomerPricingAttributeLinks
        ? pricingAttributeGroupOrEntity
        : {
            PricingAttributeGroup: pricingAttributeGroupOrEntity!,
            AttributeName: attributeName!,
            TypeName: typeName!,
            SourceName: sourceName!,
            FieldName: fieldName!
          }
    );
  }
}
