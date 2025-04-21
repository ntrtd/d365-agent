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
import { CustomApis } from './CustomApis';

/**
 * Request builder class for operations supported on the {@link CustomApis} entity.
 */
export class CustomApisRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomApis<T>, T> {
  /**
   * Returns a request builder for querying all `CustomApis` entities.
   * @returns A request builder for creating requests to retrieve all `CustomApis` entities.
   */
  getAll(): GetAllRequestBuilder<CustomApis<T>, T> {
    return new GetAllRequestBuilder<CustomApis<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomApis` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomApis`.
   */
  create(entity: CustomApis<T>): CreateRequestBuilder<CustomApis<T>, T> {
    return new CreateRequestBuilder<CustomApis<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CustomApis` entity based on its keys.
   * @param entityName Key property. See {@link CustomApis.entityName}.
   * @returns A request builder for creating requests to retrieve one `CustomApis` entity based on its keys.
   */
  getByKey(
    entityName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomApis<T>, T> {
    return new GetByKeyRequestBuilder<CustomApis<T>, T>(this.entityApi, {
      EntityName: entityName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustomApis`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomApis`.
   */
  update(entity: CustomApis<T>): UpdateRequestBuilder<CustomApis<T>, T> {
    return new UpdateRequestBuilder<CustomApis<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomApis`.
   * @param entityName Key property. See {@link CustomApis.entityName}.
   * @returns A request builder for creating requests that delete an entity of type `CustomApis`.
   */
  delete(entityName: string): DeleteRequestBuilder<CustomApis<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomApis`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomApis` by taking the entity as a parameter.
   */
  delete(entity: CustomApis<T>): DeleteRequestBuilder<CustomApis<T>, T>;
  delete(entityNameOrEntity: any): DeleteRequestBuilder<CustomApis<T>, T> {
    return new DeleteRequestBuilder<CustomApis<T>, T>(
      this.entityApi,
      entityNameOrEntity instanceof CustomApis
        ? entityNameOrEntity
        : { EntityName: entityNameOrEntity! }
    );
  }
}
