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
import { RetailChannelProfileProperties } from './RetailChannelProfileProperties';

/**
 * Request builder class for operations supported on the {@link RetailChannelProfileProperties} entity.
 */
export class RetailChannelProfilePropertiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailChannelProfileProperties<T>, T> {
  /**
   * Returns a request builder for querying all `RetailChannelProfileProperties` entities.
   * @returns A request builder for creating requests to retrieve all `RetailChannelProfileProperties` entities.
   */
  getAll(): GetAllRequestBuilder<RetailChannelProfileProperties<T>, T> {
    return new GetAllRequestBuilder<RetailChannelProfileProperties<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailChannelProfileProperties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailChannelProfileProperties`.
   */
  create(
    entity: RetailChannelProfileProperties<T>
  ): CreateRequestBuilder<RetailChannelProfileProperties<T>, T> {
    return new CreateRequestBuilder<RetailChannelProfileProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailChannelProfileProperties` entity based on its keys.
   * @param retailChannelProfileName Key property. See {@link RetailChannelProfileProperties.retailChannelProfileName}.
   * @param key Key property. See {@link RetailChannelProfileProperties.key}.
   * @param value Key property. See {@link RetailChannelProfileProperties.value}.
   * @returns A request builder for creating requests to retrieve one `RetailChannelProfileProperties` entity based on its keys.
   */
  getByKey(
    retailChannelProfileName: DeserializedType<T, 'Edm.String'>,
    key: DeserializedType<T, 'Edm.Int32'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailChannelProfileProperties<T>, T> {
    return new GetByKeyRequestBuilder<RetailChannelProfileProperties<T>, T>(
      this.entityApi,
      {
        RetailChannelProfile_Name: retailChannelProfileName,
        Key: key,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailChannelProfileProperties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailChannelProfileProperties`.
   */
  update(
    entity: RetailChannelProfileProperties<T>
  ): UpdateRequestBuilder<RetailChannelProfileProperties<T>, T> {
    return new UpdateRequestBuilder<RetailChannelProfileProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailChannelProfileProperties`.
   * @param retailChannelProfileName Key property. See {@link RetailChannelProfileProperties.retailChannelProfileName}.
   * @param key Key property. See {@link RetailChannelProfileProperties.key}.
   * @param value Key property. See {@link RetailChannelProfileProperties.value}.
   * @returns A request builder for creating requests that delete an entity of type `RetailChannelProfileProperties`.
   */
  delete(
    retailChannelProfileName: string,
    key: number,
    value: string
  ): DeleteRequestBuilder<RetailChannelProfileProperties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailChannelProfileProperties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailChannelProfileProperties` by taking the entity as a parameter.
   */
  delete(
    entity: RetailChannelProfileProperties<T>
  ): DeleteRequestBuilder<RetailChannelProfileProperties<T>, T>;
  delete(
    retailChannelProfileNameOrEntity: any,
    key?: number,
    value?: string
  ): DeleteRequestBuilder<RetailChannelProfileProperties<T>, T> {
    return new DeleteRequestBuilder<RetailChannelProfileProperties<T>, T>(
      this.entityApi,
      retailChannelProfileNameOrEntity instanceof RetailChannelProfileProperties
        ? retailChannelProfileNameOrEntity
        : {
            RetailChannelProfile_Name: retailChannelProfileNameOrEntity!,
            Key: key!,
            Value: value!
          }
    );
  }
}
