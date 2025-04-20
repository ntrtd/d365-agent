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
import { BusinessDocumentInvoicedPackingSlipLinesV3 } from './BusinessDocumentInvoicedPackingSlipLinesV3';

/**
 * Request builder class for operations supported on the {@link BusinessDocumentInvoicedPackingSlipLinesV3} entity.
 */
export class BusinessDocumentInvoicedPackingSlipLinesV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessDocumentInvoicedPackingSlipLinesV3<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessDocumentInvoicedPackingSlipLinesV3` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessDocumentInvoicedPackingSlipLinesV3` entities.
   */
  getAll(): GetAllRequestBuilder<
    BusinessDocumentInvoicedPackingSlipLinesV3<T>,
    T
  > {
    return new GetAllRequestBuilder<
      BusinessDocumentInvoicedPackingSlipLinesV3<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BusinessDocumentInvoicedPackingSlipLinesV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessDocumentInvoicedPackingSlipLinesV3`.
   */
  create(
    entity: BusinessDocumentInvoicedPackingSlipLinesV3<T>
  ): CreateRequestBuilder<BusinessDocumentInvoicedPackingSlipLinesV3<T>, T> {
    return new CreateRequestBuilder<
      BusinessDocumentInvoicedPackingSlipLinesV3<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BusinessDocumentInvoicedPackingSlipLinesV3` entity based on its keys.
   * @param dataAreaId Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV3.dataAreaId}.
   * @param salesId Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV3.salesId}.
   * @param packingSlipId Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV3.packingSlipId}.
   * @param deliveryDate Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV3.deliveryDate}.
   * @param lineNum Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV3.lineNum}.
   * @param origSalesId Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV3.origSalesId}.
   * @param invoiceId Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV3.invoiceId}.
   * @returns A request builder for creating requests to retrieve one `BusinessDocumentInvoicedPackingSlipLinesV3` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesId: DeserializedType<T, 'Edm.String'>,
    packingSlipId: DeserializedType<T, 'Edm.String'>,
    deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>,
    origSalesId: DeserializedType<T, 'Edm.String'>,
    invoiceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BusinessDocumentInvoicedPackingSlipLinesV3<T>, T> {
    return new GetByKeyRequestBuilder<
      BusinessDocumentInvoicedPackingSlipLinesV3<T>,
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
   * Returns a request builder for updating an entity of type `BusinessDocumentInvoicedPackingSlipLinesV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessDocumentInvoicedPackingSlipLinesV3`.
   */
  update(
    entity: BusinessDocumentInvoicedPackingSlipLinesV3<T>
  ): UpdateRequestBuilder<BusinessDocumentInvoicedPackingSlipLinesV3<T>, T> {
    return new UpdateRequestBuilder<
      BusinessDocumentInvoicedPackingSlipLinesV3<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentInvoicedPackingSlipLinesV3`.
   * @param dataAreaId Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV3.dataAreaId}.
   * @param salesId Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV3.salesId}.
   * @param packingSlipId Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV3.packingSlipId}.
   * @param deliveryDate Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV3.deliveryDate}.
   * @param lineNum Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV3.lineNum}.
   * @param origSalesId Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV3.origSalesId}.
   * @param invoiceId Key property. See {@link BusinessDocumentInvoicedPackingSlipLinesV3.invoiceId}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentInvoicedPackingSlipLinesV3`.
   */
  delete(
    dataAreaId: string,
    salesId: string,
    packingSlipId: string,
    deliveryDate: Moment,
    lineNum: BigNumber,
    origSalesId: string,
    invoiceId: string
  ): DeleteRequestBuilder<BusinessDocumentInvoicedPackingSlipLinesV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentInvoicedPackingSlipLinesV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentInvoicedPackingSlipLinesV3` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessDocumentInvoicedPackingSlipLinesV3<T>
  ): DeleteRequestBuilder<BusinessDocumentInvoicedPackingSlipLinesV3<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesId?: string,
    packingSlipId?: string,
    deliveryDate?: Moment,
    lineNum?: BigNumber,
    origSalesId?: string,
    invoiceId?: string
  ): DeleteRequestBuilder<BusinessDocumentInvoicedPackingSlipLinesV3<T>, T> {
    return new DeleteRequestBuilder<
      BusinessDocumentInvoicedPackingSlipLinesV3<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof BusinessDocumentInvoicedPackingSlipLinesV3
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
