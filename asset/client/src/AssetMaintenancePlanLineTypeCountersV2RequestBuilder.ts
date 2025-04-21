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
import { AssetMaintenancePlanLineTypeCountersV2 } from './AssetMaintenancePlanLineTypeCountersV2';

/**
 * Request builder class for operations supported on the {@link AssetMaintenancePlanLineTypeCountersV2} entity.
 */
export class AssetMaintenancePlanLineTypeCountersV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenancePlanLineTypeCountersV2<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenancePlanLineTypeCountersV2` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenancePlanLineTypeCountersV2` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenancePlanLineTypeCountersV2<T>, T> {
    return new GetAllRequestBuilder<
      AssetMaintenancePlanLineTypeCountersV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenancePlanLineTypeCountersV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenancePlanLineTypeCountersV2`.
   */
  create(
    entity: AssetMaintenancePlanLineTypeCountersV2<T>
  ): CreateRequestBuilder<AssetMaintenancePlanLineTypeCountersV2<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenancePlanLineTypeCountersV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenancePlanLineTypeCountersV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenancePlanLineTypeCountersV2.dataAreaId}.
   * @param maintenancePlanId Key property. See {@link AssetMaintenancePlanLineTypeCountersV2.maintenancePlanId}.
   * @param lineNumber Key property. See {@link AssetMaintenancePlanLineTypeCountersV2.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenancePlanLineTypeCountersV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenancePlanId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<AssetMaintenancePlanLineTypeCountersV2<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenancePlanLineTypeCountersV2<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MaintenancePlanId: maintenancePlanId,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenancePlanLineTypeCountersV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenancePlanLineTypeCountersV2`.
   */
  update(
    entity: AssetMaintenancePlanLineTypeCountersV2<T>
  ): UpdateRequestBuilder<AssetMaintenancePlanLineTypeCountersV2<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenancePlanLineTypeCountersV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenancePlanLineTypeCountersV2`.
   * @param dataAreaId Key property. See {@link AssetMaintenancePlanLineTypeCountersV2.dataAreaId}.
   * @param maintenancePlanId Key property. See {@link AssetMaintenancePlanLineTypeCountersV2.maintenancePlanId}.
   * @param lineNumber Key property. See {@link AssetMaintenancePlanLineTypeCountersV2.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenancePlanLineTypeCountersV2`.
   */
  delete(
    dataAreaId: string,
    maintenancePlanId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<AssetMaintenancePlanLineTypeCountersV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenancePlanLineTypeCountersV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenancePlanLineTypeCountersV2` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenancePlanLineTypeCountersV2<T>
  ): DeleteRequestBuilder<AssetMaintenancePlanLineTypeCountersV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenancePlanId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<AssetMaintenancePlanLineTypeCountersV2<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenancePlanLineTypeCountersV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenancePlanLineTypeCountersV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenancePlanId: maintenancePlanId!,
            LineNumber: lineNumber!
          }
    );
  }
}
