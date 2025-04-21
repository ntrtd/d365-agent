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
import { RetirementBenefitPlanDetails } from './RetirementBenefitPlanDetails';

/**
 * Request builder class for operations supported on the {@link RetirementBenefitPlanDetails} entity.
 */
export class RetirementBenefitPlanDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetirementBenefitPlanDetails<T>, T> {
  /**
   * Returns a request builder for querying all `RetirementBenefitPlanDetails` entities.
   * @returns A request builder for creating requests to retrieve all `RetirementBenefitPlanDetails` entities.
   */
  getAll(): GetAllRequestBuilder<RetirementBenefitPlanDetails<T>, T> {
    return new GetAllRequestBuilder<RetirementBenefitPlanDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetirementBenefitPlanDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetirementBenefitPlanDetails`.
   */
  create(
    entity: RetirementBenefitPlanDetails<T>
  ): CreateRequestBuilder<RetirementBenefitPlanDetails<T>, T> {
    return new CreateRequestBuilder<RetirementBenefitPlanDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetirementBenefitPlanDetails` entity based on its keys.
   * @param benefitPlanId Key property. See {@link RetirementBenefitPlanDetails.benefitPlanId}.
   * @returns A request builder for creating requests to retrieve one `RetirementBenefitPlanDetails` entity based on its keys.
   */
  getByKey(
    benefitPlanId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetirementBenefitPlanDetails<T>, T> {
    return new GetByKeyRequestBuilder<RetirementBenefitPlanDetails<T>, T>(
      this.entityApi,
      { BenefitPlanID: benefitPlanId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetirementBenefitPlanDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetirementBenefitPlanDetails`.
   */
  update(
    entity: RetirementBenefitPlanDetails<T>
  ): UpdateRequestBuilder<RetirementBenefitPlanDetails<T>, T> {
    return new UpdateRequestBuilder<RetirementBenefitPlanDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetirementBenefitPlanDetails`.
   * @param benefitPlanId Key property. See {@link RetirementBenefitPlanDetails.benefitPlanId}.
   * @returns A request builder for creating requests that delete an entity of type `RetirementBenefitPlanDetails`.
   */
  delete(
    benefitPlanId: string
  ): DeleteRequestBuilder<RetirementBenefitPlanDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetirementBenefitPlanDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetirementBenefitPlanDetails` by taking the entity as a parameter.
   */
  delete(
    entity: RetirementBenefitPlanDetails<T>
  ): DeleteRequestBuilder<RetirementBenefitPlanDetails<T>, T>;
  delete(
    benefitPlanIdOrEntity: any
  ): DeleteRequestBuilder<RetirementBenefitPlanDetails<T>, T> {
    return new DeleteRequestBuilder<RetirementBenefitPlanDetails<T>, T>(
      this.entityApi,
      benefitPlanIdOrEntity instanceof RetirementBenefitPlanDetails
        ? benefitPlanIdOrEntity
        : { BenefitPlanID: benefitPlanIdOrEntity! }
    );
  }
}
