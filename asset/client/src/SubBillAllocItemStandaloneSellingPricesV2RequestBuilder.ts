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
import { SubBillAllocItemStandaloneSellingPricesV2 } from './SubBillAllocItemStandaloneSellingPricesV2';
import { InventPostingItemCode } from './InventPostingItemCode';
import { NoYes } from './NoYes';

/**
 * Request builder class for operations supported on the {@link SubBillAllocItemStandaloneSellingPricesV2} entity.
 */
export class SubBillAllocItemStandaloneSellingPricesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillAllocItemStandaloneSellingPricesV2<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillAllocItemStandaloneSellingPricesV2` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillAllocItemStandaloneSellingPricesV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    SubBillAllocItemStandaloneSellingPricesV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      SubBillAllocItemStandaloneSellingPricesV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SubBillAllocItemStandaloneSellingPricesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillAllocItemStandaloneSellingPricesV2`.
   */
  create(
    entity: SubBillAllocItemStandaloneSellingPricesV2<T>
  ): CreateRequestBuilder<SubBillAllocItemStandaloneSellingPricesV2<T>, T> {
    return new CreateRequestBuilder<
      SubBillAllocItemStandaloneSellingPricesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SubBillAllocItemStandaloneSellingPricesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillAllocItemStandaloneSellingPricesV2.dataAreaId}.
   * @param lineNum Key property. See {@link SubBillAllocItemStandaloneSellingPricesV2.lineNum}.
   * @param itemCode Key property. See {@link SubBillAllocItemStandaloneSellingPricesV2.itemCode}.
   * @param itemRelation Key property. See {@link SubBillAllocItemStandaloneSellingPricesV2.itemRelation}.
   * @param revenueSplit Key property. See {@link SubBillAllocItemStandaloneSellingPricesV2.revenueSplit}.
   * @param parentItem Key property. See {@link SubBillAllocItemStandaloneSellingPricesV2.parentItem}.
   * @param retailVariantId Key property. See {@link SubBillAllocItemStandaloneSellingPricesV2.retailVariantId}.
   * @param parentVariant Key property. See {@link SubBillAllocItemStandaloneSellingPricesV2.parentVariant}.
   * @returns A request builder for creating requests to retrieve one `SubBillAllocItemStandaloneSellingPricesV2` entity based on its keys.
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
    parentItem: DeserializedType<T, 'Edm.String'>,
    retailVariantId: DeserializedType<T, 'Edm.String'>,
    parentVariant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillAllocItemStandaloneSellingPricesV2<T>, T> {
    return new GetByKeyRequestBuilder<
      SubBillAllocItemStandaloneSellingPricesV2<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LineNum: lineNum,
      ItemCode: itemCode,
      ItemRelation: itemRelation,
      RevenueSplit: revenueSplit,
      ParentItem: parentItem,
      RetailVariantId: retailVariantId,
      ParentVariant: parentVariant
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillAllocItemStandaloneSellingPricesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillAllocItemStandaloneSellingPricesV2`.
   */
  update(
    entity: SubBillAllocItemStandaloneSellingPricesV2<T>
  ): UpdateRequestBuilder<SubBillAllocItemStandaloneSellingPricesV2<T>, T> {
    return new UpdateRequestBuilder<
      SubBillAllocItemStandaloneSellingPricesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillAllocItemStandaloneSellingPricesV2`.
   * @param dataAreaId Key property. See {@link SubBillAllocItemStandaloneSellingPricesV2.dataAreaId}.
   * @param lineNum Key property. See {@link SubBillAllocItemStandaloneSellingPricesV2.lineNum}.
   * @param itemCode Key property. See {@link SubBillAllocItemStandaloneSellingPricesV2.itemCode}.
   * @param itemRelation Key property. See {@link SubBillAllocItemStandaloneSellingPricesV2.itemRelation}.
   * @param revenueSplit Key property. See {@link SubBillAllocItemStandaloneSellingPricesV2.revenueSplit}.
   * @param parentItem Key property. See {@link SubBillAllocItemStandaloneSellingPricesV2.parentItem}.
   * @param retailVariantId Key property. See {@link SubBillAllocItemStandaloneSellingPricesV2.retailVariantId}.
   * @param parentVariant Key property. See {@link SubBillAllocItemStandaloneSellingPricesV2.parentVariant}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillAllocItemStandaloneSellingPricesV2`.
   */
  delete(
    dataAreaId: string,
    lineNum: BigNumber,
    itemCode: InventPostingItemCode,
    itemRelation: string,
    revenueSplit: NoYes,
    parentItem: string,
    retailVariantId: string,
    parentVariant: string
  ): DeleteRequestBuilder<SubBillAllocItemStandaloneSellingPricesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillAllocItemStandaloneSellingPricesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillAllocItemStandaloneSellingPricesV2` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillAllocItemStandaloneSellingPricesV2<T>
  ): DeleteRequestBuilder<SubBillAllocItemStandaloneSellingPricesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNum?: BigNumber,
    itemCode?: InventPostingItemCode,
    itemRelation?: string,
    revenueSplit?: NoYes,
    parentItem?: string,
    retailVariantId?: string,
    parentVariant?: string
  ): DeleteRequestBuilder<SubBillAllocItemStandaloneSellingPricesV2<T>, T> {
    return new DeleteRequestBuilder<
      SubBillAllocItemStandaloneSellingPricesV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillAllocItemStandaloneSellingPricesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNum: lineNum!,
            ItemCode: itemCode!,
            ItemRelation: itemRelation!,
            RevenueSplit: revenueSplit!,
            ParentItem: parentItem!,
            RetailVariantId: retailVariantId!,
            ParentVariant: parentVariant!
          }
    );
  }
}
