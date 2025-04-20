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
import { MultiSourcePolicies } from './MultiSourcePolicies';

/**
 * Request builder class for operations supported on the {@link MultiSourcePolicies} entity.
 */
export class MultiSourcePoliciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MultiSourcePolicies<T>, T> {
  /**
   * Returns a request builder for querying all `MultiSourcePolicies` entities.
   * @returns A request builder for creating requests to retrieve all `MultiSourcePolicies` entities.
   */
  getAll(): GetAllRequestBuilder<MultiSourcePolicies<T>, T> {
    return new GetAllRequestBuilder<MultiSourcePolicies<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MultiSourcePolicies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MultiSourcePolicies`.
   */
  create(
    entity: MultiSourcePolicies<T>
  ): CreateRequestBuilder<MultiSourcePolicies<T>, T> {
    return new CreateRequestBuilder<MultiSourcePolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MultiSourcePolicies` entity based on its keys.
   * @param dataAreaId Key property. See {@link MultiSourcePolicies.dataAreaId}.
   * @param policyName Key property. See {@link MultiSourcePolicies.policyName}.
   * @returns A request builder for creating requests to retrieve one `MultiSourcePolicies` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    policyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MultiSourcePolicies<T>, T> {
    return new GetByKeyRequestBuilder<MultiSourcePolicies<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PolicyName: policyName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MultiSourcePolicies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MultiSourcePolicies`.
   */
  update(
    entity: MultiSourcePolicies<T>
  ): UpdateRequestBuilder<MultiSourcePolicies<T>, T> {
    return new UpdateRequestBuilder<MultiSourcePolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MultiSourcePolicies`.
   * @param dataAreaId Key property. See {@link MultiSourcePolicies.dataAreaId}.
   * @param policyName Key property. See {@link MultiSourcePolicies.policyName}.
   * @returns A request builder for creating requests that delete an entity of type `MultiSourcePolicies`.
   */
  delete(
    dataAreaId: string,
    policyName: string
  ): DeleteRequestBuilder<MultiSourcePolicies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MultiSourcePolicies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MultiSourcePolicies` by taking the entity as a parameter.
   */
  delete(
    entity: MultiSourcePolicies<T>
  ): DeleteRequestBuilder<MultiSourcePolicies<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    policyName?: string
  ): DeleteRequestBuilder<MultiSourcePolicies<T>, T> {
    return new DeleteRequestBuilder<MultiSourcePolicies<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MultiSourcePolicies
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PolicyName: policyName!
          }
    );
  }
}
