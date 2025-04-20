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
import { BankBillOfExchangeLayouts } from './BankBillOfExchangeLayouts';

/**
 * Request builder class for operations supported on the {@link BankBillOfExchangeLayouts} entity.
 */
export class BankBillOfExchangeLayoutsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankBillOfExchangeLayouts<T>, T> {
  /**
   * Returns a request builder for querying all `BankBillOfExchangeLayouts` entities.
   * @returns A request builder for creating requests to retrieve all `BankBillOfExchangeLayouts` entities.
   */
  getAll(): GetAllRequestBuilder<BankBillOfExchangeLayouts<T>, T> {
    return new GetAllRequestBuilder<BankBillOfExchangeLayouts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BankBillOfExchangeLayouts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankBillOfExchangeLayouts`.
   */
  create(
    entity: BankBillOfExchangeLayouts<T>
  ): CreateRequestBuilder<BankBillOfExchangeLayouts<T>, T> {
    return new CreateRequestBuilder<BankBillOfExchangeLayouts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BankBillOfExchangeLayouts` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankBillOfExchangeLayouts.dataAreaId}.
   * @param bankAccountId Key property. See {@link BankBillOfExchangeLayouts.bankAccountId}.
   * @returns A request builder for creating requests to retrieve one `BankBillOfExchangeLayouts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bankAccountId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BankBillOfExchangeLayouts<T>, T> {
    return new GetByKeyRequestBuilder<BankBillOfExchangeLayouts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BankAccountId: bankAccountId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BankBillOfExchangeLayouts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankBillOfExchangeLayouts`.
   */
  update(
    entity: BankBillOfExchangeLayouts<T>
  ): UpdateRequestBuilder<BankBillOfExchangeLayouts<T>, T> {
    return new UpdateRequestBuilder<BankBillOfExchangeLayouts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankBillOfExchangeLayouts`.
   * @param dataAreaId Key property. See {@link BankBillOfExchangeLayouts.dataAreaId}.
   * @param bankAccountId Key property. See {@link BankBillOfExchangeLayouts.bankAccountId}.
   * @returns A request builder for creating requests that delete an entity of type `BankBillOfExchangeLayouts`.
   */
  delete(
    dataAreaId: string,
    bankAccountId: string
  ): DeleteRequestBuilder<BankBillOfExchangeLayouts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankBillOfExchangeLayouts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankBillOfExchangeLayouts` by taking the entity as a parameter.
   */
  delete(
    entity: BankBillOfExchangeLayouts<T>
  ): DeleteRequestBuilder<BankBillOfExchangeLayouts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bankAccountId?: string
  ): DeleteRequestBuilder<BankBillOfExchangeLayouts<T>, T> {
    return new DeleteRequestBuilder<BankBillOfExchangeLayouts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankBillOfExchangeLayouts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BankAccountId: bankAccountId!
          }
    );
  }
}
