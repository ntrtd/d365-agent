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
import { RetailTransDiscountedMeta } from './RetailTransDiscountedMeta';

/**
 * Request builder class for operations supported on the {@link RetailTransDiscountedMeta} entity.
 */
export class RetailTransDiscountedMetaRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransDiscountedMeta<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransDiscountedMeta` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransDiscountedMeta` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransDiscountedMeta<T>, T> {
    return new GetAllRequestBuilder<RetailTransDiscountedMeta<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransDiscountedMeta` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransDiscountedMeta`.
   */
  create(
    entity: RetailTransDiscountedMeta<T>
  ): CreateRequestBuilder<RetailTransDiscountedMeta<T>, T> {
    return new CreateRequestBuilder<RetailTransDiscountedMeta<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransDiscountedMeta` entity based on its keys.
   * @param discountId Key property. See {@link RetailTransDiscountedMeta.discountId}.
   * @param yearOffset Key property. See {@link RetailTransDiscountedMeta.yearOffset}.
   * @param retailChannelId Key property. See {@link RetailTransDiscountedMeta.retailChannelId}.
   * @param legalEntityId Key property. See {@link RetailTransDiscountedMeta.legalEntityId}.
   * @param monthGregorianId Key property. See {@link RetailTransDiscountedMeta.monthGregorianId}.
   * @param productNumber Key property. See {@link RetailTransDiscountedMeta.productNumber}.
   * @param terminalId Key property. See {@link RetailTransDiscountedMeta.terminalId}.
   * @param employeeId Key property. See {@link RetailTransDiscountedMeta.employeeId}.
   * @param discountRecId Key property. See {@link RetailTransDiscountedMeta.discountRecId}.
   * @returns A request builder for creating requests to retrieve one `RetailTransDiscountedMeta` entity based on its keys.
   */
  getByKey(
    discountId: DeserializedType<T, 'Edm.String'>,
    yearOffset: DeserializedType<T, 'Edm.Int64'>,
    retailChannelId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    monthGregorianId: DeserializedType<T, 'Edm.Int64'>,
    productNumber: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    employeeId: DeserializedType<T, 'Edm.String'>,
    discountRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<RetailTransDiscountedMeta<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransDiscountedMeta<T>, T>(
      this.entityApi,
      {
        DiscountId: discountId,
        YearOffset: yearOffset,
        RetailChannelId: retailChannelId,
        LegalEntityId: legalEntityId,
        MonthGregorianId: monthGregorianId,
        ProductNumber: productNumber,
        TerminalId: terminalId,
        EmployeeId: employeeId,
        DiscountRecId: discountRecId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransDiscountedMeta`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransDiscountedMeta`.
   */
  update(
    entity: RetailTransDiscountedMeta<T>
  ): UpdateRequestBuilder<RetailTransDiscountedMeta<T>, T> {
    return new UpdateRequestBuilder<RetailTransDiscountedMeta<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransDiscountedMeta`.
   * @param discountId Key property. See {@link RetailTransDiscountedMeta.discountId}.
   * @param yearOffset Key property. See {@link RetailTransDiscountedMeta.yearOffset}.
   * @param retailChannelId Key property. See {@link RetailTransDiscountedMeta.retailChannelId}.
   * @param legalEntityId Key property. See {@link RetailTransDiscountedMeta.legalEntityId}.
   * @param monthGregorianId Key property. See {@link RetailTransDiscountedMeta.monthGregorianId}.
   * @param productNumber Key property. See {@link RetailTransDiscountedMeta.productNumber}.
   * @param terminalId Key property. See {@link RetailTransDiscountedMeta.terminalId}.
   * @param employeeId Key property. See {@link RetailTransDiscountedMeta.employeeId}.
   * @param discountRecId Key property. See {@link RetailTransDiscountedMeta.discountRecId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransDiscountedMeta`.
   */
  delete(
    discountId: string,
    yearOffset: BigNumber,
    retailChannelId: string,
    legalEntityId: string,
    monthGregorianId: BigNumber,
    productNumber: string,
    terminalId: string,
    employeeId: string,
    discountRecId: BigNumber
  ): DeleteRequestBuilder<RetailTransDiscountedMeta<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransDiscountedMeta`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransDiscountedMeta` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransDiscountedMeta<T>
  ): DeleteRequestBuilder<RetailTransDiscountedMeta<T>, T>;
  delete(
    discountIdOrEntity: any,
    yearOffset?: BigNumber,
    retailChannelId?: string,
    legalEntityId?: string,
    monthGregorianId?: BigNumber,
    productNumber?: string,
    terminalId?: string,
    employeeId?: string,
    discountRecId?: BigNumber
  ): DeleteRequestBuilder<RetailTransDiscountedMeta<T>, T> {
    return new DeleteRequestBuilder<RetailTransDiscountedMeta<T>, T>(
      this.entityApi,
      discountIdOrEntity instanceof RetailTransDiscountedMeta
        ? discountIdOrEntity
        : {
            DiscountId: discountIdOrEntity!,
            YearOffset: yearOffset!,
            RetailChannelId: retailChannelId!,
            LegalEntityId: legalEntityId!,
            MonthGregorianId: monthGregorianId!,
            ProductNumber: productNumber!,
            TerminalId: terminalId!,
            EmployeeId: employeeId!,
            DiscountRecId: discountRecId!
          }
    );
  }
}
