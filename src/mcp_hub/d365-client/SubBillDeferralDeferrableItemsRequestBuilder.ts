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
import { SubBillDeferralDeferrableItems } from './SubBillDeferralDeferrableItems';
import { SubBillDeferralTransactionType } from './SubBillDeferralTransactionType';
import { InventPostingItemCode } from './InventPostingItemCode';

/**
 * Request builder class for operations supported on the {@link SubBillDeferralDeferrableItems} entity.
 */
export class SubBillDeferralDeferrableItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillDeferralDeferrableItems<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillDeferralDeferrableItems` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillDeferralDeferrableItems` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillDeferralDeferrableItems<T>, T> {
    return new GetAllRequestBuilder<SubBillDeferralDeferrableItems<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillDeferralDeferrableItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillDeferralDeferrableItems`.
   */
  create(
    entity: SubBillDeferralDeferrableItems<T>
  ): CreateRequestBuilder<SubBillDeferralDeferrableItems<T>, T> {
    return new CreateRequestBuilder<SubBillDeferralDeferrableItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillDeferralDeferrableItems` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillDeferralDeferrableItems.dataAreaId}.
   * @param transactionType Key property. See {@link SubBillDeferralDeferrableItems.transactionType}.
   * @param itemRelation Key property. See {@link SubBillDeferralDeferrableItems.itemRelation}.
   * @param itemCode Key property. See {@link SubBillDeferralDeferrableItems.itemCode}.
   * @param categoryRelation Key property. See {@link SubBillDeferralDeferrableItems.categoryRelation}.
   * @returns A request builder for creating requests to retrieve one `SubBillDeferralDeferrableItems` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.SubBillDeferralTransactionType'
    >,
    itemRelation: DeserializedType<T, 'Edm.String'>,
    itemCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.InventPostingItemCode'
    >,
    categoryRelation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillDeferralDeferrableItems<T>, T> {
    return new GetByKeyRequestBuilder<SubBillDeferralDeferrableItems<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransactionType: transactionType,
        ItemRelation: itemRelation,
        ItemCode: itemCode,
        CategoryRelation: categoryRelation
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillDeferralDeferrableItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillDeferralDeferrableItems`.
   */
  update(
    entity: SubBillDeferralDeferrableItems<T>
  ): UpdateRequestBuilder<SubBillDeferralDeferrableItems<T>, T> {
    return new UpdateRequestBuilder<SubBillDeferralDeferrableItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralDeferrableItems`.
   * @param dataAreaId Key property. See {@link SubBillDeferralDeferrableItems.dataAreaId}.
   * @param transactionType Key property. See {@link SubBillDeferralDeferrableItems.transactionType}.
   * @param itemRelation Key property. See {@link SubBillDeferralDeferrableItems.itemRelation}.
   * @param itemCode Key property. See {@link SubBillDeferralDeferrableItems.itemCode}.
   * @param categoryRelation Key property. See {@link SubBillDeferralDeferrableItems.categoryRelation}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralDeferrableItems`.
   */
  delete(
    dataAreaId: string,
    transactionType: SubBillDeferralTransactionType,
    itemRelation: string,
    itemCode: InventPostingItemCode,
    categoryRelation: string
  ): DeleteRequestBuilder<SubBillDeferralDeferrableItems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralDeferrableItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralDeferrableItems` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillDeferralDeferrableItems<T>
  ): DeleteRequestBuilder<SubBillDeferralDeferrableItems<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transactionType?: SubBillDeferralTransactionType,
    itemRelation?: string,
    itemCode?: InventPostingItemCode,
    categoryRelation?: string
  ): DeleteRequestBuilder<SubBillDeferralDeferrableItems<T>, T> {
    return new DeleteRequestBuilder<SubBillDeferralDeferrableItems<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillDeferralDeferrableItems
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransactionType: transactionType!,
            ItemRelation: itemRelation!,
            ItemCode: itemCode!,
            CategoryRelation: categoryRelation!
          }
    );
  }
}
