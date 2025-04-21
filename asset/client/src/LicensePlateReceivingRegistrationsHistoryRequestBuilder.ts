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
import { LicensePlateReceivingRegistrationsHistory } from './LicensePlateReceivingRegistrationsHistory';

/**
 * Request builder class for operations supported on the {@link LicensePlateReceivingRegistrationsHistory} entity.
 */
export class LicensePlateReceivingRegistrationsHistoryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LicensePlateReceivingRegistrationsHistory<T>, T> {
  /**
   * Returns a request builder for querying all `LicensePlateReceivingRegistrationsHistory` entities.
   * @returns A request builder for creating requests to retrieve all `LicensePlateReceivingRegistrationsHistory` entities.
   */
  getAll(): GetAllRequestBuilder<
    LicensePlateReceivingRegistrationsHistory<T>,
    T
  > {
    return new GetAllRequestBuilder<
      LicensePlateReceivingRegistrationsHistory<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LicensePlateReceivingRegistrationsHistory` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LicensePlateReceivingRegistrationsHistory`.
   */
  create(
    entity: LicensePlateReceivingRegistrationsHistory<T>
  ): CreateRequestBuilder<LicensePlateReceivingRegistrationsHistory<T>, T> {
    return new CreateRequestBuilder<
      LicensePlateReceivingRegistrationsHistory<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LicensePlateReceivingRegistrationsHistory` entity based on its keys.
   * @param dataAreaId Key property. See {@link LicensePlateReceivingRegistrationsHistory.dataAreaId}.
   * @param licensePlateNumber Key property. See {@link LicensePlateReceivingRegistrationsHistory.licensePlateNumber}.
   * @param inboundLoadId Key property. See {@link LicensePlateReceivingRegistrationsHistory.inboundLoadId}.
   * @param shipmentId Key property. See {@link LicensePlateReceivingRegistrationsHistory.shipmentId}.
   * @param registrationDateTime Key property. See {@link LicensePlateReceivingRegistrationsHistory.registrationDateTime}.
   * @returns A request builder for creating requests to retrieve one `LicensePlateReceivingRegistrationsHistory` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    licensePlateNumber: DeserializedType<T, 'Edm.String'>,
    inboundLoadId: DeserializedType<T, 'Edm.String'>,
    shipmentId: DeserializedType<T, 'Edm.String'>,
    registrationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<LicensePlateReceivingRegistrationsHistory<T>, T> {
    return new GetByKeyRequestBuilder<
      LicensePlateReceivingRegistrationsHistory<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LicensePlateNumber: licensePlateNumber,
      InboundLoadId: inboundLoadId,
      ShipmentId: shipmentId,
      RegistrationDateTime: registrationDateTime
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LicensePlateReceivingRegistrationsHistory`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LicensePlateReceivingRegistrationsHistory`.
   */
  update(
    entity: LicensePlateReceivingRegistrationsHistory<T>
  ): UpdateRequestBuilder<LicensePlateReceivingRegistrationsHistory<T>, T> {
    return new UpdateRequestBuilder<
      LicensePlateReceivingRegistrationsHistory<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LicensePlateReceivingRegistrationsHistory`.
   * @param dataAreaId Key property. See {@link LicensePlateReceivingRegistrationsHistory.dataAreaId}.
   * @param licensePlateNumber Key property. See {@link LicensePlateReceivingRegistrationsHistory.licensePlateNumber}.
   * @param inboundLoadId Key property. See {@link LicensePlateReceivingRegistrationsHistory.inboundLoadId}.
   * @param shipmentId Key property. See {@link LicensePlateReceivingRegistrationsHistory.shipmentId}.
   * @param registrationDateTime Key property. See {@link LicensePlateReceivingRegistrationsHistory.registrationDateTime}.
   * @returns A request builder for creating requests that delete an entity of type `LicensePlateReceivingRegistrationsHistory`.
   */
  delete(
    dataAreaId: string,
    licensePlateNumber: string,
    inboundLoadId: string,
    shipmentId: string,
    registrationDateTime: Moment
  ): DeleteRequestBuilder<LicensePlateReceivingRegistrationsHistory<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LicensePlateReceivingRegistrationsHistory`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LicensePlateReceivingRegistrationsHistory` by taking the entity as a parameter.
   */
  delete(
    entity: LicensePlateReceivingRegistrationsHistory<T>
  ): DeleteRequestBuilder<LicensePlateReceivingRegistrationsHistory<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    licensePlateNumber?: string,
    inboundLoadId?: string,
    shipmentId?: string,
    registrationDateTime?: Moment
  ): DeleteRequestBuilder<LicensePlateReceivingRegistrationsHistory<T>, T> {
    return new DeleteRequestBuilder<
      LicensePlateReceivingRegistrationsHistory<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof LicensePlateReceivingRegistrationsHistory
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LicensePlateNumber: licensePlateNumber!,
            InboundLoadId: inboundLoadId!,
            ShipmentId: shipmentId!,
            RegistrationDateTime: registrationDateTime!
          }
    );
  }
}
