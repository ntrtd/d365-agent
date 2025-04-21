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
import { CostConfigurationInputMeasurementBasisPolicies } from './CostConfigurationInputMeasurementBasisPolicies';

/**
 * Request builder class for operations supported on the {@link CostConfigurationInputMeasurementBasisPolicies} entity.
 */
export class CostConfigurationInputMeasurementBasisPoliciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostConfigurationInputMeasurementBasisPolicies<T>, T> {
  /**
   * Returns a request builder for querying all `CostConfigurationInputMeasurementBasisPolicies` entities.
   * @returns A request builder for creating requests to retrieve all `CostConfigurationInputMeasurementBasisPolicies` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostConfigurationInputMeasurementBasisPolicies<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostConfigurationInputMeasurementBasisPolicies<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostConfigurationInputMeasurementBasisPolicies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostConfigurationInputMeasurementBasisPolicies`.
   */
  create(
    entity: CostConfigurationInputMeasurementBasisPolicies<T>
  ): CreateRequestBuilder<
    CostConfigurationInputMeasurementBasisPolicies<T>,
    T
  > {
    return new CreateRequestBuilder<
      CostConfigurationInputMeasurementBasisPolicies<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostConfigurationInputMeasurementBasisPolicies` entity based on its keys.
   * @param name Key property. See {@link CostConfigurationInputMeasurementBasisPolicies.name}.
   * @returns A request builder for creating requests to retrieve one `CostConfigurationInputMeasurementBasisPolicies` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    CostConfigurationInputMeasurementBasisPolicies<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      CostConfigurationInputMeasurementBasisPolicies<T>,
      T
    >(this.entityApi, { Name: name });
  }

  /**
   * Returns a request builder for updating an entity of type `CostConfigurationInputMeasurementBasisPolicies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostConfigurationInputMeasurementBasisPolicies`.
   */
  update(
    entity: CostConfigurationInputMeasurementBasisPolicies<T>
  ): UpdateRequestBuilder<
    CostConfigurationInputMeasurementBasisPolicies<T>,
    T
  > {
    return new UpdateRequestBuilder<
      CostConfigurationInputMeasurementBasisPolicies<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostConfigurationInputMeasurementBasisPolicies`.
   * @param name Key property. See {@link CostConfigurationInputMeasurementBasisPolicies.name}.
   * @returns A request builder for creating requests that delete an entity of type `CostConfigurationInputMeasurementBasisPolicies`.
   */
  delete(
    name: string
  ): DeleteRequestBuilder<CostConfigurationInputMeasurementBasisPolicies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostConfigurationInputMeasurementBasisPolicies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostConfigurationInputMeasurementBasisPolicies` by taking the entity as a parameter.
   */
  delete(
    entity: CostConfigurationInputMeasurementBasisPolicies<T>
  ): DeleteRequestBuilder<CostConfigurationInputMeasurementBasisPolicies<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<
    CostConfigurationInputMeasurementBasisPolicies<T>,
    T
  > {
    return new DeleteRequestBuilder<
      CostConfigurationInputMeasurementBasisPolicies<T>,
      T
    >(
      this.entityApi,
      nameOrEntity instanceof CostConfigurationInputMeasurementBasisPolicies
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
