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
import { PriceCustomerGroups } from './PriceCustomerGroups';

/**
 * Request builder class for operations supported on the {@link PriceCustomerGroups} entity.
 */
export class PriceCustomerGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PriceCustomerGroups<T>, T> {
  /**
   * Returns a request builder for querying all `PriceCustomerGroups` entities.
   * @returns A request builder for creating requests to retrieve all `PriceCustomerGroups` entities.
   */
  getAll(): GetAllRequestBuilder<PriceCustomerGroups<T>, T> {
    return new GetAllRequestBuilder<PriceCustomerGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PriceCustomerGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PriceCustomerGroups`.
   */
  create(
    entity: PriceCustomerGroups<T>
  ): CreateRequestBuilder<PriceCustomerGroups<T>, T> {
    return new CreateRequestBuilder<PriceCustomerGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PriceCustomerGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link PriceCustomerGroups.dataAreaId}.
   * @param groupCode Key property. See {@link PriceCustomerGroups.groupCode}.
   * @returns A request builder for creating requests to retrieve one `PriceCustomerGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PriceCustomerGroups<T>, T> {
    return new GetByKeyRequestBuilder<PriceCustomerGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupCode: groupCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PriceCustomerGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PriceCustomerGroups`.
   */
  update(
    entity: PriceCustomerGroups<T>
  ): UpdateRequestBuilder<PriceCustomerGroups<T>, T> {
    return new UpdateRequestBuilder<PriceCustomerGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PriceCustomerGroups`.
   * @param dataAreaId Key property. See {@link PriceCustomerGroups.dataAreaId}.
   * @param groupCode Key property. See {@link PriceCustomerGroups.groupCode}.
   * @returns A request builder for creating requests that delete an entity of type `PriceCustomerGroups`.
   */
  delete(
    dataAreaId: string,
    groupCode: string
  ): DeleteRequestBuilder<PriceCustomerGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PriceCustomerGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PriceCustomerGroups` by taking the entity as a parameter.
   */
  delete(
    entity: PriceCustomerGroups<T>
  ): DeleteRequestBuilder<PriceCustomerGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupCode?: string
  ): DeleteRequestBuilder<PriceCustomerGroups<T>, T> {
    return new DeleteRequestBuilder<PriceCustomerGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PriceCustomerGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupCode: groupCode!
          }
    );
  }
}
