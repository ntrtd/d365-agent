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
import { EngineeringProductAttributes } from './EngineeringProductAttributes';

/**
 * Request builder class for operations supported on the {@link EngineeringProductAttributes} entity.
 */
export class EngineeringProductAttributesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringProductAttributes<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringProductAttributes` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringProductAttributes` entities.
   */
  getAll(): GetAllRequestBuilder<EngineeringProductAttributes<T>, T> {
    return new GetAllRequestBuilder<EngineeringProductAttributes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EngineeringProductAttributes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringProductAttributes`.
   */
  create(
    entity: EngineeringProductAttributes<T>
  ): CreateRequestBuilder<EngineeringProductAttributes<T>, T> {
    return new CreateRequestBuilder<EngineeringProductAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EngineeringProductAttributes` entity based on its keys.
   * @param attributeName Key property. See {@link EngineeringProductAttributes.attributeName}.
   * @returns A request builder for creating requests to retrieve one `EngineeringProductAttributes` entity based on its keys.
   */
  getByKey(
    attributeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringProductAttributes<T>, T> {
    return new GetByKeyRequestBuilder<EngineeringProductAttributes<T>, T>(
      this.entityApi,
      { AttributeName: attributeName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringProductAttributes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringProductAttributes`.
   */
  update(
    entity: EngineeringProductAttributes<T>
  ): UpdateRequestBuilder<EngineeringProductAttributes<T>, T> {
    return new UpdateRequestBuilder<EngineeringProductAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringProductAttributes`.
   * @param attributeName Key property. See {@link EngineeringProductAttributes.attributeName}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringProductAttributes`.
   */
  delete(
    attributeName: string
  ): DeleteRequestBuilder<EngineeringProductAttributes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringProductAttributes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringProductAttributes` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringProductAttributes<T>
  ): DeleteRequestBuilder<EngineeringProductAttributes<T>, T>;
  delete(
    attributeNameOrEntity: any
  ): DeleteRequestBuilder<EngineeringProductAttributes<T>, T> {
    return new DeleteRequestBuilder<EngineeringProductAttributes<T>, T>(
      this.entityApi,
      attributeNameOrEntity instanceof EngineeringProductAttributes
        ? attributeNameOrEntity
        : { AttributeName: attributeNameOrEntity! }
    );
  }
}
