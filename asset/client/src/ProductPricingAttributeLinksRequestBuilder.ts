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
import { ProductPricingAttributeLinks } from './ProductPricingAttributeLinks';

/**
 * Request builder class for operations supported on the {@link ProductPricingAttributeLinks} entity.
 */
export class ProductPricingAttributeLinksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPricingAttributeLinks<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPricingAttributeLinks` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPricingAttributeLinks` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPricingAttributeLinks<T>, T> {
    return new GetAllRequestBuilder<ProductPricingAttributeLinks<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductPricingAttributeLinks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPricingAttributeLinks`.
   */
  create(
    entity: ProductPricingAttributeLinks<T>
  ): CreateRequestBuilder<ProductPricingAttributeLinks<T>, T> {
    return new CreateRequestBuilder<ProductPricingAttributeLinks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductPricingAttributeLinks` entity based on its keys.
   * @param pricingAttributeGroup Key property. See {@link ProductPricingAttributeLinks.pricingAttributeGroup}.
   * @param attributeName Key property. See {@link ProductPricingAttributeLinks.attributeName}.
   * @param typeName Key property. See {@link ProductPricingAttributeLinks.typeName}.
   * @param sourceName Key property. See {@link ProductPricingAttributeLinks.sourceName}.
   * @param fieldName Key property. See {@link ProductPricingAttributeLinks.fieldName}.
   * @returns A request builder for creating requests to retrieve one `ProductPricingAttributeLinks` entity based on its keys.
   */
  getByKey(
    pricingAttributeGroup: DeserializedType<T, 'Edm.String'>,
    attributeName: DeserializedType<T, 'Edm.String'>,
    typeName: DeserializedType<T, 'Edm.String'>,
    sourceName: DeserializedType<T, 'Edm.String'>,
    fieldName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPricingAttributeLinks<T>, T> {
    return new GetByKeyRequestBuilder<ProductPricingAttributeLinks<T>, T>(
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
   * Returns a request builder for updating an entity of type `ProductPricingAttributeLinks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPricingAttributeLinks`.
   */
  update(
    entity: ProductPricingAttributeLinks<T>
  ): UpdateRequestBuilder<ProductPricingAttributeLinks<T>, T> {
    return new UpdateRequestBuilder<ProductPricingAttributeLinks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductPricingAttributeLinks`.
   * @param pricingAttributeGroup Key property. See {@link ProductPricingAttributeLinks.pricingAttributeGroup}.
   * @param attributeName Key property. See {@link ProductPricingAttributeLinks.attributeName}.
   * @param typeName Key property. See {@link ProductPricingAttributeLinks.typeName}.
   * @param sourceName Key property. See {@link ProductPricingAttributeLinks.sourceName}.
   * @param fieldName Key property. See {@link ProductPricingAttributeLinks.fieldName}.
   * @returns A request builder for creating requests that delete an entity of type `ProductPricingAttributeLinks`.
   */
  delete(
    pricingAttributeGroup: string,
    attributeName: string,
    typeName: string,
    sourceName: string,
    fieldName: string
  ): DeleteRequestBuilder<ProductPricingAttributeLinks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPricingAttributeLinks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductPricingAttributeLinks` by taking the entity as a parameter.
   */
  delete(
    entity: ProductPricingAttributeLinks<T>
  ): DeleteRequestBuilder<ProductPricingAttributeLinks<T>, T>;
  delete(
    pricingAttributeGroupOrEntity: any,
    attributeName?: string,
    typeName?: string,
    sourceName?: string,
    fieldName?: string
  ): DeleteRequestBuilder<ProductPricingAttributeLinks<T>, T> {
    return new DeleteRequestBuilder<ProductPricingAttributeLinks<T>, T>(
      this.entityApi,
      pricingAttributeGroupOrEntity instanceof ProductPricingAttributeLinks
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
