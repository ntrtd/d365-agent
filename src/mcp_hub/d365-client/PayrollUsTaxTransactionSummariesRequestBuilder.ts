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
import { PayrollUsTaxTransactionSummaries } from './PayrollUsTaxTransactionSummaries';

/**
 * Request builder class for operations supported on the {@link PayrollUsTaxTransactionSummaries} entity.
 */
export class PayrollUsTaxTransactionSummariesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayrollUsTaxTransactionSummaries<T>, T> {
  /**
   * Returns a request builder for querying all `PayrollUsTaxTransactionSummaries` entities.
   * @returns A request builder for creating requests to retrieve all `PayrollUsTaxTransactionSummaries` entities.
   */
  getAll(): GetAllRequestBuilder<PayrollUsTaxTransactionSummaries<T>, T> {
    return new GetAllRequestBuilder<PayrollUsTaxTransactionSummaries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayrollUsTaxTransactionSummaries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayrollUsTaxTransactionSummaries`.
   */
  create(
    entity: PayrollUsTaxTransactionSummaries<T>
  ): CreateRequestBuilder<PayrollUsTaxTransactionSummaries<T>, T> {
    return new CreateRequestBuilder<PayrollUsTaxTransactionSummaries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayrollUsTaxTransactionSummaries` entity based on its keys.
   * @param dataAreaId Key property. See {@link PayrollUsTaxTransactionSummaries.dataAreaId}.
   * @param worker Key property. See {@link PayrollUsTaxTransactionSummaries.worker}.
   * @param personnelNumber Key property. See {@link PayrollUsTaxTransactionSummaries.personnelNumber}.
   * @param payStatementNumber Key property. See {@link PayrollUsTaxTransactionSummaries.payStatementNumber}.
   * @param transDate Key property. See {@link PayrollUsTaxTransactionSummaries.transDate}.
   * @param taxCode Key property. See {@link PayrollUsTaxTransactionSummaries.taxCode}.
   * @returns A request builder for creating requests to retrieve one `PayrollUsTaxTransactionSummaries` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    worker: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    payStatementNumber: DeserializedType<T, 'Edm.String'>,
    transDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    taxCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayrollUsTaxTransactionSummaries<T>, T> {
    return new GetByKeyRequestBuilder<PayrollUsTaxTransactionSummaries<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Worker: worker,
        PersonnelNumber: personnelNumber,
        PayStatementNumber: payStatementNumber,
        TransDate: transDate,
        TaxCode: taxCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayrollUsTaxTransactionSummaries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayrollUsTaxTransactionSummaries`.
   */
  update(
    entity: PayrollUsTaxTransactionSummaries<T>
  ): UpdateRequestBuilder<PayrollUsTaxTransactionSummaries<T>, T> {
    return new UpdateRequestBuilder<PayrollUsTaxTransactionSummaries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayrollUsTaxTransactionSummaries`.
   * @param dataAreaId Key property. See {@link PayrollUsTaxTransactionSummaries.dataAreaId}.
   * @param worker Key property. See {@link PayrollUsTaxTransactionSummaries.worker}.
   * @param personnelNumber Key property. See {@link PayrollUsTaxTransactionSummaries.personnelNumber}.
   * @param payStatementNumber Key property. See {@link PayrollUsTaxTransactionSummaries.payStatementNumber}.
   * @param transDate Key property. See {@link PayrollUsTaxTransactionSummaries.transDate}.
   * @param taxCode Key property. See {@link PayrollUsTaxTransactionSummaries.taxCode}.
   * @returns A request builder for creating requests that delete an entity of type `PayrollUsTaxTransactionSummaries`.
   */
  delete(
    dataAreaId: string,
    worker: string,
    personnelNumber: string,
    payStatementNumber: string,
    transDate: Moment,
    taxCode: string
  ): DeleteRequestBuilder<PayrollUsTaxTransactionSummaries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayrollUsTaxTransactionSummaries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayrollUsTaxTransactionSummaries` by taking the entity as a parameter.
   */
  delete(
    entity: PayrollUsTaxTransactionSummaries<T>
  ): DeleteRequestBuilder<PayrollUsTaxTransactionSummaries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    worker?: string,
    personnelNumber?: string,
    payStatementNumber?: string,
    transDate?: Moment,
    taxCode?: string
  ): DeleteRequestBuilder<PayrollUsTaxTransactionSummaries<T>, T> {
    return new DeleteRequestBuilder<PayrollUsTaxTransactionSummaries<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PayrollUsTaxTransactionSummaries
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Worker: worker!,
            PersonnelNumber: personnelNumber!,
            PayStatementNumber: payStatementNumber!,
            TransDate: transDate!,
            TaxCode: taxCode!
          }
    );
  }
}
