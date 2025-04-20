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
import { LaborUnions } from './LaborUnions';

/**
 * Request builder class for operations supported on the {@link LaborUnions} entity.
 */
export class LaborUnionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LaborUnions<T>, T> {
  /**
   * Returns a request builder for querying all `LaborUnions` entities.
   * @returns A request builder for creating requests to retrieve all `LaborUnions` entities.
   */
  getAll(): GetAllRequestBuilder<LaborUnions<T>, T> {
    return new GetAllRequestBuilder<LaborUnions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LaborUnions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LaborUnions`.
   */
  create(entity: LaborUnions<T>): CreateRequestBuilder<LaborUnions<T>, T> {
    return new CreateRequestBuilder<LaborUnions<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LaborUnions` entity based on its keys.
   * @param unionId Key property. See {@link LaborUnions.unionId}.
   * @returns A request builder for creating requests to retrieve one `LaborUnions` entity based on its keys.
   */
  getByKey(
    unionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LaborUnions<T>, T> {
    return new GetByKeyRequestBuilder<LaborUnions<T>, T>(this.entityApi, {
      UnionID: unionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LaborUnions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LaborUnions`.
   */
  update(entity: LaborUnions<T>): UpdateRequestBuilder<LaborUnions<T>, T> {
    return new UpdateRequestBuilder<LaborUnions<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LaborUnions`.
   * @param unionId Key property. See {@link LaborUnions.unionId}.
   * @returns A request builder for creating requests that delete an entity of type `LaborUnions`.
   */
  delete(unionId: string): DeleteRequestBuilder<LaborUnions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LaborUnions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LaborUnions` by taking the entity as a parameter.
   */
  delete(entity: LaborUnions<T>): DeleteRequestBuilder<LaborUnions<T>, T>;
  delete(unionIdOrEntity: any): DeleteRequestBuilder<LaborUnions<T>, T> {
    return new DeleteRequestBuilder<LaborUnions<T>, T>(
      this.entityApi,
      unionIdOrEntity instanceof LaborUnions
        ? unionIdOrEntity
        : { UnionID: unionIdOrEntity! }
    );
  }
}
