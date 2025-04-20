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
import { BusinessDocumentNonStockedPackingSlipLinesV3 } from './BusinessDocumentNonStockedPackingSlipLinesV3';

/**
 * Request builder class for operations supported on the {@link BusinessDocumentNonStockedPackingSlipLinesV3} entity.
 */
export class BusinessDocumentNonStockedPackingSlipLinesV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessDocumentNonStockedPackingSlipLinesV3<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessDocumentNonStockedPackingSlipLinesV3` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessDocumentNonStockedPackingSlipLinesV3` entities.
   */
  getAll(): GetAllRequestBuilder<
    BusinessDocumentNonStockedPackingSlipLinesV3<T>,
    T
  > {
    return new GetAllRequestBuilder<
      BusinessDocumentNonStockedPackingSlipLinesV3<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BusinessDocumentNonStockedPackingSlipLinesV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessDocumentNonStockedPackingSlipLinesV3`.
   */
  create(
    entity: BusinessDocumentNonStockedPackingSlipLinesV3<T>
  ): CreateRequestBuilder<BusinessDocumentNonStockedPackingSlipLinesV3<T>, T> {
    return new CreateRequestBuilder<
      BusinessDocumentNonStockedPackingSlipLinesV3<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BusinessDocumentNonStockedPackingSlipLinesV3` entity based on its keys.
   * @param dataAreaId Key property. See {@link BusinessDocumentNonStockedPackingSlipLinesV3.dataAreaId}.
   * @param salesId Key property. See {@link BusinessDocumentNonStockedPackingSlipLinesV3.salesId}.
   * @param packingSlipId Key property. See {@link BusinessDocumentNonStockedPackingSlipLinesV3.packingSlipId}.
   * @param deliveryDate Key property. See {@link BusinessDocumentNonStockedPackingSlipLinesV3.deliveryDate}.
   * @param lineNum Key property. See {@link BusinessDocumentNonStockedPackingSlipLinesV3.lineNum}.
   * @param origSalesId Key property. See {@link BusinessDocumentNonStockedPackingSlipLinesV3.origSalesId}.
   * @param invoiceId Key property. See {@link BusinessDocumentNonStockedPackingSlipLinesV3.invoiceId}.
   * @returns A request builder for creating requests to retrieve one `BusinessDocumentNonStockedPackingSlipLinesV3` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesId: DeserializedType<T, 'Edm.String'>,
    packingSlipId: DeserializedType<T, 'Edm.String'>,
    deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>,
    origSalesId: DeserializedType<T, 'Edm.String'>,
    invoiceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    BusinessDocumentNonStockedPackingSlipLinesV3<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      BusinessDocumentNonStockedPackingSlipLinesV3<T>,
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
   * Returns a request builder for updating an entity of type `BusinessDocumentNonStockedPackingSlipLinesV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessDocumentNonStockedPackingSlipLinesV3`.
   */
  update(
    entity: BusinessDocumentNonStockedPackingSlipLinesV3<T>
  ): UpdateRequestBuilder<BusinessDocumentNonStockedPackingSlipLinesV3<T>, T> {
    return new UpdateRequestBuilder<
      BusinessDocumentNonStockedPackingSlipLinesV3<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentNonStockedPackingSlipLinesV3`.
   * @param dataAreaId Key property. See {@link BusinessDocumentNonStockedPackingSlipLinesV3.dataAreaId}.
   * @param salesId Key property. See {@link BusinessDocumentNonStockedPackingSlipLinesV3.salesId}.
   * @param packingSlipId Key property. See {@link BusinessDocumentNonStockedPackingSlipLinesV3.packingSlipId}.
   * @param deliveryDate Key property. See {@link BusinessDocumentNonStockedPackingSlipLinesV3.deliveryDate}.
   * @param lineNum Key property. See {@link BusinessDocumentNonStockedPackingSlipLinesV3.lineNum}.
   * @param origSalesId Key property. See {@link BusinessDocumentNonStockedPackingSlipLinesV3.origSalesId}.
   * @param invoiceId Key property. See {@link BusinessDocumentNonStockedPackingSlipLinesV3.invoiceId}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentNonStockedPackingSlipLinesV3`.
   */
  delete(
    dataAreaId: string,
    salesId: string,
    packingSlipId: string,
    deliveryDate: Moment,
    lineNum: BigNumber,
    origSalesId: string,
    invoiceId: string
  ): DeleteRequestBuilder<BusinessDocumentNonStockedPackingSlipLinesV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentNonStockedPackingSlipLinesV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentNonStockedPackingSlipLinesV3` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessDocumentNonStockedPackingSlipLinesV3<T>
  ): DeleteRequestBuilder<BusinessDocumentNonStockedPackingSlipLinesV3<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesId?: string,
    packingSlipId?: string,
    deliveryDate?: Moment,
    lineNum?: BigNumber,
    origSalesId?: string,
    invoiceId?: string
  ): DeleteRequestBuilder<BusinessDocumentNonStockedPackingSlipLinesV3<T>, T> {
    return new DeleteRequestBuilder<
      BusinessDocumentNonStockedPackingSlipLinesV3<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof BusinessDocumentNonStockedPackingSlipLinesV3
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
