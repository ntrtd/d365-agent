/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { BusinessDocumentStockedPackingSlipLinesV3 } from './BusinessDocumentStockedPackingSlipLinesV3';

/**
 * Request builder class for operations supported on the {@link BusinessDocumentStockedPackingSlipLinesV3} entity.
 */
export class BusinessDocumentStockedPackingSlipLinesV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessDocumentStockedPackingSlipLinesV3<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessDocumentStockedPackingSlipLinesV3` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessDocumentStockedPackingSlipLinesV3` entities.
   */
  getAll(): GetAllRequestBuilder<
    BusinessDocumentStockedPackingSlipLinesV3<T>,
    T
  > {
    return new GetAllRequestBuilder<
      BusinessDocumentStockedPackingSlipLinesV3<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BusinessDocumentStockedPackingSlipLinesV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessDocumentStockedPackingSlipLinesV3`.
   */
  create(
    entity: BusinessDocumentStockedPackingSlipLinesV3<T>
  ): CreateRequestBuilder<BusinessDocumentStockedPackingSlipLinesV3<T>, T> {
    return new CreateRequestBuilder<
      BusinessDocumentStockedPackingSlipLinesV3<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BusinessDocumentStockedPackingSlipLinesV3` entity based on its keys.
   * @param dataAreaId Key property. See {@link BusinessDocumentStockedPackingSlipLinesV3.dataAreaId}.
   * @param salesId Key property. See {@link BusinessDocumentStockedPackingSlipLinesV3.salesId}.
   * @param packingSlipId Key property. See {@link BusinessDocumentStockedPackingSlipLinesV3.packingSlipId}.
   * @param deliveryDate Key property. See {@link BusinessDocumentStockedPackingSlipLinesV3.deliveryDate}.
   * @param lineNum Key property. See {@link BusinessDocumentStockedPackingSlipLinesV3.lineNum}.
   * @param origSalesId Key property. See {@link BusinessDocumentStockedPackingSlipLinesV3.origSalesId}.
   * @param invoiceId Key property. See {@link BusinessDocumentStockedPackingSlipLinesV3.invoiceId}.
   * @returns A request builder for creating requests to retrieve one `BusinessDocumentStockedPackingSlipLinesV3` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesId: DeserializedType<T, 'Edm.String'>,
    packingSlipId: DeserializedType<T, 'Edm.String'>,
    deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>,
    origSalesId: DeserializedType<T, 'Edm.String'>,
    invoiceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BusinessDocumentStockedPackingSlipLinesV3<T>, T> {
    return new GetByKeyRequestBuilder<
      BusinessDocumentStockedPackingSlipLinesV3<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SalesId: salesId,
      PackingSlipId: packingSlipId,
      DeliveryDate: deliveryDate,
      LineNum: lineNum,
      OrigSalesId: origSalesId,
      InvoiceId: invoiceId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessDocumentStockedPackingSlipLinesV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessDocumentStockedPackingSlipLinesV3`.
   */
  update(
    entity: BusinessDocumentStockedPackingSlipLinesV3<T>
  ): UpdateRequestBuilder<BusinessDocumentStockedPackingSlipLinesV3<T>, T> {
    return new UpdateRequestBuilder<
      BusinessDocumentStockedPackingSlipLinesV3<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentStockedPackingSlipLinesV3`.
   * @param dataAreaId Key property. See {@link BusinessDocumentStockedPackingSlipLinesV3.dataAreaId}.
   * @param salesId Key property. See {@link BusinessDocumentStockedPackingSlipLinesV3.salesId}.
   * @param packingSlipId Key property. See {@link BusinessDocumentStockedPackingSlipLinesV3.packingSlipId}.
   * @param deliveryDate Key property. See {@link BusinessDocumentStockedPackingSlipLinesV3.deliveryDate}.
   * @param lineNum Key property. See {@link BusinessDocumentStockedPackingSlipLinesV3.lineNum}.
   * @param origSalesId Key property. See {@link BusinessDocumentStockedPackingSlipLinesV3.origSalesId}.
   * @param invoiceId Key property. See {@link BusinessDocumentStockedPackingSlipLinesV3.invoiceId}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentStockedPackingSlipLinesV3`.
   */
  delete(
    dataAreaId: string,
    salesId: string,
    packingSlipId: string,
    deliveryDate: Moment,
    lineNum: BigNumber,
    origSalesId: string,
    invoiceId: string
  ): DeleteRequestBuilder<BusinessDocumentStockedPackingSlipLinesV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentStockedPackingSlipLinesV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentStockedPackingSlipLinesV3` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessDocumentStockedPackingSlipLinesV3<T>
  ): DeleteRequestBuilder<BusinessDocumentStockedPackingSlipLinesV3<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesId?: string,
    packingSlipId?: string,
    deliveryDate?: Moment,
    lineNum?: BigNumber,
    origSalesId?: string,
    invoiceId?: string
  ): DeleteRequestBuilder<BusinessDocumentStockedPackingSlipLinesV3<T>, T> {
    return new DeleteRequestBuilder<
      BusinessDocumentStockedPackingSlipLinesV3<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof BusinessDocumentStockedPackingSlipLinesV3
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesId: salesId!,
            PackingSlipId: packingSlipId!,
            DeliveryDate: deliveryDate!,
            LineNum: lineNum!,
            OrigSalesId: origSalesId!,
            InvoiceId: invoiceId!
          }
    );
  }
}
