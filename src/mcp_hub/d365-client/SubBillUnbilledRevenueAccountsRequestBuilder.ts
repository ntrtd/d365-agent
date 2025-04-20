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
import { SubBillUnbilledRevenueAccounts } from './SubBillUnbilledRevenueAccounts';
import { InventPostingItemCode } from './InventPostingItemCode';

/**
 * Request builder class for operations supported on the {@link SubBillUnbilledRevenueAccounts} entity.
 */
export class SubBillUnbilledRevenueAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillUnbilledRevenueAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillUnbilledRevenueAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillUnbilledRevenueAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillUnbilledRevenueAccounts<T>, T> {
    return new GetAllRequestBuilder<SubBillUnbilledRevenueAccounts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillUnbilledRevenueAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillUnbilledRevenueAccounts`.
   */
  create(
    entity: SubBillUnbilledRevenueAccounts<T>
  ): CreateRequestBuilder<SubBillUnbilledRevenueAccounts<T>, T> {
    return new CreateRequestBuilder<SubBillUnbilledRevenueAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillUnbilledRevenueAccounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillUnbilledRevenueAccounts.dataAreaId}.
   * @param itemCode Key property. See {@link SubBillUnbilledRevenueAccounts.itemCode}.
   * @param itemRelation Key property. See {@link SubBillUnbilledRevenueAccounts.itemRelation}.
   * @returns A request builder for creating requests to retrieve one `SubBillUnbilledRevenueAccounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.InventPostingItemCode'
    >,
    itemRelation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillUnbilledRevenueAccounts<T>, T> {
    return new GetByKeyRequestBuilder<SubBillUnbilledRevenueAccounts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemCode: itemCode,
        ItemRelation: itemRelation
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillUnbilledRevenueAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillUnbilledRevenueAccounts`.
   */
  update(
    entity: SubBillUnbilledRevenueAccounts<T>
  ): UpdateRequestBuilder<SubBillUnbilledRevenueAccounts<T>, T> {
    return new UpdateRequestBuilder<SubBillUnbilledRevenueAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillUnbilledRevenueAccounts`.
   * @param dataAreaId Key property. See {@link SubBillUnbilledRevenueAccounts.dataAreaId}.
   * @param itemCode Key property. See {@link SubBillUnbilledRevenueAccounts.itemCode}.
   * @param itemRelation Key property. See {@link SubBillUnbilledRevenueAccounts.itemRelation}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillUnbilledRevenueAccounts`.
   */
  delete(
    dataAreaId: string,
    itemCode: InventPostingItemCode,
    itemRelation: string
  ): DeleteRequestBuilder<SubBillUnbilledRevenueAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillUnbilledRevenueAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillUnbilledRevenueAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillUnbilledRevenueAccounts<T>
  ): DeleteRequestBuilder<SubBillUnbilledRevenueAccounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemCode?: InventPostingItemCode,
    itemRelation?: string
  ): DeleteRequestBuilder<SubBillUnbilledRevenueAccounts<T>, T> {
    return new DeleteRequestBuilder<SubBillUnbilledRevenueAccounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillUnbilledRevenueAccounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemCode: itemCode!,
            ItemRelation: itemRelation!
          }
    );
  }
}
