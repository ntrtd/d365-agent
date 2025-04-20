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
import { SubBillUnbilledRevenueItems } from './SubBillUnbilledRevenueItems';
import { InventPostingItemCode } from './InventPostingItemCode';

/**
 * Request builder class for operations supported on the {@link SubBillUnbilledRevenueItems} entity.
 */
export class SubBillUnbilledRevenueItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillUnbilledRevenueItems<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillUnbilledRevenueItems` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillUnbilledRevenueItems` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillUnbilledRevenueItems<T>, T> {
    return new GetAllRequestBuilder<SubBillUnbilledRevenueItems<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillUnbilledRevenueItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillUnbilledRevenueItems`.
   */
  create(
    entity: SubBillUnbilledRevenueItems<T>
  ): CreateRequestBuilder<SubBillUnbilledRevenueItems<T>, T> {
    return new CreateRequestBuilder<SubBillUnbilledRevenueItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillUnbilledRevenueItems` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillUnbilledRevenueItems.dataAreaId}.
   * @param itemCode Key property. See {@link SubBillUnbilledRevenueItems.itemCode}.
   * @param itemRelation Key property. See {@link SubBillUnbilledRevenueItems.itemRelation}.
   * @returns A request builder for creating requests to retrieve one `SubBillUnbilledRevenueItems` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.InventPostingItemCode'
    >,
    itemRelation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillUnbilledRevenueItems<T>, T> {
    return new GetByKeyRequestBuilder<SubBillUnbilledRevenueItems<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemCode: itemCode,
        ItemRelation: itemRelation
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillUnbilledRevenueItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillUnbilledRevenueItems`.
   */
  update(
    entity: SubBillUnbilledRevenueItems<T>
  ): UpdateRequestBuilder<SubBillUnbilledRevenueItems<T>, T> {
    return new UpdateRequestBuilder<SubBillUnbilledRevenueItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillUnbilledRevenueItems`.
   * @param dataAreaId Key property. See {@link SubBillUnbilledRevenueItems.dataAreaId}.
   * @param itemCode Key property. See {@link SubBillUnbilledRevenueItems.itemCode}.
   * @param itemRelation Key property. See {@link SubBillUnbilledRevenueItems.itemRelation}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillUnbilledRevenueItems`.
   */
  delete(
    dataAreaId: string,
    itemCode: InventPostingItemCode,
    itemRelation: string
  ): DeleteRequestBuilder<SubBillUnbilledRevenueItems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillUnbilledRevenueItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillUnbilledRevenueItems` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillUnbilledRevenueItems<T>
  ): DeleteRequestBuilder<SubBillUnbilledRevenueItems<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemCode?: InventPostingItemCode,
    itemRelation?: string
  ): DeleteRequestBuilder<SubBillUnbilledRevenueItems<T>, T> {
    return new DeleteRequestBuilder<SubBillUnbilledRevenueItems<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillUnbilledRevenueItems
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemCode: itemCode!,
            ItemRelation: itemRelation!
          }
    );
  }
}
