/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { BenefitsPlanEligibilityRules } from './BenefitsPlanEligibilityRules';

/**
 * Request builder class for operations supported on the {@link BenefitsPlanEligibilityRules} entity.
 */
export class BenefitsPlanEligibilityRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsPlanEligibilityRules<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsPlanEligibilityRules` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsPlanEligibilityRules` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsPlanEligibilityRules<T>, T> {
    return new GetAllRequestBuilder<BenefitsPlanEligibilityRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitsPlanEligibilityRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsPlanEligibilityRules`.
   */
  create(
    entity: BenefitsPlanEligibilityRules<T>
  ): CreateRequestBuilder<BenefitsPlanEligibilityRules<T>, T> {
    return new CreateRequestBuilder<BenefitsPlanEligibilityRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsPlanEligibilityRules` entity based on its keys.
   * @param planId Key property. See {@link BenefitsPlanEligibilityRules.planId}.
   * @param eligibilityRuleId Key property. See {@link BenefitsPlanEligibilityRules.eligibilityRuleId}.
   * @param lineNumber Key property. See {@link BenefitsPlanEligibilityRules.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `BenefitsPlanEligibilityRules` entity based on its keys.
   */
  getByKey(
    planId: DeserializedType<T, 'Edm.String'>,
    eligibilityRuleId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<BenefitsPlanEligibilityRules<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsPlanEligibilityRules<T>, T>(
      this.entityApi,
      {
        PlanId: planId,
        EligibilityRuleId: eligibilityRuleId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsPlanEligibilityRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsPlanEligibilityRules`.
   */
  update(
    entity: BenefitsPlanEligibilityRules<T>
  ): UpdateRequestBuilder<BenefitsPlanEligibilityRules<T>, T> {
    return new UpdateRequestBuilder<BenefitsPlanEligibilityRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsPlanEligibilityRules`.
   * @param planId Key property. See {@link BenefitsPlanEligibilityRules.planId}.
   * @param eligibilityRuleId Key property. See {@link BenefitsPlanEligibilityRules.eligibilityRuleId}.
   * @param lineNumber Key property. See {@link BenefitsPlanEligibilityRules.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPlanEligibilityRules`.
   */
  delete(
    planId: string,
    eligibilityRuleId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<BenefitsPlanEligibilityRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsPlanEligibilityRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPlanEligibilityRules` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsPlanEligibilityRules<T>
  ): DeleteRequestBuilder<BenefitsPlanEligibilityRules<T>, T>;
  delete(
    planIdOrEntity: any,
    eligibilityRuleId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<BenefitsPlanEligibilityRules<T>, T> {
    return new DeleteRequestBuilder<BenefitsPlanEligibilityRules<T>, T>(
      this.entityApi,
      planIdOrEntity instanceof BenefitsPlanEligibilityRules
        ? planIdOrEntity
        : {
            PlanId: planIdOrEntity!,
            EligibilityRuleId: eligibilityRuleId!,
            LineNumber: lineNumber!
          }
    );
  }
}
