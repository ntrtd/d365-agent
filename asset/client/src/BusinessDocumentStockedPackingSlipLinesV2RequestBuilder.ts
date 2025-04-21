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
import { BusinessDocumentStockedPackingSlipLinesV2 } from './BusinessDocumentStockedPackingSlipLinesV2';

/**
 * Request builder class for operations supported on the {@link BusinessDocumentStockedPackingSlipLinesV2} entity.
 */
export class BusinessDocumentStockedPackingSlipLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessDocumentStockedPackingSlipLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessDocumentStockedPackingSlipLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessDocumentStockedPackingSlipLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    BusinessDocumentStockedPackingSlipLinesV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      BusinessDocumentStockedPackingSlipLinesV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BusinessDocumentStockedPackingSlipLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessDocumentStockedPackingSlipLinesV2`.
   */
  create(
    entity: BusinessDocumentStockedPackingSlipLinesV2<T>
  ): CreateRequestBuilder<BusinessDocumentStockedPackingSlipLinesV2<T>, T> {
    return new CreateRequestBuilder<
      BusinessDocumentStockedPackingSlipLinesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BusinessDocumentStockedPackingSlipLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link BusinessDocumentStockedPackingSlipLinesV2.dataAreaId}.
   * @param salesId Key property. See {@link BusinessDocumentStockedPackingSlipLinesV2.salesId}.
   * @param packingSlipId Key property. See {@link BusinessDocumentStockedPackingSlipLinesV2.packingSlipId}.
   * @param deliveryDate Key property. See {@link BusinessDocumentStockedPackingSlipLinesV2.deliveryDate}.
   * @param lineNum Key property. See {@link BusinessDocumentStockedPackingSlipLinesV2.lineNum}.
   * @param origSalesId Key property. See {@link BusinessDocumentStockedPackingSlipLinesV2.origSalesId}.
   * @returns A request builder for creating requests to retrieve one `BusinessDocumentStockedPackingSlipLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesId: DeserializedType<T, 'Edm.String'>,
    packingSlipId: DeserializedType<T, 'Edm.String'>,
    deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>,
    origSalesId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BusinessDocumentStockedPackingSlipLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<
      BusinessDocumentStockedPackingSlipLinesV2<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SalesId: salesId,
      PackingSlipId: packingSlipId,
      DeliveryDate: deliveryDate,
      LineNum: lineNum,
      OrigSalesId: origSalesId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessDocumentStockedPackingSlipLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessDocumentStockedPackingSlipLinesV2`.
   */
  update(
    entity: BusinessDocumentStockedPackingSlipLinesV2<T>
  ): UpdateRequestBuilder<BusinessDocumentStockedPackingSlipLinesV2<T>, T> {
    return new UpdateRequestBuilder<
      BusinessDocumentStockedPackingSlipLinesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentStockedPackingSlipLinesV2`.
   * @param dataAreaId Key property. See {@link BusinessDocumentStockedPackingSlipLinesV2.dataAreaId}.
   * @param salesId Key property. See {@link BusinessDocumentStockedPackingSlipLinesV2.salesId}.
   * @param packingSlipId Key property. See {@link BusinessDocumentStockedPackingSlipLinesV2.packingSlipId}.
   * @param deliveryDate Key property. See {@link BusinessDocumentStockedPackingSlipLinesV2.deliveryDate}.
   * @param lineNum Key property. See {@link BusinessDocumentStockedPackingSlipLinesV2.lineNum}.
   * @param origSalesId Key property. See {@link BusinessDocumentStockedPackingSlipLinesV2.origSalesId}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentStockedPackingSlipLinesV2`.
   */
  delete(
    dataAreaId: string,
    salesId: string,
    packingSlipId: string,
    deliveryDate: Moment,
    lineNum: BigNumber,
    origSalesId: string
  ): DeleteRequestBuilder<BusinessDocumentStockedPackingSlipLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentStockedPackingSlipLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentStockedPackingSlipLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessDocumentStockedPackingSlipLinesV2<T>
  ): DeleteRequestBuilder<BusinessDocumentStockedPackingSlipLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesId?: string,
    packingSlipId?: string,
    deliveryDate?: Moment,
    lineNum?: BigNumber,
    origSalesId?: string
  ): DeleteRequestBuilder<BusinessDocumentStockedPackingSlipLinesV2<T>, T> {
    return new DeleteRequestBuilder<
      BusinessDocumentStockedPackingSlipLinesV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof BusinessDocumentStockedPackingSlipLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesId: salesId!,
            PackingSlipId: packingSlipId!,
            DeliveryDate: deliveryDate!,
            LineNum: lineNum!,
            OrigSalesId: origSalesId!
          }
    );
  }
}
