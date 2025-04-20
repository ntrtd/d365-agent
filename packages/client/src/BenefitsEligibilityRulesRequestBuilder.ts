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
import { BenefitsEligibilityRules } from './BenefitsEligibilityRules';

/**
 * Request builder class for operations supported on the {@link BenefitsEligibilityRules} entity.
 */
export class BenefitsEligibilityRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsEligibilityRules<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsEligibilityRules` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsEligibilityRules` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsEligibilityRules<T>, T> {
    return new GetAllRequestBuilder<BenefitsEligibilityRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitsEligibilityRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsEligibilityRules`.
   */
  create(
    entity: BenefitsEligibilityRules<T>
  ): CreateRequestBuilder<BenefitsEligibilityRules<T>, T> {
    return new CreateRequestBuilder<BenefitsEligibilityRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsEligibilityRules` entity based on its keys.
   * @param eligibilityRuleId Key property. See {@link BenefitsEligibilityRules.eligibilityRuleId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsEligibilityRules` entity based on its keys.
   */
  getByKey(
    eligibilityRuleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsEligibilityRules<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsEligibilityRules<T>, T>(
      this.entityApi,
      { EligibilityRuleId: eligibilityRuleId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsEligibilityRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsEligibilityRules`.
   */
  update(
    entity: BenefitsEligibilityRules<T>
  ): UpdateRequestBuilder<BenefitsEligibilityRules<T>, T> {
    return new UpdateRequestBuilder<BenefitsEligibilityRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsEligibilityRules`.
   * @param eligibilityRuleId Key property. See {@link BenefitsEligibilityRules.eligibilityRuleId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsEligibilityRules`.
   */
  delete(
    eligibilityRuleId: string
  ): DeleteRequestBuilder<BenefitsEligibilityRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsEligibilityRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsEligibilityRules` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsEligibilityRules<T>
  ): DeleteRequestBuilder<BenefitsEligibilityRules<T>, T>;
  delete(
    eligibilityRuleIdOrEntity: any
  ): DeleteRequestBuilder<BenefitsEligibilityRules<T>, T> {
    return new DeleteRequestBuilder<BenefitsEligibilityRules<T>, T>(
      this.entityApi,
      eligibilityRuleIdOrEntity instanceof BenefitsEligibilityRules
        ? eligibilityRuleIdOrEntity
        : { EligibilityRuleId: eligibilityRuleIdOrEntity! }
    );
  }
}
