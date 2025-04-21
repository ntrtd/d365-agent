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
import { BankClientOutPaymentLogs } from './BankClientOutPaymentLogs';

/**
 * Request builder class for operations supported on the {@link BankClientOutPaymentLogs} entity.
 */
export class BankClientOutPaymentLogsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankClientOutPaymentLogs<T>, T> {
  /**
   * Returns a request builder for querying all `BankClientOutPaymentLogs` entities.
   * @returns A request builder for creating requests to retrieve all `BankClientOutPaymentLogs` entities.
   */
  getAll(): GetAllRequestBuilder<BankClientOutPaymentLogs<T>, T> {
    return new GetAllRequestBuilder<BankClientOutPaymentLogs<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BankClientOutPaymentLogs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankClientOutPaymentLogs`.
   */
  create(
    entity: BankClientOutPaymentLogs<T>
  ): CreateRequestBuilder<BankClientOutPaymentLogs<T>, T> {
    return new CreateRequestBuilder<BankClientOutPaymentLogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BankClientOutPaymentLogs` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankClientOutPaymentLogs.dataAreaId}.
   * @param orderNumber Key property. See {@link BankClientOutPaymentLogs.orderNumber}.
   * @param orderDate Key property. See {@link BankClientOutPaymentLogs.orderDate}.
   * @returns A request builder for creating requests to retrieve one `BankClientOutPaymentLogs` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    orderNumber: DeserializedType<T, 'Edm.String'>,
    orderDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BankClientOutPaymentLogs<T>, T> {
    return new GetByKeyRequestBuilder<BankClientOutPaymentLogs<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OrderNumber: orderNumber,
        OrderDate: orderDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BankClientOutPaymentLogs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankClientOutPaymentLogs`.
   */
  update(
    entity: BankClientOutPaymentLogs<T>
  ): UpdateRequestBuilder<BankClientOutPaymentLogs<T>, T> {
    return new UpdateRequestBuilder<BankClientOutPaymentLogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankClientOutPaymentLogs`.
   * @param dataAreaId Key property. See {@link BankClientOutPaymentLogs.dataAreaId}.
   * @param orderNumber Key property. See {@link BankClientOutPaymentLogs.orderNumber}.
   * @param orderDate Key property. See {@link BankClientOutPaymentLogs.orderDate}.
   * @returns A request builder for creating requests that delete an entity of type `BankClientOutPaymentLogs`.
   */
  delete(
    dataAreaId: string,
    orderNumber: string,
    orderDate: Moment
  ): DeleteRequestBuilder<BankClientOutPaymentLogs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankClientOutPaymentLogs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankClientOutPaymentLogs` by taking the entity as a parameter.
   */
  delete(
    entity: BankClientOutPaymentLogs<T>
  ): DeleteRequestBuilder<BankClientOutPaymentLogs<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    orderNumber?: string,
    orderDate?: Moment
  ): DeleteRequestBuilder<BankClientOutPaymentLogs<T>, T> {
    return new DeleteRequestBuilder<BankClientOutPaymentLogs<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankClientOutPaymentLogs
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OrderNumber: orderNumber!,
            OrderDate: orderDate!
          }
    );
  }
}
