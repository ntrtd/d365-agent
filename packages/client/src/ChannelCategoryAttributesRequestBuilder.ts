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
import { ChannelCategoryAttributes } from './ChannelCategoryAttributes';

/**
 * Request builder class for operations supported on the {@link ChannelCategoryAttributes} entity.
 */
export class ChannelCategoryAttributesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ChannelCategoryAttributes<T>, T> {
  /**
   * Returns a request builder for querying all `ChannelCategoryAttributes` entities.
   * @returns A request builder for creating requests to retrieve all `ChannelCategoryAttributes` entities.
   */
  getAll(): GetAllRequestBuilder<ChannelCategoryAttributes<T>, T> {
    return new GetAllRequestBuilder<ChannelCategoryAttributes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ChannelCategoryAttributes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ChannelCategoryAttributes`.
   */
  create(
    entity: ChannelCategoryAttributes<T>
  ): CreateRequestBuilder<ChannelCategoryAttributes<T>, T> {
    return new CreateRequestBuilder<ChannelCategoryAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ChannelCategoryAttributes` entity based on its keys.
   * @param retailChannelId Key property. See {@link ChannelCategoryAttributes.retailChannelId}.
   * @param productCategoryHierarchyName Key property. See {@link ChannelCategoryAttributes.productCategoryHierarchyName}.
   * @param productCategoryName Key property. See {@link ChannelCategoryAttributes.productCategoryName}.
   * @param attributeName Key property. See {@link ChannelCategoryAttributes.attributeName}.
   * @param attributeTypeName Key property. See {@link ChannelCategoryAttributes.attributeTypeName}.
   * @returns A request builder for creating requests to retrieve one `ChannelCategoryAttributes` entity based on its keys.
   */
  getByKey(
    retailChannelId: DeserializedType<T, 'Edm.String'>,
    productCategoryHierarchyName: DeserializedType<T, 'Edm.String'>,
    productCategoryName: DeserializedType<T, 'Edm.String'>,
    attributeName: DeserializedType<T, 'Edm.String'>,
    attributeTypeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ChannelCategoryAttributes<T>, T> {
    return new GetByKeyRequestBuilder<ChannelCategoryAttributes<T>, T>(
      this.entityApi,
      {
        RetailChannelId: retailChannelId,
        ProductCategoryHierarchyName: productCategoryHierarchyName,
        ProductCategoryName: productCategoryName,
        AttributeName: attributeName,
        AttributeTypeName: attributeTypeName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ChannelCategoryAttributes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ChannelCategoryAttributes`.
   */
  update(
    entity: ChannelCategoryAttributes<T>
  ): UpdateRequestBuilder<ChannelCategoryAttributes<T>, T> {
    return new UpdateRequestBuilder<ChannelCategoryAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ChannelCategoryAttributes`.
   * @param retailChannelId Key property. See {@link ChannelCategoryAttributes.retailChannelId}.
   * @param productCategoryHierarchyName Key property. See {@link ChannelCategoryAttributes.productCategoryHierarchyName}.
   * @param productCategoryName Key property. See {@link ChannelCategoryAttributes.productCategoryName}.
   * @param attributeName Key property. See {@link ChannelCategoryAttributes.attributeName}.
   * @param attributeTypeName Key property. See {@link ChannelCategoryAttributes.attributeTypeName}.
   * @returns A request builder for creating requests that delete an entity of type `ChannelCategoryAttributes`.
   */
  delete(
    retailChannelId: string,
    productCategoryHierarchyName: string,
    productCategoryName: string,
    attributeName: string,
    attributeTypeName: string
  ): DeleteRequestBuilder<ChannelCategoryAttributes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ChannelCategoryAttributes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ChannelCategoryAttributes` by taking the entity as a parameter.
   */
  delete(
    entity: ChannelCategoryAttributes<T>
  ): DeleteRequestBuilder<ChannelCategoryAttributes<T>, T>;
  delete(
    retailChannelIdOrEntity: any,
    productCategoryHierarchyName?: string,
    productCategoryName?: string,
    attributeName?: string,
    attributeTypeName?: string
  ): DeleteRequestBuilder<ChannelCategoryAttributes<T>, T> {
    return new DeleteRequestBuilder<ChannelCategoryAttributes<T>, T>(
      this.entityApi,
      retailChannelIdOrEntity instanceof ChannelCategoryAttributes
        ? retailChannelIdOrEntity
        : {
            RetailChannelId: retailChannelIdOrEntity!,
            ProductCategoryHierarchyName: productCategoryHierarchyName!,
            ProductCategoryName: productCategoryName!,
            AttributeName: attributeName!,
            AttributeTypeName: attributeTypeName!
          }
    );
  }
}
