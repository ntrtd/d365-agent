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
import { InventCountingReasonCodePolicies } from './InventCountingReasonCodePolicies';

/**
 * Request builder class for operations supported on the {@link InventCountingReasonCodePolicies} entity.
 */
export class InventCountingReasonCodePoliciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventCountingReasonCodePolicies<T>, T> {
  /**
   * Returns a request builder for querying all `InventCountingReasonCodePolicies` entities.
   * @returns A request builder for creating requests to retrieve all `InventCountingReasonCodePolicies` entities.
   */
  getAll(): GetAllRequestBuilder<InventCountingReasonCodePolicies<T>, T> {
    return new GetAllRequestBuilder<InventCountingReasonCodePolicies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventCountingReasonCodePolicies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventCountingReasonCodePolicies`.
   */
  create(
    entity: InventCountingReasonCodePolicies<T>
  ): CreateRequestBuilder<InventCountingReasonCodePolicies<T>, T> {
    return new CreateRequestBuilder<InventCountingReasonCodePolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventCountingReasonCodePolicies` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventCountingReasonCodePolicies.dataAreaId}.
   * @param name Key property. See {@link InventCountingReasonCodePolicies.name}.
   * @returns A request builder for creating requests to retrieve one `InventCountingReasonCodePolicies` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventCountingReasonCodePolicies<T>, T> {
    return new GetByKeyRequestBuilder<InventCountingReasonCodePolicies<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventCountingReasonCodePolicies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventCountingReasonCodePolicies`.
   */
  update(
    entity: InventCountingReasonCodePolicies<T>
  ): UpdateRequestBuilder<InventCountingReasonCodePolicies<T>, T> {
    return new UpdateRequestBuilder<InventCountingReasonCodePolicies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventCountingReasonCodePolicies`.
   * @param dataAreaId Key property. See {@link InventCountingReasonCodePolicies.dataAreaId}.
   * @param name Key property. See {@link InventCountingReasonCodePolicies.name}.
   * @returns A request builder for creating requests that delete an entity of type `InventCountingReasonCodePolicies`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<InventCountingReasonCodePolicies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventCountingReasonCodePolicies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventCountingReasonCodePolicies` by taking the entity as a parameter.
   */
  delete(
    entity: InventCountingReasonCodePolicies<T>
  ): DeleteRequestBuilder<InventCountingReasonCodePolicies<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<InventCountingReasonCodePolicies<T>, T> {
    return new DeleteRequestBuilder<InventCountingReasonCodePolicies<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventCountingReasonCodePolicies
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
