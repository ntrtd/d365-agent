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
import { CostConfigurationCostElementDerivationPolicies } from './CostConfigurationCostElementDerivationPolicies';

/**
 * Request builder class for operations supported on the {@link CostConfigurationCostElementDerivationPolicies} entity.
 */
export class CostConfigurationCostElementDerivationPoliciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostConfigurationCostElementDerivationPolicies<T>, T> {
  /**
   * Returns a request builder for querying all `CostConfigurationCostElementDerivationPolicies` entities.
   * @returns A request builder for creating requests to retrieve all `CostConfigurationCostElementDerivationPolicies` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostConfigurationCostElementDerivationPolicies<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostConfigurationCostElementDerivationPolicies<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostConfigurationCostElementDerivationPolicies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostConfigurationCostElementDerivationPolicies`.
   */
  create(
    entity: CostConfigurationCostElementDerivationPolicies<T>
  ): CreateRequestBuilder<
    CostConfigurationCostElementDerivationPolicies<T>,
    T
  > {
    return new CreateRequestBuilder<
      CostConfigurationCostElementDerivationPolicies<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostConfigurationCostElementDerivationPolicies` entity based on its keys.
   * @param name Key property. See {@link CostConfigurationCostElementDerivationPolicies.name}.
   * @returns A request builder for creating requests to retrieve one `CostConfigurationCostElementDerivationPolicies` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    CostConfigurationCostElementDerivationPolicies<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      CostConfigurationCostElementDerivationPolicies<T>,
      T
    >(this.entityApi, { Name: name });
  }

  /**
   * Returns a request builder for updating an entity of type `CostConfigurationCostElementDerivationPolicies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostConfigurationCostElementDerivationPolicies`.
   */
  update(
    entity: CostConfigurationCostElementDerivationPolicies<T>
  ): UpdateRequestBuilder<
    CostConfigurationCostElementDerivationPolicies<T>,
    T
  > {
    return new UpdateRequestBuilder<
      CostConfigurationCostElementDerivationPolicies<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostConfigurationCostElementDerivationPolicies`.
   * @param name Key property. See {@link CostConfigurationCostElementDerivationPolicies.name}.
   * @returns A request builder for creating requests that delete an entity of type `CostConfigurationCostElementDerivationPolicies`.
   */
  delete(
    name: string
  ): DeleteRequestBuilder<CostConfigurationCostElementDerivationPolicies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostConfigurationCostElementDerivationPolicies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostConfigurationCostElementDerivationPolicies` by taking the entity as a parameter.
   */
  delete(
    entity: CostConfigurationCostElementDerivationPolicies<T>
  ): DeleteRequestBuilder<CostConfigurationCostElementDerivationPolicies<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<
    CostConfigurationCostElementDerivationPolicies<T>,
    T
  > {
    return new DeleteRequestBuilder<
      CostConfigurationCostElementDerivationPolicies<T>,
      T
    >(
      this.entityApi,
      nameOrEntity instanceof CostConfigurationCostElementDerivationPolicies
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
