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
import { RetailTransPriceOverridesMeta } from './RetailTransPriceOverridesMeta';

/**
 * Request builder class for operations supported on the {@link RetailTransPriceOverridesMeta} entity.
 */
export class RetailTransPriceOverridesMetaRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransPriceOverridesMeta<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransPriceOverridesMeta` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransPriceOverridesMeta` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransPriceOverridesMeta<T>, T> {
    return new GetAllRequestBuilder<RetailTransPriceOverridesMeta<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransPriceOverridesMeta` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransPriceOverridesMeta`.
   */
  create(
    entity: RetailTransPriceOverridesMeta<T>
  ): CreateRequestBuilder<RetailTransPriceOverridesMeta<T>, T> {
    return new CreateRequestBuilder<RetailTransPriceOverridesMeta<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransPriceOverridesMeta` entity based on its keys.
   * @param employeeId Key property. See {@link RetailTransPriceOverridesMeta.employeeId}.
   * @param yearOffset Key property. See {@link RetailTransPriceOverridesMeta.yearOffset}.
   * @param retailChannelId Key property. See {@link RetailTransPriceOverridesMeta.retailChannelId}.
   * @param legalEntityId Key property. See {@link RetailTransPriceOverridesMeta.legalEntityId}.
   * @param monthGregorianId Key property. See {@link RetailTransPriceOverridesMeta.monthGregorianId}.
   * @param productNumber Key property. See {@link RetailTransPriceOverridesMeta.productNumber}.
   * @param terminalId Key property. See {@link RetailTransPriceOverridesMeta.terminalId}.
   * @returns A request builder for creating requests to retrieve one `RetailTransPriceOverridesMeta` entity based on its keys.
   */
  getByKey(
    employeeId: DeserializedType<T, 'Edm.String'>,
    yearOffset: DeserializedType<T, 'Edm.Int64'>,
    retailChannelId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    monthGregorianId: DeserializedType<T, 'Edm.Int64'>,
    productNumber: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransPriceOverridesMeta<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransPriceOverridesMeta<T>, T>(
      this.entityApi,
      {
        EmployeeId: employeeId,
        YearOffset: yearOffset,
        RetailChannelId: retailChannelId,
        LegalEntityId: legalEntityId,
        MonthGregorianId: monthGregorianId,
        ProductNumber: productNumber,
        TerminalId: terminalId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransPriceOverridesMeta`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransPriceOverridesMeta`.
   */
  update(
    entity: RetailTransPriceOverridesMeta<T>
  ): UpdateRequestBuilder<RetailTransPriceOverridesMeta<T>, T> {
    return new UpdateRequestBuilder<RetailTransPriceOverridesMeta<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransPriceOverridesMeta`.
   * @param employeeId Key property. See {@link RetailTransPriceOverridesMeta.employeeId}.
   * @param yearOffset Key property. See {@link RetailTransPriceOverridesMeta.yearOffset}.
   * @param retailChannelId Key property. See {@link RetailTransPriceOverridesMeta.retailChannelId}.
   * @param legalEntityId Key property. See {@link RetailTransPriceOverridesMeta.legalEntityId}.
   * @param monthGregorianId Key property. See {@link RetailTransPriceOverridesMeta.monthGregorianId}.
   * @param productNumber Key property. See {@link RetailTransPriceOverridesMeta.productNumber}.
   * @param terminalId Key property. See {@link RetailTransPriceOverridesMeta.terminalId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransPriceOverridesMeta`.
   */
  delete(
    employeeId: string,
    yearOffset: BigNumber,
    retailChannelId: string,
    legalEntityId: string,
    monthGregorianId: BigNumber,
    productNumber: string,
    terminalId: string
  ): DeleteRequestBuilder<RetailTransPriceOverridesMeta<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransPriceOverridesMeta`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransPriceOverridesMeta` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransPriceOverridesMeta<T>
  ): DeleteRequestBuilder<RetailTransPriceOverridesMeta<T>, T>;
  delete(
    employeeIdOrEntity: any,
    yearOffset?: BigNumber,
    retailChannelId?: string,
    legalEntityId?: string,
    monthGregorianId?: BigNumber,
    productNumber?: string,
    terminalId?: string
  ): DeleteRequestBuilder<RetailTransPriceOverridesMeta<T>, T> {
    return new DeleteRequestBuilder<RetailTransPriceOverridesMeta<T>, T>(
      this.entityApi,
      employeeIdOrEntity instanceof RetailTransPriceOverridesMeta
        ? employeeIdOrEntity
        : {
            EmployeeId: employeeIdOrEntity!,
            YearOffset: yearOffset!,
            RetailChannelId: retailChannelId!,
            LegalEntityId: legalEntityId!,
            MonthGregorianId: monthGregorianId!,
            ProductNumber: productNumber!,
            TerminalId: terminalId!
          }
    );
  }
}
