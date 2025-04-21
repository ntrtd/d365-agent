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
import { CatchWeightItemHandlingPolicies } from './CatchWeightItemHandlingPolicies';

/**
 * Request builder class for operations supported on the {@link CatchWeightItemHandlingPolicies} entity.
 */
export class CatchWeightItemHandlingPoliciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CatchWeightItemHandlingPolicies<T>, T> {
  /**
   * Returns a request builder for querying all `CatchWeightItemHandlingPolicies` entities.
   * @returns A request builder for creating requests to retrieve all `CatchWeightItemHandlingPolicies` entities.
   */
  getAll(): GetAllRequestBuilder<CatchWeightItemHandlingPolicies<T>, T> {
    return new GetAllRequestBuilder<CatchWeightItemHandlingPolicies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CatchWeightItemHandlingPolicies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CatchWeightItemHandlingPolicies`.
   */
  create(
    entity: CatchWeightItemHandlingPolicies<T>
  ): CreateRequestBuilder<CatchWeightItemHandlingPolicies<T>, T> {
    return new CreateRequestBuilder<CatchWeightItemHandlingPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CatchWeightItemHandlingPolicies` entity based on its keys.
   * @param dataAreaId Key property. See {@link CatchWeightItemHandlingPolicies.dataAreaId}.
   * @param policyName Key property. See {@link CatchWeightItemHandlingPolicies.policyName}.
   * @returns A request builder for creating requests to retrieve one `CatchWeightItemHandlingPolicies` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    policyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CatchWeightItemHandlingPolicies<T>, T> {
    return new GetByKeyRequestBuilder<CatchWeightItemHandlingPolicies<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PolicyName: policyName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CatchWeightItemHandlingPolicies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CatchWeightItemHandlingPolicies`.
   */
  update(
    entity: CatchWeightItemHandlingPolicies<T>
  ): UpdateRequestBuilder<CatchWeightItemHandlingPolicies<T>, T> {
    return new UpdateRequestBuilder<CatchWeightItemHandlingPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CatchWeightItemHandlingPolicies`.
   * @param dataAreaId Key property. See {@link CatchWeightItemHandlingPolicies.dataAreaId}.
   * @param policyName Key property. See {@link CatchWeightItemHandlingPolicies.policyName}.
   * @returns A request builder for creating requests that delete an entity of type `CatchWeightItemHandlingPolicies`.
   */
  delete(
    dataAreaId: string,
    policyName: string
  ): DeleteRequestBuilder<CatchWeightItemHandlingPolicies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CatchWeightItemHandlingPolicies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CatchWeightItemHandlingPolicies` by taking the entity as a parameter.
   */
  delete(
    entity: CatchWeightItemHandlingPolicies<T>
  ): DeleteRequestBuilder<CatchWeightItemHandlingPolicies<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    policyName?: string
  ): DeleteRequestBuilder<CatchWeightItemHandlingPolicies<T>, T> {
    return new DeleteRequestBuilder<CatchWeightItemHandlingPolicies<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CatchWeightItemHandlingPolicies
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PolicyName: policyName!
          }
    );
  }
}
