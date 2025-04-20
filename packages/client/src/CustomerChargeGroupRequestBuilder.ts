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
import { CustomerChargeGroup } from './CustomerChargeGroup';

/**
 * Request builder class for operations supported on the {@link CustomerChargeGroup} entity.
 */
export class CustomerChargeGroupRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerChargeGroup<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerChargeGroup` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerChargeGroup` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerChargeGroup<T>, T> {
    return new GetAllRequestBuilder<CustomerChargeGroup<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomerChargeGroup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerChargeGroup`.
   */
  create(
    entity: CustomerChargeGroup<T>
  ): CreateRequestBuilder<CustomerChargeGroup<T>, T> {
    return new CreateRequestBuilder<CustomerChargeGroup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerChargeGroup` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerChargeGroup.dataAreaId}.
   * @param groupId Key property. See {@link CustomerChargeGroup.groupId}.
   * @returns A request builder for creating requests to retrieve one `CustomerChargeGroup` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerChargeGroup<T>, T> {
    return new GetByKeyRequestBuilder<CustomerChargeGroup<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerChargeGroup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerChargeGroup`.
   */
  update(
    entity: CustomerChargeGroup<T>
  ): UpdateRequestBuilder<CustomerChargeGroup<T>, T> {
    return new UpdateRequestBuilder<CustomerChargeGroup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerChargeGroup`.
   * @param dataAreaId Key property. See {@link CustomerChargeGroup.dataAreaId}.
   * @param groupId Key property. See {@link CustomerChargeGroup.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerChargeGroup`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<CustomerChargeGroup<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerChargeGroup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerChargeGroup` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerChargeGroup<T>
  ): DeleteRequestBuilder<CustomerChargeGroup<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<CustomerChargeGroup<T>, T> {
    return new DeleteRequestBuilder<CustomerChargeGroup<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerChargeGroup
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
