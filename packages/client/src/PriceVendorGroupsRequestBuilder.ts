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
import { PriceVendorGroups } from './PriceVendorGroups';

/**
 * Request builder class for operations supported on the {@link PriceVendorGroups} entity.
 */
export class PriceVendorGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PriceVendorGroups<T>, T> {
  /**
   * Returns a request builder for querying all `PriceVendorGroups` entities.
   * @returns A request builder for creating requests to retrieve all `PriceVendorGroups` entities.
   */
  getAll(): GetAllRequestBuilder<PriceVendorGroups<T>, T> {
    return new GetAllRequestBuilder<PriceVendorGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PriceVendorGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PriceVendorGroups`.
   */
  create(
    entity: PriceVendorGroups<T>
  ): CreateRequestBuilder<PriceVendorGroups<T>, T> {
    return new CreateRequestBuilder<PriceVendorGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PriceVendorGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link PriceVendorGroups.dataAreaId}.
   * @param groupCode Key property. See {@link PriceVendorGroups.groupCode}.
   * @returns A request builder for creating requests to retrieve one `PriceVendorGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PriceVendorGroups<T>, T> {
    return new GetByKeyRequestBuilder<PriceVendorGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      GroupCode: groupCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PriceVendorGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PriceVendorGroups`.
   */
  update(
    entity: PriceVendorGroups<T>
  ): UpdateRequestBuilder<PriceVendorGroups<T>, T> {
    return new UpdateRequestBuilder<PriceVendorGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PriceVendorGroups`.
   * @param dataAreaId Key property. See {@link PriceVendorGroups.dataAreaId}.
   * @param groupCode Key property. See {@link PriceVendorGroups.groupCode}.
   * @returns A request builder for creating requests that delete an entity of type `PriceVendorGroups`.
   */
  delete(
    dataAreaId: string,
    groupCode: string
  ): DeleteRequestBuilder<PriceVendorGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PriceVendorGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PriceVendorGroups` by taking the entity as a parameter.
   */
  delete(
    entity: PriceVendorGroups<T>
  ): DeleteRequestBuilder<PriceVendorGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupCode?: string
  ): DeleteRequestBuilder<PriceVendorGroups<T>, T> {
    return new DeleteRequestBuilder<PriceVendorGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PriceVendorGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupCode: groupCode!
          }
    );
  }
}
