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
import { RetailTransInvoicedMeta } from './RetailTransInvoicedMeta';

/**
 * Request builder class for operations supported on the {@link RetailTransInvoicedMeta} entity.
 */
export class RetailTransInvoicedMetaRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransInvoicedMeta<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransInvoicedMeta` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransInvoicedMeta` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransInvoicedMeta<T>, T> {
    return new GetAllRequestBuilder<RetailTransInvoicedMeta<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransInvoicedMeta` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransInvoicedMeta`.
   */
  create(
    entity: RetailTransInvoicedMeta<T>
  ): CreateRequestBuilder<RetailTransInvoicedMeta<T>, T> {
    return new CreateRequestBuilder<RetailTransInvoicedMeta<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransInvoicedMeta` entity based on its keys.
   * @param yearOffset Key property. See {@link RetailTransInvoicedMeta.yearOffset}.
   * @param employeeId Key property. See {@link RetailTransInvoicedMeta.employeeId}.
   * @param productNumber Key property. See {@link RetailTransInvoicedMeta.productNumber}.
   * @param retailChannelId Key property. See {@link RetailTransInvoicedMeta.retailChannelId}.
   * @param terminalId Key property. See {@link RetailTransInvoicedMeta.terminalId}.
   * @param monthGregorianId Key property. See {@link RetailTransInvoicedMeta.monthGregorianId}.
   * @param legalEntityId Key property. See {@link RetailTransInvoicedMeta.legalEntityId}.
   * @returns A request builder for creating requests to retrieve one `RetailTransInvoicedMeta` entity based on its keys.
   */
  getByKey(
    yearOffset: DeserializedType<T, 'Edm.Int64'>,
    employeeId: DeserializedType<T, 'Edm.Int64'>,
    productNumber: DeserializedType<T, 'Edm.String'>,
    retailChannelId: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    monthGregorianId: DeserializedType<T, 'Edm.Int64'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransInvoicedMeta<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransInvoicedMeta<T>, T>(
      this.entityApi,
      {
        YearOffset: yearOffset,
        EmployeeId: employeeId,
        ProductNumber: productNumber,
        RetailChannelId: retailChannelId,
        TerminalId: terminalId,
        MonthGregorianId: monthGregorianId,
        LegalEntityId: legalEntityId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransInvoicedMeta`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransInvoicedMeta`.
   */
  update(
    entity: RetailTransInvoicedMeta<T>
  ): UpdateRequestBuilder<RetailTransInvoicedMeta<T>, T> {
    return new UpdateRequestBuilder<RetailTransInvoicedMeta<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransInvoicedMeta`.
   * @param yearOffset Key property. See {@link RetailTransInvoicedMeta.yearOffset}.
   * @param employeeId Key property. See {@link RetailTransInvoicedMeta.employeeId}.
   * @param productNumber Key property. See {@link RetailTransInvoicedMeta.productNumber}.
   * @param retailChannelId Key property. See {@link RetailTransInvoicedMeta.retailChannelId}.
   * @param terminalId Key property. See {@link RetailTransInvoicedMeta.terminalId}.
   * @param monthGregorianId Key property. See {@link RetailTransInvoicedMeta.monthGregorianId}.
   * @param legalEntityId Key property. See {@link RetailTransInvoicedMeta.legalEntityId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransInvoicedMeta`.
   */
  delete(
    yearOffset: BigNumber,
    employeeId: BigNumber,
    productNumber: string,
    retailChannelId: string,
    terminalId: string,
    monthGregorianId: BigNumber,
    legalEntityId: string
  ): DeleteRequestBuilder<RetailTransInvoicedMeta<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransInvoicedMeta`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransInvoicedMeta` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransInvoicedMeta<T>
  ): DeleteRequestBuilder<RetailTransInvoicedMeta<T>, T>;
  delete(
    yearOffsetOrEntity: any,
    employeeId?: BigNumber,
    productNumber?: string,
    retailChannelId?: string,
    terminalId?: string,
    monthGregorianId?: BigNumber,
    legalEntityId?: string
  ): DeleteRequestBuilder<RetailTransInvoicedMeta<T>, T> {
    return new DeleteRequestBuilder<RetailTransInvoicedMeta<T>, T>(
      this.entityApi,
      yearOffsetOrEntity instanceof RetailTransInvoicedMeta
        ? yearOffsetOrEntity
        : {
            YearOffset: yearOffsetOrEntity!,
            EmployeeId: employeeId!,
            ProductNumber: productNumber!,
            RetailChannelId: retailChannelId!,
            TerminalId: terminalId!,
            MonthGregorianId: monthGregorianId!,
            LegalEntityId: legalEntityId!
          }
    );
  }
}
