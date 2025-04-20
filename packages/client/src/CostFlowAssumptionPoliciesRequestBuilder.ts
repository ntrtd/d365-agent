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
import { CostFlowAssumptionPolicies } from './CostFlowAssumptionPolicies';

/**
 * Request builder class for operations supported on the {@link CostFlowAssumptionPolicies} entity.
 */
export class CostFlowAssumptionPoliciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostFlowAssumptionPolicies<T>, T> {
  /**
   * Returns a request builder for querying all `CostFlowAssumptionPolicies` entities.
   * @returns A request builder for creating requests to retrieve all `CostFlowAssumptionPolicies` entities.
   */
  getAll(): GetAllRequestBuilder<CostFlowAssumptionPolicies<T>, T> {
    return new GetAllRequestBuilder<CostFlowAssumptionPolicies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CostFlowAssumptionPolicies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostFlowAssumptionPolicies`.
   */
  create(
    entity: CostFlowAssumptionPolicies<T>
  ): CreateRequestBuilder<CostFlowAssumptionPolicies<T>, T> {
    return new CreateRequestBuilder<CostFlowAssumptionPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CostFlowAssumptionPolicies` entity based on its keys.
   * @param dataAreaId Key property. See {@link CostFlowAssumptionPolicies.dataAreaId}.
   * @param policyId Key property. See {@link CostFlowAssumptionPolicies.policyId}.
   * @returns A request builder for creating requests to retrieve one `CostFlowAssumptionPolicies` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    policyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostFlowAssumptionPolicies<T>, T> {
    return new GetByKeyRequestBuilder<CostFlowAssumptionPolicies<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PolicyId: policyId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CostFlowAssumptionPolicies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostFlowAssumptionPolicies`.
   */
  update(
    entity: CostFlowAssumptionPolicies<T>
  ): UpdateRequestBuilder<CostFlowAssumptionPolicies<T>, T> {
    return new UpdateRequestBuilder<CostFlowAssumptionPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CostFlowAssumptionPolicies`.
   * @param dataAreaId Key property. See {@link CostFlowAssumptionPolicies.dataAreaId}.
   * @param policyId Key property. See {@link CostFlowAssumptionPolicies.policyId}.
   * @returns A request builder for creating requests that delete an entity of type `CostFlowAssumptionPolicies`.
   */
  delete(
    dataAreaId: string,
    policyId: string
  ): DeleteRequestBuilder<CostFlowAssumptionPolicies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostFlowAssumptionPolicies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostFlowAssumptionPolicies` by taking the entity as a parameter.
   */
  delete(
    entity: CostFlowAssumptionPolicies<T>
  ): DeleteRequestBuilder<CostFlowAssumptionPolicies<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    policyId?: string
  ): DeleteRequestBuilder<CostFlowAssumptionPolicies<T>, T> {
    return new DeleteRequestBuilder<CostFlowAssumptionPolicies<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CostFlowAssumptionPolicies
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PolicyId: policyId!
          }
    );
  }
}
