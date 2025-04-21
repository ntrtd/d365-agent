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
import { CreditManagementCashDiscountRanks } from './CreditManagementCashDiscountRanks';

/**
 * Request builder class for operations supported on the {@link CreditManagementCashDiscountRanks} entity.
 */
export class CreditManagementCashDiscountRanksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CreditManagementCashDiscountRanks<T>, T> {
  /**
   * Returns a request builder for querying all `CreditManagementCashDiscountRanks` entities.
   * @returns A request builder for creating requests to retrieve all `CreditManagementCashDiscountRanks` entities.
   */
  getAll(): GetAllRequestBuilder<CreditManagementCashDiscountRanks<T>, T> {
    return new GetAllRequestBuilder<CreditManagementCashDiscountRanks<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CreditManagementCashDiscountRanks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CreditManagementCashDiscountRanks`.
   */
  create(
    entity: CreditManagementCashDiscountRanks<T>
  ): CreateRequestBuilder<CreditManagementCashDiscountRanks<T>, T> {
    return new CreateRequestBuilder<CreditManagementCashDiscountRanks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CreditManagementCashDiscountRanks` entity based on its keys.
   * @param dataAreaId Key property. See {@link CreditManagementCashDiscountRanks.dataAreaId}.
   * @param cashDiscCode Key property. See {@link CreditManagementCashDiscountRanks.cashDiscCode}.
   * @returns A request builder for creating requests to retrieve one `CreditManagementCashDiscountRanks` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    cashDiscCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CreditManagementCashDiscountRanks<T>, T> {
    return new GetByKeyRequestBuilder<CreditManagementCashDiscountRanks<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CashDiscCode: cashDiscCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CreditManagementCashDiscountRanks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CreditManagementCashDiscountRanks`.
   */
  update(
    entity: CreditManagementCashDiscountRanks<T>
  ): UpdateRequestBuilder<CreditManagementCashDiscountRanks<T>, T> {
    return new UpdateRequestBuilder<CreditManagementCashDiscountRanks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CreditManagementCashDiscountRanks`.
   * @param dataAreaId Key property. See {@link CreditManagementCashDiscountRanks.dataAreaId}.
   * @param cashDiscCode Key property. See {@link CreditManagementCashDiscountRanks.cashDiscCode}.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementCashDiscountRanks`.
   */
  delete(
    dataAreaId: string,
    cashDiscCode: string
  ): DeleteRequestBuilder<CreditManagementCashDiscountRanks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CreditManagementCashDiscountRanks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementCashDiscountRanks` by taking the entity as a parameter.
   */
  delete(
    entity: CreditManagementCashDiscountRanks<T>
  ): DeleteRequestBuilder<CreditManagementCashDiscountRanks<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    cashDiscCode?: string
  ): DeleteRequestBuilder<CreditManagementCashDiscountRanks<T>, T> {
    return new DeleteRequestBuilder<CreditManagementCashDiscountRanks<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CreditManagementCashDiscountRanks
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CashDiscCode: cashDiscCode!
          }
    );
  }
}
