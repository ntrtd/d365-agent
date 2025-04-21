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
import { BenefitEligibilityPolicyRuleTypes } from './BenefitEligibilityPolicyRuleTypes';

/**
 * Request builder class for operations supported on the {@link BenefitEligibilityPolicyRuleTypes} entity.
 */
export class BenefitEligibilityPolicyRuleTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitEligibilityPolicyRuleTypes<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitEligibilityPolicyRuleTypes` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitEligibilityPolicyRuleTypes` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitEligibilityPolicyRuleTypes<T>, T> {
    return new GetAllRequestBuilder<BenefitEligibilityPolicyRuleTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitEligibilityPolicyRuleTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitEligibilityPolicyRuleTypes`.
   */
  create(
    entity: BenefitEligibilityPolicyRuleTypes<T>
  ): CreateRequestBuilder<BenefitEligibilityPolicyRuleTypes<T>, T> {
    return new CreateRequestBuilder<BenefitEligibilityPolicyRuleTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitEligibilityPolicyRuleTypes` entity based on its keys.
   * @param ruleName Key property. See {@link BenefitEligibilityPolicyRuleTypes.ruleName}.
   * @returns A request builder for creating requests to retrieve one `BenefitEligibilityPolicyRuleTypes` entity based on its keys.
   */
  getByKey(
    ruleName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitEligibilityPolicyRuleTypes<T>, T> {
    return new GetByKeyRequestBuilder<BenefitEligibilityPolicyRuleTypes<T>, T>(
      this.entityApi,
      { RuleName: ruleName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitEligibilityPolicyRuleTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitEligibilityPolicyRuleTypes`.
   */
  update(
    entity: BenefitEligibilityPolicyRuleTypes<T>
  ): UpdateRequestBuilder<BenefitEligibilityPolicyRuleTypes<T>, T> {
    return new UpdateRequestBuilder<BenefitEligibilityPolicyRuleTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitEligibilityPolicyRuleTypes`.
   * @param ruleName Key property. See {@link BenefitEligibilityPolicyRuleTypes.ruleName}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitEligibilityPolicyRuleTypes`.
   */
  delete(
    ruleName: string
  ): DeleteRequestBuilder<BenefitEligibilityPolicyRuleTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitEligibilityPolicyRuleTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitEligibilityPolicyRuleTypes` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitEligibilityPolicyRuleTypes<T>
  ): DeleteRequestBuilder<BenefitEligibilityPolicyRuleTypes<T>, T>;
  delete(
    ruleNameOrEntity: any
  ): DeleteRequestBuilder<BenefitEligibilityPolicyRuleTypes<T>, T> {
    return new DeleteRequestBuilder<BenefitEligibilityPolicyRuleTypes<T>, T>(
      this.entityApi,
      ruleNameOrEntity instanceof BenefitEligibilityPolicyRuleTypes
        ? ruleNameOrEntity
        : { RuleName: ruleNameOrEntity! }
    );
  }
}
