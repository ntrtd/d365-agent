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
import { RetailTransPaymentMeta } from './RetailTransPaymentMeta';

/**
 * Request builder class for operations supported on the {@link RetailTransPaymentMeta} entity.
 */
export class RetailTransPaymentMetaRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransPaymentMeta<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransPaymentMeta` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransPaymentMeta` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransPaymentMeta<T>, T> {
    return new GetAllRequestBuilder<RetailTransPaymentMeta<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransPaymentMeta` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransPaymentMeta`.
   */
  create(
    entity: RetailTransPaymentMeta<T>
  ): CreateRequestBuilder<RetailTransPaymentMeta<T>, T> {
    return new CreateRequestBuilder<RetailTransPaymentMeta<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransPaymentMeta` entity based on its keys.
   * @param yearOffset Key property. See {@link RetailTransPaymentMeta.yearOffset}.
   * @param retailChannelId Key property. See {@link RetailTransPaymentMeta.retailChannelId}.
   * @param legalEntityId Key property. See {@link RetailTransPaymentMeta.legalEntityId}.
   * @param monthGregorianId Key property. See {@link RetailTransPaymentMeta.monthGregorianId}.
   * @param tenderTypeId Key property. See {@link RetailTransPaymentMeta.tenderTypeId}.
   * @param terminalId Key property. See {@link RetailTransPaymentMeta.terminalId}.
   * @param employeeId Key property. See {@link RetailTransPaymentMeta.employeeId}.
   * @returns A request builder for creating requests to retrieve one `RetailTransPaymentMeta` entity based on its keys.
   */
  getByKey(
    yearOffset: DeserializedType<T, 'Edm.Int64'>,
    retailChannelId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    monthGregorianId: DeserializedType<T, 'Edm.Int64'>,
    tenderTypeId: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    employeeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransPaymentMeta<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransPaymentMeta<T>, T>(
      this.entityApi,
      {
        YearOffset: yearOffset,
        RetailChannelId: retailChannelId,
        LegalEntityId: legalEntityId,
        MonthGregorianId: monthGregorianId,
        TenderTypeId: tenderTypeId,
        TerminalId: terminalId,
        EmployeeId: employeeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransPaymentMeta`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransPaymentMeta`.
   */
  update(
    entity: RetailTransPaymentMeta<T>
  ): UpdateRequestBuilder<RetailTransPaymentMeta<T>, T> {
    return new UpdateRequestBuilder<RetailTransPaymentMeta<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransPaymentMeta`.
   * @param yearOffset Key property. See {@link RetailTransPaymentMeta.yearOffset}.
   * @param retailChannelId Key property. See {@link RetailTransPaymentMeta.retailChannelId}.
   * @param legalEntityId Key property. See {@link RetailTransPaymentMeta.legalEntityId}.
   * @param monthGregorianId Key property. See {@link RetailTransPaymentMeta.monthGregorianId}.
   * @param tenderTypeId Key property. See {@link RetailTransPaymentMeta.tenderTypeId}.
   * @param terminalId Key property. See {@link RetailTransPaymentMeta.terminalId}.
   * @param employeeId Key property. See {@link RetailTransPaymentMeta.employeeId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransPaymentMeta`.
   */
  delete(
    yearOffset: BigNumber,
    retailChannelId: string,
    legalEntityId: string,
    monthGregorianId: BigNumber,
    tenderTypeId: string,
    terminalId: string,
    employeeId: string
  ): DeleteRequestBuilder<RetailTransPaymentMeta<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransPaymentMeta`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransPaymentMeta` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransPaymentMeta<T>
  ): DeleteRequestBuilder<RetailTransPaymentMeta<T>, T>;
  delete(
    yearOffsetOrEntity: any,
    retailChannelId?: string,
    legalEntityId?: string,
    monthGregorianId?: BigNumber,
    tenderTypeId?: string,
    terminalId?: string,
    employeeId?: string
  ): DeleteRequestBuilder<RetailTransPaymentMeta<T>, T> {
    return new DeleteRequestBuilder<RetailTransPaymentMeta<T>, T>(
      this.entityApi,
      yearOffsetOrEntity instanceof RetailTransPaymentMeta
        ? yearOffsetOrEntity
        : {
            YearOffset: yearOffsetOrEntity!,
            RetailChannelId: retailChannelId!,
            LegalEntityId: legalEntityId!,
            MonthGregorianId: monthGregorianId!,
            TenderTypeId: tenderTypeId!,
            TerminalId: terminalId!,
            EmployeeId: employeeId!
          }
    );
  }
}
