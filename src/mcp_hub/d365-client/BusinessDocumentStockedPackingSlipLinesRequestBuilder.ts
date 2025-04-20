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
import { BusinessDocumentStockedPackingSlipLines } from './BusinessDocumentStockedPackingSlipLines';

/**
 * Request builder class for operations supported on the {@link BusinessDocumentStockedPackingSlipLines} entity.
 */
export class BusinessDocumentStockedPackingSlipLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessDocumentStockedPackingSlipLines<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessDocumentStockedPackingSlipLines` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessDocumentStockedPackingSlipLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    BusinessDocumentStockedPackingSlipLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      BusinessDocumentStockedPackingSlipLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BusinessDocumentStockedPackingSlipLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessDocumentStockedPackingSlipLines`.
   */
  create(
    entity: BusinessDocumentStockedPackingSlipLines<T>
  ): CreateRequestBuilder<BusinessDocumentStockedPackingSlipLines<T>, T> {
    return new CreateRequestBuilder<
      BusinessDocumentStockedPackingSlipLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BusinessDocumentStockedPackingSlipLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link BusinessDocumentStockedPackingSlipLines.dataAreaId}.
   * @param salesId Key property. See {@link BusinessDocumentStockedPackingSlipLines.salesId}.
   * @param packingSlipId Key property. See {@link BusinessDocumentStockedPackingSlipLines.packingSlipId}.
   * @param deliveryDate Key property. See {@link BusinessDocumentStockedPackingSlipLines.deliveryDate}.
   * @param lineNum Key property. See {@link BusinessDocumentStockedPackingSlipLines.lineNum}.
   * @returns A request builder for creating requests to retrieve one `BusinessDocumentStockedPackingSlipLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesId: DeserializedType<T, 'Edm.String'>,
    packingSlipId: DeserializedType<T, 'Edm.String'>,
    deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<BusinessDocumentStockedPackingSlipLines<T>, T> {
    return new GetByKeyRequestBuilder<
      BusinessDocumentStockedPackingSlipLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SalesId: salesId,
      PackingSlipId: packingSlipId,
      DeliveryDate: deliveryDate,
      LineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessDocumentStockedPackingSlipLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessDocumentStockedPackingSlipLines`.
   */
  update(
    entity: BusinessDocumentStockedPackingSlipLines<T>
  ): UpdateRequestBuilder<BusinessDocumentStockedPackingSlipLines<T>, T> {
    return new UpdateRequestBuilder<
      BusinessDocumentStockedPackingSlipLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentStockedPackingSlipLines`.
   * @param dataAreaId Key property. See {@link BusinessDocumentStockedPackingSlipLines.dataAreaId}.
   * @param salesId Key property. See {@link BusinessDocumentStockedPackingSlipLines.salesId}.
   * @param packingSlipId Key property. See {@link BusinessDocumentStockedPackingSlipLines.packingSlipId}.
   * @param deliveryDate Key property. See {@link BusinessDocumentStockedPackingSlipLines.deliveryDate}.
   * @param lineNum Key property. See {@link BusinessDocumentStockedPackingSlipLines.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentStockedPackingSlipLines`.
   */
  delete(
    dataAreaId: string,
    salesId: string,
    packingSlipId: string,
    deliveryDate: Moment,
    lineNum: BigNumber
  ): DeleteRequestBuilder<BusinessDocumentStockedPackingSlipLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentStockedPackingSlipLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentStockedPackingSlipLines` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessDocumentStockedPackingSlipLines<T>
  ): DeleteRequestBuilder<BusinessDocumentStockedPackingSlipLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesId?: string,
    packingSlipId?: string,
    deliveryDate?: Moment,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<BusinessDocumentStockedPackingSlipLines<T>, T> {
    return new DeleteRequestBuilder<
      BusinessDocumentStockedPackingSlipLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof BusinessDocumentStockedPackingSlipLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesId: salesId!,
            PackingSlipId: packingSlipId!,
            DeliveryDate: deliveryDate!,
            LineNum: lineNum!
          }
    );
  }
}
