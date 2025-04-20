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
import { ExpensePaymentDetails } from './ExpensePaymentDetails';

/**
 * Request builder class for operations supported on the {@link ExpensePaymentDetails} entity.
 */
export class ExpensePaymentDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpensePaymentDetails<T>, T> {
  /**
   * Returns a request builder for querying all `ExpensePaymentDetails` entities.
   * @returns A request builder for creating requests to retrieve all `ExpensePaymentDetails` entities.
   */
  getAll(): GetAllRequestBuilder<ExpensePaymentDetails<T>, T> {
    return new GetAllRequestBuilder<ExpensePaymentDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExpensePaymentDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpensePaymentDetails`.
   */
  create(
    entity: ExpensePaymentDetails<T>
  ): CreateRequestBuilder<ExpensePaymentDetails<T>, T> {
    return new CreateRequestBuilder<ExpensePaymentDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpensePaymentDetails` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExpensePaymentDetails.dataAreaId}.
   * @param invoiceId Key property. See {@link ExpensePaymentDetails.invoiceId}.
   * @param expNumber Key property. See {@link ExpensePaymentDetails.expNumber}.
   * @param expTransNumber Key property. See {@link ExpensePaymentDetails.expTransNumber}.
   * @returns A request builder for creating requests to retrieve one `ExpensePaymentDetails` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceId: DeserializedType<T, 'Edm.String'>,
    expNumber: DeserializedType<T, 'Edm.String'>,
    expTransNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpensePaymentDetails<T>, T> {
    return new GetByKeyRequestBuilder<ExpensePaymentDetails<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InvoiceId: invoiceId,
        ExpNumber: expNumber,
        ExpTransNumber: expTransNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpensePaymentDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpensePaymentDetails`.
   */
  update(
    entity: ExpensePaymentDetails<T>
  ): UpdateRequestBuilder<ExpensePaymentDetails<T>, T> {
    return new UpdateRequestBuilder<ExpensePaymentDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpensePaymentDetails`.
   * @param dataAreaId Key property. See {@link ExpensePaymentDetails.dataAreaId}.
   * @param invoiceId Key property. See {@link ExpensePaymentDetails.invoiceId}.
   * @param expNumber Key property. See {@link ExpensePaymentDetails.expNumber}.
   * @param expTransNumber Key property. See {@link ExpensePaymentDetails.expTransNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ExpensePaymentDetails`.
   */
  delete(
    dataAreaId: string,
    invoiceId: string,
    expNumber: string,
    expTransNumber: string
  ): DeleteRequestBuilder<ExpensePaymentDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpensePaymentDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpensePaymentDetails` by taking the entity as a parameter.
   */
  delete(
    entity: ExpensePaymentDetails<T>
  ): DeleteRequestBuilder<ExpensePaymentDetails<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    invoiceId?: string,
    expNumber?: string,
    expTransNumber?: string
  ): DeleteRequestBuilder<ExpensePaymentDetails<T>, T> {
    return new DeleteRequestBuilder<ExpensePaymentDetails<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExpensePaymentDetails
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InvoiceId: invoiceId!,
            ExpNumber: expNumber!,
            ExpTransNumber: expTransNumber!
          }
    );
  }
}
