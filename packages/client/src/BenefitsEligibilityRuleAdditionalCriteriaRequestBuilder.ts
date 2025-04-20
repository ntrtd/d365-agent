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
import { BenefitsEligibilityRuleAdditionalCriteria } from './BenefitsEligibilityRuleAdditionalCriteria';
import { BenefitEligibleType } from './BenefitEligibleType';

/**
 * Request builder class for operations supported on the {@link BenefitsEligibilityRuleAdditionalCriteria} entity.
 */
export class BenefitsEligibilityRuleAdditionalCriteriaRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsEligibilityRuleAdditionalCriteria<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsEligibilityRuleAdditionalCriteria` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsEligibilityRuleAdditionalCriteria` entities.
   */
  getAll(): GetAllRequestBuilder<
    BenefitsEligibilityRuleAdditionalCriteria<T>,
    T
  > {
    return new GetAllRequestBuilder<
      BenefitsEligibilityRuleAdditionalCriteria<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitsEligibilityRuleAdditionalCriteria` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsEligibilityRuleAdditionalCriteria`.
   */
  create(
    entity: BenefitsEligibilityRuleAdditionalCriteria<T>
  ): CreateRequestBuilder<BenefitsEligibilityRuleAdditionalCriteria<T>, T> {
    return new CreateRequestBuilder<
      BenefitsEligibilityRuleAdditionalCriteria<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BenefitsEligibilityRuleAdditionalCriteria` entity based on its keys.
   * @param eligibilityRuleId Key property. See {@link BenefitsEligibilityRuleAdditionalCriteria.eligibilityRuleId}.
   * @param eligibleType Key property. See {@link BenefitsEligibilityRuleAdditionalCriteria.eligibleType}.
   * @param referenceId Key property. See {@link BenefitsEligibilityRuleAdditionalCriteria.referenceId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsEligibilityRuleAdditionalCriteria` entity based on its keys.
   */
  getByKey(
    eligibilityRuleId: DeserializedType<T, 'Edm.String'>,
    eligibleType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BenefitEligibleType'
    >,
    referenceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsEligibilityRuleAdditionalCriteria<T>, T> {
    return new GetByKeyRequestBuilder<
      BenefitsEligibilityRuleAdditionalCriteria<T>,
      T
    >(this.entityApi, {
      EligibilityRuleId: eligibilityRuleId,
      EligibleType: eligibleType,
      ReferenceId: referenceId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsEligibilityRuleAdditionalCriteria`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsEligibilityRuleAdditionalCriteria`.
   */
  update(
    entity: BenefitsEligibilityRuleAdditionalCriteria<T>
  ): UpdateRequestBuilder<BenefitsEligibilityRuleAdditionalCriteria<T>, T> {
    return new UpdateRequestBuilder<
      BenefitsEligibilityRuleAdditionalCriteria<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsEligibilityRuleAdditionalCriteria`.
   * @param eligibilityRuleId Key property. See {@link BenefitsEligibilityRuleAdditionalCriteria.eligibilityRuleId}.
   * @param eligibleType Key property. See {@link BenefitsEligibilityRuleAdditionalCriteria.eligibleType}.
   * @param referenceId Key property. See {@link BenefitsEligibilityRuleAdditionalCriteria.referenceId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsEligibilityRuleAdditionalCriteria`.
   */
  delete(
    eligibilityRuleId: string,
    eligibleType: BenefitEligibleType,
    referenceId: string
  ): DeleteRequestBuilder<BenefitsEligibilityRuleAdditionalCriteria<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsEligibilityRuleAdditionalCriteria`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsEligibilityRuleAdditionalCriteria` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsEligibilityRuleAdditionalCriteria<T>
  ): DeleteRequestBuilder<BenefitsEligibilityRuleAdditionalCriteria<T>, T>;
  delete(
    eligibilityRuleIdOrEntity: any,
    eligibleType?: BenefitEligibleType,
    referenceId?: string
  ): DeleteRequestBuilder<BenefitsEligibilityRuleAdditionalCriteria<T>, T> {
    return new DeleteRequestBuilder<
      BenefitsEligibilityRuleAdditionalCriteria<T>,
      T
    >(
      this.entityApi,
      eligibilityRuleIdOrEntity instanceof
      BenefitsEligibilityRuleAdditionalCriteria
        ? eligibilityRuleIdOrEntity
        : {
            EligibilityRuleId: eligibilityRuleIdOrEntity!,
            EligibleType: eligibleType!,
            ReferenceId: referenceId!
          }
    );
  }
}
