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
import { BenefitsEligibilityRuleOverrides } from './BenefitsEligibilityRuleOverrides';
import { BenefitProgramPlanRelation } from './BenefitProgramPlanRelation';

/**
 * Request builder class for operations supported on the {@link BenefitsEligibilityRuleOverrides} entity.
 */
export class BenefitsEligibilityRuleOverridesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsEligibilityRuleOverrides<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsEligibilityRuleOverrides` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsEligibilityRuleOverrides` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsEligibilityRuleOverrides<T>, T> {
    return new GetAllRequestBuilder<BenefitsEligibilityRuleOverrides<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitsEligibilityRuleOverrides` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsEligibilityRuleOverrides`.
   */
  create(
    entity: BenefitsEligibilityRuleOverrides<T>
  ): CreateRequestBuilder<BenefitsEligibilityRuleOverrides<T>, T> {
    return new CreateRequestBuilder<BenefitsEligibilityRuleOverrides<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsEligibilityRuleOverrides` entity based on its keys.
   * @param workerPersonnelNumber Key property. See {@link BenefitsEligibilityRuleOverrides.workerPersonnelNumber}.
   * @param relationshipType Key property. See {@link BenefitsEligibilityRuleOverrides.relationshipType}.
   * @param planOrProgramId Key property. See {@link BenefitsEligibilityRuleOverrides.planOrProgramId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsEligibilityRuleOverrides` entity based on its keys.
   */
  getByKey(
    workerPersonnelNumber: DeserializedType<T, 'Edm.String'>,
    relationshipType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BenefitProgramPlanRelation'
    >,
    planOrProgramId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsEligibilityRuleOverrides<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsEligibilityRuleOverrides<T>, T>(
      this.entityApi,
      {
        WorkerPersonnelNumber: workerPersonnelNumber,
        RelationshipType: relationshipType,
        PlanOrProgramId: planOrProgramId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsEligibilityRuleOverrides`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsEligibilityRuleOverrides`.
   */
  update(
    entity: BenefitsEligibilityRuleOverrides<T>
  ): UpdateRequestBuilder<BenefitsEligibilityRuleOverrides<T>, T> {
    return new UpdateRequestBuilder<BenefitsEligibilityRuleOverrides<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsEligibilityRuleOverrides`.
   * @param workerPersonnelNumber Key property. See {@link BenefitsEligibilityRuleOverrides.workerPersonnelNumber}.
   * @param relationshipType Key property. See {@link BenefitsEligibilityRuleOverrides.relationshipType}.
   * @param planOrProgramId Key property. See {@link BenefitsEligibilityRuleOverrides.planOrProgramId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsEligibilityRuleOverrides`.
   */
  delete(
    workerPersonnelNumber: string,
    relationshipType: BenefitProgramPlanRelation,
    planOrProgramId: string
  ): DeleteRequestBuilder<BenefitsEligibilityRuleOverrides<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsEligibilityRuleOverrides`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsEligibilityRuleOverrides` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsEligibilityRuleOverrides<T>
  ): DeleteRequestBuilder<BenefitsEligibilityRuleOverrides<T>, T>;
  delete(
    workerPersonnelNumberOrEntity: any,
    relationshipType?: BenefitProgramPlanRelation,
    planOrProgramId?: string
  ): DeleteRequestBuilder<BenefitsEligibilityRuleOverrides<T>, T> {
    return new DeleteRequestBuilder<BenefitsEligibilityRuleOverrides<T>, T>(
      this.entityApi,
      workerPersonnelNumberOrEntity instanceof BenefitsEligibilityRuleOverrides
        ? workerPersonnelNumberOrEntity
        : {
            WorkerPersonnelNumber: workerPersonnelNumberOrEntity!,
            RelationshipType: relationshipType!,
            PlanOrProgramId: planOrProgramId!
          }
    );
  }
}
