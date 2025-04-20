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
import { SubBillDeferralAccountTables } from './SubBillDeferralAccountTables';
import { SubBillDeferralTransactionType } from './SubBillDeferralTransactionType';
import { TableGroupAll } from './TableGroupAll';

/**
 * Request builder class for operations supported on the {@link SubBillDeferralAccountTables} entity.
 */
export class SubBillDeferralAccountTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillDeferralAccountTables<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillDeferralAccountTables` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillDeferralAccountTables` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillDeferralAccountTables<T>, T> {
    return new GetAllRequestBuilder<SubBillDeferralAccountTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillDeferralAccountTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillDeferralAccountTables`.
   */
  create(
    entity: SubBillDeferralAccountTables<T>
  ): CreateRequestBuilder<SubBillDeferralAccountTables<T>, T> {
    return new CreateRequestBuilder<SubBillDeferralAccountTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillDeferralAccountTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillDeferralAccountTables.dataAreaId}.
   * @param transactionType Key property. See {@link SubBillDeferralAccountTables.transactionType}.
   * @param accountCode Key property. See {@link SubBillDeferralAccountTables.accountCode}.
   * @param accountRelation Key property. See {@link SubBillDeferralAccountTables.accountRelation}.
   * @param deferralAccountDisplayValue Key property. See {@link SubBillDeferralAccountTables.deferralAccountDisplayValue}.
   * @returns A request builder for creating requests to retrieve one `SubBillDeferralAccountTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.SubBillDeferralTransactionType'
    >,
    accountCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    accountRelation: DeserializedType<T, 'Edm.String'>,
    deferralAccountDisplayValue: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillDeferralAccountTables<T>, T> {
    return new GetByKeyRequestBuilder<SubBillDeferralAccountTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransactionType: transactionType,
        AccountCode: accountCode,
        AccountRelation: accountRelation,
        DeferralAccountDisplayValue: deferralAccountDisplayValue
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillDeferralAccountTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillDeferralAccountTables`.
   */
  update(
    entity: SubBillDeferralAccountTables<T>
  ): UpdateRequestBuilder<SubBillDeferralAccountTables<T>, T> {
    return new UpdateRequestBuilder<SubBillDeferralAccountTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralAccountTables`.
   * @param dataAreaId Key property. See {@link SubBillDeferralAccountTables.dataAreaId}.
   * @param transactionType Key property. See {@link SubBillDeferralAccountTables.transactionType}.
   * @param accountCode Key property. See {@link SubBillDeferralAccountTables.accountCode}.
   * @param accountRelation Key property. See {@link SubBillDeferralAccountTables.accountRelation}.
   * @param deferralAccountDisplayValue Key property. See {@link SubBillDeferralAccountTables.deferralAccountDisplayValue}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralAccountTables`.
   */
  delete(
    dataAreaId: string,
    transactionType: SubBillDeferralTransactionType,
    accountCode: TableGroupAll,
    accountRelation: string,
    deferralAccountDisplayValue: string
  ): DeleteRequestBuilder<SubBillDeferralAccountTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralAccountTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralAccountTables` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillDeferralAccountTables<T>
  ): DeleteRequestBuilder<SubBillDeferralAccountTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transactionType?: SubBillDeferralTransactionType,
    accountCode?: TableGroupAll,
    accountRelation?: string,
    deferralAccountDisplayValue?: string
  ): DeleteRequestBuilder<SubBillDeferralAccountTables<T>, T> {
    return new DeleteRequestBuilder<SubBillDeferralAccountTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillDeferralAccountTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransactionType: transactionType!,
            AccountCode: accountCode!,
            AccountRelation: accountRelation!,
            DeferralAccountDisplayValue: deferralAccountDisplayValue!
          }
    );
  }
}
