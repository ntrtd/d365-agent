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
import { BenefitEligibilityPolicies } from './BenefitEligibilityPolicies';

/**
 * Request builder class for operations supported on the {@link BenefitEligibilityPolicies} entity.
 */
export class BenefitEligibilityPoliciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitEligibilityPolicies<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitEligibilityPolicies` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitEligibilityPolicies` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitEligibilityPolicies<T>, T> {
    return new GetAllRequestBuilder<BenefitEligibilityPolicies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitEligibilityPolicies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitEligibilityPolicies`.
   */
  create(
    entity: BenefitEligibilityPolicies<T>
  ): CreateRequestBuilder<BenefitEligibilityPolicies<T>, T> {
    return new CreateRequestBuilder<BenefitEligibilityPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitEligibilityPolicies` entity based on its keys.
   * @param policyName Key property. See {@link BenefitEligibilityPolicies.policyName}.
   * @returns A request builder for creating requests to retrieve one `BenefitEligibilityPolicies` entity based on its keys.
   */
  getByKey(
    policyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitEligibilityPolicies<T>, T> {
    return new GetByKeyRequestBuilder<BenefitEligibilityPolicies<T>, T>(
      this.entityApi,
      { PolicyName: policyName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitEligibilityPolicies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitEligibilityPolicies`.
   */
  update(
    entity: BenefitEligibilityPolicies<T>
  ): UpdateRequestBuilder<BenefitEligibilityPolicies<T>, T> {
    return new UpdateRequestBuilder<BenefitEligibilityPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitEligibilityPolicies`.
   * @param policyName Key property. See {@link BenefitEligibilityPolicies.policyName}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitEligibilityPolicies`.
   */
  delete(
    policyName: string
  ): DeleteRequestBuilder<BenefitEligibilityPolicies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitEligibilityPolicies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitEligibilityPolicies` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitEligibilityPolicies<T>
  ): DeleteRequestBuilder<BenefitEligibilityPolicies<T>, T>;
  delete(
    policyNameOrEntity: any
  ): DeleteRequestBuilder<BenefitEligibilityPolicies<T>, T> {
    return new DeleteRequestBuilder<BenefitEligibilityPolicies<T>, T>(
      this.entityApi,
      policyNameOrEntity instanceof BenefitEligibilityPolicies
        ? policyNameOrEntity
        : { PolicyName: policyNameOrEntity! }
    );
  }
}
