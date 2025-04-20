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
import { PackingSlipTrackingInformation } from './PackingSlipTrackingInformation';

/**
 * Request builder class for operations supported on the {@link PackingSlipTrackingInformation} entity.
 */
export class PackingSlipTrackingInformationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PackingSlipTrackingInformation<T>, T> {
  /**
   * Returns a request builder for querying all `PackingSlipTrackingInformation` entities.
   * @returns A request builder for creating requests to retrieve all `PackingSlipTrackingInformation` entities.
   */
  getAll(): GetAllRequestBuilder<PackingSlipTrackingInformation<T>, T> {
    return new GetAllRequestBuilder<PackingSlipTrackingInformation<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PackingSlipTrackingInformation` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PackingSlipTrackingInformation`.
   */
  create(
    entity: PackingSlipTrackingInformation<T>
  ): CreateRequestBuilder<PackingSlipTrackingInformation<T>, T> {
    return new CreateRequestBuilder<PackingSlipTrackingInformation<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PackingSlipTrackingInformation` entity based on its keys.
   * @param dataAreaId Key property. See {@link PackingSlipTrackingInformation.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link PackingSlipTrackingInformation.salesOrderNumber}.
   * @param packingSlipNumber Key property. See {@link PackingSlipTrackingInformation.packingSlipNumber}.
   * @param deliveryDate Key property. See {@link PackingSlipTrackingInformation.deliveryDate}.
   * @param trackingNumber Key property. See {@link PackingSlipTrackingInformation.trackingNumber}.
   * @returns A request builder for creating requests to retrieve one `PackingSlipTrackingInformation` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesOrderNumber: DeserializedType<T, 'Edm.String'>,
    packingSlipNumber: DeserializedType<T, 'Edm.String'>,
    deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    trackingNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PackingSlipTrackingInformation<T>, T> {
    return new GetByKeyRequestBuilder<PackingSlipTrackingInformation<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesOrderNumber: salesOrderNumber,
        PackingSlipNumber: packingSlipNumber,
        DeliveryDate: deliveryDate,
        TrackingNumber: trackingNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PackingSlipTrackingInformation`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PackingSlipTrackingInformation`.
   */
  update(
    entity: PackingSlipTrackingInformation<T>
  ): UpdateRequestBuilder<PackingSlipTrackingInformation<T>, T> {
    return new UpdateRequestBuilder<PackingSlipTrackingInformation<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PackingSlipTrackingInformation`.
   * @param dataAreaId Key property. See {@link PackingSlipTrackingInformation.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link PackingSlipTrackingInformation.salesOrderNumber}.
   * @param packingSlipNumber Key property. See {@link PackingSlipTrackingInformation.packingSlipNumber}.
   * @param deliveryDate Key property. See {@link PackingSlipTrackingInformation.deliveryDate}.
   * @param trackingNumber Key property. See {@link PackingSlipTrackingInformation.trackingNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PackingSlipTrackingInformation`.
   */
  delete(
    dataAreaId: string,
    salesOrderNumber: string,
    packingSlipNumber: string,
    deliveryDate: Moment,
    trackingNumber: string
  ): DeleteRequestBuilder<PackingSlipTrackingInformation<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PackingSlipTrackingInformation`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PackingSlipTrackingInformation` by taking the entity as a parameter.
   */
  delete(
    entity: PackingSlipTrackingInformation<T>
  ): DeleteRequestBuilder<PackingSlipTrackingInformation<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesOrderNumber?: string,
    packingSlipNumber?: string,
    deliveryDate?: Moment,
    trackingNumber?: string
  ): DeleteRequestBuilder<PackingSlipTrackingInformation<T>, T> {
    return new DeleteRequestBuilder<PackingSlipTrackingInformation<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PackingSlipTrackingInformation
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesOrderNumber: salesOrderNumber!,
            PackingSlipNumber: packingSlipNumber!,
            DeliveryDate: deliveryDate!,
            TrackingNumber: trackingNumber!
          }
    );
  }
}
