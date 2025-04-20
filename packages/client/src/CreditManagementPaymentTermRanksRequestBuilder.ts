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
import { CreditManagementPaymentTermRanks } from './CreditManagementPaymentTermRanks';

/**
 * Request builder class for operations supported on the {@link CreditManagementPaymentTermRanks} entity.
 */
export class CreditManagementPaymentTermRanksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CreditManagementPaymentTermRanks<T>, T> {
  /**
   * Returns a request builder for querying all `CreditManagementPaymentTermRanks` entities.
   * @returns A request builder for creating requests to retrieve all `CreditManagementPaymentTermRanks` entities.
   */
  getAll(): GetAllRequestBuilder<CreditManagementPaymentTermRanks<T>, T> {
    return new GetAllRequestBuilder<CreditManagementPaymentTermRanks<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CreditManagementPaymentTermRanks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CreditManagementPaymentTermRanks`.
   */
  create(
    entity: CreditManagementPaymentTermRanks<T>
  ): CreateRequestBuilder<CreditManagementPaymentTermRanks<T>, T> {
    return new CreateRequestBuilder<CreditManagementPaymentTermRanks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CreditManagementPaymentTermRanks` entity based on its keys.
   * @param dataAreaId Key property. See {@link CreditManagementPaymentTermRanks.dataAreaId}.
   * @param paymentTerms Key property. See {@link CreditManagementPaymentTermRanks.paymentTerms}.
   * @returns A request builder for creating requests to retrieve one `CreditManagementPaymentTermRanks` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    paymentTerms: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CreditManagementPaymentTermRanks<T>, T> {
    return new GetByKeyRequestBuilder<CreditManagementPaymentTermRanks<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PaymentTerms: paymentTerms
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CreditManagementPaymentTermRanks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CreditManagementPaymentTermRanks`.
   */
  update(
    entity: CreditManagementPaymentTermRanks<T>
  ): UpdateRequestBuilder<CreditManagementPaymentTermRanks<T>, T> {
    return new UpdateRequestBuilder<CreditManagementPaymentTermRanks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CreditManagementPaymentTermRanks`.
   * @param dataAreaId Key property. See {@link CreditManagementPaymentTermRanks.dataAreaId}.
   * @param paymentTerms Key property. See {@link CreditManagementPaymentTermRanks.paymentTerms}.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementPaymentTermRanks`.
   */
  delete(
    dataAreaId: string,
    paymentTerms: string
  ): DeleteRequestBuilder<CreditManagementPaymentTermRanks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CreditManagementPaymentTermRanks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementPaymentTermRanks` by taking the entity as a parameter.
   */
  delete(
    entity: CreditManagementPaymentTermRanks<T>
  ): DeleteRequestBuilder<CreditManagementPaymentTermRanks<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    paymentTerms?: string
  ): DeleteRequestBuilder<CreditManagementPaymentTermRanks<T>, T> {
    return new DeleteRequestBuilder<CreditManagementPaymentTermRanks<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CreditManagementPaymentTermRanks
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PaymentTerms: paymentTerms!
          }
    );
  }
}
