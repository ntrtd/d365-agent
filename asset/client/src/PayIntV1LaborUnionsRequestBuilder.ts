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
import { PayIntV1LaborUnions } from './PayIntV1LaborUnions';

/**
 * Request builder class for operations supported on the {@link PayIntV1LaborUnions} entity.
 */
export class PayIntV1LaborUnionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1LaborUnions<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1LaborUnions` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1LaborUnions` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1LaborUnions<T>, T> {
    return new GetAllRequestBuilder<PayIntV1LaborUnions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayIntV1LaborUnions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1LaborUnions`.
   */
  create(
    entity: PayIntV1LaborUnions<T>
  ): CreateRequestBuilder<PayIntV1LaborUnions<T>, T> {
    return new CreateRequestBuilder<PayIntV1LaborUnions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1LaborUnions` entity based on its keys.
   * @param unionId Key property. See {@link PayIntV1LaborUnions.unionId}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1LaborUnions` entity based on its keys.
   */
  getByKey(
    unionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1LaborUnions<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1LaborUnions<T>, T>(
      this.entityApi,
      { UnionID: unionId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1LaborUnions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1LaborUnions`.
   */
  update(
    entity: PayIntV1LaborUnions<T>
  ): UpdateRequestBuilder<PayIntV1LaborUnions<T>, T> {
    return new UpdateRequestBuilder<PayIntV1LaborUnions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1LaborUnions`.
   * @param unionId Key property. See {@link PayIntV1LaborUnions.unionId}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1LaborUnions`.
   */
  delete(unionId: string): DeleteRequestBuilder<PayIntV1LaborUnions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1LaborUnions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1LaborUnions` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1LaborUnions<T>
  ): DeleteRequestBuilder<PayIntV1LaborUnions<T>, T>;
  delete(
    unionIdOrEntity: any
  ): DeleteRequestBuilder<PayIntV1LaborUnions<T>, T> {
    return new DeleteRequestBuilder<PayIntV1LaborUnions<T>, T>(
      this.entityApi,
      unionIdOrEntity instanceof PayIntV1LaborUnions
        ? unionIdOrEntity
        : { UnionID: unionIdOrEntity! }
    );
  }
}
