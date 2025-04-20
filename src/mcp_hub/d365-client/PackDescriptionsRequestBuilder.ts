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
import { PackDescriptions } from './PackDescriptions';

/**
 * Request builder class for operations supported on the {@link PackDescriptions} entity.
 */
export class PackDescriptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PackDescriptions<T>, T> {
  /**
   * Returns a request builder for querying all `PackDescriptions` entities.
   * @returns A request builder for creating requests to retrieve all `PackDescriptions` entities.
   */
  getAll(): GetAllRequestBuilder<PackDescriptions<T>, T> {
    return new GetAllRequestBuilder<PackDescriptions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PackDescriptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PackDescriptions`.
   */
  create(
    entity: PackDescriptions<T>
  ): CreateRequestBuilder<PackDescriptions<T>, T> {
    return new CreateRequestBuilder<PackDescriptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PackDescriptions` entity based on its keys.
   * @param packCode Key property. See {@link PackDescriptions.packCode}.
   * @returns A request builder for creating requests to retrieve one `PackDescriptions` entity based on its keys.
   */
  getByKey(
    packCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PackDescriptions<T>, T> {
    return new GetByKeyRequestBuilder<PackDescriptions<T>, T>(this.entityApi, {
      PackCode: packCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PackDescriptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PackDescriptions`.
   */
  update(
    entity: PackDescriptions<T>
  ): UpdateRequestBuilder<PackDescriptions<T>, T> {
    return new UpdateRequestBuilder<PackDescriptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PackDescriptions`.
   * @param packCode Key property. See {@link PackDescriptions.packCode}.
   * @returns A request builder for creating requests that delete an entity of type `PackDescriptions`.
   */
  delete(packCode: string): DeleteRequestBuilder<PackDescriptions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PackDescriptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PackDescriptions` by taking the entity as a parameter.
   */
  delete(
    entity: PackDescriptions<T>
  ): DeleteRequestBuilder<PackDescriptions<T>, T>;
  delete(packCodeOrEntity: any): DeleteRequestBuilder<PackDescriptions<T>, T> {
    return new DeleteRequestBuilder<PackDescriptions<T>, T>(
      this.entityApi,
      packCodeOrEntity instanceof PackDescriptions
        ? packCodeOrEntity
        : { PackCode: packCodeOrEntity! }
    );
  }
}
