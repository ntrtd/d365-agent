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
import { FeaccIndicativePrices } from './FeaccIndicativePrices';

/**
 * Request builder class for operations supported on the {@link FeaccIndicativePrices} entity.
 */
export class FeaccIndicativePricesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FeaccIndicativePrices<T>, T> {
  /**
   * Returns a request builder for querying all `FeaccIndicativePrices` entities.
   * @returns A request builder for creating requests to retrieve all `FeaccIndicativePrices` entities.
   */
  getAll(): GetAllRequestBuilder<FeaccIndicativePrices<T>, T> {
    return new GetAllRequestBuilder<FeaccIndicativePrices<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FeaccIndicativePrices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FeaccIndicativePrices`.
   */
  create(
    entity: FeaccIndicativePrices<T>
  ): CreateRequestBuilder<FeaccIndicativePrices<T>, T> {
    return new CreateRequestBuilder<FeaccIndicativePrices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FeaccIndicativePrices` entity based on its keys.
   * @param dataAreaId Key property. See {@link FeaccIndicativePrices.dataAreaId}.
   * @param tnvedCode Key property. See {@link FeaccIndicativePrices.tnvedCode}.
   * @param customsCode Key property. See {@link FeaccIndicativePrices.customsCode}.
   * @param fromDate Key property. See {@link FeaccIndicativePrices.fromDate}.
   * @returns A request builder for creating requests to retrieve one `FeaccIndicativePrices` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tnvedCode: DeserializedType<T, 'Edm.String'>,
    customsCode: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<FeaccIndicativePrices<T>, T> {
    return new GetByKeyRequestBuilder<FeaccIndicativePrices<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TNVEDCode: tnvedCode,
        CustomsCode: customsCode,
        FromDate: fromDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FeaccIndicativePrices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FeaccIndicativePrices`.
   */
  update(
    entity: FeaccIndicativePrices<T>
  ): UpdateRequestBuilder<FeaccIndicativePrices<T>, T> {
    return new UpdateRequestBuilder<FeaccIndicativePrices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FeaccIndicativePrices`.
   * @param dataAreaId Key property. See {@link FeaccIndicativePrices.dataAreaId}.
   * @param tnvedCode Key property. See {@link FeaccIndicativePrices.tnvedCode}.
   * @param customsCode Key property. See {@link FeaccIndicativePrices.customsCode}.
   * @param fromDate Key property. See {@link FeaccIndicativePrices.fromDate}.
   * @returns A request builder for creating requests that delete an entity of type `FeaccIndicativePrices`.
   */
  delete(
    dataAreaId: string,
    tnvedCode: string,
    customsCode: string,
    fromDate: Moment
  ): DeleteRequestBuilder<FeaccIndicativePrices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FeaccIndicativePrices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FeaccIndicativePrices` by taking the entity as a parameter.
   */
  delete(
    entity: FeaccIndicativePrices<T>
  ): DeleteRequestBuilder<FeaccIndicativePrices<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tnvedCode?: string,
    customsCode?: string,
    fromDate?: Moment
  ): DeleteRequestBuilder<FeaccIndicativePrices<T>, T> {
    return new DeleteRequestBuilder<FeaccIndicativePrices<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FeaccIndicativePrices
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TNVEDCode: tnvedCode!,
            CustomsCode: customsCode!,
            FromDate: fromDate!
          }
    );
  }
}
