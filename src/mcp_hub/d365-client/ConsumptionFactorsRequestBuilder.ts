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
import { ConsumptionFactors } from './ConsumptionFactors';

/**
 * Request builder class for operations supported on the {@link ConsumptionFactors} entity.
 */
export class ConsumptionFactorsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ConsumptionFactors<T>, T> {
  /**
   * Returns a request builder for querying all `ConsumptionFactors` entities.
   * @returns A request builder for creating requests to retrieve all `ConsumptionFactors` entities.
   */
  getAll(): GetAllRequestBuilder<ConsumptionFactors<T>, T> {
    return new GetAllRequestBuilder<ConsumptionFactors<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ConsumptionFactors` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ConsumptionFactors`.
   */
  create(
    entity: ConsumptionFactors<T>
  ): CreateRequestBuilder<ConsumptionFactors<T>, T> {
    return new CreateRequestBuilder<ConsumptionFactors<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ConsumptionFactors` entity based on its keys.
   * @param dataAreaId Key property. See {@link ConsumptionFactors.dataAreaId}.
   * @param consumptionFactorId Key property. See {@link ConsumptionFactors.consumptionFactorId}.
   * @param endDate Key property. See {@link ConsumptionFactors.endDate}.
   * @returns A request builder for creating requests to retrieve one `ConsumptionFactors` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    consumptionFactorId: DeserializedType<T, 'Edm.String'>,
    endDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ConsumptionFactors<T>, T> {
    return new GetByKeyRequestBuilder<ConsumptionFactors<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ConsumptionFactorId: consumptionFactorId,
        EndDate: endDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ConsumptionFactors`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ConsumptionFactors`.
   */
  update(
    entity: ConsumptionFactors<T>
  ): UpdateRequestBuilder<ConsumptionFactors<T>, T> {
    return new UpdateRequestBuilder<ConsumptionFactors<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ConsumptionFactors`.
   * @param dataAreaId Key property. See {@link ConsumptionFactors.dataAreaId}.
   * @param consumptionFactorId Key property. See {@link ConsumptionFactors.consumptionFactorId}.
   * @param endDate Key property. See {@link ConsumptionFactors.endDate}.
   * @returns A request builder for creating requests that delete an entity of type `ConsumptionFactors`.
   */
  delete(
    dataAreaId: string,
    consumptionFactorId: string,
    endDate: Moment
  ): DeleteRequestBuilder<ConsumptionFactors<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ConsumptionFactors`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ConsumptionFactors` by taking the entity as a parameter.
   */
  delete(
    entity: ConsumptionFactors<T>
  ): DeleteRequestBuilder<ConsumptionFactors<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    consumptionFactorId?: string,
    endDate?: Moment
  ): DeleteRequestBuilder<ConsumptionFactors<T>, T> {
    return new DeleteRequestBuilder<ConsumptionFactors<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ConsumptionFactors
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ConsumptionFactorId: consumptionFactorId!,
            EndDate: endDate!
          }
    );
  }
}
