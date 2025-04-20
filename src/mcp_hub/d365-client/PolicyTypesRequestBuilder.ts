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
import { PolicyTypes } from './PolicyTypes';
import { SysPolicyTypeEnum } from './SysPolicyTypeEnum';

/**
 * Request builder class for operations supported on the {@link PolicyTypes} entity.
 */
export class PolicyTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PolicyTypes<T>, T> {
  /**
   * Returns a request builder for querying all `PolicyTypes` entities.
   * @returns A request builder for creating requests to retrieve all `PolicyTypes` entities.
   */
  getAll(): GetAllRequestBuilder<PolicyTypes<T>, T> {
    return new GetAllRequestBuilder<PolicyTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PolicyTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PolicyTypes`.
   */
  create(entity: PolicyTypes<T>): CreateRequestBuilder<PolicyTypes<T>, T> {
    return new CreateRequestBuilder<PolicyTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PolicyTypes` entity based on its keys.
   * @param policyType Key property. See {@link PolicyTypes.policyType}.
   * @returns A request builder for creating requests to retrieve one `PolicyTypes` entity based on its keys.
   */
  getByKey(
    policyType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.SysPolicyTypeEnum'
    >
  ): GetByKeyRequestBuilder<PolicyTypes<T>, T> {
    return new GetByKeyRequestBuilder<PolicyTypes<T>, T>(this.entityApi, {
      PolicyType: policyType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PolicyTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PolicyTypes`.
   */
  update(entity: PolicyTypes<T>): UpdateRequestBuilder<PolicyTypes<T>, T> {
    return new UpdateRequestBuilder<PolicyTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PolicyTypes`.
   * @param policyType Key property. See {@link PolicyTypes.policyType}.
   * @returns A request builder for creating requests that delete an entity of type `PolicyTypes`.
   */
  delete(
    policyType: SysPolicyTypeEnum
  ): DeleteRequestBuilder<PolicyTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PolicyTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PolicyTypes` by taking the entity as a parameter.
   */
  delete(entity: PolicyTypes<T>): DeleteRequestBuilder<PolicyTypes<T>, T>;
  delete(policyTypeOrEntity: any): DeleteRequestBuilder<PolicyTypes<T>, T> {
    return new DeleteRequestBuilder<PolicyTypes<T>, T>(
      this.entityApi,
      policyTypeOrEntity instanceof PolicyTypes
        ? policyTypeOrEntity
        : { PolicyType: policyTypeOrEntity! }
    );
  }
}
