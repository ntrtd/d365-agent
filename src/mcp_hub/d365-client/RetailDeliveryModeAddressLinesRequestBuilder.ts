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
import { RetailDeliveryModeAddressLines } from './RetailDeliveryModeAddressLines';
import { RetailDlvModeExcludeIncludeType } from './RetailDlvModeExcludeIncludeType';

/**
 * Request builder class for operations supported on the {@link RetailDeliveryModeAddressLines} entity.
 */
export class RetailDeliveryModeAddressLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailDeliveryModeAddressLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailDeliveryModeAddressLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailDeliveryModeAddressLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailDeliveryModeAddressLines<T>, T> {
    return new GetAllRequestBuilder<RetailDeliveryModeAddressLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailDeliveryModeAddressLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailDeliveryModeAddressLines`.
   */
  create(
    entity: RetailDeliveryModeAddressLines<T>
  ): CreateRequestBuilder<RetailDeliveryModeAddressLines<T>, T> {
    return new CreateRequestBuilder<RetailDeliveryModeAddressLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailDeliveryModeAddressLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailDeliveryModeAddressLines.dataAreaId}.
   * @param countryRegion Key property. See {@link RetailDeliveryModeAddressLines.countryRegion}.
   * @param lineType Key property. See {@link RetailDeliveryModeAddressLines.lineType}.
   * @param state Key property. See {@link RetailDeliveryModeAddressLines.state}.
   * @param deliveryMode Key property. See {@link RetailDeliveryModeAddressLines.deliveryMode}.
   * @returns A request builder for creating requests to retrieve one `RetailDeliveryModeAddressLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    countryRegion: DeserializedType<T, 'Edm.String'>,
    lineType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailDlvModeExcludeIncludeType'
    >,
    state: DeserializedType<T, 'Edm.String'>,
    deliveryMode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailDeliveryModeAddressLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailDeliveryModeAddressLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CountryRegion: countryRegion,
        LineType: lineType,
        State: state,
        DeliveryMode: deliveryMode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailDeliveryModeAddressLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailDeliveryModeAddressLines`.
   */
  update(
    entity: RetailDeliveryModeAddressLines<T>
  ): UpdateRequestBuilder<RetailDeliveryModeAddressLines<T>, T> {
    return new UpdateRequestBuilder<RetailDeliveryModeAddressLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailDeliveryModeAddressLines`.
   * @param dataAreaId Key property. See {@link RetailDeliveryModeAddressLines.dataAreaId}.
   * @param countryRegion Key property. See {@link RetailDeliveryModeAddressLines.countryRegion}.
   * @param lineType Key property. See {@link RetailDeliveryModeAddressLines.lineType}.
   * @param state Key property. See {@link RetailDeliveryModeAddressLines.state}.
   * @param deliveryMode Key property. See {@link RetailDeliveryModeAddressLines.deliveryMode}.
   * @returns A request builder for creating requests that delete an entity of type `RetailDeliveryModeAddressLines`.
   */
  delete(
    dataAreaId: string,
    countryRegion: string,
    lineType: RetailDlvModeExcludeIncludeType,
    state: string,
    deliveryMode: string
  ): DeleteRequestBuilder<RetailDeliveryModeAddressLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailDeliveryModeAddressLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailDeliveryModeAddressLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailDeliveryModeAddressLines<T>
  ): DeleteRequestBuilder<RetailDeliveryModeAddressLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    countryRegion?: string,
    lineType?: RetailDlvModeExcludeIncludeType,
    state?: string,
    deliveryMode?: string
  ): DeleteRequestBuilder<RetailDeliveryModeAddressLines<T>, T> {
    return new DeleteRequestBuilder<RetailDeliveryModeAddressLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailDeliveryModeAddressLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CountryRegion: countryRegion!,
            LineType: lineType!,
            State: state!,
            DeliveryMode: deliveryMode!
          }
    );
  }
}
