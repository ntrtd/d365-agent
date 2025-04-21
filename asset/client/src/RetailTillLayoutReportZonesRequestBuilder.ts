/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { RetailTillLayoutReportZones } from './RetailTillLayoutReportZones';

/**
 * Request builder class for operations supported on the {@link RetailTillLayoutReportZones} entity.
 */
export class RetailTillLayoutReportZonesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTillLayoutReportZones<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTillLayoutReportZones` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTillLayoutReportZones` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTillLayoutReportZones<T>, T> {
    return new GetAllRequestBuilder<RetailTillLayoutReportZones<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTillLayoutReportZones` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTillLayoutReportZones`.
   */
  create(
    entity: RetailTillLayoutReportZones<T>
  ): CreateRequestBuilder<RetailTillLayoutReportZones<T>, T> {
    return new CreateRequestBuilder<RetailTillLayoutReportZones<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTillLayoutReportZones` entity based on its keys.
   * @param layoutId Key property. See {@link RetailTillLayoutReportZones.layoutId}.
   * @param deviceType Key property. See {@link RetailTillLayoutReportZones.deviceType}.
   * @param zoneId Key property. See {@link RetailTillLayoutReportZones.zoneId}.
   * @param reportId Key property. See {@link RetailTillLayoutReportZones.reportId}.
   * @returns A request builder for creating requests to retrieve one `RetailTillLayoutReportZones` entity based on its keys.
   */
  getByKey(
    layoutId: DeserializedType<T, 'Edm.String'>,
    deviceType: DeserializedType<T, 'Edm.Int32'>,
    zoneId: DeserializedType<T, 'Edm.String'>,
    reportId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTillLayoutReportZones<T>, T> {
    return new GetByKeyRequestBuilder<RetailTillLayoutReportZones<T>, T>(
      this.entityApi,
      {
        LayoutId: layoutId,
        DeviceType: deviceType,
        ZoneId: zoneId,
        ReportID: reportId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTillLayoutReportZones`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTillLayoutReportZones`.
   */
  update(
    entity: RetailTillLayoutReportZones<T>
  ): UpdateRequestBuilder<RetailTillLayoutReportZones<T>, T> {
    return new UpdateRequestBuilder<RetailTillLayoutReportZones<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTillLayoutReportZones`.
   * @param layoutId Key property. See {@link RetailTillLayoutReportZones.layoutId}.
   * @param deviceType Key property. See {@link RetailTillLayoutReportZones.deviceType}.
   * @param zoneId Key property. See {@link RetailTillLayoutReportZones.zoneId}.
   * @param reportId Key property. See {@link RetailTillLayoutReportZones.reportId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTillLayoutReportZones`.
   */
  delete(
    layoutId: string,
    deviceType: number,
    zoneId: string,
    reportId: string
  ): DeleteRequestBuilder<RetailTillLayoutReportZones<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTillLayoutReportZones`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTillLayoutReportZones` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTillLayoutReportZones<T>
  ): DeleteRequestBuilder<RetailTillLayoutReportZones<T>, T>;
  delete(
    layoutIdOrEntity: any,
    deviceType?: number,
    zoneId?: string,
    reportId?: string
  ): DeleteRequestBuilder<RetailTillLayoutReportZones<T>, T> {
    return new DeleteRequestBuilder<RetailTillLayoutReportZones<T>, T>(
      this.entityApi,
      layoutIdOrEntity instanceof RetailTillLayoutReportZones
        ? layoutIdOrEntity
        : {
            LayoutId: layoutIdOrEntity!,
            DeviceType: deviceType!,
            ZoneId: zoneId!,
            ReportID: reportId!
          }
    );
  }
}
