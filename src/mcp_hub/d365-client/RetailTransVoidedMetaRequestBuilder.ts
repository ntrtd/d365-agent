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
import { RetailTransVoidedMeta } from './RetailTransVoidedMeta';

/**
 * Request builder class for operations supported on the {@link RetailTransVoidedMeta} entity.
 */
export class RetailTransVoidedMetaRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransVoidedMeta<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransVoidedMeta` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransVoidedMeta` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransVoidedMeta<T>, T> {
    return new GetAllRequestBuilder<RetailTransVoidedMeta<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransVoidedMeta` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransVoidedMeta`.
   */
  create(
    entity: RetailTransVoidedMeta<T>
  ): CreateRequestBuilder<RetailTransVoidedMeta<T>, T> {
    return new CreateRequestBuilder<RetailTransVoidedMeta<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransVoidedMeta` entity based on its keys.
   * @param yearOffset Key property. See {@link RetailTransVoidedMeta.yearOffset}.
   * @param retailChannelId Key property. See {@link RetailTransVoidedMeta.retailChannelId}.
   * @param legalEntityId Key property. See {@link RetailTransVoidedMeta.legalEntityId}.
   * @param monthGregorianId Key property. See {@link RetailTransVoidedMeta.monthGregorianId}.
   * @param productNumber Key property. See {@link RetailTransVoidedMeta.productNumber}.
   * @param terminalId Key property. See {@link RetailTransVoidedMeta.terminalId}.
   * @param employeeId Key property. See {@link RetailTransVoidedMeta.employeeId}.
   * @returns A request builder for creating requests to retrieve one `RetailTransVoidedMeta` entity based on its keys.
   */
  getByKey(
    yearOffset: DeserializedType<T, 'Edm.Int64'>,
    retailChannelId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    monthGregorianId: DeserializedType<T, 'Edm.Int64'>,
    productNumber: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    employeeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransVoidedMeta<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransVoidedMeta<T>, T>(
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
   * Returns a request builder for updating an entity of type `RetailTransVoidedMeta`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransVoidedMeta`.
   */
  update(
    entity: RetailTransVoidedMeta<T>
  ): UpdateRequestBuilder<RetailTransVoidedMeta<T>, T> {
    return new UpdateRequestBuilder<RetailTransVoidedMeta<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransVoidedMeta`.
   * @param yearOffset Key property. See {@link RetailTransVoidedMeta.yearOffset}.
   * @param retailChannelId Key property. See {@link RetailTransVoidedMeta.retailChannelId}.
   * @param legalEntityId Key property. See {@link RetailTransVoidedMeta.legalEntityId}.
   * @param monthGregorianId Key property. See {@link RetailTransVoidedMeta.monthGregorianId}.
   * @param productNumber Key property. See {@link RetailTransVoidedMeta.productNumber}.
   * @param terminalId Key property. See {@link RetailTransVoidedMeta.terminalId}.
   * @param employeeId Key property. See {@link RetailTransVoidedMeta.employeeId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransVoidedMeta`.
   */
  delete(
    yearOffset: BigNumber,
    retailChannelId: string,
    legalEntityId: string,
    monthGregorianId: BigNumber,
    productNumber: string,
    terminalId: string,
    employeeId: string
  ): DeleteRequestBuilder<RetailTransVoidedMeta<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransVoidedMeta`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransVoidedMeta` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransVoidedMeta<T>
  ): DeleteRequestBuilder<RetailTransVoidedMeta<T>, T>;
  delete(
    yearOffsetOrEntity: any,
    retailChannelId?: string,
    legalEntityId?: string,
    monthGregorianId?: BigNumber,
    productNumber?: string,
    terminalId?: string,
    employeeId?: string
  ): DeleteRequestBuilder<RetailTransVoidedMeta<T>, T> {
    return new DeleteRequestBuilder<RetailTransVoidedMeta<T>, T>(
      this.entityApi,
      yearOffsetOrEntity instanceof RetailTransVoidedMeta
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
