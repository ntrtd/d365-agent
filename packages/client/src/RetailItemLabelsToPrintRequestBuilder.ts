/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { RetailItemLabelsToPrint } from './RetailItemLabelsToPrint';
import { RetailLabelTypeBase } from './RetailLabelTypeBase';

/**
 * Request builder class for operations supported on the {@link RetailItemLabelsToPrint} entity.
 */
export class RetailItemLabelsToPrintRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailItemLabelsToPrint<T>, T> {
  /**
   * Returns a request builder for querying all `RetailItemLabelsToPrint` entities.
   * @returns A request builder for creating requests to retrieve all `RetailItemLabelsToPrint` entities.
   */
  getAll(): GetAllRequestBuilder<RetailItemLabelsToPrint<T>, T> {
    return new GetAllRequestBuilder<RetailItemLabelsToPrint<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailItemLabelsToPrint` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailItemLabelsToPrint`.
   */
  create(
    entity: RetailItemLabelsToPrint<T>
  ): CreateRequestBuilder<RetailItemLabelsToPrint<T>, T> {
    return new CreateRequestBuilder<RetailItemLabelsToPrint<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailItemLabelsToPrint` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailItemLabelsToPrint.dataAreaId}.
   * @param itemId Key property. See {@link RetailItemLabelsToPrint.itemId}.
   * @param storeNumber Key property. See {@link RetailItemLabelsToPrint.storeNumber}.
   * @param unitOfMeasureSymbol Key property. See {@link RetailItemLabelsToPrint.unitOfMeasureSymbol}.
   * @param validOnDate Key property. See {@link RetailItemLabelsToPrint.validOnDate}.
   * @param labelType Key property. See {@link RetailItemLabelsToPrint.labelType}.
   * @param variantId Key property. See {@link RetailItemLabelsToPrint.variantId}.
   * @returns A request builder for creating requests to retrieve one `RetailItemLabelsToPrint` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>,
    unitOfMeasureSymbol: DeserializedType<T, 'Edm.String'>,
    validOnDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    labelType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailLabelTypeBase'
    >,
    variantId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailItemLabelsToPrint<T>, T> {
    return new GetByKeyRequestBuilder<RetailItemLabelsToPrint<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemId: itemId,
        StoreNumber: storeNumber,
        UnitOfMeasureSymbol: unitOfMeasureSymbol,
        ValidOnDate: validOnDate,
        LabelType: labelType,
        VariantId: variantId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailItemLabelsToPrint`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailItemLabelsToPrint`.
   */
  update(
    entity: RetailItemLabelsToPrint<T>
  ): UpdateRequestBuilder<RetailItemLabelsToPrint<T>, T> {
    return new UpdateRequestBuilder<RetailItemLabelsToPrint<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailItemLabelsToPrint`.
   * @param dataAreaId Key property. See {@link RetailItemLabelsToPrint.dataAreaId}.
   * @param itemId Key property. See {@link RetailItemLabelsToPrint.itemId}.
   * @param storeNumber Key property. See {@link RetailItemLabelsToPrint.storeNumber}.
   * @param unitOfMeasureSymbol Key property. See {@link RetailItemLabelsToPrint.unitOfMeasureSymbol}.
   * @param validOnDate Key property. See {@link RetailItemLabelsToPrint.validOnDate}.
   * @param labelType Key property. See {@link RetailItemLabelsToPrint.labelType}.
   * @param variantId Key property. See {@link RetailItemLabelsToPrint.variantId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailItemLabelsToPrint`.
   */
  delete(
    dataAreaId: string,
    itemId: string,
    storeNumber: string,
    unitOfMeasureSymbol: string,
    validOnDate: Moment,
    labelType: RetailLabelTypeBase,
    variantId: string
  ): DeleteRequestBuilder<RetailItemLabelsToPrint<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailItemLabelsToPrint`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailItemLabelsToPrint` by taking the entity as a parameter.
   */
  delete(
    entity: RetailItemLabelsToPrint<T>
  ): DeleteRequestBuilder<RetailItemLabelsToPrint<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemId?: string,
    storeNumber?: string,
    unitOfMeasureSymbol?: string,
    validOnDate?: Moment,
    labelType?: RetailLabelTypeBase,
    variantId?: string
  ): DeleteRequestBuilder<RetailItemLabelsToPrint<T>, T> {
    return new DeleteRequestBuilder<RetailItemLabelsToPrint<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailItemLabelsToPrint
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemId: itemId!,
            StoreNumber: storeNumber!,
            UnitOfMeasureSymbol: unitOfMeasureSymbol!,
            ValidOnDate: validOnDate!,
            LabelType: labelType!,
            VariantId: variantId!
          }
    );
  }
}
