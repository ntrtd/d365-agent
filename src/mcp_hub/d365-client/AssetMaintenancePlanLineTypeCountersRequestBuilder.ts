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
import { AssetMaintenancePlanLineTypeCounters } from './AssetMaintenancePlanLineTypeCounters';

/**
 * Request builder class for operations supported on the {@link AssetMaintenancePlanLineTypeCounters} entity.
 */
export class AssetMaintenancePlanLineTypeCountersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenancePlanLineTypeCounters<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenancePlanLineTypeCounters` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenancePlanLineTypeCounters` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenancePlanLineTypeCounters<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenancePlanLineTypeCounters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenancePlanLineTypeCounters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenancePlanLineTypeCounters`.
   */
  create(
    entity: AssetMaintenancePlanLineTypeCounters<T>
  ): CreateRequestBuilder<AssetMaintenancePlanLineTypeCounters<T>, T> {
    return new CreateRequestBuilder<AssetMaintenancePlanLineTypeCounters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenancePlanLineTypeCounters` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenancePlanLineTypeCounters.dataAreaId}.
   * @param maintenancePlanId Key property. See {@link AssetMaintenancePlanLineTypeCounters.maintenancePlanId}.
   * @param lineNumber Key property. See {@link AssetMaintenancePlanLineTypeCounters.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenancePlanLineTypeCounters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenancePlanId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<AssetMaintenancePlanLineTypeCounters<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenancePlanLineTypeCounters<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MaintenancePlanId: maintenancePlanId,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenancePlanLineTypeCounters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenancePlanLineTypeCounters`.
   */
  update(
    entity: AssetMaintenancePlanLineTypeCounters<T>
  ): UpdateRequestBuilder<AssetMaintenancePlanLineTypeCounters<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenancePlanLineTypeCounters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenancePlanLineTypeCounters`.
   * @param dataAreaId Key property. See {@link AssetMaintenancePlanLineTypeCounters.dataAreaId}.
   * @param maintenancePlanId Key property. See {@link AssetMaintenancePlanLineTypeCounters.maintenancePlanId}.
   * @param lineNumber Key property. See {@link AssetMaintenancePlanLineTypeCounters.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenancePlanLineTypeCounters`.
   */
  delete(
    dataAreaId: string,
    maintenancePlanId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<AssetMaintenancePlanLineTypeCounters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenancePlanLineTypeCounters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenancePlanLineTypeCounters` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenancePlanLineTypeCounters<T>
  ): DeleteRequestBuilder<AssetMaintenancePlanLineTypeCounters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenancePlanId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<AssetMaintenancePlanLineTypeCounters<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenancePlanLineTypeCounters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenancePlanLineTypeCounters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenancePlanId: maintenancePlanId!,
            LineNumber: lineNumber!
          }
    );
  }
}
