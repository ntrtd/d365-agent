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
import { RetailTransactionsMeta } from './RetailTransactionsMeta';

/**
 * Request builder class for operations supported on the {@link RetailTransactionsMeta} entity.
 */
export class RetailTransactionsMetaRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionsMeta<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionsMeta` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionsMeta` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionsMeta<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionsMeta<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionsMeta` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionsMeta`.
   */
  create(
    entity: RetailTransactionsMeta<T>
  ): CreateRequestBuilder<RetailTransactionsMeta<T>, T> {
    return new CreateRequestBuilder<RetailTransactionsMeta<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionsMeta` entity based on its keys.
   * @param employeeId Key property. See {@link RetailTransactionsMeta.employeeId}.
   * @param yearOffset Key property. See {@link RetailTransactionsMeta.yearOffset}.
   * @param retailChannelId Key property. See {@link RetailTransactionsMeta.retailChannelId}.
   * @param legalEntityId Key property. See {@link RetailTransactionsMeta.legalEntityId}.
   * @param monthGregorianId Key property. See {@link RetailTransactionsMeta.monthGregorianId}.
   * @param terminalId Key property. See {@link RetailTransactionsMeta.terminalId}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionsMeta` entity based on its keys.
   */
  getByKey(
    employeeId: DeserializedType<T, 'Edm.String'>,
    yearOffset: DeserializedType<T, 'Edm.Int64'>,
    retailChannelId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    monthGregorianId: DeserializedType<T, 'Edm.Int64'>,
    terminalId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionsMeta<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransactionsMeta<T>, T>(
      this.entityApi,
      {
        EmployeeId: employeeId,
        YearOffset: yearOffset,
        RetailChannelId: retailChannelId,
        LegalEntityId: legalEntityId,
        MonthGregorianId: monthGregorianId,
        TerminalId: terminalId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionsMeta`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionsMeta`.
   */
  update(
    entity: RetailTransactionsMeta<T>
  ): UpdateRequestBuilder<RetailTransactionsMeta<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionsMeta<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionsMeta`.
   * @param employeeId Key property. See {@link RetailTransactionsMeta.employeeId}.
   * @param yearOffset Key property. See {@link RetailTransactionsMeta.yearOffset}.
   * @param retailChannelId Key property. See {@link RetailTransactionsMeta.retailChannelId}.
   * @param legalEntityId Key property. See {@link RetailTransactionsMeta.legalEntityId}.
   * @param monthGregorianId Key property. See {@link RetailTransactionsMeta.monthGregorianId}.
   * @param terminalId Key property. See {@link RetailTransactionsMeta.terminalId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionsMeta`.
   */
  delete(
    employeeId: string,
    yearOffset: BigNumber,
    retailChannelId: string,
    legalEntityId: string,
    monthGregorianId: BigNumber,
    terminalId: string
  ): DeleteRequestBuilder<RetailTransactionsMeta<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionsMeta`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionsMeta` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionsMeta<T>
  ): DeleteRequestBuilder<RetailTransactionsMeta<T>, T>;
  delete(
    employeeIdOrEntity: any,
    yearOffset?: BigNumber,
    retailChannelId?: string,
    legalEntityId?: string,
    monthGregorianId?: BigNumber,
    terminalId?: string
  ): DeleteRequestBuilder<RetailTransactionsMeta<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionsMeta<T>, T>(
      this.entityApi,
      employeeIdOrEntity instanceof RetailTransactionsMeta
        ? employeeIdOrEntity
        : {
            EmployeeId: employeeIdOrEntity!,
            YearOffset: yearOffset!,
            RetailChannelId: retailChannelId!,
            LegalEntityId: legalEntityId!,
            MonthGregorianId: monthGregorianId!,
            TerminalId: terminalId!
          }
    );
  }
}
