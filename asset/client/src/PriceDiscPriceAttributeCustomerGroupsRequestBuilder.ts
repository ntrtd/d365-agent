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
import { PriceDiscPriceAttributeCustomerGroups } from './PriceDiscPriceAttributeCustomerGroups';

/**
 * Request builder class for operations supported on the {@link PriceDiscPriceAttributeCustomerGroups} entity.
 */
export class PriceDiscPriceAttributeCustomerGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PriceDiscPriceAttributeCustomerGroups<T>, T> {
  /**
   * Returns a request builder for querying all `PriceDiscPriceAttributeCustomerGroups` entities.
   * @returns A request builder for creating requests to retrieve all `PriceDiscPriceAttributeCustomerGroups` entities.
   */
  getAll(): GetAllRequestBuilder<PriceDiscPriceAttributeCustomerGroups<T>, T> {
    return new GetAllRequestBuilder<
      PriceDiscPriceAttributeCustomerGroups<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PriceDiscPriceAttributeCustomerGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PriceDiscPriceAttributeCustomerGroups`.
   */
  create(
    entity: PriceDiscPriceAttributeCustomerGroups<T>
  ): CreateRequestBuilder<PriceDiscPriceAttributeCustomerGroups<T>, T> {
    return new CreateRequestBuilder<
      PriceDiscPriceAttributeCustomerGroups<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PriceDiscPriceAttributeCustomerGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link PriceDiscPriceAttributeCustomerGroups.dataAreaId}.
   * @param groupCode Key property. See {@link PriceDiscPriceAttributeCustomerGroups.groupCode}.
   * @returns A request builder for creating requests to retrieve one `PriceDiscPriceAttributeCustomerGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PriceDiscPriceAttributeCustomerGroups<T>, T> {
    return new GetByKeyRequestBuilder<
      PriceDiscPriceAttributeCustomerGroups<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      GroupCode: groupCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PriceDiscPriceAttributeCustomerGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PriceDiscPriceAttributeCustomerGroups`.
   */
  update(
    entity: PriceDiscPriceAttributeCustomerGroups<T>
  ): UpdateRequestBuilder<PriceDiscPriceAttributeCustomerGroups<T>, T> {
    return new UpdateRequestBuilder<
      PriceDiscPriceAttributeCustomerGroups<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PriceDiscPriceAttributeCustomerGroups`.
   * @param dataAreaId Key property. See {@link PriceDiscPriceAttributeCustomerGroups.dataAreaId}.
   * @param groupCode Key property. See {@link PriceDiscPriceAttributeCustomerGroups.groupCode}.
   * @returns A request builder for creating requests that delete an entity of type `PriceDiscPriceAttributeCustomerGroups`.
   */
  delete(
    dataAreaId: string,
    groupCode: string
  ): DeleteRequestBuilder<PriceDiscPriceAttributeCustomerGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PriceDiscPriceAttributeCustomerGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PriceDiscPriceAttributeCustomerGroups` by taking the entity as a parameter.
   */
  delete(
    entity: PriceDiscPriceAttributeCustomerGroups<T>
  ): DeleteRequestBuilder<PriceDiscPriceAttributeCustomerGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupCode?: string
  ): DeleteRequestBuilder<PriceDiscPriceAttributeCustomerGroups<T>, T> {
    return new DeleteRequestBuilder<
      PriceDiscPriceAttributeCustomerGroups<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof PriceDiscPriceAttributeCustomerGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupCode: groupCode!
          }
    );
  }
}
