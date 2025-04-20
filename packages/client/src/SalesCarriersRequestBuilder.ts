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
import { SalesCarriers } from './SalesCarriers';

/**
 * Request builder class for operations supported on the {@link SalesCarriers} entity.
 */
export class SalesCarriersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesCarriers<T>, T> {
  /**
   * Returns a request builder for querying all `SalesCarriers` entities.
   * @returns A request builder for creating requests to retrieve all `SalesCarriers` entities.
   */
  getAll(): GetAllRequestBuilder<SalesCarriers<T>, T> {
    return new GetAllRequestBuilder<SalesCarriers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesCarriers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesCarriers`.
   */
  create(entity: SalesCarriers<T>): CreateRequestBuilder<SalesCarriers<T>, T> {
    return new CreateRequestBuilder<SalesCarriers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesCarriers` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesCarriers.dataAreaId}.
   * @param carrierName Key property. See {@link SalesCarriers.carrierName}.
   * @returns A request builder for creating requests to retrieve one `SalesCarriers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    carrierName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesCarriers<T>, T> {
    return new GetByKeyRequestBuilder<SalesCarriers<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CarrierName: carrierName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesCarriers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesCarriers`.
   */
  update(entity: SalesCarriers<T>): UpdateRequestBuilder<SalesCarriers<T>, T> {
    return new UpdateRequestBuilder<SalesCarriers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesCarriers`.
   * @param dataAreaId Key property. See {@link SalesCarriers.dataAreaId}.
   * @param carrierName Key property. See {@link SalesCarriers.carrierName}.
   * @returns A request builder for creating requests that delete an entity of type `SalesCarriers`.
   */
  delete(
    dataAreaId: string,
    carrierName: string
  ): DeleteRequestBuilder<SalesCarriers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesCarriers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesCarriers` by taking the entity as a parameter.
   */
  delete(entity: SalesCarriers<T>): DeleteRequestBuilder<SalesCarriers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    carrierName?: string
  ): DeleteRequestBuilder<SalesCarriers<T>, T> {
    return new DeleteRequestBuilder<SalesCarriers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesCarriers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CarrierName: carrierName!
          }
    );
  }
}
