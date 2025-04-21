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
import { BenefitsParametersV2 } from './BenefitsParametersV2';

/**
 * Request builder class for operations supported on the {@link BenefitsParametersV2} entity.
 */
export class BenefitsParametersV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsParametersV2<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsParametersV2` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsParametersV2` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsParametersV2<T>, T> {
    return new GetAllRequestBuilder<BenefitsParametersV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitsParametersV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsParametersV2`.
   */
  create(
    entity: BenefitsParametersV2<T>
  ): CreateRequestBuilder<BenefitsParametersV2<T>, T> {
    return new CreateRequestBuilder<BenefitsParametersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsParametersV2` entity based on its keys.
   * @param key Key property. See {@link BenefitsParametersV2.key}.
   * @returns A request builder for creating requests to retrieve one `BenefitsParametersV2` entity based on its keys.
   */
  getByKey(
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BenefitsParametersV2<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsParametersV2<T>, T>(
      this.entityApi,
      { Key: key }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsParametersV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsParametersV2`.
   */
  update(
    entity: BenefitsParametersV2<T>
  ): UpdateRequestBuilder<BenefitsParametersV2<T>, T> {
    return new UpdateRequestBuilder<BenefitsParametersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsParametersV2`.
   * @param key Key property. See {@link BenefitsParametersV2.key}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsParametersV2`.
   */
  delete(key: number): DeleteRequestBuilder<BenefitsParametersV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsParametersV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsParametersV2` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsParametersV2<T>
  ): DeleteRequestBuilder<BenefitsParametersV2<T>, T>;
  delete(keyOrEntity: any): DeleteRequestBuilder<BenefitsParametersV2<T>, T> {
    return new DeleteRequestBuilder<BenefitsParametersV2<T>, T>(
      this.entityApi,
      keyOrEntity instanceof BenefitsParametersV2
        ? keyOrEntity
        : { Key: keyOrEntity! }
    );
  }
}
