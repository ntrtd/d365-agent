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
import { BenefitEligibilityRules } from './BenefitEligibilityRules';

/**
 * Request builder class for operations supported on the {@link BenefitEligibilityRules} entity.
 */
export class BenefitEligibilityRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitEligibilityRules<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitEligibilityRules` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitEligibilityRules` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitEligibilityRules<T>, T> {
    return new GetAllRequestBuilder<BenefitEligibilityRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitEligibilityRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitEligibilityRules`.
   */
  create(
    entity: BenefitEligibilityRules<T>
  ): CreateRequestBuilder<BenefitEligibilityRules<T>, T> {
    return new CreateRequestBuilder<BenefitEligibilityRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitEligibilityRules` entity based on its keys.
   * @param policyName Key property. See {@link BenefitEligibilityRules.policyName}.
   * @param policyRulesName Key property. See {@link BenefitEligibilityRules.policyRulesName}.
   * @returns A request builder for creating requests to retrieve one `BenefitEligibilityRules` entity based on its keys.
   */
  getByKey(
    policyName: DeserializedType<T, 'Edm.String'>,
    policyRulesName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitEligibilityRules<T>, T> {
    return new GetByKeyRequestBuilder<BenefitEligibilityRules<T>, T>(
      this.entityApi,
      {
        PolicyName: policyName,
        PolicyRulesName: policyRulesName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitEligibilityRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitEligibilityRules`.
   */
  update(
    entity: BenefitEligibilityRules<T>
  ): UpdateRequestBuilder<BenefitEligibilityRules<T>, T> {
    return new UpdateRequestBuilder<BenefitEligibilityRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitEligibilityRules`.
   * @param policyName Key property. See {@link BenefitEligibilityRules.policyName}.
   * @param policyRulesName Key property. See {@link BenefitEligibilityRules.policyRulesName}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitEligibilityRules`.
   */
  delete(
    policyName: string,
    policyRulesName: string
  ): DeleteRequestBuilder<BenefitEligibilityRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitEligibilityRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitEligibilityRules` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitEligibilityRules<T>
  ): DeleteRequestBuilder<BenefitEligibilityRules<T>, T>;
  delete(
    policyNameOrEntity: any,
    policyRulesName?: string
  ): DeleteRequestBuilder<BenefitEligibilityRules<T>, T> {
    return new DeleteRequestBuilder<BenefitEligibilityRules<T>, T>(
      this.entityApi,
      policyNameOrEntity instanceof BenefitEligibilityRules
        ? policyNameOrEntity
        : {
            PolicyName: policyNameOrEntity!,
            PolicyRulesName: policyRulesName!
          }
    );
  }
}
