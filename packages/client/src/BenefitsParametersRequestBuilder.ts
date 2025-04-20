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
import { BenefitsParameters } from './BenefitsParameters';

/**
 * Request builder class for operations supported on the {@link BenefitsParameters} entity.
 */
export class BenefitsParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsParameters<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsParameters` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsParameters` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsParameters<T>, T> {
    return new GetAllRequestBuilder<BenefitsParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitsParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsParameters`.
   */
  create(
    entity: BenefitsParameters<T>
  ): CreateRequestBuilder<BenefitsParameters<T>, T> {
    return new CreateRequestBuilder<BenefitsParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsParameters` entity based on its keys.
   * @param key Key property. See {@link BenefitsParameters.key}.
   * @returns A request builder for creating requests to retrieve one `BenefitsParameters` entity based on its keys.
   */
  getByKey(
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BenefitsParameters<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsParameters<T>, T>(
      this.entityApi,
      { Key: key }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsParameters`.
   */
  update(
    entity: BenefitsParameters<T>
  ): UpdateRequestBuilder<BenefitsParameters<T>, T> {
    return new UpdateRequestBuilder<BenefitsParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsParameters`.
   * @param key Key property. See {@link BenefitsParameters.key}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsParameters`.
   */
  delete(key: number): DeleteRequestBuilder<BenefitsParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsParameters` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsParameters<T>
  ): DeleteRequestBuilder<BenefitsParameters<T>, T>;
  delete(keyOrEntity: any): DeleteRequestBuilder<BenefitsParameters<T>, T> {
    return new DeleteRequestBuilder<BenefitsParameters<T>, T>(
      this.entityApi,
      keyOrEntity instanceof BenefitsParameters
        ? keyOrEntity
        : { Key: keyOrEntity! }
    );
  }
}
