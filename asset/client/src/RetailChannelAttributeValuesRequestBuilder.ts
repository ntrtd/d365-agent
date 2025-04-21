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
import { RetailChannelAttributeValues } from './RetailChannelAttributeValues';

/**
 * Request builder class for operations supported on the {@link RetailChannelAttributeValues} entity.
 */
export class RetailChannelAttributeValuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailChannelAttributeValues<T>, T> {
  /**
   * Returns a request builder for querying all `RetailChannelAttributeValues` entities.
   * @returns A request builder for creating requests to retrieve all `RetailChannelAttributeValues` entities.
   */
  getAll(): GetAllRequestBuilder<RetailChannelAttributeValues<T>, T> {
    return new GetAllRequestBuilder<RetailChannelAttributeValues<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailChannelAttributeValues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailChannelAttributeValues`.
   */
  create(
    entity: RetailChannelAttributeValues<T>
  ): CreateRequestBuilder<RetailChannelAttributeValues<T>, T> {
    return new CreateRequestBuilder<RetailChannelAttributeValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailChannelAttributeValues` entity based on its keys.
   * @param retailChannelId Key property. See {@link RetailChannelAttributeValues.retailChannelId}.
   * @param attributeGroupName Key property. See {@link RetailChannelAttributeValues.attributeGroupName}.
   * @param attributeName Key property. See {@link RetailChannelAttributeValues.attributeName}.
   * @param attributeTypeName Key property. See {@link RetailChannelAttributeValues.attributeTypeName}.
   * @returns A request builder for creating requests to retrieve one `RetailChannelAttributeValues` entity based on its keys.
   */
  getByKey(
    retailChannelId: DeserializedType<T, 'Edm.String'>,
    attributeGroupName: DeserializedType<T, 'Edm.String'>,
    attributeName: DeserializedType<T, 'Edm.String'>,
    attributeTypeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailChannelAttributeValues<T>, T> {
    return new GetByKeyRequestBuilder<RetailChannelAttributeValues<T>, T>(
      this.entityApi,
      {
        RetailChannelId: retailChannelId,
        AttributeGroupName: attributeGroupName,
        AttributeName: attributeName,
        AttributeTypeName: attributeTypeName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailChannelAttributeValues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailChannelAttributeValues`.
   */
  update(
    entity: RetailChannelAttributeValues<T>
  ): UpdateRequestBuilder<RetailChannelAttributeValues<T>, T> {
    return new UpdateRequestBuilder<RetailChannelAttributeValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailChannelAttributeValues`.
   * @param retailChannelId Key property. See {@link RetailChannelAttributeValues.retailChannelId}.
   * @param attributeGroupName Key property. See {@link RetailChannelAttributeValues.attributeGroupName}.
   * @param attributeName Key property. See {@link RetailChannelAttributeValues.attributeName}.
   * @param attributeTypeName Key property. See {@link RetailChannelAttributeValues.attributeTypeName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailChannelAttributeValues`.
   */
  delete(
    retailChannelId: string,
    attributeGroupName: string,
    attributeName: string,
    attributeTypeName: string
  ): DeleteRequestBuilder<RetailChannelAttributeValues<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailChannelAttributeValues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailChannelAttributeValues` by taking the entity as a parameter.
   */
  delete(
    entity: RetailChannelAttributeValues<T>
  ): DeleteRequestBuilder<RetailChannelAttributeValues<T>, T>;
  delete(
    retailChannelIdOrEntity: any,
    attributeGroupName?: string,
    attributeName?: string,
    attributeTypeName?: string
  ): DeleteRequestBuilder<RetailChannelAttributeValues<T>, T> {
    return new DeleteRequestBuilder<RetailChannelAttributeValues<T>, T>(
      this.entityApi,
      retailChannelIdOrEntity instanceof RetailChannelAttributeValues
        ? retailChannelIdOrEntity
        : {
            RetailChannelId: retailChannelIdOrEntity!,
            AttributeGroupName: attributeGroupName!,
            AttributeName: attributeName!,
            AttributeTypeName: attributeTypeName!
          }
    );
  }
}
