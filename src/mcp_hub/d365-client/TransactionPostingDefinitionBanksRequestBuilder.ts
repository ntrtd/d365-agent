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
import { TransactionPostingDefinitionBanks } from './TransactionPostingDefinitionBanks';
import { BankTransactionTypes } from './BankTransactionTypes';
import { TableGroupAll } from './TableGroupAll';
import { TableAll } from './TableAll';

/**
 * Request builder class for operations supported on the {@link TransactionPostingDefinitionBanks} entity.
 */
export class TransactionPostingDefinitionBanksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransactionPostingDefinitionBanks<T>, T> {
  /**
   * Returns a request builder for querying all `TransactionPostingDefinitionBanks` entities.
   * @returns A request builder for creating requests to retrieve all `TransactionPostingDefinitionBanks` entities.
   */
  getAll(): GetAllRequestBuilder<TransactionPostingDefinitionBanks<T>, T> {
    return new GetAllRequestBuilder<TransactionPostingDefinitionBanks<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransactionPostingDefinitionBanks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransactionPostingDefinitionBanks`.
   */
  create(
    entity: TransactionPostingDefinitionBanks<T>
  ): CreateRequestBuilder<TransactionPostingDefinitionBanks<T>, T> {
    return new CreateRequestBuilder<TransactionPostingDefinitionBanks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransactionPostingDefinitionBanks` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransactionPostingDefinitionBanks.dataAreaId}.
   * @param bankTransactionType Key property. See {@link TransactionPostingDefinitionBanks.bankTransactionType}.
   * @param bankCodeTableGroupAll Key property. See {@link TransactionPostingDefinitionBanks.bankCodeTableGroupAll}.
   * @param methodOfPaymentTableAll Key property. See {@link TransactionPostingDefinitionBanks.methodOfPaymentTableAll}.
   * @param methodOfPayment Key property. See {@link TransactionPostingDefinitionBanks.methodOfPayment}.
   * @param bankRelationGroup Key property. See {@link TransactionPostingDefinitionBanks.bankRelationGroup}.
   * @param bankRelationTable Key property. See {@link TransactionPostingDefinitionBanks.bankRelationTable}.
   * @returns A request builder for creating requests to retrieve one `TransactionPostingDefinitionBanks` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bankTransactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BankTransactionTypes'
    >,
    bankCodeTableGroupAll: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    methodOfPaymentTableAll: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableAll'
    >,
    methodOfPayment: DeserializedType<T, 'Edm.String'>,
    bankRelationGroup: DeserializedType<T, 'Edm.String'>,
    bankRelationTable: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TransactionPostingDefinitionBanks<T>, T> {
    return new GetByKeyRequestBuilder<TransactionPostingDefinitionBanks<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BankTransactionType: bankTransactionType,
        BankCodeTableGroupAll: bankCodeTableGroupAll,
        MethodOfPaymentTableAll: methodOfPaymentTableAll,
        MethodOfPayment: methodOfPayment,
        BankRelationGroup: bankRelationGroup,
        BankRelationTable: bankRelationTable
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransactionPostingDefinitionBanks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransactionPostingDefinitionBanks`.
   */
  update(
    entity: TransactionPostingDefinitionBanks<T>
  ): UpdateRequestBuilder<TransactionPostingDefinitionBanks<T>, T> {
    return new UpdateRequestBuilder<TransactionPostingDefinitionBanks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransactionPostingDefinitionBanks`.
   * @param dataAreaId Key property. See {@link TransactionPostingDefinitionBanks.dataAreaId}.
   * @param bankTransactionType Key property. See {@link TransactionPostingDefinitionBanks.bankTransactionType}.
   * @param bankCodeTableGroupAll Key property. See {@link TransactionPostingDefinitionBanks.bankCodeTableGroupAll}.
   * @param methodOfPaymentTableAll Key property. See {@link TransactionPostingDefinitionBanks.methodOfPaymentTableAll}.
   * @param methodOfPayment Key property. See {@link TransactionPostingDefinitionBanks.methodOfPayment}.
   * @param bankRelationGroup Key property. See {@link TransactionPostingDefinitionBanks.bankRelationGroup}.
   * @param bankRelationTable Key property. See {@link TransactionPostingDefinitionBanks.bankRelationTable}.
   * @returns A request builder for creating requests that delete an entity of type `TransactionPostingDefinitionBanks`.
   */
  delete(
    dataAreaId: string,
    bankTransactionType: BankTransactionTypes,
    bankCodeTableGroupAll: TableGroupAll,
    methodOfPaymentTableAll: TableAll,
    methodOfPayment: string,
    bankRelationGroup: string,
    bankRelationTable: string
  ): DeleteRequestBuilder<TransactionPostingDefinitionBanks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransactionPostingDefinitionBanks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransactionPostingDefinitionBanks` by taking the entity as a parameter.
   */
  delete(
    entity: TransactionPostingDefinitionBanks<T>
  ): DeleteRequestBuilder<TransactionPostingDefinitionBanks<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bankTransactionType?: BankTransactionTypes,
    bankCodeTableGroupAll?: TableGroupAll,
    methodOfPaymentTableAll?: TableAll,
    methodOfPayment?: string,
    bankRelationGroup?: string,
    bankRelationTable?: string
  ): DeleteRequestBuilder<TransactionPostingDefinitionBanks<T>, T> {
    return new DeleteRequestBuilder<TransactionPostingDefinitionBanks<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransactionPostingDefinitionBanks
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BankTransactionType: bankTransactionType!,
            BankCodeTableGroupAll: bankCodeTableGroupAll!,
            MethodOfPaymentTableAll: methodOfPaymentTableAll!,
            MethodOfPayment: methodOfPayment!,
            BankRelationGroup: bankRelationGroup!,
            BankRelationTable: bankRelationTable!
          }
    );
  }
}
