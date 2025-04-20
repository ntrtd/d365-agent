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
import { LeasePaymentAmountBreakdownImports } from './LeasePaymentAmountBreakdownImports';

/**
 * Request builder class for operations supported on the {@link LeasePaymentAmountBreakdownImports} entity.
 */
export class LeasePaymentAmountBreakdownImportsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeasePaymentAmountBreakdownImports<T>, T> {
  /**
   * Returns a request builder for querying all `LeasePaymentAmountBreakdownImports` entities.
   * @returns A request builder for creating requests to retrieve all `LeasePaymentAmountBreakdownImports` entities.
   */
  getAll(): GetAllRequestBuilder<LeasePaymentAmountBreakdownImports<T>, T> {
    return new GetAllRequestBuilder<LeasePaymentAmountBreakdownImports<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeasePaymentAmountBreakdownImports` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeasePaymentAmountBreakdownImports`.
   */
  create(
    entity: LeasePaymentAmountBreakdownImports<T>
  ): CreateRequestBuilder<LeasePaymentAmountBreakdownImports<T>, T> {
    return new CreateRequestBuilder<LeasePaymentAmountBreakdownImports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeasePaymentAmountBreakdownImports` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeasePaymentAmountBreakdownImports.dataAreaId}.
   * @param importId Key property. See {@link LeasePaymentAmountBreakdownImports.importId}.
   * @param leaseId Key property. See {@link LeasePaymentAmountBreakdownImports.leaseId}.
   * @param startDate Key property. See {@link LeasePaymentAmountBreakdownImports.startDate}.
   * @param paymentAmountType Key property. See {@link LeasePaymentAmountBreakdownImports.paymentAmountType}.
   * @returns A request builder for creating requests to retrieve one `LeasePaymentAmountBreakdownImports` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    importId: DeserializedType<T, 'Edm.String'>,
    leaseId: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    paymentAmountType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeasePaymentAmountBreakdownImports<T>, T> {
    return new GetByKeyRequestBuilder<LeasePaymentAmountBreakdownImports<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ImportId: importId,
        LeaseId: leaseId,
        StartDate: startDate,
        PaymentAmountType: paymentAmountType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeasePaymentAmountBreakdownImports`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeasePaymentAmountBreakdownImports`.
   */
  update(
    entity: LeasePaymentAmountBreakdownImports<T>
  ): UpdateRequestBuilder<LeasePaymentAmountBreakdownImports<T>, T> {
    return new UpdateRequestBuilder<LeasePaymentAmountBreakdownImports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeasePaymentAmountBreakdownImports`.
   * @param dataAreaId Key property. See {@link LeasePaymentAmountBreakdownImports.dataAreaId}.
   * @param importId Key property. See {@link LeasePaymentAmountBreakdownImports.importId}.
   * @param leaseId Key property. See {@link LeasePaymentAmountBreakdownImports.leaseId}.
   * @param startDate Key property. See {@link LeasePaymentAmountBreakdownImports.startDate}.
   * @param paymentAmountType Key property. See {@link LeasePaymentAmountBreakdownImports.paymentAmountType}.
   * @returns A request builder for creating requests that delete an entity of type `LeasePaymentAmountBreakdownImports`.
   */
  delete(
    dataAreaId: string,
    importId: string,
    leaseId: string,
    startDate: Moment,
    paymentAmountType: string
  ): DeleteRequestBuilder<LeasePaymentAmountBreakdownImports<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeasePaymentAmountBreakdownImports`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeasePaymentAmountBreakdownImports` by taking the entity as a parameter.
   */
  delete(
    entity: LeasePaymentAmountBreakdownImports<T>
  ): DeleteRequestBuilder<LeasePaymentAmountBreakdownImports<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    importId?: string,
    leaseId?: string,
    startDate?: Moment,
    paymentAmountType?: string
  ): DeleteRequestBuilder<LeasePaymentAmountBreakdownImports<T>, T> {
    return new DeleteRequestBuilder<LeasePaymentAmountBreakdownImports<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeasePaymentAmountBreakdownImports
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ImportId: importId!,
            LeaseId: leaseId!,
            StartDate: startDate!,
            PaymentAmountType: paymentAmountType!
          }
    );
  }
}
