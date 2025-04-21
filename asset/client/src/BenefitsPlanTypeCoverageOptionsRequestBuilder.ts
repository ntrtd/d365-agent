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
import { BenefitsPlanTypeCoverageOptions } from './BenefitsPlanTypeCoverageOptions';

/**
 * Request builder class for operations supported on the {@link BenefitsPlanTypeCoverageOptions} entity.
 */
export class BenefitsPlanTypeCoverageOptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsPlanTypeCoverageOptions<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsPlanTypeCoverageOptions` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsPlanTypeCoverageOptions` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsPlanTypeCoverageOptions<T>, T> {
    return new GetAllRequestBuilder<BenefitsPlanTypeCoverageOptions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitsPlanTypeCoverageOptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsPlanTypeCoverageOptions`.
   */
  create(
    entity: BenefitsPlanTypeCoverageOptions<T>
  ): CreateRequestBuilder<BenefitsPlanTypeCoverageOptions<T>, T> {
    return new CreateRequestBuilder<BenefitsPlanTypeCoverageOptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsPlanTypeCoverageOptions` entity based on its keys.
   * @param planTypeId Key property. See {@link BenefitsPlanTypeCoverageOptions.planTypeId}.
   * @param coverageOptionId Key property. See {@link BenefitsPlanTypeCoverageOptions.coverageOptionId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsPlanTypeCoverageOptions` entity based on its keys.
   */
  getByKey(
    planTypeId: DeserializedType<T, 'Edm.String'>,
    coverageOptionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsPlanTypeCoverageOptions<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsPlanTypeCoverageOptions<T>, T>(
      this.entityApi,
      {
        PlanTypeId: planTypeId,
        CoverageOptionId: coverageOptionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsPlanTypeCoverageOptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsPlanTypeCoverageOptions`.
   */
  update(
    entity: BenefitsPlanTypeCoverageOptions<T>
  ): UpdateRequestBuilder<BenefitsPlanTypeCoverageOptions<T>, T> {
    return new UpdateRequestBuilder<BenefitsPlanTypeCoverageOptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsPlanTypeCoverageOptions`.
   * @param planTypeId Key property. See {@link BenefitsPlanTypeCoverageOptions.planTypeId}.
   * @param coverageOptionId Key property. See {@link BenefitsPlanTypeCoverageOptions.coverageOptionId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPlanTypeCoverageOptions`.
   */
  delete(
    planTypeId: string,
    coverageOptionId: string
  ): DeleteRequestBuilder<BenefitsPlanTypeCoverageOptions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsPlanTypeCoverageOptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPlanTypeCoverageOptions` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsPlanTypeCoverageOptions<T>
  ): DeleteRequestBuilder<BenefitsPlanTypeCoverageOptions<T>, T>;
  delete(
    planTypeIdOrEntity: any,
    coverageOptionId?: string
  ): DeleteRequestBuilder<BenefitsPlanTypeCoverageOptions<T>, T> {
    return new DeleteRequestBuilder<BenefitsPlanTypeCoverageOptions<T>, T>(
      this.entityApi,
      planTypeIdOrEntity instanceof BenefitsPlanTypeCoverageOptions
        ? planTypeIdOrEntity
        : {
            PlanTypeId: planTypeIdOrEntity!,
            CoverageOptionId: coverageOptionId!
          }
    );
  }
}
