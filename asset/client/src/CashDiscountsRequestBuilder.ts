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
import { CashDiscounts } from './CashDiscounts';

/**
 * Request builder class for operations supported on the {@link CashDiscounts} entity.
 */
export class CashDiscountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CashDiscounts<T>, T> {
  /**
   * Returns a request builder for querying all `CashDiscounts` entities.
   * @returns A request builder for creating requests to retrieve all `CashDiscounts` entities.
   */
  getAll(): GetAllRequestBuilder<CashDiscounts<T>, T> {
    return new GetAllRequestBuilder<CashDiscounts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CashDiscounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CashDiscounts`.
   */
  create(entity: CashDiscounts<T>): CreateRequestBuilder<CashDiscounts<T>, T> {
    return new CreateRequestBuilder<CashDiscounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CashDiscounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link CashDiscounts.dataAreaId}.
   * @param cashDiscountCode Key property. See {@link CashDiscounts.cashDiscountCode}.
   * @returns A request builder for creating requests to retrieve one `CashDiscounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    cashDiscountCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CashDiscounts<T>, T> {
    return new GetByKeyRequestBuilder<CashDiscounts<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CashDiscountCode: cashDiscountCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CashDiscounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CashDiscounts`.
   */
  update(entity: CashDiscounts<T>): UpdateRequestBuilder<CashDiscounts<T>, T> {
    return new UpdateRequestBuilder<CashDiscounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CashDiscounts`.
   * @param dataAreaId Key property. See {@link CashDiscounts.dataAreaId}.
   * @param cashDiscountCode Key property. See {@link CashDiscounts.cashDiscountCode}.
   * @returns A request builder for creating requests that delete an entity of type `CashDiscounts`.
   */
  delete(
    dataAreaId: string,
    cashDiscountCode: string
  ): DeleteRequestBuilder<CashDiscounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CashDiscounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CashDiscounts` by taking the entity as a parameter.
   */
  delete(entity: CashDiscounts<T>): DeleteRequestBuilder<CashDiscounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    cashDiscountCode?: string
  ): DeleteRequestBuilder<CashDiscounts<T>, T> {
    return new DeleteRequestBuilder<CashDiscounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CashDiscounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CashDiscountCode: cashDiscountCode!
          }
    );
  }
}
