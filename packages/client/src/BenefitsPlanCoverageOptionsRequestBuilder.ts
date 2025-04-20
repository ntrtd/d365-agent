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
import { BenefitsPlanCoverageOptions } from './BenefitsPlanCoverageOptions';

/**
 * Request builder class for operations supported on the {@link BenefitsPlanCoverageOptions} entity.
 */
export class BenefitsPlanCoverageOptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsPlanCoverageOptions<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsPlanCoverageOptions` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsPlanCoverageOptions` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsPlanCoverageOptions<T>, T> {
    return new GetAllRequestBuilder<BenefitsPlanCoverageOptions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitsPlanCoverageOptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsPlanCoverageOptions`.
   */
  create(
    entity: BenefitsPlanCoverageOptions<T>
  ): CreateRequestBuilder<BenefitsPlanCoverageOptions<T>, T> {
    return new CreateRequestBuilder<BenefitsPlanCoverageOptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsPlanCoverageOptions` entity based on its keys.
   * @param planId Key property. See {@link BenefitsPlanCoverageOptions.planId}.
   * @param coverageOptionId Key property. See {@link BenefitsPlanCoverageOptions.coverageOptionId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsPlanCoverageOptions` entity based on its keys.
   */
  getByKey(
    planId: DeserializedType<T, 'Edm.String'>,
    coverageOptionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsPlanCoverageOptions<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsPlanCoverageOptions<T>, T>(
      this.entityApi,
      {
        PlanId: planId,
        CoverageOptionId: coverageOptionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsPlanCoverageOptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsPlanCoverageOptions`.
   */
  update(
    entity: BenefitsPlanCoverageOptions<T>
  ): UpdateRequestBuilder<BenefitsPlanCoverageOptions<T>, T> {
    return new UpdateRequestBuilder<BenefitsPlanCoverageOptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsPlanCoverageOptions`.
   * @param planId Key property. See {@link BenefitsPlanCoverageOptions.planId}.
   * @param coverageOptionId Key property. See {@link BenefitsPlanCoverageOptions.coverageOptionId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPlanCoverageOptions`.
   */
  delete(
    planId: string,
    coverageOptionId: string
  ): DeleteRequestBuilder<BenefitsPlanCoverageOptions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsPlanCoverageOptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPlanCoverageOptions` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsPlanCoverageOptions<T>
  ): DeleteRequestBuilder<BenefitsPlanCoverageOptions<T>, T>;
  delete(
    planIdOrEntity: any,
    coverageOptionId?: string
  ): DeleteRequestBuilder<BenefitsPlanCoverageOptions<T>, T> {
    return new DeleteRequestBuilder<BenefitsPlanCoverageOptions<T>, T>(
      this.entityApi,
      planIdOrEntity instanceof BenefitsPlanCoverageOptions
        ? planIdOrEntity
        : {
            PlanId: planIdOrEntity!,
            CoverageOptionId: coverageOptionId!
          }
    );
  }
}
