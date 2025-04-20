/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { BankClientAccountBalances } from './BankClientAccountBalances';
import { BankClientBalanceTypeRu } from './BankClientBalanceTypeRu';

/**
 * Request builder class for operations supported on the {@link BankClientAccountBalances} entity.
 */
export class BankClientAccountBalancesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankClientAccountBalances<T>, T> {
  /**
   * Returns a request builder for querying all `BankClientAccountBalances` entities.
   * @returns A request builder for creating requests to retrieve all `BankClientAccountBalances` entities.
   */
  getAll(): GetAllRequestBuilder<BankClientAccountBalances<T>, T> {
    return new GetAllRequestBuilder<BankClientAccountBalances<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BankClientAccountBalances` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankClientAccountBalances`.
   */
  create(
    entity: BankClientAccountBalances<T>
  ): CreateRequestBuilder<BankClientAccountBalances<T>, T> {
    return new CreateRequestBuilder<BankClientAccountBalances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BankClientAccountBalances` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankClientAccountBalances.dataAreaId}.
   * @param bankAccount Key property. See {@link BankClientAccountBalances.bankAccount}.
   * @param recordType Key property. See {@link BankClientAccountBalances.recordType}.
   * @param fromDate Key property. See {@link BankClientAccountBalances.fromDate}.
   * @param toDate Key property. See {@link BankClientAccountBalances.toDate}.
   * @returns A request builder for creating requests to retrieve one `BankClientAccountBalances` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bankAccount: DeserializedType<T, 'Edm.String'>,
    recordType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BankClientBalanceType_RU'
    >,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    toDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BankClientAccountBalances<T>, T> {
    return new GetByKeyRequestBuilder<BankClientAccountBalances<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BankAccount: bankAccount,
        RecordType: recordType,
        FromDate: fromDate,
        ToDate: toDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BankClientAccountBalances`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankClientAccountBalances`.
   */
  update(
    entity: BankClientAccountBalances<T>
  ): UpdateRequestBuilder<BankClientAccountBalances<T>, T> {
    return new UpdateRequestBuilder<BankClientAccountBalances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankClientAccountBalances`.
   * @param dataAreaId Key property. See {@link BankClientAccountBalances.dataAreaId}.
   * @param bankAccount Key property. See {@link BankClientAccountBalances.bankAccount}.
   * @param recordType Key property. See {@link BankClientAccountBalances.recordType}.
   * @param fromDate Key property. See {@link BankClientAccountBalances.fromDate}.
   * @param toDate Key property. See {@link BankClientAccountBalances.toDate}.
   * @returns A request builder for creating requests that delete an entity of type `BankClientAccountBalances`.
   */
  delete(
    dataAreaId: string,
    bankAccount: string,
    recordType: BankClientBalanceTypeRu,
    fromDate: Moment,
    toDate: Moment
  ): DeleteRequestBuilder<BankClientAccountBalances<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankClientAccountBalances`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankClientAccountBalances` by taking the entity as a parameter.
   */
  delete(
    entity: BankClientAccountBalances<T>
  ): DeleteRequestBuilder<BankClientAccountBalances<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bankAccount?: string,
    recordType?: BankClientBalanceTypeRu,
    fromDate?: Moment,
    toDate?: Moment
  ): DeleteRequestBuilder<BankClientAccountBalances<T>, T> {
    return new DeleteRequestBuilder<BankClientAccountBalances<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankClientAccountBalances
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BankAccount: bankAccount!,
            RecordType: recordType!,
            FromDate: fromDate!,
            ToDate: toDate!
          }
    );
  }
}
