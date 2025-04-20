/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { SubBillAllocItemStandaloneSellingPrices } from './SubBillAllocItemStandaloneSellingPrices';
import { InventPostingItemCode } from './InventPostingItemCode';
import { NoYes } from './NoYes';

/**
 * Request builder class for operations supported on the {@link SubBillAllocItemStandaloneSellingPrices} entity.
 */
export class SubBillAllocItemStandaloneSellingPricesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillAllocItemStandaloneSellingPrices<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillAllocItemStandaloneSellingPrices` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillAllocItemStandaloneSellingPrices` entities.
   */
  getAll(): GetAllRequestBuilder<
    SubBillAllocItemStandaloneSellingPrices<T>,
    T
  > {
    return new GetAllRequestBuilder<
      SubBillAllocItemStandaloneSellingPrices<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SubBillAllocItemStandaloneSellingPrices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillAllocItemStandaloneSellingPrices`.
   */
  create(
    entity: SubBillAllocItemStandaloneSellingPrices<T>
  ): CreateRequestBuilder<SubBillAllocItemStandaloneSellingPrices<T>, T> {
    return new CreateRequestBuilder<
      SubBillAllocItemStandaloneSellingPrices<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SubBillAllocItemStandaloneSellingPrices` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillAllocItemStandaloneSellingPrices.dataAreaId}.
   * @param lineNum Key property. See {@link SubBillAllocItemStandaloneSellingPrices.lineNum}.
   * @param itemCode Key property. See {@link SubBillAllocItemStandaloneSellingPrices.itemCode}.
   * @param itemRelation Key property. See {@link SubBillAllocItemStandaloneSellingPrices.itemRelation}.
   * @param revenueSplit Key property. See {@link SubBillAllocItemStandaloneSellingPrices.revenueSplit}.
   * @param parentItem Key property. See {@link SubBillAllocItemStandaloneSellingPrices.parentItem}.
   * @returns A request builder for creating requests to retrieve one `SubBillAllocItemStandaloneSellingPrices` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>,
    itemCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.InventPostingItemCode'
    >,
    itemRelation: DeserializedType<T, 'Edm.String'>,
    revenueSplit: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.NoYes'>,
    parentItem: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillAllocItemStandaloneSellingPrices<T>, T> {
    return new GetByKeyRequestBuilder<
      SubBillAllocItemStandaloneSellingPrices<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LineNum: lineNum,
      ItemCode: itemCode,
      ItemRelation: itemRelation,
      RevenueSplit: revenueSplit,
      ParentItem: parentItem
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillAllocItemStandaloneSellingPrices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillAllocItemStandaloneSellingPrices`.
   */
  update(
    entity: SubBillAllocItemStandaloneSellingPrices<T>
  ): UpdateRequestBuilder<SubBillAllocItemStandaloneSellingPrices<T>, T> {
    return new UpdateRequestBuilder<
      SubBillAllocItemStandaloneSellingPrices<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillAllocItemStandaloneSellingPrices`.
   * @param dataAreaId Key property. See {@link SubBillAllocItemStandaloneSellingPrices.dataAreaId}.
   * @param lineNum Key property. See {@link SubBillAllocItemStandaloneSellingPrices.lineNum}.
   * @param itemCode Key property. See {@link SubBillAllocItemStandaloneSellingPrices.itemCode}.
   * @param itemRelation Key property. See {@link SubBillAllocItemStandaloneSellingPrices.itemRelation}.
   * @param revenueSplit Key property. See {@link SubBillAllocItemStandaloneSellingPrices.revenueSplit}.
   * @param parentItem Key property. See {@link SubBillAllocItemStandaloneSellingPrices.parentItem}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillAllocItemStandaloneSellingPrices`.
   */
  delete(
    dataAreaId: string,
    lineNum: BigNumber,
    itemCode: InventPostingItemCode,
    itemRelation: string,
    revenueSplit: NoYes,
    parentItem: string
  ): DeleteRequestBuilder<SubBillAllocItemStandaloneSellingPrices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillAllocItemStandaloneSellingPrices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillAllocItemStandaloneSellingPrices` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillAllocItemStandaloneSellingPrices<T>
  ): DeleteRequestBuilder<SubBillAllocItemStandaloneSellingPrices<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNum?: BigNumber,
    itemCode?: InventPostingItemCode,
    itemRelation?: string,
    revenueSplit?: NoYes,
    parentItem?: string
  ): DeleteRequestBuilder<SubBillAllocItemStandaloneSellingPrices<T>, T> {
    return new DeleteRequestBuilder<
      SubBillAllocItemStandaloneSellingPrices<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillAllocItemStandaloneSellingPrices
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNum: lineNum!,
            ItemCode: itemCode!,
            ItemRelation: itemRelation!,
            RevenueSplit: revenueSplit!,
            ParentItem: parentItem!
          }
    );
  }
}
