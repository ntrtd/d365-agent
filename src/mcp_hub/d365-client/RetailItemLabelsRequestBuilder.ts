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
import { RetailItemLabels } from './RetailItemLabels';

/**
 * Request builder class for operations supported on the {@link RetailItemLabels} entity.
 */
export class RetailItemLabelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailItemLabels<T>, T> {
  /**
   * Returns a request builder for querying all `RetailItemLabels` entities.
   * @returns A request builder for creating requests to retrieve all `RetailItemLabels` entities.
   */
  getAll(): GetAllRequestBuilder<RetailItemLabels<T>, T> {
    return new GetAllRequestBuilder<RetailItemLabels<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailItemLabels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailItemLabels`.
   */
  create(
    entity: RetailItemLabels<T>
  ): CreateRequestBuilder<RetailItemLabels<T>, T> {
    return new CreateRequestBuilder<RetailItemLabels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailItemLabels` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailItemLabels.dataAreaId}.
   * @param itemId Key property. See {@link RetailItemLabels.itemId}.
   * @param storeNumber Key property. See {@link RetailItemLabels.storeNumber}.
   * @param unitOfMeasureSymbol Key property. See {@link RetailItemLabels.unitOfMeasureSymbol}.
   * @param validOnDate Key property. See {@link RetailItemLabels.validOnDate}.
   * @returns A request builder for creating requests to retrieve one `RetailItemLabels` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>,
    unitOfMeasureSymbol: DeserializedType<T, 'Edm.String'>,
    validOnDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<RetailItemLabels<T>, T> {
    return new GetByKeyRequestBuilder<RetailItemLabels<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ItemId: itemId,
      StoreNumber: storeNumber,
      UnitOfMeasureSymbol: unitOfMeasureSymbol,
      ValidOnDate: validOnDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailItemLabels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailItemLabels`.
   */
  update(
    entity: RetailItemLabels<T>
  ): UpdateRequestBuilder<RetailItemLabels<T>, T> {
    return new UpdateRequestBuilder<RetailItemLabels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailItemLabels`.
   * @param dataAreaId Key property. See {@link RetailItemLabels.dataAreaId}.
   * @param itemId Key property. See {@link RetailItemLabels.itemId}.
   * @param storeNumber Key property. See {@link RetailItemLabels.storeNumber}.
   * @param unitOfMeasureSymbol Key property. See {@link RetailItemLabels.unitOfMeasureSymbol}.
   * @param validOnDate Key property. See {@link RetailItemLabels.validOnDate}.
   * @returns A request builder for creating requests that delete an entity of type `RetailItemLabels`.
   */
  delete(
    dataAreaId: string,
    itemId: string,
    storeNumber: string,
    unitOfMeasureSymbol: string,
    validOnDate: Moment
  ): DeleteRequestBuilder<RetailItemLabels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailItemLabels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailItemLabels` by taking the entity as a parameter.
   */
  delete(
    entity: RetailItemLabels<T>
  ): DeleteRequestBuilder<RetailItemLabels<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemId?: string,
    storeNumber?: string,
    unitOfMeasureSymbol?: string,
    validOnDate?: Moment
  ): DeleteRequestBuilder<RetailItemLabels<T>, T> {
    return new DeleteRequestBuilder<RetailItemLabels<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailItemLabels
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemId: itemId!,
            StoreNumber: storeNumber!,
            UnitOfMeasureSymbol: unitOfMeasureSymbol!,
            ValidOnDate: validOnDate!
          }
    );
  }
}
