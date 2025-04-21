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
import { CostConfigurationCostElementDerivationRuleProductions } from './CostConfigurationCostElementDerivationRuleProductions';
import { CostConfigurationMeasurementTypeProduction } from './CostConfigurationMeasurementTypeProduction';

/**
 * Request builder class for operations supported on the {@link CostConfigurationCostElementDerivationRuleProductions} entity.
 */
export class CostConfigurationCostElementDerivationRuleProductionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  CostConfigurationCostElementDerivationRuleProductions<T>,
  T
> {
  /**
   * Returns a request builder for querying all `CostConfigurationCostElementDerivationRuleProductions` entities.
   * @returns A request builder for creating requests to retrieve all `CostConfigurationCostElementDerivationRuleProductions` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostConfigurationCostElementDerivationRuleProductions<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostConfigurationCostElementDerivationRuleProductions<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostConfigurationCostElementDerivationRuleProductions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostConfigurationCostElementDerivationRuleProductions`.
   */
  create(
    entity: CostConfigurationCostElementDerivationRuleProductions<T>
  ): CreateRequestBuilder<
    CostConfigurationCostElementDerivationRuleProductions<T>,
    T
  > {
    return new CreateRequestBuilder<
      CostConfigurationCostElementDerivationRuleProductions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostConfigurationCostElementDerivationRuleProductions` entity based on its keys.
   * @param costElementDerivationPolicyName Key property. See {@link CostConfigurationCostElementDerivationRuleProductions.costElementDerivationPolicyName}.
   * @param measurement Key property. See {@link CostConfigurationCostElementDerivationRuleProductions.measurement}.
   * @param resourceTypeName Key property. See {@link CostConfigurationCostElementDerivationRuleProductions.resourceTypeName}.
   * @returns A request builder for creating requests to retrieve one `CostConfigurationCostElementDerivationRuleProductions` entity based on its keys.
   */
  getByKey(
    costElementDerivationPolicyName: DeserializedType<T, 'Edm.String'>,
    measurement: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CostConfigurationMeasurementTypeProduction'
    >,
    resourceTypeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    CostConfigurationCostElementDerivationRuleProductions<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      CostConfigurationCostElementDerivationRuleProductions<T>,
      T
    >(this.entityApi, {
      CostElementDerivationPolicyName: costElementDerivationPolicyName,
      Measurement: measurement,
      ResourceTypeName: resourceTypeName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostConfigurationCostElementDerivationRuleProductions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostConfigurationCostElementDerivationRuleProductions`.
   */
  update(
    entity: CostConfigurationCostElementDerivationRuleProductions<T>
  ): UpdateRequestBuilder<
    CostConfigurationCostElementDerivationRuleProductions<T>,
    T
  > {
    return new UpdateRequestBuilder<
      CostConfigurationCostElementDerivationRuleProductions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostConfigurationCostElementDerivationRuleProductions`.
   * @param costElementDerivationPolicyName Key property. See {@link CostConfigurationCostElementDerivationRuleProductions.costElementDerivationPolicyName}.
   * @param measurement Key property. See {@link CostConfigurationCostElementDerivationRuleProductions.measurement}.
   * @param resourceTypeName Key property. See {@link CostConfigurationCostElementDerivationRuleProductions.resourceTypeName}.
   * @returns A request builder for creating requests that delete an entity of type `CostConfigurationCostElementDerivationRuleProductions`.
   */
  delete(
    costElementDerivationPolicyName: string,
    measurement: CostConfigurationMeasurementTypeProduction,
    resourceTypeName: string
  ): DeleteRequestBuilder<
    CostConfigurationCostElementDerivationRuleProductions<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `CostConfigurationCostElementDerivationRuleProductions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostConfigurationCostElementDerivationRuleProductions` by taking the entity as a parameter.
   */
  delete(
    entity: CostConfigurationCostElementDerivationRuleProductions<T>
  ): DeleteRequestBuilder<
    CostConfigurationCostElementDerivationRuleProductions<T>,
    T
  >;
  delete(
    costElementDerivationPolicyNameOrEntity: any,
    measurement?: CostConfigurationMeasurementTypeProduction,
    resourceTypeName?: string
  ): DeleteRequestBuilder<
    CostConfigurationCostElementDerivationRuleProductions<T>,
    T
  > {
    return new DeleteRequestBuilder<
      CostConfigurationCostElementDerivationRuleProductions<T>,
      T
    >(
      this.entityApi,
      costElementDerivationPolicyNameOrEntity instanceof
      CostConfigurationCostElementDerivationRuleProductions
        ? costElementDerivationPolicyNameOrEntity
        : {
            CostElementDerivationPolicyName:
              costElementDerivationPolicyNameOrEntity!,
            Measurement: measurement!,
            ResourceTypeName: resourceTypeName!
          }
    );
  }
}
