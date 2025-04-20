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
import { RbslFactors } from './RbslFactors';

/**
 * Request builder class for operations supported on the {@link RbslFactors} entity.
 */
export class RbslFactorsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RbslFactors<T>, T> {
  /**
   * Returns a request builder for querying all `RbslFactors` entities.
   * @returns A request builder for creating requests to retrieve all `RbslFactors` entities.
   */
  getAll(): GetAllRequestBuilder<RbslFactors<T>, T> {
    return new GetAllRequestBuilder<RbslFactors<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RbslFactors` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RbslFactors`.
   */
  create(entity: RbslFactors<T>): CreateRequestBuilder<RbslFactors<T>, T> {
    return new CreateRequestBuilder<RbslFactors<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RbslFactors` entity based on its keys.
   * @param dataAreaId Key property. See {@link RbslFactors.dataAreaId}.
   * @param fromDate Key property. See {@link RbslFactors.fromDate}.
   * @param years Key property. See {@link RbslFactors.years}.
   * @param months Key property. See {@link RbslFactors.months}.
   * @returns A request builder for creating requests to retrieve one `RbslFactors` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    years: DeserializedType<T, 'Edm.Int32'>,
    months: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RbslFactors<T>, T> {
    return new GetByKeyRequestBuilder<RbslFactors<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FromDate: fromDate,
      Years: years,
      Months: months
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RbslFactors`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RbslFactors`.
   */
  update(entity: RbslFactors<T>): UpdateRequestBuilder<RbslFactors<T>, T> {
    return new UpdateRequestBuilder<RbslFactors<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RbslFactors`.
   * @param dataAreaId Key property. See {@link RbslFactors.dataAreaId}.
   * @param fromDate Key property. See {@link RbslFactors.fromDate}.
   * @param years Key property. See {@link RbslFactors.years}.
   * @param months Key property. See {@link RbslFactors.months}.
   * @returns A request builder for creating requests that delete an entity of type `RbslFactors`.
   */
  delete(
    dataAreaId: string,
    fromDate: Moment,
    years: number,
    months: number
  ): DeleteRequestBuilder<RbslFactors<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RbslFactors`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RbslFactors` by taking the entity as a parameter.
   */
  delete(entity: RbslFactors<T>): DeleteRequestBuilder<RbslFactors<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fromDate?: Moment,
    years?: number,
    months?: number
  ): DeleteRequestBuilder<RbslFactors<T>, T> {
    return new DeleteRequestBuilder<RbslFactors<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RbslFactors
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FromDate: fromDate!,
            Years: years!,
            Months: months!
          }
    );
  }
}
