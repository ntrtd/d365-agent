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
import { PaymentCalendarExceptions } from './PaymentCalendarExceptions';

/**
 * Request builder class for operations supported on the {@link PaymentCalendarExceptions} entity.
 */
export class PaymentCalendarExceptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentCalendarExceptions<T>, T> {
  /**
   * Returns a request builder for querying all `PaymentCalendarExceptions` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentCalendarExceptions` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentCalendarExceptions<T>, T> {
    return new GetAllRequestBuilder<PaymentCalendarExceptions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PaymentCalendarExceptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentCalendarExceptions`.
   */
  create(
    entity: PaymentCalendarExceptions<T>
  ): CreateRequestBuilder<PaymentCalendarExceptions<T>, T> {
    return new CreateRequestBuilder<PaymentCalendarExceptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PaymentCalendarExceptions` entity based on its keys.
   * @param paymentCalendarName Key property. See {@link PaymentCalendarExceptions.paymentCalendarName}.
   * @param exceptionDate Key property. See {@link PaymentCalendarExceptions.exceptionDate}.
   * @returns A request builder for creating requests to retrieve one `PaymentCalendarExceptions` entity based on its keys.
   */
  getByKey(
    paymentCalendarName: DeserializedType<T, 'Edm.String'>,
    exceptionDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PaymentCalendarExceptions<T>, T> {
    return new GetByKeyRequestBuilder<PaymentCalendarExceptions<T>, T>(
      this.entityApi,
      {
        PaymentCalendarName: paymentCalendarName,
        ExceptionDate: exceptionDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentCalendarExceptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentCalendarExceptions`.
   */
  update(
    entity: PaymentCalendarExceptions<T>
  ): UpdateRequestBuilder<PaymentCalendarExceptions<T>, T> {
    return new UpdateRequestBuilder<PaymentCalendarExceptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentCalendarExceptions`.
   * @param paymentCalendarName Key property. See {@link PaymentCalendarExceptions.paymentCalendarName}.
   * @param exceptionDate Key property. See {@link PaymentCalendarExceptions.exceptionDate}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentCalendarExceptions`.
   */
  delete(
    paymentCalendarName: string,
    exceptionDate: Moment
  ): DeleteRequestBuilder<PaymentCalendarExceptions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentCalendarExceptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentCalendarExceptions` by taking the entity as a parameter.
   */
  delete(
    entity: PaymentCalendarExceptions<T>
  ): DeleteRequestBuilder<PaymentCalendarExceptions<T>, T>;
  delete(
    paymentCalendarNameOrEntity: any,
    exceptionDate?: Moment
  ): DeleteRequestBuilder<PaymentCalendarExceptions<T>, T> {
    return new DeleteRequestBuilder<PaymentCalendarExceptions<T>, T>(
      this.entityApi,
      paymentCalendarNameOrEntity instanceof PaymentCalendarExceptions
        ? paymentCalendarNameOrEntity
        : {
            PaymentCalendarName: paymentCalendarNameOrEntity!,
            ExceptionDate: exceptionDate!
          }
    );
  }
}
