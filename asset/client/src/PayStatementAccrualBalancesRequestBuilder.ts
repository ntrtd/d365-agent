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
import { PayStatementAccrualBalances } from './PayStatementAccrualBalances';

/**
 * Request builder class for operations supported on the {@link PayStatementAccrualBalances} entity.
 */
export class PayStatementAccrualBalancesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayStatementAccrualBalances<T>, T> {
  /**
   * Returns a request builder for querying all `PayStatementAccrualBalances` entities.
   * @returns A request builder for creating requests to retrieve all `PayStatementAccrualBalances` entities.
   */
  getAll(): GetAllRequestBuilder<PayStatementAccrualBalances<T>, T> {
    return new GetAllRequestBuilder<PayStatementAccrualBalances<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayStatementAccrualBalances` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayStatementAccrualBalances`.
   */
  create(
    entity: PayStatementAccrualBalances<T>
  ): CreateRequestBuilder<PayStatementAccrualBalances<T>, T> {
    return new CreateRequestBuilder<PayStatementAccrualBalances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayStatementAccrualBalances` entity based on its keys.
   * @param dataAreaId Key property. See {@link PayStatementAccrualBalances.dataAreaId}.
   * @param payStatementNumber Key property. See {@link PayStatementAccrualBalances.payStatementNumber}.
   * @param accrualId Key property. See {@link PayStatementAccrualBalances.accrualId}.
   * @returns A request builder for creating requests to retrieve one `PayStatementAccrualBalances` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    payStatementNumber: DeserializedType<T, 'Edm.String'>,
    accrualId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayStatementAccrualBalances<T>, T> {
    return new GetByKeyRequestBuilder<PayStatementAccrualBalances<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PayStatementNumber: payStatementNumber,
        AccrualId: accrualId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayStatementAccrualBalances`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayStatementAccrualBalances`.
   */
  update(
    entity: PayStatementAccrualBalances<T>
  ): UpdateRequestBuilder<PayStatementAccrualBalances<T>, T> {
    return new UpdateRequestBuilder<PayStatementAccrualBalances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayStatementAccrualBalances`.
   * @param dataAreaId Key property. See {@link PayStatementAccrualBalances.dataAreaId}.
   * @param payStatementNumber Key property. See {@link PayStatementAccrualBalances.payStatementNumber}.
   * @param accrualId Key property. See {@link PayStatementAccrualBalances.accrualId}.
   * @returns A request builder for creating requests that delete an entity of type `PayStatementAccrualBalances`.
   */
  delete(
    dataAreaId: string,
    payStatementNumber: string,
    accrualId: string
  ): DeleteRequestBuilder<PayStatementAccrualBalances<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayStatementAccrualBalances`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayStatementAccrualBalances` by taking the entity as a parameter.
   */
  delete(
    entity: PayStatementAccrualBalances<T>
  ): DeleteRequestBuilder<PayStatementAccrualBalances<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    payStatementNumber?: string,
    accrualId?: string
  ): DeleteRequestBuilder<PayStatementAccrualBalances<T>, T> {
    return new DeleteRequestBuilder<PayStatementAccrualBalances<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PayStatementAccrualBalances
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PayStatementNumber: payStatementNumber!,
            AccrualId: accrualId!
          }
    );
  }
}
