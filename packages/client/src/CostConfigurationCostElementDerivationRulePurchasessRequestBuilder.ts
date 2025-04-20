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
import { CostConfigurationCostElementDerivationRulePurchasess } from './CostConfigurationCostElementDerivationRulePurchasess';
import { CostConfigurationMeasurementType } from './CostConfigurationMeasurementType';

/**
 * Request builder class for operations supported on the {@link CostConfigurationCostElementDerivationRulePurchasess} entity.
 */
export class CostConfigurationCostElementDerivationRulePurchasessRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  CostConfigurationCostElementDerivationRulePurchasess<T>,
  T
> {
  /**
   * Returns a request builder for querying all `CostConfigurationCostElementDerivationRulePurchasess` entities.
   * @returns A request builder for creating requests to retrieve all `CostConfigurationCostElementDerivationRulePurchasess` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostConfigurationCostElementDerivationRulePurchasess<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostConfigurationCostElementDerivationRulePurchasess<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostConfigurationCostElementDerivationRulePurchasess` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostConfigurationCostElementDerivationRulePurchasess`.
   */
  create(
    entity: CostConfigurationCostElementDerivationRulePurchasess<T>
  ): CreateRequestBuilder<
    CostConfigurationCostElementDerivationRulePurchasess<T>,
    T
  > {
    return new CreateRequestBuilder<
      CostConfigurationCostElementDerivationRulePurchasess<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostConfigurationCostElementDerivationRulePurchasess` entity based on its keys.
   * @param costElementDerivationPolicyName Key property. See {@link CostConfigurationCostElementDerivationRulePurchasess.costElementDerivationPolicyName}.
   * @param measurement Key property. See {@link CostConfigurationCostElementDerivationRulePurchasess.measurement}.
   * @param resourceType Key property. See {@link CostConfigurationCostElementDerivationRulePurchasess.resourceType}.
   * @returns A request builder for creating requests to retrieve one `CostConfigurationCostElementDerivationRulePurchasess` entity based on its keys.
   */
  getByKey(
    costElementDerivationPolicyName: DeserializedType<T, 'Edm.String'>,
    measurement: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CostConfigurationMeasurementType'
    >,
    resourceType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    CostConfigurationCostElementDerivationRulePurchasess<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      CostConfigurationCostElementDerivationRulePurchasess<T>,
      T
    >(this.entityApi, {
      CostElementDerivationPolicyName: costElementDerivationPolicyName,
      Measurement: measurement,
      ResourceType: resourceType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostConfigurationCostElementDerivationRulePurchasess`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostConfigurationCostElementDerivationRulePurchasess`.
   */
  update(
    entity: CostConfigurationCostElementDerivationRulePurchasess<T>
  ): UpdateRequestBuilder<
    CostConfigurationCostElementDerivationRulePurchasess<T>,
    T
  > {
    return new UpdateRequestBuilder<
      CostConfigurationCostElementDerivationRulePurchasess<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostConfigurationCostElementDerivationRulePurchasess`.
   * @param costElementDerivationPolicyName Key property. See {@link CostConfigurationCostElementDerivationRulePurchasess.costElementDerivationPolicyName}.
   * @param measurement Key property. See {@link CostConfigurationCostElementDerivationRulePurchasess.measurement}.
   * @param resourceType Key property. See {@link CostConfigurationCostElementDerivationRulePurchasess.resourceType}.
   * @returns A request builder for creating requests that delete an entity of type `CostConfigurationCostElementDerivationRulePurchasess`.
   */
  delete(
    costElementDerivationPolicyName: string,
    measurement: CostConfigurationMeasurementType,
    resourceType: string
  ): DeleteRequestBuilder<
    CostConfigurationCostElementDerivationRulePurchasess<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `CostConfigurationCostElementDerivationRulePurchasess`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostConfigurationCostElementDerivationRulePurchasess` by taking the entity as a parameter.
   */
  delete(
    entity: CostConfigurationCostElementDerivationRulePurchasess<T>
  ): DeleteRequestBuilder<
    CostConfigurationCostElementDerivationRulePurchasess<T>,
    T
  >;
  delete(
    costElementDerivationPolicyNameOrEntity: any,
    measurement?: CostConfigurationMeasurementType,
    resourceType?: string
  ): DeleteRequestBuilder<
    CostConfigurationCostElementDerivationRulePurchasess<T>,
    T
  > {
    return new DeleteRequestBuilder<
      CostConfigurationCostElementDerivationRulePurchasess<T>,
      T
    >(
      this.entityApi,
      costElementDerivationPolicyNameOrEntity instanceof
      CostConfigurationCostElementDerivationRulePurchasess
        ? costElementDerivationPolicyNameOrEntity
        : {
            CostElementDerivationPolicyName:
              costElementDerivationPolicyNameOrEntity!,
            Measurement: measurement!,
            ResourceType: resourceType!
          }
    );
  }
}
