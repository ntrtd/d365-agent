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
import { WarrantyPolicies } from './WarrantyPolicies';

/**
 * Request builder class for operations supported on the {@link WarrantyPolicies} entity.
 */
export class WarrantyPoliciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarrantyPolicies<T>, T> {
  /**
   * Returns a request builder for querying all `WarrantyPolicies` entities.
   * @returns A request builder for creating requests to retrieve all `WarrantyPolicies` entities.
   */
  getAll(): GetAllRequestBuilder<WarrantyPolicies<T>, T> {
    return new GetAllRequestBuilder<WarrantyPolicies<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WarrantyPolicies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarrantyPolicies`.
   */
  create(
    entity: WarrantyPolicies<T>
  ): CreateRequestBuilder<WarrantyPolicies<T>, T> {
    return new CreateRequestBuilder<WarrantyPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarrantyPolicies` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarrantyPolicies.dataAreaId}.
   * @param policyNumber Key property. See {@link WarrantyPolicies.policyNumber}.
   * @returns A request builder for creating requests to retrieve one `WarrantyPolicies` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    policyNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WarrantyPolicies<T>, T> {
    return new GetByKeyRequestBuilder<WarrantyPolicies<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PolicyNumber: policyNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WarrantyPolicies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarrantyPolicies`.
   */
  update(
    entity: WarrantyPolicies<T>
  ): UpdateRequestBuilder<WarrantyPolicies<T>, T> {
    return new UpdateRequestBuilder<WarrantyPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarrantyPolicies`.
   * @param dataAreaId Key property. See {@link WarrantyPolicies.dataAreaId}.
   * @param policyNumber Key property. See {@link WarrantyPolicies.policyNumber}.
   * @returns A request builder for creating requests that delete an entity of type `WarrantyPolicies`.
   */
  delete(
    dataAreaId: string,
    policyNumber: string
  ): DeleteRequestBuilder<WarrantyPolicies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarrantyPolicies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarrantyPolicies` by taking the entity as a parameter.
   */
  delete(
    entity: WarrantyPolicies<T>
  ): DeleteRequestBuilder<WarrantyPolicies<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    policyNumber?: string
  ): DeleteRequestBuilder<WarrantyPolicies<T>, T> {
    return new DeleteRequestBuilder<WarrantyPolicies<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarrantyPolicies
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PolicyNumber: policyNumber!
          }
    );
  }
}
