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
import { BenefitsProgramEligibilityRules } from './BenefitsProgramEligibilityRules';

/**
 * Request builder class for operations supported on the {@link BenefitsProgramEligibilityRules} entity.
 */
export class BenefitsProgramEligibilityRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsProgramEligibilityRules<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsProgramEligibilityRules` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsProgramEligibilityRules` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsProgramEligibilityRules<T>, T> {
    return new GetAllRequestBuilder<BenefitsProgramEligibilityRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitsProgramEligibilityRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsProgramEligibilityRules`.
   */
  create(
    entity: BenefitsProgramEligibilityRules<T>
  ): CreateRequestBuilder<BenefitsProgramEligibilityRules<T>, T> {
    return new CreateRequestBuilder<BenefitsProgramEligibilityRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsProgramEligibilityRules` entity based on its keys.
   * @param programId Key property. See {@link BenefitsProgramEligibilityRules.programId}.
   * @param eligibilityRuleId Key property. See {@link BenefitsProgramEligibilityRules.eligibilityRuleId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsProgramEligibilityRules` entity based on its keys.
   */
  getByKey(
    programId: DeserializedType<T, 'Edm.String'>,
    eligibilityRuleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsProgramEligibilityRules<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsProgramEligibilityRules<T>, T>(
      this.entityApi,
      {
        ProgramId: programId,
        EligibilityRuleId: eligibilityRuleId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsProgramEligibilityRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsProgramEligibilityRules`.
   */
  update(
    entity: BenefitsProgramEligibilityRules<T>
  ): UpdateRequestBuilder<BenefitsProgramEligibilityRules<T>, T> {
    return new UpdateRequestBuilder<BenefitsProgramEligibilityRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsProgramEligibilityRules`.
   * @param programId Key property. See {@link BenefitsProgramEligibilityRules.programId}.
   * @param eligibilityRuleId Key property. See {@link BenefitsProgramEligibilityRules.eligibilityRuleId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsProgramEligibilityRules`.
   */
  delete(
    programId: string,
    eligibilityRuleId: string
  ): DeleteRequestBuilder<BenefitsProgramEligibilityRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsProgramEligibilityRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsProgramEligibilityRules` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsProgramEligibilityRules<T>
  ): DeleteRequestBuilder<BenefitsProgramEligibilityRules<T>, T>;
  delete(
    programIdOrEntity: any,
    eligibilityRuleId?: string
  ): DeleteRequestBuilder<BenefitsProgramEligibilityRules<T>, T> {
    return new DeleteRequestBuilder<BenefitsProgramEligibilityRules<T>, T>(
      this.entityApi,
      programIdOrEntity instanceof BenefitsProgramEligibilityRules
        ? programIdOrEntity
        : {
            ProgramId: programIdOrEntity!,
            EligibilityRuleId: eligibilityRuleId!
          }
    );
  }
}
