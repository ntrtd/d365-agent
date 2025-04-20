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
import { SubBillDeferralDefaultAccounts } from './SubBillDeferralDefaultAccounts';
import { SubBillDeferralDefaultAccountType } from './SubBillDeferralDefaultAccountType';
import { InventPostingItemCode } from './InventPostingItemCode';
import { TableGroupAll } from './TableGroupAll';

/**
 * Request builder class for operations supported on the {@link SubBillDeferralDefaultAccounts} entity.
 */
export class SubBillDeferralDefaultAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillDeferralDefaultAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillDeferralDefaultAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillDeferralDefaultAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillDeferralDefaultAccounts<T>, T> {
    return new GetAllRequestBuilder<SubBillDeferralDefaultAccounts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillDeferralDefaultAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillDeferralDefaultAccounts`.
   */
  create(
    entity: SubBillDeferralDefaultAccounts<T>
  ): CreateRequestBuilder<SubBillDeferralDefaultAccounts<T>, T> {
    return new CreateRequestBuilder<SubBillDeferralDefaultAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillDeferralDefaultAccounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillDeferralDefaultAccounts.dataAreaId}.
   * @param accountType Key property. See {@link SubBillDeferralDefaultAccounts.accountType}.
   * @param itemCode Key property. See {@link SubBillDeferralDefaultAccounts.itemCode}.
   * @param itemRelation Key property. See {@link SubBillDeferralDefaultAccounts.itemRelation}.
   * @param categoryRelation Key property. See {@link SubBillDeferralDefaultAccounts.categoryRelation}.
   * @param accountCode Key property. See {@link SubBillDeferralDefaultAccounts.accountCode}.
   * @param accountRelation Key property. See {@link SubBillDeferralDefaultAccounts.accountRelation}.
   * @returns A request builder for creating requests to retrieve one `SubBillDeferralDefaultAccounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.SubBillDeferralDefaultAccountType'
    >,
    itemCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.InventPostingItemCode'
    >,
    itemRelation: DeserializedType<T, 'Edm.String'>,
    categoryRelation: DeserializedType<T, 'Edm.String'>,
    accountCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    accountRelation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillDeferralDefaultAccounts<T>, T> {
    return new GetByKeyRequestBuilder<SubBillDeferralDefaultAccounts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AccountType: accountType,
        ItemCode: itemCode,
        ItemRelation: itemRelation,
        CategoryRelation: categoryRelation,
        AccountCode: accountCode,
        AccountRelation: accountRelation
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillDeferralDefaultAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillDeferralDefaultAccounts`.
   */
  update(
    entity: SubBillDeferralDefaultAccounts<T>
  ): UpdateRequestBuilder<SubBillDeferralDefaultAccounts<T>, T> {
    return new UpdateRequestBuilder<SubBillDeferralDefaultAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralDefaultAccounts`.
   * @param dataAreaId Key property. See {@link SubBillDeferralDefaultAccounts.dataAreaId}.
   * @param accountType Key property. See {@link SubBillDeferralDefaultAccounts.accountType}.
   * @param itemCode Key property. See {@link SubBillDeferralDefaultAccounts.itemCode}.
   * @param itemRelation Key property. See {@link SubBillDeferralDefaultAccounts.itemRelation}.
   * @param categoryRelation Key property. See {@link SubBillDeferralDefaultAccounts.categoryRelation}.
   * @param accountCode Key property. See {@link SubBillDeferralDefaultAccounts.accountCode}.
   * @param accountRelation Key property. See {@link SubBillDeferralDefaultAccounts.accountRelation}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralDefaultAccounts`.
   */
  delete(
    dataAreaId: string,
    accountType: SubBillDeferralDefaultAccountType,
    itemCode: InventPostingItemCode,
    itemRelation: string,
    categoryRelation: string,
    accountCode: TableGroupAll,
    accountRelation: string
  ): DeleteRequestBuilder<SubBillDeferralDefaultAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralDefaultAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralDefaultAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillDeferralDefaultAccounts<T>
  ): DeleteRequestBuilder<SubBillDeferralDefaultAccounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountType?: SubBillDeferralDefaultAccountType,
    itemCode?: InventPostingItemCode,
    itemRelation?: string,
    categoryRelation?: string,
    accountCode?: TableGroupAll,
    accountRelation?: string
  ): DeleteRequestBuilder<SubBillDeferralDefaultAccounts<T>, T> {
    return new DeleteRequestBuilder<SubBillDeferralDefaultAccounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillDeferralDefaultAccounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountType: accountType!,
            ItemCode: itemCode!,
            ItemRelation: itemRelation!,
            CategoryRelation: categoryRelation!,
            AccountCode: accountCode!,
            AccountRelation: accountRelation!
          }
    );
  }
}
