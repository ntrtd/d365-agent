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
import { LeaveBuySellPolicies } from './LeaveBuySellPolicies';

/**
 * Request builder class for operations supported on the {@link LeaveBuySellPolicies} entity.
 */
export class LeaveBuySellPoliciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaveBuySellPolicies<T>, T> {
  /**
   * Returns a request builder for querying all `LeaveBuySellPolicies` entities.
   * @returns A request builder for creating requests to retrieve all `LeaveBuySellPolicies` entities.
   */
  getAll(): GetAllRequestBuilder<LeaveBuySellPolicies<T>, T> {
    return new GetAllRequestBuilder<LeaveBuySellPolicies<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeaveBuySellPolicies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaveBuySellPolicies`.
   */
  create(
    entity: LeaveBuySellPolicies<T>
  ): CreateRequestBuilder<LeaveBuySellPolicies<T>, T> {
    return new CreateRequestBuilder<LeaveBuySellPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaveBuySellPolicies` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaveBuySellPolicies.dataAreaId}.
   * @param policy Key property. See {@link LeaveBuySellPolicies.policy}.
   * @returns A request builder for creating requests to retrieve one `LeaveBuySellPolicies` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    policy: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeaveBuySellPolicies<T>, T> {
    return new GetByKeyRequestBuilder<LeaveBuySellPolicies<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Policy: policy
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaveBuySellPolicies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaveBuySellPolicies`.
   */
  update(
    entity: LeaveBuySellPolicies<T>
  ): UpdateRequestBuilder<LeaveBuySellPolicies<T>, T> {
    return new UpdateRequestBuilder<LeaveBuySellPolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaveBuySellPolicies`.
   * @param dataAreaId Key property. See {@link LeaveBuySellPolicies.dataAreaId}.
   * @param policy Key property. See {@link LeaveBuySellPolicies.policy}.
   * @returns A request builder for creating requests that delete an entity of type `LeaveBuySellPolicies`.
   */
  delete(
    dataAreaId: string,
    policy: string
  ): DeleteRequestBuilder<LeaveBuySellPolicies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaveBuySellPolicies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaveBuySellPolicies` by taking the entity as a parameter.
   */
  delete(
    entity: LeaveBuySellPolicies<T>
  ): DeleteRequestBuilder<LeaveBuySellPolicies<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    policy?: string
  ): DeleteRequestBuilder<LeaveBuySellPolicies<T>, T> {
    return new DeleteRequestBuilder<LeaveBuySellPolicies<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaveBuySellPolicies
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Policy: policy!
          }
    );
  }
}
