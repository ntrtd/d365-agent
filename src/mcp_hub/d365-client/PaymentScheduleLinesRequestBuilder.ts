/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { PaymentScheduleLines } from './PaymentScheduleLines';

/**
 * Request builder class for operations supported on the {@link PaymentScheduleLines} entity.
 */
export class PaymentScheduleLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentScheduleLines<T>, T> {
  /**
   * Returns a request builder for querying all `PaymentScheduleLines` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentScheduleLines` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentScheduleLines<T>, T> {
    return new GetAllRequestBuilder<PaymentScheduleLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymentScheduleLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentScheduleLines`.
   */
  create(
    entity: PaymentScheduleLines<T>
  ): CreateRequestBuilder<PaymentScheduleLines<T>, T> {
    return new CreateRequestBuilder<PaymentScheduleLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PaymentScheduleLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link PaymentScheduleLines.dataAreaId}.
   * @param paymentScheduleName Key property. See {@link PaymentScheduleLines.paymentScheduleName}.
   * @param lineNumber Key property. See {@link PaymentScheduleLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `PaymentScheduleLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    paymentScheduleName: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PaymentScheduleLines<T>, T> {
    return new GetByKeyRequestBuilder<PaymentScheduleLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PaymentScheduleName: paymentScheduleName,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentScheduleLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentScheduleLines`.
   */
  update(
    entity: PaymentScheduleLines<T>
  ): UpdateRequestBuilder<PaymentScheduleLines<T>, T> {
    return new UpdateRequestBuilder<PaymentScheduleLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentScheduleLines`.
   * @param dataAreaId Key property. See {@link PaymentScheduleLines.dataAreaId}.
   * @param paymentScheduleName Key property. See {@link PaymentScheduleLines.paymentScheduleName}.
   * @param lineNumber Key property. See {@link PaymentScheduleLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentScheduleLines`.
   */
  delete(
    dataAreaId: string,
    paymentScheduleName: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<PaymentScheduleLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentScheduleLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentScheduleLines` by taking the entity as a parameter.
   */
  delete(
    entity: PaymentScheduleLines<T>
  ): DeleteRequestBuilder<PaymentScheduleLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    paymentScheduleName?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<PaymentScheduleLines<T>, T> {
    return new DeleteRequestBuilder<PaymentScheduleLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PaymentScheduleLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PaymentScheduleName: paymentScheduleName!,
            LineNumber: lineNumber!
          }
    );
  }
}
