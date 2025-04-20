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
import { BenefitsCoverageOptions } from './BenefitsCoverageOptions';

/**
 * Request builder class for operations supported on the {@link BenefitsCoverageOptions} entity.
 */
export class BenefitsCoverageOptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsCoverageOptions<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsCoverageOptions` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsCoverageOptions` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsCoverageOptions<T>, T> {
    return new GetAllRequestBuilder<BenefitsCoverageOptions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitsCoverageOptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsCoverageOptions`.
   */
  create(
    entity: BenefitsCoverageOptions<T>
  ): CreateRequestBuilder<BenefitsCoverageOptions<T>, T> {
    return new CreateRequestBuilder<BenefitsCoverageOptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsCoverageOptions` entity based on its keys.
   * @param coverageOptionId Key property. See {@link BenefitsCoverageOptions.coverageOptionId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsCoverageOptions` entity based on its keys.
   */
  getByKey(
    coverageOptionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsCoverageOptions<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsCoverageOptions<T>, T>(
      this.entityApi,
      { CoverageOptionId: coverageOptionId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsCoverageOptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsCoverageOptions`.
   */
  update(
    entity: BenefitsCoverageOptions<T>
  ): UpdateRequestBuilder<BenefitsCoverageOptions<T>, T> {
    return new UpdateRequestBuilder<BenefitsCoverageOptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsCoverageOptions`.
   * @param coverageOptionId Key property. See {@link BenefitsCoverageOptions.coverageOptionId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsCoverageOptions`.
   */
  delete(
    coverageOptionId: string
  ): DeleteRequestBuilder<BenefitsCoverageOptions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsCoverageOptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsCoverageOptions` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsCoverageOptions<T>
  ): DeleteRequestBuilder<BenefitsCoverageOptions<T>, T>;
  delete(
    coverageOptionIdOrEntity: any
  ): DeleteRequestBuilder<BenefitsCoverageOptions<T>, T> {
    return new DeleteRequestBuilder<BenefitsCoverageOptions<T>, T>(
      this.entityApi,
      coverageOptionIdOrEntity instanceof BenefitsCoverageOptions
        ? coverageOptionIdOrEntity
        : { CoverageOptionId: coverageOptionIdOrEntity! }
    );
  }
}
