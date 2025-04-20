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
import { IsrRates } from './IsrRates';

/**
 * Request builder class for operations supported on the {@link IsrRates} entity.
 */
export class IsrRatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IsrRates<T>, T> {
  /**
   * Returns a request builder for querying all `IsrRates` entities.
   * @returns A request builder for creating requests to retrieve all `IsrRates` entities.
   */
  getAll(): GetAllRequestBuilder<IsrRates<T>, T> {
    return new GetAllRequestBuilder<IsrRates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `IsrRates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IsrRates`.
   */
  create(entity: IsrRates<T>): CreateRequestBuilder<IsrRates<T>, T> {
    return new CreateRequestBuilder<IsrRates<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `IsrRates` entity based on its keys.
   * @param dataAreaId Key property. See {@link IsrRates.dataAreaId}.
   * @param year Key property. See {@link IsrRates.year}.
   * @param month Key property. See {@link IsrRates.month}.
   * @param maximumAmount Key property. See {@link IsrRates.maximumAmount}.
   * @returns A request builder for creating requests to retrieve one `IsrRates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    year: DeserializedType<T, 'Edm.Int32'>,
    month: DeserializedType<T, 'Edm.Int32'>,
    maximumAmount: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<IsrRates<T>, T> {
    return new GetByKeyRequestBuilder<IsrRates<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Year: year,
      Month: month,
      MaximumAmount: maximumAmount
    });
  }

  /**
   * Returns a request builder for updating an entity of type `IsrRates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IsrRates`.
   */
  update(entity: IsrRates<T>): UpdateRequestBuilder<IsrRates<T>, T> {
    return new UpdateRequestBuilder<IsrRates<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `IsrRates`.
   * @param dataAreaId Key property. See {@link IsrRates.dataAreaId}.
   * @param year Key property. See {@link IsrRates.year}.
   * @param month Key property. See {@link IsrRates.month}.
   * @param maximumAmount Key property. See {@link IsrRates.maximumAmount}.
   * @returns A request builder for creating requests that delete an entity of type `IsrRates`.
   */
  delete(
    dataAreaId: string,
    year: number,
    month: number,
    maximumAmount: BigNumber
  ): DeleteRequestBuilder<IsrRates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IsrRates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IsrRates` by taking the entity as a parameter.
   */
  delete(entity: IsrRates<T>): DeleteRequestBuilder<IsrRates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    year?: number,
    month?: number,
    maximumAmount?: BigNumber
  ): DeleteRequestBuilder<IsrRates<T>, T> {
    return new DeleteRequestBuilder<IsrRates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof IsrRates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Year: year!,
            Month: month!,
            MaximumAmount: maximumAmount!
          }
    );
  }
}
