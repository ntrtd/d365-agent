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
import { PayIntV1Unions } from './PayIntV1Unions';

/**
 * Request builder class for operations supported on the {@link PayIntV1Unions} entity.
 */
export class PayIntV1UnionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1Unions<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1Unions` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1Unions` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1Unions<T>, T> {
    return new GetAllRequestBuilder<PayIntV1Unions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayIntV1Unions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1Unions`.
   */
  create(
    entity: PayIntV1Unions<T>
  ): CreateRequestBuilder<PayIntV1Unions<T>, T> {
    return new CreateRequestBuilder<PayIntV1Unions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1Unions` entity based on its keys.
   * @param unionId Key property. See {@link PayIntV1Unions.unionId}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1Unions` entity based on its keys.
   */
  getByKey(
    unionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1Unions<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1Unions<T>, T>(this.entityApi, {
      UnionId: unionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1Unions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1Unions`.
   */
  update(
    entity: PayIntV1Unions<T>
  ): UpdateRequestBuilder<PayIntV1Unions<T>, T> {
    return new UpdateRequestBuilder<PayIntV1Unions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1Unions`.
   * @param unionId Key property. See {@link PayIntV1Unions.unionId}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1Unions`.
   */
  delete(unionId: string): DeleteRequestBuilder<PayIntV1Unions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1Unions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1Unions` by taking the entity as a parameter.
   */
  delete(entity: PayIntV1Unions<T>): DeleteRequestBuilder<PayIntV1Unions<T>, T>;
  delete(unionIdOrEntity: any): DeleteRequestBuilder<PayIntV1Unions<T>, T> {
    return new DeleteRequestBuilder<PayIntV1Unions<T>, T>(
      this.entityApi,
      unionIdOrEntity instanceof PayIntV1Unions
        ? unionIdOrEntity
        : { UnionId: unionIdOrEntity! }
    );
  }
}
