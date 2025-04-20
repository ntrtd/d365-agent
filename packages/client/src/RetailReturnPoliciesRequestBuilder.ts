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
import { RetailReturnPolicies } from './RetailReturnPolicies';

/**
 * Request builder class for operations supported on the {@link RetailReturnPolicies} entity.
 */
export class RetailReturnPoliciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailReturnPolicies<T>, T> {
  /**
   * Returns a request builder for querying all `RetailReturnPolicies` entities.
   * @returns A request builder for creating requests to retrieve all `RetailReturnPolicies` entities.
   */
  getAll(): GetAllRequestBuilder<RetailReturnPolicies<T>, T> {
    return new GetAllRequestBuilder<RetailReturnPolicies<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailReturnPolicies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailReturnPolicies`.
   */
  create(
    entity: RetailReturnPolicies<T>
  ): CreateRequestBuilder<RetailReturnPolicies<T>, T> {
    return new CreateRequestBuilder<RetailReturnPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailReturnPolicies` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailReturnPolicies.dataAreaId}.
   * @param policyNumber Key property. See {@link RetailReturnPolicies.policyNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailReturnPolicies` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    policyNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailReturnPolicies<T>, T> {
    return new GetByKeyRequestBuilder<RetailReturnPolicies<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PolicyNumber: policyNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailReturnPolicies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailReturnPolicies`.
   */
  update(
    entity: RetailReturnPolicies<T>
  ): UpdateRequestBuilder<RetailReturnPolicies<T>, T> {
    return new UpdateRequestBuilder<RetailReturnPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailReturnPolicies`.
   * @param dataAreaId Key property. See {@link RetailReturnPolicies.dataAreaId}.
   * @param policyNumber Key property. See {@link RetailReturnPolicies.policyNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailReturnPolicies`.
   */
  delete(
    dataAreaId: string,
    policyNumber: string
  ): DeleteRequestBuilder<RetailReturnPolicies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailReturnPolicies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailReturnPolicies` by taking the entity as a parameter.
   */
  delete(
    entity: RetailReturnPolicies<T>
  ): DeleteRequestBuilder<RetailReturnPolicies<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    policyNumber?: string
  ): DeleteRequestBuilder<RetailReturnPolicies<T>, T> {
    return new DeleteRequestBuilder<RetailReturnPolicies<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailReturnPolicies
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PolicyNumber: policyNumber!
          }
    );
  }
}
