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
import { AssetMaintenancePlanLineTypeTimes } from './AssetMaintenancePlanLineTypeTimes';

/**
 * Request builder class for operations supported on the {@link AssetMaintenancePlanLineTypeTimes} entity.
 */
export class AssetMaintenancePlanLineTypeTimesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenancePlanLineTypeTimes<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenancePlanLineTypeTimes` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenancePlanLineTypeTimes` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenancePlanLineTypeTimes<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenancePlanLineTypeTimes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenancePlanLineTypeTimes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenancePlanLineTypeTimes`.
   */
  create(
    entity: AssetMaintenancePlanLineTypeTimes<T>
  ): CreateRequestBuilder<AssetMaintenancePlanLineTypeTimes<T>, T> {
    return new CreateRequestBuilder<AssetMaintenancePlanLineTypeTimes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenancePlanLineTypeTimes` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenancePlanLineTypeTimes.dataAreaId}.
   * @param maintenancePlanId Key property. See {@link AssetMaintenancePlanLineTypeTimes.maintenancePlanId}.
   * @param lineNumber Key property. See {@link AssetMaintenancePlanLineTypeTimes.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenancePlanLineTypeTimes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenancePlanId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<AssetMaintenancePlanLineTypeTimes<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenancePlanLineTypeTimes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MaintenancePlanId: maintenancePlanId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenancePlanLineTypeTimes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenancePlanLineTypeTimes`.
   */
  update(
    entity: AssetMaintenancePlanLineTypeTimes<T>
  ): UpdateRequestBuilder<AssetMaintenancePlanLineTypeTimes<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenancePlanLineTypeTimes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenancePlanLineTypeTimes`.
   * @param dataAreaId Key property. See {@link AssetMaintenancePlanLineTypeTimes.dataAreaId}.
   * @param maintenancePlanId Key property. See {@link AssetMaintenancePlanLineTypeTimes.maintenancePlanId}.
   * @param lineNumber Key property. See {@link AssetMaintenancePlanLineTypeTimes.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenancePlanLineTypeTimes`.
   */
  delete(
    dataAreaId: string,
    maintenancePlanId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<AssetMaintenancePlanLineTypeTimes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenancePlanLineTypeTimes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenancePlanLineTypeTimes` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenancePlanLineTypeTimes<T>
  ): DeleteRequestBuilder<AssetMaintenancePlanLineTypeTimes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenancePlanId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<AssetMaintenancePlanLineTypeTimes<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenancePlanLineTypeTimes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenancePlanLineTypeTimes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenancePlanId: maintenancePlanId!,
            LineNumber: lineNumber!
          }
    );
  }
}
