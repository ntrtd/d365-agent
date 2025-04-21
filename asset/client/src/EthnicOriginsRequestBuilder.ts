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
import { EthnicOrigins } from './EthnicOrigins';

/**
 * Request builder class for operations supported on the {@link EthnicOrigins} entity.
 */
export class EthnicOriginsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EthnicOrigins<T>, T> {
  /**
   * Returns a request builder for querying all `EthnicOrigins` entities.
   * @returns A request builder for creating requests to retrieve all `EthnicOrigins` entities.
   */
  getAll(): GetAllRequestBuilder<EthnicOrigins<T>, T> {
    return new GetAllRequestBuilder<EthnicOrigins<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EthnicOrigins` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EthnicOrigins`.
   */
  create(entity: EthnicOrigins<T>): CreateRequestBuilder<EthnicOrigins<T>, T> {
    return new CreateRequestBuilder<EthnicOrigins<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EthnicOrigins` entity based on its keys.
   * @param ethnicOriginId Key property. See {@link EthnicOrigins.ethnicOriginId}.
   * @returns A request builder for creating requests to retrieve one `EthnicOrigins` entity based on its keys.
   */
  getByKey(
    ethnicOriginId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EthnicOrigins<T>, T> {
    return new GetByKeyRequestBuilder<EthnicOrigins<T>, T>(this.entityApi, {
      EthnicOriginId: ethnicOriginId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EthnicOrigins`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EthnicOrigins`.
   */
  update(entity: EthnicOrigins<T>): UpdateRequestBuilder<EthnicOrigins<T>, T> {
    return new UpdateRequestBuilder<EthnicOrigins<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EthnicOrigins`.
   * @param ethnicOriginId Key property. See {@link EthnicOrigins.ethnicOriginId}.
   * @returns A request builder for creating requests that delete an entity of type `EthnicOrigins`.
   */
  delete(ethnicOriginId: string): DeleteRequestBuilder<EthnicOrigins<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EthnicOrigins`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EthnicOrigins` by taking the entity as a parameter.
   */
  delete(entity: EthnicOrigins<T>): DeleteRequestBuilder<EthnicOrigins<T>, T>;
  delete(
    ethnicOriginIdOrEntity: any
  ): DeleteRequestBuilder<EthnicOrigins<T>, T> {
    return new DeleteRequestBuilder<EthnicOrigins<T>, T>(
      this.entityApi,
      ethnicOriginIdOrEntity instanceof EthnicOrigins
        ? ethnicOriginIdOrEntity
        : { EthnicOriginId: ethnicOriginIdOrEntity! }
    );
  }
}
