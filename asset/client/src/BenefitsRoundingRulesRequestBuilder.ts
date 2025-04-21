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
import { BenefitsRoundingRules } from './BenefitsRoundingRules';
import { BenefitRoundingScenario } from './BenefitRoundingScenario';

/**
 * Request builder class for operations supported on the {@link BenefitsRoundingRules} entity.
 */
export class BenefitsRoundingRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsRoundingRules<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsRoundingRules` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsRoundingRules` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsRoundingRules<T>, T> {
    return new GetAllRequestBuilder<BenefitsRoundingRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitsRoundingRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsRoundingRules`.
   */
  create(
    entity: BenefitsRoundingRules<T>
  ): CreateRequestBuilder<BenefitsRoundingRules<T>, T> {
    return new CreateRequestBuilder<BenefitsRoundingRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsRoundingRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link BenefitsRoundingRules.dataAreaId}.
   * @param scenario Key property. See {@link BenefitsRoundingRules.scenario}.
   * @returns A request builder for creating requests to retrieve one `BenefitsRoundingRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    scenario: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BenefitRoundingScenario'
    >
  ): GetByKeyRequestBuilder<BenefitsRoundingRules<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsRoundingRules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Scenario: scenario
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsRoundingRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsRoundingRules`.
   */
  update(
    entity: BenefitsRoundingRules<T>
  ): UpdateRequestBuilder<BenefitsRoundingRules<T>, T> {
    return new UpdateRequestBuilder<BenefitsRoundingRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsRoundingRules`.
   * @param dataAreaId Key property. See {@link BenefitsRoundingRules.dataAreaId}.
   * @param scenario Key property. See {@link BenefitsRoundingRules.scenario}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsRoundingRules`.
   */
  delete(
    dataAreaId: string,
    scenario: BenefitRoundingScenario
  ): DeleteRequestBuilder<BenefitsRoundingRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsRoundingRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsRoundingRules` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsRoundingRules<T>
  ): DeleteRequestBuilder<BenefitsRoundingRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    scenario?: BenefitRoundingScenario
  ): DeleteRequestBuilder<BenefitsRoundingRules<T>, T> {
    return new DeleteRequestBuilder<BenefitsRoundingRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BenefitsRoundingRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Scenario: scenario!
          }
    );
  }
}
