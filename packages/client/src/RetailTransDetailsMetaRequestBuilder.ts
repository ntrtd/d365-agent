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
import { RetailTransDetailsMeta } from './RetailTransDetailsMeta';

/**
 * Request builder class for operations supported on the {@link RetailTransDetailsMeta} entity.
 */
export class RetailTransDetailsMetaRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransDetailsMeta<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransDetailsMeta` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransDetailsMeta` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransDetailsMeta<T>, T> {
    return new GetAllRequestBuilder<RetailTransDetailsMeta<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransDetailsMeta` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransDetailsMeta`.
   */
  create(
    entity: RetailTransDetailsMeta<T>
  ): CreateRequestBuilder<RetailTransDetailsMeta<T>, T> {
    return new CreateRequestBuilder<RetailTransDetailsMeta<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransDetailsMeta` entity based on its keys.
   * @param yearOffset Key property. See {@link RetailTransDetailsMeta.yearOffset}.
   * @param retailChannelId Key property. See {@link RetailTransDetailsMeta.retailChannelId}.
   * @param legalEntityId Key property. See {@link RetailTransDetailsMeta.legalEntityId}.
   * @param monthGregorianId Key property. See {@link RetailTransDetailsMeta.monthGregorianId}.
   * @param productNumber Key property. See {@link RetailTransDetailsMeta.productNumber}.
   * @param terminalId Key property. See {@link RetailTransDetailsMeta.terminalId}.
   * @param employeeId Key property. See {@link RetailTransDetailsMeta.employeeId}.
   * @returns A request builder for creating requests to retrieve one `RetailTransDetailsMeta` entity based on its keys.
   */
  getByKey(
    yearOffset: DeserializedType<T, 'Edm.Int64'>,
    retailChannelId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    monthGregorianId: DeserializedType<T, 'Edm.Int64'>,
    productNumber: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    employeeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransDetailsMeta<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransDetailsMeta<T>, T>(
      this.entityApi,
      {
        YearOffset: yearOffset,
        RetailChannelId: retailChannelId,
        LegalEntityId: legalEntityId,
        MonthGregorianId: monthGregorianId,
        ProductNumber: productNumber,
        TerminalId: terminalId,
        EmployeeId: employeeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransDetailsMeta`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransDetailsMeta`.
   */
  update(
    entity: RetailTransDetailsMeta<T>
  ): UpdateRequestBuilder<RetailTransDetailsMeta<T>, T> {
    return new UpdateRequestBuilder<RetailTransDetailsMeta<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransDetailsMeta`.
   * @param yearOffset Key property. See {@link RetailTransDetailsMeta.yearOffset}.
   * @param retailChannelId Key property. See {@link RetailTransDetailsMeta.retailChannelId}.
   * @param legalEntityId Key property. See {@link RetailTransDetailsMeta.legalEntityId}.
   * @param monthGregorianId Key property. See {@link RetailTransDetailsMeta.monthGregorianId}.
   * @param productNumber Key property. See {@link RetailTransDetailsMeta.productNumber}.
   * @param terminalId Key property. See {@link RetailTransDetailsMeta.terminalId}.
   * @param employeeId Key property. See {@link RetailTransDetailsMeta.employeeId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransDetailsMeta`.
   */
  delete(
    yearOffset: BigNumber,
    retailChannelId: string,
    legalEntityId: string,
    monthGregorianId: BigNumber,
    productNumber: string,
    terminalId: string,
    employeeId: string
  ): DeleteRequestBuilder<RetailTransDetailsMeta<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransDetailsMeta`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransDetailsMeta` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransDetailsMeta<T>
  ): DeleteRequestBuilder<RetailTransDetailsMeta<T>, T>;
  delete(
    yearOffsetOrEntity: any,
    retailChannelId?: string,
    legalEntityId?: string,
    monthGregorianId?: BigNumber,
    productNumber?: string,
    terminalId?: string,
    employeeId?: string
  ): DeleteRequestBuilder<RetailTransDetailsMeta<T>, T> {
    return new DeleteRequestBuilder<RetailTransDetailsMeta<T>, T>(
      this.entityApi,
      yearOffsetOrEntity instanceof RetailTransDetailsMeta
        ? yearOffsetOrEntity
        : {
            YearOffset: yearOffsetOrEntity!,
            RetailChannelId: retailChannelId!,
            LegalEntityId: legalEntityId!,
            MonthGregorianId: monthGregorianId!,
            ProductNumber: productNumber!,
            TerminalId: terminalId!,
            EmployeeId: employeeId!
          }
    );
  }
}
