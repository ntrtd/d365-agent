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
import { InventoryPolicies } from './InventoryPolicies';

/**
 * Request builder class for operations supported on the {@link InventoryPolicies} entity.
 */
export class InventoryPoliciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryPolicies<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryPolicies` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryPolicies` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryPolicies<T>, T> {
    return new GetAllRequestBuilder<InventoryPolicies<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventoryPolicies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryPolicies`.
   */
  create(
    entity: InventoryPolicies<T>
  ): CreateRequestBuilder<InventoryPolicies<T>, T> {
    return new CreateRequestBuilder<InventoryPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryPolicies` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryPolicies.dataAreaId}.
   * @param policyId Key property. See {@link InventoryPolicies.policyId}.
   * @returns A request builder for creating requests to retrieve one `InventoryPolicies` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    policyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryPolicies<T>, T> {
    return new GetByKeyRequestBuilder<InventoryPolicies<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PolicyId: policyId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryPolicies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryPolicies`.
   */
  update(
    entity: InventoryPolicies<T>
  ): UpdateRequestBuilder<InventoryPolicies<T>, T> {
    return new UpdateRequestBuilder<InventoryPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryPolicies`.
   * @param dataAreaId Key property. See {@link InventoryPolicies.dataAreaId}.
   * @param policyId Key property. See {@link InventoryPolicies.policyId}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryPolicies`.
   */
  delete(
    dataAreaId: string,
    policyId: string
  ): DeleteRequestBuilder<InventoryPolicies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryPolicies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryPolicies` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryPolicies<T>
  ): DeleteRequestBuilder<InventoryPolicies<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    policyId?: string
  ): DeleteRequestBuilder<InventoryPolicies<T>, T> {
    return new DeleteRequestBuilder<InventoryPolicies<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryPolicies
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PolicyId: policyId!
          }
    );
  }
}
