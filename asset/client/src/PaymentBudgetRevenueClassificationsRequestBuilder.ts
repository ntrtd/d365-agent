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
import { PaymentBudgetRevenueClassifications } from './PaymentBudgetRevenueClassifications';

/**
 * Request builder class for operations supported on the {@link PaymentBudgetRevenueClassifications} entity.
 */
export class PaymentBudgetRevenueClassificationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentBudgetRevenueClassifications<T>, T> {
  /**
   * Returns a request builder for querying all `PaymentBudgetRevenueClassifications` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentBudgetRevenueClassifications` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentBudgetRevenueClassifications<T>, T> {
    return new GetAllRequestBuilder<PaymentBudgetRevenueClassifications<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PaymentBudgetRevenueClassifications` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentBudgetRevenueClassifications`.
   */
  create(
    entity: PaymentBudgetRevenueClassifications<T>
  ): CreateRequestBuilder<PaymentBudgetRevenueClassifications<T>, T> {
    return new CreateRequestBuilder<PaymentBudgetRevenueClassifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PaymentBudgetRevenueClassifications` entity based on its keys.
   * @param dataAreaId Key property. See {@link PaymentBudgetRevenueClassifications.dataAreaId}.
   * @param budgetRevenueCode Key property. See {@link PaymentBudgetRevenueClassifications.budgetRevenueCode}.
   * @returns A request builder for creating requests to retrieve one `PaymentBudgetRevenueClassifications` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    budgetRevenueCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PaymentBudgetRevenueClassifications<T>, T> {
    return new GetByKeyRequestBuilder<
      PaymentBudgetRevenueClassifications<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      BudgetRevenueCode: budgetRevenueCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentBudgetRevenueClassifications`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentBudgetRevenueClassifications`.
   */
  update(
    entity: PaymentBudgetRevenueClassifications<T>
  ): UpdateRequestBuilder<PaymentBudgetRevenueClassifications<T>, T> {
    return new UpdateRequestBuilder<PaymentBudgetRevenueClassifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentBudgetRevenueClassifications`.
   * @param dataAreaId Key property. See {@link PaymentBudgetRevenueClassifications.dataAreaId}.
   * @param budgetRevenueCode Key property. See {@link PaymentBudgetRevenueClassifications.budgetRevenueCode}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentBudgetRevenueClassifications`.
   */
  delete(
    dataAreaId: string,
    budgetRevenueCode: string
  ): DeleteRequestBuilder<PaymentBudgetRevenueClassifications<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentBudgetRevenueClassifications`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentBudgetRevenueClassifications` by taking the entity as a parameter.
   */
  delete(
    entity: PaymentBudgetRevenueClassifications<T>
  ): DeleteRequestBuilder<PaymentBudgetRevenueClassifications<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    budgetRevenueCode?: string
  ): DeleteRequestBuilder<PaymentBudgetRevenueClassifications<T>, T> {
    return new DeleteRequestBuilder<PaymentBudgetRevenueClassifications<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PaymentBudgetRevenueClassifications
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BudgetRevenueCode: budgetRevenueCode!
          }
    );
  }
}
