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
import { DeferralsFactorCalculations } from './DeferralsFactorCalculations';

/**
 * Request builder class for operations supported on the {@link DeferralsFactorCalculations} entity.
 */
export class DeferralsFactorCalculationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DeferralsFactorCalculations<T>, T> {
  /**
   * Returns a request builder for querying all `DeferralsFactorCalculations` entities.
   * @returns A request builder for creating requests to retrieve all `DeferralsFactorCalculations` entities.
   */
  getAll(): GetAllRequestBuilder<DeferralsFactorCalculations<T>, T> {
    return new GetAllRequestBuilder<DeferralsFactorCalculations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DeferralsFactorCalculations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DeferralsFactorCalculations`.
   */
  create(
    entity: DeferralsFactorCalculations<T>
  ): CreateRequestBuilder<DeferralsFactorCalculations<T>, T> {
    return new CreateRequestBuilder<DeferralsFactorCalculations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DeferralsFactorCalculations` entity based on its keys.
   * @param dataAreaId Key property. See {@link DeferralsFactorCalculations.dataAreaId}.
   * @param startDate Key property. See {@link DeferralsFactorCalculations.startDate}.
   * @returns A request builder for creating requests to retrieve one `DeferralsFactorCalculations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<DeferralsFactorCalculations<T>, T> {
    return new GetByKeyRequestBuilder<DeferralsFactorCalculations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        StartDate: startDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DeferralsFactorCalculations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DeferralsFactorCalculations`.
   */
  update(
    entity: DeferralsFactorCalculations<T>
  ): UpdateRequestBuilder<DeferralsFactorCalculations<T>, T> {
    return new UpdateRequestBuilder<DeferralsFactorCalculations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DeferralsFactorCalculations`.
   * @param dataAreaId Key property. See {@link DeferralsFactorCalculations.dataAreaId}.
   * @param startDate Key property. See {@link DeferralsFactorCalculations.startDate}.
   * @returns A request builder for creating requests that delete an entity of type `DeferralsFactorCalculations`.
   */
  delete(
    dataAreaId: string,
    startDate: Moment
  ): DeleteRequestBuilder<DeferralsFactorCalculations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DeferralsFactorCalculations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DeferralsFactorCalculations` by taking the entity as a parameter.
   */
  delete(
    entity: DeferralsFactorCalculations<T>
  ): DeleteRequestBuilder<DeferralsFactorCalculations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    startDate?: Moment
  ): DeleteRequestBuilder<DeferralsFactorCalculations<T>, T> {
    return new DeleteRequestBuilder<DeferralsFactorCalculations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DeferralsFactorCalculations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StartDate: startDate!
          }
    );
  }
}
